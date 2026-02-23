const matchW = (onLessThan, onEqual, onGreaterThan)=>(o)=>-1 === o ? onLessThan() : 0 === o ? onEqual() : onGreaterThan();
const match = matchW;
const reverse = (o)=>-1 === o ? 1 : 1 === o ? -1 : 0;
const Eq = {
    equals: (x, y)=>x === y
};
const Semigroup = {
    concat: (x, y)=>0 !== x ? x : y
};
const Monoid = {
    concat: Semigroup.concat,
    empty: 0
};
const sign = (n)=>n <= -1 ? -1 : n >= 1 ? 1 : 0;
const invert = reverse;
const semigroupOrdering = Semigroup;
const eqOrdering = Eq;
const monoidOrdering = Monoid;
export { Eq, Monoid, Semigroup, eqOrdering, invert, match, matchW, monoidOrdering, reverse, semigroupOrdering, sign };
