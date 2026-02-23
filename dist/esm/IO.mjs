import { getApplicativeMonoid } from "./Applicative.mjs";
import { apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { constant, dual, identity } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, head, isNonEmpty } from "./internal.mjs";
const _map = (ma, f)=>()=>f(ma());
const _ap = (mab, ma)=>()=>mab()(ma());
const _chainRec = (a, f)=>()=>{
        let e = f(a)();
        while('Left' === e._tag)e = f(e.left)();
        return e.right;
    };
const map = (f)=>(fa)=>_map(fa, f);
const ap = (fa)=>(fab)=>_ap(fab, fa);
const of = constant;
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>()=>f(ma())());
const flatten = /*#__PURE__*/ flatMap(identity);
const URI = 'IO';
const Functor = {
    URI,
    map: _map
};
const IO_as = dual(2, external_Functor_mjs_as(Functor));
const IO_asUnit = asUnit(Functor);
const IO_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const IO_apFirst = /*#__PURE__*/ apFirst(Apply);
const IO_apSecond = /*#__PURE__*/ apSecond(Apply);
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
const IO_tap = /*#__PURE__*/ dual(2, tap(Chain));
const fromIO = identity;
const MonadIO = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap,
    fromIO
};
const ChainRec = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
const FromIO = {
    URI,
    fromIO: identity
};
const Do = /*#__PURE__*/ of(emptyRecord);
const IO_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const IO_bind = /*#__PURE__*/ bind(Chain);
const IO_apS = /*#__PURE__*/ apS(Apply);
const ApT = /*#__PURE__*/ of(emptyReadonlyArray);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>()=>{
            const out = [
                f(0, head(as))()
            ];
            for(let i = 1; i < as.length; i++)out.push(f(i, as[i])());
            return out;
        };
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chain = flatMap;
const chainFirst = IO_tap;
const io = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    fromIO,
    chainRec: _chainRec
};
const getSemigroup = /*#__PURE__*/ getApplySemigroup(Apply);
const getMonoid = /*#__PURE__*/ getApplicativeMonoid(Applicative);
export { ApT, Applicative, Apply, Chain, ChainRec, Do, FromIO, Functor, Monad, MonadIO, Pointed, URI, ap, IO_apFirst as apFirst, IO_apS as apS, IO_apSecond as apSecond, IO_as as as, IO_asUnit as asUnit, IO_bind as bind, IO_bindTo as bindTo, chain, chainFirst, IO_flap as flap, flatMap, flatten, fromIO, getMonoid, getSemigroup, io, let_ as let, map, of, sequenceArray, IO_tap as tap, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex };
