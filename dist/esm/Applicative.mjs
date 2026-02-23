import { ap, getApplySemigroup } from "./Apply.mjs";
import { pipe } from "./function.mjs";
import { getFunctorComposition } from "./Functor.mjs";
function getApplicativeMonoid(F) {
    const f = getApplySemigroup(F);
    return (M)=>({
            concat: f(M).concat,
            empty: F.of(M.empty)
        });
}
function getApplicativeComposition(F, G) {
    const map = getFunctorComposition(F, G).map;
    const _ap = ap(F, G);
    return {
        map,
        of: (a)=>F.of(G.of(a)),
        ap: (fgab, fga)=>pipe(fgab, _ap(fga))
    };
}
export { getApplicativeComposition, getApplicativeMonoid };
