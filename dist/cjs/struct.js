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
    evolve: function() {
        return evolve;
    },
    getAssignSemigroup: function() {
        return getAssignSemigroup;
    }
});
var external_internal_js_namespaceObject = require("./internal.js");
var getAssignSemigroup = function() {
    return {
        concat: function(first, second) {
            return Object.assign({}, first, second);
        }
    };
};
var evolve = function(transformations) {
    return function(a) {
        var out = {};
        for(var k in a)if (external_internal_js_namespaceObject.has.call(a, k)) out[k] = transformations[k](a[k]);
        return out;
    };
};
exports.evolve = __webpack_exports__.evolve;
exports.getAssignSemigroup = __webpack_exports__.getAssignSemigroup;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "evolve",
    "getAssignSemigroup"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
