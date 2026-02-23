import { Foldable } from "./Array.mjs";
import { pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { has, isNone, none, some } from "./internal.mjs";
import { _filter, _filterMap, _filterMapWithIndex, _filterWithIndex, _foldMap, _foldMapWithIndex, _map, _mapWithIndex, _partition, _partitionMap, _partitionMapWithIndex, _partitionWithIndex, _reduce, _reduceRight, _reduceRightWithIndex, _reduceWithIndex, _sequence, _traverse, compact, difference, elem, every, filter, filterMap, filterMapWithIndex, filterWithIndex, foldMap, foldMapWithIndex, fromFoldable, fromFoldableMap, getEq, getMonoid, getShow, has as external_ReadonlyRecord_mjs_has, hasOwnProperty as external_ReadonlyRecord_mjs_hasOwnProperty, intersection, isEmpty, isSubrecord, lookup, map, mapWithIndex, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex, separate, sequence, singleton, size, some as external_ReadonlyRecord_mjs_some, traverse, traverseWithIndex, union, upsertAt } from "./ReadonlyRecord.mjs";
import { last } from "./Semigroup.mjs";
import { Ord } from "./string.mjs";
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
const Record_size = size;
const Record_isEmpty = isEmpty;
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
const toArray = /*#__PURE__*/ collect(Ord)((k, a)=>[
        k,
        a
    ]);
function toUnfoldable(U) {
    return (r)=>{
        const sas = toArray(r);
        const len = sas.length;
        return U.unfold(0, (b)=>b < len ? some([
                sas[b],
                b + 1
            ]) : none);
    };
}
const Record_upsertAt = upsertAt;
const Record_has = external_ReadonlyRecord_mjs_has;
function deleteAt(k) {
    return (r)=>{
        if (!has.call(r, k)) return r;
        const out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
const updateAt = (k, a)=>modifyAt(k, ()=>a);
const modifyAt = (k, f)=>(r)=>{
        if (!Record_has(k, r)) return none;
        const out = Object.assign({}, r);
        out[k] = f(r[k]);
        return some(out);
    };
function pop(k) {
    const deleteAtk = deleteAt(k);
    return (r)=>{
        const oa = Record_lookup(k, r);
        return isNone(oa) ? none : some([
            oa.value,
            deleteAtk(r)
        ]);
    };
}
const Record_isSubrecord = isSubrecord;
const Record_lookup = lookup;
const Record_mapWithIndex = mapWithIndex;
const Record_map = map;
function Record_reduceWithIndex(...args) {
    return 1 === args.length ? reduceWithIndex(args[0]) : reduceWithIndex(Ord)(...args);
}
function Record_foldMapWithIndex(O) {
    return 'compare' in O ? foldMapWithIndex(O) : foldMapWithIndex(Ord)(O);
}
function Record_reduceRightWithIndex(...args) {
    return 1 === args.length ? reduceRightWithIndex(args[0]) : reduceRightWithIndex(Ord)(...args);
}
const Record_singleton = singleton;
function Record_traverseWithIndex(F) {
    return traverseWithIndex(F);
}
function Record_traverse(F) {
    return traverse(F);
}
function Record_sequence(F) {
    return sequence(F);
}
const wither = (F)=>{
    const traverseF = Record_traverse(F);
    return (f)=>(fa)=>F.map(pipe(fa, traverseF(f)), Record_compact);
};
const wilt = (F)=>{
    const traverseF = Record_traverse(F);
    return (f)=>(fa)=>F.map(pipe(fa, traverseF(f)), Record_separate);
};
const Record_partitionMapWithIndex = partitionMapWithIndex;
function Record_partitionWithIndex(predicateWithIndex) {
    return partitionWithIndex(predicateWithIndex);
}
const Record_filterMapWithIndex = filterMapWithIndex;
function Record_filterWithIndex(predicateWithIndex) {
    return filterWithIndex(predicateWithIndex);
}
function Record_fromFoldable(M, F) {
    return fromFoldable(M, F);
}
const toEntries = toArray;
const fromEntries = (fa)=>Record_fromFoldable(last(), Foldable)(fa);
function Record_fromFoldableMap(M, F) {
    return fromFoldableMap(M, F);
}
const Record_every = every;
const Record_some = external_ReadonlyRecord_mjs_some;
const Record_elem = elem;
const Record_union = (M)=>{
    const unionM = union(M);
    return (second)=>(first)=>{
            if (Record_isEmpty(first)) return _object_spread({}, second);
            if (Record_isEmpty(second)) return _object_spread({}, first);
            return unionM(second)(first);
        };
};
const Record_intersection = (M)=>(second)=>(first)=>{
            if (Record_isEmpty(first) || Record_isEmpty(second)) return {};
            return intersection(M)(second)(first);
        };
const Record_difference = (second)=>(first)=>{
        if (Record_isEmpty(first)) return _object_spread({}, second);
        if (Record_isEmpty(second)) return _object_spread({}, first);
        return difference(second)(first);
    };
const src_Record_map = _map;
const src_Record_mapWithIndex = _mapWithIndex;
const Record_reduce = _reduce;
const Record_foldMap = _foldMap;
const Record_reduceRight = _reduceRight;
const Record_filter = _filter;
const Record_filterMap = _filterMap;
const Record_partition = _partition;
const Record_partitionMap = _partitionMap;
const src_Record_reduceWithIndex = _reduceWithIndex;
const src_Record_foldMapWithIndex = _foldMapWithIndex;
const src_Record_reduceRightWithIndex = _reduceRightWithIndex;
const src_Record_partitionMapWithIndex = _partitionMapWithIndex;
const src_Record_partitionWithIndex = _partitionWithIndex;
const src_Record_filterMapWithIndex = _filterMapWithIndex;
const src_Record_filterWithIndex = _filterWithIndex;
const src_Record_traverse = _traverse;
const src_Record_sequence = _sequence;
const _traverseWithIndex = (O)=>(F)=>{
        const keysO = keys_(O);
        return (ta, f)=>{
            const ks = keysO(ta);
            if (0 === ks.length) return F.of({});
            let fr = F.of({});
            for (const key of ks)fr = F.ap(F.map(fr, (r)=>(b)=>{
                    r[key] = b;
                    return r;
                }), f(key, ta[key]));
            return fr;
        };
    };
const src_Record_filter = filter;
const src_Record_filterMap = filterMap;
const src_Record_partition = partition;
const src_Record_partitionMap = partitionMap;
function src_Record_reduce(...args) {
    return 1 === args.length ? reduce(args[0]) : reduce(Ord)(...args);
}
function src_Record_foldMap(O) {
    return 'compare' in O ? foldMap(O) : foldMap(Ord)(O);
}
function src_Record_reduceRight(...args) {
    return 1 === args.length ? reduceRight(args[0]) : reduceRight(Ord)(...args);
}
const Record_compact = compact;
const Record_separate = separate;
const URI = 'Record';
function Record_getShow(O) {
    return 'compare' in O ? getShow(O) : getShow(Ord)(O);
}
const Record_getEq = getEq;
const Record_getMonoid = getMonoid;
const Functor = {
    URI,
    map: src_Record_map
};
const Record_flap = /*#__PURE__*/ flap(Functor);
const FunctorWithIndex = {
    URI,
    map: src_Record_map,
    mapWithIndex: src_Record_mapWithIndex
};
const getFoldable = (O)=>({
        URI,
        reduce: Record_reduce(O),
        foldMap: Record_foldMap(O),
        reduceRight: Record_reduceRight(O)
    });
const getFoldableWithIndex = (O)=>({
        URI,
        reduce: Record_reduce(O),
        foldMap: Record_foldMap(O),
        reduceRight: Record_reduceRight(O),
        reduceWithIndex: src_Record_reduceWithIndex(O),
        foldMapWithIndex: src_Record_foldMapWithIndex(O),
        reduceRightWithIndex: src_Record_reduceRightWithIndex(O)
    });
const Compactable = {
    URI,
    compact: Record_compact,
    separate: Record_separate
};
const Filterable = {
    URI,
    map: src_Record_map,
    compact: Record_compact,
    separate: Record_separate,
    filter: Record_filter,
    filterMap: Record_filterMap,
    partition: Record_partition,
    partitionMap: Record_partitionMap
};
const FilterableWithIndex = {
    URI,
    map: src_Record_map,
    mapWithIndex: src_Record_mapWithIndex,
    compact: Record_compact,
    separate: Record_separate,
    filter: Record_filter,
    filterMap: Record_filterMap,
    partition: Record_partition,
    partitionMap: Record_partitionMap,
    filterMapWithIndex: src_Record_filterMapWithIndex,
    filterWithIndex: src_Record_filterWithIndex,
    partitionMapWithIndex: src_Record_partitionMapWithIndex,
    partitionWithIndex: src_Record_partitionWithIndex
};
const getTraversable = (O)=>({
        URI,
        map: src_Record_map,
        reduce: Record_reduce(O),
        foldMap: Record_foldMap(O),
        reduceRight: Record_reduceRight(O),
        traverse: src_Record_traverse(O),
        sequence: src_Record_sequence(O)
    });
const getTraversableWithIndex = (O)=>({
        URI,
        map: src_Record_map,
        mapWithIndex: src_Record_mapWithIndex,
        reduce: Record_reduce(O),
        foldMap: Record_foldMap(O),
        reduceRight: Record_reduceRight(O),
        reduceWithIndex: src_Record_reduceWithIndex(O),
        foldMapWithIndex: src_Record_foldMapWithIndex(O),
        reduceRightWithIndex: src_Record_reduceRightWithIndex(O),
        traverse: src_Record_traverse(O),
        sequence: src_Record_sequence(O),
        traverseWithIndex: _traverseWithIndex(O)
    });
const getWitherable = (O)=>{
    const T = getTraversable(O);
    return {
        URI,
        map: src_Record_map,
        reduce: Record_reduce(O),
        foldMap: Record_foldMap(O),
        reduceRight: Record_reduceRight(O),
        traverse: T.traverse,
        sequence: T.sequence,
        compact: Record_compact,
        separate: Record_separate,
        filter: Record_filter,
        filterMap: Record_filterMap,
        partition: Record_partition,
        partitionMap: Record_partitionMap,
        wither: witherDefault(T, Compactable),
        wilt: wiltDefault(T, Compactable)
    };
};
const getUnionSemigroup = (S)=>{
    const unionS = Record_union(S);
    return {
        concat: (first, second)=>unionS(second)(first)
    };
};
const getUnionMonoid = (S)=>({
        concat: getUnionSemigroup(S).concat,
        empty: {}
    });
const getIntersectionSemigroup = (S)=>{
    const intersectionS = Record_intersection(S);
    return {
        concat: (first, second)=>intersectionS(second)(first)
    };
};
const getDifferenceMagma = ()=>({
        concat: (first, second)=>Record_difference(second)(first)
    });
const Record_Foldable = {
    URI,
    reduce: /*#__PURE__*/ Record_reduce(Ord),
    foldMap: /*#__PURE__*/ Record_foldMap(Ord),
    reduceRight: /*#__PURE__*/ Record_reduceRight(Ord)
};
const FoldableWithIndex = {
    URI,
    reduce: /*#__PURE__*/ Record_reduce(Ord),
    foldMap: /*#__PURE__*/ Record_foldMap(Ord),
    reduceRight: /*#__PURE__*/ Record_reduceRight(Ord),
    reduceWithIndex: /*#__PURE__*/ src_Record_reduceWithIndex(Ord),
    foldMapWithIndex: /*#__PURE__*/ src_Record_foldMapWithIndex(Ord),
    reduceRightWithIndex: /*#__PURE__*/ src_Record_reduceRightWithIndex(Ord)
};
const Traversable = {
    URI,
    map: src_Record_map,
    reduce: /*#__PURE__*/ Record_reduce(Ord),
    foldMap: /*#__PURE__*/ Record_foldMap(Ord),
    reduceRight: /*#__PURE__*/ Record_reduceRight(Ord),
    traverse: /*#__PURE__*/ src_Record_traverse(Ord),
    sequence: Record_sequence
};
const TraversableWithIndex = {
    URI,
    map: src_Record_map,
    mapWithIndex: src_Record_mapWithIndex,
    reduce: /*#__PURE__*/ Record_reduce(Ord),
    foldMap: /*#__PURE__*/ Record_foldMap(Ord),
    reduceRight: /*#__PURE__*/ Record_reduceRight(Ord),
    reduceWithIndex: /*#__PURE__*/ src_Record_reduceWithIndex(Ord),
    foldMapWithIndex: /*#__PURE__*/ src_Record_foldMapWithIndex(Ord),
    reduceRightWithIndex: /*#__PURE__*/ src_Record_reduceRightWithIndex(Ord),
    traverse: /*#__PURE__*/ src_Record_traverse(Ord),
    sequence: Record_sequence,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(Ord)
};
const _wither = /*#__PURE__*/ witherDefault(Traversable, Compactable);
const _wilt = /*#__PURE__*/ wiltDefault(Traversable, Compactable);
const Witherable = {
    URI,
    map: src_Record_map,
    reduce: /*#__PURE__*/ Record_reduce(Ord),
    foldMap: /*#__PURE__*/ Record_foldMap(Ord),
    reduceRight: /*#__PURE__*/ Record_reduceRight(Ord),
    traverse: /*#__PURE__*/ src_Record_traverse(Ord),
    sequence: Record_sequence,
    compact: Record_compact,
    separate: Record_separate,
    filter: Record_filter,
    filterMap: Record_filterMap,
    partition: Record_partition,
    partitionMap: Record_partitionMap,
    wither: _wither,
    wilt: _wilt
};
const empty = {};
const insertAt = Record_upsertAt;
const Record_hasOwnProperty = external_ReadonlyRecord_mjs_hasOwnProperty;
const record = {
    URI,
    map: src_Record_map,
    reduce: /*#__PURE__*/ Record_reduce(Ord),
    foldMap: /*#__PURE__*/ Record_foldMap(Ord),
    reduceRight: /*#__PURE__*/ Record_reduceRight(Ord),
    traverse: /*#__PURE__*/ src_Record_traverse(Ord),
    sequence: Record_sequence,
    compact: Record_compact,
    separate: Record_separate,
    filter: Record_filter,
    filterMap: Record_filterMap,
    partition: Record_partition,
    partitionMap: Record_partitionMap,
    mapWithIndex: src_Record_mapWithIndex,
    reduceWithIndex: /*#__PURE__*/ src_Record_reduceWithIndex(Ord),
    foldMapWithIndex: /*#__PURE__*/ src_Record_foldMapWithIndex(Ord),
    reduceRightWithIndex: /*#__PURE__*/ src_Record_reduceRightWithIndex(Ord),
    filterMapWithIndex: src_Record_filterMapWithIndex,
    filterWithIndex: src_Record_filterWithIndex,
    partitionMapWithIndex: src_Record_partitionMapWithIndex,
    partitionWithIndex: src_Record_partitionWithIndex,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(Ord),
    wither: _wither,
    wilt: _wilt
};
export { Compactable, Filterable, FilterableWithIndex, Record_Foldable as Foldable, FoldableWithIndex, Functor, FunctorWithIndex, Traversable, TraversableWithIndex, URI, Witherable, collect, Record_compact as compact, deleteAt, Record_difference as difference, Record_elem as elem, empty, Record_every as every, src_Record_filter as filter, src_Record_filterMap as filterMap, Record_filterMapWithIndex as filterMapWithIndex, Record_filterWithIndex as filterWithIndex, Record_flap as flap, src_Record_foldMap as foldMap, Record_foldMapWithIndex as foldMapWithIndex, fromEntries, Record_fromFoldable as fromFoldable, Record_fromFoldableMap as fromFoldableMap, getDifferenceMagma, Record_getEq as getEq, getFoldable, getFoldableWithIndex, getIntersectionSemigroup, Record_getMonoid as getMonoid, Record_getShow as getShow, getTraversable, getTraversableWithIndex, getUnionMonoid, getUnionSemigroup, getWitherable, Record_has as has, Record_hasOwnProperty as hasOwnProperty, insertAt, Record_intersection as intersection, Record_isEmpty as isEmpty, Record_isSubrecord as isSubrecord, keys, Record_lookup as lookup, Record_map as map, Record_mapWithIndex as mapWithIndex, modifyAt, src_Record_partition as partition, src_Record_partitionMap as partitionMap, Record_partitionMapWithIndex as partitionMapWithIndex, Record_partitionWithIndex as partitionWithIndex, pop, record, src_Record_reduce as reduce, src_Record_reduceRight as reduceRight, Record_reduceRightWithIndex as reduceRightWithIndex, Record_reduceWithIndex as reduceWithIndex, Record_separate as separate, Record_sequence as sequence, Record_singleton as singleton, Record_size as size, Record_some as some, toArray, toEntries, toUnfoldable, Record_traverse as traverse, Record_traverseWithIndex as traverseWithIndex, Record_union as union, updateAt, Record_upsertAt as upsertAt, wilt, wither };
