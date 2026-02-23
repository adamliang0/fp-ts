import { flow } from "./function.mjs";
function fromTheseK(F) {
    return (f)=>flow(f, F.fromThese);
}
export { fromTheseK };
