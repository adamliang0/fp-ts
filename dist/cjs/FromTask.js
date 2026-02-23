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
    chainTaskK: function() {
        return chainTaskK;
    },
    chainFirstTaskK: function() {
        return chainFirstTaskK;
    },
    tapTask: function() {
        return tapTask;
    },
    fromTaskK: function() {
        return fromTaskK;
    }
});
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
function fromTaskK(F) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, F.fromTask);
    };
}
function chainTaskK(F, M) {
    return function(f) {
        var g = (0, external_function_js_namespaceObject.flow)(f, F.fromTask);
        return function(first) {
            return M.chain(first, g);
        };
    };
}
function chainFirstTaskK(F, M) {
    var tapTaskM = tapTask(F, M);
    return function(f) {
        return function(first) {
            return tapTaskM(first, f);
        };
    };
}
function tapTask(F, M) {
    var tapM = (0, external_Chain_js_namespaceObject.tap)(M);
    return function(self, f) {
        return tapM(self, (0, external_function_js_namespaceObject.flow)(f, F.fromTask));
    };
}
exports.chainFirstTaskK = __webpack_exports__.chainFirstTaskK;
exports.chainTaskK = __webpack_exports__.chainTaskK;
exports.fromTaskK = __webpack_exports__.fromTaskK;
exports.tapTask = __webpack_exports__.tapTask;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "chainFirstTaskK",
    "chainTaskK",
    "fromTaskK",
    "tapTask"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
