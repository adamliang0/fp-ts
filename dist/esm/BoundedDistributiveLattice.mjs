import { getMinMaxDistributiveLattice } from "./DistributiveLattice.mjs";
function getMinMaxBoundedDistributiveLattice(O) {
    const L = getMinMaxDistributiveLattice(O);
    return (min, max)=>({
            join: L.join,
            meet: L.meet,
            zero: min,
            one: max
        });
}
export { getMinMaxBoundedDistributiveLattice };
