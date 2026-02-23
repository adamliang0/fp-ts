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
    stringify: function() {
        return stringify;
    },
    parse: function() {
        return parse;
    }
});
var external_Either_js_namespaceObject = require("./Either.js");
var external_function_js_namespaceObject = require("./function.js");
var parse = function(s) {
    return (0, external_Either_js_namespaceObject.tryCatch)(function() {
        return JSON.parse(s);
    }, external_function_js_namespaceObject.identity);
};
var stringify = function(a) {
    return (0, external_Either_js_namespaceObject.tryCatch)(function() {
        var s = JSON.stringify(a);
        if ('string' != typeof s) throw new Error('Converting unsupported structure to JSON');
        return s;
    }, external_function_js_namespaceObject.identity);
};
exports.parse = __webpack_exports__.parse;
exports.stringify = __webpack_exports__.stringify;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "parse",
    "stringify"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
