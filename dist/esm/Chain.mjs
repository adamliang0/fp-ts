function chainFirst(M) {
    const tapM = tap(M);
    return (f)=>(first)=>tapM(first, f);
}
function tap(M) {
    return (first, f)=>M.chain(first, (a)=>M.map(f(a), ()=>a));
}
function bind(M) {
    return (name, f)=>(ma)=>M.chain(ma, (a)=>M.map(f(a), (b)=>Object.assign({}, a, {
                        [name]: b
                    })));
}
export { bind, chainFirst, tap };
