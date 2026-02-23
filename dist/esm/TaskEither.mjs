import { getApplicativeMonoid } from "./Applicative.mjs";
import { ap as external_Apply_mjs_ap, apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { compact, separate } from "./Compactable.mjs";
import { Functor, fromOption, getApplicativeValidation, getCompactable, getFilterable, getSemigroup, map, traverseReadonlyNonEmptyArrayWithIndex } from "./Either.mjs";
import { alt as external_EitherT_mjs_alt, altValidation, ap as external_EitherT_mjs_ap, chainNullableK, flatMap, fromNullable, fromNullableK, getOrElseW, left, leftF, map as external_EitherT_mjs_map, mapBoth, mapError, match, matchE, orElse, orLeft, right, rightF, swap, tapError, toUnion } from "./EitherT.mjs";
import { filter as external_Filterable_mjs_filter, filterMap as external_Filterable_mjs_filterMap, partition as external_Filterable_mjs_partition, partitionMap as external_Filterable_mjs_partitionMap } from "./Filterable.mjs";
import { chainOptionK, filterOrElse, fromEitherK, fromOption as external_FromEither_mjs_fromOption, fromOptionK, fromPredicate, tapEither } from "./FromEither.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { fromTaskK, tapTask } from "./FromTask.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapEither, flatMapIO, flatMapNullable, flatMapOption, flatMapTask, head, isLeft, isNonEmpty, left as external_internal_mjs_left, liftNullable, liftOption, right as external_internal_mjs_right, singleton, tail } from "./internal.mjs";
import { ApplicativePar, ApplyPar, ApplySeq, Functor as external_Task_mjs_Functor, Monad, Pointed, flatMap as external_Task_mjs_flatMap, fromIO, map as external_Task_mjs_map, of, traverseReadonlyNonEmptyArrayWithIndex as external_Task_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./Task.mjs";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
        });
    };
}
const TaskEither_left = /*#__PURE__*/ left(Pointed);
const TaskEither_right = /*#__PURE__*/ right(Pointed);
const rightTask = /*#__PURE__*/ rightF(external_Task_mjs_Functor);
const leftTask = /*#__PURE__*/ leftF(external_Task_mjs_Functor);
const rightIO = /*#__PURE__*/ flow(fromIO, rightTask);
const leftIO = /*#__PURE__*/ flow(fromIO, leftTask);
const TaskEither_fromIO = rightIO;
const fromTask = rightTask;
const fromEither = of;
const fromIOEither = fromIO;
const fromTaskOption = (onNone)=>external_Task_mjs_map(fromOption(onNone));
const TaskEither_match = /*#__PURE__*/ match(external_Task_mjs_Functor);
const matchW = TaskEither_match;
const TaskEither_matchE = /*#__PURE__*/ matchE(Monad);
const fold = TaskEither_matchE;
const matchEW = TaskEither_matchE;
const foldW = matchEW;
const TaskEither_getOrElseW = /*#__PURE__*/ getOrElseW(Monad);
const getOrElse = TaskEither_getOrElseW;
const tryCatch = (f, onRejected)=>()=>_async_to_generator(function*() {
            try {
                return yield f().then(external_internal_mjs_right);
            } catch (reason) {
                return external_internal_mjs_left(onRejected(reason));
            }
        })();
const tryCatchK = (f, onRejected)=>(...a)=>tryCatch(()=>f(...a), onRejected);
const TaskEither_toUnion = /*#__PURE__*/ toUnion(external_Task_mjs_Functor);
const TaskEither_fromNullable = /*#__PURE__*/ fromNullable(Pointed);
const TaskEither_fromNullableK = /*#__PURE__*/ fromNullableK(Pointed);
const TaskEither_chainNullableK = /*#__PURE__*/ chainNullableK(Monad);
const TaskEither_orElse = /*#__PURE__*/ orElse(Monad);
const orElseW = TaskEither_orElse;
const TaskEither_tapError = /*#__PURE__*/ dual(2, tapError(Monad));
const orElseFirstIOK = (onLeft)=>TaskEither_tapError(TaskEither_fromIOK(onLeft));
const orElseFirstTaskK = (onLeft)=>TaskEither_tapError(TaskEither_fromTaskK(onLeft));
const TaskEither_orLeft = /*#__PURE__*/ orLeft(Monad);
const TaskEither_swap = /*#__PURE__*/ swap(external_Task_mjs_Functor);
const fromTaskOptionK = (onNone)=>{
    const from = fromTaskOption(onNone);
    return (f)=>flow(f, from);
};
const chainTaskOptionKW = (onNone)=>(f)=>(ma)=>TaskEither_flatMap(ma, fromTaskOptionK(onNone)(f));
const chainTaskOptionK = chainTaskOptionKW;
const fromIOEitherK = (f)=>flow(f, fromIOEither);
const _map = (fa, f)=>pipe(fa, TaskEither_map(f));
const _apPar = (fab, fa)=>pipe(fab, TaskEither_ap(fa));
const _apSeq = (fab, fa)=>TaskEither_flatMap(fab, (f)=>pipe(fa, TaskEither_map(f)));
const _alt = (fa, that)=>pipe(fa, TaskEither_alt(that));
const TaskEither_map = /*#__PURE__*/ external_EitherT_mjs_map(external_Task_mjs_Functor);
const TaskEither_mapBoth = /*#__PURE__*/ dual(3, mapBoth(external_Task_mjs_Functor));
const bimap = TaskEither_mapBoth;
const TaskEither_mapError = /*#__PURE__*/ dual(2, mapError(external_Task_mjs_Functor));
const mapLeft = TaskEither_mapError;
const TaskEither_ap = /*#__PURE__*/ external_EitherT_mjs_ap(ApplyPar);
const apW = TaskEither_ap;
const TaskEither_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flattenW = /*#__PURE__*/ TaskEither_flatMap(identity);
const flatten = flattenW;
const TaskEither_alt = /*#__PURE__*/ external_EitherT_mjs_alt(Monad);
const altW = TaskEither_alt;
const TaskEither_of = TaskEither_right;
const throwError = TaskEither_left;
const URI = 'TaskEither';
function getApplicativeTaskValidation(A, S) {
    const ap = external_Apply_mjs_ap(A, getApplicativeValidation(S));
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>pipe(fab, ap(fa)),
        of: TaskEither_of
    };
}
function getAltTaskValidation(S) {
    const alt = altValidation(Monad, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        alt: (fa, that)=>pipe(fa, alt(that))
    };
}
const TaskEither_getCompactable = (M)=>{
    const C = getCompactable(M);
    return {
        URI,
        _E: void 0,
        compact: compact(external_Task_mjs_Functor, C),
        separate: separate(external_Task_mjs_Functor, C, Functor)
    };
};
function TaskEither_getFilterable(M) {
    const F = getFilterable(M);
    const C = TaskEither_getCompactable(M);
    const filter = external_Filterable_mjs_filter(external_Task_mjs_Functor, F);
    const filterMap = external_Filterable_mjs_filterMap(external_Task_mjs_Functor, F);
    const partition = external_Filterable_mjs_partition(external_Task_mjs_Functor, F);
    const partitionMap = external_Filterable_mjs_partitionMap(external_Task_mjs_Functor, F);
    return {
        URI,
        _E: void 0,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: (fa, predicate)=>pipe(fa, filter(predicate)),
        filterMap: (fa, f)=>pipe(fa, filterMap(f)),
        partition: (fa, predicate)=>pipe(fa, partition(predicate)),
        partitionMap: (fa, f)=>pipe(fa, partitionMap(f))
    };
}
const TaskEither_Functor = {
    URI,
    map: _map
};
const TaskEither_as = dual(2, external_Functor_mjs_as(TaskEither_Functor));
const TaskEither_asUnit = asUnit(TaskEither_Functor);
const TaskEither_flap = /*#__PURE__*/ flap(TaskEither_Functor);
const TaskEither_Pointed = {
    URI,
    of: TaskEither_of
};
const TaskEither_ApplyPar = {
    URI,
    map: _map,
    ap: _apPar
};
const TaskEither_apFirst = /*#__PURE__*/ apFirst(TaskEither_ApplyPar);
const apFirstW = TaskEither_apFirst;
const TaskEither_apSecond = /*#__PURE__*/ apSecond(TaskEither_ApplyPar);
const apSecondW = TaskEither_apSecond;
const TaskEither_ApplicativePar = {
    URI,
    map: _map,
    ap: _apPar,
    of: TaskEither_of
};
const TaskEither_ApplySeq = {
    URI,
    map: _map,
    ap: _apSeq
};
const ApplicativeSeq = {
    URI,
    map: _map,
    ap: _apSeq,
    of: TaskEither_of
};
const Chain = {
    URI,
    map: _map,
    ap: _apPar,
    chain: TaskEither_flatMap
};
const TaskEither_Monad = {
    URI,
    map: _map,
    ap: _apPar,
    chain: TaskEither_flatMap,
    of: TaskEither_of
};
const MonadIO = {
    URI,
    map: _map,
    ap: _apPar,
    chain: TaskEither_flatMap,
    of: TaskEither_of,
    fromIO: TaskEither_fromIO
};
const MonadTask = {
    URI,
    map: _map,
    ap: _apPar,
    chain: TaskEither_flatMap,
    of: TaskEither_of,
    fromIO: TaskEither_fromIO,
    fromTask
};
const MonadThrow = {
    URI,
    map: _map,
    ap: _apPar,
    chain: TaskEither_flatMap,
    of: TaskEither_of,
    throwError
};
const FromEither = {
    URI,
    fromEither
};
const FromIO = {
    URI,
    fromIO: TaskEither_fromIO
};
const FromTask = {
    URI,
    fromIO: TaskEither_fromIO,
    fromTask
};
const TaskEither_tap = /*#__PURE__*/ dual(2, tap(Chain));
const TaskEither_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, Chain));
const TaskEither_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, Chain));
const TaskEither_tapTask = /*#__PURE__*/ dual(2, tapTask(FromTask, Chain));
const Bifunctor = {
    URI,
    bimap: TaskEither_mapBoth,
    mapLeft: TaskEither_mapError
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const TaskEither_fromOption = /*#__PURE__*/ external_FromEither_mjs_fromOption(FromEither);
const TaskEither_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const TaskEither_chainOptionK = /*#__PURE__*/ chainOptionK(FromEither, Chain);
const chainOptionKW = TaskEither_chainOptionK;
const _FromEither = {
    fromEither: FromEither.fromEither
};
const TaskEither_liftNullable = /*#__PURE__*/ liftNullable(_FromEither);
const TaskEither_liftOption = /*#__PURE__*/ liftOption(_FromEither);
const _FlatMap = {
    flatMap: TaskEither_flatMap
};
const _FromIO = {
    fromIO: FromIO.fromIO
};
const _FromTask = {
    fromTask
};
const TaskEither_flatMapNullable = /*#__PURE__*/ flatMapNullable(_FromEither, _FlatMap);
const TaskEither_flatMapOption = /*#__PURE__*/ flatMapOption(_FromEither, _FlatMap);
const TaskEither_flatMapEither = /*#__PURE__*/ flatMapEither(_FromEither, _FlatMap);
const TaskEither_flatMapIO = /*#__PURE__*/ flatMapIO(_FromIO, _FlatMap);
const TaskEither_flatMapTask = /*#__PURE__*/ flatMapTask(_FromTask, _FlatMap);
const flatMapIOEither = /*#__PURE__*/ dual(2, (self, f)=>TaskEither_flatMap(self, fromIOEitherK(f)));
const flatMapTaskOption = /*#__PURE__*/ dual(3, (self, f, onNone)=>TaskEither_flatMap(self, (a)=>fromTaskOption(()=>onNone(a))(f(a))));
const chainEitherK = TaskEither_flatMapEither;
const chainEitherKW = TaskEither_flatMapEither;
const chainFirstEitherK = TaskEither_tapEither;
const chainFirstEitherKW = TaskEither_tapEither;
const TaskEither_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const TaskEither_filterOrElse = /*#__PURE__*/ filterOrElse(FromEither, Chain);
const filterOrElseW = TaskEither_filterOrElse;
const TaskEither_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const TaskEither_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = TaskEither_flatMapIO;
const chainFirstIOK = TaskEither_tapIO;
const TaskEither_fromTaskK = /*#__PURE__*/ fromTaskK(FromTask);
const chainTaskK = TaskEither_flatMapTask;
const chainFirstTaskK = TaskEither_tapTask;
const chainIOEitherKW = flatMapIOEither;
const chainIOEitherK = flatMapIOEither;
function taskify(f) {
    return function() {
        const args = Array.prototype.slice.call(arguments);
        return ()=>new Promise((resolve)=>{
                const cbResolver = (e, r)=>null != e ? resolve(external_internal_mjs_left(e)) : resolve(external_internal_mjs_right(r));
                f.apply(null, args.concat(cbResolver));
            });
    };
}
const bracket = (acquire, use, release)=>bracketW(acquire, use, release);
const bracketW = (acquire, use, release)=>TaskEither_flatMap(acquire, (a)=>external_Task_mjs_flatMap(use(a), (e)=>TaskEither_flatMap(release(a, e), ()=>of(e))));
const Do = /*#__PURE__*/ TaskEither_of(emptyRecord);
const TaskEither_bindTo = /*#__PURE__*/ bindTo(TaskEither_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(TaskEither_Functor);
const TaskEither_bind = /*#__PURE__*/ bind(Chain);
const bindW = TaskEither_bind;
const TaskEither_apS = /*#__PURE__*/ apS(TaskEither_ApplyPar);
const apSW = TaskEither_apS;
const ApT = /*#__PURE__*/ TaskEither_of(emptyReadonlyArray);
const TaskEither_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(external_Task_mjs_traverseReadonlyNonEmptyArrayWithIndex(f), external_Task_mjs_map(traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = TaskEither_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseReadonlyNonEmptyArrayWithIndexSeq = (f)=>(as)=>()=>tail(as).reduce((acc, a, i)=>acc.then((ebs)=>isLeft(ebs) ? acc : f(i + 1, a)().then((eb)=>{
                        if (isLeft(eb)) return eb;
                        ebs.right.push(eb.right);
                        return ebs;
                    })), f(0, head(as))().then(map(singleton)));
const traverseReadonlyArrayWithIndexSeq = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
const traverseSeqArray = (f)=>traverseReadonlyArrayWithIndexSeq((_, a)=>f(a));
const sequenceSeqArray = /*#__PURE__*/ traverseSeqArray(identity);
const chain = TaskEither_flatMap;
const chainW = TaskEither_flatMap;
const chainFirst = TaskEither_tap;
const chainFirstW = TaskEither_tap;
const orElseFirst = TaskEither_tapError;
const orElseFirstW = TaskEither_tapError;
const taskEither = {
    URI,
    bimap: TaskEither_mapBoth,
    mapLeft: TaskEither_mapError,
    map: _map,
    of: TaskEither_of,
    ap: _apPar,
    chain: TaskEither_flatMap,
    alt: _alt,
    fromIO: TaskEither_fromIO,
    fromTask,
    throwError
};
const taskEitherSeq = {
    URI,
    bimap: TaskEither_mapBoth,
    mapLeft: TaskEither_mapError,
    map: _map,
    of: TaskEither_of,
    ap: _apSeq,
    chain: TaskEither_flatMap,
    alt: _alt,
    fromIO: TaskEither_fromIO,
    fromTask,
    throwError
};
const TaskEither_getApplySemigroup = /*#__PURE__*/ getApplySemigroup(TaskEither_ApplySeq);
const getApplyMonoid = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq);
const TaskEither_getSemigroup = (S)=>getApplySemigroup(ApplySeq)(getSemigroup(S));
function getTaskValidation(SE) {
    const applicativeTaskValidation = getApplicativeTaskValidation(ApplicativePar, SE);
    const altTaskValidation = getAltTaskValidation(SE);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: applicativeTaskValidation.ap,
        of: TaskEither_of,
        chain: TaskEither_flatMap,
        bimap: TaskEither_mapBoth,
        mapLeft: TaskEither_mapError,
        alt: altTaskValidation.alt,
        fromIO: TaskEither_fromIO,
        fromTask,
        throwError
    };
}
export { Alt, ApT, TaskEither_ApplicativePar as ApplicativePar, ApplicativeSeq, TaskEither_ApplyPar as ApplyPar, TaskEither_ApplySeq as ApplySeq, Bifunctor, Chain, Do, FromEither, FromIO, FromTask, TaskEither_Functor as Functor, TaskEither_Monad as Monad, MonadIO, MonadTask, MonadThrow, TaskEither_Pointed as Pointed, URI, TaskEither_alt as alt, altW, TaskEither_ap as ap, TaskEither_apFirst as apFirst, apFirstW, TaskEither_apS as apS, apSW, TaskEither_apSecond as apSecond, apSecondW, apW, TaskEither_as as as, TaskEither_asUnit as asUnit, bimap, TaskEither_bind as bind, TaskEither_bindTo as bindTo, bindW, bracket, bracketW, chain, chainEitherK, chainEitherKW, chainFirst, chainFirstEitherK, chainFirstEitherKW, chainFirstIOK, chainFirstTaskK, chainFirstW, chainIOEitherK, chainIOEitherKW, chainIOK, TaskEither_chainNullableK as chainNullableK, TaskEither_chainOptionK as chainOptionK, chainOptionKW, chainTaskK, chainTaskOptionK, chainTaskOptionKW, chainW, TaskEither_filterOrElse as filterOrElse, filterOrElseW, TaskEither_flap as flap, TaskEither_flatMap as flatMap, TaskEither_flatMapEither as flatMapEither, TaskEither_flatMapIO as flatMapIO, flatMapIOEither, TaskEither_flatMapNullable as flatMapNullable, TaskEither_flatMapOption as flatMapOption, TaskEither_flatMapTask as flatMapTask, flatMapTaskOption, flatten, flattenW, fold, foldW, fromEither, TaskEither_fromEitherK as fromEitherK, TaskEither_fromIO as fromIO, fromIOEither, fromIOEitherK, TaskEither_fromIOK as fromIOK, TaskEither_fromNullable as fromNullable, TaskEither_fromNullableK as fromNullableK, TaskEither_fromOption as fromOption, TaskEither_fromOptionK as fromOptionK, TaskEither_fromPredicate as fromPredicate, fromTask, TaskEither_fromTaskK as fromTaskK, fromTaskOption, fromTaskOptionK, getAltTaskValidation, getApplicativeTaskValidation, getApplyMonoid, TaskEither_getApplySemigroup as getApplySemigroup, TaskEither_getCompactable as getCompactable, TaskEither_getFilterable as getFilterable, getOrElse, TaskEither_getOrElseW as getOrElseW, TaskEither_getSemigroup as getSemigroup, getTaskValidation, TaskEither_left as left, leftIO, leftTask, let_ as let, TaskEither_liftNullable as liftNullable, TaskEither_liftOption as liftOption, TaskEither_map as map, TaskEither_mapBoth as mapBoth, TaskEither_mapError as mapError, mapLeft, TaskEither_match as match, TaskEither_matchE as matchE, matchEW, matchW, TaskEither_of as of, TaskEither_orElse as orElse, orElseFirst, orElseFirstIOK, orElseFirstTaskK, orElseFirstW, orElseW, TaskEither_orLeft as orLeft, TaskEither_right as right, rightIO, rightTask, sequenceArray, sequenceSeqArray, TaskEither_swap as swap, TaskEither_tap as tap, TaskEither_tapEither as tapEither, TaskEither_tapError as tapError, TaskEither_tapIO as tapIO, TaskEither_tapTask as tapTask, taskEither, taskEitherSeq, taskify, throwError, TaskEither_toUnion as toUnion, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, TaskEither_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseSeqArray, traverseSeqArrayWithIndex, tryCatch, tryCatchK };
