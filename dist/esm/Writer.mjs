import { pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
const tell = (w)=>()=>[
            void 0,
            w
        ];
const listen = (fa)=>()=>{
        const [a, w] = fa();
        return [
            [
                a,
                w
            ],
            w
        ];
    };
const pass = (fa)=>()=>{
        const [[a, f], w] = fa();
        return [
            a,
            f(w)
        ];
    };
const listens = (f)=>(fa)=>()=>{
            const [a, w] = fa();
            return [
                [
                    a,
                    f(w)
                ],
                w
            ];
        };
const censor = (f)=>(fa)=>()=>{
            const [a, w] = fa();
            return [
                a,
                f(w)
            ];
        };
const _map = (fa, f)=>pipe(fa, map(f));
const map = (f)=>(fa)=>()=>{
            const [a, w] = fa();
            return [
                f(a),
                w
            ];
        };
const URI = 'Writer';
const getPointed = (M)=>({
        URI,
        _E: void 0,
        of: (a)=>()=>[
                    a,
                    M.empty
                ]
    });
const getApply = (S)=>({
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>()=>{
                const [f, w1] = fab();
                const [a, w2] = fa();
                return [
                    f(a),
                    S.concat(w1, w2)
                ];
            }
    });
const getApplicative = (M)=>{
    const A = getApply(M);
    const P = getPointed(M);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: P.of
    };
};
function getChain(S) {
    const A = getApply(S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: (fa, f)=>()=>{
                const [a, w1] = fa();
                const [b, w2] = f(a)();
                return [
                    b,
                    S.concat(w1, w2)
                ];
            }
    };
}
function getMonad(M) {
    const A = getApplicative(M);
    const C = getChain(M);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: A.of,
        chain: C.chain
    };
}
const Functor = {
    URI,
    map: _map
};
const Writer_flap = /*#__PURE__*/ flap(Functor);
const evaluate = (fa)=>fa()[0];
const execute = (fa)=>fa()[1];
const evalWriter = (fa)=>fa()[0];
const execWriter = (fa)=>fa()[1];
const writer = Functor;
export { Functor, URI, censor, evalWriter, evaluate, execWriter, execute, Writer_flap as flap, getApplicative, getApply, getChain, getMonad, getPointed, listen, listens, map, pass, tell, writer };
