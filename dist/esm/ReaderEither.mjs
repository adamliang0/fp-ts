import { getApplicativeMonoid } from "./Applicative.mjs";
import { ap as external_Apply_mjs_ap, apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { compact, separate } from "./Compactable.mjs";
import { Functor, getApplicativeValidation, getCompactable, getFilterable, getSemigroup, traverseReadonlyNonEmptyArrayWithIndex } from "./Either.mjs";
import { alt as external_EitherT_mjs_alt, altValidation, ap as external_EitherT_mjs_ap, flatMap, getOrElse, left, leftF, map, mapBoth, mapError, match, matchE, orElse, orLeft, right, rightF, swap, tapError, toUnion } from "./EitherT.mjs";
import { filter as external_Filterable_mjs_filter, filterMap as external_Filterable_mjs_filterMap, partition as external_Filterable_mjs_partition, partitionMap as external_Filterable_mjs_partitionMap } from "./Filterable.mjs";
import { chainOptionK, filterOrElse, fromEitherK, fromOption, fromOptionK, fromPredicate, tapEither } from "./FromEither.mjs";
import { ask, asks, fromReaderK, tapReader } from "./FromReader.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapEither, flatMapNullable, flatMapOption, flatMapReader, isNonEmpty, liftNullable, liftOption } from "./internal.mjs";
import { Apply, Functor as external_Reader_mjs_Functor, Monad, Pointed, asksReaderW, local, map as external_Reader_mjs_map, of, traverseReadonlyNonEmptyArrayWithIndex as external_Reader_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./Reader.mjs";
const ReaderEither_left = /*#__PURE__*/ left(Pointed);
const ReaderEither_right = /*#__PURE__*/ right(Pointed);
const rightReader = /*#__PURE__*/ rightF(external_Reader_mjs_Functor);
const leftReader = /*#__PURE__*/ leftF(external_Reader_mjs_Functor);
const fromEither = of;
const fromReader = rightReader;
const ReaderEither_match = /*#__PURE__*/ match(external_Reader_mjs_Functor);
const matchW = ReaderEither_match;
const ReaderEither_matchE = /*#__PURE__*/ matchE(Monad);
const fold = ReaderEither_matchE;
const matchEW = ReaderEither_matchE;
const foldW = matchEW;
const ReaderEither_getOrElse = /*#__PURE__*/ getOrElse(Monad);
const getOrElseW = ReaderEither_getOrElse;
const ReaderEither_toUnion = /*#__PURE__*/ toUnion(external_Reader_mjs_Functor);
const ReaderEither_local = local;
const asksReaderEitherW = asksReaderW;
const asksReaderEither = asksReaderEitherW;
const ReaderEither_orElse = /*#__PURE__*/ orElse(Monad);
const orElseW = ReaderEither_orElse;
const ReaderEither_tapError = /*#__PURE__*/ dual(2, tapError(Monad));
const ReaderEither_orLeft = /*#__PURE__*/ orLeft(Monad);
const orLeftW = ReaderEither_orLeft;
const ReaderEither_swap = /*#__PURE__*/ swap(external_Reader_mjs_Functor);
const _map = (fa, f)=>pipe(fa, ReaderEither_map(f));
const _ap = (fab, fa)=>pipe(fab, ReaderEither_ap(fa));
const _alt = (fa, that)=>pipe(fa, ReaderEither_alt(that));
const ReaderEither_map = /*#__PURE__*/ map(external_Reader_mjs_Functor);
const ReaderEither_mapBoth = /*#__PURE__*/ dual(3, mapBoth(external_Reader_mjs_Functor));
const bimap = ReaderEither_mapBoth;
const ReaderEither_mapError = /*#__PURE__*/ dual(2, mapError(external_Reader_mjs_Functor));
const mapLeft = ReaderEither_mapError;
const ReaderEither_ap = /*#__PURE__*/ external_EitherT_mjs_ap(Apply);
const apW = ReaderEither_ap;
const ReaderEither_of = ReaderEither_right;
const ReaderEither_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flattenW = /*#__PURE__*/ ReaderEither_flatMap(identity);
const flatten = flattenW;
const ReaderEither_alt = /*#__PURE__*/ external_EitherT_mjs_alt(Monad);
const altW = ReaderEither_alt;
const throwError = ReaderEither_left;
const URI = 'ReaderEither';
const ReaderEither_getCompactable = (M)=>{
    const C = getCompactable(M);
    return {
        URI,
        _E: void 0,
        compact: compact(external_Reader_mjs_Functor, C),
        separate: separate(external_Reader_mjs_Functor, C, Functor)
    };
};
function ReaderEither_getFilterable(M) {
    const F = getFilterable(M);
    const C = ReaderEither_getCompactable(M);
    const filter = external_Filterable_mjs_filter(external_Reader_mjs_Functor, F);
    const filterMap = external_Filterable_mjs_filterMap(external_Reader_mjs_Functor, F);
    const partition = external_Filterable_mjs_partition(external_Reader_mjs_Functor, F);
    const partitionMap = external_Filterable_mjs_partitionMap(external_Reader_mjs_Functor, F);
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
function getApplicativeReaderValidation(S) {
    const ap = external_Apply_mjs_ap(Apply, getApplicativeValidation(S));
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>pipe(fab, ap(fa)),
        of: ReaderEither_of
    };
}
function getAltReaderValidation(S) {
    const alt = altValidation(Monad, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        alt: (fa, that)=>pipe(fa, alt(that))
    };
}
const ReaderEither_Functor = {
    URI,
    map: _map
};
const ReaderEither_as = dual(2, external_Functor_mjs_as(ReaderEither_Functor));
const ReaderEither_asUnit = asUnit(ReaderEither_Functor);
const ReaderEither_flap = /*#__PURE__*/ flap(ReaderEither_Functor);
const ReaderEither_Pointed = {
    URI,
    of: ReaderEither_of
};
const ReaderEither_Apply = {
    URI,
    map: _map,
    ap: _ap
};
const ReaderEither_apFirst = /*#__PURE__*/ apFirst(ReaderEither_Apply);
const apFirstW = ReaderEither_apFirst;
const ReaderEither_apSecond = /*#__PURE__*/ apSecond(ReaderEither_Apply);
const apSecondW = ReaderEither_apSecond;
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: ReaderEither_of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: ReaderEither_flatMap
};
const ReaderEither_Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: ReaderEither_of,
    chain: ReaderEither_flatMap
};
const FromEither = {
    URI,
    fromEither
};
const FromReader = {
    URI,
    fromReader
};
const ReaderEither_tap = /*#__PURE__*/ dual(2, tap(Chain));
const ReaderEither_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, Chain));
const ReaderEither_tapReader = /*#__PURE__*/ dual(2, tapReader(FromReader, Chain));
const Bifunctor = {
    URI,
    bimap: ReaderEither_mapBoth,
    mapLeft: ReaderEither_mapError
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const ReaderEither_ask = /*#__PURE__*/ ask(FromReader);
const ReaderEither_asks = /*#__PURE__*/ asks(FromReader);
const ReaderEither_fromReaderK = /*#__PURE__*/ fromReaderK(FromReader);
const chainFirstReaderK = ReaderEither_tapReader;
const chainFirstReaderKW = ReaderEither_tapReader;
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of: ReaderEither_of,
    chain: ReaderEither_flatMap,
    throwError
};
const ReaderEither_fromOption = /*#__PURE__*/ fromOption(FromEither);
const ReaderEither_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const ReaderEither_chainOptionK = /*#__PURE__*/ chainOptionK(FromEither, Chain);
const chainOptionKW = ReaderEither_chainOptionK;
const _FromEither = {
    fromEither: FromEither.fromEither
};
const _FromReader = {
    fromReader: FromReader.fromReader
};
const ReaderEither_liftNullable = /*#__PURE__*/ liftNullable(_FromEither);
const ReaderEither_liftOption = /*#__PURE__*/ liftOption(_FromEither);
const _FlatMap = {
    flatMap: ReaderEither_flatMap
};
const ReaderEither_flatMapNullable = /*#__PURE__*/ flatMapNullable(_FromEither, _FlatMap);
const ReaderEither_flatMapOption = /*#__PURE__*/ flatMapOption(_FromEither, _FlatMap);
const ReaderEither_flatMapEither = /*#__PURE__*/ flatMapEither(_FromEither, _FlatMap);
const ReaderEither_flatMapReader = /*#__PURE__*/ flatMapReader(_FromReader, _FlatMap);
const chainEitherK = ReaderEither_flatMapEither;
const chainEitherKW = ReaderEither_flatMapEither;
const chainFirstEitherK = ReaderEither_tapEither;
const chainFirstEitherKW = ReaderEither_tapEither;
const chainReaderK = ReaderEither_flatMapReader;
const chainReaderKW = ReaderEither_flatMapReader;
const ReaderEither_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const ReaderEither_filterOrElse = /*#__PURE__*/ filterOrElse(FromEither, Chain);
const filterOrElseW = ReaderEither_filterOrElse;
const ReaderEither_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const Do = /*#__PURE__*/ ReaderEither_of(emptyRecord);
const ReaderEither_bindTo = /*#__PURE__*/ bindTo(ReaderEither_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(ReaderEither_Functor);
const ReaderEither_bind = /*#__PURE__*/ bind(Chain);
const bindW = ReaderEither_bind;
const ReaderEither_apS = /*#__PURE__*/ apS(ReaderEither_Apply);
const apSW = ReaderEither_apS;
const ApT = /*#__PURE__*/ ReaderEither_of(emptyReadonlyArray);
const ReaderEither_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(external_Reader_mjs_traverseReadonlyNonEmptyArrayWithIndex(f), external_Reader_mjs_map(traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = ReaderEither_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chain = ReaderEither_flatMap;
const chainW = ReaderEither_flatMap;
const chainFirst = ReaderEither_tap;
const chainFirstW = ReaderEither_tap;
const orElseFirst = ReaderEither_tapError;
const orElseFirstW = ReaderEither_tapError;
const readerEither = {
    URI,
    bimap: ReaderEither_mapBoth,
    mapLeft: ReaderEither_mapError,
    map: _map,
    of: ReaderEither_of,
    ap: _ap,
    chain: ReaderEither_flatMap,
    alt: _alt,
    throwError: ReaderEither_left
};
const ReaderEither_getApplySemigroup = /*#__PURE__*/ getApplySemigroup(ReaderEither_Apply);
const getApplyMonoid = /*#__PURE__*/ getApplicativeMonoid(Applicative);
const ReaderEither_getSemigroup = (S)=>getApplySemigroup(Apply)(getSemigroup(S));
function getReaderValidation(SE) {
    const applicativeReaderValidation = getApplicativeReaderValidation(SE);
    const altReaderValidation = getAltReaderValidation(SE);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: applicativeReaderValidation.ap,
        of: ReaderEither_of,
        chain: ReaderEither_flatMap,
        bimap: ReaderEither_mapBoth,
        mapLeft: ReaderEither_mapError,
        alt: altReaderValidation.alt,
        throwError
    };
}
export { Alt, ApT, Applicative, ReaderEither_Apply as Apply, Bifunctor, Chain, Do, FromEither, FromReader, ReaderEither_Functor as Functor, ReaderEither_Monad as Monad, MonadThrow, ReaderEither_Pointed as Pointed, URI, ReaderEither_alt as alt, altW, ReaderEither_ap as ap, ReaderEither_apFirst as apFirst, apFirstW, ReaderEither_apS as apS, apSW, ReaderEither_apSecond as apSecond, apSecondW, apW, ReaderEither_as as as, ReaderEither_asUnit as asUnit, ReaderEither_ask as ask, ReaderEither_asks as asks, asksReaderEither, asksReaderEitherW, bimap, ReaderEither_bind as bind, ReaderEither_bindTo as bindTo, bindW, chain, chainEitherK, chainEitherKW, chainFirst, chainFirstEitherK, chainFirstEitherKW, chainFirstReaderK, chainFirstReaderKW, chainFirstW, ReaderEither_chainOptionK as chainOptionK, chainOptionKW, chainReaderK, chainReaderKW, chainW, ReaderEither_filterOrElse as filterOrElse, filterOrElseW, ReaderEither_flap as flap, ReaderEither_flatMap as flatMap, ReaderEither_flatMapEither as flatMapEither, ReaderEither_flatMapNullable as flatMapNullable, ReaderEither_flatMapOption as flatMapOption, ReaderEither_flatMapReader as flatMapReader, flatten, flattenW, fold, foldW, fromEither, ReaderEither_fromEitherK as fromEitherK, ReaderEither_fromOption as fromOption, ReaderEither_fromOptionK as fromOptionK, ReaderEither_fromPredicate as fromPredicate, fromReader, ReaderEither_fromReaderK as fromReaderK, getAltReaderValidation, getApplicativeReaderValidation, getApplyMonoid, ReaderEither_getApplySemigroup as getApplySemigroup, ReaderEither_getCompactable as getCompactable, ReaderEither_getFilterable as getFilterable, ReaderEither_getOrElse as getOrElse, getOrElseW, getReaderValidation, ReaderEither_getSemigroup as getSemigroup, ReaderEither_left as left, leftReader, let_ as let, ReaderEither_liftNullable as liftNullable, ReaderEither_liftOption as liftOption, ReaderEither_local as local, ReaderEither_map as map, ReaderEither_mapBoth as mapBoth, ReaderEither_mapError as mapError, mapLeft, ReaderEither_match as match, ReaderEither_matchE as matchE, matchEW, matchW, ReaderEither_of as of, ReaderEither_orElse as orElse, orElseFirst, orElseFirstW, orElseW, ReaderEither_orLeft as orLeft, orLeftW, readerEither, ReaderEither_right as right, rightReader, sequenceArray, ReaderEither_swap as swap, ReaderEither_tap as tap, ReaderEither_tapEither as tapEither, ReaderEither_tapError as tapError, ReaderEither_tapReader as tapReader, throwError, ReaderEither_toUnion as toUnion, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, ReaderEither_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex };
