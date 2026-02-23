function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
class IORef {
    write(a) {
        return ()=>{
            this.value = a;
        };
    }
    modify(f) {
        return ()=>{
            this.value = f(this.value);
        };
    }
    constructor(value){
        _define_property(this, "value", void 0);
        _define_property(this, "read", void 0);
        this.value = value;
        this.read = ()=>this.value;
        this.write = this.write.bind(this);
        this.modify = this.modify.bind(this);
    }
}
function newIORef(a) {
    return ()=>new IORef(a);
}
export { IORef, newIORef };
