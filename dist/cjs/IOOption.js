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
    flatMapEither: function() {
        return flatMapEither;
    },
    flatMapNullable: function() {
        return flatMapNullable;
    },
    matchE: function() {
        return matchE;
    },
    FromIO: function() {
        return FromIO;
    },
    matchW: function() {
        return matchW;
    },
    toNullable: function() {
        return toNullable;
    },
    tap: function() {
        return tap;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    some: function() {
        return some;
    },
    Zero: function() {
        return Zero;
    },
    Alt: function() {
        return Alt;
    },
    FromEither: function() {
        return FromEither;
    },
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    fromIOEither: function() {
        return fromIOEither;
    },
    URI: function() {
        return URI;
    },
    fromEitherK: function() {
        return fromEitherK;
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
    fromNullableK: function() {
        return fromNullableK;
    },
    alt: function() {
        return alt;
    },
    zero: function() {
        return zero;
    },
    Do: function() {
        return Do;
    },
    altW: function() {
        return altW;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    as: function() {
        return IOOption_as;
    },
    tapEither: function() {
        return tapEither;
    },
    apS: function() {
        return apS;
    },
    Apply: function() {
        return Apply;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    Functor: function() {
        return Functor;
    },
    filter: function() {
        return filter;
    },
    Alternative: function() {
        return Alternative;
    },
    matchEW: function() {
        return matchEW;
    },
    Applicative: function() {
        return Applicative;
    },
    Chain: function() {
        return Chain;
    },
    fromEither: function() {
        return fromEither;
    },
    chainFirst: function() {
        return chainFirst;
    },
    fold: function() {
        return fold;
    },
    match: function() {
        return match;
    },
    none: function() {
        return none;
    },
    flatMap: function() {
        return flatMap;
    },
    Filterable: function() {
        return Filterable;
    },
    getOrElse: function() {
        return getOrElse;
    },
    tapIO: function() {
        return tapIO;
    },
    toUndefined: function() {
        return toUndefined;
    },
    let: function() {
        return let_;
    },
    flatMapIO: function() {
        return flatMapIO;
    },
    fromOption: function() {
        return fromOption;
    },
    flatten: function() {
        return flatten;
    },
    fromIOK: function() {
        return fromIOK;
    },
    chainEitherK: function() {
        return chainEitherK;
    },
    separate: function() {
        return separate;
    },
    chain: function() {
        return chain;
    },
    Compactable: function() {
        return Compactable;
    },
    getOrElseW: function() {
        return getOrElseW;
    },
    bind: function() {
        return bind;
    },
    chainFirstEitherK: function() {
        return chainFirstEitherK;
    },
    partitionMap: function() {
        return partitionMap;
    },
    bindTo: function() {
        return bindTo;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    chainIOK: function() {
        return chainIOK;
    },
    fromNullable: function() {
        return fromNullable;
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
    compact: function() {
        return compact;
    },
    partition: function() {
        return partition;
    },
    flatMapOption: function() {
        return flatMapOption;
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
    filterMap: function() {
        return filterMap;
    },
    ap: function() {
        return ap;
    },
    chainNullableK: function() {
        return chainNullableK;
    },
    guard: function() {
        return guard;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_Compactable_js_namespaceObject = require("./Compactable.js");
var external_Filterable_js_namespaceObject = require("./Filterable.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_IO_js_namespaceObject = require("./IO.js");
var external_Option_js_namespaceObject = require("./Option.js");
var external_OptionT_js_namespaceObject = require("./OptionT.js");
var external_Zero_js_namespaceObject = require("./Zero.js");
var some = /*#__PURE__*/ external_OptionT_js_namespaceObject.some(external_IO_js_namespaceObject.Pointed);
var fromPredicate = /*#__PURE__*/ external_OptionT_js_namespaceObject.fromPredicate(external_IO_js_namespaceObject.Pointed);
var fromOption = external_IO_js_namespaceObject.of;
var fromEither = /*#__PURE__*/ external_OptionT_js_namespaceObject.fromEither(external_IO_js_namespaceObject.Pointed);
var fromIO = /*#__PURE__*/ external_OptionT_js_namespaceObject.fromF(external_IO_js_namespaceObject.Functor);
var fromIOEither = /*#__PURE__*/ external_IO_js_namespaceObject.map(external_Option_js_namespaceObject.fromEither);
var match = /*#__PURE__*/ external_OptionT_js_namespaceObject.match(external_IO_js_namespaceObject.Functor);
var matchW = match;
var matchE = /*#__PURE__*/ external_OptionT_js_namespaceObject.matchE(external_IO_js_namespaceObject.Chain);
var fold = matchE;
var matchEW = matchE;
var getOrElse = /*#__PURE__*/ external_OptionT_js_namespaceObject.getOrElse(external_IO_js_namespaceObject.Monad);
var getOrElseW = getOrElse;
var toUndefined = external_IO_js_namespaceObject.map(external_Option_js_namespaceObject.toUndefined);
var toNullable = external_IO_js_namespaceObject.map(external_Option_js_namespaceObject.toNullable);
var fromNullable = /*#__PURE__*/ external_OptionT_js_namespaceObject.fromNullable(external_IO_js_namespaceObject.Pointed);
var fromNullableK = /*#__PURE__*/ external_OptionT_js_namespaceObject.fromNullableK(external_IO_js_namespaceObject.Pointed);
var chainNullableK = /*#__PURE__*/ external_OptionT_js_namespaceObject.chainNullableK(external_IO_js_namespaceObject.Monad);
var fromOptionK = /*#__PURE__*/ external_OptionT_js_namespaceObject.fromOptionK(external_IO_js_namespaceObject.Pointed);
var map = /*#__PURE__*/ external_OptionT_js_namespaceObject.map(external_IO_js_namespaceObject.Functor);
var ap = /*#__PURE__*/ external_OptionT_js_namespaceObject.ap(external_IO_js_namespaceObject.Apply);
var of = some;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_OptionT_js_namespaceObject.flatMap(external_IO_js_namespaceObject.Monad));
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var alt = /*#__PURE__*/ external_OptionT_js_namespaceObject.alt(external_IO_js_namespaceObject.Monad);
var altW = alt;
var zero = /*#__PURE__*/ external_OptionT_js_namespaceObject.zero(external_IO_js_namespaceObject.Pointed);
var none = /*#__PURE__*/ zero();
var compact = /*#__PURE__*/ (0, external_Compactable_js_namespaceObject.compact)(external_IO_js_namespaceObject.Functor, external_Option_js_namespaceObject.Compactable);
var separate = /*#__PURE__*/ (0, external_Compactable_js_namespaceObject.separate)(external_IO_js_namespaceObject.Functor, external_Option_js_namespaceObject.Compactable, external_Option_js_namespaceObject.Functor);
var filter = /*#__PURE__*/ (0, external_Filterable_js_namespaceObject.filter)(external_IO_js_namespaceObject.Functor, external_Option_js_namespaceObject.Filterable);
var filterMap = /*#__PURE__*/ (0, external_Filterable_js_namespaceObject.filterMap)(external_IO_js_namespaceObject.Functor, external_Option_js_namespaceObject.Filterable);
var partition = /*#__PURE__*/ (0, external_Filterable_js_namespaceObject.partition)(external_IO_js_namespaceObject.Functor, external_Option_js_namespaceObject.Filterable);
var partitionMap = /*#__PURE__*/ (0, external_Filterable_js_namespaceObject.partitionMap)(external_IO_js_namespaceObject.Functor, external_Option_js_namespaceObject.Filterable);
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, alt(that));
};
var _filter = function(fa, predicate) {
    return (0, external_function_js_namespaceObject.pipe)(fa, filter(predicate));
};
var _filterMap = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, filterMap(f));
};
var _partition = function(fa, predicate) {
    return (0, external_function_js_namespaceObject.pipe)(fa, partition(predicate));
};
var _partitionMap = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, partitionMap(f));
};
var URI = 'IOOption';
var Functor = {
    URI: URI,
    map: _map
};
var IOOption_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
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
var FromEither = {
    URI: URI,
    fromEither: fromEither
};
var FromIO = {
    URI: URI,
    fromIO: fromIO
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var tapEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromEither_js_namespaceObject.tapEither)(FromEither, Chain));
var tapIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromIO_js_namespaceObject.tapIO)(FromIO, Chain));
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
var Zero = {
    URI: URI,
    zero: zero
};
var guard = /*#__PURE__*/ (0, external_Zero_js_namespaceObject.guard)(Zero, Pointed);
var Alternative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    alt: _alt,
    zero: zero
};
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap
};
var MonadIO = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    fromIO: fromIO
};
var Compactable = {
    URI: URI,
    compact: compact,
    separate: separate
};
var Filterable = {
    URI: URI,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
var _FlatMap = {
    flatMap: flatMap
};
var _FromIO = {
    fromIO: FromIO.fromIO
};
var _FromEither = {
    fromEither: fromEither
};
var flatMapIO = external_internal_js_namespaceObject.flatMapIO(_FromIO, _FlatMap);
var flatMapOption = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, fromOptionK(f));
});
var flatMapEither = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapEither(_FromEither, _FlatMap);
var flatMapNullable = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, fromNullableK(f));
});
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var chainIOK = flatMapIO;
var chainFirstIOK = tapIO;
var fromEitherK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromEitherK)(FromEither);
var chainEitherK = flatMapEither;
var chainFirstEitherK = tapEither;
var chainOptionK = flatMapOption;
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return (0, external_function_js_namespaceObject.flow)(external_IO_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(f), external_IO_js_namespaceObject.map(external_Option_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(external_function_js_namespaceObject.SK)));
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
    };
};
var chain = flatMap;
var chainFirst = tap;
exports.Alt = __webpack_exports__.Alt;
exports.Alternative = __webpack_exports__.Alternative;
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.Compactable = __webpack_exports__.Compactable;
exports.Do = __webpack_exports__.Do;
exports.Filterable = __webpack_exports__.Filterable;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromIO = __webpack_exports__.FromIO;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.Zero = __webpack_exports__.Zero;
exports.alt = __webpack_exports__.alt;
exports.altW = __webpack_exports__.altW;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainEitherK = __webpack_exports__.chainEitherK;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstEitherK = __webpack_exports__.chainFirstEitherK;
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.chainNullableK = __webpack_exports__.chainNullableK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.compact = __webpack_exports__.compact;
exports.filter = __webpack_exports__.filter;
exports.filterMap = __webpack_exports__.filterMap;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapEither = __webpack_exports__.flatMapEither;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatMapNullable = __webpack_exports__.flatMapNullable;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatten = __webpack_exports__.flatten;
exports.fold = __webpack_exports__.fold;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOEither = __webpack_exports__.fromIOEither;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromNullable = __webpack_exports__.fromNullable;
exports.fromNullableK = __webpack_exports__.fromNullableK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.getOrElseW = __webpack_exports__.getOrElseW;
exports.guard = __webpack_exports__.guard;
exports["let"] = __webpack_exports__["let"];
exports.map = __webpack_exports__.map;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.matchEW = __webpack_exports__.matchEW;
exports.matchW = __webpack_exports__.matchW;
exports.none = __webpack_exports__.none;
exports.of = __webpack_exports__.of;
exports.partition = __webpack_exports__.partition;
exports.partitionMap = __webpack_exports__.partitionMap;
exports.separate = __webpack_exports__.separate;
exports.some = __webpack_exports__.some;
exports.tap = __webpack_exports__.tap;
exports.tapEither = __webpack_exports__.tapEither;
exports.tapIO = __webpack_exports__.tapIO;
exports.toNullable = __webpack_exports__.toNullable;
exports.toUndefined = __webpack_exports__.toUndefined;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
exports.zero = __webpack_exports__.zero;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "Alternative",
    "ApT",
    "Applicative",
    "Apply",
    "Chain",
    "Compactable",
    "Do",
    "Filterable",
    "FromEither",
    "FromIO",
    "Functor",
    "Monad",
    "MonadIO",
    "Pointed",
    "URI",
    "Zero",
    "alt",
    "altW",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "as",
    "asUnit",
    "bind",
    "bindTo",
    "chain",
    "chainEitherK",
    "chainFirst",
    "chainFirstEitherK",
    "chainFirstIOK",
    "chainIOK",
    "chainNullableK",
    "chainOptionK",
    "compact",
    "filter",
    "filterMap",
    "flap",
    "flatMap",
    "flatMapEither",
    "flatMapIO",
    "flatMapNullable",
    "flatMapOption",
    "flatten",
    "fold",
    "fromEither",
    "fromEitherK",
    "fromIO",
    "fromIOEither",
    "fromIOK",
    "fromNullable",
    "fromNullableK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "getOrElse",
    "getOrElseW",
    "guard",
    "let",
    "map",
    "match",
    "matchE",
    "matchEW",
    "matchW",
    "none",
    "of",
    "partition",
    "partitionMap",
    "separate",
    "some",
    "tap",
    "tapEither",
    "tapIO",
    "toNullable",
    "toUndefined",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex",
    "zero"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
