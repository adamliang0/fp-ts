import { pipe } from "./function.mjs";
import { snd } from "./ReadonlyTuple.mjs";
function of(F) {
    return (a)=>(s)=>F.of([
                a,
                s
            ]);
}
function map(F) {
    return (f)=>(fa)=>(s)=>F.map(fa(s), ([a, s1])=>[
                        f(a),
                        s1
                    ]);
}
function ap(M) {
    return (fa)=>(fab)=>(s)=>M.chain(fab(s), ([f, s])=>M.map(fa(s), ([a, s])=>[
                            f(a),
                            s
                        ]));
}
function chain(M) {
    const flatMapM = flatMap(M);
    return (f)=>(ma)=>flatMapM(ma, f);
}
function flatMap(M) {
    return (ma, f)=>(s)=>M.chain(ma(s), ([a, s1])=>f(a)(s1));
}
function fromState(F) {
    return (sa)=>(s)=>F.of(sa(s));
}
function fromF(F) {
    return (ma)=>(s)=>F.map(ma, (a)=>[
                    a,
                    s
                ]);
}
function evaluate(F) {
    return (s)=>(ma)=>F.map(ma(s), ([a])=>a);
}
function execute(F) {
    return (s)=>(ma)=>F.map(ma(s), snd);
}
function getStateM(M) {
    const _ap = ap(M);
    const _map = map(M);
    const _chain = chain(M);
    const _evaluate = evaluate(M);
    const _execute = execute(M);
    return {
        map: (fa, f)=>pipe(fa, _map(f)),
        ap: (fab, fa)=>pipe(fab, _ap(fa)),
        of: of(M),
        chain: (ma, f)=>pipe(ma, _chain(f)),
        get: ()=>(s)=>M.of([
                    s,
                    s
                ]),
        put: (s)=>()=>M.of([
                    void 0,
                    s
                ]),
        modify: (f)=>(s)=>M.of([
                    void 0,
                    f(s)
                ]),
        gets: (f)=>(s)=>M.of([
                    f(s),
                    s
                ]),
        fromState: fromState(M),
        fromM: fromF(M),
        evalState: (fa, s)=>pipe(fa, _evaluate(s)),
        execState: (fa, s)=>pipe(fa, _execute(s))
    };
}
export { ap, chain, evaluate, execute, flatMap, fromF, fromState, getStateM, map, of };
