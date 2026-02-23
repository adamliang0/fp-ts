import { identity, pipe, unsafeCoerce } from "./function.mjs";
import { flap } from "./Functor.mjs";
const make = unsafeCoerce;
function getShow(S) {
    return {
        show: (c)=>`make(${S.show(c)})`
    };
}
const getEq = identity;
const getOrd = identity;
const getBounded = identity;
const getSemigroup = identity;
const getMonoid = identity;
const getSemiring = identity;
const getRing = identity;
const getHeytingAlgebra = identity;
const getBooleanAlgebra = identity;
function getApply(S) {
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>make(S.concat(fab, fa))
    };
}
function getApplicative(M) {
    const A = getApply(M);
    return {
        URI,
        _E: void 0,
        map: A.map,
        ap: A.ap,
        of: ()=>make(M.empty)
    };
}
const _contramap = (fa, f)=>pipe(fa, contramap(f));
const _map = (fa, f)=>pipe(fa, map(f));
const _bimap = (fa, f, g)=>pipe(fa, bimap(f, g));
const _mapLeft = (fa, f)=>pipe(fa, mapLeft(f));
const contramap = ()=>unsafeCoerce;
const map = ()=>unsafeCoerce;
const bimap = (f)=>(fa)=>make(f(fa));
const mapLeft = (f)=>(fa)=>make(f(fa));
const URI = 'Const';
const Functor = {
    URI,
    map: _map
};
const Const_flap = /*#__PURE__*/ flap(Functor);
const Contravariant = {
    URI,
    contramap: _contramap
};
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const const_ = {
    URI,
    map: _map,
    contramap: _contramap,
    bimap: _bimap,
    mapLeft: _mapLeft
};
export { Bifunctor, Contravariant, Functor, URI, bimap, const_, contramap, Const_flap as flap, getApplicative, getApply, getBooleanAlgebra, getBounded, getEq, getHeytingAlgebra, getMonoid, getOrd, getRing, getSemigroup, getSemiring, getShow, make, map, mapLeft };
