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
    fanIn: function() {
        return fanIn;
    },
    fanin: function() {
        return fanin;
    },
    splitChoice: function() {
        return splitChoice;
    },
    split: function() {
        return split;
    }
});
var external_function_js_namespaceObject = require("./function.js");
function split(P, C) {
    return function(pab, pcd) {
        return C.compose(P.right(pcd), P.left(pab));
    };
}
function fanIn(P, C) {
    var splitPC = split(P, C);
    return function(pac, pbc) {
        return C.compose(P.promap(C.id(), function(cc) {
            return 'Left' === cc._tag ? cc.left : cc.right;
        }, external_function_js_namespaceObject.identity), splitPC(pac, pbc));
    };
}
function splitChoice(F) {
    return split(F, F);
}
function fanin(F) {
    return fanIn(F, F);
}
exports.fanIn = __webpack_exports__.fanIn;
exports.fanin = __webpack_exports__.fanin;
exports.split = __webpack_exports__.split;
exports.splitChoice = __webpack_exports__.splitChoice;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "fanIn",
    "fanin",
    "split",
    "splitChoice"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
