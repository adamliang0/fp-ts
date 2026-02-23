const tailRec = (startWith, f)=>{
    let ab = f(startWith);
    while('Left' === ab._tag)ab = f(ab.left);
    return ab.right;
};
export { tailRec };
