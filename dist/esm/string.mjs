import { isNonEmpty } from "./ReadonlyNonEmptyArray.mjs";
const Eq = {
    equals: (first, second)=>first === second
};
const Semigroup = {
    concat: (first, second)=>first + second
};
const empty = '';
const Monoid = {
    concat: Semigroup.concat,
    empty
};
const Ord = {
    equals: Eq.equals,
    compare: (first, second)=>first < second ? -1 : first > second ? 1 : 0
};
const Show = {
    show: (s)=>JSON.stringify(s)
};
const isString = (u)=>'string' == typeof u;
const toUpperCase = (s)=>s.toUpperCase();
const toLowerCase = (s)=>s.toLowerCase();
const replace = (searchValue, replaceValue)=>(s)=>s.replace(searchValue, replaceValue);
const trim = (s)=>s.trim();
const trimLeft = (s)=>s.trimLeft();
const trimRight = (s)=>s.trimRight();
const slice = (start, end)=>(s)=>s.slice(start, end);
const isEmpty = (s)=>0 === s.length;
const size = (s)=>s.length;
const split = (separator)=>(s)=>{
        const out = s.split(separator);
        return isNonEmpty(out) ? out : [
            s
        ];
    };
const includes = (searchString, position)=>(s)=>s.includes(searchString, position);
const startsWith = (searchString, position)=>(s)=>s.startsWith(searchString, position);
const endsWith = (searchString, position)=>(s)=>s.endsWith(searchString, position);
export { Eq, Monoid, Ord, Semigroup, Show, empty, endsWith, includes, isEmpty, isString, replace, size, slice, split, startsWith, toLowerCase, toUpperCase, trim, trimLeft, trimRight };
