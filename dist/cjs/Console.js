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
    error: function() {
        return error;
    },
    info: function() {
        return info;
    },
    log: function() {
        return log;
    },
    warn: function() {
        return warn;
    }
});
var log = function(a) {
    return function() {
        return console.log(a);
    };
};
var warn = function(a) {
    return function() {
        return console.warn(a);
    };
};
var error = function(a) {
    return function() {
        return console.error(a);
    };
};
var info = function(a) {
    return function() {
        return console.info(a);
    };
};
exports.error = __webpack_exports__.error;
exports.info = __webpack_exports__.info;
exports.log = __webpack_exports__.log;
exports.warn = __webpack_exports__.warn;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "error",
    "info",
    "log",
    "warn"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
