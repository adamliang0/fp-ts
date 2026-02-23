import { ap } from "./Apply.mjs";
import { constant, flow, pipe } from "./function.mjs";
import { map } from "./Functor.mjs";
import { Apply, Functor, fromEither, fromNullable, fromPredicate, match, none, some } from "./Option.mjs";
function OptionT_some(F) {
    return flow(some, F.of);
}
function zero(F) {
    return constant(F.of(none));
}
function fromF(F) {
    return (ma)=>F.map(ma, some);
}
function OptionT_fromNullable(F) {
    return flow(fromNullable, F.of);
}
function fromNullableK(F) {
    const fromNullableF = OptionT_fromNullable(F);
    return (f)=>flow(f, fromNullableF);
}
function chainNullableK(M) {
    const chainM = chain(M);
    const fromNullableKM = fromNullableK(M);
    return (f)=>chainM(fromNullableKM(f));
}
function fromOptionK(F) {
    return (f)=>flow(f, F.of);
}
function chainOptionK(M) {
    const chainM = chain(M);
    const fromOptionKM = fromOptionK(M);
    return (f)=>chainM(fromOptionKM(f));
}
function OptionT_fromPredicate(F) {
    return (predicate)=>(a)=>F.of(fromPredicate(predicate)(a));
}
function OptionT_fromEither(F) {
    return flow(fromEither, F.of);
}
function OptionT_match(F) {
    return (onNone, onSome)=>(ma)=>F.map(ma, match(onNone, onSome));
}
function matchE(M) {
    return (onNone, onSome)=>(ma)=>M.chain(ma, match(onNone, onSome));
}
function getOrElse(M) {
    return (onNone)=>(fa)=>M.chain(fa, match(onNone, M.of));
}
function OptionT_map(F) {
    return map(F, Functor);
}
function OptionT_ap(F) {
    return ap(F, Apply);
}
function chain(M) {
    const flatMapM = flatMap(M);
    return (f)=>(ma)=>flatMapM(ma, f);
}
function flatMap(M) {
    const zeroM = zero(M);
    return (ma, f)=>M.chain(ma, match(()=>zeroM(), f));
}
function alt(M) {
    const _some = OptionT_some(M);
    return (second)=>(first)=>M.chain(first, match(second, _some));
}
function getOptionM(M) {
    const apM = OptionT_ap(M);
    const mapM = OptionT_map(M);
    const chainM = chain(M);
    const altM = alt(M);
    const foldM = matchE(M);
    const getOrElseM = getOrElse(M);
    const zeroM = zero(M);
    return {
        map: (fa, f)=>pipe(fa, mapM(f)),
        ap: (fab, fa)=>pipe(fab, apM(fa)),
        of: OptionT_some(M),
        chain: (ma, f)=>pipe(ma, chainM(f)),
        alt: (fa, that)=>pipe(fa, altM(that)),
        fold: (fa, onNone, onSome)=>pipe(fa, foldM(onNone, onSome)),
        getOrElse: (fa, onNone)=>pipe(fa, getOrElseM(onNone)),
        fromM: fromF(M),
        none: ()=>zeroM()
    };
}
export { alt, OptionT_ap as ap, chain, chainNullableK, chainOptionK, flatMap, OptionT_fromEither as fromEither, fromF, OptionT_fromNullable as fromNullable, fromNullableK, fromOptionK, OptionT_fromPredicate as fromPredicate, getOptionM, getOrElse, OptionT_map as map, OptionT_match as match, matchE, OptionT_some as some, zero };
