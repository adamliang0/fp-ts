import { identity } from "./function.mjs";
function split(P, C) {
    return (pab, pcd)=>C.compose(P.right(pcd), P.left(pab));
}
function fanIn(P, C) {
    const splitPC = split(P, C);
    return (pac, pbc)=>C.compose(P.promap(C.id(), (cc)=>'Left' === cc._tag ? cc.left : cc.right, identity), splitPC(pac, pbc));
}
function splitChoice(F) {
    return split(F, F);
}
function fanin(F) {
    return fanIn(F, F);
}
export { fanIn, fanin, split, splitChoice };
