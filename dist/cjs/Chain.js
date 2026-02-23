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
    bind: function() {
        return bind;
    },
    chainFirst: function() {
        return chainFirst;
    },
    tap: function() {
        return tap;
    }
});
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function chainFirst(M) {
    var tapM = tap(M);
    return function(f) {
        return function(first) {
            return tapM(first, f);
        };
    };
}
function tap(M) {
    return function(first, f) {
        return M.chain(first, function(a) {
            return M.map(f(a), function() {
                return a;
            });
        });
    };
}
function bind(M) {
    return function(name, f) {
        return function(ma) {
            return M.chain(ma, function(a) {
                return M.map(f(a), function(b) {
                    return Object.assign({}, a, _define_property({}, name, b));
                });
            });
        };
    };
}
exports.bind = __webpack_exports__.bind;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.tap = __webpack_exports__.tap;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "bind",
    "chainFirst",
    "tap"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
