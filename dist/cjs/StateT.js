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
    fromState: function() {
        return fromState;
    },
    getStateM: function() {
        return getStateM;
    },
    evaluate: function() {
        return evaluate;
    },
    execute: function() {
        return execute;
    },
    fromF: function() {
        return fromF;
    },
    of: function() {
        return of;
    },
    chain: function() {
        return chain;
    },
    flatMap: function() {
        return flatMap;
    },
    map: function() {
        return map;
    },
    ap: function() {
        return ap;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_ReadonlyTuple_js_namespaceObject = require("./ReadonlyTuple.js");
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
function of(F) {
    return function(a) {
        return function(s) {
            return F.of([
                a,
                s
            ]);
        };
    };
}
function map(F) {
    return function(f) {
        return function(fa) {
            return function(s) {
                return F.map(fa(s), function(param) {
                    var _param = _sliced_to_array(param, 2), a = _param[0], s1 = _param[1];
                    return [
                        f(a),
                        s1
                    ];
                });
            };
        };
    };
}
function ap(M) {
    return function(fa) {
        return function(fab) {
            return function(s) {
                return M.chain(fab(s), function(param) {
                    var _param = _sliced_to_array(param, 2), f = _param[0], _$s = _param[1];
                    return M.map(fa(_$s), function(param) {
                        var _param = _sliced_to_array(param, 2), a = _param[0], _$s = _param[1];
                        return [
                            f(a),
                            _$s
                        ];
                    });
                });
            };
        };
    };
}
function chain(M) {
    var flatMapM = flatMap(M);
    return function(f) {
        return function(ma) {
            return flatMapM(ma, f);
        };
    };
}
function flatMap(M) {
    return function(ma, f) {
        return function(s) {
            return M.chain(ma(s), function(param) {
                var _param = _sliced_to_array(param, 2), a = _param[0], s1 = _param[1];
                return f(a)(s1);
            });
        };
    };
}
function fromState(F) {
    return function(sa) {
        return function(s) {
            return F.of(sa(s));
        };
    };
}
function fromF(F) {
    return function(ma) {
        return function(s) {
            return F.map(ma, function(a) {
                return [
                    a,
                    s
                ];
            });
        };
    };
}
function evaluate(F) {
    return function(s) {
        return function(ma) {
            return F.map(ma(s), function(param) {
                var _param = _sliced_to_array(param, 1), a = _param[0];
                return a;
            });
        };
    };
}
function execute(F) {
    return function(s) {
        return function(ma) {
            return F.map(ma(s), external_ReadonlyTuple_js_namespaceObject.snd);
        };
    };
}
function getStateM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    var _evaluate = evaluate(M);
    var _execute = execute(M);
    return {
        map: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _map(f));
        },
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, _ap(fa));
        },
        of: of(M),
        chain: function(ma, f) {
            return (0, external_function_js_namespaceObject.pipe)(ma, _chain(f));
        },
        get: function() {
            return function(s) {
                return M.of([
                    s,
                    s
                ]);
            };
        },
        put: function(s) {
            return function() {
                return M.of([
                    void 0,
                    s
                ]);
            };
        },
        modify: function(f) {
            return function(s) {
                return M.of([
                    void 0,
                    f(s)
                ]);
            };
        },
        gets: function(f) {
            return function(s) {
                return M.of([
                    f(s),
                    s
                ]);
            };
        },
        fromState: fromState(M),
        fromM: fromF(M),
        evalState: function(fa, s) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _evaluate(s));
        },
        execState: function(fa, s) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _execute(s));
        }
    };
}
exports.ap = __webpack_exports__.ap;
exports.chain = __webpack_exports__.chain;
exports.evaluate = __webpack_exports__.evaluate;
exports.execute = __webpack_exports__.execute;
exports.flatMap = __webpack_exports__.flatMap;
exports.fromF = __webpack_exports__.fromF;
exports.fromState = __webpack_exports__.fromState;
exports.getStateM = __webpack_exports__.getStateM;
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ap",
    "chain",
    "evaluate",
    "execute",
    "flatMap",
    "fromF",
    "fromState",
    "getStateM",
    "map",
    "of"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
