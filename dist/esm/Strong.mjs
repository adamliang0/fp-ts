import { identity } from "./function.mjs";
function split(S, C) {
    return (pab, pcd)=>C.compose(S.second(pcd), S.first(pab));
}
function fanOut(S, C) {
    const splitSC = split(S, C);
    return (pab, pac)=>C.compose(splitSC(pab, pac), S.promap(C.id(), identity, (a)=>[
                a,
                a
            ]));
}
function splitStrong(F) {
    return split(F, F);
}
function fanout(F) {
    return fanOut(F, F);
}
export { fanOut, fanout, split, splitStrong };
