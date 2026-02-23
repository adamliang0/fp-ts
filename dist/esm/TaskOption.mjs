import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { compact, separate } from "./Compactable.mjs";
import { filter, filterMap, partition, partitionMap } from "./Filterable.mjs";
import { chainEitherK, fromEitherK, tapEither } from "./FromEither.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { fromTaskK, tapTask } from "./FromTask.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapIO, flatMapTask, head, isNonEmpty, isNone, none, singleton, some, tail } from "./internal.mjs";
import { Compactable, Filterable, Functor, fromEither, map, traverseReadonlyNonEmptyArrayWithIndex } from "./Option.mjs";
import { alt, ap, chainNullableK, chainOptionK, flatMap, fromEither as external_OptionT_mjs_fromEither, fromF, fromNullable, fromNullableK, fromOptionK, fromPredicate, getOrElse, map as external_OptionT_mjs_map, match, matchE, some as external_OptionT_mjs_some, zero } from "./OptionT.mjs";
import { ApplyPar, Chain, Functor as external_Task_mjs_Functor, Monad, Pointed, fromIO, map as external_Task_mjs_map, of, traverseReadonlyNonEmptyArrayWithIndex as external_Task_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./Task.mjs";
import { guard } from "./Zero.mjs";
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
const TaskOption_some = /*#__PURE__*/ external_OptionT_mjs_some(Pointed);
const TaskOption_fromPredicate = /*#__PURE__*/ fromPredicate(Pointed);
const fromOption = of;
const TaskOption_fromEither = /*#__PURE__*/ external_OptionT_mjs_fromEither(Pointed);
const TaskOption_fromIO = (ma)=>fromTask(fromIO(ma));
const fromTask = /*#__PURE__*/ fromF(external_Task_mjs_Functor);
const fromTaskEither = /*#__PURE__*/ external_Task_mjs_map(fromEither);
const TaskOption_match = /*#__PURE__*/ match(external_Task_mjs_Functor);
const matchW = TaskOption_match;
const TaskOption_matchE = /*#__PURE__*/ matchE(Chain);
const fold = TaskOption_matchE;
const matchEW = TaskOption_matchE;
const foldW = matchEW;
const TaskOption_getOrElse = /*#__PURE__*/ getOrElse(Monad);
const getOrElseW = TaskOption_getOrElse;
const TaskOption_fromNullable = /*#__PURE__*/ fromNullable(Pointed);
const tryCatch = (f)=>()=>_async_to_generator(function*() {
            try {
                return yield f().then(some);
            } catch (reason) {
                return none;
            }
        })();
const tryCatchK = (f)=>(...a)=>tryCatch(()=>f(...a));
const TaskOption_fromNullableK = /*#__PURE__*/ fromNullableK(Pointed);
const TaskOption_chainNullableK = /*#__PURE__*/ chainNullableK(Monad);
const TaskOption_fromOptionK = /*#__PURE__*/ fromOptionK(Pointed);
const TaskOption_chainOptionK = /*#__PURE__*/ chainOptionK(Monad);
const TaskOption_map = /*#__PURE__*/ external_OptionT_mjs_map(external_Task_mjs_Functor);
const TaskOption_ap = /*#__PURE__*/ ap(ApplyPar);
const TaskOption_of = TaskOption_some;
const _FromIO = {
    fromIO: TaskOption_fromIO
};
const _FromTask = {
    fromTask
};
const TaskOption_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const _FlatMap = {
    flatMap: TaskOption_flatMap
};
const TaskOption_flatMapIO = /*#__PURE__*/ flatMapIO(_FromIO, _FlatMap);
const TaskOption_flatMapTask = /*#__PURE__*/ flatMapTask(_FromTask, _FlatMap);
const flatten = /*#__PURE__*/ TaskOption_flatMap(identity);
const TaskOption_alt = /*#__PURE__*/ alt(Monad);
const altW = TaskOption_alt;
const TaskOption_zero = /*#__PURE__*/ zero(Pointed);
const TaskOption_none = /*#__PURE__*/ TaskOption_zero();
const TaskOption_compact = /*#__PURE__*/ compact(external_Task_mjs_Functor, Compactable);
const TaskOption_separate = /*#__PURE__*/ separate(external_Task_mjs_Functor, Compactable, Functor);
const TaskOption_filter = /*#__PURE__*/ filter(external_Task_mjs_Functor, Filterable);
const TaskOption_filterMap = /*#__PURE__*/ filterMap(external_Task_mjs_Functor, Filterable);
const TaskOption_partition = /*#__PURE__*/ partition(external_Task_mjs_Functor, Filterable);
const TaskOption_partitionMap = /*#__PURE__*/ partitionMap(external_Task_mjs_Functor, Filterable);
const _map = (fa, f)=>pipe(fa, TaskOption_map(f));
const _ap = (fab, fa)=>pipe(fab, TaskOption_ap(fa));
const _alt = (fa, that)=>pipe(fa, TaskOption_alt(that));
const _filter = (fa, predicate)=>pipe(fa, TaskOption_filter(predicate));
const _filterMap = (fa, f)=>pipe(fa, TaskOption_filterMap(f));
const _partition = (fa, predicate)=>pipe(fa, TaskOption_partition(predicate));
const _partitionMap = (fa, f)=>pipe(fa, TaskOption_partitionMap(f));
const URI = 'TaskOption';
const TaskOption_Functor = {
    URI,
    map: _map
};
const TaskOption_as = dual(2, external_Functor_mjs_as(TaskOption_Functor));
const TaskOption_asUnit = asUnit(TaskOption_Functor);
const TaskOption_flap = /*#__PURE__*/ flap(TaskOption_Functor);
const TaskOption_Pointed = {
    URI,
    of: TaskOption_of
};
const TaskOption_ApplyPar = {
    URI,
    map: _map,
    ap: _ap
};
const TaskOption_apFirst = /*#__PURE__*/ apFirst(TaskOption_ApplyPar);
const TaskOption_apSecond = /*#__PURE__*/ apSecond(TaskOption_ApplyPar);
const ApplicativePar = {
    URI,
    map: _map,
    ap: _ap,
    of: TaskOption_of
};
const _apSeq = (fab, fa)=>TaskOption_flatMap(fab, (f)=>pipe(fa, TaskOption_map(f)));
const ApplySeq = {
    URI,
    map: _map,
    ap: _apSeq
};
const ApplicativeSeq = {
    URI,
    map: _map,
    ap: _apSeq,
    of: TaskOption_of
};
const TaskOption_Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: TaskOption_flatMap
};
const FromEither = {
    URI,
    fromEither: TaskOption_fromEither
};
const FromIO = {
    URI,
    fromIO: TaskOption_fromIO
};
const FromTask = {
    URI,
    fromIO: TaskOption_fromIO,
    fromTask
};
const TaskOption_tap = /*#__PURE__*/ dual(2, tap(TaskOption_Chain));
const TaskOption_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, TaskOption_Chain));
const TaskOption_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, TaskOption_Chain));
const TaskOption_tapTask = /*#__PURE__*/ dual(2, tapTask(FromTask, TaskOption_Chain));
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Zero = {
    URI,
    zero: TaskOption_zero
};
const TaskOption_guard = /*#__PURE__*/ guard(Zero, TaskOption_Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of: TaskOption_of,
    alt: _alt,
    zero: TaskOption_zero
};
const TaskOption_Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: TaskOption_of,
    chain: TaskOption_flatMap
};
const MonadIO = {
    URI,
    map: _map,
    ap: _ap,
    of: TaskOption_of,
    chain: TaskOption_flatMap,
    fromIO: TaskOption_fromIO
};
const MonadTask = {
    URI,
    map: _map,
    ap: _ap,
    of: TaskOption_of,
    chain: TaskOption_flatMap,
    fromIO: TaskOption_fromIO,
    fromTask
};
const TaskOption_Compactable = {
    URI,
    compact: TaskOption_compact,
    separate: TaskOption_separate
};
const TaskOption_Filterable = {
    URI,
    map: _map,
    compact: TaskOption_compact,
    separate: TaskOption_separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const TaskOption_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = TaskOption_flatMapIO;
const chainFirstIOK = TaskOption_tapIO;
const TaskOption_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const TaskOption_chainEitherK = /*#__PURE__*/ chainEitherK(FromEither, TaskOption_Chain);
const chainFirstEitherK = TaskOption_tapEither;
const TaskOption_fromTaskK = /*#__PURE__*/ fromTaskK(FromTask);
const chainTaskK = TaskOption_flatMapTask;
const chainFirstTaskK = TaskOption_tapTask;
const Do = /*#__PURE__*/ TaskOption_of(emptyRecord);
const TaskOption_bindTo = /*#__PURE__*/ bindTo(TaskOption_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(TaskOption_Functor);
const TaskOption_bind = /*#__PURE__*/ bind(TaskOption_Chain);
const TaskOption_apS = /*#__PURE__*/ apS(TaskOption_ApplyPar);
const ApT = /*#__PURE__*/ TaskOption_of(emptyReadonlyArray);
const TaskOption_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(external_Task_mjs_traverseReadonlyNonEmptyArrayWithIndex(f), external_Task_mjs_map(traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = TaskOption_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseReadonlyNonEmptyArrayWithIndexSeq = (f)=>(as)=>()=>tail(as).reduce((acc, a, i)=>acc.then((obs)=>isNone(obs) ? acc : f(i + 1, a)().then((ob)=>{
                        if (isNone(ob)) return ob;
                        obs.value.push(ob.value);
                        return obs;
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
const chain = TaskOption_flatMap;
const chainFirst = TaskOption_tap;
export { Alt, Alternative, ApT, ApplicativePar, ApplicativeSeq, TaskOption_ApplyPar as ApplyPar, ApplySeq, TaskOption_Chain as Chain, TaskOption_Compactable as Compactable, Do, TaskOption_Filterable as Filterable, FromEither, FromIO, FromTask, TaskOption_Functor as Functor, TaskOption_Monad as Monad, MonadIO, MonadTask, TaskOption_Pointed as Pointed, URI, Zero, TaskOption_alt as alt, altW, TaskOption_ap as ap, TaskOption_apFirst as apFirst, TaskOption_apS as apS, TaskOption_apSecond as apSecond, TaskOption_as as as, TaskOption_asUnit as asUnit, TaskOption_bind as bind, TaskOption_bindTo as bindTo, chain, TaskOption_chainEitherK as chainEitherK, chainFirst, chainFirstEitherK, chainFirstIOK, chainFirstTaskK, chainIOK, TaskOption_chainNullableK as chainNullableK, TaskOption_chainOptionK as chainOptionK, chainTaskK, TaskOption_compact as compact, TaskOption_filter as filter, TaskOption_filterMap as filterMap, TaskOption_flap as flap, TaskOption_flatMap as flatMap, TaskOption_flatMapIO as flatMapIO, TaskOption_flatMapTask as flatMapTask, flatten, fold, foldW, TaskOption_fromEither as fromEither, TaskOption_fromEitherK as fromEitherK, TaskOption_fromIO as fromIO, TaskOption_fromIOK as fromIOK, TaskOption_fromNullable as fromNullable, TaskOption_fromNullableK as fromNullableK, fromOption, TaskOption_fromOptionK as fromOptionK, TaskOption_fromPredicate as fromPredicate, fromTask, fromTaskEither, TaskOption_fromTaskK as fromTaskK, TaskOption_getOrElse as getOrElse, getOrElseW, TaskOption_guard as guard, let_ as let, TaskOption_map as map, TaskOption_match as match, TaskOption_matchE as matchE, matchEW, matchW, TaskOption_none as none, TaskOption_of as of, TaskOption_partition as partition, TaskOption_partitionMap as partitionMap, TaskOption_separate as separate, sequenceArray, sequenceSeqArray, TaskOption_some as some, TaskOption_tap as tap, TaskOption_tapEither as tapEither, TaskOption_tapIO as tapIO, TaskOption_tapTask as tapTask, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, TaskOption_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseSeqArray, traverseSeqArrayWithIndex, tryCatch, tryCatchK, TaskOption_zero as zero };
