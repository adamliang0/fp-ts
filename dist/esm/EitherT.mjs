import { ap } from "./Apply.mjs";
import { Apply, Functor, bimap, fromNullable, isLeft, left, mapLeft, match, right, swap, toUnion } from "./Either.mjs";
import { flow, pipe } from "./function.mjs";
import { map } from "./Functor.mjs";
function EitherT_right(F) {
    return flow(right, F.of);
}
function EitherT_left(F) {
    return flow(left, F.of);
}
function rightF(F) {
    return (fa)=>F.map(fa, right);
}
function leftF(F) {
    return (fe)=>F.map(fe, left);
}
function EitherT_fromNullable(F) {
    return (e)=>flow(fromNullable(e), F.of);
}
function fromNullableK(F) {
    const fromNullableF = EitherT_fromNullable(F);
    return (e)=>{
        const fromNullableFE = fromNullableF(e);
        return (f)=>flow(f, fromNullableFE);
    };
}
function chainNullableK(M) {
    const chainM = chain(M);
    const fromNullableKM = fromNullableK(M);
    return (e)=>{
        const fromNullableKMe = fromNullableKM(e);
        return (f)=>chainM(fromNullableKMe(f));
    };
}
function EitherT_map(F) {
    return map(F, Functor);
}
function EitherT_ap(F) {
    return ap(F, Apply);
}
function chain(M) {
    const flatMapM = flatMap(M);
    return (f)=>(ma)=>flatMapM(ma, f);
}
function flatMap(M) {
    return (ma, f)=>M.chain(ma, (e)=>isLeft(e) ? M.of(e) : f(e.right));
}
function alt(M) {
    return (second)=>(first)=>M.chain(first, (e)=>isLeft(e) ? second() : M.of(e));
}
function EitherT_bimap(F) {
    const mapBothF = mapBoth(F);
    return (f, g)=>(self)=>mapBothF(self, f, g);
}
function mapBoth(F) {
    return (self, f, g)=>F.map(self, bimap(f, g));
}
function EitherT_mapLeft(F) {
    const mapErrorF = mapError(F);
    return (f)=>(self)=>mapErrorF(self, f);
}
function mapError(F) {
    return (self, f)=>F.map(self, mapLeft(f));
}
function altValidation(M, S) {
    return (second)=>(first)=>M.chain(first, match((e1)=>M.map(second(), mapLeft((e2)=>S.concat(e1, e2))), EitherT_right(M)));
}
function EitherT_match(F) {
    return (onLeft, onRight)=>(ma)=>F.map(ma, match(onLeft, onRight));
}
function matchE(M) {
    return (onLeft, onRight)=>(ma)=>M.chain(ma, match(onLeft, onRight));
}
function getOrElse(M) {
    return (onLeft)=>(ma)=>M.chain(ma, match(onLeft, M.of));
}
function getOrElseW(M) {
    return (onLeft)=>(ma)=>M.chain(ma, (ea)=>isLeft(ea) ? M.map(onLeft(ea.left), (b)=>b) : M.of(ea.right));
}
function orElse(M) {
    return (onLeft)=>(ma)=>M.chain(ma, (e)=>isLeft(e) ? onLeft(e.left) : M.of(e));
}
function orElseFirst(M) {
    const tapErrorM = tapError(M);
    return (onLeft)=>(ma)=>tapErrorM(ma, onLeft);
}
function tapError(M) {
    const orElseM = orElse(M);
    return (ma, onLeft)=>pipe(ma, orElseM((e)=>M.map(onLeft(e), (eb)=>isLeft(eb) ? eb : left(e))));
}
function orLeft(M) {
    return (onLeft)=>(ma)=>M.chain(ma, match((e)=>M.map(onLeft(e), left), (a)=>M.of(right(a))));
}
function EitherT_swap(F) {
    return (ma)=>F.map(ma, swap);
}
function EitherT_toUnion(F) {
    return (fa)=>F.map(fa, toUnion);
}
function getEitherM(M) {
    const _ap = EitherT_ap(M);
    const _map = EitherT_map(M);
    const _chain = chain(M);
    const _alt = alt(M);
    const _bimap = EitherT_bimap(M);
    const _mapLeft = EitherT_mapLeft(M);
    const _fold = matchE(M);
    const _getOrElse = getOrElse(M);
    const _orElse = orElse(M);
    return {
        map: (fa, f)=>pipe(fa, _map(f)),
        ap: (fab, fa)=>pipe(fab, _ap(fa)),
        of: EitherT_right(M),
        chain: (ma, f)=>pipe(ma, _chain(f)),
        alt: (fa, that)=>pipe(fa, _alt(that)),
        bimap: (fea, f, g)=>pipe(fea, _bimap(f, g)),
        mapLeft: (fea, f)=>pipe(fea, _mapLeft(f)),
        fold: (fa, onLeft, onRight)=>pipe(fa, _fold(onLeft, onRight)),
        getOrElse: (fa, onLeft)=>pipe(fa, _getOrElse(onLeft)),
        orElse: (fa, f)=>pipe(fa, _orElse(f)),
        swap: EitherT_swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: EitherT_left(M)
    };
}
export { alt, altValidation, EitherT_ap as ap, EitherT_bimap as bimap, chain, chainNullableK, flatMap, EitherT_fromNullable as fromNullable, fromNullableK, getEitherM, getOrElse, getOrElseW, EitherT_left as left, leftF, EitherT_map as map, mapBoth, mapError, EitherT_mapLeft as mapLeft, EitherT_match as match, matchE, orElse, orElseFirst, orLeft, EitherT_right as right, rightF, EitherT_swap as swap, tapError, EitherT_toUnion as toUnion };
