import { getFoldableComposition } from "./Foldable.mjs";
import { pipe } from "./function.mjs";
function reduceWithIndex(F, G) {
    return (b, f)=>(fga)=>F.reduceWithIndex(fga, b, (i, b, ga)=>G.reduceWithIndex(ga, b, (j, b, a)=>f([
                        i,
                        j
                    ], b, a)));
}
function foldMapWithIndex(F, G) {
    return (M)=>{
        const foldMapWithIndexF = F.foldMapWithIndex(M);
        const foldMapWithIndexG = G.foldMapWithIndex(M);
        return (f)=>(fga)=>foldMapWithIndexF(fga, (i, ga)=>foldMapWithIndexG(ga, (j, a)=>f([
                            i,
                            j
                        ], a)));
    };
}
function reduceRightWithIndex(F, G) {
    return (b, f)=>(fga)=>F.reduceRightWithIndex(fga, b, (i, ga, b)=>G.reduceRightWithIndex(ga, b, (j, a, b)=>f([
                        i,
                        j
                    ], a, b)));
}
function getFoldableWithIndexComposition(F, G) {
    const FC = getFoldableComposition(F, G);
    const _reduceWithIndex = reduceWithIndex(F, G);
    const _foldMapWithIndex = foldMapWithIndex(F, G);
    const _reduceRightWithIndex = reduceRightWithIndex(F, G);
    return {
        reduce: FC.reduce,
        foldMap: FC.foldMap,
        reduceRight: FC.reduceRight,
        reduceWithIndex: (fga, b, f)=>pipe(fga, _reduceWithIndex(b, f)),
        foldMapWithIndex: (M)=>{
            const foldMapWithIndexM = _foldMapWithIndex(M);
            return (fga, f)=>pipe(fga, foldMapWithIndexM(f));
        },
        reduceRightWithIndex: (fga, b, f)=>pipe(fga, _reduceRightWithIndex(b, f))
    };
}
export { foldMapWithIndex, getFoldableWithIndexComposition, reduceRightWithIndex, reduceWithIndex };
