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
    reduceRight: function() {
        return reduceRight;
    },
    traverse_: function() {
        return traverse_;
    },
    reduce: function() {
        return reduce;
    },
    foldM: function() {
        return foldM;
    },
    toReadonlyArray: function() {
        return toReadonlyArray;
    },
    foldMap: function() {
        return foldMap;
    },
    intercalate: function() {
        return intercalate;
    },
    getFoldableComposition: function() {
        return getFoldableComposition;
    },
    reduceM: function() {
        return reduceM;
    },
    toArray: function() {
        return toArray;
    }
});
var external_function_js_namespaceObject = require("./function.js");
function reduce(F, G) {
    return function(b, f) {
        return function(fga) {
            return F.reduce(fga, b, function(b, ga) {
                return G.reduce(ga, b, f);
            });
        };
    };
}
function foldMap(F, G) {
    return function(M) {
        var foldMapF = F.foldMap(M);
        var foldMapG = G.foldMap(M);
        return function(f) {
            return function(fga) {
                return foldMapF(fga, function(ga) {
                    return foldMapG(ga, f);
                });
            };
        };
    };
}
function reduceRight(F, G) {
    return function(b, f) {
        return function(fga) {
            return F.reduceRight(fga, b, function(ga, b) {
                return G.reduceRight(ga, b, f);
            });
        };
    };
}
function reduceM(M, F) {
    return function(b, f) {
        return function(fa) {
            return F.reduce(fa, M.of(b), function(mb, a) {
                return M.chain(mb, function(b) {
                    return f(b, a);
                });
            });
        };
    };
}
function intercalate(M, F) {
    return function(middle, fm) {
        var go = function(param, x) {
            var init = param.init, acc = param.acc;
            return init ? {
                init: false,
                acc: x
            } : {
                init: false,
                acc: M.concat(M.concat(acc, middle), x)
            };
        };
        return F.reduce(fm, {
            init: true,
            acc: M.empty
        }, go).acc;
    };
}
function toReadonlyArray(F) {
    return function(fa) {
        return F.reduce(fa, [], function(acc, a) {
            acc.push(a);
            return acc;
        });
    };
}
function traverse_(M, F) {
    var applyFirst = function(mu, mb) {
        return M.ap(M.map(mu, external_function_js_namespaceObject.constant), mb);
    };
    var mu = M.of(void 0);
    return function(fa, f) {
        return F.reduce(fa, mu, function(mu, a) {
            return applyFirst(mu, f(a));
        });
    };
}
function foldM(M, F) {
    return function(fa, b, f) {
        return F.reduce(fa, M.of(b), function(mb, a) {
            return M.chain(mb, function(b) {
                return f(b, a);
            });
        });
    };
}
var toArray = toReadonlyArray;
function getFoldableComposition(F, G) {
    var _reduce = reduce(F, G);
    var _foldMap = foldMap(F, G);
    var _reduceRight = reduceRight(F, G);
    return {
        reduce: function(fga, b, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _reduce(b, f));
        },
        foldMap: function(M) {
            var foldMapM = _foldMap(M);
            return function(fga, f) {
                return (0, external_function_js_namespaceObject.pipe)(fga, foldMapM(f));
            };
        },
        reduceRight: function(fga, b, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _reduceRight(b, f));
        }
    };
}
exports.foldM = __webpack_exports__.foldM;
exports.foldMap = __webpack_exports__.foldMap;
exports.getFoldableComposition = __webpack_exports__.getFoldableComposition;
exports.intercalate = __webpack_exports__.intercalate;
exports.reduce = __webpack_exports__.reduce;
exports.reduceM = __webpack_exports__.reduceM;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.toArray = __webpack_exports__.toArray;
exports.toReadonlyArray = __webpack_exports__.toReadonlyArray;
exports.traverse_ = __webpack_exports__.traverse_;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "foldM",
    "foldMap",
    "getFoldableComposition",
    "intercalate",
    "reduce",
    "reduceM",
    "reduceRight",
    "toArray",
    "toReadonlyArray",
    "traverse_"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
