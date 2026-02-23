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
    Applicative: function() {
        return Applicative;
    },
    Chain: function() {
        return Chain;
    },
    Foldable: function() {
        return Foldable;
    },
    chainFirst: function() {
        return chainFirst;
    },
    tap: function() {
        return tap;
    },
    flatMap: function() {
        return flatMap;
    },
    Alt: function() {
        return Alt;
    },
    let: function() {
        return let_;
    },
    reduceRight: function() {
        return reduceRight;
    },
    flatten: function() {
        return flatten;
    },
    getEq: function() {
        return getEq;
    },
    URI: function() {
        return URI;
    },
    chain: function() {
        return chain;
    },
    bind: function() {
        return bind;
    },
    extract: function() {
        return extract;
    },
    reduce: function() {
        return reduce;
    },
    alt: function() {
        return alt;
    },
    bindTo: function() {
        return bindTo;
    },
    Do: function() {
        return Do;
    },
    altW: function() {
        return altW;
    },
    Traversable: function() {
        return Traversable;
    },
    map: function() {
        return map;
    },
    apS: function() {
        return apS;
    },
    Pointed: function() {
        return Pointed;
    },
    extend: function() {
        return extend;
    },
    Apply: function() {
        return Apply;
    },
    traverse: function() {
        return traverse;
    },
    sequence: function() {
        return sequence;
    },
    Comonad: function() {
        return Comonad;
    },
    apSecond: function() {
        return apSecond;
    },
    Functor: function() {
        return Functor;
    },
    Monad: function() {
        return Monad;
    },
    duplicate: function() {
        return duplicate;
    },
    flap: function() {
        return flap;
    },
    apFirst: function() {
        return apFirst;
    },
    ChainRec: function() {
        return ChainRec;
    },
    ap: function() {
        return ap;
    },
    foldMap: function() {
        return foldMap;
    },
    getShow: function() {
        return getShow;
    },
    identity: function() {
        return identity;
    },
    of: function() {
        return of;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_ChainRec_js_namespaceObject = require("./ChainRec.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var _reduce = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduce(b, f));
};
var _foldMap = function(M) {
    return function(fa, f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, foldMap(M)(f));
    };
};
var _reduceRight = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduceRight(b, f));
};
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, alt(that));
};
var _extend = function(wa, f) {
    return (0, external_function_js_namespaceObject.pipe)(wa, extend(f));
};
var _traverse = function(F) {
    var traverseF = traverse(F);
    return function(ta, f) {
        return (0, external_function_js_namespaceObject.pipe)(ta, traverseF(f));
    };
};
var _chainRec = external_ChainRec_js_namespaceObject.tailRec;
var map = function(f) {
    return function(fa) {
        return f(fa);
    };
};
var ap = function(fa) {
    return function(fab) {
        return fab(fa);
    };
};
var of = external_function_js_namespaceObject.identity;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return f(ma);
});
var extend = function(f) {
    return function(wa) {
        return f(wa);
    };
};
var extract = external_function_js_namespaceObject.identity;
var duplicate = /*#__PURE__*/ extend(external_function_js_namespaceObject.identity);
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var reduce = function(b, f) {
    return function(fa) {
        return f(b, fa);
    };
};
var foldMap = function() {
    return function(f) {
        return function(fa) {
            return f(fa);
        };
    };
};
var reduceRight = function(b, f) {
    return function(fa) {
        return f(fa, b);
    };
};
var traverse = function(F) {
    return function(f) {
        return function(ta) {
            return F.map(f(ta), external_function_js_namespaceObject.identity);
        };
    };
};
var sequence = function(F) {
    return function(ta) {
        return F.map(ta, external_function_js_namespaceObject.identity);
    };
};
var altW = function() {
    return external_function_js_namespaceObject.identity;
};
var alt = altW;
var URI = 'Identity';
var getShow = external_function_js_namespaceObject.identity;
var getEq = external_function_js_namespaceObject.identity;
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
var apFirst = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apFirst)(Apply);
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(Apply);
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_Chain_js_namespaceObject.tap)(Chain));
var chainFirst = tap;
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
var Traversable = {
    URI: URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
var Comonad = {
    URI: URI,
    map: _map,
    extend: _extend,
    extract: extract
};
var ChainRec = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ (0, external_Chain_js_namespaceObject.bind)(Chain);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var chain = flatMap;
var identity = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    alt: _alt,
    extract: extract,
    extend: _extend,
    chainRec: _chainRec
};
exports.Alt = __webpack_exports__.Alt;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.ChainRec = __webpack_exports__.ChainRec;
exports.Comonad = __webpack_exports__.Comonad;
exports.Do = __webpack_exports__.Do;
exports.Foldable = __webpack_exports__.Foldable;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.Pointed = __webpack_exports__.Pointed;
exports.Traversable = __webpack_exports__.Traversable;
exports.URI = __webpack_exports__.URI;
exports.alt = __webpack_exports__.alt;
exports.altW = __webpack_exports__.altW;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.duplicate = __webpack_exports__.duplicate;
exports.extend = __webpack_exports__.extend;
exports.extract = __webpack_exports__.extract;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatten = __webpack_exports__.flatten;
exports.foldMap = __webpack_exports__.foldMap;
exports.getEq = __webpack_exports__.getEq;
exports.getShow = __webpack_exports__.getShow;
exports.identity = __webpack_exports__.identity;
exports["let"] = __webpack_exports__["let"];
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.sequence = __webpack_exports__.sequence;
exports.tap = __webpack_exports__.tap;
exports.traverse = __webpack_exports__.traverse;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "Applicative",
    "Apply",
    "Chain",
    "ChainRec",
    "Comonad",
    "Do",
    "Foldable",
    "Functor",
    "Monad",
    "Pointed",
    "Traversable",
    "URI",
    "alt",
    "altW",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "bind",
    "bindTo",
    "chain",
    "chainFirst",
    "duplicate",
    "extend",
    "extract",
    "flap",
    "flatMap",
    "flatten",
    "foldMap",
    "getEq",
    "getShow",
    "identity",
    "let",
    "map",
    "of",
    "reduce",
    "reduceRight",
    "sequence",
    "tap",
    "traverse"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
