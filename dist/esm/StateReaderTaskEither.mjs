import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { map, match } from "./Either.mjs";
import { chainOptionK, filterOrElse, fromEitherK, fromOption, fromOptionK, fromPredicate, tapEither } from "./FromEither.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { ask, asks, fromReaderK, tapReader } from "./FromReader.mjs";
import { chainStateK, fromStateK, get, gets, modify, put } from "./FromState.mjs";
import { fromTaskK, tapTask } from "./FromTask.mjs";
import { dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, flatMapEither, flatMapIO, flatMapOption, flatMapReader, flatMapTask, head, isLeft, isNonEmpty, tail } from "./internal.mjs";
import { local } from "./Reader.mjs";
import { Chain, Functor, Monad, Pointed, alt, altW, bimap, fromIOEither, fromReaderEither, fromTaskEither, left, leftIO, leftReader, leftTask, map as external_ReaderTaskEither_mjs_map, mapLeft, right, rightIO, rightReader, rightTask } from "./ReaderTaskEither.mjs";
import { ap, evaluate, execute, flatMap, fromF, fromState, map as external_StateT_mjs_map, of } from "./StateT.mjs";
const StateReaderTaskEither_left = (e)=>()=>left(e);
const StateReaderTaskEither_right = /*#__PURE__*/ of(Pointed);
function StateReaderTaskEither_rightTask(ma) {
    return fromReaderTaskEither(rightTask(ma));
}
function StateReaderTaskEither_leftTask(me) {
    return fromReaderTaskEither(leftTask(me));
}
function StateReaderTaskEither_rightReader(ma) {
    return fromReaderTaskEither(rightReader(ma));
}
function StateReaderTaskEither_leftReader(me) {
    return fromReaderTaskEither(leftReader(me));
}
function StateReaderTaskEither_rightIO(ma) {
    return fromReaderTaskEither(rightIO(ma));
}
function StateReaderTaskEither_leftIO(me) {
    return fromReaderTaskEither(leftIO(me));
}
const rightState = (sa)=>flow(sa, right);
const leftState = (me)=>(s)=>left(me(s)[0]);
const fromEither = /*#__PURE__*/ match((e)=>StateReaderTaskEither_left(e), StateReaderTaskEither_right);
const fromReader = StateReaderTaskEither_rightReader;
const fromIO = StateReaderTaskEither_rightIO;
const fromTask = StateReaderTaskEither_rightTask;
const StateReaderTaskEither_fromState = /*#__PURE__*/ fromState(Pointed);
const StateReaderTaskEither_fromTaskEither = (ma)=>fromReaderTaskEither(fromTaskEither(ma));
const StateReaderTaskEither_fromIOEither = (ma)=>fromReaderTaskEither(fromIOEither(ma));
const StateReaderTaskEither_fromReaderEither = (ma)=>fromReaderTaskEither(fromReaderEither(ma));
const fromReaderTaskEither = /*#__PURE__*/ fromF(Functor);
const StateReaderTaskEither_local = (f)=>(ma)=>flow(ma, local(f));
const asksStateReaderTaskEitherW = (f)=>(s)=>(r)=>f(r)(s)(r);
const asksStateReaderTaskEither = asksStateReaderTaskEitherW;
const fromIOEitherK = (f)=>(...a)=>StateReaderTaskEither_fromIOEither(f(...a));
const fromTaskEitherK = (f)=>(...a)=>StateReaderTaskEither_fromTaskEither(f(...a));
const fromReaderTaskEitherK = (f)=>(...a)=>fromReaderTaskEither(f(...a));
const chainReaderTaskEitherKW = (f)=>(ma)=>StateReaderTaskEither_flatMap(ma, fromReaderTaskEitherK(f));
const chainReaderTaskEitherK = chainReaderTaskEitherKW;
const _map = (fa, f)=>pipe(fa, StateReaderTaskEither_map(f));
const _ap = (fab, fa)=>pipe(fab, StateReaderTaskEither_ap(fa));
const _alt = (fa, that)=>(s)=>pipe(fa(s), alt(()=>that()(s)));
const _bimap = (fea, f, g)=>(s)=>pipe(fea(s), bimap(f, ([a, s])=>[
                g(a),
                s
            ]));
const _mapLeft = (fea, f)=>(s)=>pipe(fea(s), mapLeft(f));
const StateReaderTaskEither_map = /*#__PURE__*/ external_StateT_mjs_map(Functor);
const StateReaderTaskEither_bimap = (f, g)=>(fa)=>_bimap(fa, f, g);
const StateReaderTaskEither_mapLeft = (f)=>(fa)=>_mapLeft(fa, f);
const StateReaderTaskEither_ap = /*#__PURE__*/ ap(Chain);
const apW = StateReaderTaskEither_ap;
const StateReaderTaskEither_of = StateReaderTaskEither_right;
const _FromIO = {
    fromIO
};
const _FromTask = {
    fromTask
};
const _FromReader = {
    fromReader
};
const _FromEither = {
    fromEither
};
const StateReaderTaskEither_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const _FlatMap = {
    flatMap: StateReaderTaskEither_flatMap
};
const flatMapTaskEither = /*#__PURE__*/ dual(2, (self, f)=>StateReaderTaskEither_flatMap(self, (a)=>fromTaskEitherK(f)(a)));
const StateReaderTaskEither_flatMapIO = /*#__PURE__*/ flatMapIO(_FromIO, _FlatMap);
const StateReaderTaskEither_flatMapTask = /*#__PURE__*/ flatMapTask(_FromTask, _FlatMap);
const StateReaderTaskEither_flatMapReader = /*#__PURE__*/ flatMapReader(_FromReader, _FlatMap);
const flatMapIOEither = /*#__PURE__*/ dual(2, (self, f)=>StateReaderTaskEither_flatMap(self, (a)=>fromIOEitherK(f)(a)));
const StateReaderTaskEither_flatMapEither = /*#__PURE__*/ dual(2, flatMapEither(_FromEither, _FlatMap));
const StateReaderTaskEither_flatMapOption = /*#__PURE__*/ flatMapOption(_FromEither, _FlatMap);
const flatMapReaderTaskEither = /*#__PURE__*/ dual(2, (self, f)=>StateReaderTaskEither_flatMap(self, (a)=>fromReaderTaskEitherK(f)(a)));
const flatMapState = /*#__PURE__*/ dual(2, (self, f)=>StateReaderTaskEither_flatMap(self, StateReaderTaskEither_fromStateK(f)));
const flattenW = /*#__PURE__*/ StateReaderTaskEither_flatMap(identity);
const flatten = flattenW;
const StateReaderTaskEither_altW = (that)=>(fa)=>(r)=>pipe(fa(r), altW(()=>that()(r)));
const StateReaderTaskEither_alt = StateReaderTaskEither_altW;
const throwError = StateReaderTaskEither_left;
const URI = 'StateReaderTaskEither';
const StateReaderTaskEither_Functor = {
    URI,
    map: _map
};
const StateReaderTaskEither_as = dual(2, external_Functor_mjs_as(StateReaderTaskEither_Functor));
const StateReaderTaskEither_asUnit = asUnit(StateReaderTaskEither_Functor);
const StateReaderTaskEither_flap = /*#__PURE__*/ flap(StateReaderTaskEither_Functor);
const StateReaderTaskEither_Pointed = {
    URI,
    of: StateReaderTaskEither_of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const StateReaderTaskEither_apFirst = /*#__PURE__*/ apFirst(Apply);
const apFirstW = StateReaderTaskEither_apFirst;
const StateReaderTaskEither_apSecond = /*#__PURE__*/ apSecond(Apply);
const apSecondW = StateReaderTaskEither_apSecond;
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: StateReaderTaskEither_of
};
const StateReaderTaskEither_Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: StateReaderTaskEither_flatMap
};
const FromState = {
    URI,
    fromState: StateReaderTaskEither_fromState
};
const StateReaderTaskEither_get = /*#__PURE__*/ get(FromState);
const StateReaderTaskEither_put = /*#__PURE__*/ put(FromState);
const StateReaderTaskEither_modify = /*#__PURE__*/ modify(FromState);
const StateReaderTaskEither_gets = /*#__PURE__*/ gets(FromState);
const StateReaderTaskEither_fromStateK = /*#__PURE__*/ fromStateK(FromState);
const StateReaderTaskEither_chainStateK = /*#__PURE__*/ chainStateK(FromState, StateReaderTaskEither_Chain);
const StateReaderTaskEither_Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: StateReaderTaskEither_of,
    chain: StateReaderTaskEither_flatMap
};
const MonadIO = {
    URI,
    map: _map,
    ap: _ap,
    of: StateReaderTaskEither_of,
    chain: StateReaderTaskEither_flatMap,
    fromIO
};
const MonadTask = {
    URI,
    map: _map,
    ap: _ap,
    of: StateReaderTaskEither_of,
    chain: StateReaderTaskEither_flatMap,
    fromIO,
    fromTask
};
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of: StateReaderTaskEither_of,
    chain: StateReaderTaskEither_flatMap,
    throwError
};
const FromEither = {
    URI,
    fromEither
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
const StateReaderTaskEither_tap = /*#__PURE__*/ dual(2, tap(StateReaderTaskEither_Chain));
const StateReaderTaskEither_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, StateReaderTaskEither_Chain));
const StateReaderTaskEither_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, StateReaderTaskEither_Chain));
const StateReaderTaskEither_tapTask = /*#__PURE__*/ dual(2, tapTask(FromTask, StateReaderTaskEither_Chain));
const StateReaderTaskEither_tapReader = /*#__PURE__*/ dual(2, tapReader(FromReader, StateReaderTaskEither_Chain));
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const StateReaderTaskEither_ask = /*#__PURE__*/ ask(FromReader);
const StateReaderTaskEither_asks = /*#__PURE__*/ asks(FromReader);
const StateReaderTaskEither_fromReaderK = /*#__PURE__*/ fromReaderK(FromReader);
const chainReaderK = StateReaderTaskEither_flatMapReader;
const chainReaderKW = StateReaderTaskEither_flatMapReader;
const chainFirstReaderK = StateReaderTaskEither_tapReader;
const chainFirstReaderKW = StateReaderTaskEither_tapReader;
const StateReaderTaskEither_fromOption = /*#__PURE__*/ fromOption(FromEither);
const StateReaderTaskEither_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const StateReaderTaskEither_chainOptionK = /*#__PURE__*/ chainOptionK(FromEither, StateReaderTaskEither_Chain);
const chainOptionKW = StateReaderTaskEither_chainOptionK;
const chainEitherK = StateReaderTaskEither_flatMapEither;
const chainEitherKW = StateReaderTaskEither_flatMapEither;
const chainFirstEitherK = StateReaderTaskEither_tapEither;
const chainFirstEitherKW = StateReaderTaskEither_tapEither;
const StateReaderTaskEither_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const StateReaderTaskEither_filterOrElse = /*#__PURE__*/ filterOrElse(FromEither, StateReaderTaskEither_Chain);
const filterOrElseW = StateReaderTaskEither_filterOrElse;
const StateReaderTaskEither_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const StateReaderTaskEither_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = StateReaderTaskEither_flatMapIO;
const chainFirstIOK = StateReaderTaskEither_tapIO;
const chainTaskEitherKW = flatMapTaskEither;
const chainTaskEitherK = flatMapTaskEither;
const chainIOEitherKW = flatMapIOEither;
const chainIOEitherK = flatMapIOEither;
const StateReaderTaskEither_fromTaskK = /*#__PURE__*/ fromTaskK(FromTask);
const chainTaskK = StateReaderTaskEither_flatMapTask;
const chainFirstTaskK = StateReaderTaskEither_tapTask;
const StateReaderTaskEither_evaluate = /*#__PURE__*/ evaluate(Functor);
const StateReaderTaskEither_execute = /*#__PURE__*/ execute(Functor);
const StateReaderTaskEither_bindTo = /*#__PURE__*/ bindTo(StateReaderTaskEither_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(StateReaderTaskEither_Functor);
const StateReaderTaskEither_bind = /*#__PURE__*/ bind(StateReaderTaskEither_Chain);
const bindW = StateReaderTaskEither_bind;
const StateReaderTaskEither_apS = /*#__PURE__*/ apS(Apply);
const apSW = StateReaderTaskEither_apS;
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>(s)=>(r)=>()=>tail(as).reduce((acc, a, i)=>acc.then((ebs)=>isLeft(ebs) ? acc : f(i + 1, a)(ebs.right[1])(r)().then((eb)=>{
                                if (isLeft(eb)) return eb;
                                const [b, s] = eb.right;
                                ebs.right[0].push(b);
                                ebs.right[1] = s;
                                return ebs;
                            })), f(0, head(as))(s)(r)().then(map(([b, s])=>[
                            [
                                b
                            ],
                            s
                        ])));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : StateReaderTaskEither_of(emptyReadonlyArray);
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chain = StateReaderTaskEither_flatMap;
const chainW = StateReaderTaskEither_flatMap;
const chainFirst = StateReaderTaskEither_tap;
const chainFirstW = StateReaderTaskEither_tap;
const stateReaderTaskEither = {
    URI,
    map: _map,
    of: StateReaderTaskEither_of,
    ap: _ap,
    chain: StateReaderTaskEither_flatMap,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    fromIO,
    fromTask,
    throwError
};
const stateReaderTaskEitherSeq = {
    URI,
    map: _map,
    of: StateReaderTaskEither_of,
    ap: _ap,
    chain: StateReaderTaskEither_flatMap,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    fromIO,
    fromTask,
    throwError
};
const evalState = (fsa, s)=>pipe(fsa(s), external_ReaderTaskEither_mjs_map(([a])=>a));
const execState = (fsa, s)=>pipe(fsa(s), external_ReaderTaskEither_mjs_map(([_, s])=>s));
function run(ma, s, r) {
    return ma(s)(r)();
}
export { Alt, Applicative, Apply, Bifunctor, StateReaderTaskEither_Chain as Chain, FromEither, FromIO, FromReader, FromState, FromTask, StateReaderTaskEither_Functor as Functor, StateReaderTaskEither_Monad as Monad, MonadIO, MonadTask, MonadThrow, StateReaderTaskEither_Pointed as Pointed, URI, StateReaderTaskEither_alt as alt, StateReaderTaskEither_altW as altW, StateReaderTaskEither_ap as ap, StateReaderTaskEither_apFirst as apFirst, apFirstW, StateReaderTaskEither_apS as apS, apSW, StateReaderTaskEither_apSecond as apSecond, apSecondW, apW, StateReaderTaskEither_as as as, StateReaderTaskEither_asUnit as asUnit, StateReaderTaskEither_ask as ask, StateReaderTaskEither_asks as asks, asksStateReaderTaskEither, asksStateReaderTaskEitherW, StateReaderTaskEither_bimap as bimap, StateReaderTaskEither_bind as bind, StateReaderTaskEither_bindTo as bindTo, bindW, chain, chainEitherK, chainEitherKW, chainFirst, chainFirstEitherK, chainFirstEitherKW, chainFirstIOK, chainFirstReaderK, chainFirstReaderKW, chainFirstTaskK, chainFirstW, chainIOEitherK, chainIOEitherKW, chainIOK, StateReaderTaskEither_chainOptionK as chainOptionK, chainOptionKW, chainReaderK, chainReaderKW, chainReaderTaskEitherK, chainReaderTaskEitherKW, StateReaderTaskEither_chainStateK as chainStateK, chainTaskEitherK, chainTaskEitherKW, chainTaskK, chainW, evalState, StateReaderTaskEither_evaluate as evaluate, execState, StateReaderTaskEither_execute as execute, StateReaderTaskEither_filterOrElse as filterOrElse, filterOrElseW, StateReaderTaskEither_flap as flap, StateReaderTaskEither_flatMap as flatMap, StateReaderTaskEither_flatMapEither as flatMapEither, StateReaderTaskEither_flatMapIO as flatMapIO, flatMapIOEither, StateReaderTaskEither_flatMapOption as flatMapOption, StateReaderTaskEither_flatMapReader as flatMapReader, flatMapReaderTaskEither, flatMapState, StateReaderTaskEither_flatMapTask as flatMapTask, flatMapTaskEither, flatten, flattenW, fromEither, StateReaderTaskEither_fromEitherK as fromEitherK, fromIO, StateReaderTaskEither_fromIOEither as fromIOEither, fromIOEitherK, StateReaderTaskEither_fromIOK as fromIOK, StateReaderTaskEither_fromOption as fromOption, StateReaderTaskEither_fromOptionK as fromOptionK, StateReaderTaskEither_fromPredicate as fromPredicate, fromReader, StateReaderTaskEither_fromReaderEither as fromReaderEither, StateReaderTaskEither_fromReaderK as fromReaderK, fromReaderTaskEither, fromReaderTaskEitherK, StateReaderTaskEither_fromState as fromState, StateReaderTaskEither_fromStateK as fromStateK, fromTask, StateReaderTaskEither_fromTaskEither as fromTaskEither, fromTaskEitherK, StateReaderTaskEither_fromTaskK as fromTaskK, StateReaderTaskEither_get as get, StateReaderTaskEither_gets as gets, StateReaderTaskEither_left as left, StateReaderTaskEither_leftIO as leftIO, StateReaderTaskEither_leftReader as leftReader, leftState, StateReaderTaskEither_leftTask as leftTask, let_ as let, StateReaderTaskEither_local as local, StateReaderTaskEither_map as map, StateReaderTaskEither_mapLeft as mapLeft, StateReaderTaskEither_modify as modify, StateReaderTaskEither_of as of, StateReaderTaskEither_put as put, StateReaderTaskEither_right as right, StateReaderTaskEither_rightIO as rightIO, StateReaderTaskEither_rightReader as rightReader, rightState, StateReaderTaskEither_rightTask as rightTask, run, sequenceArray, stateReaderTaskEither, stateReaderTaskEitherSeq, StateReaderTaskEither_tap as tap, StateReaderTaskEither_tapEither as tapEither, StateReaderTaskEither_tapIO as tapIO, StateReaderTaskEither_tapReader as tapReader, StateReaderTaskEither_tapTask as tapTask, throwError, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex };
