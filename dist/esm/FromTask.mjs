import { tap } from "./Chain.mjs";
import { flow } from "./function.mjs";
function fromTaskK(F) {
    return (f)=>flow(f, F.fromTask);
}
function chainTaskK(F, M) {
    return (f)=>{
        const g = flow(f, F.fromTask);
        return (first)=>M.chain(first, g);
    };
}
function chainFirstTaskK(F, M) {
    const tapTaskM = tapTask(F, M);
    return (f)=>(first)=>tapTaskM(first, f);
}
function tapTask(F, M) {
    const tapM = tap(M);
    return (self, f)=>tapM(self, flow(f, F.fromTask));
}
export { chainFirstTaskK, chainTaskK, fromTaskK, tapTask };
