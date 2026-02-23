import { has } from "./internal.mjs";
const struct = (shows)=>({
        show: (a)=>{
            let s = '{';
            for(const k in shows)if (has.call(shows, k)) s += ` ${k}: ${shows[k].show(a[k])},`;
            if (s.length > 1) s = s.slice(0, -1) + ' ';
            s += '}';
            return s;
        }
    });
const tuple = (...shows)=>({
        show: (t)=>`[${t.map((a, i)=>shows[i].show(a)).join(', ')}]`
    });
const getTupleShow = tuple;
const getStructShow = struct;
const showBoolean = {
    show: (a)=>JSON.stringify(a)
};
const showString = {
    show: (a)=>JSON.stringify(a)
};
const showNumber = {
    show: (a)=>JSON.stringify(a)
};
export { getStructShow, getTupleShow, showBoolean, showNumber, showString, struct, tuple };
