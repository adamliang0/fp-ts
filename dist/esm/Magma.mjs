const reverse = (M)=>({
        concat: (first, second)=>M.concat(second, first)
    });
const filterFirst = (predicate)=>(M)=>({
            concat: (first, second)=>predicate(first) ? M.concat(first, second) : second
        });
const filterSecond = (predicate)=>(M)=>({
            concat: (first, second)=>predicate(second) ? M.concat(first, second) : first
        });
const endo = (f)=>(M)=>({
            concat: (first, second)=>M.concat(f(first), f(second))
        });
const concatAll = (M)=>(startWith)=>(as)=>as.reduce((a, acc)=>M.concat(a, acc), startWith);
export { concatAll, endo, filterFirst, filterSecond, reverse };
