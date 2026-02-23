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
    getFunctorWithIndexComposition: function() {
        return getFunctorWithIndexComposition;
    },
    mapWithIndex: function() {
        return mapWithIndex;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function mapWithIndex(F, G) {
    return function(f) {
        return function(fa) {
            return F.mapWithIndex(fa, function(i, ga) {
                return G.mapWithIndex(ga, function(j, a) {
                    return f([
                        i,
                        j
                    ], a);
                });
            });
        };
    };
}
function getFunctorWithIndexComposition(F, G) {
    var map = (0, external_Functor_js_namespaceObject.getFunctorComposition)(F, G).map;
    var _mapWithIndex = mapWithIndex(F, G);
    return {
        map: map,
        mapWithIndex: function(fga, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _mapWithIndex(f));
        }
    };
}
exports.getFunctorWithIndexComposition = __webpack_exports__.getFunctorWithIndexComposition;
exports.mapWithIndex = __webpack_exports__.mapWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getFunctorWithIndexComposition",
    "mapWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
