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
    matchE: function() {
        return matchE;
    },
    flatMapReader: function() {
        return flatMapReader;
    },
    Alt: function() {
        return Alt;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    getApplicativeReaderValidation: function() {
        return getApplicativeReaderValidation;
    },
    URI: function() {
        return URI;
    },
    asks: function() {
        return asks;
    },
    orLeft: function() {
        return orLeft;
    },
    alt: function() {
        return ReaderEither_alt;
    },
    tapError: function() {
        return tapError;
    },
    tapEither: function() {
        return tapEither;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    apS: function() {
        return apS;
    },
    left: function() {
        return left;
    },
    Apply: function() {
        return Apply;
    },
    asksReaderEitherW: function() {
        return asksReaderEitherW;
    },
    Functor: function() {
        return Functor;
    },
    mapError: function() {
        return mapError;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    rightReader: function() {
        return rightReader;
    },
    FromReader: function() {
        return FromReader;
    },
    chainEitherKW: function() {
        return chainEitherKW;
    },
    Applicative: function() {
        return Applicative;
    },
    flattenW: function() {
        return flattenW;
    },
    fromEither: function() {
        return fromEither;
    },
    chainReaderKW: function() {
        return chainReaderKW;
    },
    getApplyMonoid: function() {
        return getApplyMonoid;
    },
    fold: function() {
        return fold;
    },
    liftOption: function() {
        return liftOption;
    },
    liftNullable: function() {
        return liftNullable;
    },
    match: function() {
        return match;
    },
    let: function() {
        return let_;
    },
    mapLeft: function() {
        return mapLeft;
    },
    fromOption: function() {
        return fromOption;
    },
    chainOptionKW: function() {
        return chainOptionKW;
    },
    apW: function() {
        return apW;
    },
    ask: function() {
        return ask;
    },
    Bifunctor: function() {
        return Bifunctor;
    },
    bimap: function() {
        return bimap;
    },
    getApplySemigroup: function() {
        return getApplySemigroup;
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
    chainFirstEitherK: function() {
        return chainFirstEitherK;
    },
    bindTo: function() {
        return bindTo;
    },
    getAltReaderValidation: function() {
        return getAltReaderValidation;
    },
    asksReaderEither: function() {
        return asksReaderEither;
    },
    getFilterable: function() {
        return getFilterable;
    },
    apFirstW: function() {
        return apFirstW;
    },
    apSecond: function() {
        return apSecond;
    },
    Monad: function() {
        return Monad;
    },
    getReaderValidation: function() {
        return getReaderValidation;
    },
    of: function() {
        return of;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    apFirst: function() {
        return apFirst;
    },
    ap: function() {
        return ReaderEither_ap;
    },
    readerEither: function() {
        return readerEither;
    },
    flatMapNullable: function() {
        return flatMapNullable;
    },
    filterOrElse: function() {
        return filterOrElse;
    },
    swap: function() {
        return swap;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    right: function() {
        return right;
    },
    tap: function() {
        return tap;
    },
    apSecondW: function() {
        return apSecondW;
    },
    orElseFirst: function() {
        return orElseFirst;
    },
    FromEither: function() {
        return FromEither;
    },
    local: function() {
        return local;
    },
    getCompactable: function() {
        return getCompactable;
    },
    mapBoth: function() {
        return mapBoth;
    },
    chainW: function() {
        return chainW;
    },
    MonadThrow: function() {
        return MonadThrow;
    },
    asUnit: function() {
        return asUnit;
    },
    fromEitherK: function() {
        return fromEitherK;
    },
    ApT: function() {
        return ApT;
    },
    orElseFirstW: function() {
        return orElseFirstW;
    },
    Do: function() {
        return Do;
    },
    altW: function() {
        return altW;
    },
    orElseW: function() {
        return orElseW;
    },
    as: function() {
        return ReaderEither_as;
    },
    apSW: function() {
        return apSW;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    chainReaderK: function() {
        return chainReaderK;
    },
    matchEW: function() {
        return matchEW;
    },
    Chain: function() {
        return Chain;
    },
    traverseArray: function() {
        return traverseArray;
    },
    chainFirst: function() {
        return chainFirst;
    },
    tapReader: function() {
        return tapReader;
    },
    flatMap: function() {
        return flatMap;
    },
    foldW: function() {
        return foldW;
    },
    getOrElse: function() {
        return getOrElse;
    },
    flatten: function() {
        return flatten;
    },
    chainEitherK: function() {
        return chainEitherK;
    },
    chain: function() {
        return chain;
    },
    getOrElseW: function() {
        return getOrElseW;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    orLeftW: function() {
        return orLeftW;
    },
    fromReader: function() {
        return fromReader;
    },
    bindW: function() {
        return bindW;
    },
    chainFirstReaderKW: function() {
        return chainFirstReaderKW;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    map: function() {
        return map;
    },
    filterOrElseW: function() {
        return filterOrElseW;
    },
    leftReader: function() {
        return leftReader;
    },
    Pointed: function() {
        return Pointed;
    },
    orElse: function() {
        return orElse;
    },
    flatMapOption: function() {
        return flatMapOption;
    },
    toUnion: function() {
        return toUnion;
    },
    throwError: function() {
        return throwError;
    },
    flap: function() {
        return flap;
    },
    chainFirstEitherKW: function() {
        return chainFirstEitherKW;
    },
    matchW: function() {
        return matchW;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_Compactable_js_namespaceObject = require("./Compactable.js");
var external_Either_js_namespaceObject = require("./Either.js");
var external_EitherT_js_namespaceObject = require("./EitherT.js");
var external_Filterable_js_namespaceObject = require("./Filterable.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_FromReader_js_namespaceObject = require("./FromReader.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Reader_js_namespaceObject = require("./Reader.js");
var left = /*#__PURE__*/ external_EitherT_js_namespaceObject.left(external_Reader_js_namespaceObject.Pointed);
var right = /*#__PURE__*/ external_EitherT_js_namespaceObject.right(external_Reader_js_namespaceObject.Pointed);
var rightReader = /*#__PURE__*/ external_EitherT_js_namespaceObject.rightF(external_Reader_js_namespaceObject.Functor);
var leftReader = /*#__PURE__*/ external_EitherT_js_namespaceObject.leftF(external_Reader_js_namespaceObject.Functor);
var fromEither = external_Reader_js_namespaceObject.of;
var fromReader = rightReader;
var match = /*#__PURE__*/ external_EitherT_js_namespaceObject.match(external_Reader_js_namespaceObject.Functor);
var matchW = match;
var matchE = /*#__PURE__*/ external_EitherT_js_namespaceObject.matchE(external_Reader_js_namespaceObject.Monad);
var fold = matchE;
var matchEW = matchE;
var foldW = matchEW;
var getOrElse = /*#__PURE__*/ external_EitherT_js_namespaceObject.getOrElse(external_Reader_js_namespaceObject.Monad);
var getOrElseW = getOrElse;
var toUnion = /*#__PURE__*/ external_EitherT_js_namespaceObject.toUnion(external_Reader_js_namespaceObject.Functor);
var local = external_Reader_js_namespaceObject.local;
var asksReaderEitherW = external_Reader_js_namespaceObject.asksReaderW;
var asksReaderEither = asksReaderEitherW;
var orElse = /*#__PURE__*/ external_EitherT_js_namespaceObject.orElse(external_Reader_js_namespaceObject.Monad);
var orElseW = orElse;
var tapError = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.tapError(external_Reader_js_namespaceObject.Monad));
var orLeft = /*#__PURE__*/ external_EitherT_js_namespaceObject.orLeft(external_Reader_js_namespaceObject.Monad);
var orLeftW = orLeft;
var swap = /*#__PURE__*/ external_EitherT_js_namespaceObject.swap(external_Reader_js_namespaceObject.Functor);
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ReaderEither_ap(fa));
};
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, ReaderEither_alt(that));
};
var map = /*#__PURE__*/ external_EitherT_js_namespaceObject.map(external_Reader_js_namespaceObject.Functor);
var mapBoth = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(3, external_EitherT_js_namespaceObject.mapBoth(external_Reader_js_namespaceObject.Functor));
var bimap = mapBoth;
var mapError = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.mapError(external_Reader_js_namespaceObject.Functor));
var mapLeft = mapError;
var ReaderEither_ap = /*#__PURE__*/ external_EitherT_js_namespaceObject.ap(external_Reader_js_namespaceObject.Apply);
var apW = ReaderEither_ap;
var of = right;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.flatMap(external_Reader_js_namespaceObject.Monad));
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var ReaderEither_alt = /*#__PURE__*/ external_EitherT_js_namespaceObject.alt(external_Reader_js_namespaceObject.Monad);
var altW = ReaderEither_alt;
var throwError = left;
var URI = 'ReaderEither';
var getCompactable = function(M) {
    var C = external_Either_js_namespaceObject.getCompactable(M);
    return {
        URI: URI,
        _E: void 0,
        compact: (0, external_Compactable_js_namespaceObject.compact)(external_Reader_js_namespaceObject.Functor, C),
        separate: (0, external_Compactable_js_namespaceObject.separate)(external_Reader_js_namespaceObject.Functor, C, external_Either_js_namespaceObject.Functor)
    };
};
function getFilterable(M) {
    var F = external_Either_js_namespaceObject.getFilterable(M);
    var C = getCompactable(M);
    var filter = (0, external_Filterable_js_namespaceObject.filter)(external_Reader_js_namespaceObject.Functor, F);
    var filterMap = (0, external_Filterable_js_namespaceObject.filterMap)(external_Reader_js_namespaceObject.Functor, F);
    var partition = (0, external_Filterable_js_namespaceObject.partition)(external_Reader_js_namespaceObject.Functor, F);
    var partitionMap = (0, external_Filterable_js_namespaceObject.partitionMap)(external_Reader_js_namespaceObject.Functor, F);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        compact: C.compact,
        separate: C.separate,
        filter: function(fa, predicate) {
            return (0, external_function_js_namespaceObject.pipe)(fa, filter(predicate));
        },
        filterMap: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, filterMap(f));
        },
        partition: function(fa, predicate) {
            return (0, external_function_js_namespaceObject.pipe)(fa, partition(predicate));
        },
        partitionMap: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, partitionMap(f));
        }
    };
}
function getApplicativeReaderValidation(S) {
    var ap = (0, external_Apply_js_namespaceObject.ap)(external_Reader_js_namespaceObject.Apply, external_Either_js_namespaceObject.getApplicativeValidation(S));
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
        },
        of: of
    };
}
function getAltReaderValidation(S) {
    var alt = external_EitherT_js_namespaceObject.altValidation(external_Reader_js_namespaceObject.Monad, S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        alt: function(fa, that) {
            return (0, external_function_js_namespaceObject.pipe)(fa, alt(that));
        }
    };
}
var Functor = {
    URI: URI,
    map: _map
};
var ReaderEither_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
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
var apFirstW = apFirst;
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(Apply);
var apSecondW = apSecond;
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
var FromEither = {
    URI: URI,
    fromEither: fromEither
};
var FromReader = {
    URI: URI,
    fromReader: fromReader
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var tapEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromEither_js_namespaceObject.tapEither)(FromEither, Chain));
var tapReader = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromReader_js_namespaceObject.tapReader)(FromReader, Chain));
var Bifunctor = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError
};
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
var ask = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.ask)(FromReader);
var asks = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.asks)(FromReader);
var fromReaderK = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.fromReaderK)(FromReader);
var chainFirstReaderK = tapReader;
var chainFirstReaderKW = tapReader;
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    throwError: throwError
};
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var chainOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.chainOptionK)(FromEither, Chain);
var chainOptionKW = chainOptionK;
var _FromEither = {
    fromEither: FromEither.fromEither
};
var _FromReader = {
    fromReader: FromReader.fromReader
};
var liftNullable = /*#__PURE__*/ external_internal_js_namespaceObject.liftNullable(_FromEither);
var liftOption = /*#__PURE__*/ external_internal_js_namespaceObject.liftOption(_FromEither);
var _FlatMap = {
    flatMap: flatMap
};
var flatMapNullable = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapNullable(_FromEither, _FlatMap);
var flatMapOption = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapOption(_FromEither, _FlatMap);
var flatMapEither = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapEither(_FromEither, _FlatMap);
var flatMapReader = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapReader(_FromReader, _FlatMap);
var chainEitherK = flatMapEither;
var chainEitherKW = flatMapEither;
var chainFirstEitherK = tapEither;
var chainFirstEitherKW = tapEither;
var chainReaderK = flatMapReader;
var chainReaderKW = flatMapReader;
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var filterOrElse = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.filterOrElse)(FromEither, Chain);
var filterOrElseW = filterOrElse;
var fromEitherK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromEitherK)(FromEither);
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var apSW = apS;
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return (0, external_function_js_namespaceObject.flow)(external_Reader_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(f), external_Reader_js_namespaceObject.map(external_Either_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(external_function_js_namespaceObject.SK)));
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
var orElseFirst = tapError;
var orElseFirstW = tapError;
var readerEither = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    alt: _alt,
    throwError: left
};
var getApplySemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(Apply);
var getApplyMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(Applicative);
var getSemigroup = function(S) {
    return (0, external_Apply_js_namespaceObject.getApplySemigroup)(external_Reader_js_namespaceObject.Apply)(external_Either_js_namespaceObject.getSemigroup(S));
};
function getReaderValidation(SE) {
    var applicativeReaderValidation = getApplicativeReaderValidation(SE);
    var altReaderValidation = getAltReaderValidation(SE);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: applicativeReaderValidation.ap,
        of: of,
        chain: flatMap,
        bimap: mapBoth,
        mapLeft: mapError,
        alt: altReaderValidation.alt,
        throwError: throwError
    };
}
exports.Alt = __webpack_exports__.Alt;
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Chain = __webpack_exports__.Chain;
exports.Do = __webpack_exports__.Do;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromReader = __webpack_exports__.FromReader;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadThrow = __webpack_exports__.MonadThrow;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.alt = __webpack_exports__.alt;
exports.altW = __webpack_exports__.altW;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apFirstW = __webpack_exports__.apFirstW;
exports.apS = __webpack_exports__.apS;
exports.apSW = __webpack_exports__.apSW;
exports.apSecond = __webpack_exports__.apSecond;
exports.apSecondW = __webpack_exports__.apSecondW;
exports.apW = __webpack_exports__.apW;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.ask = __webpack_exports__.ask;
exports.asks = __webpack_exports__.asks;
exports.asksReaderEither = __webpack_exports__.asksReaderEither;
exports.asksReaderEitherW = __webpack_exports__.asksReaderEitherW;
exports.bimap = __webpack_exports__.bimap;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.bindW = __webpack_exports__.bindW;
exports.chain = __webpack_exports__.chain;
exports.chainEitherK = __webpack_exports__.chainEitherK;
exports.chainEitherKW = __webpack_exports__.chainEitherKW;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstEitherK = __webpack_exports__.chainFirstEitherK;
exports.chainFirstEitherKW = __webpack_exports__.chainFirstEitherKW;
exports.chainFirstReaderK = __webpack_exports__.chainFirstReaderK;
exports.chainFirstReaderKW = __webpack_exports__.chainFirstReaderKW;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.chainOptionKW = __webpack_exports__.chainOptionKW;
exports.chainReaderK = __webpack_exports__.chainReaderK;
exports.chainReaderKW = __webpack_exports__.chainReaderKW;
exports.chainW = __webpack_exports__.chainW;
exports.filterOrElse = __webpack_exports__.filterOrElse;
exports.filterOrElseW = __webpack_exports__.filterOrElseW;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapEither = __webpack_exports__.flatMapEither;
exports.flatMapNullable = __webpack_exports__.flatMapNullable;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatMapReader = __webpack_exports__.flatMapReader;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.fold = __webpack_exports__.fold;
exports.foldW = __webpack_exports__.foldW;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.fromReader = __webpack_exports__.fromReader;
exports.fromReaderK = __webpack_exports__.fromReaderK;
exports.getAltReaderValidation = __webpack_exports__.getAltReaderValidation;
exports.getApplicativeReaderValidation = __webpack_exports__.getApplicativeReaderValidation;
exports.getApplyMonoid = __webpack_exports__.getApplyMonoid;
exports.getApplySemigroup = __webpack_exports__.getApplySemigroup;
exports.getCompactable = __webpack_exports__.getCompactable;
exports.getFilterable = __webpack_exports__.getFilterable;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.getOrElseW = __webpack_exports__.getOrElseW;
exports.getReaderValidation = __webpack_exports__.getReaderValidation;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.left = __webpack_exports__.left;
exports.leftReader = __webpack_exports__.leftReader;
exports["let"] = __webpack_exports__["let"];
exports.liftNullable = __webpack_exports__.liftNullable;
exports.liftOption = __webpack_exports__.liftOption;
exports.local = __webpack_exports__.local;
exports.map = __webpack_exports__.map;
exports.mapBoth = __webpack_exports__.mapBoth;
exports.mapError = __webpack_exports__.mapError;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.matchEW = __webpack_exports__.matchEW;
exports.matchW = __webpack_exports__.matchW;
exports.of = __webpack_exports__.of;
exports.orElse = __webpack_exports__.orElse;
exports.orElseFirst = __webpack_exports__.orElseFirst;
exports.orElseFirstW = __webpack_exports__.orElseFirstW;
exports.orElseW = __webpack_exports__.orElseW;
exports.orLeft = __webpack_exports__.orLeft;
exports.orLeftW = __webpack_exports__.orLeftW;
exports.readerEither = __webpack_exports__.readerEither;
exports.right = __webpack_exports__.right;
exports.rightReader = __webpack_exports__.rightReader;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.swap = __webpack_exports__.swap;
exports.tap = __webpack_exports__.tap;
exports.tapEither = __webpack_exports__.tapEither;
exports.tapError = __webpack_exports__.tapError;
exports.tapReader = __webpack_exports__.tapReader;
exports.throwError = __webpack_exports__.throwError;
exports.toUnion = __webpack_exports__.toUnion;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "ApT",
    "Applicative",
    "Apply",
    "Bifunctor",
    "Chain",
    "Do",
    "FromEither",
    "FromReader",
    "Functor",
    "Monad",
    "MonadThrow",
    "Pointed",
    "URI",
    "alt",
    "altW",
    "ap",
    "apFirst",
    "apFirstW",
    "apS",
    "apSW",
    "apSecond",
    "apSecondW",
    "apW",
    "as",
    "asUnit",
    "ask",
    "asks",
    "asksReaderEither",
    "asksReaderEitherW",
    "bimap",
    "bind",
    "bindTo",
    "bindW",
    "chain",
    "chainEitherK",
    "chainEitherKW",
    "chainFirst",
    "chainFirstEitherK",
    "chainFirstEitherKW",
    "chainFirstReaderK",
    "chainFirstReaderKW",
    "chainFirstW",
    "chainOptionK",
    "chainOptionKW",
    "chainReaderK",
    "chainReaderKW",
    "chainW",
    "filterOrElse",
    "filterOrElseW",
    "flap",
    "flatMap",
    "flatMapEither",
    "flatMapNullable",
    "flatMapOption",
    "flatMapReader",
    "flatten",
    "flattenW",
    "fold",
    "foldW",
    "fromEither",
    "fromEitherK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "fromReader",
    "fromReaderK",
    "getAltReaderValidation",
    "getApplicativeReaderValidation",
    "getApplyMonoid",
    "getApplySemigroup",
    "getCompactable",
    "getFilterable",
    "getOrElse",
    "getOrElseW",
    "getReaderValidation",
    "getSemigroup",
    "left",
    "leftReader",
    "let",
    "liftNullable",
    "liftOption",
    "local",
    "map",
    "mapBoth",
    "mapError",
    "mapLeft",
    "match",
    "matchE",
    "matchEW",
    "matchW",
    "of",
    "orElse",
    "orElseFirst",
    "orElseFirstW",
    "orElseW",
    "orLeft",
    "orLeftW",
    "readerEither",
    "right",
    "rightReader",
    "sequenceArray",
    "swap",
    "tap",
    "tapEither",
    "tapError",
    "tapReader",
    "throwError",
    "toUnion",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
