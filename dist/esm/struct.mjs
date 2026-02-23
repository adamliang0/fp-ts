import { has } from "./internal.mjs";
const getAssignSemigroup = ()=>({
        concat: (first, second)=>Object.assign({}, first, second)
    });
const evolve = (transformations)=>(a)=>{
        const out = {};
        for(const k in a)if (has.call(a, k)) out[k] = transformations[k](a[k]);
        return out;
    };
export { evolve, getAssignSemigroup };
