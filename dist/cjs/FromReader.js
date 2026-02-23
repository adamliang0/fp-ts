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
    chainReaderK: function() {
        return chainReaderK;
    },
    tapReader: function() {
        return tapReader;
    },
    chainFirstReaderK: function() {
        return chainFirstReaderK;
    },
    fromReaderK: function() {
        return fromReaderK;
    },
    ask: function() {
        return ask;
    },
    asks: function() {
        return asks;
    }
});
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Reader_js_namespaceObject = require("./Reader.js");
function ask(F) {
    return function() {
        return F.fromReader(external_Reader_js_namespaceObject.ask());
    };
}
function asks(F) {
    return F.fromReader;
}
function fromReaderK(F) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, F.fromReader);
    };
}
function chainReaderK(F, M) {
    var fromReaderKF = fromReaderK(F);
    return function(f) {
        return function(ma) {
            return M.chain(ma, fromReaderKF(f));
        };
    };
}
function chainFirstReaderK(F, M) {
    var tapM = tapReader(F, M);
    return function(f) {
        return function(self) {
            return tapM(self, f);
        };
    };
}
function tapReader(F, M) {
    var tapM = (0, external_Chain_js_namespaceObject.tap)(M);
    return function(self, f) {
        return tapM(self, (0, external_function_js_namespaceObject.flow)(f, F.fromReader));
    };
}
exports.ask = __webpack_exports__.ask;
exports.asks = __webpack_exports__.asks;
exports.chainFirstReaderK = __webpack_exports__.chainFirstReaderK;
exports.chainReaderK = __webpack_exports__.chainReaderK;
exports.fromReaderK = __webpack_exports__.fromReaderK;
exports.tapReader = __webpack_exports__.tapReader;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ask",
    "asks",
    "chainFirstReaderK",
    "chainReaderK",
    "fromReaderK",
    "tapReader"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
