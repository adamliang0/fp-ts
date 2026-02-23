import { tryCatch } from "./Either.mjs";
import { identity } from "./function.mjs";
const parse = (s)=>tryCatch(()=>JSON.parse(s), identity);
const stringify = (a)=>tryCatch(()=>{
        const s = JSON.stringify(a);
        if ('string' != typeof s) throw new Error('Converting unsupported structure to JSON');
        return s;
    }, identity);
export { parse, stringify };
