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
    fromEither: function() {
        return fromEither;
    },
    fromNullableK: function() {
        return fromNullableK;
    },
    alt: function() {
        return alt;
    },
    fromF: function() {
        return fromF;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    fromNullable: function() {
        return fromNullable;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    flatMap: function() {
        return flatMap;
    },
    map: function() {
        return map;
    },
    match: function() {
        return match;
    },
    getOrElse: function() {
        return getOrElse;
    },
    some: function() {
        return some;
    },
    zero: function() {
        return zero;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    getOptionM: function() {
        return getOptionM;
    },
    chain: function() {
        return chain;
    },
    ap: function() {
        return ap;
    },
    chainNullableK: function() {
        return chainNullableK;
    },
    matchE: function() {
        return matchE;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_Option_js_namespaceObject = require("./Option.js");
function some(F) {
    return (0, external_function_js_namespaceObject.flow)(external_Option_js_namespaceObject.some, F.of);
}
function zero(F) {
    return (0, external_function_js_namespaceObject.constant)(F.of(external_Option_js_namespaceObject.none));
}
function fromF(F) {
    return function(ma) {
        return F.map(ma, external_Option_js_namespaceObject.some);
    };
}
function fromNullable(F) {
    return (0, external_function_js_namespaceObject.flow)(external_Option_js_namespaceObject.fromNullable, F.of);
}
function fromNullableK(F) {
    var fromNullableF = fromNullable(F);
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, fromNullableF);
    };
}
function chainNullableK(M) {
    var chainM = chain(M);
    var fromNullableKM = fromNullableK(M);
    return function(f) {
        return chainM(fromNullableKM(f));
    };
}
function fromOptionK(F) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, F.of);
    };
}
function chainOptionK(M) {
    var chainM = chain(M);
    var fromOptionKM = fromOptionK(M);
    return function(f) {
        return chainM(fromOptionKM(f));
    };
}
function fromPredicate(F) {
    return function(predicate) {
        return function(a) {
            return F.of(external_Option_js_namespaceObject.fromPredicate(predicate)(a));
        };
    };
}
function fromEither(F) {
    return (0, external_function_js_namespaceObject.flow)(external_Option_js_namespaceObject.fromEither, F.of);
}
function match(F) {
    return function(onNone, onSome) {
        return function(ma) {
            return F.map(ma, external_Option_js_namespaceObject.match(onNone, onSome));
        };
    };
}
function matchE(M) {
    return function(onNone, onSome) {
        return function(ma) {
            return M.chain(ma, external_Option_js_namespaceObject.match(onNone, onSome));
        };
    };
}
function getOrElse(M) {
    return function(onNone) {
        return function(fa) {
            return M.chain(fa, external_Option_js_namespaceObject.match(onNone, M.of));
        };
    };
}
function map(F) {
    return (0, external_Functor_js_namespaceObject.map)(F, external_Option_js_namespaceObject.Functor);
}
function ap(F) {
    return (0, external_Apply_js_namespaceObject.ap)(F, external_Option_js_namespaceObject.Apply);
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
    var zeroM = zero(M);
    return function(ma, f) {
        return M.chain(ma, external_Option_js_namespaceObject.match(function() {
            return zeroM();
        }, f));
    };
}
function alt(M) {
    var _some = some(M);
    return function(second) {
        return function(first) {
            return M.chain(first, external_Option_js_namespaceObject.match(second, _some));
        };
    };
}
function getOptionM(M) {
    var apM = ap(M);
    var mapM = map(M);
    var chainM = chain(M);
    var altM = alt(M);
    var foldM = matchE(M);
    var getOrElseM = getOrElse(M);
    var zeroM = zero(M);
    return {
        map: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, mapM(f));
        },
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, apM(fa));
        },
        of: some(M),
        chain: function(ma, f) {
            return (0, external_function_js_namespaceObject.pipe)(ma, chainM(f));
        },
        alt: function(fa, that) {
            return (0, external_function_js_namespaceObject.pipe)(fa, altM(that));
        },
        fold: function(fa, onNone, onSome) {
            return (0, external_function_js_namespaceObject.pipe)(fa, foldM(onNone, onSome));
        },
        getOrElse: function(fa, onNone) {
            return (0, external_function_js_namespaceObject.pipe)(fa, getOrElseM(onNone));
        },
        fromM: fromF(M),
        none: function() {
            return zeroM();
        }
    };
}
exports.alt = __webpack_exports__.alt;
exports.ap = __webpack_exports__.ap;
exports.chain = __webpack_exports__.chain;
exports.chainNullableK = __webpack_exports__.chainNullableK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.flatMap = __webpack_exports__.flatMap;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromF = __webpack_exports__.fromF;
exports.fromNullable = __webpack_exports__.fromNullable;
exports.fromNullableK = __webpack_exports__.fromNullableK;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.getOptionM = __webpack_exports__.getOptionM;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.map = __webpack_exports__.map;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.some = __webpack_exports__.some;
exports.zero = __webpack_exports__.zero;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "alt",
    "ap",
    "chain",
    "chainNullableK",
    "chainOptionK",
    "flatMap",
    "fromEither",
    "fromF",
    "fromNullable",
    "fromNullableK",
    "fromOptionK",
    "fromPredicate",
    "getOptionM",
    "getOrElse",
    "map",
    "match",
    "matchE",
    "some",
    "zero"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
