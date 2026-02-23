import { identity, pipe } from "./function.mjs";
import { flap } from "./Functor.mjs";
import { extract, foldMap, fst, reduce, reduceRight, snd } from "./ReadonlyTuple.mjs";
const Tuple_fst = fst;
const Tuple_snd = snd;
const swap = (ea)=>[
        Tuple_snd(ea),
        Tuple_fst(ea)
    ];
function getApply(S) {
    return {
        URI,
        _E: void 0,
        map: _map,
        ap: (fab, fa)=>[
                Tuple_fst(fab)(Tuple_fst(fa)),
                S.concat(Tuple_snd(fab), Tuple_snd(fa))
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
        map: A.map,
        ap: A.ap,
        of: of(M)
    };
}
function getChain(S) {
    const A = getApply(S);
    return {
        URI,
        _E: void 0,
        map: A.map,
        ap: A.ap,
        chain: (ma, f)=>{
            const [b, s] = f(Tuple_fst(ma));
            return [
                b,
                S.concat(Tuple_snd(ma), s)
            ];
        }
    };
}
function getMonad(M) {
    const C = getChain(M);
    return {
        URI,
        _E: void 0,
        map: C.map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
function getChainRec(M) {
    const chainRec = (a, f)=>{
        let result = f(a);
        let acc = M.empty;
        let s = Tuple_fst(result);
        while('Left' === s._tag){
            acc = M.concat(acc, Tuple_snd(result));
            result = f(s.left);
            s = Tuple_fst(result);
        }
        return [
            s.right,
            M.concat(acc, Tuple_snd(result))
        ];
    };
    const C = getChain(M);
    return {
        URI,
        _E: void 0,
        map: C.map,
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
const _reduce = (fa, b, f)=>pipe(fa, Tuple_reduce(b, f));
const _foldMap = (M)=>{
    const foldMapM = Tuple_foldMap(M);
    return (fa, f)=>pipe(fa, foldMapM(f));
};
const _reduceRight = (fa, b, f)=>pipe(fa, Tuple_reduceRight(b, f));
function _traverse(F) {
    const traverseF = traverse(F);
    return (ta, f)=>pipe(ta, traverseF(f));
}
const bimap = (f, g)=>(fa)=>[
            g(Tuple_fst(fa)),
            f(Tuple_snd(fa))
        ];
const mapFst = (f)=>(fa)=>[
            f(Tuple_fst(fa)),
            Tuple_snd(fa)
        ];
const mapSnd = (f)=>(fa)=>[
            Tuple_fst(fa),
            f(Tuple_snd(fa))
        ];
const compose = (ab)=>(bc)=>[
            Tuple_fst(bc),
            Tuple_snd(ab)
        ];
const extend = (f)=>(wa)=>[
            f(wa),
            Tuple_snd(wa)
        ];
const duplicate = /*#__PURE__*/ extend(identity);
const Tuple_extract = extract;
const Tuple_foldMap = foldMap;
const Tuple_reduce = reduce;
const Tuple_reduceRight = reduceRight;
const traverse = (F)=>(f)=>(ta)=>F.map(f(Tuple_fst(ta)), (b)=>[
                    b,
                    Tuple_snd(ta)
                ]);
const sequence = (F)=>(fas)=>F.map(Tuple_fst(fas), (a)=>[
                a,
                Tuple_snd(fas)
            ]);
const URI = 'Tuple';
const Functor = {
    URI,
    map: _map
};
const Tuple_flap = /*#__PURE__*/ flap(Functor);
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
    extract: Tuple_extract
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
const map = mapFst;
const mapLeft = mapSnd;
const tuple = {
    URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract: Tuple_extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence
};
export { Bifunctor, Comonad, Foldable, Functor, Semigroupoid, Traversable, URI, bimap, compose, duplicate, extend, Tuple_extract as extract, Tuple_flap as flap, Tuple_foldMap as foldMap, Tuple_fst as fst, getApplicative, getApply, getChain, getChainRec, getMonad, map, mapFst, mapLeft, mapSnd, Tuple_reduce as reduce, Tuple_reduceRight as reduceRight, sequence, Tuple_snd as snd, swap, traverse, tuple };
