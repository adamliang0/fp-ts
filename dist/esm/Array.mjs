import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, chainFirst } from "./Chain.mjs";
import { fromEitherK } from "./FromEither.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyRecord, isLeft, isNone, isSome, none, some } from "./internal.mjs";
import { append, appendW, chop, chunksOf, cons, head, init as external_NonEmptyArray_mjs_init, intersperse, isNonEmpty, isOutOfBound, last, makeBy, of, prepend, prependAll, prependW, range, rotate, snoc, sortBy, splitAt, tail, union, uniq, unsafeInsertAt, unsafeUpdateAt } from "./NonEmptyArray.mjs";
import { _chainRecBreadthFirst, _chainRecDepthFirst, chainRecBreadthFirst, chainRecDepthFirst, elem, every, findFirst, findFirstMap, findIndex, findLast, findLastIndex, findLastMap, foldMap, foldMapWithIndex, getEq, getOrd, getShow, head as external_ReadonlyArray_mjs_head, intercalate, last as external_ReadonlyArray_mjs_last, lookup, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex } from "./ReadonlyArray.mjs";
import { separated } from "./Separated.mjs";
import { filterE, wiltDefault, witherDefault } from "./Witherable.mjs";
import { guard } from "./Zero.mjs";
const isEmpty = (as)=>0 === as.length;
const Array_isNonEmpty = isNonEmpty;
const Array_prepend = prepend;
const Array_prependW = prependW;
const Array_append = append;
const Array_appendW = appendW;
const Array_makeBy = (n, f)=>n <= 0 ? [] : makeBy(f)(n);
const replicate = (n, a)=>Array_makeBy(n, ()=>a);
function fromPredicate(predicate) {
    return (a)=>predicate(a) ? [
            a
        ] : [];
}
const fromOption = (ma)=>isNone(ma) ? [] : [
        ma.value
    ];
const fromEither = (e)=>isLeft(e) ? [] : [
        e.right
    ];
const matchW = (onEmpty, onNonEmpty)=>(as)=>Array_isNonEmpty(as) ? onNonEmpty(as) : onEmpty();
const match = matchW;
const matchLeftW = (onEmpty, onNonEmpty)=>(as)=>Array_isNonEmpty(as) ? onNonEmpty(head(as), tail(as)) : onEmpty();
const matchLeft = matchLeftW;
const foldLeft = matchLeft;
const matchRightW = (onEmpty, onNonEmpty)=>(as)=>Array_isNonEmpty(as) ? onNonEmpty(external_NonEmptyArray_mjs_init(as), last(as)) : onEmpty();
const matchRight = matchRightW;
const foldRight = matchRight;
const chainWithIndex = (f)=>(as)=>{
        const out = [];
        for(let i = 0; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++)out.push(bs[j]);
        }
        return out;
    };
const scanLeft = (b, f)=>(as)=>{
        const len = as.length;
        const out = Array.from({
            length: len + 1
        });
        out[0] = b;
        for(let i = 0; i < len; i++)out[i + 1] = f(out[i], as[i]);
        return out;
    };
const scanRight = (b, f)=>(as)=>{
        const len = as.length;
        const out = Array.from({
            length: len + 1
        });
        out[len] = b;
        for(let i = len - 1; i >= 0; i--)out[i] = f(as[i], out[i + 1]);
        return out;
    };
const size = (as)=>as.length;
const Array_isOutOfBound = isOutOfBound;
const Array_lookup = lookup;
const Array_head = external_ReadonlyArray_mjs_head;
const Array_last = external_ReadonlyArray_mjs_last;
const Array_tail = (as)=>Array_isNonEmpty(as) ? some(tail(as)) : none;
const Array_init = (as)=>Array_isNonEmpty(as) ? some(external_NonEmptyArray_mjs_init(as)) : none;
const takeLeft = (n)=>(as)=>Array_isOutOfBound(n, as) ? copy(as) : as.slice(0, n);
const takeRight = (n)=>(as)=>Array_isOutOfBound(n, as) ? copy(as) : 0 === n ? [] : as.slice(-n);
function takeLeftWhile(predicate) {
    return (as)=>{
        const out = [];
        for (const a of as){
            if (!predicate(a)) break;
            out.push(a);
        }
        return out;
    };
}
const spanLeftIndex = (as, predicate)=>{
    const l = as.length;
    let i = 0;
    for(; i < l && predicate(as[i]); i++);
    return i;
};
function spanLeft(predicate) {
    return (as)=>{
        const [init, rest] = Array_splitAt(spanLeftIndex(as, predicate))(as);
        return {
            init,
            rest
        };
    };
}
const dropLeft = (n)=>(as)=>n <= 0 || isEmpty(as) ? copy(as) : n >= as.length ? [] : as.slice(n, as.length);
const dropRight = (n)=>(as)=>n <= 0 || isEmpty(as) ? copy(as) : n >= as.length ? [] : as.slice(0, as.length - n);
function dropLeftWhile(predicate) {
    return (as)=>as.slice(spanLeftIndex(as, predicate));
}
const Array_findIndex = findIndex;
function Array_findFirst(predicate) {
    return findFirst(predicate);
}
const Array_findFirstMap = findFirstMap;
function Array_findLast(predicate) {
    return findLast(predicate);
}
const Array_findLastMap = findLastMap;
const Array_findLastIndex = findLastIndex;
const copy = (as)=>as.slice();
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? none : some(Array_unsafeInsertAt(i, a, as));
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const deleteAt = (i)=>(as)=>Array_isOutOfBound(i, as) ? none : some(unsafeDeleteAt(i, as));
const modifyAt = (i, f)=>(as)=>Array_isOutOfBound(i, as) ? none : some(Array_unsafeUpdateAt(i, f(as[i]), as));
const reverse = (as)=>isEmpty(as) ? [] : as.slice().reverse();
const rights = (as)=>{
    const r = [];
    for(let i = 0; i < as.length; i++){
        const a = as[i];
        if ('Right' === a._tag) r.push(a.right);
    }
    return r;
};
const lefts = (as)=>{
    const r = [];
    for(let i = 0; i < as.length; i++){
        const a = as[i];
        if ('Left' === a._tag) r.push(a.left);
    }
    return r;
};
const sort = (O)=>(as)=>as.length <= 1 ? copy(as) : as.slice().sort(O.compare);
const zipWith = (fa, fb, f)=>{
    const fc = [];
    const len = Math.min(fa.length, fb.length);
    for(let i = 0; i < len; i++)fc[i] = f(fa[i], fb[i]);
    return fc;
};
function zip(as, bs) {
    if (void 0 === bs) return (bs)=>zip(bs, as);
    return zipWith(as, bs, (a, b)=>[
            a,
            b
        ]);
}
const unzip = (as)=>{
    const fa = [];
    const fb = [];
    for(let i = 0; i < as.length; i++){
        fa[i] = as[i][0];
        fb[i] = as[i][1];
    }
    return [
        fa,
        fb
    ];
};
const Array_prependAll = (middle)=>{
    const f = prependAll(middle);
    return (as)=>Array_isNonEmpty(as) ? f(as) : [];
};
const Array_intersperse = (middle)=>{
    const f = intersperse(middle);
    return (as)=>Array_isNonEmpty(as) ? f(as) : copy(as);
};
const Array_rotate = (n)=>{
    const f = rotate(n);
    return (as)=>Array_isNonEmpty(as) ? f(as) : copy(as);
};
const Array_elem = elem;
const Array_uniq = (E)=>{
    const f = uniq(E);
    return (as)=>Array_isNonEmpty(as) ? f(as) : copy(as);
};
const Array_sortBy = (ords)=>{
    const f = sortBy(ords);
    return (as)=>Array_isNonEmpty(as) ? f(as) : copy(as);
};
const Array_chop = (f)=>{
    const g = chop(f);
    return (as)=>Array_isNonEmpty(as) ? g(as) : [];
};
const Array_splitAt = (n)=>(as)=>n >= 1 && Array_isNonEmpty(as) ? splitAt(n)(as) : isEmpty(as) ? [
            copy(as),
            []
        ] : [
            [],
            copy(as)
        ];
const Array_chunksOf = (n)=>{
    const f = chunksOf(n);
    return (as)=>Array_isNonEmpty(as) ? f(as) : [];
};
const fromOptionK = (f)=>(...a)=>fromOption(f(...a));
function comprehension(input, f, g = ()=>true) {
    const go = (scope, input)=>Array_isNonEmpty(input) ? flatMap(head(input), (a)=>go(pipe(scope, Array_append(a)), tail(input))) : g(...scope) ? [
            f(...scope)
        ] : [];
    return go([], input);
}
const concatW = (second)=>(first)=>isEmpty(first) ? copy(second) : isEmpty(second) ? copy(first) : first.concat(second);
const concat = concatW;
function Array_union(E) {
    const unionE = union(E);
    return (first, second)=>{
        if (void 0 === second) {
            const unionE = Array_union(E);
            return (second)=>unionE(second, first);
        }
        return Array_isNonEmpty(first) && Array_isNonEmpty(second) ? unionE(second)(first) : Array_isNonEmpty(first) ? copy(first) : copy(second);
    };
}
function intersection(E) {
    const elemE = Array_elem(E);
    return (xs, ys)=>{
        if (void 0 === ys) {
            const intersectionE = intersection(E);
            return (ys)=>intersectionE(ys, xs);
        }
        return xs.filter((a)=>elemE(a, ys));
    };
}
function difference(E) {
    const elemE = Array_elem(E);
    return (xs, ys)=>{
        if (void 0 === ys) {
            const differenceE = difference(E);
            return (ys)=>differenceE(ys, xs);
        }
        return xs.filter((a)=>!elemE(a, ys));
    };
}
const _map = (fa, f)=>pipe(fa, map(f));
const _mapWithIndex = (fa, f)=>pipe(fa, mapWithIndex(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const _filter = (fa, predicate)=>pipe(fa, filter(predicate));
const _filterMap = (fa, f)=>pipe(fa, filterMap(f));
const _partition = (fa, predicate)=>pipe(fa, partition(predicate));
const _partitionMap = (fa, f)=>pipe(fa, partitionMap(f));
const _partitionWithIndex = (fa, predicateWithIndex)=>pipe(fa, partitionWithIndex(predicateWithIndex));
const _partitionMapWithIndex = (fa, f)=>pipe(fa, partitionMapWithIndex(f));
const _alt = (fa, that)=>pipe(fa, alt(that));
const _reduce = (fa, b, f)=>pipe(fa, Array_reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = Array_foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, Array_reduceRight(b, f));
const _reduceWithIndex = (fa, b, f)=>pipe(fa, Array_reduceWithIndex(b, f));
const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = Array_foldMapWithIndex(M);
    return (fa, f)=>pipe(fa, foldMapWithIndexM(f));
};
const _reduceRightWithIndex = (fa, b, f)=>pipe(fa, Array_reduceRightWithIndex(b, f));
const _filterMapWithIndex = (fa, f)=>pipe(fa, filterMapWithIndex(f));
const _filterWithIndex = (fa, predicateWithIndex)=>pipe(fa, filterWithIndex(predicateWithIndex));
const _extend = (fa, f)=>pipe(fa, extend(f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>pipe(ta, traverseWithIndexF(f));
};
const Array_chainRecDepthFirst = _chainRecDepthFirst;
const Array_chainRecBreadthFirst = _chainRecBreadthFirst;
const Array_of = of;
const zero = ()=>[];
const map = (f)=>(fa)=>fa.map((a)=>f(a));
const ap = (fa)=>flatMap((f)=>pipe(fa, map(f)));
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>pipe(ma, chainWithIndex((i, a)=>f(a, i))));
const flatten = /*#__PURE__*/ flatMap(identity);
const mapWithIndex = (f)=>(fa)=>fa.map((a, i)=>f(i, a));
const filterMapWithIndex = (f)=>(fa)=>{
        const out = [];
        for(let i = 0; i < fa.length; i++){
            const optionB = f(i, fa[i]);
            if (isSome(optionB)) out.push(optionB.value);
        }
        return out;
    };
const filterMap = (f)=>filterMapWithIndex((_, a)=>f(a));
const compact = /*#__PURE__*/ filterMap(identity);
const separate = (fa)=>{
    const left = [];
    const right = [];
    for (const e of fa)if ('Left' === e._tag) left.push(e.left);
    else right.push(e.right);
    return separated(left, right);
};
const filter = (predicate)=>(as)=>as.filter(predicate);
const partition = (predicate)=>partitionWithIndex((_, a)=>predicate(a));
const partitionWithIndex = (predicateWithIndex)=>(as)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < as.length; i++){
            const b = as[i];
            if (predicateWithIndex(i, b)) right.push(b);
            else left.push(b);
        }
        return separated(left, right);
    };
const partitionMap = (f)=>partitionMapWithIndex((_, a)=>f(a));
const partitionMapWithIndex = (f)=>(fa)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < fa.length; i++){
            const e = f(i, fa[i]);
            if ('Left' === e._tag) left.push(e.left);
            else right.push(e.right);
        }
        return separated(left, right);
    };
const altW = (that)=>(fa)=>fa.concat(that());
const alt = altW;
const filterWithIndex = (predicateWithIndex)=>(as)=>as.filter((b, i)=>predicateWithIndex(i, b));
const extend = (f)=>(wa)=>wa.map((_, i)=>f(wa.slice(i)));
const duplicate = /*#__PURE__*/ extend(identity);
const Array_foldMap = foldMap;
const Array_foldMapWithIndex = foldMapWithIndex;
const Array_reduce = reduce;
const Array_reduceWithIndex = reduceWithIndex;
const Array_reduceRight = reduceRight;
const Array_reduceRightWithIndex = reduceRightWithIndex;
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>(ta)=>_reduce(ta, F.of(zero()), (fas, fa)=>F.ap(F.map(fas, (as)=>(a)=>pipe(as, Array_append(a))), fa));
const traverseWithIndex = (F)=>(f)=>Array_reduceWithIndex(F.of(zero()), (i, fbs, a)=>F.ap(F.map(fbs, (bs)=>(b)=>pipe(bs, Array_append(b))), f(i, a)));
const wither = (F)=>{
    const _witherF = _wither(F);
    return (f)=>(fa)=>_witherF(fa, f);
};
const wilt = (F)=>{
    const _wiltF = _wilt(F);
    return (f)=>(fa)=>_wiltF(fa, f);
};
const unfold = (b, f)=>{
    const out = [];
    let bb = b;
    while(true){
        const mt = f(bb);
        if (isSome(mt)) {
            const [a, b] = mt.value;
            out.push(a);
            bb = b;
        } else break;
    }
    return out;
};
const URI = 'Array';
const Array_getShow = getShow;
const getSemigroup = ()=>({
        concat: (first, second)=>first.concat(second)
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: []
    });
const Array_getEq = getEq;
const Array_getOrd = getOrd;
const getUnionSemigroup = (E)=>{
    const unionE = Array_union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty: []
    });
const getIntersectionSemigroup = (E)=>{
    const intersectionE = intersection(E);
    return {
        concat: (first, second)=>intersectionE(second)(first)
    };
};
const getDifferenceMagma = (E)=>{
    const differenceE = difference(E);
    return {
        concat: (first, second)=>differenceE(second)(first)
    };
};
const Functor = {
    URI,
    map: _map
};
const Array_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of: Array_of
};
const FunctorWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Array_apFirst = /*#__PURE__*/ apFirst(Apply);
const Array_apSecond = /*#__PURE__*/ apSecond(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: Array_of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Array_chainFirst = /*#__PURE__*/ chainFirst(Chain);
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of: Array_of,
    chain: flatMap
};
const Unfoldable = {
    URI,
    unfold
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Zero = {
    URI,
    zero
};
const Array_guard = /*#__PURE__*/ guard(Zero, Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of: Array_of,
    alt: _alt,
    zero
};
const Extend = {
    URI,
    map: _map,
    extend: _extend
};
const Compactable = {
    URI,
    compact,
    separate
};
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
const FilterableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const FoldableWithIndex = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const TraversableWithIndex = {
    URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverse: _traverse,
    sequence,
    traverseWithIndex: _traverseWithIndex
};
const _wither = /*#__PURE__*/ witherDefault(Traversable, Compactable);
const _wilt = /*#__PURE__*/ wiltDefault(Traversable, Compactable);
const Witherable = {
    URI,
    map: _map,
    compact,
    separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    wither: _wither,
    wilt: _wilt
};
const src_Array_chainRecDepthFirst = chainRecDepthFirst;
const ChainRecDepthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: Array_chainRecDepthFirst
};
const src_Array_chainRecBreadthFirst = chainRecBreadthFirst;
const ChainRecBreadthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: Array_chainRecBreadthFirst
};
const Array_filterE = /*#__PURE__*/ filterE(Witherable);
const FromEither = {
    URI,
    fromEither
};
const Array_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const Array_unsafeInsertAt = unsafeInsertAt;
const Array_unsafeUpdateAt = (i, a, as)=>Array_isNonEmpty(as) ? unsafeUpdateAt(i, a, as) : [];
const unsafeDeleteAt = (i, as)=>{
    const xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
const Array_every = every;
const Array_some = (predicate)=>(as)=>as.some(predicate);
const exists = Array_some;
const Array_intercalate = intercalate;
const Do = /*#__PURE__*/ Array_of(emptyRecord);
const Array_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Array_bind = /*#__PURE__*/ bind(Chain);
const Array_apS = /*#__PURE__*/ apS(Apply);
const chain = flatMap;
const Array_range = range;
const empty = [];
const Array_cons = cons;
const Array_snoc = snoc;
const prependToAll = Array_prependAll;
const array = {
    URI,
    compact,
    separate,
    map: _map,
    ap: _ap,
    of: Array_of,
    chain: flatMap,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    alt: _alt,
    zero,
    unfold,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    extend: _extend,
    wither: _wither,
    wilt: _wilt
};
export { Alt, Alternative, Applicative, Apply, Chain, ChainRecBreadthFirst, ChainRecDepthFirst, Compactable, Do, Extend, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, FromEither, Functor, FunctorWithIndex, Monad, Pointed, Traversable, TraversableWithIndex, URI, Unfoldable, Witherable, Zero, alt, altW, ap, Array_apFirst as apFirst, Array_apS as apS, Array_apSecond as apSecond, Array_append as append, Array_appendW as appendW, array, Array_bind as bind, Array_bindTo as bindTo, chain, Array_chainFirst as chainFirst, src_Array_chainRecBreadthFirst as chainRecBreadthFirst, src_Array_chainRecDepthFirst as chainRecDepthFirst, chainWithIndex, Array_chop as chop, Array_chunksOf as chunksOf, compact, comprehension, concat, concatW, Array_cons as cons, copy, deleteAt, difference, dropLeft, dropLeftWhile, dropRight, duplicate, Array_elem as elem, empty, Array_every as every, exists, extend, filter, Array_filterE as filterE, filterMap, filterMapWithIndex, filterWithIndex, Array_findFirst as findFirst, Array_findFirstMap as findFirstMap, Array_findIndex as findIndex, Array_findLast as findLast, Array_findLastIndex as findLastIndex, Array_findLastMap as findLastMap, Array_flap as flap, flatMap, flatten, foldLeft, Array_foldMap as foldMap, Array_foldMapWithIndex as foldMapWithIndex, foldRight, fromEither, Array_fromEitherK as fromEitherK, fromOption, fromOptionK, fromPredicate, getDifferenceMagma, Array_getEq as getEq, getIntersectionSemigroup, getMonoid, Array_getOrd as getOrd, getSemigroup, Array_getShow as getShow, getUnionMonoid, getUnionSemigroup, Array_guard as guard, Array_head as head, Array_init as init, insertAt, Array_intercalate as intercalate, intersection, Array_intersperse as intersperse, isEmpty, Array_isNonEmpty as isNonEmpty, Array_isOutOfBound as isOutOfBound, Array_last as last, lefts, let_ as let, Array_lookup as lookup, Array_makeBy as makeBy, map, mapWithIndex, match, matchLeft, matchLeftW, matchRight, matchRightW, matchW, modifyAt, Array_of as of, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, Array_prepend as prepend, Array_prependAll as prependAll, prependToAll, Array_prependW as prependW, Array_range as range, Array_reduce as reduce, Array_reduceRight as reduceRight, Array_reduceRightWithIndex as reduceRightWithIndex, Array_reduceWithIndex as reduceWithIndex, replicate, reverse, rights, Array_rotate as rotate, scanLeft, scanRight, separate, sequence, size, Array_snoc as snoc, Array_some as some, sort, Array_sortBy as sortBy, spanLeft, Array_splitAt as splitAt, Array_tail as tail, takeLeft, takeLeftWhile, takeRight, traverse, traverseWithIndex, unfold, Array_union as union, Array_uniq as uniq, unsafeDeleteAt, Array_unsafeInsertAt as unsafeInsertAt, Array_unsafeUpdateAt as unsafeUpdateAt, unzip, updateAt, wilt, wither, zero, zip, zipWith };
