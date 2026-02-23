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
    first: function() {
        return first;
    },
    flattenW: function() {
        return flattenW;
    },
    chainFirst: function() {
        return chainFirst;
    },
    traverseArray: function() {
        return traverseArray;
    },
    compose: function() {
        return compose;
    },
    getMonoid: function() {
        return getMonoid;
    },
    apSecondW: function() {
        return apSecondW;
    },
    flatMap: function() {
        return flatMap;
    },
    Profunctor: function() {
        return Profunctor;
    },
    right: function() {
        return right;
    },
    tap: function() {
        return tap;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    local: function() {
        return local;
    },
    id: function() {
        return id;
    },
    let: function() {
        return let_;
    },
    promap: function() {
        return promap;
    },
    reader: function() {
        return reader;
    },
    chainW: function() {
        return chainW;
    },
    flatten: function() {
        return flatten;
    },
    apW: function() {
        return apW;
    },
    ask: function() {
        return ask;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    URI: function() {
        return URI;
    },
    Strong: function() {
        return Strong;
    },
    chain: function() {
        return chain;
    },
    asksReader: function() {
        return asksReader;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    ApT: function() {
        return ApT;
    },
    bind: function() {
        return bind;
    },
    asks: function() {
        return asks;
    },
    bindTo: function() {
        return bindTo;
    },
    bindW: function() {
        return bindW;
    },
    Do: function() {
        return Do;
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
    apSW: function() {
        return apSW;
    },
    Apply: function() {
        return Apply;
    },
    left: function() {
        return left;
    },
    asksReaderW: function() {
        return asksReaderW;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    apFirstW: function() {
        return apFirstW;
    },
    apSecond: function() {
        return apSecond;
    },
    Choice: function() {
        return Choice;
    },
    Functor: function() {
        return Functor;
    },
    Monad: function() {
        return Monad;
    },
    flap: function() {
        return flap;
    },
    apFirst: function() {
        return apFirst;
    },
    Category: function() {
        return Category;
    },
    ap: function() {
        return ap;
    },
    of: function() {
        return of;
    },
    second: function() {
        return second;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_Either_js_namespaceObject = require("./Either.js");
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
var ask = function() {
    return external_function_js_namespaceObject.identity;
};
var asks = external_function_js_namespaceObject.identity;
var local = function(f) {
    return function(ma) {
        return function(r2) {
            return ma(f(r2));
        };
    };
};
var asksReaderW = function(f) {
    return function(r) {
        return f(r)(r);
    };
};
var asksReader = asksReaderW;
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var _compose = function(bc, ab) {
    return (0, external_function_js_namespaceObject.pipe)(bc, compose(ab));
};
var _promap = function(fea, f, g) {
    return (0, external_function_js_namespaceObject.pipe)(fea, promap(f, g));
};
var map = function(f) {
    return function(fa) {
        return function(r) {
            return f(fa(r));
        };
    };
};
var apW = function(fa) {
    return function(fab) {
        return function(r) {
            return fab(r)(fa(r));
        };
    };
};
var ap = apW;
var of = external_function_js_namespaceObject.constant;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return function(r) {
        return f(ma(r))(r);
    };
});
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var compose = function(ab) {
    return function(bc) {
        return (0, external_function_js_namespaceObject.flow)(ab, bc);
    };
};
var promap = function(f, g) {
    return function(fea) {
        return function(a) {
            return g(fea(f(a)));
        };
    };
};
var id = function() {
    return external_function_js_namespaceObject.identity;
};
var first = function(pab) {
    return function(param) {
        var _param = _sliced_to_array(param, 2), a = _param[0], c = _param[1];
        return [
            pab(a),
            c
        ];
    };
};
var second = function(pbc) {
    return function(param) {
        var _param = _sliced_to_array(param, 2), a = _param[0], b = _param[1];
        return [
            a,
            pbc(b)
        ];
    };
};
var left = function(pab) {
    return external_Either_js_namespaceObject.fold(function(a) {
        return external_internal_js_namespaceObject.left(pab(a));
    }, external_Either_js_namespaceObject.right);
};
var right = function(pbc) {
    return external_Either_js_namespaceObject.fold(external_Either_js_namespaceObject.left, function(b) {
        return external_internal_js_namespaceObject.right(pbc(b));
    });
};
var URI = 'Reader';
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
var apFirstW = apFirst;
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(Apply);
var apSecondW = apSecond;
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
    of: of,
    ap: _ap,
    chain: flatMap
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var Profunctor = {
    URI: URI,
    map: _map,
    promap: _promap
};
var Category = {
    URI: URI,
    compose: _compose,
    id: id
};
var Strong = {
    URI: URI,
    map: _map,
    promap: _promap,
    first: first,
    second: second
};
var Choice = {
    URI: URI,
    map: _map,
    promap: _promap,
    left: left,
    right: right
};
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var apSW = apS;
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        return function(r) {
            var out = [
                f(0, external_internal_js_namespaceObject.head(as))(r)
            ];
            for(var i = 1; i < as.length; i++)out.push(f(i, as[i])(r));
            return out;
        };
    };
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
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
var chainW = flatMap;
var chain = flatMap;
var chainFirst = tap;
var chainFirstW = tap;
var reader = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    promap: _promap,
    compose: _compose,
    id: id,
    first: first,
    second: second,
    left: left,
    right: right
};
var getSemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(Apply);
var getMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(Applicative);
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Category = __webpack_exports__.Category;
exports.Chain = __webpack_exports__.Chain;
exports.Choice = __webpack_exports__.Choice;
exports.Do = __webpack_exports__.Do;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.Pointed = __webpack_exports__.Pointed;
exports.Profunctor = __webpack_exports__.Profunctor;
exports.Strong = __webpack_exports__.Strong;
exports.URI = __webpack_exports__.URI;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apFirstW = __webpack_exports__.apFirstW;
exports.apS = __webpack_exports__.apS;
exports.apSW = __webpack_exports__.apSW;
exports.apSecond = __webpack_exports__.apSecond;
exports.apSecondW = __webpack_exports__.apSecondW;
exports.apW = __webpack_exports__.apW;
exports.ask = __webpack_exports__.ask;
exports.asks = __webpack_exports__.asks;
exports.asksReader = __webpack_exports__.asksReader;
exports.asksReaderW = __webpack_exports__.asksReaderW;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.bindW = __webpack_exports__.bindW;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainW = __webpack_exports__.chainW;
exports.compose = __webpack_exports__.compose;
exports.first = __webpack_exports__.first;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.id = __webpack_exports__.id;
exports.left = __webpack_exports__.left;
exports["let"] = __webpack_exports__["let"];
exports.local = __webpack_exports__.local;
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
exports.promap = __webpack_exports__.promap;
exports.reader = __webpack_exports__.reader;
exports.right = __webpack_exports__.right;
exports.second = __webpack_exports__.second;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.tap = __webpack_exports__.tap;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ApT",
    "Applicative",
    "Apply",
    "Category",
    "Chain",
    "Choice",
    "Do",
    "Functor",
    "Monad",
    "Pointed",
    "Profunctor",
    "Strong",
    "URI",
    "ap",
    "apFirst",
    "apFirstW",
    "apS",
    "apSW",
    "apSecond",
    "apSecondW",
    "apW",
    "ask",
    "asks",
    "asksReader",
    "asksReaderW",
    "bind",
    "bindTo",
    "bindW",
    "chain",
    "chainFirst",
    "chainFirstW",
    "chainW",
    "compose",
    "first",
    "flap",
    "flatMap",
    "flatten",
    "flattenW",
    "getMonoid",
    "getSemigroup",
    "id",
    "left",
    "let",
    "local",
    "map",
    "of",
    "promap",
    "reader",
    "right",
    "second",
    "sequenceArray",
    "tap",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
