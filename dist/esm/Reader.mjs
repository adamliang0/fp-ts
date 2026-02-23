import { getApplicativeMonoid } from "./Applicative.mjs";
import { apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { fold, left, right } from "./Either.mjs";
import { constant, dual, flow, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, head, isNonEmpty, left as external_internal_mjs_left, right as external_internal_mjs_right } from "./internal.mjs";
const ask = ()=>identity;
const asks = identity;
const local = (f)=>(ma)=>(r2)=>ma(f(r2));
const asksReaderW = (f)=>(r)=>f(r)(r);
const asksReader = asksReaderW;
const _map = (fa, f)=>pipe(fa, map(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const _compose = (bc, ab)=>pipe(bc, compose(ab));
const _promap = (fea, f, g)=>pipe(fea, promap(f, g));
const map = (f)=>(fa)=>(r)=>f(fa(r));
const apW = (fa)=>(fab)=>(r)=>fab(r)(fa(r));
const ap = apW;
const of = constant;
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>(r)=>f(ma(r))(r));
const flattenW = /*#__PURE__*/ flatMap(identity);
const flatten = flattenW;
const compose = (ab)=>(bc)=>flow(ab, bc);
const promap = (f, g)=>(fea)=>(a)=>g(fea(f(a)));
const id = ()=>identity;
const first = (pab)=>([a, c])=>[
            pab(a),
            c
        ];
const second = (pbc)=>([a, b])=>[
            a,
            pbc(b)
        ];
const Reader_left = (pab)=>fold((a)=>external_internal_mjs_left(pab(a)), right);
const Reader_right = (pbc)=>fold(left, (b)=>external_internal_mjs_right(pbc(b)));
const URI = 'Reader';
const Functor = {
    URI,
    map: _map
};
const Reader_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Reader_apFirst = /*#__PURE__*/ apFirst(Apply);
const apFirstW = Reader_apFirst;
const Reader_apSecond = /*#__PURE__*/ apSecond(Apply);
const apSecondW = Reader_apSecond;
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
    of,
    ap: _ap,
    chain: flatMap
};
const Reader_tap = /*#__PURE__*/ dual(2, tap(Chain));
const Profunctor = {
    URI,
    map: _map,
    promap: _promap
};
const Category = {
    URI,
    compose: _compose,
    id
};
const Strong = {
    URI,
    map: _map,
    promap: _promap,
    first,
    second
};
const Choice = {
    URI,
    map: _map,
    promap: _promap,
    left: Reader_left,
    right: Reader_right
};
const Reader_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Reader_bind = /*#__PURE__*/ bind(Chain);
const bindW = Reader_bind;
const Do = /*#__PURE__*/ of(emptyRecord);
const Reader_apS = /*#__PURE__*/ apS(Apply);
const apSW = Reader_apS;
const ApT = /*#__PURE__*/ of(emptyReadonlyArray);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>(r)=>{
            const out = [
                f(0, head(as))(r)
            ];
            for(let i = 1; i < as.length; i++)out.push(f(i, as[i])(r));
            return out;
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
const chainFirst = Reader_tap;
const chainFirstW = Reader_tap;
const reader = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    promap: _promap,
    compose: _compose,
    id,
    first,
    second,
    left: Reader_left,
    right: Reader_right
};
const getSemigroup = /*#__PURE__*/ getApplySemigroup(Apply);
const getMonoid = /*#__PURE__*/ getApplicativeMonoid(Applicative);
export { ApT, Applicative, Apply, Category, Chain, Choice, Do, Functor, Monad, Pointed, Profunctor, Strong, URI, ap, Reader_apFirst as apFirst, apFirstW, Reader_apS as apS, apSW, Reader_apSecond as apSecond, apSecondW, apW, ask, asks, asksReader, asksReaderW, Reader_bind as bind, Reader_bindTo as bindTo, bindW, chain, chainFirst, chainFirstW, chainW, compose, first, Reader_flap as flap, flatMap, flatten, flattenW, getMonoid, getSemigroup, id, Reader_left as left, let_ as let, local, map, of, promap, reader, Reader_right as right, second, sequenceArray, Reader_tap as tap, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex };
