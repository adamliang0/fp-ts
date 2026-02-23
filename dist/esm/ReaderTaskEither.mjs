import { getApplicativeMonoid } from "./Applicative.mjs";
import { ap as external_Apply_mjs_ap, apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { compact, separate } from "./Compactable.mjs";
import { Functor, getCompactable, getFilterable, getSemigroup } from "./Either.mjs";
import { alt as external_EitherT_mjs_alt, altValidation, ap as external_EitherT_mjs_ap, chainNullableK, flatMap, fromNullable, fromNullableK, getOrElse, left, leftF, map, mapBoth, mapError, match, matchE, orElse, orLeft, right, rightF, swap, tapError, toUnion } from "./EitherT.mjs";
import { filter as external_Filterable_mjs_filter, filterMap as external_Filterable_mjs_filterMap, partition as external_Filterable_mjs_partition, partitionMap as external_Filterable_mjs_partitionMap } from "./Filterable.mjs";
import { chainOptionK, filterOrElse, fromEitherK, fromOption, fromOptionK, fromPredicate, tapEither } from "./FromEither.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { ask, asks, fromReaderK, tapReader } from "./FromReader.mjs";
import { fromTaskK, tapTask } from "./FromTask.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapEither, flatMapIO, flatMapNullable, flatMapOption, flatMapReader, flatMapTask, isNonEmpty, liftNullable, liftOption } from "./internal.mjs";
import { Apply, asksReaderW, local, map as external_Reader_mjs_map, of, traverseReadonlyNonEmptyArrayWithIndex } from "./Reader.mjs";
import { ApplyPar, ApplySeq, Chain, Functor as external_ReaderTask_mjs_Functor, Monad, Pointed, of as external_ReaderTask_mjs_of } from "./ReaderTask.mjs";
import { ApplicativePar } from "./Task.mjs";
import { bracketW, fromEither, fromIOEither, getApplicativeTaskValidation, left as external_TaskEither_mjs_left, leftIO, leftTask, right as external_TaskEither_mjs_right, rightIO, rightTask, traverseReadonlyNonEmptyArrayWithIndex as external_TaskEither_mjs_traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq } from "./TaskEither.mjs";
const fromTaskEither = of;
const ReaderTaskEither_left = /*#__PURE__*/ left(Pointed);
const ReaderTaskEither_right = /*#__PURE__*/ right(Pointed);
const ReaderTaskEither_rightTask = /*#__PURE__*/ flow(rightTask, fromTaskEither);
const ReaderTaskEither_leftTask = /*#__PURE__*/ flow(leftTask, fromTaskEither);
const rightReader = (ma)=>flow(ma, external_TaskEither_mjs_right);
const leftReader = (me)=>flow(me, external_TaskEither_mjs_left);
const rightReaderTask = /*#__PURE__*/ rightF(external_ReaderTask_mjs_Functor);
const leftReaderTask = /*#__PURE__*/ leftF(external_ReaderTask_mjs_Functor);
const ReaderTaskEither_rightIO = /*#__PURE__*/ flow(rightIO, fromTaskEither);
const ReaderTaskEither_leftIO = /*#__PURE__*/ flow(leftIO, fromTaskEither);
const rightReaderIO = (ma)=>flow(ma, rightIO);
const leftReaderIO = (me)=>flow(me, leftIO);
const ReaderTaskEither_fromEither = external_ReaderTask_mjs_of;
const fromReader = rightReader;
const fromIO = ReaderTaskEither_rightIO;
const fromTask = ReaderTaskEither_rightTask;
const ReaderTaskEither_fromIOEither = /*#__PURE__*/ flow(fromIOEither, fromTaskEither);
const fromReaderEither = (ma)=>flow(ma, fromEither);
const ReaderTaskEither_match = /*#__PURE__*/ match(external_ReaderTask_mjs_Functor);
const matchW = ReaderTaskEither_match;
const ReaderTaskEither_matchE = /*#__PURE__*/ matchE(Chain);
const fold = ReaderTaskEither_matchE;
const matchEW = ReaderTaskEither_matchE;
const foldW = matchEW;
const ReaderTaskEither_getOrElse = /*#__PURE__*/ getOrElse(Monad);
const getOrElseW = ReaderTaskEither_getOrElse;
const ReaderTaskEither_toUnion = /*#__PURE__*/ toUnion(external_ReaderTask_mjs_Functor);
const ReaderTaskEither_fromNullable = /*#__PURE__*/ fromNullable(Pointed);
const ReaderTaskEither_fromNullableK = /*#__PURE__*/ fromNullableK(Pointed);
const ReaderTaskEither_chainNullableK = /*#__PURE__*/ chainNullableK(Monad);
const ReaderTaskEither_local = local;
const asksReaderTaskEitherW = asksReaderW;
const asksReaderTaskEither = asksReaderTaskEitherW;
const ReaderTaskEither_orElse = /*#__PURE__*/ orElse(Monad);
const orElseW = ReaderTaskEither_orElse;
const ReaderTaskEither_tapError = /*#__PURE__*/ dual(2, tapError(Monad));
const ReaderTaskEither_orLeft = /*#__PURE__*/ orLeft(Monad);
const orLeftW = ReaderTaskEither_orLeft;
const ReaderTaskEither_swap = /*#__PURE__*/ swap(external_ReaderTask_mjs_Functor);
const fromIOEitherK = (f)=>flow(f, ReaderTaskEither_fromIOEither);
const fromTaskEitherK = (f)=>flow(f, fromTaskEither);
const fromReaderEitherK = (f)=>flow(f, fromReaderEither);
const _map = (fa, f)=>pipe(fa, ReaderTaskEither_map(f));
const _apPar = (fab, fa)=>pipe(fab, ReaderTaskEither_ap(fa));
const _apSeq = (fab, fa)=>ReaderTaskEither_flatMap(fab, (f)=>pipe(fa, ReaderTaskEither_map(f)));
const _alt = (fa, that)=>pipe(fa, ReaderTaskEither_alt(that));
const ReaderTaskEither_map = /*#__PURE__*/ map(external_ReaderTask_mjs_Functor);
const ReaderTaskEither_mapBoth = /*#__PURE__*/ dual(3, mapBoth(external_ReaderTask_mjs_Functor));
const bimap = ReaderTaskEither_mapBoth;
const ReaderTaskEither_mapError = /*#__PURE__*/ dual(2, mapError(external_ReaderTask_mjs_Functor));
const mapLeft = ReaderTaskEither_mapError;
const ReaderTaskEither_ap = /*#__PURE__*/ external_EitherT_mjs_ap(ApplyPar);
const apW = ReaderTaskEither_ap;
const ReaderTaskEither_of = ReaderTaskEither_right;
const ReaderTaskEither_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flattenW = /*#__PURE__*/ ReaderTaskEither_flatMap(identity);
const flatten = flattenW;
const ReaderTaskEither_alt = /*#__PURE__*/ external_EitherT_mjs_alt(Monad);
const altW = ReaderTaskEither_alt;
const throwError = ReaderTaskEither_left;
const URI = 'ReaderTaskEither';
const ReaderTaskEither_getCompactable = (M)=>{
    const C = getCompactable(M);
    return {
        URI,
        _E: void 0,
        compact: compact(external_ReaderTask_mjs_Functor, C),
        separate: separate(external_ReaderTask_mjs_Functor, C, Functor)
    };
};
function ReaderTaskEither_getFilterable(M) {
    const F = getFilterable(M);
    const C = ReaderTaskEither_getCompactable(M);
    const filter = external_Filterable_mjs_filter(external_ReaderTask_mjs_Functor, F);
    const filterMap = external_Filterable_mjs_filterMap(external_ReaderTask_mjs_Functor, F);
    const partition = external_Filterable_mjs_partition(external_ReaderTask_mjs_Functor, F);
    const partitionMap = external_Filterable_mjs_partitionMap(external_ReaderTask_mjs_Functor, F);
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
function getApplicativeReaderTaskValidation(A, S) {
    const ap = external_Apply_mjs_ap(Apply, getApplicativeTaskValidation(A, S));
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>pipe(fab, ap(fa)),
        of: ReaderTaskEither_of
    };
}
function getAltReaderTaskValidation(S) {
    const alt = altValidation(Monad, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        alt: (fa, that)=>pipe(fa, alt(that))
    };
}
const ReaderTaskEither_Functor = {
    URI,
    map: _map
};
const ReaderTaskEither_as = dual(2, external_Functor_mjs_as(ReaderTaskEither_Functor));
const ReaderTaskEither_asUnit = asUnit(ReaderTaskEither_Functor);
const ReaderTaskEither_flap = /*#__PURE__*/ flap(ReaderTaskEither_Functor);
const ReaderTaskEither_Pointed = {
    URI,
    of: ReaderTaskEither_of
};
const ReaderTaskEither_ApplyPar = {
    URI,
    map: _map,
    ap: _apPar
};
const ReaderTaskEither_apFirst = /*#__PURE__*/ apFirst(ReaderTaskEither_ApplyPar);
const apFirstW = ReaderTaskEither_apFirst;
const ReaderTaskEither_apSecond = /*#__PURE__*/ apSecond(ReaderTaskEither_ApplyPar);
const apSecondW = ReaderTaskEither_apSecond;
const ReaderTaskEither_ApplicativePar = {
    URI,
    map: _map,
    ap: _apPar,
    of: ReaderTaskEither_of
};
const ReaderTaskEither_ApplySeq = {
    URI,
    map: _map,
    ap: _apSeq
};
const ApplicativeSeq = {
    URI,
    map: _map,
    ap: _apSeq,
    of: ReaderTaskEither_of
};
const ReaderTaskEither_Chain = {
    URI,
    map: _map,
    ap: _apPar,
    chain: ReaderTaskEither_flatMap
};
const ReaderTaskEither_Monad = {
    URI,
    map: _map,
    ap: _apPar,
    chain: ReaderTaskEither_flatMap,
    of: ReaderTaskEither_of
};
const MonadIO = {
    URI,
    map: _map,
    ap: _apPar,
    chain: ReaderTaskEither_flatMap,
    of: ReaderTaskEither_of,
    fromIO
};
const MonadTask = {
    URI,
    map: _map,
    ap: _apPar,
    chain: ReaderTaskEither_flatMap,
    of: ReaderTaskEither_of,
    fromIO,
    fromTask
};
const MonadThrow = {
    URI,
    map: _map,
    ap: _apPar,
    chain: ReaderTaskEither_flatMap,
    of: ReaderTaskEither_of,
    throwError
};
const FromEither = {
    URI,
    fromEither: ReaderTaskEither_fromEither
};
const FromIO = {
    URI,
    fromIO
};
const FromTask = {
    URI,
    fromIO,
    fromTask
};
const FromReader = {
    URI,
    fromReader
};
const ReaderTaskEither_tap = /*#__PURE__*/ dual(2, tap(ReaderTaskEither_Chain));
const ReaderTaskEither_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, ReaderTaskEither_Chain));
const ReaderTaskEither_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, ReaderTaskEither_Chain));
const ReaderTaskEither_tapTask = /*#__PURE__*/ dual(2, tapTask(FromTask, ReaderTaskEither_Chain));
const ReaderTaskEither_tapReader = /*#__PURE__*/ dual(2, tapReader(FromReader, ReaderTaskEither_Chain));
const tapReaderEither = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_tap(self, fromReaderEitherK(f)));
const tapTaskEither = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_tap(self, fromTaskEitherK(f)));
const tapReaderTask = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_tap(self, fromReaderTaskK(f)));
const tapReaderIO = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_tap(self, fromReaderIOK(f)));
const Bifunctor = {
    URI,
    bimap: ReaderTaskEither_mapBoth,
    mapLeft: ReaderTaskEither_mapError
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const ReaderTaskEither_ask = /*#__PURE__*/ ask(FromReader);
const ReaderTaskEither_asks = /*#__PURE__*/ asks(FromReader);
const ReaderTaskEither_fromReaderK = /*#__PURE__*/ fromReaderK(FromReader);
const chainFirstReaderK = ReaderTaskEither_tapReader;
const chainFirstReaderKW = ReaderTaskEither_tapReader;
const chainFirstReaderEitherKW = tapReaderEither;
const chainFirstReaderEitherK = tapReaderEither;
const chainFirstTaskEitherKW = tapTaskEither;
const chainFirstTaskEitherK = tapTaskEither;
const fromReaderTaskK = (f)=>(...a)=>rightReaderTask(f(...a));
const chainFirstReaderTaskKW = tapReaderTask;
const chainFirstReaderTaskK = tapReaderTask;
const fromReaderIOK = (f)=>(...a)=>rightReaderIO(f(...a));
const chainFirstReaderIOKW = tapReaderIO;
const chainFirstReaderIOK = tapReaderIO;
const ReaderTaskEither_fromOption = /*#__PURE__*/ fromOption(FromEither);
const ReaderTaskEither_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const ReaderTaskEither_chainOptionK = /*#__PURE__*/ chainOptionK(FromEither, ReaderTaskEither_Chain);
const chainOptionKW = ReaderTaskEither_chainOptionK;
const _FromEither = {
    fromEither: FromEither.fromEither
};
const ReaderTaskEither_liftNullable = /*#__PURE__*/ liftNullable(_FromEither);
const ReaderTaskEither_liftOption = /*#__PURE__*/ liftOption(_FromEither);
const _FlatMap = {
    flatMap: ReaderTaskEither_flatMap
};
const _FromIO = {
    fromIO
};
const _FromTask = {
    fromTask
};
const _FromReader = {
    fromReader
};
const ReaderTaskEither_flatMapNullable = /*#__PURE__*/ flatMapNullable(_FromEither, _FlatMap);
const ReaderTaskEither_flatMapOption = /*#__PURE__*/ flatMapOption(_FromEither, _FlatMap);
const ReaderTaskEither_flatMapEither = /*#__PURE__*/ flatMapEither(_FromEither, _FlatMap);
const flatMapTaskEither = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_flatMap(self, fromTaskEitherK(f)));
const flatMapReaderTask = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_flatMap(self, fromReaderTaskK(f)));
const ReaderTaskEither_flatMapIO = /*#__PURE__*/ flatMapIO(_FromIO, _FlatMap);
const ReaderTaskEither_flatMapTask = /*#__PURE__*/ flatMapTask(_FromTask, _FlatMap);
const ReaderTaskEither_flatMapReader = /*#__PURE__*/ flatMapReader(_FromReader, _FlatMap);
const flatMapReaderIO = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_flatMap(self, fromReaderIOK(f)));
const flatMapIOEither = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_flatMap(self, fromIOEitherK(f)));
const flatMapReaderEither = /*#__PURE__*/ dual(2, (self, f)=>ReaderTaskEither_flatMap(self, fromReaderEitherK(f)));
const chainEitherK = ReaderTaskEither_flatMapEither;
const chainEitherKW = ReaderTaskEither_flatMapEither;
const chainFirstEitherK = ReaderTaskEither_tapEither;
const chainFirstEitherKW = ReaderTaskEither_tapEither;
const chainTaskEitherKW = flatMapTaskEither;
const chainTaskEitherK = flatMapTaskEither;
const chainReaderTaskKW = flatMapReaderTask;
const chainReaderTaskK = flatMapReaderTask;
const ReaderTaskEither_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const ReaderTaskEither_filterOrElse = /*#__PURE__*/ filterOrElse(FromEither, ReaderTaskEither_Chain);
const filterOrElseW = ReaderTaskEither_filterOrElse;
const ReaderTaskEither_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const ReaderTaskEither_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = ReaderTaskEither_flatMapIO;
const chainFirstIOK = ReaderTaskEither_tapIO;
const ReaderTaskEither_fromTaskK = /*#__PURE__*/ fromTaskK(FromTask);
const chainTaskK = ReaderTaskEither_flatMapTask;
const chainFirstTaskK = ReaderTaskEither_tapTask;
const chainReaderK = ReaderTaskEither_flatMapReader;
const chainReaderKW = ReaderTaskEither_flatMapReader;
const chainReaderIOKW = flatMapReaderIO;
const chainReaderIOK = flatMapReaderIO;
const chainIOEitherKW = flatMapIOEither;
const chainIOEitherK = flatMapIOEither;
const chainReaderEitherKW = flatMapReaderEither;
const chainReaderEitherK = flatMapReaderEither;
function bracket(acquire, use, release) {
    return ReaderTaskEither_bracketW(acquire, use, release);
}
function ReaderTaskEither_bracketW(acquire, use, release) {
    return (r)=>bracketW(acquire(r), (a)=>use(a)(r), (a, e)=>release(a, e)(r));
}
const Do = /*#__PURE__*/ ReaderTaskEither_of(emptyRecord);
const ReaderTaskEither_bindTo = /*#__PURE__*/ bindTo(ReaderTaskEither_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(ReaderTaskEither_Functor);
const ReaderTaskEither_bind = /*#__PURE__*/ bind(ReaderTaskEither_Chain);
const bindW = ReaderTaskEither_bind;
const ReaderTaskEither_apS = /*#__PURE__*/ apS(ReaderTaskEither_ApplyPar);
const apSW = ReaderTaskEither_apS;
const ApT = /*#__PURE__*/ ReaderTaskEither_of(emptyReadonlyArray);
const ReaderTaskEither_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(traverseReadonlyNonEmptyArrayWithIndex(f), external_Reader_mjs_map(external_TaskEither_mjs_traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = ReaderTaskEither_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const ReaderTaskEither_traverseReadonlyNonEmptyArrayWithIndexSeq = (f)=>flow(traverseReadonlyNonEmptyArrayWithIndex(f), external_Reader_mjs_map(traverseReadonlyNonEmptyArrayWithIndexSeq(SK)));
const traverseReadonlyArrayWithIndexSeq = (f)=>{
    const g = ReaderTaskEither_traverseReadonlyNonEmptyArrayWithIndexSeq(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
const traverseSeqArray = (f)=>traverseReadonlyArrayWithIndexSeq((_, a)=>f(a));
const sequenceSeqArray = /*#__PURE__*/ traverseSeqArray(identity);
const chain = ReaderTaskEither_flatMap;
const chainW = ReaderTaskEither_flatMap;
const chainFirst = ReaderTaskEither_tap;
const chainFirstW = ReaderTaskEither_tap;
const orElseFirst = ReaderTaskEither_tapError;
const orElseFirstW = ReaderTaskEither_tapError;
const readerTaskEither = {
    URI,
    map: _map,
    of: ReaderTaskEither_of,
    ap: _apPar,
    chain: ReaderTaskEither_flatMap,
    alt: _alt,
    bimap: ReaderTaskEither_mapBoth,
    mapLeft: ReaderTaskEither_mapError,
    fromIO,
    fromTask,
    throwError
};
const readerTaskEitherSeq = {
    URI,
    map: _map,
    of: ReaderTaskEither_of,
    ap: _apSeq,
    chain: ReaderTaskEither_flatMap,
    alt: _alt,
    bimap: ReaderTaskEither_mapBoth,
    mapLeft: ReaderTaskEither_mapError,
    fromIO,
    fromTask,
    throwError
};
const ReaderTaskEither_getApplySemigroup = /*#__PURE__*/ getApplySemigroup(ReaderTaskEither_ApplySeq);
const getApplyMonoid = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq);
const ReaderTaskEither_getSemigroup = (S)=>getApplySemigroup(ApplySeq)(getSemigroup(S));
function getReaderTaskValidation(SE) {
    const applicativeReaderTaskValidation = getApplicativeReaderTaskValidation(ApplicativePar, SE);
    const altReaderTaskValidation = getAltReaderTaskValidation(SE);
    return {
        URI,
        _E: void 0,
        map: _map,
        of: ReaderTaskEither_of,
        chain: ReaderTaskEither_flatMap,
        bimap: ReaderTaskEither_mapBoth,
        mapLeft: ReaderTaskEither_mapError,
        ap: applicativeReaderTaskValidation.ap,
        alt: altReaderTaskValidation.alt,
        fromIO,
        fromTask,
        throwError
    };
}
function run(ma, r) {
    return ma(r)();
}
export { Alt, ApT, ReaderTaskEither_ApplicativePar as ApplicativePar, ApplicativeSeq, ReaderTaskEither_ApplyPar as ApplyPar, ReaderTaskEither_ApplySeq as ApplySeq, Bifunctor, ReaderTaskEither_Chain as Chain, Do, FromEither, FromIO, FromReader, FromTask, ReaderTaskEither_Functor as Functor, ReaderTaskEither_Monad as Monad, MonadIO, MonadTask, MonadThrow, ReaderTaskEither_Pointed as Pointed, URI, ReaderTaskEither_alt as alt, altW, ReaderTaskEither_ap as ap, ReaderTaskEither_apFirst as apFirst, apFirstW, ReaderTaskEither_apS as apS, apSW, ReaderTaskEither_apSecond as apSecond, apSecondW, apW, ReaderTaskEither_as as as, ReaderTaskEither_asUnit as asUnit, ReaderTaskEither_ask as ask, ReaderTaskEither_asks as asks, asksReaderTaskEither, asksReaderTaskEitherW, bimap, ReaderTaskEither_bind as bind, ReaderTaskEither_bindTo as bindTo, bindW, bracket, ReaderTaskEither_bracketW as bracketW, chain, chainEitherK, chainEitherKW, chainFirst, chainFirstEitherK, chainFirstEitherKW, chainFirstIOK, chainFirstReaderEitherK, chainFirstReaderEitherKW, chainFirstReaderIOK, chainFirstReaderIOKW, chainFirstReaderK, chainFirstReaderKW, chainFirstReaderTaskK, chainFirstReaderTaskKW, chainFirstTaskEitherK, chainFirstTaskEitherKW, chainFirstTaskK, chainFirstW, chainIOEitherK, chainIOEitherKW, chainIOK, ReaderTaskEither_chainNullableK as chainNullableK, ReaderTaskEither_chainOptionK as chainOptionK, chainOptionKW, chainReaderEitherK, chainReaderEitherKW, chainReaderIOK, chainReaderIOKW, chainReaderK, chainReaderKW, chainReaderTaskK, chainReaderTaskKW, chainTaskEitherK, chainTaskEitherKW, chainTaskK, chainW, ReaderTaskEither_filterOrElse as filterOrElse, filterOrElseW, ReaderTaskEither_flap as flap, ReaderTaskEither_flatMap as flatMap, ReaderTaskEither_flatMapEither as flatMapEither, ReaderTaskEither_flatMapIO as flatMapIO, flatMapIOEither, ReaderTaskEither_flatMapNullable as flatMapNullable, ReaderTaskEither_flatMapOption as flatMapOption, ReaderTaskEither_flatMapReader as flatMapReader, flatMapReaderEither, flatMapReaderIO, flatMapReaderTask, ReaderTaskEither_flatMapTask as flatMapTask, flatMapTaskEither, flatten, flattenW, fold, foldW, ReaderTaskEither_fromEither as fromEither, ReaderTaskEither_fromEitherK as fromEitherK, fromIO, ReaderTaskEither_fromIOEither as fromIOEither, fromIOEitherK, ReaderTaskEither_fromIOK as fromIOK, ReaderTaskEither_fromNullable as fromNullable, ReaderTaskEither_fromNullableK as fromNullableK, ReaderTaskEither_fromOption as fromOption, ReaderTaskEither_fromOptionK as fromOptionK, ReaderTaskEither_fromPredicate as fromPredicate, fromReader, fromReaderEither, fromReaderEitherK, fromReaderIOK, ReaderTaskEither_fromReaderK as fromReaderK, fromReaderTaskK, fromTask, fromTaskEither, fromTaskEitherK, ReaderTaskEither_fromTaskK as fromTaskK, getAltReaderTaskValidation, getApplicativeReaderTaskValidation, getApplyMonoid, ReaderTaskEither_getApplySemigroup as getApplySemigroup, ReaderTaskEither_getCompactable as getCompactable, ReaderTaskEither_getFilterable as getFilterable, ReaderTaskEither_getOrElse as getOrElse, getOrElseW, getReaderTaskValidation, ReaderTaskEither_getSemigroup as getSemigroup, ReaderTaskEither_left as left, ReaderTaskEither_leftIO as leftIO, leftReader, leftReaderIO, leftReaderTask, ReaderTaskEither_leftTask as leftTask, let_ as let, ReaderTaskEither_liftNullable as liftNullable, ReaderTaskEither_liftOption as liftOption, ReaderTaskEither_local as local, ReaderTaskEither_map as map, ReaderTaskEither_mapBoth as mapBoth, ReaderTaskEither_mapError as mapError, mapLeft, ReaderTaskEither_match as match, ReaderTaskEither_matchE as matchE, matchEW, matchW, ReaderTaskEither_of as of, ReaderTaskEither_orElse as orElse, orElseFirst, orElseFirstW, orElseW, ReaderTaskEither_orLeft as orLeft, orLeftW, readerTaskEither, readerTaskEitherSeq, ReaderTaskEither_right as right, ReaderTaskEither_rightIO as rightIO, rightReader, rightReaderIO, rightReaderTask, ReaderTaskEither_rightTask as rightTask, run, sequenceArray, sequenceSeqArray, ReaderTaskEither_swap as swap, ReaderTaskEither_tap as tap, ReaderTaskEither_tapEither as tapEither, ReaderTaskEither_tapError as tapError, ReaderTaskEither_tapIO as tapIO, ReaderTaskEither_tapReader as tapReader, tapReaderEither, tapReaderIO, tapReaderTask, ReaderTaskEither_tapTask as tapTask, tapTaskEither, throwError, ReaderTaskEither_toUnion as toUnion, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, ReaderTaskEither_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, ReaderTaskEither_traverseReadonlyNonEmptyArrayWithIndexSeq as traverseReadonlyNonEmptyArrayWithIndexSeq, traverseSeqArray, traverseSeqArrayWithIndex };
