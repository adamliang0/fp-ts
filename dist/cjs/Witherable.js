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
    filterE: function() {
        return filterE;
    },
    witherDefault: function() {
        return witherDefault;
    },
    wiltDefault: function() {
        return wiltDefault;
    }
});
var external_internal_js_namespaceObject = require("./internal.js");
function wiltDefault(T, C) {
    return function(F) {
        var traverseF = T.traverse(F);
        return function(wa, f) {
            return F.map(traverseF(wa, f), C.separate);
        };
    };
}
function witherDefault(T, C) {
    return function(F) {
        var traverseF = T.traverse(F);
        return function(wa, f) {
            return F.map(traverseF(wa, f), C.compact);
        };
    };
}
function filterE(W) {
    return function(F) {
        var witherF = W.wither(F);
        return function(predicate) {
            return function(ga) {
                return witherF(ga, function(a) {
                    return F.map(predicate(a), function(b) {
                        return b ? external_internal_js_namespaceObject.some(a) : external_internal_js_namespaceObject.none;
                    });
                });
            };
        };
    };
}
exports.filterE = __webpack_exports__.filterE;
exports.wiltDefault = __webpack_exports__.wiltDefault;
exports.witherDefault = __webpack_exports__.witherDefault;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "filterE",
    "wiltDefault",
    "witherDefault"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
