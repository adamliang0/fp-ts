import { pipe } from "./function.mjs";
import { map } from "./IO.mjs";
const random = ()=>Math.random();
function randomInt(low, high) {
    return pipe(random, map((n)=>Math.floor((high - low + 1) * n + low)));
}
function randomRange(min, max) {
    return pipe(random, map((n)=>(max - min) * n + min));
}
const randomBool = /*#__PURE__*/ pipe(random, map((n)=>n < 0.5));
const randomElem = (as)=>pipe(randomInt(0, as.length - 1), map((i)=>as[i]));
export { random, randomBool, randomElem, randomInt, randomRange };
