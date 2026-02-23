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
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    FromIO: function() {
        return FromIO;
    },
    tap: function() {
        return tap;
    },
    flatMapReader: function() {
        return flatMapReader;
    },
    local: function() {
        return local;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    chainW: function() {
        return chainW;
    },
    URI: function() {
        return URI;
    },
    asUnit: function() {
        return asUnit;
    },
    fromIO: function() {
        return fromIO;
    },
    ApT: function() {
        return ApT;
    },
    asks: function() {
        return asks;
    },
    Do: function() {
        return Do;
    },
    as: function() {
        return ReaderIO_as;
    },
    apS: function() {
        return apS;
    },
    apSW: function() {
        return apSW;
    },
    Apply: function() {
        return Apply;
    },
    Functor: function() {
        return Functor;
    },
    chainReaderK: function() {
        return chainReaderK;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    FromReader: function() {
        return FromReader;
    },
    Applicative: function() {
        return Applicative;
    },
    Chain: function() {
        return Chain;
    },
    flattenW: function() {
        return flattenW;
    },
    chainReaderKW: function() {
        return chainReaderKW;
    },
    asksReaderIOW: function() {
        return asksReaderIOW;
    },
    chainFirst: function() {
        return chainFirst;
    },
    tapReader: function() {
        return tapReader;
    },
    traverseArray: function() {
        return traverseArray;
    },
    flatMap: function() {
        return flatMap;
    },
    tapIO: function() {
        return tapIO;
    },
    asksReaderIO: function() {
        return asksReaderIO;
    },
    flatMapIO: function() {
        return flatMapIO;
    },
    flatten: function() {
        return flatten;
    },
    apW: function() {
        return apW;
    },
    ask: function() {
        return ask;
    },
    fromIOK: function() {
        return fromIOK;
    },
    chain: function() {
        return chain;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    chainFirstReaderK: function() {
        return chainFirstReaderK;
    },
    fromReaderK: function() {
        return fromReaderK;
    },
    bind: function() {
        return bind;
    },
    bindTo: function() {
        return bindTo;
    },
    bindW: function() {
        return bindW;
    },
    chainFirstReaderKW: function() {
        return chainFirstReaderKW;
    },
    chainIOK: function() {
        return chainIOK;
    },
    fromReader: function() {
        return fromReader;
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
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    apSecond: function() {
        return apSecond;
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
    ap: function() {
        return ap;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_FromReader_js_namespaceObject = require("./FromReader.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_IO_js_namespaceObject = require("./IO.js");
var external_Reader_js_namespaceObject = require("./Reader.js");
var external_ReaderT_js_namespaceObject = require("./ReaderT.js");
var fromReader = /*#__PURE__*/ external_ReaderT_js_namespaceObject.fromReader(external_IO_js_namespaceObject.Pointed);
var fromIO = external_Reader_js_namespaceObject.of;
var local = external_Reader_js_namespaceObject.local;
var asksReaderIOW = external_Reader_js_namespaceObject.asksReaderW;
var asksReaderIO = asksReaderIOW;
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var map = /*#__PURE__*/ external_ReaderT_js_namespaceObject.map(external_IO_js_namespaceObject.Functor);
var ap = /*#__PURE__*/ external_ReaderT_js_namespaceObject.ap(external_IO_js_namespaceObject.Apply);
var apW = ap;
var of = /*#__PURE__*/ external_ReaderT_js_namespaceObject.of(external_IO_js_namespaceObject.Pointed);
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_ReaderT_js_namespaceObject.flatMap(external_IO_js_namespaceObject.Monad));
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var URI = 'ReaderIO';
var Functor = {
    URI: URI,
    map: _map
};
var ReaderIO_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
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
    of: of,
    ap: _ap,
    chain: flatMap
};
var MonadIO = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    fromIO: fromIO
};
var FromIO = {
    URI: URI,
    fromIO: fromIO
};
var FromReader = {
    URI: URI,
    fromReader: fromReader
};
var _FlatMap = {
    flatMap: flatMap
};
var _FromIO = {
    fromIO: FromIO.fromIO
};
var _FromReader = {
    fromReader: fromReader
};
var flatMapIO = external_internal_js_namespaceObject.flatMapIO(_FromIO, _FlatMap);
var flatMapReader = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapReader(_FromReader, _FlatMap);
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var tapIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromIO_js_namespaceObject.tapIO)(FromIO, Chain));
var tapReader = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromReader_js_namespaceObject.tapReader)(FromReader, Chain));
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var chainIOK = flatMapIO;
var chainFirstIOK = tapIO;
var ask = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.ask)(FromReader);
var asks = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.asks)(FromReader);
var fromReaderK = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.fromReaderK)(FromReader);
var chainReaderK = flatMapReader;
var chainReaderKW = flatMapReader;
var chainFirstReaderK = tapReader;
var chainFirstReaderKW = tapReader;
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var apSW = apS;
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return (0, external_function_js_namespaceObject.flow)(external_Reader_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(f), external_Reader_js_namespaceObject.map(external_IO_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(external_function_js_namespaceObject.SK)));
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
var chainW = flatMap;
var chainFirst = tap;
var chainFirstW = tap;
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.Do = __webpack_exports__.Do;
exports.FromIO = __webpack_exports__.FromIO;
exports.FromReader = __webpack_exports__.FromReader;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSW = __webpack_exports__.apSW;
exports.apSecond = __webpack_exports__.apSecond;
exports.apW = __webpack_exports__.apW;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.ask = __webpack_exports__.ask;
exports.asks = __webpack_exports__.asks;
exports.asksReaderIO = __webpack_exports__.asksReaderIO;
exports.asksReaderIOW = __webpack_exports__.asksReaderIOW;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.bindW = __webpack_exports__.bindW;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainFirstReaderK = __webpack_exports__.chainFirstReaderK;
exports.chainFirstReaderKW = __webpack_exports__.chainFirstReaderKW;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.chainReaderK = __webpack_exports__.chainReaderK;
exports.chainReaderKW = __webpack_exports__.chainReaderKW;
exports.chainW = __webpack_exports__.chainW;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatMapReader = __webpack_exports__.flatMapReader;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromReader = __webpack_exports__.fromReader;
exports.fromReaderK = __webpack_exports__.fromReaderK;
exports.local = __webpack_exports__.local;
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.tap = __webpack_exports__.tap;
exports.tapIO = __webpack_exports__.tapIO;
exports.tapReader = __webpack_exports__.tapReader;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ApT",
    "Applicative",
    "Apply",
    "Chain",
    "Do",
    "FromIO",
    "FromReader",
    "Functor",
    "Monad",
    "MonadIO",
    "Pointed",
    "URI",
    "ap",
    "apFirst",
    "apS",
    "apSW",
    "apSecond",
    "apW",
    "as",
    "asUnit",
    "ask",
    "asks",
    "asksReaderIO",
    "asksReaderIOW",
    "bind",
    "bindTo",
    "bindW",
    "chain",
    "chainFirst",
    "chainFirstIOK",
    "chainFirstReaderK",
    "chainFirstReaderKW",
    "chainFirstW",
    "chainIOK",
    "chainReaderK",
    "chainReaderKW",
    "chainW",
    "flap",
    "flatMap",
    "flatMapIO",
    "flatMapReader",
    "flatten",
    "flattenW",
    "fromIO",
    "fromIOK",
    "fromReader",
    "fromReaderK",
    "local",
    "map",
    "of",
    "sequenceArray",
    "tap",
    "tapIO",
    "tapReader",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
