import { flow, identity } from "./function.mjs";
const URI = 'Endomorphism';
const getSemigroup = ()=>({
        concat: (first, second)=>flow(first, second)
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: identity
    });
export { URI, getMonoid, getSemigroup };
