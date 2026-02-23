import { pipe } from "./function.mjs";
import { getFunctorComposition } from "./Functor.mjs";
function mapWithIndex(F, G) {
    return (f)=>(fa)=>F.mapWithIndex(fa, (i, ga)=>G.mapWithIndex(ga, (j, a)=>f([
                        i,
                        j
                    ], a)));
}
function getFunctorWithIndexComposition(F, G) {
    const map = getFunctorComposition(F, G).map;
    const _mapWithIndex = mapWithIndex(F, G);
    return {
        map,
        mapWithIndex: (fga, f)=>pipe(fga, _mapWithIndex(f))
    };
}
export { getFunctorWithIndexComposition, mapWithIndex };
