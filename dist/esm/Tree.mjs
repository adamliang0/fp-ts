import { apFirst, apS, apSecond } from "./Apply.mjs";
import { getEq, getMonoid, isEmpty, traverse } from "./Array.mjs";
import { bind, chainFirst } from "./Chain.mjs";
import { fromEquals } from "./Eq.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyRecord } from "./internal.mjs";
function make(value, forest = []) {
    return {
        value,
        forest
    };
}
function getShow(S) {
    const show = (t)=>isEmpty(t.forest) ? `make(${S.show(t.value)})` : `make(${S.show(t.value)}, [${t.forest.map(show).join(', ')}])`;
    return {
        show
    };
}
function Tree_getEq(E) {
    let SA;
    const R = fromEquals((x, y)=>E.equals(x.value, y.value) && SA.equals(x.forest, y.forest));
    SA = getEq(R);
    return R;
}
const draw = (indentation, forest)=>{
    let r = '';
    const len = forest.length;
    let tree;
    for(let i = 0; i < len; i++){
        tree = forest[i];
        const isLast = i === len - 1;
        r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value;
        r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest);
    }
    return r;
};
function drawForest(forest) {
    return draw('\n', forest);
}
function drawTree(tree) {
    return tree.value + drawForest(tree.forest);
}
function unfoldTree(b, f) {
    const [a, bs] = f(b);
    return {
        value: a,
        forest: unfoldForest(bs, f)
    };
}
function unfoldForest(bs, f) {
    return bs.map((b)=>unfoldTree(b, f));
}
function unfoldTreeM(M) {
    const unfoldForestMM = unfoldForestM(M);
    return (b, f)=>M.chain(f(b), ([a, bs])=>M.map(unfoldForestMM(bs, f), (ts)=>({
                    value: a,
                    forest: ts
                })));
}
function unfoldForestM(M) {
    const traverseM = traverse(M);
    return (bs, f)=>pipe(bs, traverseM((b)=>unfoldTreeM(M)(b, f)));
}
function fold(f) {
    const go = (tree)=>f(tree.value, tree.forest.map(go));
    return go;
}
const _map = (fa, f)=>pipe(fa, map(f));
const _ap = (fab, fa)=>flatMap(fab, (f)=>pipe(fa, map(f)));
const _reduce = (fa, b, f)=>pipe(fa, reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, reduceRight(b, f));
const _extend = (wa, f)=>pipe(wa, extend(f));
const _traverse = (F)=>{
    const traverseF = Tree_traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
};
const ap = (fa)=>(fab)=>_ap(fab, fa);
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>{
    const { value, forest } = f(ma.value);
    const concat = getMonoid().concat;
    return {
        value,
        forest: concat(forest, ma.forest.map(flatMap(f)))
    };
});
const extend = (f)=>(wa)=>({
            value: f(wa),
            forest: wa.forest.map(extend(f))
        });
const duplicate = /*#__PURE__*/ extend(identity);
const flatten = /*#__PURE__*/ flatMap(identity);
const map = (f)=>(fa)=>({
            value: f(fa.value),
            forest: fa.forest.map(map(f))
        });
const reduce = (b, f)=>(fa)=>{
        let r = f(b, fa.value);
        const len = fa.forest.length;
        for(let i = 0; i < len; i++)r = pipe(fa.forest[i], reduce(r, f));
        return r;
    };
const foldMap = (M)=>(f)=>reduce(M.empty, (acc, a)=>M.concat(acc, f(a)));
const reduceRight = (b, f)=>(fa)=>{
        let r = b;
        const len = fa.forest.length;
        for(let i = len - 1; i >= 0; i--)r = pipe(fa.forest[i], reduceRight(r, f));
        return f(fa.value, r);
    };
const extract = (wa)=>wa.value;
const Tree_traverse = (F)=>{
    const traverseF = traverse(F);
    const out = (f)=>(ta)=>F.ap(F.map(f(ta.value), (value)=>(forest)=>({
                        value,
                        forest
                    })), pipe(ta.forest, traverseF(out(f))));
    return out;
};
const sequence = (F)=>Tree_traverse(F)(identity);
const of = (a)=>make(a);
const URI = 'Tree';
const Functor = {
    URI,
    map: _map
};
const Tree_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const Apply = {
    URI,
    map: _map,
    ap: _ap
};
const Tree_apFirst = /*#__PURE__*/ apFirst(Apply);
const Tree_apSecond = /*#__PURE__*/ apSecond(Apply);
const Applicative = {
    URI,
    map: _map,
    ap: _ap,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    ap: _ap,
    of,
    chain: flatMap
};
const Tree_chainFirst = /*#__PURE__*/ chainFirst(Chain);
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
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
};
const Do = /*#__PURE__*/ of(emptyRecord);
const Tree_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Tree_bind = /*#__PURE__*/ bind(Chain);
const Tree_apS = /*#__PURE__*/ apS(Apply);
function elem(E) {
    const go = (a, fa)=>E.equals(a, fa.value) || fa.forest.some((tree)=>go(a, tree));
    return go;
}
const exists = (predicate)=>(ma)=>predicate(ma.value) || ma.forest.some(exists(predicate));
const chain = flatMap;
const Tree_tree = {
    URI,
    map: _map,
    of,
    ap: _ap,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence,
    extract,
    extend: _extend
};
export { Applicative, Apply, Chain, Comonad, Do, Foldable, Functor, Monad, Pointed, Traversable, URI, ap, Tree_apFirst as apFirst, Tree_apS as apS, Tree_apSecond as apSecond, Tree_bind as bind, Tree_bindTo as bindTo, chain, Tree_chainFirst as chainFirst, drawForest, drawTree, duplicate, elem, exists, extend, extract, Tree_flap as flap, flatMap, flatten, fold, foldMap, Tree_getEq as getEq, getShow, let_ as let, make, map, of, reduce, reduceRight, sequence, Tree_traverse as traverse, Tree_tree as tree, unfoldForest, unfoldForestM, unfoldTree, unfoldTreeM };
