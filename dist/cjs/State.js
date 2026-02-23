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
    Applicative: function() {
        return Applicative;
    },
    Chain: function() {
        return Chain;
    },
    traverseArray: function() {
        return traverseArray;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    chainFirst: function() {
        return chainFirst;
    },
    execute: function() {
        return execute;
    },
    get: function() {
        return get;
    },
    tap: function() {
        return tap;
    },
    flatMap: function() {
        return flatMap;
    },
    put: function() {
        return put;
    },
    gets: function() {
        return gets;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    let: function() {
        return let_;
    },
    state: function() {
        return state;
    },
    flatten: function() {
        return flatten;
    },
    URI: function() {
        return URI;
    },
    chain: function() {
        return chain;
    },
    bind: function() {
        return bind;
    },
    bindTo: function() {
        return bindTo;
    },
    FromState: function() {
        return FromState;
    },
    map: function() {
        return map;
    },
    apS: function() {
        return apS;
    },
    Pointed: function() {
        return Pointed;
    },
    Apply: function() {
        return Apply;
    },
    evalState: function() {
        return evalState;
    },
    apSecond: function() {
        return apSecond;
    },
    Monad: function() {
        return Monad;
    },
    Functor: function() {
        return Functor;
    },
    evaluate: function() {
        return evaluate;
    },
    flap: function() {
        return flap;
    },
    apFirst: function() {
        return apFirst;
    },
    of: function() {
        return of;
    },
    ap: function() {
        return ap;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    modify: function() {
        return modify;
    },
    execState: function() {
        return execState;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
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
var get = function() {
    return function(s) {
        return [
            s,
            s
        ];
    };
};
var put = function(s) {
    return function() {
        return [
            void 0,
            s
        ];
    };
};
var modify = function(f) {
    return function(s) {
        return [
            void 0,
            f(s)
        ];
    };
};
var gets = function(f) {
    return function(s) {
        return [
            f(s),
            s
        ];
    };
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var map = function(f) {
    return function(fa) {
        return function(s1) {
            var _fa = _sliced_to_array(fa(s1), 2), a = _fa[0], s2 = _fa[1];
            return [
                f(a),
                s2
            ];
        };
    };
};
var ap = function(fa) {
    return function(fab) {
        return function(s1) {
            var _fab = _sliced_to_array(fab(s1), 2), f = _fab[0], s2 = _fab[1];
            var _fa = _sliced_to_array(fa(s2), 2), a = _fa[0], s3 = _fa[1];
            return [
                f(a),
                s3
            ];
        };
    };
};
var of = function(a) {
    return function(s) {
        return [
            a,
            s
        ];
    };
};
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return function(s1) {
        var _ma = _sliced_to_array(ma(s1), 2), a = _ma[0], s2 = _ma[1];
        return f(a)(s2);
    };
});
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var URI = 'State';
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
var apFirst = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apFirst)(Apply);
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(Apply);
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var FromState = {
    URI: URI,
    fromState: external_function_js_namespaceObject.identity
};
var evaluate = function(s) {
    return function(ma) {
        return ma(s)[0];
    };
};
var execute = function(s) {
    return function(ma) {
        return ma(s)[1];
    };
};
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        return function(s) {
            var _f = _sliced_to_array(f(0, external_internal_js_namespaceObject.head(as))(s), 2), b = _f[0], s2 = _f[1];
            var bs = [
                b
            ];
            var out = s2;
            for(var i = 1; i < as.length; i++){
                var _f1 = _sliced_to_array(f(i, as[i])(out), 2), b1 = _f1[0], s21 = _f1[1];
                bs.push(b1);
                out = s21;
            }
            return [
                bs,
                out
            ];
        };
    };
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : of(external_internal_js_namespaceObject.emptyReadonlyArray);
    };
};
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
var traverseArray = function(f) {
    return traverseReadonlyArrayWithIndex(function(_, a) {
        return f(a);
    });
};
var sequenceArray = /*#__PURE__*/ traverseArray(external_function_js_namespaceObject.identity);
var chain = flatMap;
var chainFirst = tap;
var evalState = function(ma, s) {
    return ma(s)[0];
};
var execState = function(ma, s) {
    return ma(s)[1];
};
var state = Monad;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.FromState = __webpack_exports__.FromState;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.evalState = __webpack_exports__.evalState;
exports.evaluate = __webpack_exports__.evaluate;
exports.execState = __webpack_exports__.execState;
exports.execute = __webpack_exports__.execute;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatten = __webpack_exports__.flatten;
exports.get = __webpack_exports__.get;
exports.gets = __webpack_exports__.gets;
exports["let"] = __webpack_exports__["let"];
exports.map = __webpack_exports__.map;
exports.modify = __webpack_exports__.modify;
exports.of = __webpack_exports__.of;
exports.put = __webpack_exports__.put;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.state = __webpack_exports__.state;
exports.tap = __webpack_exports__.tap;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Applicative",
    "Apply",
    "Chain",
    "FromState",
    "Functor",
    "Monad",
    "Pointed",
    "URI",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "bind",
    "bindTo",
    "chain",
    "chainFirst",
    "evalState",
    "evaluate",
    "execState",
    "execute",
    "flap",
    "flatMap",
    "flatten",
    "get",
    "gets",
    "let",
    "map",
    "modify",
    "of",
    "put",
    "sequenceArray",
    "state",
    "tap",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
