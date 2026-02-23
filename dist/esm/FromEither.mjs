import { tap } from "./Chain.mjs";
import { flow } from "./function.mjs";
import { isNone, left, right } from "./internal.mjs";
function fromOption(F) {
    return (onNone)=>(ma)=>F.fromEither(isNone(ma) ? left(onNone()) : right(ma.value));
}
function fromPredicate(F) {
    return (predicate, onFalse)=>(a)=>F.fromEither(predicate(a) ? right(a) : left(onFalse(a)));
}
function fromOptionK(F) {
    const fromOptionF = fromOption(F);
    return (onNone)=>{
        const from = fromOptionF(onNone);
        return (f)=>flow(f, from);
    };
}
function chainOptionK(F, M) {
    const fromOptionKF = fromOptionK(F);
    return (onNone)=>{
        const from = fromOptionKF(onNone);
        return (f)=>(ma)=>M.chain(ma, from(f));
    };
}
function fromEitherK(F) {
    return (f)=>flow(f, F.fromEither);
}
function chainEitherK(F, M) {
    const fromEitherKF = fromEitherK(F);
    return (f)=>(ma)=>M.chain(ma, fromEitherKF(f));
}
function chainFirstEitherK(F, M) {
    const tapEitherM = tapEither(F, M);
    return (f)=>(ma)=>tapEitherM(ma, f);
}
function filterOrElse(F, M) {
    return (predicate, onFalse)=>(ma)=>M.chain(ma, (a)=>F.fromEither(predicate(a) ? right(a) : left(onFalse(a))));
}
function tapEither(F, M) {
    const fromEither = fromEitherK(F);
    const tapM = tap(M);
    return (self, f)=>tapM(self, fromEither(f));
}
export { chainEitherK, chainFirstEitherK, chainOptionK, filterOrElse, fromEitherK, fromOption, fromOptionK, fromPredicate, tapEither };
