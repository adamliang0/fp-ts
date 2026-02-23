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
    getApplicativeComposition: function() {
        return getApplicativeComposition;
    },
    getApplicativeMonoid: function() {
        return getApplicativeMonoid;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function getApplicativeMonoid(F) {
    var f = (0, external_Apply_js_namespaceObject.getApplySemigroup)(F);
    return function(M) {
        return {
            concat: f(M).concat,
            empty: F.of(M.empty)
        };
    };
}
function getApplicativeComposition(F, G) {
    var map = (0, external_Functor_js_namespaceObject.getFunctorComposition)(F, G).map;
    var _ap = (0, external_Apply_js_namespaceObject.ap)(F, G);
    return {
        map: map,
        of: function(a) {
            return F.of(G.of(a));
        },
        ap: function(fgab, fga) {
            return (0, external_function_js_namespaceObject.pipe)(fgab, _ap(fga));
        }
    };
}
exports.getApplicativeComposition = __webpack_exports__.getApplicativeComposition;
exports.getApplicativeMonoid = __webpack_exports__.getApplicativeMonoid;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getApplicativeComposition",
    "getApplicativeMonoid"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
