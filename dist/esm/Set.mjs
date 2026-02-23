import { identity } from "./function.mjs";
import { elem, every, foldMap, getEq, getShow, isSubset, reduce, reduceRight, some } from "./ReadonlySet.mjs";
import { separated } from "./Separated.mjs";
const Set_getShow = getShow;
const Set_getEq = getEq;
function map(E) {
    const elemE = Set_elem(E);
    return (f)=>(set)=>{
            const r = new Set();
            set.forEach((e)=>{
                const v = f(e);
                if (!elemE(v, r)) r.add(v);
            });
            return r;
        };
}
function chain(E) {
    const elemE = Set_elem(E);
    return (f)=>(set)=>{
            const r = new Set();
            set.forEach((e)=>{
                f(e).forEach((e)=>{
                    if (!elemE(e, r)) r.add(e);
                });
            });
            return r;
        };
}
function filter(predicate) {
    return (set)=>{
        const values = set.values();
        let e;
        const r = new Set();
        while(!(e = values.next()).done){
            const a = e.value;
            if (predicate(a)) r.add(a);
        }
        return r;
    };
}
function partition(predicate) {
    return (set)=>{
        const values = set.values();
        let e;
        const right = new Set();
        const left = new Set();
        while(!(e = values.next()).done){
            const a = e.value;
            if (predicate(a)) right.add(a);
            else left.add(a);
        }
        return separated(left, right);
    };
}
function union(E) {
    const elemE = Set_elem(E);
    return (me, that)=>{
        if (void 0 === that) {
            const unionE = union(E);
            return (that)=>unionE(me, that);
        }
        if (isEmpty(me)) return that;
        if (isEmpty(that)) return me;
        const r = new Set(me);
        that.forEach((e)=>{
            if (!elemE(e, r)) r.add(e);
        });
        return r;
    };
}
function intersection(E) {
    const elemE = Set_elem(E);
    return (me, that)=>{
        if (void 0 === that) {
            const intersectionE = intersection(E);
            return (that)=>intersectionE(that, me);
        }
        if (isEmpty(me) || isEmpty(that)) return new Set();
        const r = new Set();
        me.forEach((e)=>{
            if (elemE(e, that)) r.add(e);
        });
        return r;
    };
}
function partitionMap(EB, EC) {
    return (f)=>(set)=>{
            const values = set.values();
            let e;
            const left = new Set();
            const right = new Set();
            const hasB = Set_elem(EB);
            const hasC = Set_elem(EC);
            while(!(e = values.next()).done){
                const v = f(e.value);
                switch(v._tag){
                    case 'Left':
                        if (!hasB(v.left, left)) left.add(v.left);
                        break;
                    case 'Right':
                        if (!hasC(v.right, right)) right.add(v.right);
                        break;
                }
            }
            return separated(left, right);
        };
}
function difference(E) {
    const elemE = Set_elem(E);
    return (me, that)=>{
        if (void 0 === that) {
            const differenceE = difference(E);
            return (that)=>differenceE(that, me);
        }
        return filter((a)=>!elemE(a, that))(me);
    };
}
const getUnionSemigroup = (E)=>({
        concat: union(E)
    });
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty: new Set()
    });
const getIntersectionSemigroup = (E)=>({
        concat: intersection(E)
    });
const getDifferenceMagma = (E)=>({
        concat: difference(E)
    });
const Set_reduce = reduce;
const Set_foldMap = foldMap;
const Set_reduceRight = reduceRight;
const singleton = (a)=>new Set([
        a
    ]);
function insert(E) {
    const elemE = Set_elem(E);
    return (a)=>(set)=>{
            if (elemE(a)(set)) return set;
            {
                const r = new Set(set);
                r.add(a);
                return r;
            }
        };
}
const remove = (E)=>(a)=>(set)=>filter((ax)=>!E.equals(a, ax))(set);
const toggle = (E)=>{
    const elemE = Set_elem(E);
    const removeE = remove(E);
    const insertE = insert(E);
    return (a)=>(set)=>(elemE(a, set) ? removeE : insertE)(a)(set);
};
const fromArray = (E)=>(as)=>{
        const len = as.length;
        const out = new Set();
        const has = Set_elem(E);
        for(let i = 0; i < len; i++){
            const a = as[i];
            if (!has(a, out)) out.add(a);
        }
        return out;
    };
const compact = (E)=>filterMap(E)(identity);
function separate(EE, EA) {
    return (fa)=>{
        const elemEE = Set_elem(EE);
        const elemEA = Set_elem(EA);
        const left = new Set();
        const right = new Set();
        fa.forEach((e)=>{
            switch(e._tag){
                case 'Left':
                    if (!elemEE(e.left, left)) left.add(e.left);
                    break;
                case 'Right':
                    if (!elemEA(e.right, right)) right.add(e.right);
                    break;
            }
        });
        return separated(left, right);
    };
}
function filterMap(E) {
    const elemE = Set_elem(E);
    return (f)=>(fa)=>{
            const r = new Set();
            fa.forEach((a)=>{
                const ob = f(a);
                if ('Some' === ob._tag && !elemE(ob.value, r)) r.add(ob.value);
            });
            return r;
        };
}
const empty = new Set();
const isEmpty = (set)=>0 === set.size;
const size = (set)=>set.size;
const Set_some = some;
const Set_every = every;
const Set_isSubset = isSubset;
const Set_elem = elem;
const toArray = (O)=>(set)=>{
        const out = [];
        set.forEach((e)=>out.push(e));
        return out.sort(O.compare);
    };
const subset = isSubset;
export { chain, compact, difference, Set_elem as elem, empty, Set_every as every, filter, filterMap, Set_foldMap as foldMap, fromArray, getDifferenceMagma, Set_getEq as getEq, getIntersectionSemigroup, Set_getShow as getShow, getUnionMonoid, getUnionSemigroup, insert, intersection, isEmpty, Set_isSubset as isSubset, map, partition, partitionMap, Set_reduce as reduce, Set_reduceRight as reduceRight, remove, separate, singleton, size, Set_some as some, subset, toArray, toggle, union };
