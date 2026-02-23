import { getApplySemigroup } from "./Apply.mjs";
import { fromOption, fromOptionK, fromPredicate } from "./FromEither.mjs";
import { fromIOK } from "./FromIO.mjs";
import { fromTaskK } from "./FromTask.mjs";
import { fromTheseK } from "./FromThese.mjs";
import { SK, flow, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { emptyReadonlyArray, head, isNonEmpty, singleton, tail } from "./internal.mjs";
import { ApplicativePar, ApplySeq, Functor, Monad, Pointed, fromIO, map, of, traverseReadonlyNonEmptyArrayWithIndex } from "./Task.mjs";
import { both, getSemigroup, isBoth, isLeft, map as external_These_mjs_map, traverseReadonlyNonEmptyArrayWithIndex as external_These_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./These.mjs";
import { ap as external_TheseT_mjs_ap, bimap, both as external_TheseT_mjs_both, chain as external_TheseT_mjs_chain, left, leftF, map as external_TheseT_mjs_map, mapLeft, match, matchE, right as external_TheseT_mjs_right, rightF, swap, toTuple2 } from "./TheseT.mjs";
const TaskThese_left = /*#__PURE__*/ left(Pointed);
const TaskThese_right = /*#__PURE__*/ external_TheseT_mjs_right(Pointed);
const TaskThese_both = /*#__PURE__*/ external_TheseT_mjs_both(Pointed);
const rightTask = /*#__PURE__*/ rightF(Functor);
const leftTask = /*#__PURE__*/ leftF(Functor);
const rightIO = /*#__PURE__*/ flow(fromIO, rightTask);
const leftIO = /*#__PURE__*/ flow(fromIO, leftTask);
const fromEither = of;
const fromThese = of;
const TaskThese_fromIO = rightIO;
const fromIOEither = fromIO;
const fromTask = rightTask;
const TaskThese_match = /*#__PURE__*/ match(Functor);
const matchW = TaskThese_match;
const TaskThese_matchE = /*#__PURE__*/ matchE(Monad);
const fold = TaskThese_matchE;
const matchEW = fold;
const foldW = matchEW;
const TaskThese_swap = /*#__PURE__*/ swap(Functor);
const _map = (fa, f)=>pipe(fa, TaskThese_map(f));
const _bimap = (fa, f, g)=>pipe(fa, TaskThese_bimap(f, g));
const _mapLeft = (fa, f)=>pipe(fa, TaskThese_mapLeft(f));
const TaskThese_map = /*#__PURE__*/ external_TheseT_mjs_map(Functor);
const TaskThese_bimap = /*#__PURE__*/ bimap(Functor);
const TaskThese_mapLeft = /*#__PURE__*/ mapLeft(Functor);
const TaskThese_of = TaskThese_right;
const URI = 'TaskThese';
const getApply = (A, S)=>{
    const ap = external_TheseT_mjs_ap(A, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>pipe(fab, ap(fa))
    };
};
function getApplicative(A, S) {
    const { ap } = getApply(A, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap,
        of: TaskThese_of
    };
}
function getChain(S) {
    const A = getApply(ApplicativePar, S);
    const chain = external_TheseT_mjs_chain(Monad, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: (ma, f)=>pipe(ma, chain(f))
    };
}
function getMonad(S) {
    const A = getApplicative(ApplicativePar, S);
    const C = getChain(S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: TaskThese_of,
        chain: C.chain,
        fromIO: TaskThese_fromIO,
        fromTask
    };
}
const TaskThese_Functor = {
    URI,
    map: _map
};
const TaskThese_flap = /*#__PURE__*/ flap(TaskThese_Functor);
const TaskThese_Pointed = {
    URI,
    of: TaskThese_of
};
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const FromEither = {
    URI,
    fromEither
};
const TaskThese_fromOption = /*#__PURE__*/ fromOption(FromEither);
const TaskThese_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const TaskThese_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const FromThese = {
    URI,
    fromThese
};
const TaskThese_fromTheseK = /*#__PURE__*/ fromTheseK(FromThese);
const FromIO = {
    URI,
    fromIO: TaskThese_fromIO
};
const TaskThese_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const FromTask = {
    URI,
    fromIO: TaskThese_fromIO,
    fromTask
};
const TaskThese_fromTaskK = /*#__PURE__*/ fromTaskK(FromTask);
const TaskThese_toTuple2 = /*#__PURE__*/ toTuple2(Functor);
const ApT = /*#__PURE__*/ TaskThese_of(emptyReadonlyArray);
const TaskThese_traverseReadonlyNonEmptyArrayWithIndex = (S)=>{
    const g = external_These_mjs_traverseReadonlyNonEmptyArrayWithIndex(S);
    return (f)=>flow(traverseReadonlyNonEmptyArrayWithIndex(f), map(g(SK)));
};
const traverseReadonlyArrayWithIndex = (S)=>(f)=>{
        const g = TaskThese_traverseReadonlyNonEmptyArrayWithIndex(S)(f);
        return (as)=>isNonEmpty(as) ? g(as) : ApT;
    };
const traverseReadonlyNonEmptyArrayWithIndexSeq = (S)=>(f)=>(as)=>()=>tail(as).reduce((acc, a, i)=>acc.then((ebs)=>isLeft(ebs) ? acc : f(i + 1, a)().then((eb)=>{
                            if (isLeft(eb)) return eb;
                            if (isBoth(eb)) {
                                const right = ebs.right;
                                right.push(eb.right);
                                return isBoth(ebs) ? both(S.concat(ebs.left, eb.left), right) : both(eb.left, right);
                            }
                            ebs.right.push(eb.right);
                            return ebs;
                        })), f(0, head(as))().then(external_These_mjs_map(singleton)));
const traverseReadonlyArrayWithIndexSeq = (S)=>(f)=>{
        const g = traverseReadonlyNonEmptyArrayWithIndexSeq(S)(f);
        return (as)=>isNonEmpty(as) ? g(as) : ApT;
    };
const functorTaskThese = {
    URI,
    map: _map
};
const bifunctorTaskThese = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const toTuple = (e, a)=>TaskThese_toTuple2(()=>e, ()=>a);
const taskThese = {
    URI,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const TaskThese_getSemigroup = (SE, SA)=>getApplySemigroup(ApplySeq)(getSemigroup(SE, SA));
export { ApT, Bifunctor, FromEither, FromIO, FromTask, FromThese, TaskThese_Functor as Functor, TaskThese_Pointed as Pointed, URI, bifunctorTaskThese, TaskThese_bimap as bimap, TaskThese_both as both, TaskThese_flap as flap, fold, foldW, fromEither, TaskThese_fromIO as fromIO, fromIOEither, TaskThese_fromIOK as fromIOK, TaskThese_fromOption as fromOption, TaskThese_fromOptionK as fromOptionK, TaskThese_fromPredicate as fromPredicate, fromTask, TaskThese_fromTaskK as fromTaskK, fromThese, TaskThese_fromTheseK as fromTheseK, functorTaskThese, getApplicative, getApply, getChain, getMonad, TaskThese_getSemigroup as getSemigroup, TaskThese_left as left, leftIO, leftTask, TaskThese_map as map, TaskThese_mapLeft as mapLeft, TaskThese_match as match, TaskThese_matchE as matchE, matchEW, matchW, TaskThese_of as of, TaskThese_right as right, rightIO, rightTask, TaskThese_swap as swap, taskThese, toTuple, TaskThese_toTuple2 as toTuple2, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, TaskThese_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq };
