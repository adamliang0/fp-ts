import { getSemigroup, identity } from "./function.mjs";
import { has } from "./internal.mjs";
import { concatAll, reverse } from "./Magma.mjs";
import { max, min } from "./Ord.mjs";
const Semigroup_min = (O)=>({
        concat: min(O)
    });
const Semigroup_max = (O)=>({
        concat: max(O)
    });
const constant = (a)=>({
        concat: ()=>a
    });
const Semigroup_reverse = reverse;
const struct = (semigroups)=>({
        concat: (first, second)=>{
            const r = {};
            for(const k in semigroups)if (has.call(semigroups, k)) r[k] = semigroups[k].concat(first[k], second[k]);
            return r;
        }
    });
const tuple = (...semigroups)=>({
        concat: (first, second)=>semigroups.map((s, i)=>s.concat(first[i], second[i]))
    });
const intercalate = (middle)=>(S)=>({
            concat: (x, y)=>S.concat(x, S.concat(middle, y))
        });
const Semigroup_first = ()=>({
        concat: identity
    });
const last = ()=>({
        concat: (_, y)=>y
    });
const Semigroup_concatAll = concatAll;
const semigroupVoid = constant(void 0);
const getObjectSemigroup = ()=>({
        concat: (first, second)=>Object.assign({}, first, second)
    });
const getLastSemigroup = last;
const getFirstSemigroup = Semigroup_first;
const getTupleSemigroup = tuple;
const getStructSemigroup = struct;
const getDualSemigroup = Semigroup_reverse;
const getJoinSemigroup = Semigroup_max;
const getMeetSemigroup = Semigroup_min;
const getIntercalateSemigroup = intercalate;
function fold(S) {
    const concatAllS = Semigroup_concatAll(S);
    return (startWith, as)=>void 0 === as ? concatAllS(startWith) : concatAllS(startWith)(as);
}
const semigroupAll = {
    concat: (x, y)=>x && y
};
const semigroupAny = {
    concat: (x, y)=>x || y
};
const getFunctionSemigroup = getSemigroup;
const semigroupString = {
    concat: (x, y)=>x + y
};
const semigroupSum = {
    concat: (x, y)=>x + y
};
const semigroupProduct = {
    concat: (x, y)=>x * y
};
export { Semigroup_concatAll as concatAll, constant, Semigroup_first as first, fold, getDualSemigroup, getFirstSemigroup, getFunctionSemigroup, getIntercalateSemigroup, getJoinSemigroup, getLastSemigroup, getMeetSemigroup, getObjectSemigroup, getStructSemigroup, getTupleSemigroup, intercalate, last, Semigroup_max as max, Semigroup_min as min, Semigroup_reverse as reverse, semigroupAll, semigroupAny, semigroupProduct, semigroupString, semigroupSum, semigroupVoid, struct, tuple };
