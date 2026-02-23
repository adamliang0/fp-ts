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
    getJoinMonoid: function() {
        return getJoinMonoid;
    },
    monoidVoid: function() {
        return monoidVoid;
    },
    struct: function() {
        return struct;
    },
    getDualMonoid: function() {
        return getDualMonoid;
    },
    tuple: function() {
        return tuple;
    },
    fold: function() {
        return fold;
    },
    monoidAll: function() {
        return monoidAll;
    },
    monoidAny: function() {
        return monoidAny;
    },
    getEndomorphismMonoid: function() {
        return getEndomorphismMonoid;
    },
    getMeetMonoid: function() {
        return getMeetMonoid;
    },
    getTupleMonoid: function() {
        return getTupleMonoid;
    },
    monoidProduct: function() {
        return monoidProduct;
    },
    monoidSum: function() {
        return monoidSum;
    },
    reverse: function() {
        return reverse;
    },
    concatAll: function() {
        return concatAll;
    },
    getFunctionMonoid: function() {
        return getFunctionMonoid;
    },
    getStructMonoid: function() {
        return getStructMonoid;
    },
    monoidString: function() {
        return monoidString;
    },
    max: function() {
        return max;
    },
    min: function() {
        return min;
    }
});
var external_Endomorphism_js_namespaceObject = require("./Endomorphism.js");
var external_function_js_namespaceObject = require("./function.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Semigroup_js_namespaceObject = require("./Semigroup.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
var _Se;
var min = function(B) {
    return {
        concat: external_Semigroup_js_namespaceObject.min(B).concat,
        empty: B.top
    };
};
var max = function(B) {
    return {
        concat: external_Semigroup_js_namespaceObject.max(B).concat,
        empty: B.bottom
    };
};
var reverse = function(M) {
    return {
        concat: external_Semigroup_js_namespaceObject.reverse(M).concat,
        empty: M.empty
    };
};
var struct = function(monoids) {
    var empty = {};
    for(var k in monoids)if (external_internal_js_namespaceObject.has.call(monoids, k)) empty[k] = monoids[k].empty;
    return {
        concat: external_Semigroup_js_namespaceObject.struct(monoids).concat,
        empty: empty
    };
};
var tuple = function() {
    for(var _len = arguments.length, monoids = new Array(_len), _key = 0; _key < _len; _key++)monoids[_key] = arguments[_key];
    return {
        concat: (_Se = external_Semigroup_js_namespaceObject).tuple.apply(_Se, _to_consumable_array(monoids)).concat,
        empty: monoids.map(function(m) {
            return m.empty;
        })
    };
};
var concatAll = function(M) {
    return external_Semigroup_js_namespaceObject.concatAll(M)(M.empty);
};
var monoidVoid = {
    concat: external_Semigroup_js_namespaceObject.semigroupVoid.concat,
    empty: void 0
};
var getTupleMonoid = tuple;
var getStructMonoid = struct;
var getDualMonoid = reverse;
var getJoinMonoid = max;
var getMeetMonoid = min;
var fold = concatAll;
var monoidAll = {
    concat: external_Semigroup_js_namespaceObject.semigroupAll.concat,
    empty: true
};
var monoidAny = {
    concat: external_Semigroup_js_namespaceObject.semigroupAny.concat,
    empty: false
};
var getFunctionMonoid = external_function_js_namespaceObject.getMonoid;
var getEndomorphismMonoid = function() {
    return reverse((0, external_Endomorphism_js_namespaceObject.getMonoid)());
};
var monoidString = {
    concat: external_Semigroup_js_namespaceObject.semigroupString.concat,
    empty: ''
};
var monoidSum = {
    concat: external_Semigroup_js_namespaceObject.semigroupSum.concat,
    empty: 0
};
var monoidProduct = {
    concat: external_Semigroup_js_namespaceObject.semigroupProduct.concat,
    empty: 1
};
exports.concatAll = __webpack_exports__.concatAll;
exports.fold = __webpack_exports__.fold;
exports.getDualMonoid = __webpack_exports__.getDualMonoid;
exports.getEndomorphismMonoid = __webpack_exports__.getEndomorphismMonoid;
exports.getFunctionMonoid = __webpack_exports__.getFunctionMonoid;
exports.getJoinMonoid = __webpack_exports__.getJoinMonoid;
exports.getMeetMonoid = __webpack_exports__.getMeetMonoid;
exports.getStructMonoid = __webpack_exports__.getStructMonoid;
exports.getTupleMonoid = __webpack_exports__.getTupleMonoid;
exports.max = __webpack_exports__.max;
exports.min = __webpack_exports__.min;
exports.monoidAll = __webpack_exports__.monoidAll;
exports.monoidAny = __webpack_exports__.monoidAny;
exports.monoidProduct = __webpack_exports__.monoidProduct;
exports.monoidString = __webpack_exports__.monoidString;
exports.monoidSum = __webpack_exports__.monoidSum;
exports.monoidVoid = __webpack_exports__.monoidVoid;
exports.reverse = __webpack_exports__.reverse;
exports.struct = __webpack_exports__.struct;
exports.tuple = __webpack_exports__.tuple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "concatAll",
    "fold",
    "getDualMonoid",
    "getEndomorphismMonoid",
    "getFunctionMonoid",
    "getJoinMonoid",
    "getMeetMonoid",
    "getStructMonoid",
    "getTupleMonoid",
    "max",
    "min",
    "monoidAll",
    "monoidAny",
    "monoidProduct",
    "monoidString",
    "monoidSum",
    "monoidVoid",
    "reverse",
    "struct",
    "tuple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
