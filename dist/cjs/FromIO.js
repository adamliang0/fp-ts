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
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    tapIO: function() {
        return tapIO;
    },
    fromIOK: function() {
        return fromIOK;
    },
    chainIOK: function() {
        return chainIOK;
    }
});
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
function fromIOK(F) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, F.fromIO);
    };
}
function chainIOK(F, M) {
    return function(f) {
        var g = (0, external_function_js_namespaceObject.flow)(f, F.fromIO);
        return function(first) {
            return M.chain(first, g);
        };
    };
}
function chainFirstIOK(F, M) {
    var tapIOM = tapIO(F, M);
    return function(f) {
        return function(first) {
            return tapIOM(first, f);
        };
    };
}
function tapIO(F, M) {
    var chainFirstM = (0, external_Chain_js_namespaceObject.tap)(M);
    return function(self, f) {
        return chainFirstM(self, (0, external_function_js_namespaceObject.flow)(f, F.fromIO));
    };
}
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.tapIO = __webpack_exports__.tapIO;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "chainFirstIOK",
    "chainIOK",
    "fromIOK",
    "tapIO"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
