import { apFirst, apSecond } from "./Apply.mjs";
import { chainFirst } from "./Chain.mjs";
import { identity, pipe } from "./function.mjs";
function map(F) {
    return (f)=>(fa)=>F.map(fa, f);
}
function contramap(F) {
    return (f)=>(fa)=>F.contramap(fa, f);
}
function mapWithIndex(F) {
    return (f)=>(fa)=>F.mapWithIndex(fa, f);
}
function ap(F) {
    return (fa)=>(fab)=>F.ap(fab, fa);
}
function chain(F) {
    return (f)=>(fa)=>F.chain(fa, f);
}
function bimap(F) {
    return (f, g)=>(fea)=>F.bimap(fea, f, g);
}
function mapLeft(F) {
    return (f)=>(fea)=>F.mapLeft(fea, f);
}
function extend(F) {
    return (f)=>(wa)=>F.extend(wa, f);
}
function reduce(F) {
    return (b, f)=>(fa)=>F.reduce(fa, b, f);
}
function foldMap(F) {
    return (M)=>{
        const foldMapM = F.foldMap(M);
        return (f)=>(fa)=>foldMapM(fa, f);
    };
}
function reduceRight(F) {
    return (b, f)=>(fa)=>F.reduceRight(fa, b, f);
}
function reduceWithIndex(F) {
    return (b, f)=>(fa)=>F.reduceWithIndex(fa, b, f);
}
function foldMapWithIndex(F) {
    return (M)=>{
        const foldMapWithIndexM = F.foldMapWithIndex(M);
        return (f)=>(fa)=>foldMapWithIndexM(fa, f);
    };
}
function reduceRightWithIndex(F) {
    return (b, f)=>(fa)=>F.reduceRightWithIndex(fa, b, f);
}
function alt(F) {
    return (that)=>(fa)=>F.alt(fa, that);
}
function filter(F) {
    return (predicate)=>(fa)=>F.filter(fa, predicate);
}
function filterMap(F) {
    return (f)=>(fa)=>F.filterMap(fa, f);
}
function partition(F) {
    return (f)=>(fa)=>F.partition(fa, f);
}
function partitionMap(F) {
    return (f)=>(fa)=>F.partitionMap(fa, f);
}
function filterWithIndex(F) {
    return (predicate)=>(fa)=>F.filterWithIndex(fa, predicate);
}
function filterMapWithIndex(F) {
    return (f)=>(fa)=>F.filterMapWithIndex(fa, f);
}
function partitionWithIndex(F) {
    return (f)=>(fa)=>F.partitionWithIndex(fa, f);
}
function partitionMapWithIndex(F) {
    return (f)=>(fa)=>F.partitionMapWithIndex(fa, f);
}
function promap(F) {
    return (f, g)=>(fbc)=>F.promap(fbc, f, g);
}
function compose(F) {
    return (ea)=>(ab)=>F.compose(ab, ea);
}
const isFunctor = (I)=>'function' == typeof I.map;
const isContravariant = (I)=>'function' == typeof I.contramap;
const isFunctorWithIndex = (I)=>'function' == typeof I.mapWithIndex;
const isApply = (I)=>'function' == typeof I.ap;
const isChain = (I)=>'function' == typeof I.chain;
const isBifunctor = (I)=>'function' == typeof I.bimap;
const isExtend = (I)=>'function' == typeof I.extend;
const isFoldable = (I)=>'function' == typeof I.reduce;
const isFoldableWithIndex = (I)=>'function' == typeof I.reduceWithIndex;
const isAlt = (I)=>'function' == typeof I.alt;
const isCompactable = (I)=>'function' == typeof I.compact;
const isFilterable = (I)=>'function' == typeof I.filter;
const isFilterableWithIndex = (I)=>'function' == typeof I.filterWithIndex;
const isProfunctor = (I)=>'function' == typeof I.promap;
const isSemigroupoid = (I)=>'function' == typeof I.compose;
const isMonadThrow = (I)=>'function' == typeof I.throwError;
function pipeable(I) {
    const r = {};
    if (isFunctor(I)) r.map = map(I);
    if (isContravariant(I)) r.contramap = contramap(I);
    if (isFunctorWithIndex(I)) r.mapWithIndex = mapWithIndex(I);
    if (isApply(I)) {
        r.ap = ap(I);
        r.apFirst = apFirst(I);
        r.apSecond = apSecond(I);
    }
    if (isChain(I)) {
        r.chain = chain(I);
        r.chainFirst = chainFirst(I);
        r.flatten = r.chain(identity);
    }
    if (isBifunctor(I)) {
        r.bimap = bimap(I);
        r.mapLeft = mapLeft(I);
    }
    if (isExtend(I)) {
        r.extend = extend(I);
        r.duplicate = r.extend(identity);
    }
    if (isFoldable(I)) {
        r.reduce = reduce(I);
        r.foldMap = foldMap(I);
        r.reduceRight = reduceRight(I);
    }
    if (isFoldableWithIndex(I)) {
        r.reduceWithIndex = reduceWithIndex(I);
        r.foldMapWithIndex = foldMapWithIndex(I);
        r.reduceRightWithIndex = reduceRightWithIndex(I);
    }
    if (isAlt(I)) r.alt = alt(I);
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        r.filter = filter(I);
        r.filterMap = filterMap(I);
        r.partition = partition(I);
        r.partitionMap = partitionMap(I);
    }
    if (isFilterableWithIndex(I)) {
        r.filterWithIndex = filterWithIndex(I);
        r.filterMapWithIndex = filterMapWithIndex(I);
        r.partitionWithIndex = partitionWithIndex(I);
        r.partitionMapWithIndex = partitionMapWithIndex(I);
    }
    if (isProfunctor(I)) r.promap = promap(I);
    if (isSemigroupoid(I)) r.compose = compose(I);
    if (isMonadThrow(I)) {
        const fromOption = (onNone)=>(ma)=>'None' === ma._tag ? I.throwError(onNone()) : I.of(ma.value);
        const fromEither = (ma)=>'Left' === ma._tag ? I.throwError(ma.left) : I.of(ma.right);
        const fromPredicate = (predicate, onFalse)=>(a)=>predicate(a) ? I.of(a) : I.throwError(onFalse(a));
        const filterOrElse = (predicate, onFalse)=>(ma)=>I.chain(ma, (a)=>predicate(a) ? I.of(a) : I.throwError(onFalse(a)));
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
const pipeable_pipe = pipe;
export { alt, ap, bimap, chain, compose, contramap, extend, filter, filterMap, filterMapWithIndex, filterWithIndex, foldMap, foldMapWithIndex, map, mapLeft, mapWithIndex, partition, partitionMap, partitionMapWithIndex, partitionWithIndex, pipeable_pipe as pipe, pipeable, promap, reduce, reduceRight, reduceRightWithIndex, reduceWithIndex };
