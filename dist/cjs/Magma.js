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
    concatAll: function() {
        return concatAll;
    },
    endo: function() {
        return endo;
    },
    filterFirst: function() {
        return filterFirst;
    },
    filterSecond: function() {
        return filterSecond;
    },
    reverse: function() {
        return reverse;
    }
});
var reverse = function(M) {
    return {
        concat: function(first, second) {
            return M.concat(second, first);
        }
    };
};
var filterFirst = function(predicate) {
    return function(M) {
        return {
            concat: function(first, second) {
                return predicate(first) ? M.concat(first, second) : second;
            }
        };
    };
};
var filterSecond = function(predicate) {
    return function(M) {
        return {
            concat: function(first, second) {
                return predicate(second) ? M.concat(first, second) : first;
            }
        };
    };
};
var endo = function(f) {
    return function(M) {
        return {
            concat: function(first, second) {
                return M.concat(f(first), f(second));
            }
        };
    };
};
var concatAll = function(M) {
    return function(startWith) {
        return function(as) {
            return as.reduce(function(a, acc) {
                return M.concat(a, acc);
            }, startWith);
        };
    };
};
exports.concatAll = __webpack_exports__.concatAll;
exports.endo = __webpack_exports__.endo;
exports.filterFirst = __webpack_exports__.filterFirst;
exports.filterSecond = __webpack_exports__.filterSecond;
exports.reverse = __webpack_exports__.reverse;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "concatAll",
    "endo",
    "filterFirst",
    "filterSecond",
    "reverse"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
