import { fromEquals } from "./Eq.mjs";
import { SK, flow, identity, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { has, isLeft, isNone, isSome, none, some } from "./internal.mjs";
import { separated } from "./Separated.mjs";
import { Ord } from "./string.mjs";
import { wiltDefault, witherDefault } from "./Witherable.mjs";
const fromRecord = (r)=>Object.assign({}, r);
const toRecord = (r)=>Object.assign({}, r);
const size = (r)=>Object.keys(r).length;
const isEmpty = (r)=>{
    for(const k in r)if (has.call(r, k)) return false;
    return true;
};
const keys_ = (O)=>(r)=>Object.keys(r).sort(O.compare);
const keys = /*#__PURE__*/ keys_(Ord);
function collect(O) {
    if ('function' == typeof O) return collect(Ord)(O);
    const keysO = keys_(O);
    return (f)=>(r)=>{
            const out = [];
            for (const key of keysO(r))out.push(f(key, r[key]));
            return out;
        };
}
const toReadonlyArray = /*#__PURE__*/ collect(Ord)((k, a)=>[
        k,
        a
    ]);
function toUnfoldable(U) {
    return (r)=>{
        const sas = toReadonlyArray(r);
        const len = sas.length;
        return U.unfold(0, (b)=>b < len ? some([
                sas[b],
                b + 1
            ]) : none);
    };
}
const upsertAt = (k, a)=>(r)=>{
        if (has.call(r, k) && r[k] === a) return r;
        const out = Object.assign({}, r);
        out[k] = a;
        return out;
    };
const ReadonlyRecord_has = (k, r)=>has.call(r, k);
function deleteAt(k) {
    return (r)=>{
        if (!has.call(r, k)) return r;
        const out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
const updateAt = (k, a)=>(r)=>{
        if (!ReadonlyRecord_has(k, r)) return none;
        if (r[k] === a) return some(r);
        const out = Object.assign({}, r);
        out[k] = a;
        return some(out);
    };
const modifyAt = (k, f)=>(r)=>{
        if (!ReadonlyRecord_has(k, r)) return none;
        const next = f(r[k]);
        if (next === r[k]) return some(r);
        const out = Object.assign({}, r);
        out[k] = next;
        return some(out);
    };
function pop(k) {
    const deleteAtk = deleteAt(k);
    return (r)=>{
        const oa = lookup(k, r);
        return isNone(oa) ? none : some([
            oa.value,
            deleteAtk(r)
        ]);
    };
}
function isSubrecord(E) {
    return (me, that)=>{
        if (void 0 === that) {
            const isSubrecordE = isSubrecord(E);
            return (that)=>isSubrecordE(that, me);
        }
        for(const k in me)if (!has.call(that, k) || !E.equals(me[k], that[k])) return false;
        return true;
    };
}
function lookup(k, r) {
    if (void 0 === r) return (r)=>lookup(k, r);
    return has.call(r, k) ? some(r[k]) : none;
}
const empty = {};
function mapWithIndex(f) {
    return (r)=>{
        const out = {};
        for(const k in r)if (has.call(r, k)) out[k] = f(k, r[k]);
        return out;
    };
}
function map(f) {
    return mapWithIndex((_, a)=>f(a));
}
function reduceWithIndex(...args) {
    if (2 === args.length) return reduceWithIndex(Ord)(...args);
    const keysO = keys_(args[0]);
    return (b, f)=>(fa)=>{
            let out = b;
            const ks = keysO(fa);
            const len = ks.length;
            for(let i = 0; i < len; i++){
                const k = ks[i];
                out = f(k, out, fa[k]);
            }
            return out;
        };
}
function foldMapWithIndex(O) {
    if ('compare' in O) {
        const keysO = keys_(O);
        return (M)=>(f)=>(fa)=>{
                    let out = M.empty;
                    const ks = keysO(fa);
                    const len = ks.length;
                    for(let i = 0; i < len; i++){
                        const k = ks[i];
                        out = M.concat(out, f(k, fa[k]));
                    }
                    return out;
                };
    }
    return foldMapWithIndex(Ord)(O);
}
function reduceRightWithIndex(...args) {
    if (2 === args.length) return reduceRightWithIndex(Ord)(...args);
    const keysO = keys_(args[0]);
    return (b, f)=>(fa)=>{
            let out = b;
            const ks = keysO(fa);
            const len = ks.length;
            for(let i = len - 1; i >= 0; i--){
                const k = ks[i];
                out = f(k, fa[k], out);
            }
            return out;
        };
}
const singleton = (k, a)=>({
        [k]: a
    });
function traverseWithIndex(F) {
    const traverseWithIndexOF = _traverseWithIndex(Ord)(F);
    return (f)=>(ta)=>traverseWithIndexOF(ta, f);
}
function traverse(F) {
    const traverseOF = _traverse(Ord)(F);
    return (f)=>(ta)=>traverseOF(ta, f);
}
function sequence(F) {
    return _sequence(Ord)(F);
}
const wither = (F)=>{
    const traverseF = traverse(F);
    return (f)=>(fa)=>F.map(pipe(fa, traverseF(f)), compact);
};
const wilt = (F)=>{
    const traverseF = traverse(F);
    return (f)=>(fa)=>F.map(pipe(fa, traverseF(f)), separate);
};
function partitionMapWithIndex(f) {
    return (r)=>{
        const left = {};
        const right = {};
        for(const k in r)if (has.call(r, k)) {
            const e = f(k, r[k]);
            switch(e._tag){
                case 'Left':
                    left[k] = e.left;
                    break;
                case 'Right':
                    right[k] = e.right;
                    break;
            }
        }
        return separated(left, right);
    };
}
function partitionWithIndex(predicateWithIndex) {
    return (r)=>{
        const left = {};
        const right = {};
        for(const k in r)if (has.call(r, k)) {
            const a = r[k];
            if (predicateWithIndex(k, a)) right[k] = a;
            else left[k] = a;
        }
        return separated(left, right);
    };
}
function filterMapWithIndex(f) {
    return (r)=>{
        const out = {};
        for(const k in r)if (has.call(r, k)) {
            const ob = f(k, r[k]);
            if (isSome(ob)) out[k] = ob.value;
        }
        return out;
    };
}
function filterWithIndex(predicateWithIndex) {
    return (fa)=>{
        const out = {};
        let changed = false;
        for(const key in fa)if (has.call(fa, key)) {
            const a = fa[key];
            if (predicateWithIndex(key, a)) out[key] = a;
            else changed = true;
        }
        return changed ? out : fa;
    };
}
function fromFoldable(M, F) {
    const fromFoldableMapM = fromFoldableMap(M, F);
    return (fka)=>fromFoldableMapM(fka, identity);
}
function fromFoldableMap(M, F) {
    return (ta, f)=>F.reduce(ta, {}, (r, a)=>{
            const [k, b] = f(a);
            r[k] = has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
        });
}
const toEntries = toReadonlyArray;
const fromEntries = (fa)=>{
    const out = {};
    for (const a of fa)out[a[0]] = a[1];
    return out;
};
function every(predicate) {
    return (r)=>{
        for(const k in r)if (!predicate(r[k])) return false;
        return true;
    };
}
function ReadonlyRecord_some(predicate) {
    return (r)=>{
        for(const k in r)if (predicate(r[k])) return true;
        return false;
    };
}
function elem(E) {
    return (a, fa)=>{
        if (void 0 === fa) {
            const elemE = elem(E);
            return (fa)=>elemE(a, fa);
        }
        for(const k in fa)if (E.equals(fa[k], a)) return true;
        return false;
    };
}
const union = (M)=>(second)=>(first)=>{
            if (isEmpty(first)) return second;
            if (isEmpty(second)) return first;
            const out = {};
            for(const k in first)if (ReadonlyRecord_has(k, second)) out[k] = M.concat(first[k], second[k]);
            else out[k] = first[k];
            for(const k in second)if (!ReadonlyRecord_has(k, out)) out[k] = second[k];
            return out;
        };
const intersection = (M)=>(second)=>(first)=>{
            if (isEmpty(first) || isEmpty(second)) return empty;
            const out = {};
            for(const k in first)if (ReadonlyRecord_has(k, second)) out[k] = M.concat(first[k], second[k]);
            return out;
        };
const difference = (second)=>(first)=>{
        if (isEmpty(first)) return second;
        if (isEmpty(second)) return first;
        const out = {};
        for(const k in first)if (!ReadonlyRecord_has(k, second)) out[k] = first[k];
        for(const k in second)if (!ReadonlyRecord_has(k, first)) out[k] = second[k];
        return out;
    };
const _map = (fa, f)=>pipe(fa, map(f));
const _mapWithIndex = (fa, f)=>pipe(fa, mapWithIndex(f));
const _reduce = (O)=>{
    const reduceO = reduce(O);
    return (fa, b, f)=>pipe(fa, reduceO(b, f));
};
const _foldMap = (O)=>(M)=>{
        const foldMapM = foldMap(O)(M);
        return (fa, f)=>pipe(fa, foldMapM(f));
    };
const _reduceRight = (O)=>{
    const reduceRightO = reduceRight(O);
    return (fa, b, f)=>pipe(fa, reduceRightO(b, f));
};
const _filter = (fa, predicate)=>pipe(fa, filter(predicate));
const _filterMap = (fa, f)=>pipe(fa, filterMap(f));
const _partition = (fa, predicate)=>pipe(fa, partition(predicate));
const _partitionMap = (fa, f)=>pipe(fa, partitionMap(f));
const _reduceWithIndex = (O)=>{
    const reduceWithIndexO = reduceWithIndex(O);
    return (fa, b, f)=>pipe(fa, reduceWithIndexO(b, f));
};
const _foldMapWithIndex = (O)=>{
    const foldMapWithIndexO = foldMapWithIndex(O);
    return (M)=>{
        const foldMapWithIndexM = foldMapWithIndexO(M);
        return (fa, f)=>pipe(fa, foldMapWithIndexM(f));
    };
};
const _reduceRightWithIndex = (O)=>{
    const reduceRightWithIndexO = reduceRightWithIndex(O);
    return (fa, b, f)=>pipe(fa, reduceRightWithIndexO(b, f));
};
const _partitionMapWithIndex = (fa, f)=>pipe(fa, partitionMapWithIndex(f));
const _partitionWithIndex = (fa, predicateWithIndex)=>pipe(fa, partitionWithIndex(predicateWithIndex));
const _filterMapWithIndex = (fa, f)=>pipe(fa, filterMapWithIndex(f));
const _filterWithIndex = (fa, predicateWithIndex)=>pipe(fa, filterWithIndex(predicateWithIndex));
const _traverse = (O)=>{
    const traverseWithIndexO = _traverseWithIndex(O);
    return (F)=>{
        const traverseWithIndexOF = traverseWithIndexO(F);
        return (ta, f)=>traverseWithIndexOF(ta, flow(SK, f));
    };
};
const _sequence = (O)=>{
    const traverseO = _traverse(O);
    return (F)=>{
        const traverseOF = traverseO(F);
        return (ta)=>traverseOF(ta, identity);
    };
};
const _traverseWithIndex = (O)=>(F)=>{
        const keysO = keys_(O);
        return (ta, f)=>{
            const ks = keysO(ta);
            if (0 === ks.length) return F.of(empty);
            let fr = F.of({});
            for (const key of ks)fr = F.ap(F.map(fr, (r)=>(b)=>Object.assign({}, r, {
                        [key]: b
                    })), f(key, ta[key]));
            return fr;
        };
    };
const filter = (predicate)=>filterWithIndex((_, a)=>predicate(a));
const filterMap = (f)=>filterMapWithIndex((_, a)=>f(a));
const partition = (predicate)=>partitionWithIndex((_, a)=>predicate(a));
const partitionMap = (f)=>partitionMapWithIndex((_, a)=>f(a));
function reduce(...args) {
    if (1 === args.length) {
        const reduceWithIndexO = reduceWithIndex(args[0]);
        return (b, f)=>reduceWithIndexO(b, (_, b, a)=>f(b, a));
    }
    return reduce(Ord)(...args);
}
function foldMap(O) {
    if ('compare' in O) {
        const foldMapWithIndexO = foldMapWithIndex(O);
        return (M)=>{
            const foldMapWithIndexM = foldMapWithIndexO(M);
            return (f)=>foldMapWithIndexM((_, a)=>f(a));
        };
    }
    return foldMap(Ord)(O);
}
function reduceRight(...args) {
    if (1 === args.length) {
        const reduceRightWithIndexO = reduceRightWithIndex(args[0]);
        return (b, f)=>reduceRightWithIndexO(b, (_, b, a)=>f(b, a));
    }
    return reduceRight(Ord)(...args);
}
const compact = (r)=>{
    const out = {};
    for(const k in r)if (has.call(r, k)) {
        const oa = r[k];
        if (isSome(oa)) out[k] = oa.value;
    }
    return out;
};
const separate = (r)=>{
    const left = {};
    const right = {};
    for(const k in r)if (has.call(r, k)) {
        const e = r[k];
        if (isLeft(e)) left[k] = e.left;
        else right[k] = e.right;
    }
    return separated(left, right);
};
const URI = 'ReadonlyRecord';
function getShow(O) {
    if ('compare' in O) return (S)=>({
            show: (r)=>{
                const elements = collect(O)((k, a)=>`${JSON.stringify(k)}: ${S.show(a)}`)(r).join(', ');
                return '' === elements ? '{}' : `{ ${elements} }`;
            }
        });
    return getShow(Ord)(O);
}
function getEq(E) {
    const isSubrecordE = isSubrecord(E);
    return fromEquals((x, y)=>isSubrecordE(x)(y) && isSubrecordE(y)(x));
}
function getMonoid(S) {
    return {
        concat: (first, second)=>{
            if (isEmpty(first)) return second;
            if (isEmpty(second)) return first;
            const r = Object.assign({}, first);
            for(const k in second)if (has.call(second, k)) r[k] = has.call(first, k) ? S.concat(first[k], second[k]) : second[k];
            return r;
        },
        empty
    };
}
const Functor = {
    URI,
    map: _map
};
const ReadonlyRecord_flap = /*#__PURE__*/ flap(Functor);
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const getFoldable = (O)=>({
        URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O)
    });
const getFoldableWithIndex = (O)=>({
        URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O)
    });
const Compactable = {
    URI,
    compact,
    separate
};
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const FilterableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
const getTraversable = (O)=>({
        URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: _traverse(O),
        sequence: _sequence(O)
    });
const getTraversableWithIndex = (O)=>({
        URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O),
        traverse: _traverse(O),
        sequence: _sequence(O),
        traverseWithIndex: _traverseWithIndex(O)
    });
const getWitherable = (O)=>{
    const T = getTraversable(O);
    return {
        URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: T.traverse,
        sequence: T.sequence,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: witherDefault(T, Compactable),
        wilt: wiltDefault(T, Compactable)
    };
};
const getUnionSemigroup = (S)=>{
    const unionS = union(S);
    return {
        concat: (first, second)=>unionS(second)(first)
    };
};
const getUnionMonoid = (S)=>({
        concat: getUnionSemigroup(S).concat,
        empty
    });
const getIntersectionSemigroup = (S)=>{
    const intersectionS = intersection(S);
    return {
        concat: (first, second)=>intersectionS(second)(first)
    };
};
const getDifferenceMagma = ()=>({
        concat: (first, second)=>difference(second)(first)
    });
const Foldable = {
    URI,
    reduce: /*#__PURE__*/ _reduce(Ord),
    foldMap: /*#__PURE__*/ _foldMap(Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(Ord)
};
const FoldableWithIndex = {
    URI,
    reduce: /*#__PURE__*/ _reduce(Ord),
    foldMap: /*#__PURE__*/ _foldMap(Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(Ord),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(Ord),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(Ord),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(Ord)
};
const Traversable = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(Ord),
    foldMap: /*#__PURE__*/ _foldMap(Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(Ord),
    traverse: /*#__PURE__*/ _traverse(Ord),
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: /*#__PURE__*/ _reduce(Ord),
    foldMap: /*#__PURE__*/ _foldMap(Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(Ord),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(Ord),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(Ord),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(Ord),
    traverse: /*#__PURE__*/ _traverse(Ord),
    sequence,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(Ord)
};
const _wither = /*#__PURE__*/ witherDefault(Traversable, Compactable);
const _wilt = /*#__PURE__*/ wiltDefault(Traversable, Compactable);
const Witherable = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(Ord),
    foldMap: /*#__PURE__*/ _foldMap(Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(Ord),
    traverse: /*#__PURE__*/ _traverse(Ord),
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
const insertAt = upsertAt;
function ReadonlyRecord_hasOwnProperty(k, r) {
    return has.call(void 0 === r ? this : r, k);
}
const readonlyRecord = {
    URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(Ord),
    foldMap: /*#__PURE__*/ _foldMap(Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(Ord),
    traverse: /*#__PURE__*/ _traverse(Ord),
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(Ord),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(Ord),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(Ord),
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(Ord),
    wither: _wither,
    wilt: _wilt
};
export { Compactable, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, Functor, FunctorWithIndex, Traversable, TraversableWithIndex, URI, Witherable, _filter, _filterMap, _filterMapWithIndex, _filterWithIndex, _foldMap, _foldMapWithIndex, _map, _mapWithIndex, _partition, _partitionMap, _partitionMapWithIndex, _partitionWithIndex, _reduce, _reduceRight, _reduceRightWithIndex, _reduceWithIndex, _sequence, _traverse, collect, compact, deleteAt, difference, elem, empty, every, filter, filterMap, filterMapWithIndex, filterWithIndex, ReadonlyRecord_flap as flap, foldMap, foldMapWithIndex, fromEntries, fromFoldable, fromFoldableMap, fromRecord, getDifferenceMagma, getEq, getFoldable, getFoldableWithIndex, getIntersectionSemigroup, getMonoid, getShow, getTraversable, getTraversableWithIndex, getUnionMonoid, getUnionSemigroup, getWitherable, ReadonlyRecord_has as has, ReadonlyRecord_hasOwnProperty as hasOwnProperty, insertAt, intersection, isEmpty, isSubrecord, keys, lookup, map, mapWithIndex, modifyAt, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, pop, readonlyRecord, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex, separate, sequence, singleton, size, ReadonlyRecord_some as some, toEntries, toReadonlyArray, toRecord, toUnfoldable, traverse, traverseWithIndex, union, updateAt, upsertAt, wilt, wither };
