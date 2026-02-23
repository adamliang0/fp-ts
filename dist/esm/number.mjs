const isNumber = (u)=>'number' == typeof u;
const Eq = {
    equals: (first, second)=>first === second
};
const Ord = {
    equals: Eq.equals,
    compare: (first, second)=>first < second ? -1 : first > second ? 1 : 0
};
const Bounded = {
    equals: Eq.equals,
    compare: Ord.compare,
    top: 1 / 0,
    bottom: -1 / 0
};
const Show = {
    show: (n)=>JSON.stringify(n)
};
const MagmaSub = {
    concat: (first, second)=>first - second
};
const SemigroupSum = {
    concat: (first, second)=>first + second
};
const SemigroupProduct = {
    concat: (first, second)=>first * second
};
const MonoidSum = {
    concat: SemigroupSum.concat,
    empty: 0
};
const MonoidProduct = {
    concat: SemigroupProduct.concat,
    empty: 1
};
const Field = {
    add: SemigroupSum.concat,
    zero: 0,
    mul: SemigroupProduct.concat,
    one: 1,
    sub: MagmaSub.concat,
    degree: (_)=>1,
    div: (first, second)=>first / second,
    mod: (first, second)=>first % second
};
export { Bounded, Eq, Field, MagmaSub, MonoidProduct, MonoidSum, Ord, SemigroupProduct, SemigroupSum, Show, isNumber };
