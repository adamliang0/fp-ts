import { pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { isLeft, isNone, isSome, none, some } from "./internal.mjs";
import { map } from "./Option.mjs";
import { difference, elem, foldMap, foldMapWithIndex, getEq, getFoldable, getFoldableWithIndex, getShow, intersection, isEmpty, isSubmap, lookup, member, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex, size, union } from "./ReadonlyMap.mjs";
import { separated } from "./Separated.mjs";
import { wiltDefault, witherDefault } from "./Witherable.mjs";
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if ("function" == typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function Map_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = null != source ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else Map_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const Map_getShow = getShow;
const Map_size = size;
const Map_isEmpty = isEmpty;
const Map_member = member;
const Map_elem = elem;
const Map_keys = (O)=>(m)=>Array.from(m.keys()).sort(O.compare);
const values = (O)=>(m)=>Array.from(m.values()).sort(O.compare);
function collect(O) {
    const keysO = Map_keys(O);
    return (f)=>(m)=>{
            const out = [];
            const ks = keysO(m);
            for (const key of ks)out.push(f(key, m.get(key)));
            return out;
        };
}
function toArray(O) {
    return collect(O)((k, a)=>[
            k,
            a
        ]);
}
function toUnfoldable(ord, U) {
    const toArrayO = toArray(ord);
    return (d)=>{
        const kas = toArrayO(d);
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
            const r = new Map(m);
            r.set(found.value[0], f(found.value[1]));
            return some(r);
        };
};
function pop(E) {
    const lookupE = Map_lookup(E);
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
const Map_lookup = lookup;
const Map_isSubmap = isSubmap;
const Map_getEq = getEq;
function getMonoid(SK, SA) {
    const lookupWithKeyS = lookupWithKey(SK);
    return {
        concat: (mx, my)=>{
            if (Map_isEmpty(mx)) return my;
            if (Map_isEmpty(my)) return mx;
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
        empty: new Map()
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
    return (fa)=>{
        const left = new Map();
        const right = new Map();
        const entries = fa.entries();
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
function filterWithIndex(p) {
    return (m)=>{
        const out = new Map();
        const entries = m.entries();
        let e;
        while(!(e = entries.next()).done){
            const [k, a] = e.value;
            if (p(k, a)) out.set(k, a);
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
const Map_map = (f)=>(fa)=>_map(fa, f);
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
const URI = 'Map';
const getUnionSemigroup = (E, S)=>{
    const unionES = Map_union(E, S);
    return {
        concat: (first, second)=>unionES(second)(first)
    };
};
const getUnionMonoid = (E, S)=>({
        concat: getUnionSemigroup(E, S).concat,
        empty: new Map()
    });
const getIntersectionSemigroup = (E, S)=>{
    const intersectionES = Map_intersection(E, S);
    return {
        concat: (first, second)=>intersectionES(second)(first)
    };
};
const getDifferenceMagma = (E)=>()=>{
        const differenceE = Map_difference(E);
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
const Map_reduce = reduce;
const Map_foldMap = foldMap;
const Map_reduceRight = reduceRight;
const Map_getFoldable = (O)=>_object_spread_props(_object_spread({}, getFoldable(O)), {
        URI
    });
const Map_reduceWithIndex = reduceWithIndex;
const Map_foldMapWithIndex = foldMapWithIndex;
const Map_reduceRightWithIndex = reduceRightWithIndex;
const Map_getFoldableWithIndex = (O)=>_object_spread_props(_object_spread({}, getFoldableWithIndex(O)), {
        URI
    });
const getTraversableWithIndex = (O)=>{
    const FWI = Map_getFoldableWithIndex(O);
    const keysO = Map_keys(O);
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
        return (ta)=>traverseWithIndexF(ta, (_, a)=>a);
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
const Functor = {
    URI,
    map: _map
};
const Map_flap = /*#__PURE__*/ flap(Functor);
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
const copy = (m)=>new Map(m);
const Map_union = (E, M)=>{
    const unionEM = union(E, M);
    return (second)=>(first)=>{
            if (Map_isEmpty(first)) return copy(second);
            if (Map_isEmpty(second)) return copy(first);
            return unionEM(second)(first);
        };
};
const Map_intersection = (E, M)=>{
    const intersectionEM = intersection(E, M);
    return (second)=>(first)=>{
            if (Map_isEmpty(first) || Map_isEmpty(second)) return new Map();
            return intersectionEM(second)(first);
        };
};
const Map_difference = (E)=>{
    const differenceE = difference(E);
    return (second)=>(first)=>{
            if (Map_isEmpty(first)) return copy(second);
            if (Map_isEmpty(second)) return copy(first);
            return differenceE(second)(first);
        };
};
const empty = new Map();
const insertAt = upsertAt;
const map_ = Filterable;
export { Compactable, Filterable, Functor, URI, collect, compact, deleteAt, Map_difference as difference, Map_elem as elem, empty, filter, filterMap, filterMapWithIndex, filterWithIndex, Map_flap as flap, Map_foldMap as foldMap, Map_foldMapWithIndex as foldMapWithIndex, fromFoldable, getDifferenceMagma, Map_getEq as getEq, getFilterableWithIndex, Map_getFoldable as getFoldable, Map_getFoldableWithIndex as getFoldableWithIndex, getIntersectionSemigroup, getMonoid, Map_getShow as getShow, getTraversableWithIndex, getUnionMonoid, getUnionSemigroup, getWitherable, insertAt, Map_intersection as intersection, Map_isEmpty as isEmpty, Map_isSubmap as isSubmap, Map_keys as keys, Map_lookup as lookup, lookupWithKey, Map_map as map, mapWithIndex, map_, Map_member as member, modifyAt, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, pop, Map_reduce as reduce, Map_reduceRight as reduceRight, Map_reduceRightWithIndex as reduceRightWithIndex, Map_reduceWithIndex as reduceWithIndex, separate, singleton, Map_size as size, toArray, toUnfoldable, Map_union as union, updateAt, upsertAt, values };
