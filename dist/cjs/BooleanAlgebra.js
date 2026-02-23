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
    getDualBooleanAlgebra: function() {
        return getDualBooleanAlgebra;
    },
    booleanAlgebraBoolean: function() {
        return booleanAlgebraBoolean;
    },
    booleanAlgebraVoid: function() {
        return booleanAlgebraVoid;
    },
    getFunctionBooleanAlgebra: function() {
        return getFunctionBooleanAlgebra;
    },
    reverse: function() {
        return reverse;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var reverse = function(B) {
    return {
        meet: function(x, y) {
            return B.join(x, y);
        },
        join: function(x, y) {
            return B.meet(x, y);
        },
        zero: B.one,
        one: B.zero,
        implies: function(x, y) {
            return B.join(B.not(x), y);
        },
        not: B.not
    };
};
var booleanAlgebraVoid = {
    meet: function() {},
    join: function() {},
    zero: void 0,
    one: void 0,
    implies: function() {},
    not: function() {}
};
var getDualBooleanAlgebra = reverse;
var booleanAlgebraBoolean = {
    meet: function(x, y) {
        return x && y;
    },
    join: function(x, y) {
        return x || y;
    },
    zero: false,
    one: true,
    implies: function(x, y) {
        return !x || y;
    },
    not: function(x) {
        return !x;
    }
};
var getFunctionBooleanAlgebra = external_function_js_namespaceObject.getBooleanAlgebra;
exports.booleanAlgebraBoolean = __webpack_exports__.booleanAlgebraBoolean;
exports.booleanAlgebraVoid = __webpack_exports__.booleanAlgebraVoid;
exports.getDualBooleanAlgebra = __webpack_exports__.getDualBooleanAlgebra;
exports.getFunctionBooleanAlgebra = __webpack_exports__.getFunctionBooleanAlgebra;
exports.reverse = __webpack_exports__.reverse;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "booleanAlgebraBoolean",
    "booleanAlgebraVoid",
    "getDualBooleanAlgebra",
    "getFunctionBooleanAlgebra",
    "reverse"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
