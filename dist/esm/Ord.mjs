import { eqStrict } from "./Eq.mjs";
import { constTrue, constant, pipe } from "./function.mjs";
const equalsDefault = (compare)=>(first, second)=>first === second || 0 === compare(first, second);
const fromCompare = (compare)=>({
        equals: equalsDefault(compare),
        compare: (first, second)=>first === second ? 0 : compare(first, second)
    });
const tuple = (...ords)=>fromCompare((first, second)=>{
        let i = 0;
        for(; i < ords.length - 1; i++){
            const r = ords[i].compare(first[i], second[i]);
            if (0 !== r) return r;
        }
        return ords[i].compare(first[i], second[i]);
    });
const reverse = (O)=>fromCompare((first, second)=>O.compare(second, first));
const contramap_ = (fa, f)=>pipe(fa, contramap(f));
const contramap = (f)=>(fa)=>fromCompare((first, second)=>fa.compare(f(first), f(second)));
const URI = 'Ord';
const getSemigroup = ()=>({
        concat: (first, second)=>fromCompare((a, b)=>{
                const ox = first.compare(a, b);
                return 0 !== ox ? ox : second.compare(a, b);
            })
    });
const getMonoid = ()=>({
        concat: getSemigroup().concat,
        empty: fromCompare(()=>0)
    });
const Contravariant = {
    URI,
    contramap: contramap_
};
const trivial = {
    equals: constTrue,
    compare: /*#__PURE__*/ constant(0)
};
const equals = (O)=>(second)=>(first)=>first === second || 0 === O.compare(first, second);
const lt = (O)=>(first, second)=>-1 === O.compare(first, second);
const gt = (O)=>(first, second)=>1 === O.compare(first, second);
const leq = (O)=>(first, second)=>1 !== O.compare(first, second);
const geq = (O)=>(first, second)=>-1 !== O.compare(first, second);
const min = (O)=>(first, second)=>first === second || O.compare(first, second) < 1 ? first : second;
const max = (O)=>(first, second)=>first === second || O.compare(first, second) > -1 ? first : second;
const clamp = (O)=>{
    const minO = min(O);
    const maxO = max(O);
    return (low, hi)=>(a)=>maxO(minO(a, hi), low);
};
const between = (O)=>{
    const ltO = lt(O);
    const gtO = gt(O);
    return (low, hi)=>(a)=>!(ltO(a, low) || gtO(a, hi));
};
const getTupleOrd = tuple;
const getDualOrd = reverse;
const ord = Contravariant;
function Ord_compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
const strictOrd = {
    equals: eqStrict.equals,
    compare: Ord_compare
};
const ordBoolean = strictOrd;
const ordString = strictOrd;
const ordNumber = strictOrd;
const ordDate = /*#__PURE__*/ pipe(ordNumber, /*#__PURE__*/ contramap((date)=>date.valueOf()));
export { Contravariant, URI, between, clamp, contramap, equals, equalsDefault, fromCompare, geq, getDualOrd, getMonoid, getSemigroup, getTupleOrd, gt, leq, lt, max, min, ord, ordBoolean, ordDate, ordNumber, ordString, reverse, trivial, tuple };
