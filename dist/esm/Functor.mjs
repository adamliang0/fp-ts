import { pipe } from "./function.mjs";
function map(F, G) {
    return (f)=>(fa)=>F.map(fa, (ga)=>G.map(ga, f));
}
function flap(F) {
    return (a)=>(fab)=>F.map(fab, (f)=>f(a));
}
function bindTo(F) {
    return (name)=>(fa)=>F.map(fa, (a)=>({
                    [name]: a
                }));
}
function let_(F) {
    return (name, f)=>(fa)=>F.map(fa, (a)=>Object.assign({}, a, {
                    [name]: f(a)
                }));
}
function getFunctorComposition(F, G) {
    const _map = map(F, G);
    return {
        map: (fga, f)=>pipe(fga, _map(f))
    };
}
function as(F) {
    return (self, b)=>F.map(self, ()=>b);
}
function asUnit(F) {
    const asM = as(F);
    return (self)=>asM(self, void 0);
}
export { as, asUnit, bindTo, flap, getFunctorComposition, let_ as let, map };
