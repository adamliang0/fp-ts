import { fromEquals } from "./Eq.mjs";
import { identity } from "./function.mjs";
import { not } from "./Predicate.mjs";
import { separated } from "./Separated.mjs";
const fromSet = (s)=>new Set(s);
const singleton = (a)=>new Set([
        a
    ]);
const fromReadonlyArray = (E)=>(as)=>{
        const len = as.length;
        const out = new Set();
        const has = elem(E);
        for(let i = 0; i < len; i++){
            const a = as[i];
            if (!has(a, out)) out.add(a);
        }
        return out;
    };
function toSet(s) {
    return new Set(s);
}
function map(E) {
    const elemE = elem(E);
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
    const elemE = elem(E);
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
    const elemE = elem(E);
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
    const elemE = elem(E);
    return (me, that)=>{
        if (void 0 === that) {
            const intersectionE = intersection(E);
            return (that)=>intersectionE(that, me);
        }
        if (isEmpty(me) || isEmpty(that)) return empty;
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
            const hasB = elem(EB);
            const hasC = elem(EC);
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
    const elemE = elem(E);
    return (me, that)=>{
        if (void 0 === that) {
            const differenceE = difference(E);
            return (that)=>differenceE(that, me);
        }
        return filter((a)=>!elemE(a, that))(me);
    };
}
function reduce(O) {
    const toReadonlyArrayO = toReadonlyArray(O);
    return (b, f)=>(fa)=>toReadonlyArrayO(fa).reduce(f, b);
}
function foldMap(O, M) {
    const toReadonlyArrayO = toReadonlyArray(O);
    return (f)=>(fa)=>toReadonlyArrayO(fa).reduce((b, a)=>M.concat(b, f(a)), M.empty);
}
const reduceRight = (O)=>{
    const toReadonlyArrayO = toReadonlyArray(O);
    return (b, f)=>(fa)=>toReadonlyArrayO(fa).reduceRight((b, a)=>f(a, b), b);
};
function insert(E) {
    const elemE = elem(E);
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
    const elemE = elem(E);
    const removeE = remove(E);
    const insertE = insert(E);
    return (a)=>(set)=>(elemE(a, set) ? removeE : insertE)(a)(set);
};
const compact = (E)=>filterMap(E)(identity);
function separate(EE, EA) {
    return (fa)=>{
        const elemEE = elem(EE);
        const elemEA = elem(EA);
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
    const elemE = elem(E);
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
const some = (predicate)=>(set)=>{
        const values = set.values();
        let e;
        let found = false;
        while(!found && !(e = values.next()).done)found = predicate(e.value);
        return found;
    };
function every(predicate) {
    return not(some(not(predicate)));
}
function isSubset(E) {
    const elemE = elem(E);
    return (me, that)=>{
        if (void 0 === that) {
            const isSubsetE = isSubset(E);
            return (that)=>isSubsetE(that, me);
        }
        return every((a)=>elemE(a, that))(me);
    };
}
function elem(E) {
    return (a, set)=>{
        if (void 0 === set) {
            const elemE = elem(E);
            return (set)=>elemE(a, set);
        }
        const values = set.values();
        let e;
        let found = false;
        while(!found && !(e = values.next()).done)found = E.equals(a, e.value);
        return found;
    };
}
const toReadonlyArray = (O)=>(set)=>{
        const out = [];
        set.forEach((e)=>out.push(e));
        return out.sort(O.compare);
    };
const URI = 'ReadonlySet';
function getShow(S) {
    return {
        show: (s)=>{
            const entries = [];
            s.forEach((a)=>{
                entries.push(S.show(a));
            });
            return `new Set([${entries.sort().join(', ')}])`;
        }
    };
}
function getEq(E) {
    const subsetE = isSubset(E);
    return fromEquals((x, y)=>subsetE(x, y) && subsetE(y, x));
}
const getUnionSemigroup = (E)=>({
        concat: union(E)
    });
const getUnionMonoid = (E)=>({
        concat: getUnionSemigroup(E).concat,
        empty
    });
const getIntersectionSemigroup = (E)=>({
        concat: intersection(E)
    });
const getDifferenceMagma = (E)=>({
        concat: difference(E)
    });
const fromArray = fromReadonlyArray;
export { URI, chain, compact, difference, elem, empty, every, filter, filterMap, foldMap, fromArray, fromReadonlyArray, fromSet, getDifferenceMagma, getEq, getIntersectionSemigroup, getShow, getUnionMonoid, getUnionSemigroup, insert, intersection, isEmpty, isSubset, map, partition, partitionMap, reduce, reduceRight, remove, separate, singleton, size, some, toReadonlyArray, toSet, toggle, union };
