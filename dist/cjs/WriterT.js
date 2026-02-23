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
    getWriterM: function() {
        return getWriterM;
    }
});
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
function getWriterM(M) {
    var map = function(fa, f) {
        return function() {
            return M.map(fa(), function(param) {
                var _param = _sliced_to_array(param, 2), a = _param[0], w = _param[1];
                return [
                    f(a),
                    w
                ];
            });
        };
    };
    return {
        map: map,
        evalWriter: function(fa) {
            return M.map(fa(), function(param) {
                var _param = _sliced_to_array(param, 1), a = _param[0];
                return a;
            });
        },
        execWriter: function(fa) {
            return M.map(fa(), function(param) {
                var _param = _sliced_to_array(param, 2), w = (_param[0], _param[1]);
                return w;
            });
        },
        tell: function(w) {
            return function() {
                return M.of([
                    void 0,
                    w
                ]);
            };
        },
        listen: function(fa) {
            return function() {
                return M.map(fa(), function(param) {
                    var _param = _sliced_to_array(param, 2), a = _param[0], w = _param[1];
                    return [
                        [
                            a,
                            w
                        ],
                        w
                    ];
                });
            };
        },
        pass: function(fa) {
            return function() {
                return M.map(fa(), function(param) {
                    var _param = _sliced_to_array(param, 2), _param_ = _sliced_to_array(_param[0], 2), a = _param_[0], f = _param_[1], w = _param[1];
                    return [
                        a,
                        f(w)
                    ];
                });
            };
        },
        listens: function(fa, f) {
            return function() {
                return M.map(fa(), function(param) {
                    var _param = _sliced_to_array(param, 2), a = _param[0], w = _param[1];
                    return [
                        [
                            a,
                            f(w)
                        ],
                        w
                    ];
                });
            };
        },
        censor: function(fa, f) {
            return function() {
                return M.map(fa(), function(param) {
                    var _param = _sliced_to_array(param, 2), a = _param[0], w = _param[1];
                    return [
                        a,
                        f(w)
                    ];
                });
            };
        },
        getMonad: function(W) {
            return {
                _E: void 0,
                map: map,
                of: function(a) {
                    return function() {
                        return M.of([
                            a,
                            W.empty
                        ]);
                    };
                },
                ap: function(mab, ma) {
                    return function() {
                        return M.chain(mab(), function(param) {
                            var _param = _sliced_to_array(param, 2), f = _param[0], w1 = _param[1];
                            return M.map(ma(), function(param) {
                                var _param = _sliced_to_array(param, 2), a = _param[0], w2 = _param[1];
                                return [
                                    f(a),
                                    W.concat(w1, w2)
                                ];
                            });
                        });
                    };
                },
                chain: function(ma, f) {
                    return function() {
                        return M.chain(ma(), function(param) {
                            var _param = _sliced_to_array(param, 2), a = _param[0], w1 = _param[1];
                            return M.map(f(a)(), function(param) {
                                var _param = _sliced_to_array(param, 2), b = _param[0], w2 = _param[1];
                                return [
                                    b,
                                    W.concat(w1, w2)
                                ];
                            });
                        });
                    };
                }
            };
        }
    };
}
exports.getWriterM = __webpack_exports__.getWriterM;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getWriterM"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
