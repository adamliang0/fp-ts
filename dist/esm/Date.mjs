import { pipe } from "./function.mjs";
import { Ord } from "./number.mjs";
import { contramap } from "./Ord.mjs";
const Eq = {
    equals: (first, second)=>first.valueOf() === second.valueOf()
};
const eqDate = {
    equals: (x, y)=>x.getDate() === y.getDate()
};
const eqMonth = {
    equals: (x, y)=>x.getMonth() === y.getMonth()
};
const eqYear = {
    equals: (x, y)=>x.getFullYear() === y.getFullYear()
};
const Date_Ord = /*#__PURE__*/ pipe(Ord, /*#__PURE__*/ contramap((date)=>date.valueOf()));
const create = ()=>new Date();
const now = ()=>new Date().getTime();
export { Eq, Date_Ord as Ord, create, eqDate, eqMonth, eqYear, now };
