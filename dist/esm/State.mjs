import { apFirst, apS, apSecond } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, head, isNonEmpty } from "./internal.mjs";
const get = ()=>(s)=>[
            s,
            s
        ];
const put = (s)=>()=>[
            void 0,
            s
        ];
const modify = (f)=>(s)=>[
            void 0,
            f(s)
        ];
const gets = (f)=>(s)=>[
            f(s),
            s
        ];
const _map = (fa, f)=>pipe(fa, map(f));
const _ap = (fab, fa)=>pipe(fab, ap(fa));
const map = (f)=>(fa)=>(s1)=>{
            const [a, s2] = fa(s1);
            return [
                f(a),
                s2
            ];
        };
const ap = (fa)=>(fab)=>(s1)=>{
            const [f, s2] = fab(s1);
            const [a, s3] = fa(s2);
            return [
                f(a),
                s3
            ];
        };
const of = (a)=>(s)=>[
            a,
            s
        ];
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>(s1)=>{
        const [a, s2] = ma(s1);
        return f(a)(s2);
    });
const flatten = /*#__PURE__*/ flatMap(identity);
const URI = 'State';
const Functor = {
    URI,
    map: _map
};
const State_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const State_apFirst = /*#__PURE__*/ apFirst(Apply);
const State_apSecond = /*#__PURE__*/ apSecond(Apply);
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
const State_tap = /*#__PURE__*/ dual(2, tap(Chain));
const FromState = {
    URI,
    fromState: identity
};
const evaluate = (s)=>(ma)=>ma(s)[0];
const execute = (s)=>(ma)=>ma(s)[1];
const State_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const State_bind = /*#__PURE__*/ bind(Chain);
const State_apS = /*#__PURE__*/ apS(Apply);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>(s)=>{
            const [b, s2] = f(0, head(as))(s);
            const bs = [
                b
            ];
            let out = s2;
            for(let i = 1; i < as.length; i++){
                const [b, s2] = f(i, as[i])(out);
                bs.push(b);
                out = s2;
            }
            return [
                bs,
                out
            ];
        };
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : of(emptyReadonlyArray);
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const chain = flatMap;
const chainFirst = State_tap;
const evalState = (ma, s)=>ma(s)[0];
const execState = (ma, s)=>ma(s)[1];
const state = Monad;
export { Applicative, Apply, Chain, FromState, Functor, Monad, Pointed, URI, ap, State_apFirst as apFirst, State_apS as apS, State_apSecond as apSecond, State_bind as bind, State_bindTo as bindTo, chain, chainFirst, evalState, evaluate, execState, execute, State_flap as flap, flatMap, flatten, get, gets, let_ as let, map, modify, of, put, sequenceArray, state, State_tap as tap, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex };
