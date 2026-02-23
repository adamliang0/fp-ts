import { pipe } from "./function.mjs";
import { getFunctorComposition, map as external_Functor_mjs_map } from "./Functor.mjs";
import { getLeft, getRight } from "./Option.mjs";
import { separated } from "./Separated.mjs";
function compact(F, G) {
    return (fga)=>F.map(fga, G.compact);
}
function separate(F, C, G) {
    const _compact = compact(F, C);
    const _map = external_Functor_mjs_map(F, G);
    return (fge)=>separated(_compact(pipe(fge, _map(getLeft))), _compact(pipe(fge, _map(getRight))));
}
function getCompactableComposition(F, G) {
    const map = getFunctorComposition(F, G).map;
    return {
        map,
        compact: compact(F, G),
        separate: separate(F, G, G)
    };
}
export { compact, getCompactableComposition, separate };
