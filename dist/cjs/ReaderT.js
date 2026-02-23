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
    fromNaturalTransformation: function() {
        return fromNaturalTransformation;
    },
    fromReader: function() {
        return fromReader;
    },
    of: function() {
        return of;
    },
    chain: function() {
        return chain;
    },
    flatMap: function() {
        return flatMap;
    },
    map: function() {
        return map;
    },
    ap: function() {
        return ap;
    },
    getReaderM: function() {
        return getReaderM;
    }
});
var external_function_js_namespaceObject = require("./function.js");
function of(F) {
    return function(a) {
        return function() {
            return F.of(a);
        };
    };
}
function map(F) {
    return function(f) {
        return function(fa) {
            return function(r) {
                return F.map(fa(r), f);
            };
        };
    };
}
function ap(F) {
    return function(fa) {
        return function(fab) {
            return function(r) {
                return F.ap(fab(r), fa(r));
            };
        };
    };
}
function chain(M) {
    var flatMapM = flatMap(M);
    return function(f) {
        return function(ma) {
            return flatMapM(ma, f);
        };
    };
}
function flatMap(M) {
    return function(ma, f) {
        return function(r) {
            return M.chain(ma(r), function(a) {
                return f(a)(r);
            });
        };
    };
}
function fromReader(F) {
    return function(ma) {
        return (0, external_function_js_namespaceObject.flow)(ma, F.of);
    };
}
function fromNaturalTransformation(nt) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, nt);
    };
}
function getReaderM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    return {
        map: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _map(f));
        },
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, _ap(fa));
        },
        of: of(M),
        chain: function(ma, f) {
            return (0, external_function_js_namespaceObject.pipe)(ma, _chain(f));
        },
        ask: function() {
            return M.of;
        },
        asks: function(f) {
            return (0, external_function_js_namespaceObject.flow)(f, M.of);
        },
        local: function(ma, f) {
            return function(q) {
                return ma(f(q));
            };
        },
        fromReader: fromReader(M),
        fromM: function(ma) {
            return function() {
                return ma;
            };
        }
    };
}
exports.ap = __webpack_exports__.ap;
exports.chain = __webpack_exports__.chain;
exports.flatMap = __webpack_exports__.flatMap;
exports.fromNaturalTransformation = __webpack_exports__.fromNaturalTransformation;
exports.fromReader = __webpack_exports__.fromReader;
exports.getReaderM = __webpack_exports__.getReaderM;
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ap",
    "chain",
    "flatMap",
    "fromNaturalTransformation",
    "fromReader",
    "getReaderM",
    "map",
    "of"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
