import { fromEquals } from "./Eq.mjs";
import { SK as external_function_mjs_SK, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { isLeft, isNone, isSome, none, some } from "./internal.mjs";
import { map } from "./Option.mjs";
import { separated } from "./Separated.mjs";
import { wiltDefault, witherDefault } from "./Witherable.mjs";
const fromMap = (m)=>new Map(m);
function toMap(m) {
    return new Map(m);
}
function getShow(SK, SA) {
    return {
        show: (m)=>{
            const entries = [];
            m.forEach((a, k)=>{
                entries.push(`[${SK.show(k)}, ${SA.show(a)}]`);
            });
            return `new Map([${entries.sort().join(', ')}])`;
        }
    };
}
const size = (m)=>m.size;
const isEmpty = (m)=>0 === m.size;
function member(E) {
    const lookupE = lookup(E);
    return (k, m)=>{
        if (void 0 === m) {
            const memberE = member(E);
            return (m)=>memberE(k, m);
        }
        return isSome(lookupE(k, m));
    };
}
function elem(E) {
    return (a, m)=>{
        if (void 0 === m) {
            const elemE = elem(E);
            return (m)=>elemE(a, m);
        }
        const values = m.values();
        let e;
        while(!(e = values.next()).done){
            const v = e.value;
            if (E.equals(a, v)) return true;
        }
        return false;
    };
}
const keys = (O)=>(m)=>Array.from(m.keys()).sort(O.compare);
const ReadonlyMap_values = (O)=>(m)=>Array.from(m.values()).sort(O.compare);
function collect(O) {
    const keysO = keys(O);
    return (f)=>(m)=>{
            const out = [];
            const ks = keysO(m);
            for (const key of ks)out.push(f(key, m.get(key)));
            return out;
        };
}
const toReadonlyArray = (O)=>collect(O)((k, a)=>[
            k,
            a
        ]);
function toUnfoldable(ord, U) {
    const toReadonlyArrayO = toReadonlyArray(ord);
    return (d)=>{
        const kas = toReadonlyArrayO(d);
        const len = kas.length;
        return U.unfold(0, (b)=>b < len ? some([
                kas[b],
                b + 1
            ]) : none);
    };
}
const upsertAt = (E)=>{
    const lookupWithKeyE = lookupWithKey(E);
    return (k, a)=>{
        const lookupWithKeyEk = lookupWithKeyE(k);
        return (m)=>{
            const found = lookupWithKeyEk(m);
            if (isNone(found)) {
                const out = new Map(m);
                out.set(k, a);
                return out;
            }
            if (found.value[1] !== a) {
                const out = new Map(m);
                out.set(found.value[0], a);
                return out;
            }
            return m;
        };
    };
};
const deleteAt = (E)=>{
    const lookupWithKeyE = lookupWithKey(E);
    return (k)=>(m)=>{
            const found = lookupWithKeyE(k, m);
            if (isSome(found)) {
                const r = new Map(m);
                r.delete(found.value[0]);
                return r;
            }
            return m;
        };
};
const updateAt = (E)=>{
    const modifyAtE = modifyAt(E);
    return (k, a)=>modifyAtE(k, ()=>a);
};
const modifyAt = (E)=>{
    const lookupWithKeyE = lookupWithKey(E);
    return (k, f)=>(m)=>{
            const found = lookupWithKeyE(k, m);
            if (isNone(found)) return none;
            const [fk, fv] = found.value;
            const next = f(fv);
            if (next === fv) return some(m);
            const r = new Map(m);
            r.set(fk, next);
            return some(r);
        };
};
function pop(E) {
    const lookupE = lookup(E);
    const deleteAtE = deleteAt(E);
    return (k)=>{
        const deleteAtEk = deleteAtE(k);
        return (m)=>pipe(lookupE(k, m), map((a)=>[
                    a,
                    deleteAtEk(m)
                ]));
    };
}
function lookupWithKey(E) {
    return (k, m)=>{
        if (void 0 === m) {
            const lookupWithKeyE = lookupWithKey(E);
            return (m)=>lookupWithKeyE(k, m);
        }
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [ka, a] = e.value;
            if (E.equals(ka, k)) return some([
                ka,
                a
            ]);
        }
        return none;
    };
}
function lookup(E) {
    const lookupWithKeyE = lookupWithKey(E);
    return (k, m)=>{
        if (void 0 === m) {
            const lookupE = lookup(E);
            return (m)=>lookupE(k, m);
        }
        return pipe(lookupWithKeyE(k, m), map(([_, a])=>a));
    };
}
function isSubmap(SK, SA) {
    const lookupWithKeyS = lookupWithKey(SK);
    return (me, that)=>{
        if (void 0 === that) {
            const isSubmapSKSA = isSubmap(SK, SA);
            return (that)=>isSubmapSKSA(that, me);
        }
        const entries = me.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            const d2OptA = lookupWithKeyS(k, that);
            if (isNone(d2OptA) || !SK.equals(k, d2OptA.value[0]) || !SA.equals(a, d2OptA.value[1])) return false;
        }
        return true;
    };
}
const empty = new Map();
function getEq(SK, SA) {
    const isSubmapSKSA = isSubmap(SK, SA);
    return fromEquals((x, y)=>isSubmapSKSA(x, y) && isSubmapSKSA(y, x));
}
function getMonoid(SK, SA) {
    const lookupWithKeyS = lookupWithKey(SK);
    return {
        concat: (mx, my)=>{
            if (isEmpty(mx)) return my;
            if (isEmpty(my)) return mx;
            const r = new Map(mx);
            const entries = my.entries();
            let e;
            while(!(e = entries.next()).done){
                const [k, a] = e.value;
                const mxOptA = lookupWithKeyS(k, mx);
                if (isSome(mxOptA)) r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a));
                else r.set(k, a);
            }
            return r;
        },
        empty
    };
}
const singleton = (k, a)=>new Map([
        [
            k,
            a
        ]
    ]);
function fromFoldable(E, M, F) {
    return (fka)=>{
        const lookupWithKeyE = lookupWithKey(E);
        return F.reduce(fka, new Map(), (b, [k, a])=>{
            const bOpt = lookupWithKeyE(k, b);
            if (isSome(bOpt)) b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
            else b.set(k, a);
            return b;
        });
    };
}
const _mapWithIndex = (fa, f)=>{
    const m = new Map();
    const entries = fa.entries();
    let e;
    while(!(e = entries.next()).done){
        const [key, a] = e.value;
        m.set(key, f(key, a));
    }
    return m;
};
const partitionMapWithIndex = (f)=>(fa)=>{
        const left = new Map();
        const right = new Map();
        const entries = fa.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            const ei = f(k, a);
            if (isLeft(ei)) left.set(k, ei.left);
            else right.set(k, ei.right);
        }
        return separated(left, right);
    };
function partitionWithIndex(predicateWithIndex) {
    return (m)=>{
        const left = new Map();
        const right = new Map();
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            if (predicateWithIndex(k, a)) right.set(k, a);
            else left.set(k, a);
        }
        return separated(left, right);
    };
}
const filterMapWithIndex = (f)=>(fa)=>{
        const m = new Map();
        const entries = fa.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            const o = f(k, a);
            if (isSome(o)) m.set(k, o.value);
        }
        return m;
    };
function filterWithIndex(predicateWithIndex) {
    return (m)=>{
        const out = new Map();
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            if (predicateWithIndex(k, a)) out.set(k, a);
        }
        return out;
    };
}
const _map = (fa, f)=>_mapWithIndex(fa, (_, a)=>f(a));
const _filter = (fa, p)=>_filterWithIndex(fa, (_, a)=>p(a));
const _filterMap = (fa, f)=>_filterMapWithIndex(fa, (_, a)=>f(a));
const _partition = (fa, predicate)=>_partitionWithIndex(fa, (_, a)=>predicate(a));
const _partitionMap = (fa, f)=>_partitionMapWithIndex(fa, (_, a)=>f(a));
const _filterWithIndex = (fa, p)=>pipe(fa, filterWithIndex(p));
const _filterMapWithIndex = (fa, f)=>pipe(fa, filterMapWithIndex(f));
const _partitionWithIndex = (fa, p)=>pipe(fa, partitionWithIndex(p));
const _partitionMapWithIndex = (fa, f)=>pipe(fa, partitionMapWithIndex(f));
const compact = (fa)=>{
    const m = new Map();
    const entries = fa.entries();
    let e;
    while(!(e = entries.next()).done){
        const [k, oa] = e.value;
        if (isSome(oa)) m.set(k, oa.value);
    }
    return m;
};
const filter = (predicate)=>(fa)=>_filter(fa, predicate);
const filterMap = (f)=>(fa)=>_filterMap(fa, f);
const ReadonlyMap_map = (f)=>(fa)=>_map(fa, f);
const mapWithIndex = (f)=>(fa)=>_mapWithIndex(fa, f);
const partition = (predicate)=>(fa)=>_partition(fa, predicate);
const partitionMap = (f)=>(fa)=>_partitionMap(fa, f);
const separate = (fa)=>{
    const left = new Map();
    const right = new Map();
    const entries = fa.entries();
    let e;
    while(!(e = entries.next()).done){
        const [k, ei] = e.value;
        if (isLeft(ei)) left.set(k, ei.left);
        else right.set(k, ei.right);
    }
    return separated(left, right);
};
const URI = 'ReadonlyMap';
const getUnionSemigroup = (E, S)=>{
    const unionES = union(E, S);
    return {
        concat: (first, second)=>unionES(second)(first)
    };
};
const getUnionMonoid = (E, S)=>({
        concat: getUnionSemigroup(E, S).concat,
        empty
    });
const getIntersectionSemigroup = (E, S)=>{
    const intersectionES = intersection(E, S);
    return {
        concat: (first, second)=>intersectionES(second)(first)
    };
};
const getDifferenceMagma = (E)=>()=>{
        const differenceE = difference(E);
        return {
            concat: (first, second)=>differenceE(second)(first)
        };
    };
function getFilterableWithIndex() {
    return {
        URI,
        _E: void 0,
        map: _map,
        mapWithIndex: _mapWithIndex,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
    };
}
const Functor = {
    URI,
    map: _map
};
const ReadonlyMap_flap = /*#__PURE__*/ flap(Functor);
const getFunctorWithIndex = ()=>({
        URI,
        _E: void 0,
        map: _map,
        mapWithIndex: _mapWithIndex
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
const reduce = (O)=>{
    const reduceWithIndexO = reduceWithIndex(O);
    return (b, f)=>reduceWithIndexO(b, (_, b, a)=>f(b, a));
};
const foldMap = (O)=>{
    const foldMapWithIndexO = foldMapWithIndex(O);
    return (M)=>{
        const foldMapWithIndexOM = foldMapWithIndexO(M);
        return (f)=>foldMapWithIndexOM((_, a)=>f(a));
    };
};
const reduceRight = (O)=>{
    const reduceRightWithIndexO = reduceRightWithIndex(O);
    return (b, f)=>reduceRightWithIndexO(b, (_, b, a)=>f(b, a));
};
const getFoldable = (O)=>{
    const reduceO = reduce(O);
    const foldMapO = foldMap(O);
    const reduceRightO = reduceRight(O);
    return {
        URI,
        _E: void 0,
        reduce: (fa, b, f)=>pipe(fa, reduceO(b, f)),
        foldMap: (M)=>{
            const foldMapOM = foldMapO(M);
            return (fa, f)=>pipe(fa, foldMapOM(f));
        },
        reduceRight: (fa, b, f)=>pipe(fa, reduceRightO(b, f))
    };
};
const reduceWithIndex = (O)=>{
    const keysO = keys(O);
    return (b, f)=>(m)=>{
            let out = b;
            for (const k of keysO(m))out = f(k, out, m.get(k));
            return out;
        };
};
const foldMapWithIndex = (O)=>{
    const keysO = keys(O);
    return (M)=>(f)=>(m)=>{
                let out = M.empty;
                for (const k of keysO(m))out = M.concat(out, f(k, m.get(k)));
                return out;
            };
};
const reduceRightWithIndex = (O)=>{
    const keysO = keys(O);
    return (b, f)=>(m)=>{
            let out = b;
            const ks = keysO(m);
            const len = ks.length;
            for(let i = len - 1; i >= 0; i--){
                const k = ks[i];
                out = f(k, m.get(k), out);
            }
            return out;
        };
};
const getFoldableWithIndex = (O)=>{
    const F = getFoldable(O);
    const reduceWithIndexO = reduceWithIndex(O);
    const foldMapWithIndexO = foldMapWithIndex(O);
    const reduceRightWithIndexO = reduceRightWithIndex(O);
    return {
        URI,
        _E: void 0,
        reduce: F.reduce,
        foldMap: F.foldMap,
        reduceRight: F.reduceRight,
        reduceWithIndex: (fa, b, f)=>pipe(fa, reduceWithIndexO(b, f)),
        foldMapWithIndex: (M)=>{
            const foldMapWithIndexOM = foldMapWithIndexO(M);
            return (fa, f)=>pipe(fa, foldMapWithIndexOM(f));
        },
        reduceRightWithIndex: (fa, b, f)=>pipe(fa, reduceRightWithIndexO(b, f))
    };
};
const getTraversable = (O)=>{
    const TWI = getTraversableWithIndex(O);
    const F = getFoldable(O);
    return {
        URI,
        _E: void 0,
        map: _map,
        reduce: F.reduce,
        foldMap: F.foldMap,
        reduceRight: F.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence
    };
};
const getTraversableWithIndex = (O)=>{
    const FWI = getFoldableWithIndex(O);
    const keysO = keys(O);
    const traverseWithIndex = (F)=>(ta, f)=>{
            let fm = F.of(new Map());
            const ks = keysO(ta);
            const len = ks.length;
            for(let i = 0; i < len; i++){
                const key = ks[i];
                const a = ta.get(key);
                fm = F.ap(F.map(fm, (m)=>(b)=>m.set(key, b)), f(key, a));
            }
            return fm;
        };
    const traverse = (F)=>{
        const traverseWithIndexF = traverseWithIndex(F);
        return (ta, f)=>traverseWithIndexF(ta, (_, a)=>f(a));
    };
    const sequence = (F)=>{
        const traverseWithIndexF = traverseWithIndex(F);
        return (ta)=>traverseWithIndexF(ta, external_function_mjs_SK);
    };
    return {
        URI,
        _E: void 0,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: FWI.reduce,
        foldMap: FWI.foldMap,
        reduceRight: FWI.reduceRight,
        reduceWithIndex: FWI.reduceWithIndex,
        foldMapWithIndex: FWI.foldMapWithIndex,
        reduceRightWithIndex: FWI.reduceRightWithIndex,
        traverse,
        sequence,
        traverseWithIndex
    };
};
function getWitherable(O) {
    const TWI = getTraversableWithIndex(O);
    return {
        URI,
        _E: void 0,
        map: _map,
        compact,
        separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: TWI.reduce,
        foldMap: TWI.foldMap,
        reduceRight: TWI.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: TWI.reduceWithIndex,
        foldMapWithIndex: TWI.foldMapWithIndex,
        reduceRightWithIndex: TWI.reduceRightWithIndex,
        traverseWithIndex: TWI.traverseWithIndex,
        wilt: wiltDefault(TWI, Compactable),
        wither: witherDefault(TWI, Compactable)
    };
}
const union = (E, M)=>{
    const lookupE = lookup(E);
    return (second)=>(first)=>{
            if (isEmpty(first)) return second;
            if (isEmpty(second)) return first;
            const out = new Map();
            const firstEntries = first.entries();
            let e;
            while(!(e = firstEntries.next()).done){
                const [k, a] = e.value;
                const oka = lookupE(k)(second);
                if (isSome(oka)) out.set(k, M.concat(a, oka.value));
                else out.set(k, a);
            }
            const secondEntries = second.entries();
            while(!(e = secondEntries.next()).done){
                const [k, a] = e.value;
                const oka = lookupE(k)(out);
                if (isNone(oka)) out.set(k, a);
            }
            return out;
        };
};
const intersection = (E, M)=>{
    const lookupE = lookup(E);
    return (second)=>(first)=>{
            if (isEmpty(first) || isEmpty(second)) return empty;
            const out = new Map();
            const entries = first.entries();
            let e;
            while(!(e = entries.next()).done){
                const [k, a] = e.value;
                const oka = lookupE(k)(second);
                if (isSome(oka)) out.set(k, M.concat(a, oka.value));
            }
            return out;
        };
};
const difference = (E)=>{
    const memberE = member(E);
    return (second)=>(first)=>{
            if (isEmpty(first)) return second;
            if (isEmpty(second)) return first;
            const out = new Map();
            const firstEntries = first.entries();
            let e;
            while(!(e = firstEntries.next()).done){
                const [k, a] = e.value;
                if (!memberE(k)(second)) out.set(k, a);
            }
            const secondEntries = second.entries();
            while(!(e = secondEntries.next()).done){
                const [k, a] = e.value;
                if (!memberE(k)(first)) out.set(k, a);
            }
            return out;
        };
};
const insertAt = upsertAt;
const readonlyMap = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
export { Compactable, Filterable, Functor, URI, collect, compact, deleteAt, difference, elem, empty, filter, filterMap, filterMapWithIndex, filterWithIndex, ReadonlyMap_flap as flap, foldMap, foldMapWithIndex, fromFoldable, fromMap, getDifferenceMagma, getEq, getFilterableWithIndex, getFoldable, getFoldableWithIndex, getFunctorWithIndex, getIntersectionSemigroup, getMonoid, getShow, getTraversable, getTraversableWithIndex, getUnionMonoid, getUnionSemigroup, getWitherable, insertAt, intersection, isEmpty, isSubmap, keys, lookup, lookupWithKey, ReadonlyMap_map as map, mapWithIndex, member, modifyAt, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, pop, readonlyMap, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex, separate, singleton, size, toMap, toReadonlyArray, toUnfoldable, union, updateAt, upsertAt, ReadonlyMap_values as values };
