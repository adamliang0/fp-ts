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
    FromIO: function() {
        return FromIO;
    },
    traverseSeqArrayWithIndex: function() {
        return traverseSeqArrayWithIndex;
    },
    Alt: function() {
        return Alt;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    URI: function() {
        return URI;
    },
    fromIO: function() {
        return fromIO;
    },
    getAltIOValidation: function() {
        return getAltIOValidation;
    },
    orLeft: function() {
        return orLeft;
    },
    alt: function() {
        return IOEither_alt;
    },
    tapError: function() {
        return tapError;
    },
    ioEither: function() {
        return ioEither;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    tapEither: function() {
        return tapEither;
    },
    apS: function() {
        return apS;
    },
    left: function() {
        return left;
    },
    orElseFirstIOK: function() {
        return orElseFirstIOK;
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
    traverseSeqArray: function() {
        return traverseSeqArray;
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
    ApplicativeSeq: function() {
        return ApplicativeSeq;
    },
    chainOptionKW: function() {
        return chainOptionKW;
    },
    apW: function() {
        return apW;
    },
    leftIO: function() {
        return leftIO;
    },
    getApplicativeIOValidation: function() {
        return getApplicativeIOValidation;
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
    traverseReadonlyArrayWithIndexSeq: function() {
        return traverseReadonlyArrayWithIndexSeq;
    },
    bind: function() {
        return bind;
    },
    chainFirstEitherK: function() {
        return chainFirstEitherK;
    },
    tryCatchK: function() {
        return tryCatchK;
    },
    bindTo: function() {
        return bindTo;
    },
    chainIOK: function() {
        return chainIOK;
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
        return IOEither_ap;
    },
    flatMapNullable: function() {
        return flatMapNullable;
    },
    filterOrElse: function() {
        return filterOrElse;
    },
    getIOValidation: function() {
        return getIOValidation;
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
    sequenceSeqArray: function() {
        return sequenceSeqArray;
    },
    FromEither: function() {
        return FromEither;
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
        return IOEither_as;
    },
    apSW: function() {
        return apSW;
    },
    tryCatch: function() {
        return tryCatch;
    },
    ApplicativePar: function() {
        return ApplicativePar;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    traverseReadonlyNonEmptyArrayWithIndexSeq: function() {
        return traverseReadonlyNonEmptyArrayWithIndexSeq;
    },
    matchEW: function() {
        return matchEW;
    },
    bracket: function() {
        return bracket;
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
    flatMap: function() {
        return flatMap;
    },
    foldW: function() {
        return foldW;
    },
    getOrElse: function() {
        return getOrElse;
    },
    tapIO: function() {
        return tapIO;
    },
    flatMapIO: function() {
        return flatMapIO;
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
    chain: function() {
        return chain;
    },
    getOrElseW: function() {
        return getOrElseW;
    },
    bracketW: function() {
        return bracketW;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    bindW: function() {
        return bindW;
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
    MonadIO: function() {
        return MonadIO;
    },
    Pointed: function() {
        return Pointed;
    },
    orElse: function() {
        return orElse;
    },
    ApplyPar: function() {
        return ApplyPar;
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
    rightIO: function() {
        return rightIO;
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
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_IO_js_namespaceObject = require("./IO.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if ("u" > typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if ("string" == typeof o) return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) n = o.constructor.name;
    if ("Map" === n || "Set" === n) return Array.from(n);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var left = /*#__PURE__*/ external_EitherT_js_namespaceObject.left(external_IO_js_namespaceObject.Pointed);
var right = /*#__PURE__*/ external_EitherT_js_namespaceObject.right(external_IO_js_namespaceObject.Pointed);
var rightIO = /*#__PURE__*/ external_EitherT_js_namespaceObject.rightF(external_IO_js_namespaceObject.Functor);
var leftIO = /*#__PURE__*/ external_EitherT_js_namespaceObject.leftF(external_IO_js_namespaceObject.Functor);
var fromEither = external_IO_js_namespaceObject.of;
var fromIO = rightIO;
var match = /*#__PURE__*/ external_EitherT_js_namespaceObject.match(external_IO_js_namespaceObject.Functor);
var matchW = match;
var matchE = /*#__PURE__*/ external_EitherT_js_namespaceObject.matchE(external_IO_js_namespaceObject.Monad);
var fold = matchE;
var matchEW = matchE;
var foldW = matchEW;
var getOrElse = /*#__PURE__*/ external_EitherT_js_namespaceObject.getOrElse(external_IO_js_namespaceObject.Monad);
var getOrElseW = getOrElse;
var tryCatch = function(f, onThrow) {
    return function() {
        return external_Either_js_namespaceObject.tryCatch(f, onThrow);
    };
};
var tryCatchK = function(f, onThrow) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return tryCatch(function() {
            return f.apply(void 0, _to_consumable_array(a));
        }, onThrow);
    };
};
var toUnion = /*#__PURE__*/ external_EitherT_js_namespaceObject.toUnion(external_IO_js_namespaceObject.Functor);
var orElse = /*#__PURE__*/ external_EitherT_js_namespaceObject.orElse(external_IO_js_namespaceObject.Monad);
var orElseW = orElse;
var tapError = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.tapError(external_IO_js_namespaceObject.Monad));
var orElseFirstIOK = function(onLeft) {
    return tapError(fromIOK(onLeft));
};
var orLeft = /*#__PURE__*/ external_EitherT_js_namespaceObject.orLeft(external_IO_js_namespaceObject.Monad);
var swap = /*#__PURE__*/ external_EitherT_js_namespaceObject.swap(external_IO_js_namespaceObject.Functor);
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, IOEither_ap(fa));
};
var _apSeq = function(fab, fa) {
    return flatMap(fab, function(f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
    });
};
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, IOEither_alt(that));
};
var map = /*#__PURE__*/ external_EitherT_js_namespaceObject.map(external_IO_js_namespaceObject.Functor);
var mapBoth = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(3, external_EitherT_js_namespaceObject.mapBoth(external_IO_js_namespaceObject.Functor));
var bimap = mapBoth;
var mapError = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.mapError(external_IO_js_namespaceObject.Functor));
var mapLeft = mapError;
var IOEither_ap = /*#__PURE__*/ external_EitherT_js_namespaceObject.ap(external_IO_js_namespaceObject.Apply);
var apW = IOEither_ap;
var of = right;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_EitherT_js_namespaceObject.flatMap(external_IO_js_namespaceObject.Monad));
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var IOEither_alt = /*#__PURE__*/ external_EitherT_js_namespaceObject.alt(external_IO_js_namespaceObject.Monad);
var altW = IOEither_alt;
var throwError = left;
var URI = 'IOEither';
function getApplicativeIOValidation(S) {
    var ap = (0, external_Apply_js_namespaceObject.ap)(external_IO_js_namespaceObject.Apply, external_Either_js_namespaceObject.getApplicativeValidation(S));
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
function getAltIOValidation(S) {
    var alt = external_EitherT_js_namespaceObject.altValidation(external_IO_js_namespaceObject.Monad, S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        alt: function(fa, that) {
            return (0, external_function_js_namespaceObject.pipe)(fa, alt(that));
        }
    };
}
var getCompactable = function(M) {
    var C = external_Either_js_namespaceObject.getCompactable(M);
    return {
        URI: URI,
        _E: void 0,
        compact: (0, external_Compactable_js_namespaceObject.compact)(external_IO_js_namespaceObject.Functor, C),
        separate: (0, external_Compactable_js_namespaceObject.separate)(external_IO_js_namespaceObject.Functor, C, external_Either_js_namespaceObject.Functor)
    };
};
function getFilterable(M) {
    var F = external_Either_js_namespaceObject.getFilterable(M);
    var C = getCompactable(M);
    var filter = (0, external_Filterable_js_namespaceObject.filter)(external_IO_js_namespaceObject.Functor, F);
    var filterMap = (0, external_Filterable_js_namespaceObject.filterMap)(external_IO_js_namespaceObject.Functor, F);
    var partition = (0, external_Filterable_js_namespaceObject.partition)(external_IO_js_namespaceObject.Functor, F);
    var partitionMap = (0, external_Filterable_js_namespaceObject.partitionMap)(external_IO_js_namespaceObject.Functor, F);
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
var Functor = {
    URI: URI,
    map: _map
};
var IOEither_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
var asUnit = (0, external_Functor_js_namespaceObject.asUnit)(Functor);
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var Bifunctor = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError
};
var ApplyPar = {
    URI: URI,
    map: _map,
    ap: _ap
};
var apFirst = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apFirst)(ApplyPar);
var apFirstW = apFirst;
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(ApplyPar);
var apSecondW = apSecond;
var ApplicativePar = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
var ApplicativeSeq = {
    URI: URI,
    map: _map,
    ap: _apSeq,
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
var MonadIO = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    fromIO: fromIO
};
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    throwError: throwError
};
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var chainFirstIOK = tapIO;
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var chainOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.chainOptionK)(FromEither, Chain);
var chainOptionKW = chainOptionK;
var _FromEither = {
    fromEither: FromEither.fromEither
};
var _FromIO = {
    fromIO: fromIO
};
var liftNullable = /*#__PURE__*/ external_internal_js_namespaceObject.liftNullable(_FromEither);
var liftOption = /*#__PURE__*/ external_internal_js_namespaceObject.liftOption(_FromEither);
var _FlatMap = {
    flatMap: flatMap
};
var flatMapNullable = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapNullable(_FromEither, _FlatMap);
var flatMapOption = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapOption(_FromEither, _FlatMap);
var flatMapEither = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapEither(_FromEither, _FlatMap);
var flatMapIO = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapIO(_FromIO, _FlatMap);
var chainIOK = flatMapIO;
var chainEitherK = flatMapEither;
var chainEitherKW = flatMapEither;
var chainFirstEitherK = tapEither;
var chainFirstEitherKW = tapEither;
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var filterOrElse = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.filterOrElse)(FromEither, Chain);
var filterOrElseW = filterOrElse;
var fromEitherK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromEitherK)(FromEither);
var bracket = function(acquire, use, release) {
    return bracketW(acquire, use, release);
};
var bracketW = function(acquire, use, release) {
    return flatMap(acquire, function(a) {
        return external_IO_js_namespaceObject.flatMap(use(a), function(e) {
            return flatMap(release(a, e), function() {
                return external_IO_js_namespaceObject.of(e);
            });
        });
    });
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(ApplyPar);
var apSW = apS;
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return (0, external_function_js_namespaceObject.flow)(external_IO_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(f), external_IO_js_namespaceObject.map(external_Either_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(external_function_js_namespaceObject.SK)));
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
    };
};
var traverseReadonlyNonEmptyArrayWithIndexSeq = function(f) {
    return function(as) {
        return function() {
            var e = f(0, external_internal_js_namespaceObject.head(as))();
            if (external_internal_js_namespaceObject.isLeft(e)) return e;
            var out = [
                e.right
            ];
            for(var i = 1; i < as.length; i++){
                var e1 = f(i, as[i])();
                if (external_internal_js_namespaceObject.isLeft(e1)) return e1;
                out.push(e1.right);
            }
            return external_internal_js_namespaceObject.right(out);
        };
    };
};
var traverseReadonlyArrayWithIndexSeq = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
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
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
var traverseSeqArray = function(f) {
    return traverseReadonlyArrayWithIndexSeq(function(_, a) {
        return f(a);
    });
};
var sequenceSeqArray = /*#__PURE__*/ traverseSeqArray(external_function_js_namespaceObject.identity);
var Applicative = ApplicativePar;
var chain = flatMap;
var chainW = flatMap;
var chainFirst = tap;
var chainFirstW = tap;
var orElseFirst = tapError;
var orElseFirstW = tapError;
var ioEither = {
    URI: URI,
    bimap: mapBoth,
    mapLeft: mapError,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    alt: _alt,
    fromIO: fromIO,
    throwError: throwError
};
var getApplySemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(ApplyPar);
var getApplyMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(ApplicativePar);
var getSemigroup = function(S) {
    return (0, external_Apply_js_namespaceObject.getApplySemigroup)(external_IO_js_namespaceObject.Apply)(external_Either_js_namespaceObject.getSemigroup(S));
};
function getIOValidation(SE) {
    var applicativeIOValidation = getApplicativeIOValidation(SE);
    var altIOValidation = getAltIOValidation(SE);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: applicativeIOValidation.ap,
        of: of,
        chain: flatMap,
        bimap: mapBoth,
        mapLeft: mapError,
        alt: altIOValidation.alt,
        fromIO: fromIO,
        throwError: throwError
    };
}
exports.Alt = __webpack_exports__.Alt;
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.ApplicativePar = __webpack_exports__.ApplicativePar;
exports.ApplicativeSeq = __webpack_exports__.ApplicativeSeq;
exports.ApplyPar = __webpack_exports__.ApplyPar;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Chain = __webpack_exports__.Chain;
exports.Do = __webpack_exports__.Do;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromIO = __webpack_exports__.FromIO;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
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
exports.bimap = __webpack_exports__.bimap;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.bindW = __webpack_exports__.bindW;
exports.bracket = __webpack_exports__.bracket;
exports.bracketW = __webpack_exports__.bracketW;
exports.chain = __webpack_exports__.chain;
exports.chainEitherK = __webpack_exports__.chainEitherK;
exports.chainEitherKW = __webpack_exports__.chainEitherKW;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstEitherK = __webpack_exports__.chainFirstEitherK;
exports.chainFirstEitherKW = __webpack_exports__.chainFirstEitherKW;
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.chainOptionKW = __webpack_exports__.chainOptionKW;
exports.chainW = __webpack_exports__.chainW;
exports.filterOrElse = __webpack_exports__.filterOrElse;
exports.filterOrElseW = __webpack_exports__.filterOrElseW;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapEither = __webpack_exports__.flatMapEither;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatMapNullable = __webpack_exports__.flatMapNullable;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.fold = __webpack_exports__.fold;
exports.foldW = __webpack_exports__.foldW;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.getAltIOValidation = __webpack_exports__.getAltIOValidation;
exports.getApplicativeIOValidation = __webpack_exports__.getApplicativeIOValidation;
exports.getApplyMonoid = __webpack_exports__.getApplyMonoid;
exports.getApplySemigroup = __webpack_exports__.getApplySemigroup;
exports.getCompactable = __webpack_exports__.getCompactable;
exports.getFilterable = __webpack_exports__.getFilterable;
exports.getIOValidation = __webpack_exports__.getIOValidation;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.getOrElseW = __webpack_exports__.getOrElseW;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.ioEither = __webpack_exports__.ioEither;
exports.left = __webpack_exports__.left;
exports.leftIO = __webpack_exports__.leftIO;
exports["let"] = __webpack_exports__["let"];
exports.liftNullable = __webpack_exports__.liftNullable;
exports.liftOption = __webpack_exports__.liftOption;
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
exports.orElseFirstIOK = __webpack_exports__.orElseFirstIOK;
exports.orElseFirstW = __webpack_exports__.orElseFirstW;
exports.orElseW = __webpack_exports__.orElseW;
exports.orLeft = __webpack_exports__.orLeft;
exports.right = __webpack_exports__.right;
exports.rightIO = __webpack_exports__.rightIO;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.sequenceSeqArray = __webpack_exports__.sequenceSeqArray;
exports.swap = __webpack_exports__.swap;
exports.tap = __webpack_exports__.tap;
exports.tapEither = __webpack_exports__.tapEither;
exports.tapError = __webpack_exports__.tapError;
exports.tapIO = __webpack_exports__.tapIO;
exports.throwError = __webpack_exports__.throwError;
exports.toUnion = __webpack_exports__.toUnion;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyArrayWithIndexSeq;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndexSeq;
exports.traverseSeqArray = __webpack_exports__.traverseSeqArray;
exports.traverseSeqArrayWithIndex = __webpack_exports__.traverseSeqArrayWithIndex;
exports.tryCatch = __webpack_exports__.tryCatch;
exports.tryCatchK = __webpack_exports__.tryCatchK;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "ApT",
    "Applicative",
    "ApplicativePar",
    "ApplicativeSeq",
    "ApplyPar",
    "Bifunctor",
    "Chain",
    "Do",
    "FromEither",
    "FromIO",
    "Functor",
    "Monad",
    "MonadIO",
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
    "bimap",
    "bind",
    "bindTo",
    "bindW",
    "bracket",
    "bracketW",
    "chain",
    "chainEitherK",
    "chainEitherKW",
    "chainFirst",
    "chainFirstEitherK",
    "chainFirstEitherKW",
    "chainFirstIOK",
    "chainFirstW",
    "chainIOK",
    "chainOptionK",
    "chainOptionKW",
    "chainW",
    "filterOrElse",
    "filterOrElseW",
    "flap",
    "flatMap",
    "flatMapEither",
    "flatMapIO",
    "flatMapNullable",
    "flatMapOption",
    "flatten",
    "flattenW",
    "fold",
    "foldW",
    "fromEither",
    "fromEitherK",
    "fromIO",
    "fromIOK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "getAltIOValidation",
    "getApplicativeIOValidation",
    "getApplyMonoid",
    "getApplySemigroup",
    "getCompactable",
    "getFilterable",
    "getIOValidation",
    "getOrElse",
    "getOrElseW",
    "getSemigroup",
    "ioEither",
    "left",
    "leftIO",
    "let",
    "liftNullable",
    "liftOption",
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
    "orElseFirstIOK",
    "orElseFirstW",
    "orElseW",
    "orLeft",
    "right",
    "rightIO",
    "sequenceArray",
    "sequenceSeqArray",
    "swap",
    "tap",
    "tapEither",
    "tapError",
    "tapIO",
    "throwError",
    "toUnion",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyArrayWithIndexSeq",
    "traverseReadonlyNonEmptyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndexSeq",
    "traverseSeqArray",
    "traverseSeqArrayWithIndex",
    "tryCatch",
    "tryCatchK"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
