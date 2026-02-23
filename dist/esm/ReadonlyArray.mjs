import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, chainFirst } from "./Chain.mjs";
import { fromEquals } from "./Eq.mjs";
import { fromEitherK } from "./FromEither.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyRecord, isLeft, isNone, isSome, none, some } from "./internal.mjs";
import { Ord } from "./number.mjs";
import { fromCompare } from "./Ord.mjs";
import { append, appendW, chop, chunksOf, cons, empty, head, init as external_ReadonlyNonEmptyArray_mjs_init, intercalate, intersperse, isNonEmpty, isOutOfBound, last, makeBy, of, prepend, prependAll, prependW, range, rotate, snoc, sortBy, splitAt, tail, union, uniq, unsafeInsertAt, unsafeUpdateAt } from "./ReadonlyNonEmptyArray.mjs";
import { separated } from "./Separated.mjs";
import { filterE, wiltDefault, witherDefault } from "./Witherable.mjs";
import { guard } from "./Zero.mjs";
const isEmpty = (as)=>0 === as.length;
const ReadonlyArray_isNonEmpty = isNonEmpty;
const ReadonlyArray_prepend = prepend;
const ReadonlyArray_prependW = prependW;
const ReadonlyArray_append = append;
const ReadonlyArray_appendW = appendW;
const ReadonlyArray_makeBy = (n, f)=>n <= 0 ? ReadonlyArray_empty : makeBy(f)(n);
const replicate = (n, a)=>ReadonlyArray_makeBy(n, ()=>a);
function fromPredicate(predicate) {
    return (a)=>predicate(a) ? [
            a
        ] : ReadonlyArray_empty;
}
const fromOption = (ma)=>isNone(ma) ? ReadonlyArray_empty : [
        ma.value
    ];
const fromEither = (e)=>isLeft(e) ? ReadonlyArray_empty : [
        e.right
    ];
const matchW = (onEmpty, onNonEmpty)=>(as)=>ReadonlyArray_isNonEmpty(as) ? onNonEmpty(as) : onEmpty();
const match = matchW;
const matchLeftW = (onEmpty, onNonEmpty)=>(as)=>ReadonlyArray_isNonEmpty(as) ? onNonEmpty(head(as), tail(as)) : onEmpty();
const matchLeft = matchLeftW;
const foldLeft = matchLeft;
const matchRightW = (onEmpty, onNonEmpty)=>(as)=>ReadonlyArray_isNonEmpty(as) ? onNonEmpty(external_ReadonlyNonEmptyArray_mjs_init(as), last(as)) : onEmpty();
const matchRight = matchRightW;
const foldRight = matchRight;
const chainWithIndex = (f)=>(as)=>{
        if (isEmpty(as)) return ReadonlyArray_empty;
        const out = [];
        for(let i = 0; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++)out.push(bs[j]);
        }
        return out;
    };
const scanLeft = (b, f)=>(as)=>{
        const len = as.length;
        const out = new Array(len + 1);
        out[0] = b;
        for(let i = 0; i < len; i++)out[i + 1] = f(out[i], as[i]);
        return out;
    };
const scanRight = (b, f)=>(as)=>{
        const len = as.length;
        const out = new Array(len + 1);
        out[len] = b;
        for(let i = len - 1; i >= 0; i--)out[i] = f(as[i], out[i + 1]);
        return out;
    };
const size = (as)=>as.length;
const ReadonlyArray_isOutOfBound = isOutOfBound;
function lookup(i, as) {
    return void 0 === as ? (as)=>lookup(i, as) : ReadonlyArray_isOutOfBound(i, as) ? none : some(as[i]);
}
const ReadonlyArray_head = (as)=>ReadonlyArray_isNonEmpty(as) ? some(head(as)) : none;
const ReadonlyArray_last = (as)=>ReadonlyArray_isNonEmpty(as) ? some(last(as)) : none;
const ReadonlyArray_tail = (as)=>ReadonlyArray_isNonEmpty(as) ? some(tail(as)) : none;
const ReadonlyArray_init = (as)=>ReadonlyArray_isNonEmpty(as) ? some(external_ReadonlyNonEmptyArray_mjs_init(as)) : none;
const takeLeft = (n)=>(as)=>ReadonlyArray_isOutOfBound(n, as) ? as : 0 === n ? ReadonlyArray_empty : as.slice(0, n);
const takeRight = (n)=>(as)=>ReadonlyArray_isOutOfBound(n, as) ? as : 0 === n ? ReadonlyArray_empty : as.slice(-n);
function takeLeftWhile(predicate) {
    return (as)=>{
        const out = [];
        for (const a of as){
            if (!predicate(a)) break;
            out.push(a);
        }
        const len = out.length;
        return len === as.length ? as : 0 === len ? ReadonlyArray_empty : out;
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
        const [init, rest] = ReadonlyArray_splitAt(spanLeftIndex(as, predicate))(as);
        return {
            init,
            rest
        };
    };
}
const dropLeft = (n)=>(as)=>n <= 0 || isEmpty(as) ? as : n >= as.length ? ReadonlyArray_empty : as.slice(n, as.length);
const dropRight = (n)=>(as)=>n <= 0 || isEmpty(as) ? as : n >= as.length ? ReadonlyArray_empty : as.slice(0, as.length - n);
function dropLeftWhile(predicate) {
    return (as)=>{
        const i = spanLeftIndex(as, predicate);
        return 0 === i ? as : i === as.length ? ReadonlyArray_empty : as.slice(i);
    };
}
const findIndex = (predicate)=>(as)=>{
        for(let i = 0; i < as.length; i++)if (predicate(as[i])) return some(i);
        return none;
    };
function findFirst(predicate) {
    return (as)=>{
        for(let i = 0; i < as.length; i++)if (predicate(as[i])) return some(as[i]);
        return none;
    };
}
const findFirstMap = (f)=>(as)=>{
        for(let i = 0; i < as.length; i++){
            const out = f(as[i]);
            if (isSome(out)) return out;
        }
        return none;
    };
function findLast(predicate) {
    return (as)=>{
        for(let i = as.length - 1; i >= 0; i--)if (predicate(as[i])) return some(as[i]);
        return none;
    };
}
const findLastMap = (f)=>(as)=>{
        for(let i = as.length - 1; i >= 0; i--){
            const out = f(as[i]);
            if (isSome(out)) return out;
        }
        return none;
    };
const findLastIndex = (predicate)=>(as)=>{
        for(let i = as.length - 1; i >= 0; i--)if (predicate(as[i])) return some(i);
        return none;
    };
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? none : some(unsafeInsertAt(i, a, as));
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const deleteAt = (i)=>(as)=>ReadonlyArray_isOutOfBound(i, as) ? none : some(unsafeDeleteAt(i, as));
const modifyAt = (i, f)=>(as)=>ReadonlyArray_isOutOfBound(i, as) ? none : some(ReadonlyArray_unsafeUpdateAt(i, f(as[i]), as));
const reverse = (as)=>as.length <= 1 ? as : as.slice().reverse();
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
const sort = (O)=>(as)=>as.length <= 1 ? as : as.slice().sort(O.compare);
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
const ReadonlyArray_prependAll = (middle)=>{
    const f = prependAll(middle);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? f(as) : as;
};
const ReadonlyArray_intersperse = (middle)=>{
    const f = intersperse(middle);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? f(as) : as;
};
const ReadonlyArray_rotate = (n)=>{
    const f = rotate(n);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? f(as) : as;
};
function elem(E) {
    return (a, as)=>{
        if (void 0 === as) {
            const elemE = elem(E);
            return (as)=>elemE(a, as);
        }
        const predicate = (element)=>E.equals(element, a);
        let i = 0;
        for(; i < as.length; i++)if (predicate(as[i])) return true;
        return false;
    };
}
const ReadonlyArray_uniq = (E)=>{
    const f = uniq(E);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? f(as) : as;
};
const ReadonlyArray_sortBy = (ords)=>{
    const f = sortBy(ords);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? f(as) : as;
};
const ReadonlyArray_chop = (f)=>{
    const g = chop(f);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? g(as) : ReadonlyArray_empty;
};
const ReadonlyArray_splitAt = (n)=>(as)=>n >= 1 && ReadonlyArray_isNonEmpty(as) ? splitAt(n)(as) : isEmpty(as) ? [
            as,
            ReadonlyArray_empty
        ] : [
            ReadonlyArray_empty,
            as
        ];
const ReadonlyArray_chunksOf = (n)=>{
    const f = chunksOf(n);
    return (as)=>ReadonlyArray_isNonEmpty(as) ? f(as) : ReadonlyArray_empty;
};
const fromOptionK = (f)=>(...a)=>fromOption(f(...a));
function comprehension(input, f, g = ()=>true) {
    const go = (scope, input)=>ReadonlyArray_isNonEmpty(input) ? flatMap(head(input), (a)=>go(pipe(scope, ReadonlyArray_append(a)), tail(input))) : g(...scope) ? [
            f(...scope)
        ] : ReadonlyArray_empty;
    return go(ReadonlyArray_empty, input);
}
const concatW = (second)=>(first)=>isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second);
const concat = concatW;
function ReadonlyArray_union(E) {
    const unionE = union(E);
    return (first, second)=>{
        if (void 0 === second) {
            const unionE = ReadonlyArray_union(E);
            return (second)=>unionE(second, first);
        }
        return ReadonlyArray_isNonEmpty(first) && ReadonlyArray_isNonEmpty(second) ? unionE(second)(first) : ReadonlyArray_isNonEmpty(first) ? first : second;
    };
}
function intersection(E) {
    const elemE = elem(E);
    return (xs, ys)=>{
        if (void 0 === ys) {
            const intersectionE = intersection(E);
            return (ys)=>intersectionE(ys, xs);
        }
        return xs.filter((a)=>elemE(a, ys));
    };
}
function difference(E) {
    const elemE = elem(E);
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
const _reduce = (fa, b, f)=>pipe(fa, reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, reduceRight(b, f));
const _reduceWithIndex = (fa, b, f)=>pipe(fa, reduceWithIndex(b, f));
const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (fa, f)=>pipe(fa, foldMapWithIndexM(f));
};
const _reduceRightWithIndex = (fa, b, f)=>pipe(fa, reduceRightWithIndex(b, f));
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
const _chainRecDepthFirst = (a, f)=>pipe(a, chainRecDepthFirst(f));
const _chainRecBreadthFirst = (a, f)=>pipe(a, chainRecBreadthFirst(f));
const ReadonlyArray_of = of;
const zero = ()=>ReadonlyArray_empty;
const altW = (that)=>(fa)=>fa.concat(that());
const alt = altW;
const ap = (fa)=>flatMap((f)=>pipe(fa, map(f)));
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>pipe(ma, chainWithIndex((i, a)=>f(a, i))));
const flatten = /*#__PURE__*/ flatMap(identity);
const map = (f)=>(fa)=>fa.map((a)=>f(a));
const mapWithIndex = (f)=>(fa)=>fa.map((a, i)=>f(i, a));
const separate = (fa)=>{
    const left = [];
    const right = [];
    for (const e of fa)if ('Left' === e._tag) left.push(e.left);
    else right.push(e.right);
    return separated(left, right);
};
const filter = (predicate)=>(as)=>as.filter(predicate);
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
const partition = (predicate)=>partitionWithIndex((_, a)=>predicate(a));
const partitionWithIndex = (predicateWithIndex)=>(as)=>{
        const left = [];
        const right = [];
        for(let i = 0; i < as.length; i++){
            const a = as[i];
            if (predicateWithIndex(i, a)) right.push(a);
            else left.push(a);
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
const filterWithIndex = (predicateWithIndex)=>(as)=>as.filter((a, i)=>predicateWithIndex(i, a));
const extend = (f)=>(wa)=>wa.map((_, i)=>f(wa.slice(i)));
const duplicate = /*#__PURE__*/ extend(identity);
const foldMapWithIndex = (M)=>(f)=>(fa)=>fa.reduce((b, a, i)=>M.concat(b, f(i, a)), M.empty);
const reduce = (b, f)=>reduceWithIndex(b, (_, b, a)=>f(b, a));
const foldMap = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (f)=>foldMapWithIndexM((_, a)=>f(a));
};
const reduceWithIndex = (b, f)=>(fa)=>{
        const len = fa.length;
        let out = b;
        for(let i = 0; i < len; i++)out = f(i, out, fa[i]);
        return out;
    };
const reduceRight = (b, f)=>reduceRightWithIndex(b, (_, a, b)=>f(a, b));
const reduceRightWithIndex = (b, f)=>(fa)=>fa.reduceRight((b, a, i)=>f(i, a, b), b);
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>(ta)=>_reduce(ta, F.of(zero()), (fas, fa)=>F.ap(F.map(fas, (as)=>(a)=>pipe(as, ReadonlyArray_append(a))), fa));
const traverseWithIndex = (F)=>(f)=>reduceWithIndex(F.of(zero()), (i, fbs, a)=>F.ap(F.map(fbs, (bs)=>(b)=>pipe(bs, ReadonlyArray_append(b))), f(i, a)));
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
const URI = 'ReadonlyArray';
const getShow = (S)=>({
        show: (as)=>`[${as.map(S.show).join(', ')}]`
    });
const getSemigroup = ()=>({
        concat: (first, second)=>isEmpty(first) ? second : isEmpty(second) ? first : first.concat(second)
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: ReadonlyArray_empty
    });
const getEq = (E)=>fromEquals((xs, ys)=>xs.length === ys.length && xs.every((x, i)=>E.equals(x, ys[i])));
const getOrd = (O)=>fromCompare((a, b)=>{
        const aLen = a.length;
        const bLen = b.length;
        const len = Math.min(aLen, bLen);
        for(let i = 0; i < len; i++){
            const ordering = O.compare(a[i], b[i]);
            if (0 !== ordering) return ordering;
        }
        return Ord.compare(aLen, bLen);
    });
const getUnionSemigroup = (E)=>{
    const unionE = ReadonlyArray_union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty: ReadonlyArray_empty
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
const ReadonlyArray_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of: ReadonlyArray_of
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
const ReadonlyArray_apFirst = /*#__PURE__*/ apFirst(Apply);
const ReadonlyArray_apSecond = /*#__PURE__*/ apSecond(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of: ReadonlyArray_of
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
    of: ReadonlyArray_of,
    chain: flatMap
};
const ReadonlyArray_chainFirst = /*#__PURE__*/ chainFirst(Chain);
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
const ReadonlyArray_guard = /*#__PURE__*/ guard(Zero, Pointed);
const Alternative = {
    URI,
    map: _map,
    ap: _ap,
    of: ReadonlyArray_of,
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
const chainRecDepthFirst = (f)=>(a)=>{
        const todo = [
            ...f(a)
        ];
        const out = [];
        while(todo.length > 0){
            const e = todo.shift();
            if (isLeft(e)) todo.unshift(...f(e.left));
            else out.push(e.right);
        }
        return out;
    };
const ChainRecDepthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecDepthFirst
};
const chainRecBreadthFirst = (f)=>(a)=>{
        const initial = f(a);
        const todo = [];
        const out = [];
        function go(e) {
            if (isLeft(e)) f(e.left).forEach((v)=>todo.push(v));
            else out.push(e.right);
        }
        for (const e of initial)go(e);
        while(todo.length > 0)go(todo.shift());
        return out;
    };
const ChainRecBreadthFirst = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRecBreadthFirst
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
const ReadonlyArray_filterE = /*#__PURE__*/ filterE(Witherable);
const FromEither = {
    URI,
    fromEither
};
const ReadonlyArray_fromEitherK = /*#__PURE__*/ fromEitherK(FromEither);
const ReadonlyArray_unsafeInsertAt = unsafeInsertAt;
const ReadonlyArray_unsafeUpdateAt = (i, a, as)=>ReadonlyArray_isNonEmpty(as) ? unsafeUpdateAt(i, a, as) : as;
const unsafeDeleteAt = (i, as)=>{
    const xs = as.slice();
    xs.splice(i, 1);
    return xs;
};
const toArray = (as)=>as.slice();
const fromArray = (as)=>isEmpty(as) ? ReadonlyArray_empty : as.slice();
const ReadonlyArray_empty = empty;
function every(predicate) {
    return (as)=>as.every(predicate);
}
const ReadonlyArray_some = (predicate)=>(as)=>as.some(predicate);
const exists = ReadonlyArray_some;
const ReadonlyArray_intercalate = (M)=>{
    const intercalateM = intercalate(M);
    return (middle)=>match(()=>M.empty, intercalateM(middle));
};
const Do = /*#__PURE__*/ ReadonlyArray_of(emptyRecord);
const ReadonlyArray_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const ReadonlyArray_bind = /*#__PURE__*/ bind(Chain);
const ReadonlyArray_apS = /*#__PURE__*/ apS(Apply);
const chain = flatMap;
const ReadonlyArray_range = range;
const ReadonlyArray_cons = cons;
const ReadonlyArray_snoc = snoc;
const prependToAll = ReadonlyArray_prependAll;
const readonlyArray = {
    URI,
    compact,
    separate,
    map: _map,
    ap: _ap,
    of: ReadonlyArray_of,
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
export { Alt, Alternative, Applicative, Apply, Chain, ChainRecBreadthFirst, ChainRecDepthFirst, Compactable, Do, Extend, Filterable, FilterableWithIndex, Foldable, FoldableWithIndex, FromEither, Functor, FunctorWithIndex, Monad, Pointed, Traversable, TraversableWithIndex, URI, Unfoldable, Witherable, Zero, _chainRecBreadthFirst, _chainRecDepthFirst, alt, altW, ap, ReadonlyArray_apFirst as apFirst, ReadonlyArray_apS as apS, ReadonlyArray_apSecond as apSecond, ReadonlyArray_append as append, ReadonlyArray_appendW as appendW, ReadonlyArray_bind as bind, ReadonlyArray_bindTo as bindTo, chain, ReadonlyArray_chainFirst as chainFirst, chainRecBreadthFirst, chainRecDepthFirst, chainWithIndex, ReadonlyArray_chop as chop, ReadonlyArray_chunksOf as chunksOf, compact, comprehension, concat, concatW, ReadonlyArray_cons as cons, deleteAt, difference, dropLeft, dropLeftWhile, dropRight, duplicate, elem, ReadonlyArray_empty as empty, every, exists, extend, filter, ReadonlyArray_filterE as filterE, filterMap, filterMapWithIndex, filterWithIndex, findFirst, findFirstMap, findIndex, findLast, findLastIndex, findLastMap, ReadonlyArray_flap as flap, flatMap, flatten, foldLeft, foldMap, foldMapWithIndex, foldRight, fromArray, fromEither, ReadonlyArray_fromEitherK as fromEitherK, fromOption, fromOptionK, fromPredicate, getDifferenceMagma, getEq, getIntersectionSemigroup, getMonoid, getOrd, getSemigroup, getShow, getUnionMonoid, getUnionSemigroup, ReadonlyArray_guard as guard, ReadonlyArray_head as head, ReadonlyArray_init as init, insertAt, ReadonlyArray_intercalate as intercalate, intersection, ReadonlyArray_intersperse as intersperse, isEmpty, ReadonlyArray_isNonEmpty as isNonEmpty, ReadonlyArray_isOutOfBound as isOutOfBound, ReadonlyArray_last as last, lefts, let_ as let, lookup, ReadonlyArray_makeBy as makeBy, map, mapWithIndex, match, matchLeft, matchLeftW, matchRight, matchRightW, matchW, modifyAt, ReadonlyArray_of as of, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, ReadonlyArray_prepend as prepend, ReadonlyArray_prependAll as prependAll, prependToAll, ReadonlyArray_prependW as prependW, ReadonlyArray_range as range, readonlyArray, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex, replicate, reverse, rights, ReadonlyArray_rotate as rotate, scanLeft, scanRight, separate, sequence, size, ReadonlyArray_snoc as snoc, ReadonlyArray_some as some, sort, ReadonlyArray_sortBy as sortBy, spanLeft, ReadonlyArray_splitAt as splitAt, ReadonlyArray_tail as tail, takeLeft, takeLeftWhile, takeRight, toArray, traverse, traverseWithIndex, unfold, ReadonlyArray_union as union, ReadonlyArray_uniq as uniq, unsafeDeleteAt, ReadonlyArray_unsafeInsertAt as unsafeInsertAt, ReadonlyArray_unsafeUpdateAt as unsafeUpdateAt, unzip, updateAt, wilt, wither, zero, zip, zipWith };
