import { getApplicativeMonoid } from "./Applicative.mjs";
import { ap as external_Apply_mjs_ap, apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { compact, separate } from "./Compactable.mjs";
import { Functor, getApplicativeValidation, getCompactable, getFilterable, getSemigroup, traverseReadonlyNonEmptyArrayWithIndex, tryCatch } from "./Either.mjs";
import { alt as external_EitherT_mjs_alt, altValidation, ap as external_EitherT_mjs_ap, flatMap, getOrElse, left, leftF, map, mapBoth, mapError, match, matchE, orElse, orLeft, right, rightF, swap, tapError, toUnion } from "./EitherT.mjs";
import { filter as external_Filterable_mjs_filter, filterMap as external_Filterable_mjs_filterMap, partition as external_Filterable_mjs_partition, partitionMap as external_Filterable_mjs_partitionMap } from "./Filterable.mjs";
import { chainOptionK, filterOrElse, fromEitherK, fromOption, fromOptionK, fromPredicate, tapEither } from "./FromEither.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapEither, flatMapIO, flatMapNullable, flatMapOption, head, isLeft, isNonEmpty, liftNullable, liftOption, right as external_internal_mjs_right } from "./internal.mjs";
import { Apply, Functor as external_IO_mjs_Functor, Monad, Pointed, flatMap as external_IO_mjs_flatMap, map as external_IO_mjs_map, of, traverseReadonlyNonEmptyArrayWithIndex as external_IO_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./IO.mjs";
const IOEither_left = /*#__PURE__*/ left(Pointed);
const IOEither_right = /*#__PURE__*/ right(Pointed);
const rightIO = /*#__PURE__*/ rightF(external_IO_mjs_Functor);
const leftIO = /*#__PURE__*/ leftF(external_IO_mjs_Functor);
const fromEither = of;
const fromIO = rightIO;
const IOEither_match = /*#__PURE__*/ match(external_IO_mjs_Functor);
const matchW = IOEither_match;
const IOEither_matchE = /*#__PURE__*/ matchE(Monad);
const fold = IOEither_matchE;
const matchEW = IOEither_matchE;
const foldW = matchEW;
const IOEither_getOrElse = /*#__PURE__*/ getOrElse(Monad);
const getOrElseW = IOEither_getOrElse;
const IOEither_tryCatch = (f, onThrow)=>()=>tryCatch(f, onThrow);
const tryCatchK = (f, onThrow)=>(...a)=>IOEither_tryCatch(()=>f(...a), onThrow);
const IOEither_toUnion = /*#__PURE__*/ toUnion(external_IO_mjs_Functor);
const IOEither_orElse = /*#__PURE__*/ orElse(Monad);
const orElseW = IOEither_orElse;
const IOEither_tapError = /*#__PURE__*/ dual(2, tapError(Monad));
const orElseFirstIOK = (onLeft)=>IOEither_tapError(IOEither_fromIOK(onLeft));
const IOEither_orLeft = /*#__PURE__*/ orLeft(Monad);
const IOEither_swap = /*#__PURE__*/ swap(external_IO_mjs_Functor);
const _map = (fa, f)=>pipe(fa, IOEither_map(f));
const _ap = (fab, fa)=>pipe(fab, IOEither_ap(fa));
const _apSeq = (fab, fa)=>IOEither_flatMap(fab, (f)=>pipe(fa, IOEither_map(f)));
const _alt = (fa, that)=>pipe(fa, IOEither_alt(that));
const IOEither_map = /*#__PURE__*/ map(external_IO_mjs_Functor);
const IOEither_mapBoth = /*#__PURE__*/ dual(3, mapBoth(external_IO_mjs_Functor));
const bimap = IOEither_mapBoth;
const IOEither_mapError = /*#__PURE__*/ dual(2, mapError(external_IO_mjs_Functor));
const mapLeft = IOEither_mapError;
const IOEither_ap = /*#__PURE__*/ external_EitherT_mjs_ap(Apply);
const apW = IOEither_ap;
const IOEither_of = IOEither_right;
const IOEither_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flattenW = /*#__PURE__*/ IOEither_flatMap(identity);
const flatten = flattenW;
const IOEither_alt = /*#__PURE__*/ external_EitherT_mjs_alt(Monad);
const altW = IOEither_alt;
const throwError = IOEither_left;
const URI = 'IOEither';
function getApplicativeIOValidation(S) {
    const ap = external_Apply_mjs_ap(Apply, getApplicativeValidation(S));
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>pipe(fab, ap(fa)),
        of: IOEither_of
    };
}
function getAltIOValidation(S) {
    const alt = altValidation(Monad, S);
    return {
        URI,
        _E: void 0,
        map: _map,
        alt: (fa, that)=>pipe(fa, alt(that))
    };
}
const IOEither_getCompactable = (M)=>{
    const C = getCompactable(M);
    return {
        URI,
        _E: void 0,
        compact: compact(external_IO_mjs_Functor, C),
        separate: separate(external_IO_mjs_Functor, C, Functor)
    };
};
function IOEither_getFilterable(M) {
    const F = getFilterable(M);
    const C = IOEither_getCompactable(M);
    const filter = external_Filterable_mjs_filter(external_IO_mjs_Functor, F);
    const filterMap = external_Filterable_mjs_filterMap(external_IO_mjs_Functor, F);
    const partition = external_Filterable_mjs_partition(external_IO_mjs_Functor, F);
    const partitionMap = external_Filterable_mjs_partitionMap(external_IO_mjs_Functor, F);
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
const IOEither_Functor = {
    URI,
    map: _map
};
const IOEither_as = dual(2, external_Functor_mjs_as(IOEither_Functor));
const IOEither_asUnit = asUnit(IOEither_Functor);
const IOEither_flap = /*#__PURE__*/ flap(IOEither_Functor);
const IOEither_Pointed = {
    URI,
    of: IOEither_of
};
const Bifunctor = {
    URI,
    bimap: IOEither_mapBoth,
    mapLeft: IOEither_mapError
};
const ApplyPar = {
    URI,
    map: _map,
    ap: _ap
};
const IOEither_apFirst = /*#__PURE__*/ apFirst(ApplyPar);
const apFirstW = IOEither_apFirst;
const IOEither_apSecond = /*#__PURE__*/ apSecond(ApplyPar);
const apSecondW = IOEither_apSecond;
const ApplicativePar = {
    URI,
    map: _map,
    ap: _ap,
    of: IOEither_of
};
const ApplicativeSeq = {
    URI,
    map: _map,
    ap: _apSeq,
    of: IOEither_of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: IOEither_flatMap
};
const IOEither_Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: IOEither_of,
    chain: IOEither_flatMap
};
const FromEither = {
    URI,
    fromEither
};
const FromIO = {
    URI,
    fromIO
};
const IOEither_tap = /*#__PURE__*/ dual(2, tap(Chain));
const IOEither_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, Chain));
const IOEither_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, Chain));
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const MonadIO = {
    URI,
    map: _map,
    ap: _ap,
    of: IOEither_of,
    chain: IOEither_flatMap,
    fromIO: fromIO
};
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of: IOEither_of,
    chain: IOEither_flatMap,
    throwError
};
const IOEither_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainFirstIOK = IOEither_tapIO;
const IOEither_fromOption = /*#__PURE__*/ fromOption(FromEither);
const IOEither_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const IOEither_chainOptionK = /*#__PURE__*/ chainOptionK(FromEither, Chain);
const chainOptionKW = IOEither_chainOptionK;
const _FromEither = {
    fromEither: FromEither.fromEither
};
const _FromIO = {
    fromIO
};
const IOEither_liftNullable = /*#__PURE__*/ liftNullable(_FromEither);
const IOEither_liftOption = /*#__PURE__*/ liftOption(_FromEither);
const _FlatMap = {
    flatMap: IOEither_flatMap
};
const IOEither_flatMapNullable = /*#__PURE__*/ flatMapNullable(_FromEither, _FlatMap);
const IOEither_flatMapOption = /*#__PURE__*/ flatMapOption(_FromEither, _FlatMap);
const IOEither_flatMapEither = /*#__PURE__*/ flatMapEither(_FromEither, _FlatMap);
const IOEither_flatMapIO = /*#__PURE__*/ flatMapIO(_FromIO, _FlatMap);
const chainIOK = IOEither_flatMapIO;
const chainEitherK = IOEither_flatMapEither;
const chainEitherKW = IOEither_flatMapEither;
const chainFirstEitherK = IOEither_tapEither;
const chainFirstEitherKW = IOEither_tapEither;
const IOEither_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const IOEither_filterOrElse = /*#__PURE__*/ filterOrElse(FromEither, Chain);
const filterOrElseW = IOEither_filterOrElse;
const IOEither_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const bracket = (acquire, use, release)=>bracketW(acquire, use, release);
const bracketW = (acquire, use, release)=>IOEither_flatMap(acquire, (a)=>external_IO_mjs_flatMap(use(a), (e)=>IOEither_flatMap(release(a, e), ()=>of(e))));
const Do = /*#__PURE__*/ IOEither_of(emptyRecord);
const IOEither_bindTo = /*#__PURE__*/ bindTo(IOEither_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(IOEither_Functor);
const IOEither_bind = /*#__PURE__*/ bind(Chain);
const bindW = IOEither_bind;
const IOEither_apS = /*#__PURE__*/ apS(ApplyPar);
const apSW = IOEither_apS;
const ApT = /*#__PURE__*/ IOEither_of(emptyReadonlyArray);
const IOEither_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(external_IO_mjs_traverseReadonlyNonEmptyArrayWithIndex(f), external_IO_mjs_map(traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = IOEither_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseReadonlyNonEmptyArrayWithIndexSeq = (f)=>(as)=>()=>{
            const e = f(0, head(as))();
            if (isLeft(e)) return e;
            const out = [
                e.right
            ];
            for(let i = 1; i < as.length; i++){
                const e = f(i, as[i])();
                if (isLeft(e)) return e;
                out.push(e.right);
            }
            return external_internal_mjs_right(out);
        };
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
const Applicative = ApplicativePar;
const chain = IOEither_flatMap;
const chainW = IOEither_flatMap;
const chainFirst = IOEither_tap;
const chainFirstW = IOEither_tap;
const orElseFirst = IOEither_tapError;
const orElseFirstW = IOEither_tapError;
const ioEither = {
    URI,
    bimap: IOEither_mapBoth,
    mapLeft: IOEither_mapError,
    map: _map,
    of: IOEither_of,
    ap: _ap,
    chain: IOEither_flatMap,
    alt: _alt,
    fromIO,
    throwError
};
const IOEither_getApplySemigroup = /*#__PURE__*/ getApplySemigroup(ApplyPar);
const getApplyMonoid = /*#__PURE__*/ getApplicativeMonoid(ApplicativePar);
const IOEither_getSemigroup = (S)=>getApplySemigroup(Apply)(getSemigroup(S));
function getIOValidation(SE) {
    const applicativeIOValidation = getApplicativeIOValidation(SE);
    const altIOValidation = getAltIOValidation(SE);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: applicativeIOValidation.ap,
        of: IOEither_of,
        chain: IOEither_flatMap,
        bimap: IOEither_mapBoth,
        mapLeft: IOEither_mapError,
        alt: altIOValidation.alt,
        fromIO,
        throwError
    };
}
export { Alt, ApT, Applicative, ApplicativePar, ApplicativeSeq, ApplyPar, Bifunctor, Chain, Do, FromEither, FromIO, IOEither_Functor as Functor, IOEither_Monad as Monad, MonadIO, MonadThrow, IOEither_Pointed as Pointed, URI, IOEither_alt as alt, altW, IOEither_ap as ap, IOEither_apFirst as apFirst, apFirstW, IOEither_apS as apS, apSW, IOEither_apSecond as apSecond, apSecondW, apW, IOEither_as as as, IOEither_asUnit as asUnit, bimap, IOEither_bind as bind, IOEither_bindTo as bindTo, bindW, bracket, bracketW, chain, chainEitherK, chainEitherKW, chainFirst, chainFirstEitherK, chainFirstEitherKW, chainFirstIOK, chainFirstW, chainIOK, IOEither_chainOptionK as chainOptionK, chainOptionKW, chainW, IOEither_filterOrElse as filterOrElse, filterOrElseW, IOEither_flap as flap, IOEither_flatMap as flatMap, IOEither_flatMapEither as flatMapEither, IOEither_flatMapIO as flatMapIO, IOEither_flatMapNullable as flatMapNullable, IOEither_flatMapOption as flatMapOption, flatten, flattenW, fold, foldW, fromEither, IOEither_fromEitherK as fromEitherK, fromIO, IOEither_fromIOK as fromIOK, IOEither_fromOption as fromOption, IOEither_fromOptionK as fromOptionK, IOEither_fromPredicate as fromPredicate, getAltIOValidation, getApplicativeIOValidation, getApplyMonoid, IOEither_getApplySemigroup as getApplySemigroup, IOEither_getCompactable as getCompactable, IOEither_getFilterable as getFilterable, getIOValidation, IOEither_getOrElse as getOrElse, getOrElseW, IOEither_getSemigroup as getSemigroup, ioEither, IOEither_left as left, leftIO, let_ as let, IOEither_liftNullable as liftNullable, IOEither_liftOption as liftOption, IOEither_map as map, IOEither_mapBoth as mapBoth, IOEither_mapError as mapError, mapLeft, IOEither_match as match, IOEither_matchE as matchE, matchEW, matchW, IOEither_of as of, IOEither_orElse as orElse, orElseFirst, orElseFirstIOK, orElseFirstW, orElseW, IOEither_orLeft as orLeft, IOEither_right as right, rightIO, sequenceArray, sequenceSeqArray, IOEither_swap as swap, IOEither_tap as tap, IOEither_tapEither as tapEither, IOEither_tapError as tapError, IOEither_tapIO as tapIO, throwError, IOEither_toUnion as toUnion, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, IOEither_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseSeqArray, traverseSeqArrayWithIndex, IOEither_tryCatch as tryCatch, tryCatchK };
