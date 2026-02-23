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
    tuple: function() {
        return tuple;
    },
    getFunctionRing: function() {
        return getFunctionRing;
    },
    getTupleRing: function() {
        return getTupleRing;
    },
    negate: function() {
        return negate;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var tuple = function() {
    for(var _len = arguments.length, rings = new Array(_len), _key = 0; _key < _len; _key++)rings[_key] = arguments[_key];
    return {
        add: function(x, y) {
            return rings.map(function(R, i) {
                return R.add(x[i], y[i]);
            });
        },
        zero: rings.map(function(R) {
            return R.zero;
        }),
        mul: function(x, y) {
            return rings.map(function(R, i) {
                return R.mul(x[i], y[i]);
            });
        },
        one: rings.map(function(R) {
            return R.one;
        }),
        sub: function(x, y) {
            return rings.map(function(R, i) {
                return R.sub(x[i], y[i]);
            });
        }
    };
};
var negate = function(R) {
    return function(a) {
        return R.sub(R.zero, a);
    };
};
var getTupleRing = tuple;
var getFunctionRing = external_function_js_namespaceObject.getRing;
exports.getFunctionRing = __webpack_exports__.getFunctionRing;
exports.getTupleRing = __webpack_exports__.getTupleRing;
exports.negate = __webpack_exports__.negate;
exports.tuple = __webpack_exports__.tuple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getFunctionRing",
    "getTupleRing",
    "negate",
    "tuple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
