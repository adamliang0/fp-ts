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
    as: function() {
        return as;
    },
    flap: function() {
        return flap;
    },
    asUnit: function() {
        return asUnit;
    },
    bindTo: function() {
        return bindTo;
    },
    getFunctorComposition: function() {
        return getFunctorComposition;
    },
    let: function() {
        return let_;
    },
    map: function() {
        return map;
    }
});
var external_function_js_namespaceObject = require("./function.js");
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
function map(F, G) {
    return function(f) {
        return function(fa) {
            return F.map(fa, function(ga) {
                return G.map(ga, f);
            });
        };
    };
}
function flap(F) {
    return function(a) {
        return function(fab) {
            return F.map(fab, function(f) {
                return f(a);
            });
        };
    };
}
function bindTo(F) {
    return function(name) {
        return function(fa) {
            return F.map(fa, function(a) {
                return _define_property({}, name, a);
            });
        };
    };
}
function let_(F) {
    return function(name, f) {
        return function(fa) {
            return F.map(fa, function(a) {
                return Object.assign({}, a, _define_property({}, name, f(a)));
            });
        };
    };
}
function getFunctorComposition(F, G) {
    var _map = map(F, G);
    return {
        map: function(fga, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _map(f));
        }
    };
}
function as(F) {
    return function(self, b) {
        return F.map(self, function() {
            return b;
        });
    };
}
function asUnit(F) {
    var asM = as(F);
    return function(self) {
        return asM(self, void 0);
    };
}
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.bindTo = __webpack_exports__.bindTo;
exports.flap = __webpack_exports__.flap;
exports.getFunctorComposition = __webpack_exports__.getFunctorComposition;
exports["let"] = __webpack_exports__["let"];
exports.map = __webpack_exports__.map;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "as",
    "asUnit",
    "bindTo",
    "flap",
    "getFunctorComposition",
    "let",
    "map"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
