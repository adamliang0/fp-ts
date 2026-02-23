import { ap } from "./Apply.mjs";
import { flow, pipe } from "./function.mjs";
import { map } from "./Functor.mjs";
import { Functor, bimap, both, getApply, left, mapLeft, match, right, swap, toTuple2 } from "./These.mjs";
function TheseT_right(F) {
    return flow(right, F.of);
}
function TheseT_left(F) {
    return flow(left, F.of);
}
function TheseT_both(F) {
    return flow(both, F.of);
}
function rightF(F) {
    return (fa)=>F.map(fa, right);
}
function leftF(F) {
    return (fe)=>F.map(fe, left);
}
function TheseT_map(F) {
    return map(F, Functor);
}
function TheseT_ap(F, S) {
    return ap(F, getApply(S));
}
function chain(M, S) {
    const _left = TheseT_left(M);
    return (f)=>(ma)=>M.chain(ma, match(_left, f, (e1, a)=>M.map(f(a), match((e2)=>left(S.concat(e1, e2)), (b)=>both(e1, b), (e2, b)=>both(S.concat(e1, e2), b)))));
}
function TheseT_bimap(F) {
    return (f, g)=>(fea)=>F.map(fea, bimap(f, g));
}
function TheseT_mapLeft(F) {
    return (f)=>(fea)=>F.map(fea, mapLeft(f));
}
function TheseT_match(F) {
    return (onLeft, onRight, onBoth)=>(ma)=>F.map(ma, match(onLeft, onRight, onBoth));
}
function matchE(M) {
    return (onLeft, onRight, onBoth)=>(ma)=>M.chain(ma, match(onLeft, onRight, onBoth));
}
function TheseT_swap(F) {
    return (ma)=>F.map(ma, swap);
}
function TheseT_toTuple2(F) {
    return (e, a)=>(fa)=>F.map(fa, toTuple2(e, a));
}
function getTheseM(M) {
    const _map = TheseT_map(M);
    const _bimap = TheseT_bimap(M);
    const _mapLeft = TheseT_mapLeft(M);
    const _fold = matchE(M);
    const _toTuple2 = TheseT_toTuple2(M);
    const of = TheseT_right(M);
    const mapT = (fa, f)=>pipe(fa, _map(f));
    return {
        map: mapT,
        bimap: (fea, f, g)=>pipe(fea, _bimap(f, g)),
        mapLeft: (fea, f)=>pipe(fea, _mapLeft(f)),
        fold: (fa, onLeft, onRight, onBoth)=>pipe(fa, _fold(onLeft, onRight, onBoth)),
        swap: TheseT_swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: TheseT_left(M),
        right: TheseT_right(M),
        both: TheseT_both(M),
        toTuple: (fa, e, a)=>pipe(fa, _toTuple2(()=>e, ()=>a)),
        getMonad: (S)=>{
            const _ap = TheseT_ap(M, S);
            const _chain = chain(M, S);
            return {
                _E: void 0,
                map: mapT,
                of,
                ap: (fab, fa)=>pipe(fab, _ap(fa)),
                chain: (ma, f)=>pipe(ma, _chain(f))
            };
        }
    };
}
export { TheseT_ap as ap, TheseT_bimap as bimap, TheseT_both as both, chain, getTheseM, TheseT_left as left, leftF, TheseT_map as map, TheseT_mapLeft as mapLeft, TheseT_match as match, matchE, TheseT_right as right, rightF, TheseT_swap as swap, TheseT_toTuple2 as toTuple2 };
