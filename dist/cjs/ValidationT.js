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
    getValidationM: function() {
        return getValidationM;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Either_js_namespaceObject = require("./Either.js");
var external_internal_js_namespaceObject = require("./internal.js");
function getValidationM(S, M) {
    var A = (0, external_Applicative_js_namespaceObject.getApplicativeComposition)(M, external_Either_js_namespaceObject.getApplicativeValidation(S));
    return {
        map: A.map,
        ap: A.ap,
        of: A.of,
        chain: function(ma, f) {
            return M.chain(ma, function(e) {
                return external_internal_js_namespaceObject.isLeft(e) ? M.of(external_internal_js_namespaceObject.left(e.left)) : f(e.right);
            });
        },
        alt: function(me, that) {
            return M.chain(me, function(e1) {
                return external_internal_js_namespaceObject.isRight(e1) ? M.of(e1) : M.map(that(), function(e2) {
                    return external_internal_js_namespaceObject.isLeft(e2) ? external_internal_js_namespaceObject.left(S.concat(e1.left, e2.left)) : e2;
                });
            });
        }
    };
}
exports.getValidationM = __webpack_exports__.getValidationM;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getValidationM"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
