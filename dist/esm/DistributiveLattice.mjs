import { max, min } from "./Ord.mjs";
function getMinMaxDistributiveLattice(O) {
    return {
        meet: min(O),
        join: max(O)
    };
}
export { getMinMaxDistributiveLattice };
