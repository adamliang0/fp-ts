import { flow } from "./function.mjs";
import { get, gets, modify, put } from "./State.mjs";
function FromState_get(F) {
    return ()=>F.fromState(get());
}
function FromState_put(F) {
    return (s)=>F.fromState(put(s));
}
function FromState_modify(F) {
    return flow(modify, F.fromState);
}
function FromState_gets(F) {
    return flow(gets, F.fromState);
}
function fromStateK(F) {
    return (f)=>flow(f, F.fromState);
}
function chainStateK(F, M) {
    const fromStateKF = fromStateK(F);
    return (f)=>(ma)=>M.chain(ma, fromStateKF(f));
}
export { chainStateK, fromStateK, FromState_get as get, FromState_gets as gets, FromState_modify as modify, FromState_put as put };
