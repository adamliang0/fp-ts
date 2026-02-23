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
    tracks: function() {
        return tracks;
    },
    Functor: function() {
        return Functor;
    },
    getComonad: function() {
        return getComonad;
    },
    listen: function() {
        return listen;
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
    traced: function() {
        return traced;
    },
    censor: function() {
        return censor;
    },
    listens: function() {
        return listens;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function tracks(M, f) {
    return function(wa) {
        return wa(f(wa(M.empty)));
    };
}
function listen(wa) {
    return function(e) {
        return [
            wa(e),
            e
        ];
    };
}
function listens(f) {
    return function(wa) {
        return function(e) {
            return [
                wa(e),
                f(e)
            ];
        };
    };
}
function censor(f) {
    return function(wa) {
        return function(e) {
            return wa(f(e));
        };
    };
}
function getComonad(monoid) {
    function extend(wa, f) {
        return function(p1) {
            return f(function(p2) {
                return wa(monoid.concat(p1, p2));
            });
        };
    }
    function extract(wa) {
        return wa(monoid.empty);
    }
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        extend: extend,
        extract: extract
    };
}
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var map = function(f) {
    return function(fa) {
        return function(p) {
            return f(fa(p));
        };
    };
};
var URI = 'Traced';
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var traced = Functor;
exports.Functor = __webpack_exports__.Functor;
exports.URI = __webpack_exports__.URI;
exports.censor = __webpack_exports__.censor;
exports.flap = __webpack_exports__.flap;
exports.getComonad = __webpack_exports__.getComonad;
exports.listen = __webpack_exports__.listen;
exports.listens = __webpack_exports__.listens;
exports.map = __webpack_exports__.map;
exports.traced = __webpack_exports__.traced;
exports.tracks = __webpack_exports__.tracks;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Functor",
    "URI",
    "censor",
    "flap",
    "getComonad",
    "listen",
    "listens",
    "map",
    "traced",
    "tracks"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
