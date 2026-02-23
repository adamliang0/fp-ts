import { getApplicativeMonoid } from "./Applicative.mjs";
import { apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { tailRec } from "./ChainRec.mjs";
import { chainOptionK, filterOrElse, fromOption, fromOptionK, fromPredicate } from "./FromEither.mjs";
import { dual, flow, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapNullable, flatMapOption, head, isLeft, isNonEmpty, isRight, left, liftNullable, liftOption, right } from "./internal.mjs";
import { separated } from "./Separated.mjs";
import { wiltDefault, witherDefault } from "./Witherable.mjs";
const Either_left = left;
const Either_right = right;
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>Either_isLeft(ma) ? ma : f(ma.right));
const _map = (fa, f)=>pipe(fa, map(f));
const _ap = (fab, fa)=>pipe(fab, Either_ap(fa));
const _reduce = (fa, b, f)=>pipe(fa, reduce(b, f));
const _foldMap = (M)=>(fa, f)=>{
        const foldMapM = foldMap(M);
        return pipe(fa, foldMapM(f));
    };
const _reduceRight = (fa, b, f)=>pipe(fa, reduceRight(b, f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const _bimap = (fa, f, g)=>pipe(fa, bimap(f, g));
const _mapLeft = (fa, f)=>pipe(fa, mapLeft(f));
const _alt = (fa, that)=>pipe(fa, Either_alt(that));
const _extend = (wa, f)=>pipe(wa, extend(f));
const _chainRec = (a, f)=>tailRec(f(a), (e)=>Either_isLeft(e) ? Either_right(Either_left(e.left)) : Either_isLeft(e.right) ? Either_left(f(e.right.left)) : Either_right(Either_right(e.right.right)));
const URI = 'Either';
const getShow = (SE, SA)=>({
        show: (ma)=>Either_isLeft(ma) ? `left(${SE.show(ma.left)})` : `right(${SA.show(ma.right)})`
    });
const getEq = (EL, EA)=>({
        equals: (x, y)=>x === y || (Either_isLeft(x) ? Either_isLeft(y) && EL.equals(x.left, y.left) : Either_isRight(y) && EA.equals(x.right, y.right))
    });
const getSemigroup = (S)=>({
        concat: (x, y)=>Either_isLeft(y) ? x : Either_isLeft(x) ? y : Either_right(S.concat(x.right, y.right))
    });
const getCompactable = (M)=>{
    const empty = Either_left(M.empty);
    return {
        URI,
        _E: void 0,
        compact: (ma)=>Either_isLeft(ma) ? ma : 'None' === ma.right._tag ? empty : Either_right(ma.right.value),
        separate: (ma)=>Either_isLeft(ma) ? separated(ma, ma) : Either_isLeft(ma.right) ? separated(Either_right(ma.right.left), empty) : separated(empty, Either_right(ma.right.right))
    };
};
const getFilterable = (M)=>{
    const empty = Either_left(M.empty);
    const { compact, separate } = getCompactable(M);
    const filter = (ma, predicate)=>Either_isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
    const partition = (ma, p)=>Either_isLeft(ma) ? separated(ma, ma) : p(ma.right) ? separated(empty, Either_right(ma.right)) : separated(Either_right(ma.right), empty);
    return {
        URI,
        _E: void 0,
        map: _map,
        compact,
        separate,
        filter,
        filterMap: (ma, f)=>{
            if (Either_isLeft(ma)) return ma;
            const ob = f(ma.right);
            return 'None' === ob._tag ? empty : Either_right(ob.value);
        },
        partition,
        partitionMap: (ma, f)=>{
            if (Either_isLeft(ma)) return separated(ma, ma);
            const e = f(ma.right);
            return Either_isLeft(e) ? separated(Either_right(e.left), empty) : separated(empty, Either_right(e.right));
        }
    };
};
const getWitherable = (M)=>{
    const F_ = getFilterable(M);
    const C = getCompactable(M);
    return {
        URI,
        _E: void 0,
        map: _map,
        compact: F_.compact,
        separate: F_.separate,
        filter: F_.filter,
        filterMap: F_.filterMap,
        partition: F_.partition,
        partitionMap: F_.partitionMap,
        traverse: _traverse,
        sequence,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        wither: witherDefault(Traversable, C),
        wilt: wiltDefault(Traversable, C)
    };
};
const getApplicativeValidation = (SE)=>({
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>Either_isLeft(fab) ? Either_isLeft(fa) ? Either_left(SE.concat(fab.left, fa.left)) : fab : Either_isLeft(fa) ? fa : Either_right(fab.right(fa.right)),
        of
    });
const getAltValidation = (SE)=>({
        URI,
        _E: void 0,
        map: _map,
        alt: (me, that)=>{
            if (Either_isRight(me)) return me;
            const ea = that();
            return Either_isLeft(ea) ? Either_left(SE.concat(me.left, ea.left)) : ea;
        }
    });
const map = (f)=>(fa)=>Either_isLeft(fa) ? fa : Either_right(f(fa.right));
const Functor = {
    URI,
    map: _map
};
const Either_as = dual(2, external_Functor_mjs_as(Functor));
const Either_asUnit = asUnit(Functor);
const of = Either_right;
const Pointed = {
    URI,
    of
};
const apW = (fa)=>(fab)=>Either_isLeft(fab) ? fab : Either_isLeft(fa) ? fa : Either_right(fab.right(fa.right));
const Either_ap = apW;
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
const reduce = (b, f)=>(fa)=>Either_isLeft(fa) ? b : f(b, fa.right);
const foldMap = (M)=>(f)=>(fa)=>Either_isLeft(fa) ? M.empty : f(fa.right);
const reduceRight = (b, f)=>(fa)=>Either_isLeft(fa) ? b : f(fa.right, b);
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const traverse = (F)=>(f)=>(ta)=>Either_isLeft(ta) ? F.of(Either_left(ta.left)) : F.map(f(ta.right), Either_right);
const sequence = (F)=>(ma)=>Either_isLeft(ma) ? F.of(Either_left(ma.left)) : F.map(ma.right, Either_right);
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const bimap = (f, g)=>(fa)=>Either_isLeft(fa) ? Either_left(f(fa.left)) : Either_right(g(fa.right));
const mapLeft = (f)=>(fa)=>Either_isLeft(fa) ? Either_left(f(fa.left)) : fa;
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const altW = (that)=>(fa)=>Either_isLeft(fa) ? that() : fa;
const Either_alt = altW;
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const extend = (f)=>(wa)=>Either_isLeft(wa) ? wa : Either_right(f(wa));
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const ChainRec = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
const throwError = Either_left;
const MonadThrow = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    throwError
};
const FromEither = {
    URI,
    fromEither: identity
};
const Either_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const Either_fromOption = /*#__PURE__*/ fromOption(FromEither);
const Either_isLeft = isLeft;
const Either_isRight = isRight;
const matchW = (onLeft, onRight)=>(ma)=>Either_isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
const foldW = matchW;
const match = matchW;
const fold = match;
const getOrElseW = (onLeft)=>(ma)=>Either_isLeft(ma) ? onLeft(ma.left) : ma.right;
const getOrElse = getOrElseW;
const Either_flap = /*#__PURE__*/ flap(Functor);
const Either_apFirst = /*#__PURE__*/ apFirst(Apply);
const apFirstW = Either_apFirst;
const Either_apSecond = /*#__PURE__*/ apSecond(Apply);
const apSecondW = Either_apSecond;
const Either_tap = /*#__PURE__*/ dual(2, tap(Chain));
const flattenW = /*#__PURE__*/ flatMap(identity);
const flatten = flattenW;
const duplicate = /*#__PURE__*/ extend(identity);
const Either_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const Either_chainOptionK = /*#__PURE__*/ chainOptionK(FromEither, Chain);
const chainOptionKW = Either_chainOptionK;
const _FromEither = {
    fromEither: FromEither.fromEither
};
const Either_liftNullable = /*#__PURE__*/ liftNullable(_FromEither);
const Either_liftOption = /*#__PURE__*/ liftOption(_FromEither);
const _FlatMap = {
    flatMap
};
const Either_flatMapNullable = /*#__PURE__*/ flatMapNullable(_FromEither, _FlatMap);
const Either_flatMapOption = /*#__PURE__*/ flatMapOption(_FromEither, _FlatMap);
const Either_filterOrElse = /*#__PURE__*/ filterOrElse(FromEither, Chain);
const filterOrElseW = Either_filterOrElse;
const swap = (ma)=>Either_isLeft(ma) ? Either_right(ma.left) : Either_left(ma.right);
const orElseW = (onLeft)=>(ma)=>Either_isLeft(ma) ? onLeft(ma.left) : ma;
const orElse = orElseW;
const fromNullable = (e)=>(a)=>null == a ? Either_left(e) : Either_right(a);
const tryCatch = (f, onThrow)=>{
    try {
        return Either_right(f());
    } catch (e) {
        return Either_left(onThrow(e));
    }
};
const tryCatchK = (f, onThrow)=>(...a)=>tryCatch(()=>f(...a), onThrow);
const fromNullableK = (e)=>{
    const from = fromNullable(e);
    return (f)=>flow(f, from);
};
const chainNullableK = (e)=>{
    const from = fromNullableK(e);
    return (f)=>flatMap(from(f));
};
const toUnion = /*#__PURE__*/ foldW(identity, identity);
function toError(e) {
    try {
        return e instanceof Error ? e : new Error(String(e));
    } catch (unused) {
        return new Error();
    }
}
function elem(E) {
    return (a, ma)=>{
        if (void 0 === ma) {
            const elemE = elem(E);
            return (ma)=>elemE(a, ma);
        }
        return Either_isLeft(ma) ? false : E.equals(a, ma.right);
    };
}
const exists = (predicate)=>(ma)=>Either_isLeft(ma) ? false : predicate(ma.right);
const Do = /*#__PURE__*/ of(emptyRecord);
const Either_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Either_bind = /*#__PURE__*/ bind(Chain);
const bindW = Either_bind;
const Either_apS = /*#__PURE__*/ apS(Apply);
const apSW = Either_apS;
const ApT = /*#__PURE__*/ of(emptyReadonlyArray);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>{
        const e = f(0, head(as));
        if (Either_isLeft(e)) return e;
        const out = [
            e.right
        ];
        for(let i = 1; i < as.length; i++){
            const e = f(i, as[i]);
            if (Either_isLeft(e)) return e;
            out.push(e.right);
        }
        return Either_right(out);
    };
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chainW = flatMap;
const chain = flatMap;
const chainFirst = Either_tap;
const chainFirstW = Either_tap;
function parseJSON(s, onError) {
    return tryCatch(()=>JSON.parse(s), onError);
}
const stringifyJSON = (u, onError)=>tryCatch(()=>{
        const s = JSON.stringify(u);
        if ('string' != typeof s) throw new Error('Converting unsupported structure to JSON');
        return s;
    }, onError);
const either = {
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
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    extend: _extend,
    chainRec: _chainRec,
    throwError: throwError
};
const Either_getApplySemigroup = /*#__PURE__*/ getApplySemigroup(Apply);
const getApplyMonoid = /*#__PURE__*/ getApplicativeMonoid(Applicative);
const getValidationSemigroup = (SE, SA)=>getApplySemigroup(getApplicativeValidation(SE))(SA);
const getValidationMonoid = (SE, MA)=>getApplicativeMonoid(getApplicativeValidation(SE))(MA);
function getValidation(SE) {
    const ap = getApplicativeValidation(SE).ap;
    const alt = getAltValidation(SE).alt;
    return {
        URI,
        _E: void 0,
        map: _map,
        of,
        chain: flatMap,
        bimap: _bimap,
        mapLeft: _mapLeft,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        extend: _extend,
        traverse: _traverse,
        sequence,
        chainRec: _chainRec,
        throwError,
        ap,
        alt
    };
}
export { Alt, ApT, Applicative, Apply, Bifunctor, Chain, ChainRec, Do, Extend, Foldable, FromEither, Functor, Monad, MonadThrow, Pointed, Traversable, URI, Either_alt as alt, altW, Either_ap as ap, Either_apFirst as apFirst, apFirstW, Either_apS as apS, apSW, Either_apSecond as apSecond, apSecondW, apW, Either_as as as, Either_asUnit as asUnit, bimap, Either_bind as bind, Either_bindTo as bindTo, bindW, chain, chainFirst, chainFirstW, chainNullableK, Either_chainOptionK as chainOptionK, chainOptionKW, chainW, duplicate, either, elem, exists, extend, Either_filterOrElse as filterOrElse, filterOrElseW, Either_flap as flap, flatMap, Either_flatMapNullable as flatMapNullable, Either_flatMapOption as flatMapOption, flatten, flattenW, fold, foldMap, foldW, fromNullable, fromNullableK, Either_fromOption as fromOption, Either_fromOptionK as fromOptionK, Either_fromPredicate as fromPredicate, getAltValidation, getApplicativeValidation, getApplyMonoid, Either_getApplySemigroup as getApplySemigroup, getCompactable, getEq, getFilterable, getOrElse, getOrElseW, getSemigroup, getShow, getValidation, getValidationMonoid, getValidationSemigroup, getWitherable, Either_isLeft as isLeft, Either_isRight as isRight, Either_left as left, let_ as let, Either_liftNullable as liftNullable, Either_liftOption as liftOption, map, mapLeft, match, matchW, of, orElse, orElseW, parseJSON, reduce, reduceRight, Either_right as right, sequence, sequenceArray, stringifyJSON, swap, Either_tap as tap, throwError, toError, toUnion, traverse, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex, tryCatch, tryCatchK };
