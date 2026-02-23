import { altAll } from "./Alt.mjs";
import { getApplySemigroup } from "./Apply.mjs";
function Alternative_altAll(F) {
    return altAll(F)(F.zero());
}
function getAlternativeMonoid(F) {
    const f = getApplySemigroup(F);
    return (S)=>{
        const SF = f(S);
        return {
            concat: (first, second)=>F.alt(SF.concat(first, second), ()=>F.alt(first, ()=>second)),
            empty: F.zero()
        };
    };
}
export { Alternative_altAll as altAll, getAlternativeMonoid };
