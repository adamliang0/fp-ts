import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { ask, asks, fromReaderK, tapReader } from "./FromReader.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapIO, flatMapReader, isNonEmpty } from "./internal.mjs";
import { Apply, Functor, Monad, Pointed, traverseReadonlyNonEmptyArrayWithIndex } from "./IO.mjs";
import { asksReaderW, local, map, of, traverseReadonlyNonEmptyArrayWithIndex as external_Reader_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./Reader.mjs";
import { ap, flatMap, fromReader, map as external_ReaderT_mjs_map, of as external_ReaderT_mjs_of } from "./ReaderT.mjs";
const ReaderIO_fromReader = /*#__PURE__*/ fromReader(Pointed);
const fromIO = of;
const ReaderIO_local = local;
const asksReaderIOW = asksReaderW;
const asksReaderIO = asksReaderIOW;
const _map = (fa, f)=>pipe(fa, ReaderIO_map(f));
const _ap = (fab, fa)=>pipe(fab, ReaderIO_ap(fa));
const ReaderIO_map = /*#__PURE__*/ external_ReaderT_mjs_map(Functor);
const ReaderIO_ap = /*#__PURE__*/ ap(Apply);
const apW = ReaderIO_ap;
const ReaderIO_of = /*#__PURE__*/ external_ReaderT_mjs_of(Pointed);
const ReaderIO_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flattenW = /*#__PURE__*/ ReaderIO_flatMap(identity);
const flatten = flattenW;
const URI = 'ReaderIO';
const ReaderIO_Functor = {
    URI,
    map: _map
};
const ReaderIO_as = dual(2, external_Functor_mjs_as(ReaderIO_Functor));
const ReaderIO_asUnit = asUnit(ReaderIO_Functor);
const ReaderIO_flap = /*#__PURE__*/ flap(ReaderIO_Functor);
const ReaderIO_Pointed = {
    URI,
    of: ReaderIO_of
};
const ReaderIO_Apply = {
    URI,
    map: _map,
    ap: _ap
};
const ReaderIO_apFirst = /*#__PURE__*/ apFirst(ReaderIO_Apply);
const ReaderIO_apSecond = /*#__PURE__*/ apSecond(ReaderIO_Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: ReaderIO_of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: ReaderIO_flatMap
};
const ReaderIO_Monad = {
    URI,
    map: _map,
    of: ReaderIO_of,
    ap: _ap,
    chain: ReaderIO_flatMap
};
const MonadIO = {
    URI,
    map: _map,
    of: ReaderIO_of,
    ap: _ap,
    chain: ReaderIO_flatMap,
    fromIO
};
const FromIO = {
    URI,
    fromIO
};
const FromReader = {
    URI,
    fromReader: ReaderIO_fromReader
};
const _FlatMap = {
    flatMap: ReaderIO_flatMap
};
const _FromIO = {
    fromIO: FromIO.fromIO
};
const _FromReader = {
    fromReader: ReaderIO_fromReader
};
const ReaderIO_flatMapIO = flatMapIO(_FromIO, _FlatMap);
const ReaderIO_flatMapReader = /*#__PURE__*/ flatMapReader(_FromReader, _FlatMap);
const ReaderIO_tap = /*#__PURE__*/ dual(2, tap(Chain));
const ReaderIO_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, Chain));
const ReaderIO_tapReader = /*#__PURE__*/ dual(2, tapReader(FromReader, Chain));
const ReaderIO_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = ReaderIO_flatMapIO;
const chainFirstIOK = ReaderIO_tapIO;
const ReaderIO_ask = /*#__PURE__*/ ask(FromReader);
const ReaderIO_asks = /*#__PURE__*/ asks(FromReader);
const ReaderIO_fromReaderK = /*#__PURE__*/ fromReaderK(FromReader);
const chainReaderK = ReaderIO_flatMapReader;
const chainReaderKW = ReaderIO_flatMapReader;
const chainFirstReaderK = ReaderIO_tapReader;
const chainFirstReaderKW = ReaderIO_tapReader;
const Do = /*#__PURE__*/ ReaderIO_of(emptyRecord);
const ReaderIO_bindTo = /*#__PURE__*/ bindTo(ReaderIO_Functor);
const ReaderIO_bind = /*#__PURE__*/ bind(Chain);
const bindW = ReaderIO_bind;
const ReaderIO_apS = /*#__PURE__*/ apS(ReaderIO_Apply);
const apSW = ReaderIO_apS;
const ApT = /*#__PURE__*/ ReaderIO_of(emptyReadonlyArray);
const ReaderIO_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(external_Reader_mjs_traverseReadonlyNonEmptyArrayWithIndex(f), map(traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = ReaderIO_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chain = ReaderIO_flatMap;
const chainW = ReaderIO_flatMap;
const chainFirst = ReaderIO_tap;
const chainFirstW = ReaderIO_tap;
export { ApT, Applicative, ReaderIO_Apply as Apply, Chain, Do, FromIO, FromReader, ReaderIO_Functor as Functor, ReaderIO_Monad as Monad, MonadIO, ReaderIO_Pointed as Pointed, URI, ReaderIO_ap as ap, ReaderIO_apFirst as apFirst, ReaderIO_apS as apS, apSW, ReaderIO_apSecond as apSecond, apW, ReaderIO_as as as, ReaderIO_asUnit as asUnit, ReaderIO_ask as ask, ReaderIO_asks as asks, asksReaderIO, asksReaderIOW, ReaderIO_bind as bind, ReaderIO_bindTo as bindTo, bindW, chain, chainFirst, chainFirstIOK, chainFirstReaderK, chainFirstReaderKW, chainFirstW, chainIOK, chainReaderK, chainReaderKW, chainW, ReaderIO_flap as flap, ReaderIO_flatMap as flatMap, ReaderIO_flatMapIO as flatMapIO, ReaderIO_flatMapReader as flatMapReader, flatten, flattenW, fromIO, ReaderIO_fromIOK as fromIOK, ReaderIO_fromReader as fromReader, ReaderIO_fromReaderK as fromReaderK, ReaderIO_local as local, ReaderIO_map as map, ReaderIO_of as of, sequenceArray, ReaderIO_tap as tap, ReaderIO_tapIO as tapIO, ReaderIO_tapReader as tapReader, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, ReaderIO_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex };
