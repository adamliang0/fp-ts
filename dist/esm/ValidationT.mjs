import { getApplicativeComposition } from "./Applicative.mjs";
import { getApplicativeValidation } from "./Either.mjs";
import { isLeft, isRight, left } from "./internal.mjs";
function getValidationM(S, M) {
    const A = getApplicativeComposition(M, getApplicativeValidation(S));
    return {
        map: A.map,
        ap: A.ap,
        of: A.of,
        chain: (ma, f)=>M.chain(ma, (e)=>isLeft(e) ? M.of(left(e.left)) : f(e.right)),
        alt: (me, that)=>M.chain(me, (e1)=>isRight(e1) ? M.of(e1) : M.map(that(), (e2)=>isLeft(e2) ? left(S.concat(e1.left, e2.left)) : e2))
    };
}
export { getValidationM };
