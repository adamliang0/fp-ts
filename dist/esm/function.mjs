const getBooleanAlgebra = (B)=>()=>({
            meet: (x, y)=>(a)=>B.meet(x(a), y(a)),
            join: (x, y)=>(a)=>B.join(x(a), y(a)),
            zero: ()=>B.zero,
            one: ()=>B.one,
            implies: (x, y)=>(a)=>B.implies(x(a), y(a)),
            not: (x)=>(a)=>B.not(x(a))
        });
const getSemigroup = (S)=>()=>({
            concat: (f, g)=>(a)=>S.concat(f(a), g(a))
        });
const getMonoid = (M)=>{
    const getSemigroupM = getSemigroup(M);
    return ()=>({
            concat: getSemigroupM().concat,
            empty: ()=>M.empty
        });
};
const getSemiring = (S)=>({
        add: (f, g)=>(x)=>S.add(f(x), g(x)),
        zero: ()=>S.zero,
        mul: (f, g)=>(x)=>S.mul(f(x), g(x)),
        one: ()=>S.one
    });
const getRing = (R)=>{
    const S = getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: (f, g)=>(x)=>R.sub(f(x), g(x))
    };
};
const apply = (a)=>(f)=>f(a);
function identity(a) {
    return a;
}
const unsafeCoerce = identity;
function constant(a) {
    return ()=>a;
}
const constTrue = /*#__PURE__*/ constant(true);
const constFalse = /*#__PURE__*/ constant(false);
const constNull = /*#__PURE__*/ constant(null);
const constUndefined = /*#__PURE__*/ constant(void 0);
const constVoid = constUndefined;
function flip(f) {
    return (...args)=>{
        if (args.length > 1) return f(args[1], args[0]);
        return (a)=>f(a)(args[0]);
    };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch(arguments.length){
        case 1:
            return ab;
        case 2:
            return function() {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function() {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function() {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function() {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function() {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function() {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function() {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function() {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
}
function tuple(...t) {
    return t;
}
function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
function tupled(f) {
    return (a)=>f(...a);
}
function untupled(f) {
    return (...a)=>f(a);
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch(arguments.length){
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default:
            {
                let ret = arguments[0];
                for(let i = 1; i < arguments.length; i++)ret = arguments[i](ret);
                return ret;
            }
    }
}
const hole = absurd;
const SK = (_, b)=>b;
function not(predicate) {
    return (a)=>!predicate(a);
}
const getEndomorphismMonoid = ()=>({
        concat: (first, second)=>flow(first, second),
        empty: identity
    });
const dual = (arity, body)=>{
    const isDataFirst = 'number' == typeof arity ? (args)=>args.length >= arity : arity;
    return function() {
        const args = Array.from(arguments);
        if (isDataFirst(arguments)) return body.apply(this, args);
        return (self)=>body(self, ...args);
    };
};
export { SK, absurd, apply, constFalse, constNull, constTrue, constUndefined, constVoid, constant, decrement, dual, flip, flow, getBooleanAlgebra, getEndomorphismMonoid, getMonoid, getRing, getSemigroup, getSemiring, hole, identity, increment, not, pipe, tuple, tupled, unsafeCoerce, untupled };
