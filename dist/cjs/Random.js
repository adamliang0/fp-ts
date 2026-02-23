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
    randomRange: function() {
        return randomRange;
    },
    randomBool: function() {
        return randomBool;
    },
    randomInt: function() {
        return randomInt;
    },
    randomElem: function() {
        return randomElem;
    },
    random: function() {
        return random;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_IO_js_namespaceObject = require("./IO.js");
var random = function() {
    return Math.random();
};
function randomInt(low, high) {
    return (0, external_function_js_namespaceObject.pipe)(random, (0, external_IO_js_namespaceObject.map)(function(n) {
        return Math.floor((high - low + 1) * n + low);
    }));
}
function randomRange(min, max) {
    return (0, external_function_js_namespaceObject.pipe)(random, (0, external_IO_js_namespaceObject.map)(function(n) {
        return (max - min) * n + min;
    }));
}
var randomBool = /*#__PURE__*/ (0, external_function_js_namespaceObject.pipe)(random, (0, external_IO_js_namespaceObject.map)(function(n) {
    return n < 0.5;
}));
var randomElem = function(as) {
    return (0, external_function_js_namespaceObject.pipe)(randomInt(0, as.length - 1), (0, external_IO_js_namespaceObject.map)(function(i) {
        return as[i];
    }));
};
exports.random = __webpack_exports__.random;
exports.randomBool = __webpack_exports__.randomBool;
exports.randomElem = __webpack_exports__.randomElem;
exports.randomInt = __webpack_exports__.randomInt;
exports.randomRange = __webpack_exports__.randomRange;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "random",
    "randomBool",
    "randomElem",
    "randomInt",
    "randomRange"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
