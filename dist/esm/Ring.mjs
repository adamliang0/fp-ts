import { getRing } from "./function.mjs";
const tuple = (...rings)=>({
        add: (x, y)=>rings.map((R, i)=>R.add(x[i], y[i])),
        zero: rings.map((R)=>R.zero),
        mul: (x, y)=>rings.map((R, i)=>R.mul(x[i], y[i])),
        one: rings.map((R)=>R.one),
        sub: (x, y)=>rings.map((R, i)=>R.sub(x[i], y[i]))
    });
const negate = (R)=>(a)=>R.sub(R.zero, a);
const getTupleRing = tuple;
const getFunctionRing = getRing;
export { getFunctionRing, getTupleRing, negate, tuple };
