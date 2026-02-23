import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { tailRec } from "./ChainRec.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyRecord } from "./internal.mjs";
const _map = (fa, f)=>pipe(fa, map(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const _reduce = (fa, b, f)=>pipe(fa, reduce(b, f));
const _foldMap = (M)=>(fa, f)=>pipe(fa, foldMap(M)(f));
const _reduceRight = (fa, b, f)=>pipe(fa, reduceRight(b, f));
const _alt = (fa, that)=>pipe(fa, alt(that));
const _extend = (wa, f)=>pipe(wa, extend(f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const _chainRec = tailRec;
const map = (f)=>(fa)=>f(fa);
const ap = (fa)=>(fab)=>fab(fa);
const of = identity;
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>f(ma));
const extend = (f)=>(wa)=>f(wa);
const extract = identity;
const duplicate = /*#__PURE__*/ extend(identity);
const flatten = /*#__PURE__*/ flatMap(identity);
const reduce = (b, f)=>(fa)=>f(b, fa);
const foldMap = ()=>(f)=>(fa)=>f(fa);
const reduceRight = (b, f)=>(fa)=>f(fa, b);
const traverse = (F)=>(f)=>(ta)=>F.map(f(ta), identity);
const sequence = (F)=>(ta)=>F.map(ta, identity);
const altW = ()=>identity;
const alt = altW;
const URI = 'Identity';
const getShow = identity;
const getEq = identity;
const Functor = {
    URI,
    map: _map
};
const Identity_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Identity_apFirst = /*#__PURE__*/ apFirst(Apply);
const Identity_apSecond = /*#__PURE__*/ apSecond(Apply);
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
const Identity_tap = /*#__PURE__*/ dual(2, tap(Chain));
const chainFirst = Identity_tap;
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
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
const ChainRec = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
const Do = /*#__PURE__*/ of(emptyRecord);
const Identity_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Identity_bind = /*#__PURE__*/ bind(Chain);
const Identity_apS = /*#__PURE__*/ apS(Apply);
const chain = flatMap;
const Identity_identity = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    alt: _alt,
    extract,
    extend: _extend,
    chainRec: _chainRec
};
export { Alt, Applicative, Apply, Chain, ChainRec, Comonad, Do, Foldable, Functor, Monad, Pointed, Traversable, URI, alt, altW, ap, Identity_apFirst as apFirst, Identity_apS as apS, Identity_apSecond as apSecond, Identity_bind as bind, Identity_bindTo as bindTo, chain, chainFirst, duplicate, extend, extract, Identity_flap as flap, flatMap, flatten, foldMap, getEq, getShow, Identity_identity as identity, let_ as let, map, of, reduce, reduceRight, sequence, Identity_tap as tap, traverse };
