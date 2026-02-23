import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { compact, separate } from "./Compactable.mjs";
import { filter, filterMap, partition, partitionMap } from "./Filterable.mjs";
import { fromEitherK, tapEither } from "./FromEither.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapEither, flatMapIO, isNonEmpty } from "./internal.mjs";
import { Apply, Chain, Functor, Monad, Pointed, map, of, traverseReadonlyNonEmptyArrayWithIndex } from "./IO.mjs";
import { Compactable, Filterable, Functor as external_Option_mjs_Functor, fromEither, toNullable, toUndefined, traverseReadonlyNonEmptyArrayWithIndex as external_Option_mjs_traverseReadonlyNonEmptyArrayWithIndex } from "./Option.mjs";
import { alt, ap, chainNullableK, flatMap, fromEither as external_OptionT_mjs_fromEither, fromF, fromNullable, fromNullableK, fromOptionK, fromPredicate, getOrElse, map as external_OptionT_mjs_map, match, matchE, some, zero } from "./OptionT.mjs";
import { guard } from "./Zero.mjs";
const IOOption_some = /*#__PURE__*/ some(Pointed);
const IOOption_fromPredicate = /*#__PURE__*/ fromPredicate(Pointed);
const fromOption = of;
const IOOption_fromEither = /*#__PURE__*/ external_OptionT_mjs_fromEither(Pointed);
const fromIO = /*#__PURE__*/ fromF(Functor);
const fromIOEither = /*#__PURE__*/ map(fromEither);
const IOOption_match = /*#__PURE__*/ match(Functor);
const matchW = IOOption_match;
const IOOption_matchE = /*#__PURE__*/ matchE(Chain);
const fold = IOOption_matchE;
const matchEW = IOOption_matchE;
const IOOption_getOrElse = /*#__PURE__*/ getOrElse(Monad);
const getOrElseW = IOOption_getOrElse;
const IOOption_toUndefined = map(toUndefined);
const IOOption_toNullable = map(toNullable);
const IOOption_fromNullable = /*#__PURE__*/ fromNullable(Pointed);
const IOOption_fromNullableK = /*#__PURE__*/ fromNullableK(Pointed);
const IOOption_chainNullableK = /*#__PURE__*/ chainNullableK(Monad);
const IOOption_fromOptionK = /*#__PURE__*/ fromOptionK(Pointed);
const IOOption_map = /*#__PURE__*/ external_OptionT_mjs_map(Functor);
const IOOption_ap = /*#__PURE__*/ ap(Apply);
const IOOption_of = IOOption_some;
const IOOption_flatMap = /*#__PURE__*/ dual(2, flatMap(Monad));
const flatten = /*#__PURE__*/ IOOption_flatMap(identity);
const IOOption_alt = /*#__PURE__*/ alt(Monad);
const altW = IOOption_alt;
const IOOption_zero = /*#__PURE__*/ zero(Pointed);
const none = /*#__PURE__*/ IOOption_zero();
const IOOption_compact = /*#__PURE__*/ compact(Functor, Compactable);
const IOOption_separate = /*#__PURE__*/ separate(Functor, Compactable, external_Option_mjs_Functor);
const IOOption_filter = /*#__PURE__*/ filter(Functor, Filterable);
const IOOption_filterMap = /*#__PURE__*/ filterMap(Functor, Filterable);
const IOOption_partition = /*#__PURE__*/ partition(Functor, Filterable);
const IOOption_partitionMap = /*#__PURE__*/ partitionMap(Functor, Filterable);
const _map = (fa, f)=>pipe(fa, IOOption_map(f));
const _ap = (fab, fa)=>pipe(fab, IOOption_ap(fa));
const _alt = (fa, that)=>pipe(fa, IOOption_alt(that));
const _filter = (fa, predicate)=>pipe(fa, IOOption_filter(predicate));
const _filterMap = (fa, f)=>pipe(fa, IOOption_filterMap(f));
const _partition = (fa, predicate)=>pipe(fa, IOOption_partition(predicate));
const _partitionMap = (fa, f)=>pipe(fa, IOOption_partitionMap(f));
const URI = 'IOOption';
const IOOption_Functor = {
    URI,
    map: _map
};
const IOOption_as = dual(2, external_Functor_mjs_as(IOOption_Functor));
const IOOption_asUnit = asUnit(IOOption_Functor);
const IOOption_flap = /*#__PURE__*/ flap(IOOption_Functor);
const IOOption_Pointed = {
    URI,
    of: IOOption_of
};
const IOOption_Apply = {
    URI,
    map: _map,
    ap: _ap
};
const IOOption_apFirst = /*#__PURE__*/ apFirst(IOOption_Apply);
const IOOption_apSecond = /*#__PURE__*/ apSecond(IOOption_Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: IOOption_of
};
const IOOption_Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: IOOption_flatMap
};
const FromEither = {
    URI,
    fromEither: IOOption_fromEither
};
const FromIO = {
    URI,
    fromIO
};
const IOOption_tap = /*#__PURE__*/ dual(2, tap(IOOption_Chain));
const IOOption_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, IOOption_Chain));
const IOOption_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, IOOption_Chain));
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Zero = {
    URI,
    zero: IOOption_zero
};
const IOOption_guard = /*#__PURE__*/ guard(Zero, IOOption_Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of: IOOption_of,
    alt: _alt,
    zero: IOOption_zero
};
const IOOption_Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: IOOption_of,
    chain: IOOption_flatMap
};
const MonadIO = {
    URI,
    map: _map,
    ap: _ap,
    of: IOOption_of,
    chain: IOOption_flatMap,
    fromIO
};
const IOOption_Compactable = {
    URI,
    compact: IOOption_compact,
    separate: IOOption_separate
};
const IOOption_Filterable = {
    URI,
    map: _map,
    compact: IOOption_compact,
    separate: IOOption_separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const _FlatMap = {
    flatMap: IOOption_flatMap
};
const _FromIO = {
    fromIO: FromIO.fromIO
};
const _FromEither = {
    fromEither: IOOption_fromEither
};
const IOOption_flatMapIO = flatMapIO(_FromIO, _FlatMap);
const flatMapOption = /*#__PURE__*/ dual(2, (self, f)=>IOOption_flatMap(self, IOOption_fromOptionK(f)));
const IOOption_flatMapEither = /*#__PURE__*/ flatMapEither(_FromEither, _FlatMap);
const flatMapNullable = /*#__PURE__*/ dual(2, (self, f)=>IOOption_flatMap(self, IOOption_fromNullableK(f)));
const IOOption_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = IOOption_flatMapIO;
const chainFirstIOK = IOOption_tapIO;
const IOOption_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const chainEitherK = IOOption_flatMapEither;
const chainFirstEitherK = IOOption_tapEither;
const chainOptionK = flatMapOption;
const Do = /*#__PURE__*/ IOOption_of(emptyRecord);
const IOOption_bindTo = /*#__PURE__*/ bindTo(IOOption_Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(IOOption_Functor);
const IOOption_bind = /*#__PURE__*/ bind(IOOption_Chain);
const IOOption_apS = /*#__PURE__*/ apS(IOOption_Apply);
const ApT = /*#__PURE__*/ IOOption_of(emptyReadonlyArray);
const IOOption_traverseReadonlyNonEmptyArrayWithIndex = (f)=>flow(traverseReadonlyNonEmptyArrayWithIndex(f), map(external_Option_mjs_traverseReadonlyNonEmptyArrayWithIndex(SK)));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = IOOption_traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const chain = IOOption_flatMap;
const chainFirst = IOOption_tap;
export { Alt, Alternative, ApT, Applicative, IOOption_Apply as Apply, IOOption_Chain as Chain, IOOption_Compactable as Compactable, Do, IOOption_Filterable as Filterable, FromEither, FromIO, IOOption_Functor as Functor, IOOption_Monad as Monad, MonadIO, IOOption_Pointed as Pointed, URI, Zero, IOOption_alt as alt, altW, IOOption_ap as ap, IOOption_apFirst as apFirst, IOOption_apS as apS, IOOption_apSecond as apSecond, IOOption_as as as, IOOption_asUnit as asUnit, IOOption_bind as bind, IOOption_bindTo as bindTo, chain, chainEitherK, chainFirst, chainFirstEitherK, chainFirstIOK, chainIOK, IOOption_chainNullableK as chainNullableK, chainOptionK, IOOption_compact as compact, IOOption_filter as filter, IOOption_filterMap as filterMap, IOOption_flap as flap, IOOption_flatMap as flatMap, IOOption_flatMapEither as flatMapEither, IOOption_flatMapIO as flatMapIO, flatMapNullable, flatMapOption, flatten, fold, IOOption_fromEither as fromEither, IOOption_fromEitherK as fromEitherK, fromIO, fromIOEither, IOOption_fromIOK as fromIOK, IOOption_fromNullable as fromNullable, IOOption_fromNullableK as fromNullableK, fromOption, IOOption_fromOptionK as fromOptionK, IOOption_fromPredicate as fromPredicate, IOOption_getOrElse as getOrElse, getOrElseW, IOOption_guard as guard, let_ as let, IOOption_map as map, IOOption_match as match, IOOption_matchE as matchE, matchEW, matchW, none, IOOption_of as of, IOOption_partition as partition, IOOption_partitionMap as partitionMap, IOOption_separate as separate, IOOption_some as some, IOOption_tap as tap, IOOption_tapEither as tapEither, IOOption_tapIO as tapIO, IOOption_toNullable as toNullable, IOOption_toUndefined as toUndefined, traverseReadonlyArrayWithIndex, IOOption_traverseReadonlyNonEmptyArrayWithIndex as traverseReadonlyNonEmptyArrayWithIndex, IOOption_zero as zero };
