import { getMonoid } from "./Endomorphism.mjs";
import { getMonoid as external_function_mjs_getMonoid } from "./function.mjs";
import { has } from "./internal.mjs";
import { concatAll, max, min, reverse, semigroupAll, semigroupAny, semigroupProduct, semigroupString, semigroupSum, semigroupVoid, struct, tuple } from "./Semigroup.mjs";
const Monoid_min = (B)=>({
        concat: min(B).concat,
        empty: B.top
    });
const Monoid_max = (B)=>({
        concat: max(B).concat,
        empty: B.bottom
    });
const Monoid_reverse = (M)=>({
        concat: reverse(M).concat,
        empty: M.empty
    });
const Monoid_struct = (monoids)=>{
    const empty = {};
    for(const k in monoids)if (has.call(monoids, k)) empty[k] = monoids[k].empty;
    return {
        concat: struct(monoids).concat,
        empty
    };
};
const Monoid_tuple = (...monoids)=>({
        concat: tuple(...monoids).concat,
        empty: monoids.map((m)=>m.empty)
    });
const Monoid_concatAll = (M)=>concatAll(M)(M.empty);
const monoidVoid = {
    concat: semigroupVoid.concat,
    empty: void 0
};
const getTupleMonoid = Monoid_tuple;
const getStructMonoid = Monoid_struct;
const getDualMonoid = Monoid_reverse;
const getJoinMonoid = Monoid_max;
const getMeetMonoid = Monoid_min;
const fold = Monoid_concatAll;
const monoidAll = {
    concat: semigroupAll.concat,
    empty: true
};
const monoidAny = {
    concat: semigroupAny.concat,
    empty: false
};
const getFunctionMonoid = external_function_mjs_getMonoid;
const getEndomorphismMonoid = ()=>Monoid_reverse(getMonoid());
const monoidString = {
    concat: semigroupString.concat,
    empty: ''
};
const monoidSum = {
    concat: semigroupSum.concat,
    empty: 0
};
const monoidProduct = {
    concat: semigroupProduct.concat,
    empty: 1
};
export { Monoid_concatAll as concatAll, fold, getDualMonoid, getEndomorphismMonoid, getFunctionMonoid, getJoinMonoid, getMeetMonoid, getStructMonoid, getTupleMonoid, Monoid_max as max, Monoid_min as min, monoidAll, monoidAny, monoidProduct, monoidString, monoidSum, monoidVoid, Monoid_reverse as reverse, Monoid_struct as struct, Monoid_tuple as tuple };
