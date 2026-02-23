import { fromEquals } from "./Eq.mjs";
import { fromOption, fromOptionK, fromPredicate } from "./FromEither.mjs";
import { identity, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { emptyReadonlyArray, head, isNonEmpty, isNone, none, some } from "./internal.mjs";
const isLeft = (fa)=>'Left' === fa._tag;
const isRight = (fa)=>'Right' === fa._tag;
function isBoth(fa) {
    return 'Both' === fa._tag;
}
function These_left(left) {
    return {
        _tag: 'Left',
        left
    };
}
function These_right(right) {
    return {
        _tag: 'Right',
        right
    };
}
function both(left, right) {
    return {
        _tag: 'Both',
        left,
        right
    };
}
const matchW = (onLeft, onRight, onBoth)=>(fa)=>{
        switch(fa._tag){
            case 'Left':
                return onLeft(fa.left);
            case 'Right':
                return onRight(fa.right);
            case 'Both':
                return onBoth(fa.left, fa.right);
        }
    };
const foldW = matchW;
const match = matchW;
const fold = match;
const swap = match(These_right, These_left, (e, a)=>both(a, e));
function getShow(SE, SA) {
    return {
        show: match((l)=>`left(${SE.show(l)})`, (a)=>`right(${SA.show(a)})`, (l, a)=>`both(${SE.show(l)}, ${SA.show(a)})`)
    };
}
function getEq(EE, EA) {
    return fromEquals((x, y)=>isLeft(x) ? isLeft(y) && EE.equals(x.left, y.left) : isRight(x) ? isRight(y) && EA.equals(x.right, y.right) : isBoth(y) && EE.equals(x.left, y.left) && EA.equals(x.right, y.right));
}
function getSemigroup(SE, SA) {
    return {
        concat: (x, y)=>isLeft(x) ? isLeft(y) ? These_left(SE.concat(x.left, y.left)) : isRight(y) ? both(x.left, y.right) : both(SE.concat(x.left, y.left), y.right) : isRight(x) ? isLeft(y) ? both(y.left, x.right) : isRight(y) ? These_right(SA.concat(x.right, y.right)) : both(y.left, SA.concat(x.right, y.right)) : isLeft(y) ? both(SE.concat(x.left, y.left), x.right) : isRight(y) ? both(x.left, SA.concat(x.right, y.right)) : both(SE.concat(x.left, y.left), SA.concat(x.right, y.right))
    };
}
const getApply = (S)=>({
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>isLeft(fab) ? isLeft(fa) ? These_left(S.concat(fab.left, fa.left)) : isRight(fa) ? These_left(fab.left) : These_left(S.concat(fab.left, fa.left)) : isRight(fab) ? isLeft(fa) ? These_left(fa.left) : isRight(fa) ? These_right(fab.right(fa.right)) : both(fa.left, fab.right(fa.right)) : isLeft(fa) ? These_left(S.concat(fab.left, fa.left)) : isRight(fa) ? both(fab.left, fab.right(fa.right)) : both(S.concat(fab.left, fa.left), fab.right(fa.right))
    });
function getApplicative(S) {
    const A = getApply(S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of
    };
}
function getChain(S) {
    const A = getApply(S);
    const chain = (ma, f)=>{
        if (isLeft(ma)) return ma;
        if (isRight(ma)) return f(ma.right);
        const fb = f(ma.right);
        return isLeft(fb) ? These_left(S.concat(ma.left, fb.left)) : isRight(fb) ? both(ma.left, fb.right) : both(S.concat(ma.left, fb.left), fb.right);
    };
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain
    };
}
function getMonad(S) {
    const C = getChain(S);
    return {
        URI,
        _E: void 0,
        map: _map,
        of,
        ap: C.ap,
        chain: C.chain,
        throwError: These_left
    };
}
function getLeft(fa) {
    return isLeft(fa) ? some(fa.left) : isRight(fa) ? none : some(fa.left);
}
function getRight(fa) {
    return isLeft(fa) ? none : isRight(fa) ? some(fa.right) : some(fa.right);
}
function leftOrBoth(e) {
    return (ma)=>isNone(ma) ? These_left(e) : both(e, ma.value);
}
function rightOrBoth(a) {
    return (me)=>isNone(me) ? These_right(a) : both(me.value, a);
}
function getLeftOnly(fa) {
    return isLeft(fa) ? some(fa.left) : none;
}
function getRightOnly(fa) {
    return isRight(fa) ? some(fa.right) : none;
}
const fromOptions = (fe, fa)=>isNone(fe) ? isNone(fa) ? none : some(These_right(fa.value)) : isNone(fa) ? some(These_left(fe.value)) : some(both(fe.value, fa.value));
const _map = (fa, f)=>pipe(fa, map(f));
const _bimap = (fa, f, g)=>pipe(fa, bimap(f, g));
const _mapLeft = (fa, f)=>pipe(fa, mapLeft(f));
const _reduce = (fa, b, f)=>pipe(fa, reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, reduceRight(b, f));
const _traverse = (F)=>{
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const bimap = (f, g)=>(fa)=>isLeft(fa) ? These_left(f(fa.left)) : isRight(fa) ? These_right(g(fa.right)) : both(f(fa.left), g(fa.right));
const mapLeft = (f)=>(fa)=>isLeft(fa) ? These_left(f(fa.left)) : isBoth(fa) ? both(f(fa.left), fa.right) : fa;
const map = (f)=>(fa)=>isLeft(fa) ? fa : isRight(fa) ? These_right(f(fa.right)) : both(fa.left, f(fa.right));
const reduce = (b, f)=>(fa)=>isLeft(fa) ? b : f(b, fa.right);
const foldMap = (M)=>(f)=>(fa)=>isLeft(fa) ? M.empty : f(fa.right);
const reduceRight = (b, f)=>(fa)=>isLeft(fa) ? b : f(fa.right, b);
const traverse = (F)=>(f)=>(ta)=>isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(f(ta.right), These_right) : F.map(f(ta.right), (b)=>both(ta.left, b));
const sequence = (F)=>(ta)=>isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(ta.right, These_right) : F.map(ta.right, (b)=>both(ta.left, b));
const of = These_right;
const URI = 'These';
const Functor = {
    URI,
    map: _map
};
const These_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const FromThese = {
    URI,
    fromThese: identity
};
const Foldable = {
    URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
const Traversable = {
    URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
const FromEither = {
    URI,
    fromEither: identity
};
const These_fromPredicate = /*#__PURE__*/ fromPredicate(FromEither);
const These_fromOption = /*#__PURE__*/ fromOption(FromEither);
const These_fromOptionK = /*#__PURE__*/ fromOptionK(FromEither);
const elem = (E)=>(a)=>(ma)=>isLeft(ma) ? false : E.equals(a, ma.right);
const exists = (predicate)=>(ma)=>isLeft(ma) ? false : predicate(ma.right);
const toTuple2 = (e, a)=>(fa)=>isLeft(fa) ? [
            fa.left,
            a()
        ] : isRight(fa) ? [
            e(),
            fa.right
        ] : [
            fa.left,
            fa.right
        ];
const toTuple = (e, a)=>toTuple2(()=>e, ()=>a);
const ApT = /*#__PURE__*/ of(emptyReadonlyArray);
const traverseReadonlyNonEmptyArrayWithIndex = (S)=>(f)=>(as)=>{
            let e = none;
            const t = f(0, head(as));
            if (isLeft(t)) return t;
            if (isBoth(t)) e = some(t.left);
            const out = [
                t.right
            ];
            for(let i = 1; i < as.length; i++){
                const t = f(i, as[i]);
                if (isLeft(t)) return t;
                if (isBoth(t)) e = isNone(e) ? some(t.left) : some(S.concat(e.value, t.left));
                out.push(t.right);
            }
            return isNone(e) ? These_right(out) : both(e.value, out);
        };
const traverseReadonlyArrayWithIndex = (S)=>(f)=>{
        const g = traverseReadonlyNonEmptyArrayWithIndex(S)(f);
        return (as)=>isNonEmpty(as) ? g(as) : ApT;
    };
const these = {
    URI,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
export { ApT, Bifunctor, Foldable, FromEither, FromThese, Functor, Pointed, Traversable, URI, bimap, both, elem, exists, These_flap as flap, fold, foldMap, foldW, These_fromOption as fromOption, These_fromOptionK as fromOptionK, fromOptions, These_fromPredicate as fromPredicate, getApplicative, getApply, getChain, getEq, getLeft, getLeftOnly, getMonad, getRight, getRightOnly, getSemigroup, getShow, isBoth, isLeft, isRight, These_left as left, leftOrBoth, map, mapLeft, match, matchW, of, reduce, reduceRight, These_right as right, rightOrBoth, sequence, swap, these, toTuple, toTuple2, traverse, traverseReadonlyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndex };
