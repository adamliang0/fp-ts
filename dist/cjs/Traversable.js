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
    traverse: function() {
        return traverse;
    },
    getTraversableComposition: function() {
        return getTraversableComposition;
    },
    sequence: function() {
        return sequence;
    }
});
var external_Foldable_js_namespaceObject = require("./Foldable.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function traverse(T, G) {
    return function(F) {
        var traverseT = T.traverse(F);
        var traverseG = G.traverse(F);
        return function(f) {
            return function(fga) {
                return traverseT(fga, function(ga) {
                    return traverseG(ga, f);
                });
            };
        };
    };
}
function sequence(T, G) {
    return function(F) {
        var sequenceT = T.sequence(F);
        var sequenceG = G.sequence(F);
        return function(fgha) {
            return sequenceT(T.map(fgha, sequenceG));
        };
    };
}
function getTraversableComposition(F, G) {
    var map = (0, external_Functor_js_namespaceObject.getFunctorComposition)(F, G).map;
    var FC = (0, external_Foldable_js_namespaceObject.getFoldableComposition)(F, G);
    var _traverse = traverse(F, G);
    var _sequence = sequence(F, G);
    return {
        map: map,
        reduce: FC.reduce,
        foldMap: FC.foldMap,
        reduceRight: FC.reduceRight,
        traverse: function(H) {
            var traverseH = _traverse(H);
            return function(fga, f) {
                return (0, external_function_js_namespaceObject.pipe)(fga, traverseH(f));
            };
        },
        sequence: function(H) {
            var sequenceH = _sequence(H);
            return function(fgha) {
                return (0, external_function_js_namespaceObject.pipe)(fgha, sequenceH);
            };
        }
    };
}
exports.getTraversableComposition = __webpack_exports__.getTraversableComposition;
exports.sequence = __webpack_exports__.sequence;
exports.traverse = __webpack_exports__.traverse;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getTraversableComposition",
    "sequence",
    "traverse"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
