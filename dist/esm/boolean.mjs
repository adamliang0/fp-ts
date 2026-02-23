const isBoolean = (u)=>'boolean' == typeof u;
const matchW = (onFalse, onTrue)=>(value)=>value ? onTrue() : onFalse();
const foldW = matchW;
const match = foldW;
const fold = match;
const Eq = {
    equals: (first, second)=>first === second
};
const BooleanAlgebra = {
    meet: (first, second)=>first && second,
    join: (first, second)=>first || second,
    zero: false,
    one: true,
    implies: (first, second)=>!first || second,
    not: (b)=>!b
};
const SemigroupAll = {
    concat: (first, second)=>first && second
};
const SemigroupAny = {
    concat: (first, second)=>first || second
};
const MonoidAll = {
    concat: SemigroupAll.concat,
    empty: true
};
const MonoidAny = {
    concat: SemigroupAny.concat,
    empty: false
};
const Ord = {
    equals: Eq.equals,
    compare: (first, second)=>first < second ? -1 : first > second ? 1 : 0
};
const Show = {
    show: (b)=>JSON.stringify(b)
};
export { BooleanAlgebra, Eq, MonoidAll, MonoidAny, Ord, SemigroupAll, SemigroupAny, Show, fold, foldW, isBoolean, match, matchW };
