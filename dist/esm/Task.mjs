import { getApplicativeMonoid } from "./Applicative.mjs";
import { apFirst, apS, apSecond, getApplySemigroup } from "./Apply.mjs";
import { bind, tap } from "./Chain.mjs";
import { fromIOK, tapIO } from "./FromIO.mjs";
import { dual, identity, pipe } from "./function.mjs";
import { as as external_Functor_mjs_as, asUnit, bindTo, flap, let as external_Functor_mjs_let } from "./Functor.mjs";
import { emptyReadonlyArray, emptyRecord, flatMapIO, head, isNonEmpty, singleton, tail } from "./internal.mjs";
const fromIO = (ma)=>()=>Promise.resolve().then(ma);
function delay(millis) {
    return (ma)=>()=>new Promise((resolve)=>{
                setTimeout(()=>{
                    Promise.resolve().then(ma).then(resolve);
                }, millis);
            });
}
const _map = (fa, f)=>pipe(fa, map(f));
const _apPar = (fab, fa)=>pipe(fab, ap(fa));
const _apSeq = (fab, fa)=>flatMap(fab, (f)=>pipe(fa, map(f)));
const map = (f)=>(fa)=>()=>Promise.resolve().then(fa).then(f);
const ap = (fa)=>(fab)=>()=>Promise.all([
                Promise.resolve().then(fab),
                Promise.resolve().then(fa)
            ]).then(([f, a])=>f(a));
const of = (a)=>()=>Promise.resolve(a);
const flatMap = /*#__PURE__*/ dual(2, (ma, f)=>()=>Promise.resolve().then(ma).then((a)=>f(a)()));
const flatten = /*#__PURE__*/ flatMap(identity);
const URI = 'Task';
function getRaceMonoid() {
    return {
        concat: (x, y)=>()=>Promise.race([
                    Promise.resolve().then(x),
                    Promise.resolve().then(y)
                ]),
        empty: never
    };
}
const Functor = {
    URI,
    map: _map
};
const Task_as = dual(2, external_Functor_mjs_as(Functor));
const Task_asUnit = asUnit(Functor);
const Task_flap = /*#__PURE__*/ flap(Functor);
const Pointed = {
    URI,
    of
};
const ApplyPar = {
    URI,
    map: _map,
    ap: _apPar
};
const Task_apFirst = /*#__PURE__*/ apFirst(ApplyPar);
const Task_apSecond = /*#__PURE__*/ apSecond(ApplyPar);
const ApplicativePar = {
    URI,
    map: _map,
    ap: _apPar,
    of
};
const ApplySeq = {
    URI,
    map: _map,
    ap: _apSeq
};
const ApplicativeSeq = {
    URI,
    map: _map,
    ap: _apSeq,
    of
};
const Chain = {
    URI,
    map: _map,
    ap: _apPar,
    chain: flatMap
};
const Monad = {
    URI,
    map: _map,
    of,
    ap: _apPar,
    chain: flatMap
};
const MonadIO = {
    URI,
    map: _map,
    of,
    ap: _apPar,
    chain: flatMap,
    fromIO
};
const fromTask = identity;
const MonadTask = {
    URI,
    map: _map,
    of,
    ap: _apPar,
    chain: flatMap,
    fromIO,
    fromTask
};
const FromIO = {
    URI,
    fromIO
};
const _FlatMap = {
    flatMap
};
const _FromIO = {
    fromIO: FromIO.fromIO
};
const Task_flatMapIO = flatMapIO(_FromIO, _FlatMap);
const Task_tap = /*#__PURE__*/ dual(2, tap(Chain));
const Task_tapIO = /*#__PURE__*/ dual(2, tapIO(FromIO, Chain));
const Task_fromIOK = /*#__PURE__*/ fromIOK(FromIO);
const chainIOK = Task_flatMapIO;
const chainFirstIOK = Task_tapIO;
const FromTask = {
    URI,
    fromIO,
    fromTask
};
const never = ()=>new Promise((_)=>void 0);
const Do = /*#__PURE__*/ of(emptyRecord);
const Task_bindTo = /*#__PURE__*/ bindTo(Functor);
const let_ = /*#__PURE__*/ external_Functor_mjs_let(Functor);
const Task_bind = /*#__PURE__*/ bind(Chain);
const Task_apS = /*#__PURE__*/ apS(ApplyPar);
const ApT = /*#__PURE__*/ of(emptyReadonlyArray);
const traverseReadonlyNonEmptyArrayWithIndex = (f)=>(as)=>()=>Promise.all(as.map((a, i)=>Promise.resolve().then(()=>f(i, a)())));
const traverseReadonlyArrayWithIndex = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseReadonlyNonEmptyArrayWithIndexSeq = (f)=>(as)=>()=>tail(as).reduce((acc, a, i)=>acc.then((bs)=>Promise.resolve().then(f(i + 1, a)).then((b)=>{
                        bs.push(b);
                        return bs;
                    })), Promise.resolve().then(f(0, head(as))).then(singleton));
const traverseReadonlyArrayWithIndexSeq = (f)=>{
    const g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
    return (as)=>isNonEmpty(as) ? g(as) : ApT;
};
const traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
const traverseArray = (f)=>traverseReadonlyArrayWithIndex((_, a)=>f(a));
const sequenceArray = /*#__PURE__*/ traverseArray(identity);
const traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
const traverseSeqArray = (f)=>traverseReadonlyArrayWithIndexSeq((_, a)=>f(a));
const sequenceSeqArray = /*#__PURE__*/ traverseSeqArray(identity);
const chain = flatMap;
const chainFirst = Task_tap;
const task = {
    URI,
    map: _map,
    of,
    ap: _apPar,
    chain: flatMap,
    fromIO,
    fromTask
};
const taskSeq = {
    URI,
    map: _map,
    of,
    ap: _apSeq,
    chain: flatMap,
    fromIO,
    fromTask
};
const getSemigroup = /*#__PURE__*/ getApplySemigroup(ApplySeq);
const getMonoid = /*#__PURE__*/ getApplicativeMonoid(ApplicativeSeq);
export { ApT, ApplicativePar, ApplicativeSeq, ApplyPar, ApplySeq, Chain, Do, FromIO, FromTask, Functor, Monad, MonadIO, MonadTask, Pointed, URI, ap, Task_apFirst as apFirst, Task_apS as apS, Task_apSecond as apSecond, Task_as as as, Task_asUnit as asUnit, Task_bind as bind, Task_bindTo as bindTo, chain, chainFirst, chainFirstIOK, chainIOK, delay, Task_flap as flap, flatMap, Task_flatMapIO as flatMapIO, flatten, fromIO, Task_fromIOK as fromIOK, fromTask, getMonoid, getRaceMonoid, getSemigroup, let_ as let, map, never, of, sequenceArray, sequenceSeqArray, Task_tap as tap, Task_tapIO as tapIO, task, taskSeq, traverseArray, traverseArrayWithIndex, traverseReadonlyArrayWithIndex, traverseReadonlyArrayWithIndexSeq, traverseReadonlyNonEmptyArrayWithIndex, traverseReadonlyNonEmptyArrayWithIndexSeq, traverseSeqArray, traverseSeqArrayWithIndex };
