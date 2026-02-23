import { getApplicativeMonoid } from "./Applicative.mjs";
import { apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { ask, asks, fromReaderK, tapReader } from "./FromReader.mjs";
import { fromTaskK, tapTask } from "./FromTask.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapIO, flatMapReader, flatMapTask, isNonEmpty } from "./internal.mjs";
import { asksReaderW, local, map, of, traverseReadonlyNonEmptyArrayWithIndex } from "./Reader.mjs";
import { ap, flatMap, fromReader, map as external_ReaderT_mjs_map, of as external_ReaderT_mjs_of } from "./ReaderT.mjs";
import { ApplyPar, Functor, Monad, Pointed, fromIO, traverseReadonlyNonEmptyArrayWithIndex as external_Task_mjs_traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq } from "./Task.mjs";
const ReaderTask_fromReader = /*#__PURE__*/ fromReader(Pointed);
const fromTask = of;
const ReaderTask_fromIO = /*#__PURE__*/ flow(fromIO, fromTask);
const fromReaderIO = map(fromIO);
const ReaderTask_local = local;
const asksReaderTaskW = asksReaderW;
const asksReaderTask = asksReaderTaskW;
const _map = (fa, f)=>pipe(fa, ReaderTask_map(f));
const _apPar = (fab, fa)=>pipe(fab, ReaderTask_ap(fa));
const _apSeq = (fab, fa)=>ReaderTask_flatMap(fab, (f)=>pipe(fa, ReaderTask_map(f)));
const ReaderTask_map = /*#__PURE__*/ external_ReaderT_mjs_map(Functor);
const ReaderTask_ap = /*#__PURE__*/ ap(ApplyPar);
const apW = ReaderTask_ap;
const ReaderTask_of = /*#__PURE__*/ external_ReaderT_mjs_of(Pointed);
const ReaderTask_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flattenW = /*#__PURE__*/ ReaderTask_flatMap(identity);
const flatten = flattenW;
const URI = 'ReaderTask';
const ReaderTask_Functor = {
    URI,
    map: _map
};
const ReaderTask_as = dual(2, external_Functor_mjs_as(ReaderTask_Functor));
const ReaderTask_asUnit = asUnit(ReaderTask_Functor);
const ReaderTask_flap = /*#__PURE__*/ flap(ReaderTask_Functor);
const ReaderTask_Pointed = {
    URI,
    of: ReaderTask_of
};
const ReaderTask_ApplyPar = {
    URI,
    map: _map,
    ap: _apPar
};
const ReaderTask_apFirst = /*#__PURE__*/ apFirst(ReaderTask_ApplyPar);
const apFirstW = ReaderTask_apFirst;
const ReaderTask_apSecond = /*#__PURE__*/ apSecond(ReaderTask_ApplyPar);
const apSecondW = ReaderTask_apSecond;
const ApplicativePar = {
    URI,
    map: _map,
    ap: _apPar,
    of: ReaderTask_of
};
const ApplySeq = {
    URI,
    map: _map,
    ap: _apSeq
};
const ApplicativeSeq = {
    URI,
    map: _map,
    ap: _apSeq,
    of: ReaderTask_of
};
const Chain = {
    URI,
    map: _map,
    ap: _apPar,
    chain: ReaderTask_flatMap
};
const ReaderTask_Monad = {
    URI,
    map: _map,
    of: ReaderTask_of,
    ap: _apPar,
    chain: ReaderTask_flatMap
};
const MonadIO = {
    URI,
    map: _map,
    of: ReaderTask_of,
    ap: _apPar,
    chain: ReaderTask_flatMap,
    fromIO: ReaderTask_fromIO
};
const MonadTask = {
    URI,
    map: _map,
    of: ReaderTask_of,
    ap: _apPar,
    chain: ReaderTask_flatMap,
    fromIO: ReaderTask_fromIO,
    fromTask
};
const FromIO = {
    URI,
    fromIO: ReaderTask_fromIO
};
const FromTask = {
    URI,
    fromIO: ReaderTask_fromIO,
    fromTask
};
const FromReader = {
    URI,
    fromReader: ReaderTask_fromReader
};
const _FlatMap = {
    flatMap: ReaderTask_flatMap
};
const _FromIO = {
    fromIO: FromIO.fromIO
};
const _FromTask = {
    fromTask
};
const _FromReader = {
    fromReader: ReaderTask_fromReader
};
const ReaderTask_flatMapIO = flatMapIO(_FromIO, _FlatMap);
const ReaderTask_flatMapTask = flatMapTask(_FromTask, _FlatMap);
const ReaderTask_flatMapReader = flatMapReader(_FromReader, _FlatMap);
const flatMapReaderIO = /*#__PURE__*/ dual(2, (self, f)=>ReaderTask_flatMap(self, fromReaderIOK(f)));
const ReaderTask_tap = /*#__PURE__*/ dual(2, tap(Chain));
const ReaderTask_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, Chain));
const ReaderTask_tapReader = /*#__PURE__*/ dual(2, tapReader(FromReader, Chain));
const ReaderTask_tapTask = /*#__PURE__*/ dual(2, tapTask(FromTask, Chain));
const tapReaderIO = /*#__PURE__*/ dual(2, (self, f)=>ReaderTask_tap(self, fromReaderIOK(f)));
const ReaderTask_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = ReaderTask_flatMapIO;
const chainFirstIOK = ReaderTask_tapIO;
const ReaderTask_ask = /*#__PURE__*/ ask(FromReader);
const ReaderTask_asks = /*#__PURE__*/ asks(FromReader);
const ReaderTask_fromReaderK = /*#__PURE__*/ fromReaderK(FromReader);
const chainReaderK = ReaderTask_flatMapReader;
const chainReaderKW = ReaderTask_flatMapReader;
const chainFirstReaderK = ReaderTask_tapReader;
const chainFirstReaderKW = ReaderTask_tapReader;
const fromReaderIOK = (f)=>(...a)=>fromReaderIO(f(...a));
const chainReaderIOKW = flatMapReaderIO;
const chainReaderIOK = flatMapReaderIO;
const chainFirstReaderIOKW = tapReaderIO;
const chainFirstReaderIOK = tapReaderIO;
const ReaderTask_fromTaskK = /*#__PURE__*/ fromTaskK(FromTask);
const chainTaskK = ReaderTask_flatMapTask;
const chainFirstTaskK = ReaderTask_tapTask;
const Do = /*#__PURE__*/ ReaderTask_of(emptyRecord);
const ReaderTask_bindTo = /*#__PURE__*/ bindTo(ReaderTask_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(ReaderTask_Functor);
const ReaderTask_bind = /*#__PURE__*/ bind(Chain);
const bindW = ReaderTask_bind;
const ReaderTask_apS = /*#__PURE__*/ apS(ReaderTask_ApplyPar);
const apSW = ReaderTask_apS;
const ApT = /*#__PURE__*/ ReaderTask_of(emptyReadonlyArray);
const ReaderTask_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(traverseReadonlyNonEmptyArrayWithIndex(f), map(external_Task_mjs_traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = ReaderTask_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const ReaderTask_traverseReadonlyNonEmptyArrayWithIndexSeq = (f)=>flow(traverseReadonlyNonEmptyArrayWithIndex(f), map(traverseReadonlyNonEmptyArrayWithIndexSeq(SK)));
const traverseReadonlyArrayWithIndexSeq = (f)=>{
    const g = ReaderTask_traverseReadonlyNonEmptyArrayWithIndexSeq(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
const traverseSeqArray = (f)=>traverseReadonlyArrayWithIndexSeq((_, a)=>f(a));
const chain = ReaderTask_flatMap;
const chainW = ReaderTask_flatMap;
const chainFirst = ReaderTask_tap;
const chainFirstW = ReaderTask_tap;
const sequenceSeqArray = /*#__PURE__*/ traverseSeqArray(identity);
const readerTask = {
    URI,
    map: _map,
    of: ReaderTask_of,
    ap: _apPar,
    chain: ReaderTask_flatMap,
    fromIO: ReaderTask_fromIO,
    fromTask
};
const readerTaskSeq = {
    URI,
    map: _map,
    of: ReaderTask_of,
    ap: _apSeq,
    chain: ReaderTask_flatMap,
    fromIO: ReaderTask_fromIO,
    fromTask
};
const getSemigroup = /*#__PURE__*/ getApplySemigroup(ApplySeq);
const getMonoid = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq);
function run(ma, r) {
    return ma(r)();
}
export { ApT, ApplicativePar, ApplicativeSeq, ReaderTask_ApplyPar as ApplyPar, ApplySeq, Chain, Do, FromIO, FromReader, FromTask, ReaderTask_Functor as Functor, ReaderTask_Monad as Monad, MonadIO, MonadTask, ReaderTask_Pointed as Pointed, URI, ReaderTask_ap as ap, ReaderTask_apFirst as apFirst, apFirstW, ReaderTask_apS as apS, apSW, ReaderTask_apSecond as apSecond, apSecondW, apW, ReaderTask_as as as, ReaderTask_asUnit as asUnit, ReaderTask_ask as ask, ReaderTask_asks as asks, asksReaderTask, asksReaderTaskW, ReaderTask_bind as bind, ReaderTask_bindTo as bindTo, bindW, chain, chainFirst, chainFirstIOK, chainFirstReaderIOK, chainFirstReaderIOKW, chainFirstReaderK, chainFirstReaderKW, chainFirstTaskK, chainFirstW, chainIOK, chainReaderIOK, chainReaderIOKW, chainReaderK, chainReaderKW, chainTaskK, chainW, ReaderTask_flap as flap, ReaderTask_flatMap as flatMap, ReaderTask_flatMapIO as flatMapIO, ReaderTask_flatMapReader as flatMapReader, flatMapReaderIO, ReaderTask_flatMapTask as flatMapTask, flatten, flattenW, ReaderTask_fromIO as fromIO, ReaderTask_fromIOK as fromIOK, ReaderTask_fromReader as fromReader, fromReaderIO, fromReaderIOK, ReaderTask_fromReaderK as fromReaderK, fromTask, ReaderTask_fromTaskK as fromTaskK, getMonoid, getSemigroup, let_ as let, ReaderTask_local as local, ReaderTask_map as map, ReaderTask_of as of, readerTask, readerTaskSeq, run, sequenceArray, sequenceSeqArray, ReaderTask_tap as tap, ReaderTask_tapIO as tapIO, ReaderTask_tapReader as tapReader, tapReaderIO, ReaderTask_tapTask as tapTask, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, ReaderTask_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, ReaderTask_traverseReadonlyNonEmptyArrayWithIndexSeq as traverseReadonlyNonEmptyArrayWithIndexSeq, traverseSeqArray, traverseSeqArrayWithIndex };
