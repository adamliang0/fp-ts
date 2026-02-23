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
    Bounded: function() {
        return Bounded;
    },
    Eq: function() {
        return Eq;
    },
    Field: function() {
        return Field;
    },
    MagmaSub: function() {
        return MagmaSub;
    },
    MonoidProduct: function() {
        return MonoidProduct;
    },
    MonoidSum: function() {
        return MonoidSum;
    },
    Ord: function() {
        return Ord;
    },
    SemigroupProduct: function() {
        return SemigroupProduct;
    },
    SemigroupSum: function() {
        return SemigroupSum;
    },
    Show: function() {
        return Show;
    },
    isNumber: function() {
        return isNumber;
    }
});
var isNumber = function(u) {
    return 'number' == typeof u;
};
var Eq = {
    equals: function(first, second) {
        return first === second;
    }
};
var Ord = {
    equals: Eq.equals,
    compare: function(first, second) {
        return first < second ? -1 : first > second ? 1 : 0;
    }
};
var Bounded = {
    equals: Eq.equals,
    compare: Ord.compare,
    top: 1 / 0,
    bottom: -1 / 0
};
var Show = {
    show: function(n) {
        return JSON.stringify(n);
    }
};
var MagmaSub = {
    concat: function(first, second) {
        return first - second;
    }
};
var SemigroupSum = {
    concat: function(first, second) {
        return first + second;
    }
};
var SemigroupProduct = {
    concat: function(first, second) {
        return first * second;
    }
};
var MonoidSum = {
    concat: SemigroupSum.concat,
    empty: 0
};
var MonoidProduct = {
    concat: SemigroupProduct.concat,
    empty: 1
};
var Field = {
    add: SemigroupSum.concat,
    zero: 0,
    mul: SemigroupProduct.concat,
    one: 1,
    sub: MagmaSub.concat,
    degree: function(_) {
        return 1;
    },
    div: function(first, second) {
        return first / second;
    },
    mod: function(first, second) {
        return first % second;
    }
};
exports.Bounded = __webpack_exports__.Bounded;
exports.Eq = __webpack_exports__.Eq;
exports.Field = __webpack_exports__.Field;
exports.MagmaSub = __webpack_exports__.MagmaSub;
exports.MonoidProduct = __webpack_exports__.MonoidProduct;
exports.MonoidSum = __webpack_exports__.MonoidSum;
exports.Ord = __webpack_exports__.Ord;
exports.SemigroupProduct = __webpack_exports__.SemigroupProduct;
exports.SemigroupSum = __webpack_exports__.SemigroupSum;
exports.Show = __webpack_exports__.Show;
exports.isNumber = __webpack_exports__.isNumber;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Bounded",
    "Eq",
    "Field",
    "MagmaSub",
    "MonoidProduct",
    "MonoidSum",
    "Ord",
    "SemigroupProduct",
    "SemigroupSum",
    "Show",
    "isNumber"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
