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
    Semigroup: function() {
        return Semigroup;
    },
    Monoid: function() {
        return Monoid;
    }
});
var external_Semigroup_js_namespaceObject = require("./Semigroup.js");
var Semigroup = external_Semigroup_js_namespaceObject.constant(void 0);
var Monoid = {
    concat: Semigroup.concat,
    empty: void 0
};
exports.Monoid = __webpack_exports__.Monoid;
exports.Semigroup = __webpack_exports__.Semigroup;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Monoid",
    "Semigroup"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
