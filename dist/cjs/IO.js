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
    traverseArray: function() {
        return traverseArray;
    },
    FromIO: function() {
        return FromIO;
    },
    chainFirst: function() {
        return chainFirst;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    tap: function() {
        return tap;
    },
    getMonoid: function() {
        return getMonoid;
    },
    flatMap: function() {
        return flatMap;
    },
    io: function() {
        return io;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    let: function() {
        return let_;
    },
    flatten: function() {
        return flatten;
    },
    URI: function() {
        return URI;
    },
    chain: function() {
        return chain;
    },
    fromIO: function() {
        return fromIO;
    },
    asUnit: function() {
        return asUnit;
    },
    ApT: function() {
        return ApT;
    },
    bind: function() {
        return bind;
    },
    bindTo: function() {
        return bindTo;
    },
    Do: function() {
        return Do;
    },
    as: function() {
        return IO_as;
    },
    map: function() {
        return map;
    },
    MonadIO: function() {
        return MonadIO;
    },
    Pointed: function() {
        return Pointed;
    },
    apS: function() {
        return apS;
    },
    Apply: function() {
        return Apply;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
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
    of: function() {
        return of;
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
    sequenceArray: function() {
        return sequenceArray;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var _map = function(ma, f) {
    return function() {
        return f(ma());
    };
};
var _ap = function(mab, ma) {
    return function() {
        return mab()(ma());
    };
};
var _chainRec = function(a, f) {
    return function() {
        var e = f(a)();
        while('Left' === e._tag)e = f(e.left)();
        return e.right;
    };
};
var map = function(f) {
    return function(fa) {
        return _map(fa, f);
    };
};
var ap = function(fa) {
    return function(fab) {
        return _ap(fab, fa);
    };
};
var of = external_function_js_namespaceObject.constant;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return function() {
        return f(ma())();
    };
});
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var URI = 'IO';
var Functor = {
    URI: URI,
    map: _map
};
var IO_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
var asUnit = (0, external_Functor_js_namespaceObject.asUnit)(Functor);
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
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var fromIO = external_function_js_namespaceObject.identity;
var MonadIO = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    fromIO: fromIO
};
var ChainRec = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
var FromIO = {
    URI: URI,
    fromIO: external_function_js_namespaceObject.identity
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        return function() {
            var out = [
                f(0, external_internal_js_namespaceObject.head(as))()
            ];
            for(var i = 1; i < as.length; i++)out.push(f(i, as[i])());
            return out;
        };
    };
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
    };
};
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
var traverseArray = function(f) {
    return traverseReadonlyArrayWithIndex(function(_, a) {
        return f(a);
    });
};
var sequenceArray = /*#__PURE__*/ traverseArray(external_function_js_namespaceObject.identity);
var chain = flatMap;
var chainFirst = tap;
var io = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    fromIO: fromIO,
    chainRec: _chainRec
};
var getSemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(Apply);
var getMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(Applicative);
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.ChainRec = __webpack_exports__.ChainRec;
exports.Do = __webpack_exports__.Do;
exports.FromIO = __webpack_exports__.FromIO;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatten = __webpack_exports__.flatten;
exports.fromIO = __webpack_exports__.fromIO;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.io = __webpack_exports__.io;
exports["let"] = __webpack_exports__["let"];
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.tap = __webpack_exports__.tap;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ApT",
    "Applicative",
    "Apply",
    "Chain",
    "ChainRec",
    "Do",
    "FromIO",
    "Functor",
    "Monad",
    "MonadIO",
    "Pointed",
    "URI",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "as",
    "asUnit",
    "bind",
    "bindTo",
    "chain",
    "chainFirst",
    "flap",
    "flatMap",
    "flatten",
    "fromIO",
    "getMonoid",
    "getSemigroup",
    "io",
    "let",
    "map",
    "of",
    "sequenceArray",
    "tap",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
