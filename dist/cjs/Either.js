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
    flatMapNullable: function() {
        return flatMapNullable;
    },
    Foldable: function() {
        return Foldable;
    },
    filterOrElse: function() {
        return filterOrElse;
    },
    swap: function() {
        return swap;
    },
    elem: function() {
        return elem;
    },
    getValidationMonoid: function() {
        return getValidationMonoid;
    },
    right: function() {
        return Either_right;
    },
    tap: function() {
        return tap;
    },
    apSecondW: function() {
        return apSecondW;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    Alt: function() {
        return Alt;
    },
    FromEither: function() {
        return FromEither;
    },
    either: function() {
        return either;
    },
    getApplicativeValidation: function() {
        return getApplicativeValidation;
    },
    getCompactable: function() {
        return getCompactable;
    },
    isRight: function() {
        return isRight;
    },
    toUnion: function() {
        return toUnion;
    },
    chainW: function() {
        return chainW;
    },
    Extend: function() {
        return Extend;
    },
    stringifyJSON: function() {
        return stringifyJSON;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    URI: function() {
        return URI;
    },
    MonadThrow: function() {
        return MonadThrow;
    },
    asUnit: function() {
        return asUnit;
    },
    parseJSON: function() {
        return parseJSON;
    },
    toError: function() {
        return toError;
    },
    ApT: function() {
        return ApT;
    },
    fromNullableK: function() {
        return fromNullableK;
    },
    alt: function() {
        return Either_alt;
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
    Traversable: function() {
        return Traversable;
    },
    as: function() {
        return Either_as;
    },
    apS: function() {
        return apS;
    },
    extend: function() {
        return extend;
    },
    apSW: function() {
        return apSW;
    },
    Apply: function() {
        return Apply;
    },
    getAltValidation: function() {
        return getAltValidation;
    },
    getValidationSemigroup: function() {
        return getValidationSemigroup;
    },
    left: function() {
        return Either_left;
    },
    orElseW: function() {
        return orElseW;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    sequence: function() {
        return sequence;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    Functor: function() {
        return Functor;
    },
    traverse: function() {
        return traverse;
    },
    tryCatch: function() {
        return tryCatch;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    getShow: function() {
        return getShow;
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
    getApplyMonoid: function() {
        return getApplyMonoid;
    },
    chainFirst: function() {
        return chainFirst;
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
    flatMap: function() {
        return flatMap;
    },
    match: function() {
        return match;
    },
    traverseArray: function() {
        return traverseArray;
    },
    foldW: function() {
        return foldW;
    },
    getOrElse: function() {
        return getOrElse;
    },
    let: function() {
        return let_;
    },
    exists: function() {
        return exists;
    },
    fromOption: function() {
        return fromOption;
    },
    chainOptionKW: function() {
        return chainOptionKW;
    },
    flatten: function() {
        return flatten;
    },
    apW: function() {
        return apW;
    },
    getEq: function() {
        return getEq;
    },
    mapLeft: function() {
        return mapLeft;
    },
    Bifunctor: function() {
        return Bifunctor;
    },
    bimap: function() {
        return bimap;
    },
    chain: function() {
        return chain;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    getApplySemigroup: function() {
        return getApplySemigroup;
    },
    getOrElseW: function() {
        return getOrElseW;
    },
    bind: function() {
        return bind;
    },
    getWitherable: function() {
        return getWitherable;
    },
    tryCatchK: function() {
        return tryCatchK;
    },
    reduce: function() {
        return reduce;
    },
    bindTo: function() {
        return bindTo;
    },
    bindW: function() {
        return bindW;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    fromNullable: function() {
        return fromNullable;
    },
    isLeft: function() {
        return isLeft;
    },
    map: function() {
        return map;
    },
    filterOrElseW: function() {
        return filterOrElseW;
    },
    getValidation: function() {
        return getValidation;
    },
    Pointed: function() {
        return Pointed;
    },
    orElse: function() {
        return orElse;
    },
    reduceRight: function() {
        return reduceRight;
    },
    getFilterable: function() {
        return getFilterable;
    },
    flatMapOption: function() {
        return flatMapOption;
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
    duplicate: function() {
        return duplicate;
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
        return Either_ap;
    },
    foldMap: function() {
        return foldMap;
    },
    throwError: function() {
        return throwError;
    },
    chainNullableK: function() {
        return chainNullableK;
    },
    matchW: function() {
        return matchW;
    }
});
var external_Applicative_js_namespaceObject = require("./Applicative.js");
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_ChainRec_js_namespaceObject = require("./ChainRec.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Separated_js_namespaceObject = require("./Separated.js");
var external_Witherable_js_namespaceObject = require("./Witherable.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (null != right && "u" > typeof Symbol && right[Symbol.hasInstance]) return !!right[Symbol.hasInstance](left);
    return left instanceof right;
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
var Either_left = external_internal_js_namespaceObject.left;
var Either_right = external_internal_js_namespaceObject.right;
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return isLeft(ma) ? ma : f(ma.right);
});
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, Either_ap(fa));
};
var _reduce = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduce(b, f));
};
var _foldMap = function(M) {
    return function(fa, f) {
        var foldMapM = foldMap(M);
        return (0, external_function_js_namespaceObject.pipe)(fa, foldMapM(f));
    };
};
var _reduceRight = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduceRight(b, f));
};
var _traverse = function(F) {
    var traverseF = traverse(F);
    return function(ta, f) {
        return (0, external_function_js_namespaceObject.pipe)(ta, traverseF(f));
    };
};
var _bimap = function(fa, f, g) {
    return (0, external_function_js_namespaceObject.pipe)(fa, bimap(f, g));
};
var _mapLeft = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapLeft(f));
};
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, Either_alt(that));
};
var _extend = function(wa, f) {
    return (0, external_function_js_namespaceObject.pipe)(wa, extend(f));
};
var _chainRec = function(a, f) {
    return (0, external_ChainRec_js_namespaceObject.tailRec)(f(a), function(e) {
        return isLeft(e) ? Either_right(Either_left(e.left)) : isLeft(e.right) ? Either_left(f(e.right.left)) : Either_right(Either_right(e.right.right));
    });
};
var URI = 'Either';
var getShow = function(SE, SA) {
    return {
        show: function(ma) {
            return isLeft(ma) ? "left(".concat(SE.show(ma.left), ")") : "right(".concat(SA.show(ma.right), ")");
        }
    };
};
var getEq = function(EL, EA) {
    return {
        equals: function(x, y) {
            return x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right));
        }
    };
};
var getSemigroup = function(S) {
    return {
        concat: function(x, y) {
            return isLeft(y) ? x : isLeft(x) ? y : Either_right(S.concat(x.right, y.right));
        }
    };
};
var getCompactable = function(M) {
    var empty = Either_left(M.empty);
    return {
        URI: URI,
        _E: void 0,
        compact: function(ma) {
            return isLeft(ma) ? ma : 'None' === ma.right._tag ? empty : Either_right(ma.right.value);
        },
        separate: function(ma) {
            return isLeft(ma) ? (0, external_Separated_js_namespaceObject.separated)(ma, ma) : isLeft(ma.right) ? (0, external_Separated_js_namespaceObject.separated)(Either_right(ma.right.left), empty) : (0, external_Separated_js_namespaceObject.separated)(empty, Either_right(ma.right.right));
        }
    };
};
var getFilterable = function(M) {
    var empty = Either_left(M.empty);
    var _getCompactable = getCompactable(M), compact = _getCompactable.compact, separate = _getCompactable.separate;
    var filter = function(ma, predicate) {
        return isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
    };
    var partition = function(ma, p) {
        return isLeft(ma) ? (0, external_Separated_js_namespaceObject.separated)(ma, ma) : p(ma.right) ? (0, external_Separated_js_namespaceObject.separated)(empty, Either_right(ma.right)) : (0, external_Separated_js_namespaceObject.separated)(Either_right(ma.right), empty);
    };
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        compact: compact,
        separate: separate,
        filter: filter,
        filterMap: function(ma, f) {
            if (isLeft(ma)) return ma;
            var ob = f(ma.right);
            return 'None' === ob._tag ? empty : Either_right(ob.value);
        },
        partition: partition,
        partitionMap: function(ma, f) {
            if (isLeft(ma)) return (0, external_Separated_js_namespaceObject.separated)(ma, ma);
            var e = f(ma.right);
            return isLeft(e) ? (0, external_Separated_js_namespaceObject.separated)(Either_right(e.left), empty) : (0, external_Separated_js_namespaceObject.separated)(empty, Either_right(e.right));
        }
    };
};
var getWitherable = function(M) {
    var F_ = getFilterable(M);
    var C = getCompactable(M);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        compact: F_.compact,
        separate: F_.separate,
        filter: F_.filter,
        filterMap: F_.filterMap,
        partition: F_.partition,
        partitionMap: F_.partitionMap,
        traverse: _traverse,
        sequence: sequence,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        wither: (0, external_Witherable_js_namespaceObject.witherDefault)(Traversable, C),
        wilt: (0, external_Witherable_js_namespaceObject.wiltDefault)(Traversable, C)
    };
};
var getApplicativeValidation = function(SE) {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return isLeft(fab) ? isLeft(fa) ? Either_left(SE.concat(fab.left, fa.left)) : fab : isLeft(fa) ? fa : Either_right(fab.right(fa.right));
        },
        of: of
    };
};
var getAltValidation = function(SE) {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        alt: function(me, that) {
            if (isRight(me)) return me;
            var ea = that();
            return isLeft(ea) ? Either_left(SE.concat(me.left, ea.left)) : ea;
        }
    };
};
var map = function(f) {
    return function(fa) {
        return isLeft(fa) ? fa : Either_right(f(fa.right));
    };
};
var Functor = {
    URI: URI,
    map: _map
};
var Either_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
var asUnit = (0, external_Functor_js_namespaceObject.asUnit)(Functor);
var of = Either_right;
var Pointed = {
    URI: URI,
    of: of
};
var apW = function(fa) {
    return function(fab) {
        return isLeft(fab) ? fab : isLeft(fa) ? fa : Either_right(fab.right(fa.right));
    };
};
var Either_ap = apW;
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
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
var reduce = function(b, f) {
    return function(fa) {
        return isLeft(fa) ? b : f(b, fa.right);
    };
};
var foldMap = function(M) {
    return function(f) {
        return function(fa) {
            return isLeft(fa) ? M.empty : f(fa.right);
        };
    };
};
var reduceRight = function(b, f) {
    return function(fa) {
        return isLeft(fa) ? b : f(fa.right, b);
    };
};
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
var traverse = function(F) {
    return function(f) {
        return function(ta) {
            return isLeft(ta) ? F.of(Either_left(ta.left)) : F.map(f(ta.right), Either_right);
        };
    };
};
var sequence = function(F) {
    return function(ma) {
        return isLeft(ma) ? F.of(Either_left(ma.left)) : F.map(ma.right, Either_right);
    };
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
var bimap = function(f, g) {
    return function(fa) {
        return isLeft(fa) ? Either_left(f(fa.left)) : Either_right(g(fa.right));
    };
};
var mapLeft = function(f) {
    return function(fa) {
        return isLeft(fa) ? Either_left(f(fa.left)) : fa;
    };
};
var Bifunctor = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var altW = function(that) {
    return function(fa) {
        return isLeft(fa) ? that() : fa;
    };
};
var Either_alt = altW;
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
var extend = function(f) {
    return function(wa) {
        return isLeft(wa) ? wa : Either_right(f(wa));
    };
};
var Extend = {
    URI: URI,
    map: _map,
    extend: _extend
};
var ChainRec = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: flatMap,
    chainRec: _chainRec
};
var throwError = Either_left;
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    throwError: throwError
};
var FromEither = {
    URI: URI,
    fromEither: external_function_js_namespaceObject.identity
};
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var isLeft = external_internal_js_namespaceObject.isLeft;
var isRight = external_internal_js_namespaceObject.isRight;
var matchW = function(onLeft, onRight) {
    return function(ma) {
        return isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
    };
};
var foldW = matchW;
var match = matchW;
var fold = match;
var getOrElseW = function(onLeft) {
    return function(ma) {
        return isLeft(ma) ? onLeft(ma.left) : ma.right;
    };
};
var getOrElse = getOrElseW;
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var apFirst = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apFirst)(Apply);
var apFirstW = apFirst;
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(Apply);
var apSecondW = apSecond;
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var duplicate = /*#__PURE__*/ extend(external_function_js_namespaceObject.identity);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var chainOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.chainOptionK)(FromEither, Chain);
var chainOptionKW = chainOptionK;
var _FromEither = {
    fromEither: FromEither.fromEither
};
var liftNullable = /*#__PURE__*/ external_internal_js_namespaceObject.liftNullable(_FromEither);
var liftOption = /*#__PURE__*/ external_internal_js_namespaceObject.liftOption(_FromEither);
var _FlatMap = {
    flatMap: flatMap
};
var flatMapNullable = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapNullable(_FromEither, _FlatMap);
var flatMapOption = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapOption(_FromEither, _FlatMap);
var filterOrElse = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.filterOrElse)(FromEither, Chain);
var filterOrElseW = filterOrElse;
var swap = function(ma) {
    return isLeft(ma) ? Either_right(ma.left) : Either_left(ma.right);
};
var orElseW = function(onLeft) {
    return function(ma) {
        return isLeft(ma) ? onLeft(ma.left) : ma;
    };
};
var orElse = orElseW;
var fromNullable = function(e) {
    return function(a) {
        return null == a ? Either_left(e) : Either_right(a);
    };
};
var tryCatch = function(f, onThrow) {
    try {
        return Either_right(f());
    } catch (e) {
        return Either_left(onThrow(e));
    }
};
var tryCatchK = function(f, onThrow) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return tryCatch(function() {
            return f.apply(void 0, _to_consumable_array(a));
        }, onThrow);
    };
};
var fromNullableK = function(e) {
    var from = fromNullable(e);
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(f, from);
    };
};
var chainNullableK = function(e) {
    var from = fromNullableK(e);
    return function(f) {
        return flatMap(from(f));
    };
};
var toUnion = /*#__PURE__*/ foldW(external_function_js_namespaceObject.identity, external_function_js_namespaceObject.identity);
function toError(e) {
    try {
        return _instanceof(e, Error) ? e : new Error(String(e));
    } catch (unused) {
        return new Error();
    }
}
function elem(E) {
    return function(a, ma) {
        if (void 0 === ma) {
            var elemE = elem(E);
            return function(ma) {
                return elemE(a, ma);
            };
        }
        return isLeft(ma) ? false : E.equals(a, ma.right);
    };
}
var exists = function(predicate) {
    return function(ma) {
        return isLeft(ma) ? false : predicate(ma.right);
    };
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var apSW = apS;
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        var e = f(0, external_internal_js_namespaceObject.head(as));
        if (isLeft(e)) return e;
        var out = [
            e.right
        ];
        for(var i = 1; i < as.length; i++){
            var e1 = f(i, as[i]);
            if (isLeft(e1)) return e1;
            out.push(e1.right);
        }
        return Either_right(out);
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
var chainW = flatMap;
var chain = flatMap;
var chainFirst = tap;
var chainFirstW = tap;
function parseJSON(s, onError) {
    return tryCatch(function() {
        return JSON.parse(s);
    }, onError);
}
var stringifyJSON = function(u, onError) {
    return tryCatch(function() {
        var s = JSON.stringify(u);
        if ('string' != typeof s) throw new Error('Converting unsupported structure to JSON');
        return s;
    }, onError);
};
var either = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    extend: _extend,
    chainRec: _chainRec,
    throwError: throwError
};
var getApplySemigroup = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.getApplySemigroup)(Apply);
var getApplyMonoid = /*#__PURE__*/ (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(Applicative);
var getValidationSemigroup = function(SE, SA) {
    return (0, external_Apply_js_namespaceObject.getApplySemigroup)(getApplicativeValidation(SE))(SA);
};
var getValidationMonoid = function(SE, MA) {
    return (0, external_Applicative_js_namespaceObject.getApplicativeMonoid)(getApplicativeValidation(SE))(MA);
};
function getValidation(SE) {
    var ap = getApplicativeValidation(SE).ap;
    var alt = getAltValidation(SE).alt;
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        of: of,
        chain: flatMap,
        bimap: _bimap,
        mapLeft: _mapLeft,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        extend: _extend,
        traverse: _traverse,
        sequence: sequence,
        chainRec: _chainRec,
        throwError: throwError,
        ap: ap,
        alt: alt
    };
}
exports.Alt = __webpack_exports__.Alt;
exports.ApT = __webpack_exports__.ApT;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Chain = __webpack_exports__.Chain;
exports.ChainRec = __webpack_exports__.ChainRec;
exports.Do = __webpack_exports__.Do;
exports.Extend = __webpack_exports__.Extend;
exports.Foldable = __webpack_exports__.Foldable;
exports.FromEither = __webpack_exports__.FromEither;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadThrow = __webpack_exports__.MonadThrow;
exports.Pointed = __webpack_exports__.Pointed;
exports.Traversable = __webpack_exports__.Traversable;
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
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainNullableK = __webpack_exports__.chainNullableK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.chainOptionKW = __webpack_exports__.chainOptionKW;
exports.chainW = __webpack_exports__.chainW;
exports.duplicate = __webpack_exports__.duplicate;
exports.either = __webpack_exports__.either;
exports.elem = __webpack_exports__.elem;
exports.exists = __webpack_exports__.exists;
exports.extend = __webpack_exports__.extend;
exports.filterOrElse = __webpack_exports__.filterOrElse;
exports.filterOrElseW = __webpack_exports__.filterOrElseW;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapNullable = __webpack_exports__.flatMapNullable;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.fold = __webpack_exports__.fold;
exports.foldMap = __webpack_exports__.foldMap;
exports.foldW = __webpack_exports__.foldW;
exports.fromNullable = __webpack_exports__.fromNullable;
exports.fromNullableK = __webpack_exports__.fromNullableK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.getAltValidation = __webpack_exports__.getAltValidation;
exports.getApplicativeValidation = __webpack_exports__.getApplicativeValidation;
exports.getApplyMonoid = __webpack_exports__.getApplyMonoid;
exports.getApplySemigroup = __webpack_exports__.getApplySemigroup;
exports.getCompactable = __webpack_exports__.getCompactable;
exports.getEq = __webpack_exports__.getEq;
exports.getFilterable = __webpack_exports__.getFilterable;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.getOrElseW = __webpack_exports__.getOrElseW;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getShow = __webpack_exports__.getShow;
exports.getValidation = __webpack_exports__.getValidation;
exports.getValidationMonoid = __webpack_exports__.getValidationMonoid;
exports.getValidationSemigroup = __webpack_exports__.getValidationSemigroup;
exports.getWitherable = __webpack_exports__.getWitherable;
exports.isLeft = __webpack_exports__.isLeft;
exports.isRight = __webpack_exports__.isRight;
exports.left = __webpack_exports__.left;
exports["let"] = __webpack_exports__["let"];
exports.liftNullable = __webpack_exports__.liftNullable;
exports.liftOption = __webpack_exports__.liftOption;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchW = __webpack_exports__.matchW;
exports.of = __webpack_exports__.of;
exports.orElse = __webpack_exports__.orElse;
exports.orElseW = __webpack_exports__.orElseW;
exports.parseJSON = __webpack_exports__.parseJSON;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.right = __webpack_exports__.right;
exports.sequence = __webpack_exports__.sequence;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.stringifyJSON = __webpack_exports__.stringifyJSON;
exports.swap = __webpack_exports__.swap;
exports.tap = __webpack_exports__.tap;
exports.throwError = __webpack_exports__.throwError;
exports.toError = __webpack_exports__.toError;
exports.toUnion = __webpack_exports__.toUnion;
exports.traverse = __webpack_exports__.traverse;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
exports.tryCatch = __webpack_exports__.tryCatch;
exports.tryCatchK = __webpack_exports__.tryCatchK;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "ApT",
    "Applicative",
    "Apply",
    "Bifunctor",
    "Chain",
    "ChainRec",
    "Do",
    "Extend",
    "Foldable",
    "FromEither",
    "Functor",
    "Monad",
    "MonadThrow",
    "Pointed",
    "Traversable",
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
    "chain",
    "chainFirst",
    "chainFirstW",
    "chainNullableK",
    "chainOptionK",
    "chainOptionKW",
    "chainW",
    "duplicate",
    "either",
    "elem",
    "exists",
    "extend",
    "filterOrElse",
    "filterOrElseW",
    "flap",
    "flatMap",
    "flatMapNullable",
    "flatMapOption",
    "flatten",
    "flattenW",
    "fold",
    "foldMap",
    "foldW",
    "fromNullable",
    "fromNullableK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "getAltValidation",
    "getApplicativeValidation",
    "getApplyMonoid",
    "getApplySemigroup",
    "getCompactable",
    "getEq",
    "getFilterable",
    "getOrElse",
    "getOrElseW",
    "getSemigroup",
    "getShow",
    "getValidation",
    "getValidationMonoid",
    "getValidationSemigroup",
    "getWitherable",
    "isLeft",
    "isRight",
    "left",
    "let",
    "liftNullable",
    "liftOption",
    "map",
    "mapLeft",
    "match",
    "matchW",
    "of",
    "orElse",
    "orElseW",
    "parseJSON",
    "reduce",
    "reduceRight",
    "right",
    "sequence",
    "sequenceArray",
    "stringifyJSON",
    "swap",
    "tap",
    "throwError",
    "toError",
    "toUnion",
    "traverse",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex",
    "tryCatch",
    "tryCatchK"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
