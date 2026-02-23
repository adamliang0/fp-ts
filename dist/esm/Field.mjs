function gcd(E, field) {
    const zero = field.zero;
    const f = (x, y)=>E.equals(y, zero) ? x : f(y, field.mod(x, y));
    return f;
}
function lcm(E, F) {
    const zero = F.zero;
    const gcdSF = gcd(E, F);
    return (x, y)=>E.equals(x, zero) || E.equals(y, zero) ? zero : F.div(F.mul(x, y), gcdSF(x, y));
}
const fieldNumber = {
    add: (x, y)=>x + y,
    zero: 0,
    mul: (x, y)=>x * y,
    one: 1,
    sub: (x, y)=>x - y,
    degree: (_)=>1,
    div: (x, y)=>x / y,
    mod: (x, y)=>x % y
};
export { fieldNumber, gcd, lcm };
