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
    getFoldableWithIndexComposition: function() {
        return getFoldableWithIndexComposition;
    },
    foldMapWithIndex: function() {
        return foldMapWithIndex;
    },
    reduceRightWithIndex: function() {
        return reduceRightWithIndex;
    },
    reduceWithIndex: function() {
        return reduceWithIndex;
    }
});
var external_Foldable_js_namespaceObject = require("./Foldable.js");
var external_function_js_namespaceObject = require("./function.js");
function reduceWithIndex(F, G) {
    return function(b, f) {
        return function(fga) {
            return F.reduceWithIndex(fga, b, function(i, b, ga) {
                return G.reduceWithIndex(ga, b, function(j, b, a) {
                    return f([
                        i,
                        j
                    ], b, a);
                });
            });
        };
    };
}
function foldMapWithIndex(F, G) {
    return function(M) {
        var foldMapWithIndexF = F.foldMapWithIndex(M);
        var foldMapWithIndexG = G.foldMapWithIndex(M);
        return function(f) {
            return function(fga) {
                return foldMapWithIndexF(fga, function(i, ga) {
                    return foldMapWithIndexG(ga, function(j, a) {
                        return f([
                            i,
                            j
                        ], a);
                    });
                });
            };
        };
    };
}
function reduceRightWithIndex(F, G) {
    return function(b, f) {
        return function(fga) {
            return F.reduceRightWithIndex(fga, b, function(i, ga, b) {
                return G.reduceRightWithIndex(ga, b, function(j, a, b) {
                    return f([
                        i,
                        j
                    ], a, b);
                });
            });
        };
    };
}
function getFoldableWithIndexComposition(F, G) {
    var FC = (0, external_Foldable_js_namespaceObject.getFoldableComposition)(F, G);
    var _reduceWithIndex = reduceWithIndex(F, G);
    var _foldMapWithIndex = foldMapWithIndex(F, G);
    var _reduceRightWithIndex = reduceRightWithIndex(F, G);
    return {
        reduce: FC.reduce,
        foldMap: FC.foldMap,
        reduceRight: FC.reduceRight,
        reduceWithIndex: function(fga, b, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _reduceWithIndex(b, f));
        },
        foldMapWithIndex: function(M) {
            var foldMapWithIndexM = _foldMapWithIndex(M);
            return function(fga, f) {
                return (0, external_function_js_namespaceObject.pipe)(fga, foldMapWithIndexM(f));
            };
        },
        reduceRightWithIndex: function(fga, b, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _reduceRightWithIndex(b, f));
        }
    };
}
exports.foldMapWithIndex = __webpack_exports__.foldMapWithIndex;
exports.getFoldableWithIndexComposition = __webpack_exports__.getFoldableWithIndexComposition;
exports.reduceRightWithIndex = __webpack_exports__.reduceRightWithIndex;
exports.reduceWithIndex = __webpack_exports__.reduceWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "foldMapWithIndex",
    "getFoldableWithIndexComposition",
    "reduceRightWithIndex",
    "reduceWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
