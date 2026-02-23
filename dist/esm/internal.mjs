import { dual } from "./function.mjs";
const isNone = (fa)=>'None' === fa._tag;
const isSome = (fa)=>'Some' === fa._tag;
const none = {
    _tag: 'None'
};
const some = (a)=>({
        _tag: 'Some',
        value: a
    });
const isLeft = (ma)=>'Left' === ma._tag;
const isRight = (ma)=>'Right' === ma._tag;
const left = (e)=>({
        _tag: 'Left',
        left: e
    });
const right = (a)=>({
        _tag: 'Right',
        right: a
    });
const singleton = (a)=>[
        a
    ];
const isNonEmpty = (as)=>as.length > 0;
const head = (as)=>as[0];
const tail = (as)=>as.slice(1);
const emptyReadonlyArray = [];
const emptyRecord = {};
const has = Object.prototype.hasOwnProperty;
const fromReadonlyNonEmptyArray = (as)=>[
        as[0],
        ...as.slice(1)
    ];
const liftNullable = (F)=>(f, onNullable)=>(...a)=>{
            const o = f(...a);
            return F.fromEither(null == o ? left(onNullable(...a)) : right(o));
        };
const liftOption = (F)=>(f, onNone)=>(...a)=>{
            const o = f(...a);
            return F.fromEither(isNone(o) ? left(onNone(...a)) : right(o.value));
        };
const flatMapNullable = (F, M)=>/*#__PURE__*/ dual(3, (self, f, onNullable)=>M.flatMap(self, liftNullable(F)(f, onNullable)));
const flatMapOption = (F, M)=>/*#__PURE__*/ dual(3, (self, f, onNone)=>M.flatMap(self, liftOption(F)(f, onNone)));
const flatMapEither = (F, M)=>/*#__PURE__*/ dual(2, (self, f)=>M.flatMap(self, (a)=>F.fromEither(f(a))));
const flatMapIO = (F, M)=>/*#__PURE__*/ dual(2, (self, f)=>M.flatMap(self, (a)=>F.fromIO(f(a))));
const flatMapTask = (F, M)=>/*#__PURE__*/ dual(2, (self, f)=>M.flatMap(self, (a)=>F.fromTask(f(a))));
const flatMapReader = (F, M)=>/*#__PURE__*/ dual(2, (self, f)=>M.flatMap(self, (a)=>F.fromReader(f(a))));
export { emptyReadonlyArray, emptyRecord, flatMapEither, flatMapIO, flatMapNullable, flatMapOption, flatMapReader, flatMapTask, fromReadonlyNonEmptyArray, has, head, isLeft, isNonEmpty, isNone, isRight, isSome, left, liftNullable, liftOption, none, right, singleton, some, tail };
