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
    mapLeft: function() {
        return mapLeft;
    },
    separated: function() {
        return separated;
    },
    Functor: function() {
        return Functor;
    },
    right: function() {
        return Separated_right;
    },
    Bifunctor: function() {
        return Bifunctor;
    },
    URI: function() {
        return URI;
    },
    bimap: function() {
        return bimap;
    },
    flap: function() {
        return flap;
    },
    left: function() {
        return Separated_left;
    },
    map: function() {
        return map;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var separated = function(left, right) {
    return {
        left: left,
        right: right
    };
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _mapLeft = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapLeft(f));
};
var _bimap = function(fa, g, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, bimap(g, f));
};
var map = function(f) {
    return function(fa) {
        return separated(Separated_left(fa), f(Separated_right(fa)));
    };
};
var mapLeft = function(f) {
    return function(fa) {
        return separated(f(Separated_left(fa)), Separated_right(fa));
    };
};
var bimap = function(f, g) {
    return function(fa) {
        return separated(f(Separated_left(fa)), g(Separated_right(fa)));
    };
};
var URI = 'Separated';
var Bifunctor = {
    URI: URI,
    mapLeft: _mapLeft,
    bimap: _bimap
};
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Separated_left = function(s) {
    return s.left;
};
var Separated_right = function(s) {
    return s.right;
};
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Functor = __webpack_exports__.Functor;
exports.URI = __webpack_exports__.URI;
exports.bimap = __webpack_exports__.bimap;
exports.flap = __webpack_exports__.flap;
exports.left = __webpack_exports__.left;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.right = __webpack_exports__.right;
exports.separated = __webpack_exports__.separated;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Bifunctor",
    "Functor",
    "URI",
    "bimap",
    "flap",
    "left",
    "map",
    "mapLeft",
    "right",
    "separated"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
