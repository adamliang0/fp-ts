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
    clamp: function() {
        return clamp;
    },
    reverse: function() {
        return reverse;
    },
    boundedNumber: function() {
        return boundedNumber;
    }
});
var external_Ord_js_namespaceObject = require("./Ord.js");
var clamp = function(B) {
    return external_Ord_js_namespaceObject.clamp(B)(B.bottom, B.top);
};
var reverse = function(B) {
    var R = external_Ord_js_namespaceObject.reverse(B);
    return {
        equals: R.equals,
        compare: R.compare,
        top: B.bottom,
        bottom: B.top
    };
};
var boundedNumber = {
    equals: external_Ord_js_namespaceObject.ordNumber.equals,
    compare: external_Ord_js_namespaceObject.ordNumber.compare,
    top: 1 / 0,
    bottom: -1 / 0
};
exports.boundedNumber = __webpack_exports__.boundedNumber;
exports.clamp = __webpack_exports__.clamp;
exports.reverse = __webpack_exports__.reverse;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "boundedNumber",
    "clamp",
    "reverse"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
