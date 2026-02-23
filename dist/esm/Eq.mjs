import { pipe } from "./function.mjs";
const fromEquals = (equals)=>({
        equals: (x, y)=>x === y || equals(x, y)
    });
const struct = (eqs)=>fromEquals((first, second)=>{
        for(const key in eqs)if (!eqs[key].equals(first[key], second[key])) return false;
        return true;
    });
const tuple = (...eqs)=>fromEquals((first, second)=>eqs.every((E, i)=>E.equals(first[i], second[i])));
const contramap_ = (fa, f)=>pipe(fa, contramap(f));
const contramap = (f)=>(fa)=>fromEquals((x, y)=>fa.equals(f(x), f(y)));
const URI = 'Eq';
const eqStrict = {
    equals: (a, b)=>a === b
};
const empty = {
    equals: ()=>true
};
const getSemigroup = ()=>({
        concat: (x, y)=>fromEquals((a, b)=>x.equals(a, b) && y.equals(a, b))
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty
    });
const Contravariant = {
    URI,
    contramap: contramap_
};
const getTupleEq = tuple;
const getStructEq = struct;
const strictEqual = eqStrict.equals;
const eq = Contravariant;
const eqBoolean = eqStrict;
const eqString = eqStrict;
const eqNumber = eqStrict;
const eqDate = {
    equals: (first, second)=>first.valueOf() === second.valueOf()
};
export { Contravariant, URI, contramap, eq, eqBoolean, eqDate, eqNumber, eqStrict, eqString, fromEquals, getMonoid, getSemigroup, getStructEq, getTupleEq, strictEqual, struct, tuple };
