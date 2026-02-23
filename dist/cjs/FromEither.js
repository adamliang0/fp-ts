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
    filterOrElse: function() {
        return filterOrElse;
    },
    fromOption: function() {
        return fromOption;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    chainEitherK: function() {
        return chainEitherK;
    },
    tapEither: function() {
        return tapEither;
    },
    fromEitherK: function() {
        return fromEitherK;
    },
    chainFirstEitherK: function() {
        return chainFirstEitherK;
    }
});
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
var external_internal_js_namespaceObject = require("./internal.js");
function fromOption(F) {
    return function(onNone) {
        return function(ma) {
            return F.fromEither(external_internal_js_namespaceObject.isNone(ma) ? external_internal_js_namespaceObject.left(onNone()) : external_internal_js_namespaceObject.right(ma.value));
        };
    };
}
function fromPredicate(F) {
    return function(predicate, onFalse) {
        return function(a) {
            return F.fromEither(predicate(a) ? external_internal_js_namespaceObject.right(a) : external_internal_js_namespaceObject.left(onFalse(a)));
        };
    };
}
function fromOptionK(F) {
    var fromOptionF = fromOption(F);
    return function(onNone) {
        var from = fromOptionF(onNone);
        return function(f) {
            return (0, external_function_js_namespaceObject.flow)(f, from);
        };
    };
}
function chainOptionK(F, M) {
    var fromOptionKF = fromOptionK(F);
    return function(onNone) {
        var from = fromOptionKF(onNone);
        return function(f) {
            return function(ma) {
                return M.chain(ma, from(f));
            };
        };
    };
}
function fromEitherK(F) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, F.fromEither);
    };
}
function chainEitherK(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f) {
        return function(ma) {
            return M.chain(ma, fromEitherKF(f));
        };
    };
}
function chainFirstEitherK(F, M) {
    var tapEitherM = tapEither(F, M);
    return function(f) {
        return function(ma) {
            return tapEitherM(ma, f);
        };
    };
}
function filterOrElse(F, M) {
    return function(predicate, onFalse) {
        return function(ma) {
            return M.chain(ma, function(a) {
                return F.fromEither(predicate(a) ? external_internal_js_namespaceObject.right(a) : external_internal_js_namespaceObject.left(onFalse(a)));
            });
        };
    };
}
function tapEither(F, M) {
    var fromEither = fromEitherK(F);
    var tapM = (0, external_Chain_js_namespaceObject.tap)(M);
    return function(self, f) {
        return tapM(self, fromEither(f));
    };
}
exports.chainEitherK = __webpack_exports__.chainEitherK;
exports.chainFirstEitherK = __webpack_exports__.chainFirstEitherK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.filterOrElse = __webpack_exports__.filterOrElse;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.tapEither = __webpack_exports__.tapEither;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "chainEitherK",
    "chainFirstEitherK",
    "chainOptionK",
    "filterOrElse",
    "fromEitherK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "tapEither"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
