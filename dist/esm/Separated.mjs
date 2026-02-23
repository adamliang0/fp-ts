import { pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
const separated = (left, right)=>({
        left,
        right
    });
const _map = (fa, f)=>pipe(fa, map(f));
const _mapLeft = (fa, f)=>pipe(fa, mapLeft(f));
const _bimap = (fa, g, f)=>pipe(fa, bimap(g, f));
const map = (f)=>(fa)=>separated(Separated_left(fa), f(Separated_right(fa)));
const mapLeft = (f)=>(fa)=>separated(f(Separated_left(fa)), Separated_right(fa));
const bimap = (f, g)=>(fa)=>separated(f(Separated_left(fa)), g(Separated_right(fa)));
const URI = 'Separated';
const Bifunctor = {
    URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
const Functor = {
    URI,
    map: _map
};
const Separated_flap = /*#__PURE__*/ flap(Functor);
const Separated_left = (s)=>s.left;
const Separated_right = (s)=>s.right;
export { Bifunctor, Functor, URI, bimap, Separated_flap as flap, Separated_left as left, map, mapLeft, Separated_right as right, separated };
