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
    getMonoidAll: function() {
        return getMonoidAll;
    },
    contramap: function() {
        return contramap;
    },
    Contravariant: function() {
        return Contravariant;
    },
    getSemigroupAny: function() {
        return getSemigroupAny;
    },
    not: function() {
        return not;
    },
    URI: function() {
        return URI;
    },
    getMonoidAny: function() {
        return getMonoidAny;
    },
    or: function() {
        return or;
    },
    and: function() {
        return and;
    },
    getSemigroupAll: function() {
        return getSemigroupAll;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var contramap_ = function(predicate, f) {
    return (0, external_function_js_namespaceObject.pipe)(predicate, contramap(f));
};
var contramap = function(f) {
    return function(predicate) {
        return (0, external_function_js_namespaceObject.flow)(f, predicate);
    };
};
var URI = 'Predicate';
var getSemigroupAny = function() {
    return {
        concat: function(first, second) {
            return (0, external_function_js_namespaceObject.pipe)(first, or(second));
        }
    };
};
var getMonoidAny = function() {
    return {
        concat: getSemigroupAny().concat,
        empty: external_function_js_namespaceObject.constFalse
    };
};
var getSemigroupAll = function() {
    return {
        concat: function(first, second) {
            return (0, external_function_js_namespaceObject.pipe)(first, and(second));
        }
    };
};
var getMonoidAll = function() {
    return {
        concat: getSemigroupAll().concat,
        empty: external_function_js_namespaceObject.constTrue
    };
};
var Contravariant = {
    URI: URI,
    contramap: contramap_
};
var not = function(predicate) {
    return function(a) {
        return !predicate(a);
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
exports.Contravariant = __webpack_exports__.Contravariant;
exports.URI = __webpack_exports__.URI;
exports.and = __webpack_exports__.and;
exports.contramap = __webpack_exports__.contramap;
exports.getMonoidAll = __webpack_exports__.getMonoidAll;
exports.getMonoidAny = __webpack_exports__.getMonoidAny;
exports.getSemigroupAll = __webpack_exports__.getSemigroupAll;
exports.getSemigroupAny = __webpack_exports__.getSemigroupAny;
exports.not = __webpack_exports__.not;
exports.or = __webpack_exports__.or;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Contravariant",
    "URI",
    "and",
    "contramap",
    "getMonoidAll",
    "getMonoidAny",
    "getSemigroupAll",
    "getSemigroupAny",
    "not",
    "or"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
