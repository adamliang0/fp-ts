import { tap } from "./Chain.mjs";
import { flow } from "./function.mjs";
import { ask } from "./Reader.mjs";
function FromReader_ask(F) {
    return ()=>F.fromReader(ask());
}
function asks(F) {
    return F.fromReader;
}
function fromReaderK(F) {
    return (f)=>flow(f, F.fromReader);
}
function chainReaderK(F, M) {
    const fromReaderKF = fromReaderK(F);
    return (f)=>(ma)=>M.chain(ma, fromReaderKF(f));
}
function chainFirstReaderK(F, M) {
    const tapM = tapReader(F, M);
    return (f)=>(self)=>tapM(self, f);
}
function tapReader(F, M) {
    const tapM = tap(M);
    return (self, f)=>tapM(self, flow(f, F.fromReader));
}
export { FromReader_ask as ask, asks, chainFirstReaderK, chainReaderK, fromReaderK, tapReader };
