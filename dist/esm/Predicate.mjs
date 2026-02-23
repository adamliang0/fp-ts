import { constFalse, constTrue, flow, pipe } from "./function.mjs";
const contramap_ = (predicate, f)=>pipe(predicate, contramap(f));
const contramap = (f)=>(predicate)=>flow(f, predicate);
const URI = 'Predicate';
const getSemigroupAny = ()=>({
        concat: (first, second)=>pipe(first, or(second))
    });
const getMonoidAny = ()=>({
        concat: getSemigroupAny().concat,
        empty: constFalse
    });
const getSemigroupAll = ()=>({
        concat: (first, second)=>pipe(first, and(second))
    });
const getMonoidAll = ()=>({
        concat: getSemigroupAll().concat,
        empty: constTrue
    });
const Contravariant = {
    URI,
    contramap: contramap_
};
const not = (predicate)=>(a)=>!predicate(a);
const or = (second)=>(first)=>(a)=>first(a) || second(a);
const and = (second)=>(first)=>(a)=>first(a) && second(a);
export { Contravariant, URI, and, contramap, getMonoidAll, getMonoidAny, getSemigroupAll, getSemigroupAny, not, or };
