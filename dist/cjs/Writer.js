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
    execWriter: function() {
        return execWriter;
    },
    execute: function() {
        return execute;
    },
    evalWriter: function() {
        return evalWriter;
    },
    getMonad: function() {
        return getMonad;
    },
    map: function() {
        return map;
    },
    pass: function() {
        return pass;
    },
    censor: function() {
        return censor;
    },
    listens: function() {
        return listens;
    },
    writer: function() {
        return writer;
    },
    getApply: function() {
        return getApply;
    },
    getChain: function() {
        return getChain;
    },
    evaluate: function() {
        return evaluate;
    },
    Functor: function() {
        return Functor;
    },
    getPointed: function() {
        return getPointed;
    },
    listen: function() {
        return listen;
    },
    URI: function() {
        return URI;
    },
    flap: function() {
        return flap;
    },
    tell: function() {
        return tell;
    },
    getApplicative: function() {
        return getApplicative;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
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
var tell = function(w) {
    return function() {
        return [
            void 0,
            w
        ];
    };
};
var listen = function(fa) {
    return function() {
        var _fa = _sliced_to_array(fa(), 2), a = _fa[0], w = _fa[1];
        return [
            [
                a,
                w
            ],
            w
        ];
    };
};
var pass = function(fa) {
    return function() {
        var _fa = _sliced_to_array(fa(), 2), _fa_ = _sliced_to_array(_fa[0], 2), a = _fa_[0], f = _fa_[1], w = _fa[1];
        return [
            a,
            f(w)
        ];
    };
};
var listens = function(f) {
    return function(fa) {
        return function() {
            var _fa = _sliced_to_array(fa(), 2), a = _fa[0], w = _fa[1];
            return [
                [
                    a,
                    f(w)
                ],
                w
            ];
        };
    };
};
var censor = function(f) {
    return function(fa) {
        return function() {
            var _fa = _sliced_to_array(fa(), 2), a = _fa[0], w = _fa[1];
            return [
                a,
                f(w)
            ];
        };
    };
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var map = function(f) {
    return function(fa) {
        return function() {
            var _fa = _sliced_to_array(fa(), 2), a = _fa[0], w = _fa[1];
            return [
                f(a),
                w
            ];
        };
    };
};
var URI = 'Writer';
var getPointed = function(M) {
    return {
        URI: URI,
        _E: void 0,
        of: function(a) {
            return function() {
                return [
                    a,
                    M.empty
                ];
            };
        }
    };
};
var getApply = function(S) {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return function() {
                var _fab = _sliced_to_array(fab(), 2), f = _fab[0], w1 = _fab[1];
                var _fa = _sliced_to_array(fa(), 2), a = _fa[0], w2 = _fa[1];
                return [
                    f(a),
                    S.concat(w1, w2)
                ];
            };
        }
    };
};
var getApplicative = function(M) {
    var A = getApply(M);
    var P = getPointed(M);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: P.of
    };
};
function getChain(S) {
    var A = getApply(S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: function(fa, f) {
            return function() {
                var _fa = _sliced_to_array(fa(), 2), a = _fa[0], w1 = _fa[1];
                var _f = _sliced_to_array(f(a)(), 2), b = _f[0], w2 = _f[1];
                return [
                    b,
                    S.concat(w1, w2)
                ];
            };
        }
    };
}
function getMonad(M) {
    var A = getApplicative(M);
    var C = getChain(M);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: A.of,
        chain: C.chain
    };
}
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var evaluate = function(fa) {
    return fa()[0];
};
var execute = function(fa) {
    return fa()[1];
};
var evalWriter = function(fa) {
    return fa()[0];
};
var execWriter = function(fa) {
    return fa()[1];
};
var writer = Functor;
exports.Functor = __webpack_exports__.Functor;
exports.URI = __webpack_exports__.URI;
exports.censor = __webpack_exports__.censor;
exports.evalWriter = __webpack_exports__.evalWriter;
exports.evaluate = __webpack_exports__.evaluate;
exports.execWriter = __webpack_exports__.execWriter;
exports.execute = __webpack_exports__.execute;
exports.flap = __webpack_exports__.flap;
exports.getApplicative = __webpack_exports__.getApplicative;
exports.getApply = __webpack_exports__.getApply;
exports.getChain = __webpack_exports__.getChain;
exports.getMonad = __webpack_exports__.getMonad;
exports.getPointed = __webpack_exports__.getPointed;
exports.listen = __webpack_exports__.listen;
exports.listens = __webpack_exports__.listens;
exports.map = __webpack_exports__.map;
exports.pass = __webpack_exports__.pass;
exports.tell = __webpack_exports__.tell;
exports.writer = __webpack_exports__.writer;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Functor",
    "URI",
    "censor",
    "evalWriter",
    "evaluate",
    "execWriter",
    "execute",
    "flap",
    "getApplicative",
    "getApply",
    "getChain",
    "getMonad",
    "getPointed",
    "listen",
    "listens",
    "map",
    "pass",
    "tell",
    "writer"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
