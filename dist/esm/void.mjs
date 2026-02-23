import { constant } from "./Semigroup.mjs";
const Semigroup = constant(void 0);
const Monoid = {
    concat: Semigroup.concat,
    empty: void 0
};
export { Monoid, Semigroup };
