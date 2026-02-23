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
    never: function() {
        return never;
    },
    Chain: function() {
        return Chain;
    },
    traverseArray: function() {
        return traverseArray;
    },
    FromIO: function() {
        return FromIO;
    },
    chainFirst: function() {
        return chainFirst;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    tap: function() {
        return tap;
    },
    getMonoid: function() {
        return getMonoid;
    },
    flatMap: function() {
        return flatMap;
    },
    sequenceSeqArray: function() {
        return sequenceSeqArray;
    },
    traverseSeqArrayWithIndex: function() {
        return traverseSeqArrayWithIndex;
    },
    tapIO: function() {
        return tapIO;
    },
    traverseSeqArray: function() {
        return traverseSeqArray;
    },
    FromTask: function() {
        return FromTask;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    let: function() {
        return let_;
    },
    ApplySeq: function() {
        return ApplySeq;
    },
    flatMapIO: function() {
        return flatMapIO;
    },
    ApplicativeSeq: function() {
        return ApplicativeSeq;
    },
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    flatten: function() {
        return flatten;
    },
    fromIOK: function() {
        return fromIOK;
    },
    traverseReadonlyArrayWithIndexSeq: function() {
        return traverseReadonlyArrayWithIndexSeq;
    },
    URI: function() {
        return URI;
    },
    chain: function() {
        return chain;
    },
    asUnit: function() {
        return asUnit;
    },
    fromIO: function() {
        return fromIO;
    },
    ApT: function() {
        return ApT;
    },
    bind: function() {
        return bind;
    },
    fromTask: function() {
        return fromTask;
    },
    taskSeq: function() {
        return taskSeq;
    },
    bindTo: function() {
        return bindTo;
    },
    Do: function() {
        return Do;
    },
    chainIOK: function() {
        return chainIOK;
    },
    as: function() {
        return Task_as;
    },
    map: function() {
        return map;
    },
    MonadIO: function() {
        return MonadIO;
    },
    Pointed: function() {
        return Pointed;
    },
    apS: function() {
        return apS;
    },
    delay: function() {
        return delay;
    },
    ApplyPar: function() {
        return ApplyPar;
    },
    ApplicativePar: function() {
        return ApplicativePar;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    apSecond: function() {
        return apSecond;
    },
    Functor: function() {
        return Functor;
    },
    Monad: function() {
        return Monad;
    },
    of: function() {
        return of;
    },
    flap: function() {
        return flap;
    },
    apFirst: function() {
        return apFirst;
    },
    getRaceMonoid: function() {
        return getRaceMonoid;
    },
    ap: function() {
        return ap;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    task: function() {
        return task;
    },
    traverseReadonlyNonEmptyArrayWithIndexSeq: function() {
        return traverseReadonlyNonEmptyArrayWithIndexSeq;
    },
    MonadTask: function() {
        return MonadTask;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = null == arr ? null : "u" > typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null == _i) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && null != _i["return"]) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if ("string" == typeof o) return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) n = o.constructor.name;
    if ("Map" === n || "Set" === n) return Array.from(n);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var fromIO = function(ma) {
    return function() {
        return Promise.resolve().then(ma);
    };
};
function delay(millis) {
    return function(ma) {
        return function() {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    Promise.resolve().then(ma).then(resolve);
                }, millis);
            });
        };
    };
}
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _apPar = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var _apSeq = function(fab, fa) {
    return flatMap(fab, function(f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
    });
};
var map = function(f) {
    return function(fa) {
        return function() {
            return Promise.resolve().then(fa).then(f);
        };
    };
};
var ap = function(fa) {
    return function(fab) {
        return function() {
            return Promise.all([
                Promise.resolve().then(fab),
                Promise.resolve().then(fa)
            ]).then(function(param) {
                var _param = _sliced_to_array(param, 2), f = _param[0], a = _param[1];
                return f(a);
            });
        };
    };
};
var of = function(a) {
    return function() {
        return Promise.resolve(a);
    };
};
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return function() {
        return Promise.resolve().then(ma).then(function(a) {
            return f(a)();
        });
    };
});
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var URI = 'Task';
function getRaceMonoid() {
    return {
        concat: function(x, y) {
            return function() {
                return Promise.race([
                    Promise.resolve().then(x),
                    Promise.resolve().then(y)
                ]);
            };
        },
        empty: never
    };
}
var Functor = {
    URI: URI,
    map: _map
};
var Task_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
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
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(ApplyPar);
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
    of: of,
    ap: _apPar,
    chain: flatMap
};
var MonadIO = {
    URI: URI,
    map: _map,
    of: of,
    ap: _apPar,
    chain: flatMap,
    fromIO: fromIO
};
var fromTask = external_function_js_namespaceObject.identity;
var MonadTask = {
    URI: URI,
    map: _map,
    of: of,
    ap: _apPar,
    chain: flatMap,
    fromIO: fromIO,
    fromTask: fromTask
};
var FromIO = {
    URI: URI,
    fromIO: fromIO
};
var _FlatMap = {
    flatMap: flatMap
};
var _FromIO = {
    fromIO: FromIO.fromIO
};
var flatMapIO = external_internal_js_namespaceObject.flatMapIO(_FromIO, _FlatMap);
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var tapIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromIO_js_namespaceObject.tapIO)(FromIO, Chain));
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var chainIOK = flatMapIO;
var chainFirstIOK = tapIO;
var FromTask = {
    URI: URI,
    fromIO: fromIO,
    fromTask: fromTask
};
var never = function() {
    return new Promise(function(_) {});
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(ApplyPar);
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        return function() {
            return Promise.all(as.map(function(a, i) {
                return Promise.resolve().then(function() {
                    return f(i, a)();
                });
            }));
        };
    };
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
                return acc.then(function(bs) {
                    return Promise.resolve().then(f(i + 1, a)).then(function(b) {
                        bs.push(b);
                        return bs;
                    });
                });
            }, Promise.resolve().then(f(0, external_internal_js_namespaceObject.head(as))).then(external_internal_js_namespaceObject.singleton));
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
var chainFirst = tap;
var task = {
    URI: URI,
    map: _map,
    of: of,
    ap: _apPar,
    chain: flatMap,
    fromIO: fromIO,
    fromTask: fromTask
};
var taskSeq = {
    URI: URI,
    map: _map,
    of: of,
    ap: _apSeq,
    chain: flatMap,
    fromIO: fromIO,
    fromTask: fromTask
};
var getSemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(ApplySeq);
var getMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(ApplicativeSeq);
exports.ApT = __webpack_exports__.ApT;
exports.ApplicativePar = __webpack_exports__.ApplicativePar;
exports.ApplicativeSeq = __webpack_exports__.ApplicativeSeq;
exports.ApplyPar = __webpack_exports__.ApplyPar;
exports.ApplySeq = __webpack_exports__.ApplySeq;
exports.Chain = __webpack_exports__.Chain;
exports.Do = __webpack_exports__.Do;
exports.FromIO = __webpack_exports__.FromIO;
exports.FromTask = __webpack_exports__.FromTask;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
exports.MonadTask = __webpack_exports__.MonadTask;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.delay = __webpack_exports__.delay;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatten = __webpack_exports__.flatten;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromTask = __webpack_exports__.fromTask;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getRaceMonoid = __webpack_exports__.getRaceMonoid;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports["let"] = __webpack_exports__["let"];
exports.map = __webpack_exports__.map;
exports.never = __webpack_exports__.never;
exports.of = __webpack_exports__.of;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.sequenceSeqArray = __webpack_exports__.sequenceSeqArray;
exports.tap = __webpack_exports__.tap;
exports.tapIO = __webpack_exports__.tapIO;
exports.task = __webpack_exports__.task;
exports.taskSeq = __webpack_exports__.taskSeq;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyArrayWithIndexSeq;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndexSeq;
exports.traverseSeqArray = __webpack_exports__.traverseSeqArray;
exports.traverseSeqArrayWithIndex = __webpack_exports__.traverseSeqArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ApT",
    "ApplicativePar",
    "ApplicativeSeq",
    "ApplyPar",
    "ApplySeq",
    "Chain",
    "Do",
    "FromIO",
    "FromTask",
    "Functor",
    "Monad",
    "MonadIO",
    "MonadTask",
    "Pointed",
    "URI",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "as",
    "asUnit",
    "bind",
    "bindTo",
    "chain",
    "chainFirst",
    "chainFirstIOK",
    "chainIOK",
    "delay",
    "flap",
    "flatMap",
    "flatMapIO",
    "flatten",
    "fromIO",
    "fromIOK",
    "fromTask",
    "getMonoid",
    "getRaceMonoid",
    "getSemigroup",
    "let",
    "map",
    "never",
    "of",
    "sequenceArray",
    "sequenceSeqArray",
    "tap",
    "tapIO",
    "task",
    "taskSeq",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyArrayWithIndexSeq",
    "traverseReadonlyNonEmptyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndexSeq",
    "traverseSeqArray",
    "traverseSeqArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
