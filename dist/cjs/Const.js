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
    make: function() {
        return make;
    },
    Contravariant: function() {
        return Contravariant;
    },
    getBounded: function() {
        return getBounded;
    },
    getSemiring: function() {
        return getSemiring;
    },
    getMonoid: function() {
        return getMonoid;
    },
    getRing: function() {
        return getRing;
    },
    map: function() {
        return map;
    },
    getOrd: function() {
        return getOrd;
    },
    const_: function() {
        return const_;
    },
    getBooleanAlgebra: function() {
        return getBooleanAlgebra;
    },
    getApply: function() {
        return getApply;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    mapLeft: function() {
        return mapLeft;
    },
    Functor: function() {
        return Functor;
    },
    getEq: function() {
        return getEq;
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
    getHeytingAlgebra: function() {
        return getHeytingAlgebra;
    },
    getApplicative: function() {
        return getApplicative;
    },
    getShow: function() {
        return getShow;
    },
    contramap: function() {
        return contramap;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var make = external_function_js_namespaceObject.unsafeCoerce;
function getShow(S) {
    return {
        show: function(c) {
            return "make(".concat(S.show(c), ")");
        }
    };
}
var getEq = external_function_js_namespaceObject.identity;
var getOrd = external_function_js_namespaceObject.identity;
var getBounded = external_function_js_namespaceObject.identity;
var getSemigroup = external_function_js_namespaceObject.identity;
var getMonoid = external_function_js_namespaceObject.identity;
var getSemiring = external_function_js_namespaceObject.identity;
var getRing = external_function_js_namespaceObject.identity;
var getHeytingAlgebra = external_function_js_namespaceObject.identity;
var getBooleanAlgebra = external_function_js_namespaceObject.identity;
function getApply(S) {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return make(S.concat(fab, fa));
        }
    };
}
function getApplicative(M) {
    var A = getApply(M);
    return {
        URI: URI,
        _E: void 0,
        map: A.map,
        ap: A.ap,
        of: function() {
            return make(M.empty);
        }
    };
}
var _contramap = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, contramap(f));
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _bimap = function(fa, f, g) {
    return (0, external_function_js_namespaceObject.pipe)(fa, bimap(f, g));
};
var _mapLeft = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapLeft(f));
};
var contramap = function() {
    return external_function_js_namespaceObject.unsafeCoerce;
};
var map = function() {
    return external_function_js_namespaceObject.unsafeCoerce;
};
var bimap = function(f) {
    return function(fa) {
        return make(f(fa));
    };
};
var mapLeft = function(f) {
    return function(fa) {
        return make(f(fa));
    };
};
var URI = 'Const';
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Contravariant = {
    URI: URI,
    contramap: _contramap
};
var Bifunctor = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var const_ = {
    URI: URI,
    map: _map,
    contramap: _contramap,
    bimap: _bimap,
    mapLeft: _mapLeft
};
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Contravariant = __webpack_exports__.Contravariant;
exports.Functor = __webpack_exports__.Functor;
exports.URI = __webpack_exports__.URI;
exports.bimap = __webpack_exports__.bimap;
exports.const_ = __webpack_exports__.const_;
exports.contramap = __webpack_exports__.contramap;
exports.flap = __webpack_exports__.flap;
exports.getApplicative = __webpack_exports__.getApplicative;
exports.getApply = __webpack_exports__.getApply;
exports.getBooleanAlgebra = __webpack_exports__.getBooleanAlgebra;
exports.getBounded = __webpack_exports__.getBounded;
exports.getEq = __webpack_exports__.getEq;
exports.getHeytingAlgebra = __webpack_exports__.getHeytingAlgebra;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getOrd = __webpack_exports__.getOrd;
exports.getRing = __webpack_exports__.getRing;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getSemiring = __webpack_exports__.getSemiring;
exports.getShow = __webpack_exports__.getShow;
exports.make = __webpack_exports__.make;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Bifunctor",
    "Contravariant",
    "Functor",
    "URI",
    "bimap",
    "const_",
    "contramap",
    "flap",
    "getApplicative",
    "getApply",
    "getBooleanAlgebra",
    "getBounded",
    "getEq",
    "getHeytingAlgebra",
    "getMonoid",
    "getOrd",
    "getRing",
    "getSemigroup",
    "getSemiring",
    "getShow",
    "make",
    "map",
    "mapLeft"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
