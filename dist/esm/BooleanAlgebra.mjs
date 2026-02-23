import { getBooleanAlgebra } from "./function.mjs";
const reverse = (B)=>({
        meet: (x, y)=>B.join(x, y),
        join: (x, y)=>B.meet(x, y),
        zero: B.one,
        one: B.zero,
        implies: (x, y)=>B.join(B.not(x), y),
        not: B.not
    });
const booleanAlgebraVoid = {
    meet: ()=>void 0,
    join: ()=>void 0,
    zero: void 0,
    one: void 0,
    implies: ()=>void 0,
    not: ()=>void 0
};
const getDualBooleanAlgebra = reverse;
const booleanAlgebraBoolean = {
    meet: (x, y)=>x && y,
    join: (x, y)=>x || y,
    zero: false,
    one: true,
    implies: (x, y)=>!x || y,
    not: (x)=>!x
};
const getFunctionBooleanAlgebra = getBooleanAlgebra;
export { booleanAlgebraBoolean, booleanAlgebraVoid, getDualBooleanAlgebra, getFunctionBooleanAlgebra, reverse };
