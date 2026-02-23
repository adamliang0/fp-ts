import { identity, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
function fst(ea) {
    return ea[0];
}
function snd(ea) {
    return ea[1];
}
const swap = (ea)=>[
        snd(ea),
        fst(ea)
    ];
function getApply(S) {
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>[
                fst(fab)(fst(fa)),
                S.concat(snd(fab), snd(fa))
            ]
    };
}
const of = (M)=>(a)=>[
            a,
            M.empty
        ];
function getApplicative(M) {
    const A = getApply(M);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: of(M)
    };
}
function getChain(S) {
    const A = getApply(S);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: (ma, f)=>{
            const [b, s] = f(fst(ma));
            return [
                b,
                S.concat(snd(ma), s)
            ];
        }
    };
}
function getMonad(M) {
    const C = getChain(M);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
function getChainRec(M) {
    const chainRec = (a, f)=>{
        let result = f(a);
        let acc = M.empty;
        let s = fst(result);
        while('Left' === s._tag){
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [
            s.right,
            M.concat(acc, snd(result))
        ];
    };
    const C = getChain(M);
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: C.ap,
        chain: C.chain,
        chainRec
    };
}
const _compose = (bc, ab)=>pipe(bc, compose(ab));
const _map = (fa, f)=>pipe(fa, mapFst(f));
const _bimap = (fa, f, g)=>pipe(fa, bimap(f, g));
const _mapLeft = (fa, f)=>pipe(fa, mapSnd(f));
const _extend = (wa, f)=>pipe(wa, extend(f));
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
const bimap = (f, g)=>(fa)=>[
            g(fst(fa)),
            f(snd(fa))
        ];
const mapFst = (f)=>(fa)=>[
            f(fst(fa)),
            snd(fa)
        ];
const mapSnd = (f)=>(fa)=>[
            fst(fa),
            f(snd(fa))
        ];
const compose = (ab)=>(bc)=>[
            fst(bc),
            snd(ab)
        ];
const extend = (f)=>(wa)=>[
            f(wa),
            snd(wa)
        ];
const extract = fst;
const duplicate = /*#__PURE__*/ extend(identity);
const reduce = (b, f)=>(fa)=>f(b, fst(fa));
const foldMap = ()=>(f)=>(fa)=>f(fst(fa));
const reduceRight = (b, f)=>(fa)=>f(fst(fa), b);
const traverse = (F)=>(f)=>(ta)=>F.map(f(fst(ta)), (b)=>[
                    b,
                    snd(ta)
                ]);
const sequence = (F)=>(fas)=>F.map(fst(fas), (a)=>[
                a,
                snd(fas)
            ]);
const URI = 'ReadonlyTuple';
const Functor = {
    URI,
    map: _map
};
const ReadonlyTuple_flap = /*#__PURE__*/ flap(Functor);
const map = mapFst;
const mapLeft = mapSnd;
const Bifunctor = {
    URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
const Semigroupoid = {
    URI,
    compose: _compose
};
const Comonad = {
    URI,
    map: _map,
    extend: _extend,
    extract
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
const readonlyTuple = {
    URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
export { Bifunctor, Comonad, Foldable, Functor, Semigroupoid, Traversable, URI, bimap, compose, duplicate, extend, extract, ReadonlyTuple_flap as flap, foldMap, fst, getApplicative, getApply, getChain, getChainRec, getMonad, map, mapFst, mapLeft, mapSnd, readonlyTuple, reduce, reduceRight, sequence, snd, swap, traverse };
