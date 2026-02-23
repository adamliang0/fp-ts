import { identity, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
function seek(s) {
    return (wa)=>({
            peek: wa.peek,
            pos: s
        });
}
function seeks(f) {
    return (wa)=>({
            peek: wa.peek,
            pos: f(wa.pos)
        });
}
function peeks(f) {
    return (wa)=>wa.peek(f(wa.pos));
}
function experiment(F) {
    return (f)=>(wa)=>F.map(f(wa.pos), (s)=>wa.peek(s));
}
const _map = (fa, f)=>pipe(fa, map(f));
const _extend = (wa, f)=>pipe(wa, extend(f));
const extend = (f)=>(wa)=>({
            peek: (s)=>f({
                    peek: wa.peek,
                    pos: s
                }),
            pos: wa.pos
        });
const extract = (wa)=>wa.peek(wa.pos);
const duplicate = /*#__PURE__*/ extend(identity);
const map = (f)=>(fa)=>({
            peek: (s)=>f(fa.peek(s)),
            pos: fa.pos
        });
const URI = 'Store';
const Functor = {
    URI,
    map: _map
};
const Store_flap = /*#__PURE__*/ flap(Functor);
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const store = Comonad;
export { Comonad, Functor, URI, duplicate, experiment, extend, extract, Store_flap as flap, map, peeks, seek, seeks, store };
