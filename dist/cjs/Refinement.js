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
    not: function() {
        return not;
    },
    zero: function() {
        return zero;
    },
    compose: function() {
        return compose;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    or: function() {
        return or;
    },
    fromEitherK: function() {
        return fromEitherK;
    },
    and: function() {
        return and;
    },
    id: function() {
        return id;
    }
});
var external_internal_js_namespaceObject = require("./internal.js");
var fromOptionK = function(getOption) {
    return function(a) {
        return external_internal_js_namespaceObject.isSome(getOption(a));
    };
};
var fromEitherK = function(getEither) {
    return function(a) {
        return external_internal_js_namespaceObject.isRight(getEither(a));
    };
};
var id = function() {
    return function(_) {
        return true;
    };
};
var not = function(refinement) {
    return function(a) {
        return !refinement(a);
    };
};
var or = function(second) {
    return function(first) {
        return function(a) {
            return first(a) || second(a);
        };
    };
};
var and = function(second) {
    return function(first) {
        return function(a) {
            return first(a) && second(a);
        };
    };
};
var zero = function() {
    return function(_) {
        return false;
    };
};
var compose = function(bc) {
    return function(ab) {
        return function(i) {
            return ab(i) && bc(i);
        };
    };
};
exports.and = __webpack_exports__.and;
exports.compose = __webpack_exports__.compose;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.id = __webpack_exports__.id;
exports.not = __webpack_exports__.not;
exports.or = __webpack_exports__.or;
exports.zero = __webpack_exports__.zero;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "and",
    "compose",
    "fromEitherK",
    "fromOptionK",
    "id",
    "not",
    "or",
    "zero"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
