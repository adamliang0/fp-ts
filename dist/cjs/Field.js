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
    fieldNumber: function() {
        return fieldNumber;
    },
    gcd: function() {
        return gcd;
    },
    lcm: function() {
        return lcm;
    }
});
function gcd(E, field) {
    var zero = field.zero;
    var f = function(x, y) {
        return E.equals(y, zero) ? x : f(y, field.mod(x, y));
    };
    return f;
}
function lcm(E, F) {
    var zero = F.zero;
    var gcdSF = gcd(E, F);
    return function(x, y) {
        return E.equals(x, zero) || E.equals(y, zero) ? zero : F.div(F.mul(x, y), gcdSF(x, y));
    };
}
var fieldNumber = {
    add: function(x, y) {
        return x + y;
    },
    zero: 0,
    mul: function(x, y) {
        return x * y;
    },
    one: 1,
    sub: function(x, y) {
        return x - y;
    },
    degree: function(_) {
        return 1;
    },
    div: function(x, y) {
        return x / y;
    },
    mod: function(x, y) {
        return x % y;
    }
};
exports.fieldNumber = __webpack_exports__.fieldNumber;
exports.gcd = __webpack_exports__.gcd;
exports.lcm = __webpack_exports__.lcm;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "fieldNumber",
    "gcd",
    "lcm"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
