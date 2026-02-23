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
    chainStateK: function() {
        return chainStateK;
    },
    fromStateK: function() {
        return fromStateK;
    },
    put: function() {
        return put;
    },
    get: function() {
        return get;
    },
    gets: function() {
        return gets;
    },
    modify: function() {
        return modify;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_State_js_namespaceObject = require("./State.js");
function get(F) {
    return function() {
        return F.fromState(external_State_js_namespaceObject.get());
    };
}
function put(F) {
    return function(s) {
        return F.fromState(external_State_js_namespaceObject.put(s));
    };
}
function modify(F) {
    return (0, external_function_js_namespaceObject.flow)(external_State_js_namespaceObject.modify, F.fromState);
}
function gets(F) {
    return (0, external_function_js_namespaceObject.flow)(external_State_js_namespaceObject.gets, F.fromState);
}
function fromStateK(F) {
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, F.fromState);
    };
}
function chainStateK(F, M) {
    var fromStateKF = fromStateK(F);
    return function(f) {
        return function(ma) {
            return M.chain(ma, fromStateKF(f));
        };
    };
}
exports.chainStateK = __webpack_exports__.chainStateK;
exports.fromStateK = __webpack_exports__.fromStateK;
exports.get = __webpack_exports__.get;
exports.gets = __webpack_exports__.gets;
exports.modify = __webpack_exports__.modify;
exports.put = __webpack_exports__.put;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "chainStateK",
    "fromStateK",
    "get",
    "gets",
    "modify",
    "put"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
