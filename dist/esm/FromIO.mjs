import { tap } from "./Chain.mjs";
import { flow } from "./function.mjs";
function fromIOK(F) {
    return (f)=>flow(f, F.fromIO);
}
function chainIOK(F, M) {
    return (f)=>{
        const g = flow(f, F.fromIO);
        return (first)=>M.chain(first, g);
    };
}
function chainFirstIOK(F, M) {
    const tapIOM = tapIO(F, M);
    return (f)=>(first)=>tapIOM(first, f);
}
function tapIO(F, M) {
    const chainFirstM = tap(M);
    return (self, f)=>chainFirstM(self, flow(f, F.fromIO));
}
export { chainFirstIOK, chainIOK, fromIOK, tapIO };
