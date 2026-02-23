import { clamp, ordNumber, reverse } from "./Ord.mjs";
const Bounded_clamp = (B)=>clamp(B)(B.bottom, B.top);
const Bounded_reverse = (B)=>{
    const R = reverse(B);
    return {
        equals: R.equals,
        compare: R.compare,
        top: B.bottom,
        bottom: B.top
    };
};
const boundedNumber = {
    equals: ordNumber.equals,
    compare: ordNumber.compare,
    top: 1 / 0,
    bottom: -1 / 0
};
export { boundedNumber, Bounded_clamp as clamp, Bounded_reverse as reverse };
