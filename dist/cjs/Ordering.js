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
    Eq: function() {
        return Eq;
    },
    Monoid: function() {
        return Monoid;
    },
    Semigroup: function() {
        return Semigroup;
    },
    eqOrdering: function() {
        return eqOrdering;
    },
    invert: function() {
        return invert;
    },
    match: function() {
        return match;
    },
    matchW: function() {
        return matchW;
    },
    monoidOrdering: function() {
        return monoidOrdering;
    },
    reverse: function() {
        return reverse;
    },
    semigroupOrdering: function() {
        return semigroupOrdering;
    },
    sign: function() {
        return sign;
    }
});
var matchW = function(onLessThan, onEqual, onGreaterThan) {
    return function(o) {
        return -1 === o ? onLessThan() : 0 === o ? onEqual() : onGreaterThan();
    };
};
var match = matchW;
var reverse = function(o) {
    return -1 === o ? 1 : 1 === o ? -1 : 0;
};
var Eq = {
    equals: function(x, y) {
        return x === y;
    }
};
var Semigroup = {
    concat: function(x, y) {
        return 0 !== x ? x : y;
    }
};
var Monoid = {
    concat: Semigroup.concat,
    empty: 0
};
var sign = function(n) {
    return n <= -1 ? -1 : n >= 1 ? 1 : 0;
};
var invert = reverse;
var semigroupOrdering = Semigroup;
var eqOrdering = Eq;
var monoidOrdering = Monoid;
exports.Eq = __webpack_exports__.Eq;
exports.Monoid = __webpack_exports__.Monoid;
exports.Semigroup = __webpack_exports__.Semigroup;
exports.eqOrdering = __webpack_exports__.eqOrdering;
exports.invert = __webpack_exports__.invert;
exports.match = __webpack_exports__.match;
exports.matchW = __webpack_exports__.matchW;
exports.monoidOrdering = __webpack_exports__.monoidOrdering;
exports.reverse = __webpack_exports__.reverse;
exports.semigroupOrdering = __webpack_exports__.semigroupOrdering;
exports.sign = __webpack_exports__.sign;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Eq",
    "Monoid",
    "Semigroup",
    "eqOrdering",
    "invert",
    "match",
    "matchW",
    "monoidOrdering",
    "reverse",
    "semigroupOrdering",
    "sign"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
