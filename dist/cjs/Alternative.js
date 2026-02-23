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
    getAlternativeMonoid: function() {
        return getAlternativeMonoid;
    },
    altAll: function() {
        return altAll;
    }
});
var external_Alt_js_namespaceObject = require("./Alt.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
function altAll(F) {
    return (0, external_Alt_js_namespaceObject.altAll)(F)(F.zero());
}
function getAlternativeMonoid(F) {
    var f = (0, external_Apply_js_namespaceObject.getApplySemigroup)(F);
    return function(S) {
        var SF = f(S);
        return {
            concat: function(first, second) {
                return F.alt(SF.concat(first, second), function() {
                    return F.alt(first, function() {
                        return second;
                    });
                });
            },
            empty: F.zero()
        };
    };
}
exports.altAll = __webpack_exports__.altAll;
exports.getAlternativeMonoid = __webpack_exports__.getAlternativeMonoid;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "altAll",
    "getAlternativeMonoid"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
