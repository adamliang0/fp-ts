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
    BooleanAlgebra: function() {
        return BooleanAlgebra;
    },
    Eq: function() {
        return Eq;
    },
    MonoidAll: function() {
        return MonoidAll;
    },
    MonoidAny: function() {
        return MonoidAny;
    },
    Ord: function() {
        return Ord;
    },
    SemigroupAll: function() {
        return SemigroupAll;
    },
    SemigroupAny: function() {
        return SemigroupAny;
    },
    Show: function() {
        return Show;
    },
    fold: function() {
        return fold;
    },
    foldW: function() {
        return foldW;
    },
    isBoolean: function() {
        return isBoolean;
    },
    match: function() {
        return match;
    },
    matchW: function() {
        return matchW;
    }
});
var isBoolean = function(u) {
    return 'boolean' == typeof u;
};
var matchW = function(onFalse, onTrue) {
    return function(value) {
        return value ? onTrue() : onFalse();
    };
};
var foldW = matchW;
var match = foldW;
var fold = match;
var Eq = {
    equals: function(first, second) {
        return first === second;
    }
};
var BooleanAlgebra = {
    meet: function(first, second) {
        return first && second;
    },
    join: function(first, second) {
        return first || second;
    },
    zero: false,
    one: true,
    implies: function(first, second) {
        return !first || second;
    },
    not: function(b) {
        return !b;
    }
};
var SemigroupAll = {
    concat: function(first, second) {
        return first && second;
    }
};
var SemigroupAny = {
    concat: function(first, second) {
        return first || second;
    }
};
var MonoidAll = {
    concat: SemigroupAll.concat,
    empty: true
};
var MonoidAny = {
    concat: SemigroupAny.concat,
    empty: false
};
var Ord = {
    equals: Eq.equals,
    compare: function(first, second) {
        return first < second ? -1 : first > second ? 1 : 0;
    }
};
var Show = {
    show: function(b) {
        return JSON.stringify(b);
    }
};
exports.BooleanAlgebra = __webpack_exports__.BooleanAlgebra;
exports.Eq = __webpack_exports__.Eq;
exports.MonoidAll = __webpack_exports__.MonoidAll;
exports.MonoidAny = __webpack_exports__.MonoidAny;
exports.Ord = __webpack_exports__.Ord;
exports.SemigroupAll = __webpack_exports__.SemigroupAll;
exports.SemigroupAny = __webpack_exports__.SemigroupAny;
exports.Show = __webpack_exports__.Show;
exports.fold = __webpack_exports__.fold;
exports.foldW = __webpack_exports__.foldW;
exports.isBoolean = __webpack_exports__.isBoolean;
exports.match = __webpack_exports__.match;
exports.matchW = __webpack_exports__.matchW;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "BooleanAlgebra",
    "Eq",
    "MonoidAll",
    "MonoidAny",
    "Ord",
    "SemigroupAll",
    "SemigroupAny",
    "Show",
    "fold",
    "foldW",
    "isBoolean",
    "match",
    "matchW"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
