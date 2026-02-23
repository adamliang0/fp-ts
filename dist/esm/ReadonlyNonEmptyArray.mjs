import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, chainFirst } from "./Chain.mjs";
import { fromEquals } from "./Eq.mjs";
import { SK, dual, flow, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, fromReadonlyNonEmptyArray, has, head as external_internal_mjs_head, isNonEmpty, none, singleton, some, tail as external_internal_mjs_tail } from "./internal.mjs";
import { getMonoid } from "./Ord.mjs";
import { max, min } from "./Semigroup.mjs";
const empty = emptyReadonlyArray;
const ReadonlyNonEmptyArray_isNonEmpty = isNonEmpty;
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
    if (ReadonlyNonEmptyArray_isNonEmpty(as)) {
        const xs = fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [
        a
    ];
};
const unsafeUpdateAt = (i, a, as)=>{
    if (as[i] === a) return as;
    {
        const xs = fromReadonlyNonEmptyArray(as);
        xs[i] = a;
        return xs;
    }
};
const uniq = (E)=>(as)=>{
        if (1 === as.length) return as;
        const out = [
            ReadonlyNonEmptyArray_head(as)
        ];
        const rest = ReadonlyNonEmptyArray_tail(as);
        for (const a of rest)if (out.every((o)=>!E.equals(o, a))) out.push(a);
        return out;
    };
const sortBy = (ords)=>{
    if (ReadonlyNonEmptyArray_isNonEmpty(ords)) {
        const M = getMonoid();
        return sort(ords.reduce(M.concat, M.empty));
    }
    return identity;
};
const union = (E)=>{
    const uniqE = uniq(E);
    return (second)=>(first)=>uniqE(pipe(first, concat(second)));
};
const rotate = (n)=>(as)=>{
        const len = as.length;
        const m = Math.round(n) % len;
        if (isOutOfBound(Math.abs(m), as) || 0 === m) return as;
        if (!(m < 0)) return rotate(m - len)(as);
        {
            const [f, s] = splitAt(-m)(as);
            return pipe(s, concat(f));
        }
    };
const fromReadonlyArray = (as)=>ReadonlyNonEmptyArray_isNonEmpty(as) ? some(as) : none;
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
        ReadonlyNonEmptyArray_head(as),
        ReadonlyNonEmptyArray_tail(as)
    ];
const unappend = (as)=>[
        ReadonlyNonEmptyArray_init(as),
        last(as)
    ];
const fromArray = (as)=>fromReadonlyArray(as.slice());
function concatW(second) {
    return (first)=>first.concat(second);
}
function concat(x, y) {
    return y ? x.concat(y) : (y)=>y.concat(x);
}
const reverse = (as)=>1 === as.length ? as : [
        last(as),
        ...as.slice(0, -1).reverse()
    ];
function group(E) {
    return (as)=>{
        const len = as.length;
        if (0 === len) return empty;
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
const sort = (O)=>(as)=>1 === as.length ? as : as.slice().sort(O.compare);
const updateAt = (i, a)=>modifyAt(i, ()=>a);
const modifyAt = (i, f)=>(as)=>isOutOfBound(i, as) ? none : some(unsafeUpdateAt(i, f(as[i]), as));
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
        const rest = ReadonlyNonEmptyArray_tail(as);
        return ReadonlyNonEmptyArray_isNonEmpty(rest) ? pipe(rest, prependAll(middle), prepend(ReadonlyNonEmptyArray_head(as))) : as;
    };
const chainWithIndex = (f)=>(as)=>{
        const out = fromReadonlyNonEmptyArray(f(0, ReadonlyNonEmptyArray_head(as)));
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
        while(ReadonlyNonEmptyArray_isNonEmpty(next)){
            const [b, rest] = f(next);
            out.push(b);
            next = rest;
        }
        return out;
    };
const splitAt = (n)=>(as)=>{
        const m = Math.max(1, n);
        return m >= as.length ? [
            as,
            empty
        ] : [
            pipe(as.slice(1, m), prepend(ReadonlyNonEmptyArray_head(as))),
            as.slice(m)
        ];
    };
const chunksOf = (n)=>chop(splitAt(n));
const _map = (fa, f)=>pipe(fa, map(f));
const _mapWithIndex = (fa, f)=>pipe(fa, mapWithIndex(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const _extend = (wa, f)=>pipe(wa, extend(f));
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
const _reduceWithIndex = (fa, b, f)=>pipe(fa, reduceWithIndex(b, f));
const _foldMapWithIndex = (M)=>{
    const foldMapWithIndexM = foldMapWithIndex(M);
    return (fa, f)=>pipe(fa, foldMapWithIndexM(f));
};
const _reduceRightWithIndex = (fa, b, f)=>pipe(fa, reduceRightWithIndex(b, f));
const _traverseWithIndex = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (ta, f)=>pipe(ta, traverseWithIndexF(f));
};
const of = singleton;
const altW = (that)=>(as)=>pipe(as, concatW(that()));
const alt = altW;
const ap = (as)=>flatMap((f)=>pipe(as, map(f)));
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>pipe(ma, chainWithIndex((i, a)=>f(a, i))));
const extend = (f)=>(as)=>{
        let next = ReadonlyNonEmptyArray_tail(as);
        const out = [
            f(as)
        ];
        while(ReadonlyNonEmptyArray_isNonEmpty(next)){
            out.push(f(next));
            next = ReadonlyNonEmptyArray_tail(next);
        }
        return out;
    };
const duplicate = /*#__PURE__*/ extend(identity);
const flatten = /*#__PURE__*/ flatMap(identity);
const map = (f)=>mapWithIndex((_, a)=>f(a));
const mapWithIndex = (f)=>(as)=>{
        const out = [
            f(0, ReadonlyNonEmptyArray_head(as))
        ];
        for(let i = 1; i < as.length; i++)out.push(f(i, as[i]));
        return out;
    };
const reduce = (b, f)=>reduceWithIndex(b, (_, b, a)=>f(b, a));
const foldMap = (S)=>(f)=>(as)=>as.slice(1).reduce((s, a)=>S.concat(s, f(a)), f(as[0]));
const reduceRight = (b, f)=>reduceRightWithIndex(b, (_, b, a)=>f(b, a));
const reduceWithIndex = (b, f)=>(as)=>as.reduce((b, a, i)=>f(i, b, a), b);
const foldMapWithIndex = (S)=>(f)=>(as)=>as.slice(1).reduce((s, a, i)=>S.concat(s, f(i + 1, a)), f(0, as[0]));
const reduceRightWithIndex = (b, f)=>(as)=>as.reduceRight((b, a, i)=>f(i, a, b), b);
const traverse = (F)=>{
    const traverseWithIndexF = traverseWithIndex(F);
    return (f)=>traverseWithIndexF((_, a)=>f(a));
};
const sequence = (F)=>traverseWithIndex(F)(SK);
const traverseWithIndex = (F)=>(f)=>(as)=>{
            let out = F.map(f(0, ReadonlyNonEmptyArray_head(as)), of);
            for(let i = 1; i < as.length; i++)out = F.ap(F.map(out, (bs)=>(b)=>pipe(bs, append(b))), f(i, as[i]));
            return out;
        };
const extract = external_internal_mjs_head;
const URI = 'ReadonlyNonEmptyArray';
const getShow = (S)=>({
        show: (as)=>`[${as.map(S.show).join(', ')}]`
    });
const getSemigroup = ()=>({
        concat
    });
const getEq = (E)=>fromEquals((xs, ys)=>xs.length === ys.length && xs.every((x, i)=>E.equals(x, ys[i])));
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
const ReadonlyNonEmptyArray_flap = /*#__PURE__*/ flap(Functor);
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
const ReadonlyNonEmptyArray_apFirst = /*#__PURE__*/ apFirst(Apply);
const ReadonlyNonEmptyArray_apSecond = /*#__PURE__*/ apSecond(Apply);
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
const ReadonlyNonEmptyArray_chainFirst = /*#__PURE__*/ chainFirst(Chain);
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
const ReadonlyNonEmptyArray_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const ReadonlyNonEmptyArray_bind = /*#__PURE__*/ bind(Chain);
const ReadonlyNonEmptyArray_apS = /*#__PURE__*/ apS(Apply);
const ReadonlyNonEmptyArray_head = extract;
const ReadonlyNonEmptyArray_tail = external_internal_mjs_tail;
const last = (as)=>as[as.length - 1];
const ReadonlyNonEmptyArray_init = (as)=>as.slice(0, -1);
const ReadonlyNonEmptyArray_min = (O)=>{
    const S = min(O);
    return (as)=>as.reduce(S.concat);
};
const ReadonlyNonEmptyArray_max = (O)=>{
    const S = max(O);
    return (as)=>as.reduce(S.concat);
};
const concatAll = (S)=>(as)=>as.reduce(S.concat);
const matchLeft = (f)=>(as)=>f(ReadonlyNonEmptyArray_head(as), ReadonlyNonEmptyArray_tail(as));
const matchRight = (f)=>(as)=>f(ReadonlyNonEmptyArray_init(as), last(as));
const modifyHead = (f)=>(as)=>[
            f(ReadonlyNonEmptyArray_head(as)),
            ...ReadonlyNonEmptyArray_tail(as)
        ];
const updateHead = (a)=>modifyHead(()=>a);
const modifyLast = (f)=>(as)=>pipe(ReadonlyNonEmptyArray_init(as), append(f(last(as))));
const updateLast = (a)=>modifyLast(()=>a);
const intercalate = (S)=>{
    const concatAllS = concatAll(S);
    return (middle)=>flow(intersperse(middle), concatAllS);
};
const chain = flatMap;
function groupSort(O) {
    const sortO = sort(O);
    const groupO = group(O);
    return (as)=>ReadonlyNonEmptyArray_isNonEmpty(as) ? groupO(sortO(as)) : empty;
}
function filter(predicate) {
    return filterWithIndex((_, a)=>predicate(a));
}
const filterWithIndex = (predicate)=>(as)=>fromReadonlyArray(as.filter((a, i)=>predicate(i, a)));
const uncons = unprepend;
const unsnoc = unappend;
function cons(head, tail) {
    return void 0 === tail ? prepend(head) : pipe(tail, prepend(head));
}
const snoc = (init, end)=>pipe(init, concat([
        end
    ]));
const insertAt = (i, a)=>(as)=>i < 0 || i > as.length ? none : some(unsafeInsertAt(i, a, as));
const prependToAll = prependAll;
const fold = concatAll;
const readonlyNonEmptyArray = {
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
export { Alt, Applicative, Apply, Chain, Comonad, Do, Foldable, FoldableWithIndex, Functor, FunctorWithIndex, Monad, Pointed, Traversable, TraversableWithIndex, URI, alt, altW, ap, ReadonlyNonEmptyArray_apFirst as apFirst, ReadonlyNonEmptyArray_apS as apS, ReadonlyNonEmptyArray_apSecond as apSecond, append, appendW, ReadonlyNonEmptyArray_bind as bind, ReadonlyNonEmptyArray_bindTo as bindTo, chain, ReadonlyNonEmptyArray_chainFirst as chainFirst, chainWithIndex, chop, chunksOf, concat, concatAll, concatW, cons, duplicate, empty, extend, extract, filter, filterWithIndex, ReadonlyNonEmptyArray_flap as flap, flatMap, flatten, fold, foldMap, foldMapWithIndex, fromArray, fromReadonlyArray, getEq, getSemigroup, getShow, getUnionSemigroup, group, groupBy, groupSort, ReadonlyNonEmptyArray_head as head, ReadonlyNonEmptyArray_init as init, insertAt, intercalate, intersperse, ReadonlyNonEmptyArray_isNonEmpty as isNonEmpty, isOutOfBound, last, let_ as let, makeBy, map, mapWithIndex, matchLeft, matchRight, ReadonlyNonEmptyArray_max as max, ReadonlyNonEmptyArray_min as min, modifyAt, modifyHead, modifyLast, of, prepend, prependAll, prependToAll, prependW, range, readonlyNonEmptyArray, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex, replicate, reverse, rotate, sequence, snoc, sort, sortBy, splitAt, ReadonlyNonEmptyArray_tail as tail, traverse, traverseWithIndex, unappend, uncons, union, uniq, unprepend, unsafeInsertAt, unsafeUpdateAt, unsnoc, unzip, updateAt, updateHead, updateLast, zip, zipWith };
