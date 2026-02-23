import { getApplicativeMonoid } from "./Applicative.mjs";
import { apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { chainEitherK, fromEitherK, tapEither } from "./FromEither.mjs";
import { constNull, constUndefined, dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, head, isNonEmpty, isSome, none, some } from "./internal.mjs";
import { not } from "./Predicate.mjs";
import { first, last } from "./Semigroup.mjs";
import { separated } from "./Separated.mjs";
import { wiltDefault, witherDefault } from "./Witherable.mjs";
import { guard } from "./Zero.mjs";
const Option_none = none;
const Option_some = some;
function fromPredicate(predicate) {
    return (a)=>predicate(a) ? Option_some(a) : Option_none;
}
const getLeft = (ma)=>'Right' === ma._tag ? Option_none : Option_some(ma.left);
const getRight = (ma)=>'Left' === ma._tag ? Option_none : Option_some(ma.right);
const _map = (fa, f)=>pipe(fa, map(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const _reduce = (fa, b, f)=>pipe(fa, reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, reduceRight(b, f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const _alt = (fa, that)=>pipe(fa, alt(that));
const _filter = (fa, predicate)=>pipe(fa, filter(predicate));
const _filterMap = (fa, f)=>pipe(fa, filterMap(f));
const _extend = (wa, f)=>pipe(wa, extend(f));
const _partition = (fa, predicate)=>pipe(fa, partition(predicate));
const _partitionMap = (fa, f)=>pipe(fa, partitionMap(f));
const URI = 'Option';
const getShow = (S)=>({
        show: (ma)=>isNone(ma) ? 'none' : `some(${S.show(ma.value)})`
    });
const getEq = (E)=>({
        equals: (x, y)=>x === y || (isNone(x) ? isNone(y) : isNone(y) ? false : E.equals(x.value, y.value))
    });
const getOrd = (O)=>({
        equals: getEq(O).equals,
        compare: (x, y)=>x === y ? 0 : Option_isSome(x) ? Option_isSome(y) ? O.compare(x.value, y.value) : 1 : Option_isSome(y) ? -1 : 0
    });
const getMonoid = (S)=>({
        concat: (x, y)=>isNone(x) ? y : isNone(y) ? x : Option_some(S.concat(x.value, y.value)),
        empty: Option_none
    });
const map = (f)=>(fa)=>isNone(fa) ? Option_none : Option_some(f(fa.value));
const Functor = {
    URI,
    map: _map
};
const Option_as = dual(2, external_Functor_mjs_as(Functor));
const Option_asUnit = asUnit(Functor);
const of = Option_some;
const Pointed = {
    URI,
    of
};
const ap = (fa)=>(fab)=>isNone(fab) ? Option_none : isNone(fa) ? Option_none : Option_some(fab.value(fa.value));
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>isNone(ma) ? Option_none : f(ma.value));
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const reduce = (b, f)=>(fa)=>isNone(fa) ? b : f(b, fa.value);
const foldMap = (M)=>(f)=>(fa)=>isNone(fa) ? M.empty : f(fa.value);
const reduceRight = (b, f)=>(fa)=>isNone(fa) ? b : f(fa.value, b);
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const orElse = dual(2, (self, that)=>isNone(self) ? that() : self);
const altW = orElse;
const alt = orElse;
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const zero = ()=>Option_none;
const Zero = {
    URI,
    zero
};
const Option_guard = /*#__PURE__*/ guard(Zero, Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of,
    alt: _alt,
    zero
};
const extend = (f)=>(wa)=>isNone(wa) ? Option_none : Option_some(f(wa));
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const compact = /*#__PURE__*/ flatMap(identity);
const defaultSeparated = /*#__PURE__*/ separated(Option_none, Option_none);
const separate = (ma)=>isNone(ma) ? defaultSeparated : separated(getLeft(ma.value), getRight(ma.value));
const Compactable = {
    URI,
    compact,
    separate
};
const filter = (predicate)=>(fa)=>isNone(fa) ? Option_none : predicate(fa.value) ? fa : Option_none;
const filterMap = (f)=>(fa)=>isNone(fa) ? Option_none : f(fa.value);
const partition = (predicate)=>(fa)=>separated(_filter(fa, not(predicate)), _filter(fa, predicate));
const partitionMap = (f)=>flow(map(f), separate);
const Filterable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
const traverse = (F)=>(f)=>(ta)=>isNone(ta) ? F.of(Option_none) : F.map(f(ta.value), Option_some);
const sequence = (F)=>(ta)=>isNone(ta) ? F.of(Option_none) : F.map(ta.value, Option_some);
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const _wither = /*#__PURE__*/ witherDefault(Traversable, Compactable);
const _wilt = /*#__PURE__*/ wiltDefault(Traversable, Compactable);
const wither = (F)=>{
    const _witherF = _wither(F);
    return (f)=>(fa)=>_witherF(fa, f);
};
const wilt = (F)=>{
    const _wiltF = _wilt(F);
    return (f)=>(fa)=>_wiltF(fa, f);
};
const Witherable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
const throwError = ()=>Option_none;
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    throwError
};
const fromEither = getRight;
const FromEither = {
    URI,
    fromEither
};
const Option_isSome = isSome;
const isNone = (fa)=>'None' === fa._tag;
const matchW = (onNone, onSome)=>(ma)=>isNone(ma) ? onNone() : onSome(ma.value);
const foldW = matchW;
const match = matchW;
const fold = match;
const getOrElseW = (onNone)=>(ma)=>isNone(ma) ? onNone() : ma.value;
const getOrElse = getOrElseW;
const Option_flap = /*#__PURE__*/ flap(Functor);
const Option_apFirst = /*#__PURE__*/ apFirst(Apply);
const Option_apSecond = /*#__PURE__*/ apSecond(Apply);
const flatten = compact;
const Option_tap = /*#__PURE__*/ dual(2, tap(Chain));
const Option_tapEither = /*#__PURE__*/ dual(2, tapEither(FromEither, Chain));
const duplicate = /*#__PURE__*/ extend(identity);
const Option_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const Option_chainEitherK = /*#__PURE__*/ chainEitherK(FromEither, Chain);
const chainFirstEitherK = Option_tapEither;
const fromNullable = (a)=>null == a ? Option_none : Option_some(a);
const tryCatch = (f)=>{
    try {
        return Option_some(f());
    } catch (e) {
        return Option_none;
    }
};
const tryCatchK = (f)=>(...a)=>tryCatch(()=>f(...a));
const fromNullableK = (f)=>flow(f, fromNullable);
const chainNullableK = (f)=>(ma)=>isNone(ma) ? Option_none : fromNullable(f(ma.value));
const toNullable = /*#__PURE__*/ match(constNull, identity);
const toUndefined = /*#__PURE__*/ match(constUndefined, identity);
function elem(E) {
    return (a, ma)=>{
        if (void 0 === ma) {
            const elemE = elem(E);
            return (ma)=>elemE(a, ma);
        }
        return isNone(ma) ? false : E.equals(a, ma.value);
    };
}
const exists = (predicate)=>(ma)=>isNone(ma) ? false : predicate(ma.value);
const Do = /*#__PURE__*/ of(emptyRecord);
const Option_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Option_bind = /*#__PURE__*/ bind(Chain);
const Option_apS = /*#__PURE__*/ apS(Apply);
const ApT = /*#__PURE__*/ of(emptyReadonlyArray);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>{
        const o = f(0, head(as));
        if (isNone(o)) return Option_none;
        const out = [
            o.value
        ];
        for(let i = 1; i < as.length; i++){
            const o = f(i, as[i]);
            if (isNone(o)) return Option_none;
            out.push(o.value);
        }
        return Option_some(out);
    };
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chain = flatMap;
const chainFirst = Option_tap;
function getRefinement(getOption) {
    return (a)=>Option_isSome(getOption(a));
}
const mapNullable = chainNullableK;
const Option_option = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    zero,
    alt: _alt,
    extend: _extend,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt,
    throwError
};
const Option_getApplySemigroup = /*#__PURE__*/ getApplySemigroup(Apply);
const getApplyMonoid = /*#__PURE__*/ getApplicativeMonoid(Applicative);
const getFirstMonoid = ()=>getMonoid(first());
const getLastMonoid = ()=>getMonoid(last());
export { Alt, Alternative, ApT, Applicative, Apply, Chain, Compactable, Do, Extend, Filterable, Foldable, FromEither, Functor, Monad, MonadThrow, Pointed, Traversable, URI, Witherable, Zero, alt, altW, ap, Option_apFirst as apFirst, Option_apS as apS, Option_apSecond as apSecond, Option_as as as, Option_asUnit as asUnit, Option_bind as bind, Option_bindTo as bindTo, chain, Option_chainEitherK as chainEitherK, chainFirst, chainFirstEitherK, chainNullableK, compact, duplicate, elem, exists, extend, filter, filterMap, Option_flap as flap, flatMap, flatten, fold, foldMap, foldW, fromEither, Option_fromEitherK as fromEitherK, fromNullable, fromNullableK, fromPredicate, getApplyMonoid, Option_getApplySemigroup as getApplySemigroup, getEq, getFirstMonoid, getLastMonoid, getLeft, getMonoid, getOrElse, getOrElseW, getOrd, getRefinement, getRight, getShow, Option_guard as guard, isNone, Option_isSome as isSome, let_ as let, map, mapNullable, match, matchW, Option_none as none, of, Option_option as option, orElse, partition, partitionMap, reduce, reduceRight, separate, sequence, sequenceArray, Option_some as some, Option_tap as tap, Option_tapEither as tapEither, throwError, toNullable, toUndefined, traverse, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex, tryCatch, tryCatchK, wilt, wither, zero };
