import { pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
function tracks(M, f) {
    return (wa)=>wa(f(wa(M.empty)));
}
function listen(wa) {
    return (e)=>[
            wa(e),
            e
        ];
}
function listens(f) {
    return (wa)=>(e)=>[
                wa(e),
                f(e)
            ];
}
function censor(f) {
    return (wa)=>(e)=>wa(f(e));
}
function getComonad(monoid) {
    function extend(wa, f) {
        return (p1)=>f((p2)=>wa(monoid.concat(p1, p2)));
    }
    function extract(wa) {
        return wa(monoid.empty);
    }
    return {
        URI,
        _E: void 0,
        map: _map,
        extend,
        extract
    };
}
const _map = (fa, f)=>pipe(fa, map(f));
const map = (f)=>(fa)=>(p)=>f(fa(p));
const URI = 'Traced';
const Functor = {
    URI,
    map: _map
};
const Traced_flap = /*#__PURE__*/ flap(Functor);
const traced = Functor;
export { Functor, URI, censor, Traced_flap as flap, getComonad, listen, listens, map, traced, tracks };
