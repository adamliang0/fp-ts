import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, chainFirst } from "./Chain.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyRecord, fromReadonlyNonEmptyArray, has, none, some } from "./internal.mjs";
import { getMonoid } from "./Ord.mjs";
import { concatAll, foldMap, foldMapWithIndex, getEq, getShow, head as external_ReadonlyNonEmptyArray_mjs_head, intercalate, last, max, min, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex } from "./ReadonlyNonEmptyArray.mjs";
const isNonEmpty = (as)=>as.length > 0;
const isOutOfBound = (i, as)=>i < 0 || i >= as.length;
const prependW = (head)=>(tail)=>[
            head,
            ...tail
        ];
const prepend = prependW;
const appendW = (end)=>(init)=>[
            ...init,
            end
        ];
const append = appendW;
const unsafeInsertAt = (i, a, as)=>{
    if (isNonEmpty(as)) {
        const xs = NonEmptyArray_fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [
        a
    ];
};
const unsafeUpdateAt = (i, a, as)=>{
    const xs = NonEmptyArray_fromReadonlyNonEmptyArray(as);
    xs[i] = a;
    return xs;
};
const uniq = (E)=>(as)=>{
        if (1 === as.length) return copy(as);
        const out = [
            NonEmptyArray_head(as)
        ];
        const rest = NonEmptyArray_tail(as);
        for (const a of rest)if (out.every((o)=>!E.equals(o, a))) out.push(a);
        return out;
    };
const sortBy = (ords)=>{
    if (isNonEmpty(ords)) {
        const M = getMonoid();
        return sort(ords.reduce(M.concat, M.empty));
    }
    return copy;
};
const union = (E)=>{
    const uniqE = uniq(E);
    return (second)=>(first)=>uniqE(pipe(first, concat(second)));
};
const rotate = (n)=>(as)=>{
        const len = as.length;
        const m = Math.round(n) % len;
        if (isOutOfBound(Math.abs(m), as) || 0 === m) return copy(as);
        if (!(m < 0)) return rotate(m - len)(as);
        {
            const [f, s] = splitAt(-m)(as);
            return pipe(s, concat(f));
        }
    };
const NonEmptyArray_fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;
const fromArray = (as)=>isNonEmpty(as) ? some(as) : none;
const makeBy = (f)=>(n)=>{
        const j = Math.max(0, Math.floor(n));
        const out = [
            f(0)
        ];
        for(let i = 1; i < j; i++)out.push(f(i));
        return out;
    };
const replicate = (a)=>makeBy(()=>a);
const range = (start, end)=>start <= end ? makeBy((i)=>start + i)(end - start + 1) : [
        start
    ];
const unprepend = (as)=>[
        NonEmptyArray_head(as),
        NonEmptyArray_tail(as)
    ];
const unappend = (as)=>[
        NonEmptyArray_init(as),
        NonEmptyArray_last(as)
    ];
function concatW(second) {
    return (first)=>first.concat(second);
}
function concat(x, y) {
    return y ? x.concat(y) : (y)=>y.concat(x);
}
const reverse = (as)=>[
        NonEmptyArray_last(as),
        ...as.slice(0, -1).reverse()
    ];
function group(E) {
    return (as)=>{
        const len = as.length;
        if (0 === len) return [];
        const out = [];
        let head = as[0];
        let nea = [
            head
        ];
        for(let i = 1; i < len; i++){
            const a = as[i];
            if (E.equals(a, head)) nea.push(a);
            else {
                out.push(nea);
                head = a;
                nea = [
                    head
                ];
            }
        }
        out.push(nea);
        return out;
    };
}
const groupBy = (f)=>(as)=>{
        const out = {};
        for (const a of as){
            const k = f(a);
            if (has.call(out, k)) out[k].push(a);
            else out[k] = [
                a
            ];
        }
        return out;
    };
const sort = (O)=>(as)=>as.slice().sort(O.compare);
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? none : some(unsafeInsertAt(i, a, as));
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const modifyAt = (i, f)=>(as)=>isOutOfBound(i, as) ? none : some(unsafeUpdateAt(i, f(as[i]), as));
const copy = NonEmptyArray_fromReadonlyNonEmptyArray;
const of = (a)=>[
        a
    ];
const zipWith = (as, bs, f)=>{
    const cs = [
        f(as[0], bs[0])
    ];
    const len = Math.min(as.length, bs.length);
    for(let i = 1; i < len; i++)cs[i] = f(as[i], bs[i]);
    return cs;
};
function zip(as, bs) {
    if (void 0 === bs) return (bs)=>zip(bs, as);
    return zipWith(as, bs, (a, b)=>[
            a,
            b
        ]);
}
const unzip = (abs)=>{
    const fa = [
        abs[0][0]
    ];
    const fb = [
        abs[0][1]
    ];
    for(let i = 1; i < abs.length; i++){
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [
        fa,
        fb
    ];
};
const prependAll = (middle)=>(as)=>{
        const out = [
            middle,
            as[0]
        ];
        for(let i = 1; i < as.length; i++)out.push(middle, as[i]);
        return out;
    };
const intersperse = (middle)=>(as)=>{
        const rest = NonEmptyArray_tail(as);
        return isNonEmpty(rest) ? pipe(rest, prependAll(middle), prepend(NonEmptyArray_head(as))) : copy(as);
    };
const NonEmptyArray_foldMapWithIndex = foldMapWithIndex;
const NonEmptyArray_foldMap = foldMap;
const chainWithIndex = (f)=>(as)=>{
        const out = NonEmptyArray_fromReadonlyNonEmptyArray(f(0, NonEmptyArray_head(as)));
        for(let i = 1; i < as.length; i++){
            const bs = f(i, as[i]);
            for(let j = 0; j < bs.length; j++)out.push(bs[j]);
        }
        return out;
    };
const chop = (f)=>(as)=>{
        const [b, rest] = f(as);
        const out = [
            b
        ];
        let next = rest;
        while(isNonEmpty(next)){
            const [b, rest] = f(next);
            out.push(b);
            next = rest;
        }
        return out;
    };
const splitAt = (n)=>(as)=>{
        const m = Math.max(1, n);
        return m >= as.length ? [
            copy(as),
            []
        ] : [
            pipe(as.slice(1, m), prepend(NonEmptyArray_head(as))),
            as.slice(m)
        ];
    };
const chunksOf = (n)=>chop(splitAt(n));
const _map = (fa, f)=>pipe(fa, map(f));
const _mapWithIndex = (fa, f)=>pipe(fa, mapWithIndex(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const _extend = (wa, f)=>pipe(wa, extend(f));
const _reduce = (fa, b, f)=>pipe(fa, NonEmptyArray_reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = NonEmptyArray_foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, NonEmptyArray_reduceRight(b, f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const _alt = (fa, that)=>pipe(fa, alt(that));
const _reduceWithIndex = (fa, b, f)=>pipe(fa, NonEmptyArray_reduceWithIndex(b, f));
const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = NonEmptyArray_foldMapWithIndex(M);
    return (fa, f)=>pipe(fa, foldMapWithIndexM(f));
};
const _reduceRightWithIndex = (fa, b, f)=>pipe(fa, NonEmptyArray_reduceRightWithIndex(b, f));
const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>pipe(ta, traverseWithIndexF(f));
};
const altW = (that)=>(as)=>pipe(as, concatW(that()));
const alt = altW;
const ap = (as)=>flatMap((f)=>pipe(as, map(f)));
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>pipe(ma, chainWithIndex((i, a)=>f(a, i))));
const extend = (f)=>(as)=>{
        let next = NonEmptyArray_tail(as);
        const out = [
            f(as)
        ];
        while(isNonEmpty(next)){
            out.push(f(next));
            next = NonEmptyArray_tail(next);
        }
        return out;
    };
const duplicate = /*#__PURE__*/ extend(identity);
const flatten = /*#__PURE__*/ flatMap(identity);
const map = (f)=>mapWithIndex((_, a)=>f(a));
const mapWithIndex = (f)=>(as)=>{
        const out = [
            f(0, NonEmptyArray_head(as))
        ];
        for(let i = 1; i < as.length; i++)out.push(f(i, as[i]));
        return out;
    };
const NonEmptyArray_reduce = reduce;
const NonEmptyArray_reduceWithIndex = reduceWithIndex;
const NonEmptyArray_reduceRight = reduceRight;
const NonEmptyArray_reduceRightWithIndex = reduceRightWithIndex;
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>traverseWithIndex(F)((_, a)=>a);
const traverseWithIndex = (F)=>(f)=>(as)=>{
            let out = F.map(f(0, NonEmptyArray_head(as)), of);
            for(let i = 1; i < as.length; i++)out = F.ap(F.map(out, (bs)=>(b)=>pipe(bs, append(b))), f(i, as[i]));
            return out;
        };
const extract = external_ReadonlyNonEmptyArray_mjs_head;
const URI = 'NonEmptyArray';
const NonEmptyArray_getShow = getShow;
const getSemigroup = ()=>({
        concat
    });
const NonEmptyArray_getEq = getEq;
const getUnionSemigroup = (E)=>{
    const unionE = union(E);
    return {
        concat: (first, second)=>unionE(second)(first)
    };
};
const Functor = {
    URI,
    map: _map
};
const NonEmptyArray_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
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
const NonEmptyArray_apFirst = /*#__PURE__*/ apFirst(Apply);
const NonEmptyArray_apSecond = /*#__PURE__*/ apSecond(Apply);
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
const NonEmptyArray_chainFirst = /*#__PURE__*/ chainFirst(Chain);
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
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
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
const Alt = {
    URI,
    map: _map,
    alt: _alt
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Do = /*#__PURE__*/ of(emptyRecord);
const NonEmptyArray_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const NonEmptyArray_bind = /*#__PURE__*/ bind(Chain);
const NonEmptyArray_apS = /*#__PURE__*/ apS(Apply);
const NonEmptyArray_head = external_ReadonlyNonEmptyArray_mjs_head;
const NonEmptyArray_tail = (as)=>as.slice(1);
const NonEmptyArray_last = last;
const NonEmptyArray_init = (as)=>as.slice(0, -1);
const NonEmptyArray_min = min;
const NonEmptyArray_max = max;
const NonEmptyArray_concatAll = (S)=>(as)=>as.reduce(S.concat);
const matchLeft = (f)=>(as)=>f(NonEmptyArray_head(as), NonEmptyArray_tail(as));
const matchRight = (f)=>(as)=>f(NonEmptyArray_init(as), NonEmptyArray_last(as));
const modifyHead = (f)=>(as)=>[
            f(NonEmptyArray_head(as)),
            ...NonEmptyArray_tail(as)
        ];
const updateHead = (a)=>modifyHead(()=>a);
const modifyLast = (f)=>(as)=>pipe(NonEmptyArray_init(as), append(f(NonEmptyArray_last(as))));
const updateLast = (a)=>modifyLast(()=>a);
const NonEmptyArray_intercalate = intercalate;
const chain = flatMap;
function groupSort(O) {
    const sortO = sort(O);
    const groupO = group(O);
    return (as)=>isNonEmpty(as) ? groupO(sortO(as)) : [];
}
function filter(predicate) {
    return filterWithIndex((_, a)=>predicate(a));
}
const filterWithIndex = (predicate)=>(as)=>fromArray(as.filter((a, i)=>predicate(i, a)));
const uncons = unprepend;
const unsnoc = unappend;
function cons(head, tail) {
    return void 0 === tail ? prepend(head) : pipe(tail, prepend(head));
}
const snoc = (init, end)=>pipe(init, append(end));
const prependToAll = prependAll;
const fold = concatAll;
const nonEmptyArray = {
    URI,
    of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: flatMap,
    extend: _extend,
    extract: extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};
export { Alt, Applicative, Apply, Chain, Comonad, Do, Foldable, FoldableWithIndex, Functor, FunctorWithIndex, Monad, Pointed, Traversable, TraversableWithIndex, URI, alt, altW, ap, NonEmptyArray_apFirst as apFirst, NonEmptyArray_apS as apS, NonEmptyArray_apSecond as apSecond, append, appendW, NonEmptyArray_bind as bind, NonEmptyArray_bindTo as bindTo, chain, NonEmptyArray_chainFirst as chainFirst, chainWithIndex, chop, chunksOf, concat, NonEmptyArray_concatAll as concatAll, concatW, cons, copy, duplicate, extend, extract, filter, filterWithIndex, NonEmptyArray_flap as flap, flatMap, flatten, fold, NonEmptyArray_foldMap as foldMap, NonEmptyArray_foldMapWithIndex as foldMapWithIndex, fromArray, NonEmptyArray_fromReadonlyNonEmptyArray as fromReadonlyNonEmptyArray, NonEmptyArray_getEq as getEq, getSemigroup, NonEmptyArray_getShow as getShow, getUnionSemigroup, group, groupBy, groupSort, NonEmptyArray_head as head, NonEmptyArray_init as init, insertAt, NonEmptyArray_intercalate as intercalate, intersperse, isNonEmpty, isOutOfBound, NonEmptyArray_last as last, let_ as let, makeBy, map, mapWithIndex, matchLeft, matchRight, NonEmptyArray_max as max, NonEmptyArray_min as min, modifyAt, modifyHead, modifyLast, nonEmptyArray, of, prepend, prependAll, prependToAll, prependW, range, NonEmptyArray_reduce as reduce, NonEmptyArray_reduceRight as reduceRight, NonEmptyArray_reduceRightWithIndex as reduceRightWithIndex, NonEmptyArray_reduceWithIndex as reduceWithIndex, replicate, reverse, rotate, sequence, snoc, sort, sortBy, splitAt, NonEmptyArray_tail as tail, traverse, traverseWithIndex, unappend, uncons, union, uniq, unprepend, unsafeInsertAt, unsafeUpdateAt, unsnoc, unzip, updateAt, updateHead, updateLast, zip, zipWith };
