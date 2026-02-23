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
    fanOut: function() {
        return fanOut;
    },
    fanout: function() {
        return fanout;
    },
    splitStrong: function() {
        return splitStrong;
    },
    split: function() {
        return split;
    }
});
var external_function_js_namespaceObject = require("./function.js");
function split(S, C) {
    return function(pab, pcd) {
        return C.compose(S.second(pcd), S.first(pab));
    };
}
function fanOut(S, C) {
    var splitSC = split(S, C);
    return function(pab, pac) {
        return C.compose(splitSC(pab, pac), S.promap(C.id(), external_function_js_namespaceObject.identity, function(a) {
            return [
                a,
                a
            ];
        }));
    };
}
function splitStrong(F) {
    return split(F, F);
}
function fanout(F) {
    return fanOut(F, F);
}
exports.fanOut = __webpack_exports__.fanOut;
exports.fanout = __webpack_exports__.fanout;
exports.split = __webpack_exports__.split;
exports.splitStrong = __webpack_exports__.splitStrong;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "fanOut",
    "fanout",
    "split",
    "splitStrong"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
