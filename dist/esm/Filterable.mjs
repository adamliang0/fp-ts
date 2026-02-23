import { compact, separate } from "./Compactable.mjs";
import { pipe } from "./function.mjs";
import { getFunctorComposition } from "./Functor.mjs";
import { getLeft, getRight } from "./Option.mjs";
import { not } from "./Predicate.mjs";
import { separated } from "./Separated.mjs";
function filter(F, G) {
    return (predicate)=>(fga)=>F.map(fga, (ga)=>G.filter(ga, predicate));
}
function filterMap(F, G) {
    return (f)=>(fga)=>F.map(fga, (ga)=>G.filterMap(ga, f));
}
function partition(F, G) {
    const _filter = filter(F, G);
    return (predicate)=>{
        const left = _filter(not(predicate));
        const right = _filter(predicate);
        return (fgb)=>separated(left(fgb), right(fgb));
    };
}
function partitionMap(F, G) {
    const _filterMap = filterMap(F, G);
    return (f)=>(fga)=>separated(pipe(fga, _filterMap((a)=>getLeft(f(a)))), pipe(fga, _filterMap((a)=>getRight(f(a)))));
}
function getFilterableComposition(F, G) {
    const map = getFunctorComposition(F, G).map;
    const _compact = compact(F, G);
    const _separate = separate(F, G, G);
    const _filter = filter(F, G);
    const _filterMap = filterMap(F, G);
    const _partition = partition(F, G);
    const _partitionMap = partitionMap(F, G);
    return {
        map,
        compact: _compact,
        separate: _separate,
        filter: (fga, f)=>pipe(fga, _filter(f)),
        filterMap: (fga, f)=>pipe(fga, _filterMap(f)),
        partition: (fga, p)=>pipe(fga, _partition(p)),
        partitionMap: (fga, f)=>pipe(fga, _partitionMap(f))
    };
}
export { filter, filterMap, getFilterableComposition, partition, partitionMap };
