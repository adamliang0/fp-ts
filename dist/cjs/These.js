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
    matchW: function() {
        return matchW;
    },
    Foldable: function() {
        return Foldable;
    },
    swap: function() {
        return swap;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    elem: function() {
        return elem;
    },
    fold: function() {
        return fold;
    },
    match: function() {
        return match;
    },
    right: function() {
        return These_right;
    },
    toTuple: function() {
        return toTuple;
    },
    getLeftOnly: function() {
        return getLeftOnly;
    },
    foldW: function() {
        return foldW;
    },
    FromEither: function() {
        return FromEither;
    },
    these: function() {
        return these;
    },
    isRight: function() {
        return isRight;
    },
    reduceRight: function() {
        return reduceRight;
    },
    exists: function() {
        return exists;
    },
    fromOption: function() {
        return fromOption;
    },
    both: function() {
        return both;
    },
    mapLeft: function() {
        return mapLeft;
    },
    getRight: function() {
        return getRight;
    },
    getEq: function() {
        return getEq;
    },
    toTuple2: function() {
        return toTuple2;
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
    isBoth: function() {
        return isBoth;
    },
    ApT: function() {
        return ApT;
    },
    fromOptions: function() {
        return fromOptions;
    },
    FromThese: function() {
        return FromThese;
    },
    reduce: function() {
        return reduce;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    isLeft: function() {
        return isLeft;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    Traversable: function() {
        return Traversable;
    },
    getMonad: function() {
        return getMonad;
    },
    map: function() {
        return map;
    },
    Pointed: function() {
        return Pointed;
    },
    left: function() {
        return These_left;
    },
    getLeft: function() {
        return getLeft;
    },
    traverse: function() {
        return traverse;
    },
    sequence: function() {
        return sequence;
    },
    getRightOnly: function() {
        return getRightOnly;
    },
    getApply: function() {
        return getApply;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    getChain: function() {
        return getChain;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    Functor: function() {
        return Functor;
    },
    of: function() {
        return of;
    },
    flap: function() {
        return flap;
    },
    foldMap: function() {
        return foldMap;
    },
    getShow: function() {
        return getShow;
    },
    rightOrBoth: function() {
        return rightOrBoth;
    },
    getApplicative: function() {
        return getApplicative;
    },
    leftOrBoth: function() {
        return leftOrBoth;
    }
});
var external_Eq_js_namespaceObject = require("./Eq.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var isLeft = function(fa) {
    return 'Left' === fa._tag;
};
var isRight = function(fa) {
    return 'Right' === fa._tag;
};
function isBoth(fa) {
    return 'Both' === fa._tag;
}
function These_left(left) {
    return {
        _tag: 'Left',
        left: left
    };
}
function These_right(right) {
    return {
        _tag: 'Right',
        right: right
    };
}
function both(left, right) {
    return {
        _tag: 'Both',
        left: left,
        right: right
    };
}
var matchW = function(onLeft, onRight, onBoth) {
    return function(fa) {
        switch(fa._tag){
            case 'Left':
                return onLeft(fa.left);
            case 'Right':
                return onRight(fa.right);
            case 'Both':
                return onBoth(fa.left, fa.right);
        }
    };
};
var foldW = matchW;
var match = matchW;
var fold = match;
var swap = match(These_right, These_left, function(e, a) {
    return both(a, e);
});
function getShow(SE, SA) {
    return {
        show: match(function(l) {
            return "left(".concat(SE.show(l), ")");
        }, function(a) {
            return "right(".concat(SA.show(a), ")");
        }, function(l, a) {
            return "both(".concat(SE.show(l), ", ").concat(SA.show(a), ")");
        })
    };
}
function getEq(EE, EA) {
    return (0, external_Eq_js_namespaceObject.fromEquals)(function(x, y) {
        return isLeft(x) ? isLeft(y) && EE.equals(x.left, y.left) : isRight(x) ? isRight(y) && EA.equals(x.right, y.right) : isBoth(y) && EE.equals(x.left, y.left) && EA.equals(x.right, y.right);
    });
}
function getSemigroup(SE, SA) {
    return {
        concat: function(x, y) {
            return isLeft(x) ? isLeft(y) ? These_left(SE.concat(x.left, y.left)) : isRight(y) ? both(x.left, y.right) : both(SE.concat(x.left, y.left), y.right) : isRight(x) ? isLeft(y) ? both(y.left, x.right) : isRight(y) ? These_right(SA.concat(x.right, y.right)) : both(y.left, SA.concat(x.right, y.right)) : isLeft(y) ? both(SE.concat(x.left, y.left), x.right) : isRight(y) ? both(x.left, SA.concat(x.right, y.right)) : both(SE.concat(x.left, y.left), SA.concat(x.right, y.right));
        }
    };
}
var getApply = function(S) {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return isLeft(fab) ? isLeft(fa) ? These_left(S.concat(fab.left, fa.left)) : isRight(fa) ? These_left(fab.left) : These_left(S.concat(fab.left, fa.left)) : isRight(fab) ? isLeft(fa) ? These_left(fa.left) : isRight(fa) ? These_right(fab.right(fa.right)) : both(fa.left, fab.right(fa.right)) : isLeft(fa) ? These_left(S.concat(fab.left, fa.left)) : isRight(fa) ? both(fab.left, fab.right(fa.right)) : both(S.concat(fab.left, fa.left), fab.right(fa.right));
        }
    };
};
function getApplicative(S) {
    var A = getApply(S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: of
    };
}
function getChain(S) {
    var A = getApply(S);
    var chain = function(ma, f) {
        if (isLeft(ma)) return ma;
        if (isRight(ma)) return f(ma.right);
        var fb = f(ma.right);
        return isLeft(fb) ? These_left(S.concat(ma.left, fb.left)) : isRight(fb) ? both(ma.left, fb.right) : both(S.concat(ma.left, fb.left), fb.right);
    };
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: chain
    };
}
function getMonad(S) {
    var C = getChain(S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        of: of,
        ap: C.ap,
        chain: C.chain,
        throwError: These_left
    };
}
function getLeft(fa) {
    return isLeft(fa) ? external_internal_js_namespaceObject.some(fa.left) : isRight(fa) ? external_internal_js_namespaceObject.none : external_internal_js_namespaceObject.some(fa.left);
}
function getRight(fa) {
    return isLeft(fa) ? external_internal_js_namespaceObject.none : isRight(fa) ? external_internal_js_namespaceObject.some(fa.right) : external_internal_js_namespaceObject.some(fa.right);
}
function leftOrBoth(e) {
    return function(ma) {
        return external_internal_js_namespaceObject.isNone(ma) ? These_left(e) : both(e, ma.value);
    };
}
function rightOrBoth(a) {
    return function(me) {
        return external_internal_js_namespaceObject.isNone(me) ? These_right(a) : both(me.value, a);
    };
}
function getLeftOnly(fa) {
    return isLeft(fa) ? external_internal_js_namespaceObject.some(fa.left) : external_internal_js_namespaceObject.none;
}
function getRightOnly(fa) {
    return isRight(fa) ? external_internal_js_namespaceObject.some(fa.right) : external_internal_js_namespaceObject.none;
}
var fromOptions = function(fe, fa) {
    return external_internal_js_namespaceObject.isNone(fe) ? external_internal_js_namespaceObject.isNone(fa) ? external_internal_js_namespaceObject.none : external_internal_js_namespaceObject.some(These_right(fa.value)) : external_internal_js_namespaceObject.isNone(fa) ? external_internal_js_namespaceObject.some(These_left(fe.value)) : external_internal_js_namespaceObject.some(both(fe.value, fa.value));
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
var _reduce = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduce(b, f));
};
var _foldMap = function(M) {
    var foldMapM = foldMap(M);
    return function(fa, f) {
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
var bimap = function(f, g) {
    return function(fa) {
        return isLeft(fa) ? These_left(f(fa.left)) : isRight(fa) ? These_right(g(fa.right)) : both(f(fa.left), g(fa.right));
    };
};
var mapLeft = function(f) {
    return function(fa) {
        return isLeft(fa) ? These_left(f(fa.left)) : isBoth(fa) ? both(f(fa.left), fa.right) : fa;
    };
};
var map = function(f) {
    return function(fa) {
        return isLeft(fa) ? fa : isRight(fa) ? These_right(f(fa.right)) : both(fa.left, f(fa.right));
    };
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
var traverse = function(F) {
    return function(f) {
        return function(ta) {
            return isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(f(ta.right), These_right) : F.map(f(ta.right), function(b) {
                return both(ta.left, b);
            });
        };
    };
};
var sequence = function(F) {
    return function(ta) {
        return isLeft(ta) ? F.of(ta) : isRight(ta) ? F.map(ta.right, These_right) : F.map(ta.right, function(b) {
            return both(ta.left, b);
        });
    };
};
var of = These_right;
var URI = 'These';
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var Bifunctor = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var FromThese = {
    URI: URI,
    fromThese: external_function_js_namespaceObject.identity
};
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
var FromEither = {
    URI: URI,
    fromEither: external_function_js_namespaceObject.identity
};
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var elem = function(E) {
    return function(a) {
        return function(ma) {
            return isLeft(ma) ? false : E.equals(a, ma.right);
        };
    };
};
var exists = function(predicate) {
    return function(ma) {
        return isLeft(ma) ? false : predicate(ma.right);
    };
};
var toTuple2 = function(e, a) {
    return function(fa) {
        return isLeft(fa) ? [
            fa.left,
            a()
        ] : isRight(fa) ? [
            e(),
            fa.right
        ] : [
            fa.left,
            fa.right
        ];
    };
};
var toTuple = function(e, a) {
    return toTuple2(function() {
        return e;
    }, function() {
        return a;
    });
};
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(S) {
    return function(f) {
        return function(as) {
            var e = external_internal_js_namespaceObject.none;
            var t = f(0, external_internal_js_namespaceObject.head(as));
            if (isLeft(t)) return t;
            if (isBoth(t)) e = external_internal_js_namespaceObject.some(t.left);
            var out = [
                t.right
            ];
            for(var i = 1; i < as.length; i++){
                var t1 = f(i, as[i]);
                if (isLeft(t1)) return t1;
                if (isBoth(t1)) e = external_internal_js_namespaceObject.isNone(e) ? external_internal_js_namespaceObject.some(t1.left) : external_internal_js_namespaceObject.some(S.concat(e.value, t1.left));
                out.push(t1.right);
            }
            return external_internal_js_namespaceObject.isNone(e) ? These_right(out) : both(e.value, out);
        };
    };
};
var traverseReadonlyArrayWithIndex = function(S) {
    return function(f) {
        var g = traverseReadonlyNonEmptyArrayWithIndex(S)(f);
        return function(as) {
            return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
        };
    };
};
var these = {
    URI: URI,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
exports.ApT = __webpack_exports__.ApT;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Foldable = __webpack_exports__.Foldable;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromThese = __webpack_exports__.FromThese;
exports.Functor = __webpack_exports__.Functor;
exports.Pointed = __webpack_exports__.Pointed;
exports.Traversable = __webpack_exports__.Traversable;
exports.URI = __webpack_exports__.URI;
exports.bimap = __webpack_exports__.bimap;
exports.both = __webpack_exports__.both;
exports.elem = __webpack_exports__.elem;
exports.exists = __webpack_exports__.exists;
exports.flap = __webpack_exports__.flap;
exports.fold = __webpack_exports__.fold;
exports.foldMap = __webpack_exports__.foldMap;
exports.foldW = __webpack_exports__.foldW;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromOptions = __webpack_exports__.fromOptions;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.getApplicative = __webpack_exports__.getApplicative;
exports.getApply = __webpack_exports__.getApply;
exports.getChain = __webpack_exports__.getChain;
exports.getEq = __webpack_exports__.getEq;
exports.getLeft = __webpack_exports__.getLeft;
exports.getLeftOnly = __webpack_exports__.getLeftOnly;
exports.getMonad = __webpack_exports__.getMonad;
exports.getRight = __webpack_exports__.getRight;
exports.getRightOnly = __webpack_exports__.getRightOnly;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getShow = __webpack_exports__.getShow;
exports.isBoth = __webpack_exports__.isBoth;
exports.isLeft = __webpack_exports__.isLeft;
exports.isRight = __webpack_exports__.isRight;
exports.left = __webpack_exports__.left;
exports.leftOrBoth = __webpack_exports__.leftOrBoth;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchW = __webpack_exports__.matchW;
exports.of = __webpack_exports__.of;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.right = __webpack_exports__.right;
exports.rightOrBoth = __webpack_exports__.rightOrBoth;
exports.sequence = __webpack_exports__.sequence;
exports.swap = __webpack_exports__.swap;
exports.these = __webpack_exports__.these;
exports.toTuple = __webpack_exports__.toTuple;
exports.toTuple2 = __webpack_exports__.toTuple2;
exports.traverse = __webpack_exports__.traverse;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ApT",
    "Bifunctor",
    "Foldable",
    "FromEither",
    "FromThese",
    "Functor",
    "Pointed",
    "Traversable",
    "URI",
    "bimap",
    "both",
    "elem",
    "exists",
    "flap",
    "fold",
    "foldMap",
    "foldW",
    "fromOption",
    "fromOptionK",
    "fromOptions",
    "fromPredicate",
    "getApplicative",
    "getApply",
    "getChain",
    "getEq",
    "getLeft",
    "getLeftOnly",
    "getMonad",
    "getRight",
    "getRightOnly",
    "getSemigroup",
    "getShow",
    "isBoth",
    "isLeft",
    "isRight",
    "left",
    "leftOrBoth",
    "map",
    "mapLeft",
    "match",
    "matchW",
    "of",
    "reduce",
    "reduceRight",
    "right",
    "rightOrBoth",
    "sequence",
    "swap",
    "these",
    "toTuple",
    "toTuple2",
    "traverse",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
