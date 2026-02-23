function guard(F, P) {
    return (b)=>b ? P.of(void 0) : F.zero();
}
export { guard };
