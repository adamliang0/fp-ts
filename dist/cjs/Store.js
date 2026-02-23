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
    Comonad: function() {
        return Comonad;
    },
    experiment: function() {
        return experiment;
    },
    Functor: function() {
        return Functor;
    },
    duplicate: function() {
        return duplicate;
    },
    seeks: function() {
        return seeks;
    },
    URI: function() {
        return URI;
    },
    flap: function() {
        return flap;
    },
    map: function() {
        return map;
    },
    extend: function() {
        return extend;
    },
    peeks: function() {
        return peeks;
    },
    store: function() {
        return store;
    },
    extract: function() {
        return extract;
    },
    seek: function() {
        return seek;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function seek(s) {
    return function(wa) {
        return {
            peek: wa.peek,
            pos: s
        };
    };
}
function seeks(f) {
    return function(wa) {
        return {
            peek: wa.peek,
            pos: f(wa.pos)
        };
    };
}
function peeks(f) {
    return function(wa) {
        return wa.peek(f(wa.pos));
    };
}
function experiment(F) {
    return function(f) {
        return function(wa) {
            return F.map(f(wa.pos), function(s) {
                return wa.peek(s);
            });
        };
    };
}
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _extend = function(wa, f) {
    return (0, external_function_js_namespaceObject.pipe)(wa, extend(f));
};
var extend = function(f) {
    return function(wa) {
        return {
            peek: function(s) {
                return f({
                    peek: wa.peek,
                    pos: s
                });
            },
            pos: wa.pos
        };
    };
};
var extract = function(wa) {
    return wa.peek(wa.pos);
};
var duplicate = /*#__PURE__*/ extend(external_function_js_namespaceObject.identity);
var map = function(f) {
    return function(fa) {
        return {
            peek: function(s) {
                return f(fa.peek(s));
            },
            pos: fa.pos
        };
    };
};
var URI = 'Store';
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Comonad = {
    URI: URI,
    map: _map,
    extend: _extend,
    extract: extract
};
var store = Comonad;
exports.Comonad = __webpack_exports__.Comonad;
exports.Functor = __webpack_exports__.Functor;
exports.URI = __webpack_exports__.URI;
exports.duplicate = __webpack_exports__.duplicate;
exports.experiment = __webpack_exports__.experiment;
exports.extend = __webpack_exports__.extend;
exports.extract = __webpack_exports__.extract;
exports.flap = __webpack_exports__.flap;
exports.map = __webpack_exports__.map;
exports.peeks = __webpack_exports__.peeks;
exports.seek = __webpack_exports__.seek;
exports.seeks = __webpack_exports__.seeks;
exports.store = __webpack_exports__.store;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Comonad",
    "Functor",
    "URI",
    "duplicate",
    "experiment",
    "extend",
    "extract",
    "flap",
    "map",
    "peeks",
    "seek",
    "seeks",
    "store"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
