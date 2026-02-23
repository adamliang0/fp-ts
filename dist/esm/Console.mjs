const log = (a)=>()=>console.log(a);
const warn = (a)=>()=>console.warn(a);
const error = (a)=>()=>console.error(a);
const info = (a)=>()=>console.info(a);
export { error, info, log, warn };
