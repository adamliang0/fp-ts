"use strict";
var __webpack_require__ = {};
!function() {
    __webpack_require__.d = function(exports1, definition) {
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
}();
!function() {
    __webpack_require__.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
}();
!function() {
    __webpack_require__.r = function(exports1) {
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
}();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    flatMapEither: function() {
        return flatMapEither;
    },
    matchE: function() {
        return matchE;
    },
    FromIO: function() {
        return FromIO;
    },
    getAltTaskValidation: function() {
        return getAltTaskValidation;
    },
    traverseSeqArrayWithIndex: function() {
        return traverseSeqArrayWithIndex;
    },
    Alt: function() {
        return Alt;
    },
    FromTask: function() {
        return FromTask;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    orElseFirstTaskK: function() {
        return orElseFirstTaskK;
    },
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    URI: function() {
        return URI;
    },
    taskEither: function() {
        return taskEither;
    },
    fromIO: function() {
        return fromIO;
    },
    taskify: function() {
        return taskify;
    },
    fromTaskK: function() {
        return fromTaskK;
    },
    orLeft: function() {
        return orLeft;
    },
    alt: function() {
        return TaskEither_alt;
    },
    tapError: function() {
        return tapError;
    },
    tapEither: function() {
        return tapEither;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    apS: function() {
        return apS;
    },
    left: function() {
        return left;
    },
    orElseFirstIOK: function() {
        return orElseFirstIOK;
    },
    Functor: function() {
        return Functor;
    },
    mapError: function() {
        return mapError;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    getTaskValidation: function() {
        return getTaskValidation;
    },
    chainEitherKW: function() {
        return chainEitherKW;
    },
    fromEither: function() {
        return fromEither;
    },
    flattenW: function() {
        return flattenW;
    },
    getApplyMonoid: function() {
        return getApplyMonoid;
    },
    fold: function() {
        return fold;
    },
    liftOption: function() {
        return liftOption;
    },
    liftNullable: function() {
        return liftNullable;
    },
    match: function() {
        return match;
    },
    traverseSeqArray: function() {
        return traverseSeqArray;
    },
    let: function() {
        return let_;
    },
    mapLeft: function() {
        return mapLeft;
    },
    fromOption: function() {
        return fromOption;
    },
    ApplicativeSeq: function() {
        return ApplicativeSeq;
    },
    leftIO: function() {
        return leftIO;
    },
    chainOptionKW: function() {
        return chainOptionKW;
    },
    apW: function() {
        return apW;
    },
    traverseReadonlyArrayWithIndexSeq: function() {
        return traverseReadonlyArrayWithIndexSeq;
    },
    Bifunctor: function() {
        return Bifunctor;
    },
    bimap: function() {
        return bimap;
    },
    getApplySemigroup: function() {
        return getApplySemigroup;
    },
    chainIOEitherKW: function() {
        return chainIOEitherKW;
    },
    bind: function() {
        return bind;
    },
    chainFirstEitherK: function() {
        return chainFirstEitherK;
    },
    tryCatchK: function() {
        return tryCatchK;
    },
    bindTo: function() {
        return bindTo;
    },
    chainFirstTaskK: function() {
        return chainFirstTaskK;
    },
    chainIOEitherK: function() {
        return chainIOEitherK;
    },
    chainIOK: function() {
        return chainIOK;
    },
    rightTask: function() {
        return rightTask;
    },
    getFilterable: function() {
        return getFilterable;
    },
    apFirstW: function() {
        return apFirstW;
    },
    apSecond: function() {
        return apSecond;
    },
    Monad: function() {
        return Monad;
    },
    of: function() {
        return of;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    apFirst: function() {
        return apFirst;
    },
    flatMapTaskOption: function() {
        return flatMapTaskOption;
    },
    ap: function() {
        return TaskEither_ap;
    },
    flatMapNullable: function() {
        return flatMapNullable;
    },
    filterOrElse: function() {
        return filterOrElse;
    },
    swap: function() {
        return swap;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    right: function() {
        return right;
    },
    tap: function() {
        return tap;
    },
    apSecondW: function() {
        return apSecondW;
    },
    orElseFirst: function() {
        return orElseFirst;
    },
    sequenceSeqArray: function() {
        return sequenceSeqArray;
    },
    FromEither: function() {
        return FromEither;
    },
    getCompactable: function() {
        return getCompactable;
    },
    ApplySeq: function() {
        return ApplySeq;
    },
    mapBoth: function() {
        return mapBoth;
    },
    chainW: function() {
        return chainW;
    },
    fromIOEither: function() {
        return fromIOEither;
    },
    fromTaskOptionK: function() {
        return fromTaskOptionK;
    },
    MonadThrow: function() {
        return MonadThrow;
    },
    asUnit: function() {
        return asUnit;
    },
    flatMapTask: function() {
        return flatMapTask;
    },
    fromEitherK: function() {
        return fromEitherK;
    },
    ApT: function() {
        return ApT;
    },
    getApplicativeTaskValidation: function() {
        return getApplicativeTaskValidation;
    },
    orElseFirstW: function() {
        return orElseFirstW;
    },
    fromNullableK: function() {
        return fromNullableK;
    },
    Do: function() {
        return Do;
    },
    altW: function() {
        return altW;
    },
    orElseW: function() {
        return orElseW;
    },
    as: function() {
        return TaskEither_as;
    },
    apSW: function() {
        return apSW;
    },
    flatMapIOEither: function() {
        return flatMapIOEither;
    },
    fromTaskOption: function() {
        return fromTaskOption;
    },
    tryCatch: function() {
        return tryCatch;
    },
    ApplicativePar: function() {
        return ApplicativePar;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    traverseReadonlyNonEmptyArrayWithIndexSeq: function() {
        return traverseReadonlyNonEmptyArrayWithIndexSeq;
    },
    matchEW: function() {
        return matchEW;
    },
    chainTaskOptionK: function() {
        return chainTaskOptionK;
    },
    bracket: function() {
        return bracket;
    },
    MonadTask: function() {
        return MonadTask;
    },
    Chain: function() {
        return Chain;
    },
    traverseArray: function() {
        return traverseArray;
    },
    chainFirst: function() {
        return chainFirst;
    },
    flatMap: function() {
        return flatMap;
    },
    foldW: function() {
        return foldW;
    },
    getOrElse: function() {
        return getOrElse;
    },
    tapIO: function() {
        return tapIO;
    },
    flatMapIO: function() {
        return flatMapIO;
    },
    taskEitherSeq: function() {
        return taskEitherSeq;
    },
    flatten: function() {
        return flatten;
    },
    fromIOK: function() {
        return fromIOK;
    },
    chainEitherK: function() {
        return chainEitherK;
    },
    tapTask: function() {
        return tapTask;
    },
    chain: function() {
        return chain;
    },
    getOrElseW: function() {
        return getOrElseW;
    },
    bracketW: function() {
        return bracketW;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    fromIOEitherK: function() {
        return fromIOEitherK;
    },
    fromTask: function() {
        return fromTask;
    },
    chainTaskOptionKW: function() {
        return chainTaskOptionKW;
    },
    bindW: function() {
        return bindW;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    fromNullable: function() {
        return fromNullable;
    },
    map: function() {
        return map;
    },
    leftTask: function() {
        return leftTask;
    },
    orElse: function() {
        return orElse;
    },
    filterOrElseW: function() {
        return filterOrElseW;
    },
    MonadIO: function() {
        return MonadIO;
    },
    Pointed: function() {
        return Pointed;
    },
    chainTaskK: function() {
        return chainTaskK;
    },
    ApplyPar: function() {
        return ApplyPar;
    },
    flatMapOption: function() {
        return flatMapOption;
    },
    toUnion: function() {
        return toUnion;
    },
    throwError: function() {
        return throwError;
    },
    flap: function() {
        return flap;
    },
    chainFirstEitherKW: function() {
        return chainFirstEitherKW;
    },
    rightIO: function() {
        return rightIO;
    },
    chainNullableK: function() {
        return chainNullableK;
    },
    matchW: function() {
        return matchW;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_Compactable_js_namespaceObject = require("./Compactable.js");
var external_Either_js_namespaceObject = require("./Either.js");
var external_EitherT_js_namespaceObject = require("./EitherT.js");
var external_Filterable_js_namespaceObject = require("./Filterable.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_FromTask_js_namespaceObject = require("./FromTask.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Task_js_namespaceObject = require("./Task.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
        });
    };
}
function _iterable_to_array(iter) {
    if ("u" > typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if ("string" == typeof o) return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) n = o.constructor.name;
    if ("Map" === n || "Set" === n) return Array.from(n);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (1 & t[0]) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), "function" == typeof Symbol && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                2 & op[0],
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                        _ = 0;
                        continue;
                    }
                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (6 === op[0] && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var left = /*#__PURE__*/ external_EitherT_js_namespaceObject.left(external_Task_js_namespaceObject.Pointed);
var right = /*#__PURE__*/ external_EitherT_js_namespaceObject.right(external_Task_js_namespaceObject.Pointed);
var rightTask = /*#__PURE__*/ external_EitherT_js_namespaceObject.rightF(external_Task_js_namespaceObject.Functor);
var leftTask = /*#__PURE__*/ external_EitherT_js_namespaceObject.leftF(external_Task_js_namespaceObject.Functor);
var rightIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.flow)(external_Task_js_namespaceObject.fromIO, rightTask);
var leftIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.flow)(external_Task_js_namespaceObject.fromIO, leftTask);
var fromIO = rightIO;
var fromTask = rightTask;
var fromEither = external_Task_js_namespaceObject.of;
var fromIOEither = external_Task_js_namespaceObject.fromIO;
var fromTaskOption = function(onNone) {
    return external_Task_js_namespaceObject.map(external_Either_js_namespaceObject.fromOption(onNone));
};
var match = /*#__PURE__*/ external_EitherT_js_namespaceObject.match(external_Task_js_namespaceObject.Functor);
var matchW = match;
var matchE = /*#__PURE__*/ external_EitherT_js_namespaceObject.matchE(external_Task_js_namespaceObject.Monad);
var fold = matchE;
var matchEW = matchE;
var foldW = matchEW;
var getOrElseW = /*#__PURE__*/ external_EitherT_js_namespaceObject.getOrElseW(external_Task_js_namespaceObject.Monad);
var getOrElse = getOrElseW;
var tryCatch = function(f, onRejected) {
    return function() {
        return _async_to_generator(function() {
            var reason;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            f().then(external_internal_js_namespaceObject.right)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 2:
                        reason = _state.sent();
                        return [
                            2,
                            external_internal_js_namespaceObject.left(onRejected(reason))
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
};
var tryCatchK = function(f, onRejected) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return tryCatch(function() {
            return f.apply(void 0, _to_consumable_array(a));
        }, onRejected);
    };
};
var toUnion = /*#__PURE__*/ external_EitherT_js_namespaceObject.toUnion(external_Task_js_namespaceObject.Functor);
var fromNullable = /*#__PURE__*/ external_EitherT_js_namespaceObject.fromNullable(external_Task_js_namespaceObject.Pointed);
var fromNullableK = /*#__PURE__*/ external_EitherT_js_namespaceObject.fromNullableK(external_Task_js_namespaceObject.Pointed);
var chainNullableK = /*#__PURE__*/ external_EitherT_js_namespaceObject.chainNullableK(external_Task_js_namespaceObject.Monad);
var orElse = /*#__PURE__*/ external_EitherT_js_namespaceObject.orElse(external_Task_js_namespaceObject.Monad);
var orElseW = orElse;
var tapError = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.tapError(external_Task_js_namespaceObject.Monad));
var orElseFirstIOK = function(onLeft) {
    return tapError(fromIOK(onLeft));
};
var orElseFirstTaskK = function(onLeft) {
    return tapError(fromTaskK(onLeft));
};
var orLeft = /*#__PURE__*/ external_EitherT_js_namespaceObject.orLeft(external_Task_js_namespaceObject.Monad);
var swap = /*#__PURE__*/ external_EitherT_js_namespaceObject.swap(external_Task_js_namespaceObject.Functor);
var fromTaskOptionK = function(onNone) {
    var from = fromTaskOption(onNone);
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, from);
    };
};
var chainTaskOptionKW = function(onNone) {
    return function(f) {
        return function(ma) {
            return flatMap(ma, fromTaskOptionK(onNone)(f));
        };
    };
};
var chainTaskOptionK = chainTaskOptionKW;
var fromIOEitherK = function(f) {
    return (0, external_function_js_namespaceObject.flow)(f, fromIOEither);
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _apPar = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, TaskEither_ap(fa));
};
var _apSeq = function(fab, fa) {
    return flatMap(fab, function(f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
    });
};
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, TaskEither_alt(that));
};
var map = /*#__PURE__*/ external_EitherT_js_namespaceObject.map(external_Task_js_namespaceObject.Functor);
var mapBoth = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(3, external_EitherT_js_namespaceObject.mapBoth(external_Task_js_namespaceObject.Functor));
var bimap = mapBoth;
var mapError = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.mapError(external_Task_js_namespaceObject.Functor));
var mapLeft = mapError;
var TaskEither_ap = /*#__PURE__*/ external_EitherT_js_namespaceObject.ap(external_Task_js_namespaceObject.ApplyPar);
var apW = TaskEither_ap;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.flatMap(external_Task_js_namespaceObject.Monad));
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var TaskEither_alt = /*#__PURE__*/ external_EitherT_js_namespaceObject.alt(external_Task_js_namespaceObject.Monad);
var altW = TaskEither_alt;
var of = right;
var throwError = left;
var URI = 'TaskEither';
function getApplicativeTaskValidation(A, S) {
    var ap = (0, external_Apply_js_namespaceObject.ap)(A, external_Either_js_namespaceObject.getApplicativeValidation(S));
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
        },
        of: of
    };
}
function getAltTaskValidation(S) {
    var alt = external_EitherT_js_namespaceObject.altValidation(external_Task_js_namespaceObject.Monad, S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        alt: function(fa, that) {
            return (0, external_function_js_namespaceObject.pipe)(fa, alt(that));
        }
    };
}
var getCompactable = function(M) {
    var C = external_Either_js_namespaceObject.getCompactable(M);
    return {
        URI: URI,
        _E: void 0,
        compact: (0, external_Compactable_js_namespaceObject.compact)(external_Task_js_namespaceObject.Functor, C),
        separate: (0, external_Compactable_js_namespaceObject.separate)(external_Task_js_namespaceObject.Functor, C, external_Either_js_namespaceObject.Functor)
    };
};
function getFilterable(M) {
    var F = external_Either_js_namespaceObject.getFilterable(M);
    var C = getCompactable(M);
    var filter = (0, external_Filterable_js_namespaceObject.filter)(external_Task_js_namespaceObject.Functor, F);
    var filterMap = (0, external_Filterable_js_namespaceObject.filterMap)(external_Task_js_namespaceObject.Functor, F);
    var partition = (0, external_Filterable_js_namespaceObject.partition)(external_Task_js_namespaceObject.Functor, F);
    var partitionMap = (0, external_Filterable_js_namespaceObject.partitionMap)(external_Task_js_namespaceObject.Functor, F);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: function(fa, predicate) {
            return (0, external_function_js_namespaceObject.pipe)(fa, filter(predicate));
        },
        filterMap: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, filterMap(f));
        },
        partition: function(fa, predicate) {
            return (0, external_function_js_namespaceObject.pipe)(fa, partition(predicate));
        },
        partitionMap: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, partitionMap(f));
        }
    };
}
var Functor = {
    URI: URI,
    map: _map
};
var TaskEither_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
var asUnit = (0, external_Functor_js_namespaceObject.asUnit)(Functor);
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var ApplyPar = {
    URI: URI,
    map: _map,
    ap: _apPar
};
var apFirst = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apFirst)(ApplyPar);
var apFirstW = apFirst;
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(ApplyPar);
var apSecondW = apSecond;
var ApplicativePar = {
    URI: URI,
    map: _map,
    ap: _apPar,
    of: of
};
var ApplySeq = {
    URI: URI,
    map: _map,
    ap: _apSeq
};
var ApplicativeSeq = {
    URI: URI,
    map: _map,
    ap: _apSeq,
    of: of
};
var Chain = {
    URI: URI,
    map: _map,
    ap: _apPar,
    chain: flatMap
};
var Monad = {
    URI: URI,
    map: _map,
    ap: _apPar,
    chain: flatMap,
    of: of
};
var MonadIO = {
    URI: URI,
    map: _map,
    ap: _apPar,
    chain: flatMap,
    of: of,
    fromIO: fromIO
};
var MonadTask = {
    URI: URI,
    map: _map,
    ap: _apPar,
    chain: flatMap,
    of: of,
    fromIO: fromIO,
    fromTask: fromTask
};
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _apPar,
    chain: flatMap,
    of: of,
    throwError: throwError
};
var FromEither = {
    URI: URI,
    fromEither: fromEither
};
var FromIO = {
    URI: URI,
    fromIO: fromIO
};
var FromTask = {
    URI: URI,
    fromIO: fromIO,
    fromTask: fromTask
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var tapEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromEither_js_namespaceObject.tapEither)(FromEither, Chain));
var tapIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromIO_js_namespaceObject.tapIO)(FromIO, Chain));
var tapTask = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromTask_js_namespaceObject.tapTask)(FromTask, Chain));
var Bifunctor = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError
};
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var chainOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.chainOptionK)(FromEither, Chain);
var chainOptionKW = chainOptionK;
var _FromEither = {
    fromEither: FromEither.fromEither
};
var liftNullable = /*#__PURE__*/ external_internal_js_namespaceObject.liftNullable(_FromEither);
var liftOption = /*#__PURE__*/ external_internal_js_namespaceObject.liftOption(_FromEither);
var _FlatMap = {
    flatMap: flatMap
};
var _FromIO = {
    fromIO: FromIO.fromIO
};
var _FromTask = {
    fromTask: fromTask
};
var flatMapNullable = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapNullable(_FromEither, _FlatMap);
var flatMapOption = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapOption(_FromEither, _FlatMap);
var flatMapEither = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapEither(_FromEither, _FlatMap);
var flatMapIO = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapIO(_FromIO, _FlatMap);
var flatMapTask = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapTask(_FromTask, _FlatMap);
var flatMapIOEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, fromIOEitherK(f));
});
var flatMapTaskOption = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(3, function(self, f, onNone) {
    return flatMap(self, function(a) {
        return fromTaskOption(function() {
            return onNone(a);
        })(f(a));
    });
});
var chainEitherK = flatMapEither;
var chainEitherKW = flatMapEither;
var chainFirstEitherK = tapEither;
var chainFirstEitherKW = tapEither;
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var filterOrElse = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.filterOrElse)(FromEither, Chain);
var filterOrElseW = filterOrElse;
var fromEitherK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromEitherK)(FromEither);
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var chainIOK = flatMapIO;
var chainFirstIOK = tapIO;
var fromTaskK = /*#__PURE__*/ (0, external_FromTask_js_namespaceObject.fromTaskK)(FromTask);
var chainTaskK = flatMapTask;
var chainFirstTaskK = tapTask;
var chainIOEitherKW = flatMapIOEither;
var chainIOEitherK = flatMapIOEither;
function taskify(f) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return function() {
            return new Promise(function(resolve) {
                var cbResolver = function(e, r) {
                    return null != e ? resolve(external_internal_js_namespaceObject.left(e)) : resolve(external_internal_js_namespaceObject.right(r));
                };
                f.apply(null, args.concat(cbResolver));
            });
        };
    };
}
var bracket = function(acquire, use, release) {
    return bracketW(acquire, use, release);
};
var bracketW = function(acquire, use, release) {
    return flatMap(acquire, function(a) {
        return external_Task_js_namespaceObject.flatMap(use(a), function(e) {
            return flatMap(release(a, e), function() {
                return external_Task_js_namespaceObject.of(e);
            });
        });
    });
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(ApplyPar);
var apSW = apS;
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return (0, external_function_js_namespaceObject.flow)(external_Task_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(f), external_Task_js_namespaceObject.map(external_Either_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(external_function_js_namespaceObject.SK)));
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
    };
};
var traverseReadonlyNonEmptyArrayWithIndexSeq = function(f) {
    return function(as) {
        return function() {
            return external_internal_js_namespaceObject.tail(as).reduce(function(acc, a, i) {
                return acc.then(function(ebs) {
                    return external_internal_js_namespaceObject.isLeft(ebs) ? acc : f(i + 1, a)().then(function(eb) {
                        if (external_internal_js_namespaceObject.isLeft(eb)) return eb;
                        ebs.right.push(eb.right);
                        return ebs;
                    });
                });
            }, f(0, external_internal_js_namespaceObject.head(as))().then(external_Either_js_namespaceObject.map(external_internal_js_namespaceObject.singleton)));
        };
    };
};
var traverseReadonlyArrayWithIndexSeq = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
    };
};
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
var traverseArray = function(f) {
    return traverseReadonlyArrayWithIndex(function(_, a) {
        return f(a);
    });
};
var sequenceArray = /*#__PURE__*/ traverseArray(external_function_js_namespaceObject.identity);
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
var traverseSeqArray = function(f) {
    return traverseReadonlyArrayWithIndexSeq(function(_, a) {
        return f(a);
    });
};
var sequenceSeqArray = /*#__PURE__*/ traverseSeqArray(external_function_js_namespaceObject.identity);
var chain = flatMap;
var chainW = flatMap;
var chainFirst = tap;
var chainFirstW = tap;
var orElseFirst = tapError;
var orElseFirstW = tapError;
var taskEither = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError,
    map: _map,
    of: of,
    ap: _apPar,
    chain: flatMap,
    alt: _alt,
    fromIO: fromIO,
    fromTask: fromTask,
    throwError: throwError
};
var taskEitherSeq = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError,
    map: _map,
    of: of,
    ap: _apSeq,
    chain: flatMap,
    alt: _alt,
    fromIO: fromIO,
    fromTask: fromTask,
    throwError: throwError
};
var getApplySemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(ApplySeq);
var getApplyMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(ApplicativeSeq);
var getSemigroup = function(S) {
    return (0, external_Apply_js_namespaceObject.getApplySemigroup)(external_Task_js_namespaceObject.ApplySeq)(external_Either_js_namespaceObject.getSemigroup(S));
};
function getTaskValidation(SE) {
    var applicativeTaskValidation = getApplicativeTaskValidation(external_Task_js_namespaceObject.ApplicativePar, SE);
    var altTaskValidation = getAltTaskValidation(SE);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: applicativeTaskValidation.ap,
        of: of,
        chain: flatMap,
        bimap: mapBoth,
        mapLeft: mapError,
        alt: altTaskValidation.alt,
        fromIO: fromIO,
        fromTask: fromTask,
        throwError: throwError
    };
}
exports.Alt = __webpack_exports__.Alt;
exports.ApT = __webpack_exports__.ApT;
exports.ApplicativePar = __webpack_exports__.ApplicativePar;
exports.ApplicativeSeq = __webpack_exports__.ApplicativeSeq;
exports.ApplyPar = __webpack_exports__.ApplyPar;
exports.ApplySeq = __webpack_exports__.ApplySeq;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Chain = __webpack_exports__.Chain;
exports.Do = __webpack_exports__.Do;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromIO = __webpack_exports__.FromIO;
exports.FromTask = __webpack_exports__.FromTask;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
exports.MonadTask = __webpack_exports__.MonadTask;
exports.MonadThrow = __webpack_exports__.MonadThrow;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.alt = __webpack_exports__.alt;
exports.altW = __webpack_exports__.altW;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apFirstW = __webpack_exports__.apFirstW;
exports.apS = __webpack_exports__.apS;
exports.apSW = __webpack_exports__.apSW;
exports.apSecond = __webpack_exports__.apSecond;
exports.apSecondW = __webpack_exports__.apSecondW;
exports.apW = __webpack_exports__.apW;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.bimap = __webpack_exports__.bimap;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.bindW = __webpack_exports__.bindW;
exports.bracket = __webpack_exports__.bracket;
exports.bracketW = __webpack_exports__.bracketW;
exports.chain = __webpack_exports__.chain;
exports.chainEitherK = __webpack_exports__.chainEitherK;
exports.chainEitherKW = __webpack_exports__.chainEitherKW;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstEitherK = __webpack_exports__.chainFirstEitherK;
exports.chainFirstEitherKW = __webpack_exports__.chainFirstEitherKW;
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainFirstTaskK = __webpack_exports__.chainFirstTaskK;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainIOEitherK = __webpack_exports__.chainIOEitherK;
exports.chainIOEitherKW = __webpack_exports__.chainIOEitherKW;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.chainNullableK = __webpack_exports__.chainNullableK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.chainOptionKW = __webpack_exports__.chainOptionKW;
exports.chainTaskK = __webpack_exports__.chainTaskK;
exports.chainTaskOptionK = __webpack_exports__.chainTaskOptionK;
exports.chainTaskOptionKW = __webpack_exports__.chainTaskOptionKW;
exports.chainW = __webpack_exports__.chainW;
exports.filterOrElse = __webpack_exports__.filterOrElse;
exports.filterOrElseW = __webpack_exports__.filterOrElseW;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapEither = __webpack_exports__.flatMapEither;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatMapIOEither = __webpack_exports__.flatMapIOEither;
exports.flatMapNullable = __webpack_exports__.flatMapNullable;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatMapTask = __webpack_exports__.flatMapTask;
exports.flatMapTaskOption = __webpack_exports__.flatMapTaskOption;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.fold = __webpack_exports__.fold;
exports.foldW = __webpack_exports__.foldW;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOEither = __webpack_exports__.fromIOEither;
exports.fromIOEitherK = __webpack_exports__.fromIOEitherK;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromNullable = __webpack_exports__.fromNullable;
exports.fromNullableK = __webpack_exports__.fromNullableK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.fromTask = __webpack_exports__.fromTask;
exports.fromTaskK = __webpack_exports__.fromTaskK;
exports.fromTaskOption = __webpack_exports__.fromTaskOption;
exports.fromTaskOptionK = __webpack_exports__.fromTaskOptionK;
exports.getAltTaskValidation = __webpack_exports__.getAltTaskValidation;
exports.getApplicativeTaskValidation = __webpack_exports__.getApplicativeTaskValidation;
exports.getApplyMonoid = __webpack_exports__.getApplyMonoid;
exports.getApplySemigroup = __webpack_exports__.getApplySemigroup;
exports.getCompactable = __webpack_exports__.getCompactable;
exports.getFilterable = __webpack_exports__.getFilterable;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.getOrElseW = __webpack_exports__.getOrElseW;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getTaskValidation = __webpack_exports__.getTaskValidation;
exports.left = __webpack_exports__.left;
exports.leftIO = __webpack_exports__.leftIO;
exports.leftTask = __webpack_exports__.leftTask;
exports["let"] = __webpack_exports__["let"];
exports.liftNullable = __webpack_exports__.liftNullable;
exports.liftOption = __webpack_exports__.liftOption;
exports.map = __webpack_exports__.map;
exports.mapBoth = __webpack_exports__.mapBoth;
exports.mapError = __webpack_exports__.mapError;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.matchEW = __webpack_exports__.matchEW;
exports.matchW = __webpack_exports__.matchW;
exports.of = __webpack_exports__.of;
exports.orElse = __webpack_exports__.orElse;
exports.orElseFirst = __webpack_exports__.orElseFirst;
exports.orElseFirstIOK = __webpack_exports__.orElseFirstIOK;
exports.orElseFirstTaskK = __webpack_exports__.orElseFirstTaskK;
exports.orElseFirstW = __webpack_exports__.orElseFirstW;
exports.orElseW = __webpack_exports__.orElseW;
exports.orLeft = __webpack_exports__.orLeft;
exports.right = __webpack_exports__.right;
exports.rightIO = __webpack_exports__.rightIO;
exports.rightTask = __webpack_exports__.rightTask;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.sequenceSeqArray = __webpack_exports__.sequenceSeqArray;
exports.swap = __webpack_exports__.swap;
exports.tap = __webpack_exports__.tap;
exports.tapEither = __webpack_exports__.tapEither;
exports.tapError = __webpack_exports__.tapError;
exports.tapIO = __webpack_exports__.tapIO;
exports.tapTask = __webpack_exports__.tapTask;
exports.taskEither = __webpack_exports__.taskEither;
exports.taskEitherSeq = __webpack_exports__.taskEitherSeq;
exports.taskify = __webpack_exports__.taskify;
exports.throwError = __webpack_exports__.throwError;
exports.toUnion = __webpack_exports__.toUnion;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyArrayWithIndexSeq;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndexSeq;
exports.traverseSeqArray = __webpack_exports__.traverseSeqArray;
exports.traverseSeqArrayWithIndex = __webpack_exports__.traverseSeqArrayWithIndex;
exports.tryCatch = __webpack_exports__.tryCatch;
exports.tryCatchK = __webpack_exports__.tryCatchK;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "ApT",
    "ApplicativePar",
    "ApplicativeSeq",
    "ApplyPar",
    "ApplySeq",
    "Bifunctor",
    "Chain",
    "Do",
    "FromEither",
    "FromIO",
    "FromTask",
    "Functor",
    "Monad",
    "MonadIO",
    "MonadTask",
    "MonadThrow",
    "Pointed",
    "URI",
    "alt",
    "altW",
    "ap",
    "apFirst",
    "apFirstW",
    "apS",
    "apSW",
    "apSecond",
    "apSecondW",
    "apW",
    "as",
    "asUnit",
    "bimap",
    "bind",
    "bindTo",
    "bindW",
    "bracket",
    "bracketW",
    "chain",
    "chainEitherK",
    "chainEitherKW",
    "chainFirst",
    "chainFirstEitherK",
    "chainFirstEitherKW",
    "chainFirstIOK",
    "chainFirstTaskK",
    "chainFirstW",
    "chainIOEitherK",
    "chainIOEitherKW",
    "chainIOK",
    "chainNullableK",
    "chainOptionK",
    "chainOptionKW",
    "chainTaskK",
    "chainTaskOptionK",
    "chainTaskOptionKW",
    "chainW",
    "filterOrElse",
    "filterOrElseW",
    "flap",
    "flatMap",
    "flatMapEither",
    "flatMapIO",
    "flatMapIOEither",
    "flatMapNullable",
    "flatMapOption",
    "flatMapTask",
    "flatMapTaskOption",
    "flatten",
    "flattenW",
    "fold",
    "foldW",
    "fromEither",
    "fromEitherK",
    "fromIO",
    "fromIOEither",
    "fromIOEitherK",
    "fromIOK",
    "fromNullable",
    "fromNullableK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "fromTask",
    "fromTaskK",
    "fromTaskOption",
    "fromTaskOptionK",
    "getAltTaskValidation",
    "getApplicativeTaskValidation",
    "getApplyMonoid",
    "getApplySemigroup",
    "getCompactable",
    "getFilterable",
    "getOrElse",
    "getOrElseW",
    "getSemigroup",
    "getTaskValidation",
    "left",
    "leftIO",
    "leftTask",
    "let",
    "liftNullable",
    "liftOption",
    "map",
    "mapBoth",
    "mapError",
    "mapLeft",
    "match",
    "matchE",
    "matchEW",
    "matchW",
    "of",
    "orElse",
    "orElseFirst",
    "orElseFirstIOK",
    "orElseFirstTaskK",
    "orElseFirstW",
    "orElseW",
    "orLeft",
    "right",
    "rightIO",
    "rightTask",
    "sequenceArray",
    "sequenceSeqArray",
    "swap",
    "tap",
    "tapEither",
    "tapError",
    "tapIO",
    "tapTask",
    "taskEither",
    "taskEitherSeq",
    "taskify",
    "throwError",
    "toUnion",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyArrayWithIndexSeq",
    "traverseReadonlyNonEmptyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndexSeq",
    "traverseSeqArray",
    "traverseSeqArrayWithIndex",
    "tryCatch",
    "tryCatchK"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
