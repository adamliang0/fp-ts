import { none, some } from "./internal.mjs";
function wiltDefault(T, C) {
    return (F)=>{
        const traverseF = T.traverse(F);
        return (wa, f)=>F.map(traverseF(wa, f), C.separate);
    };
}
function witherDefault(T, C) {
    return (F)=>{
        const traverseF = T.traverse(F);
        return (wa, f)=>F.map(traverseF(wa, f), C.compact);
    };
}
function filterE(W) {
    return (F)=>{
        const witherF = W.wither(F);
        return (predicate)=>(ga)=>witherF(ga, (a)=>F.map(predicate(a), (b)=>b ? some(a) : none));
    };
}
export { filterE, wiltDefault, witherDefault };
