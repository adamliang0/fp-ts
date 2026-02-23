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
    getCompactableComposition: function() {
        return getCompactableComposition;
    },
    separate: function() {
        return separate;
    },
    compact: function() {
        return compact;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_Option_js_namespaceObject = require("./Option.js");
var external_Separated_js_namespaceObject = require("./Separated.js");
function compact(F, G) {
    return function(fga) {
        return F.map(fga, G.compact);
    };
}
function separate(F, C, G) {
    var _compact = compact(F, C);
    var _map = (0, external_Functor_js_namespaceObject.map)(F, G);
    return function(fge) {
        return external_Separated_js_namespaceObject.separated(_compact((0, external_function_js_namespaceObject.pipe)(fge, _map(external_Option_js_namespaceObject.getLeft))), _compact((0, external_function_js_namespaceObject.pipe)(fge, _map(external_Option_js_namespaceObject.getRight))));
    };
}
function getCompactableComposition(F, G) {
    var map = (0, external_Functor_js_namespaceObject.getFunctorComposition)(F, G).map;
    return {
        map: map,
        compact: compact(F, G),
        separate: separate(F, G, G)
    };
}
exports.compact = __webpack_exports__.compact;
exports.getCompactableComposition = __webpack_exports__.getCompactableComposition;
exports.separate = __webpack_exports__.separate;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "compact",
    "getCompactableComposition",
    "separate"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
