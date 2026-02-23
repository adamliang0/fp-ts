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
    fromEither: function() {
        return fromEither;
    },
    matchW: function() {
        return matchW;
    },
    swap: function() {
        return swap;
    },
    FromIO: function() {
        return FromIO;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    fold: function() {
        return fold;
    },
    fromTheseK: function() {
        return fromTheseK;
    },
    match: function() {
        return match;
    },
    right: function() {
        return TaskThese_right;
    },
    toTuple: function() {
        return toTuple;
    },
    foldW: function() {
        return foldW;
    },
    FromEither: function() {
        return FromEither;
    },
    FromTask: function() {
        return FromTask;
    },
    mapLeft: function() {
        return mapLeft;
    },
    fromOption: function() {
        return fromOption;
    },
    both: function() {
        return both;
    },
    fromIOEither: function() {
        return fromIOEither;
    },
    fromIOK: function() {
        return fromIOK;
    },
    leftIO: function() {
        return leftIO;
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
    bifunctorTaskThese: function() {
        return bifunctorTaskThese;
    },
    bimap: function() {
        return bimap;
    },
    fromIO: function() {
        return fromIO;
    },
    ApT: function() {
        return ApT;
    },
    fromThese: function() {
        return fromThese;
    },
    fromTaskK: function() {
        return fromTaskK;
    },
    FromThese: function() {
        return FromThese;
    },
    fromTask: function() {
        return fromTask;
    },
    taskThese: function() {
        return taskThese;
    },
    traverseReadonlyArrayWithIndexSeq: function() {
        return traverseReadonlyArrayWithIndexSeq;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    getMonad: function() {
        return getMonad;
    },
    leftTask: function() {
        return leftTask;
    },
    functorTaskThese: function() {
        return functorTaskThese;
    },
    Pointed: function() {
        return Pointed;
    },
    left: function() {
        return left;
    },
    map: function() {
        return map;
    },
    rightTask: function() {
        return rightTask;
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
    traverseReadonlyNonEmptyArrayWithIndexSeq: function() {
        return traverseReadonlyNonEmptyArrayWithIndexSeq;
    },
    flap: function() {
        return flap;
    },
    matchEW: function() {
        return matchEW;
    },
    rightIO: function() {
        return rightIO;
    },
    getApplicative: function() {
        return getApplicative;
    },
    matchE: function() {
        return matchE;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_FromTask_js_namespaceObject = require("./FromTask.js");
var external_FromThese_js_namespaceObject = require("./FromThese.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Task_js_namespaceObject = require("./Task.js");
var external_These_js_namespaceObject = require("./These.js");
var external_TheseT_js_namespaceObject = require("./TheseT.js");
var left = /*#__PURE__*/ external_TheseT_js_namespaceObject.left(external_Task_js_namespaceObject.Pointed);
var TaskThese_right = /*#__PURE__*/ external_TheseT_js_namespaceObject.right(external_Task_js_namespaceObject.Pointed);
var both = /*#__PURE__*/ external_TheseT_js_namespaceObject.both(external_Task_js_namespaceObject.Pointed);
var rightTask = /*#__PURE__*/ external_TheseT_js_namespaceObject.rightF(external_Task_js_namespaceObject.Functor);
var leftTask = /*#__PURE__*/ external_TheseT_js_namespaceObject.leftF(external_Task_js_namespaceObject.Functor);
var rightIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.flow)(external_Task_js_namespaceObject.fromIO, rightTask);
var leftIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.flow)(external_Task_js_namespaceObject.fromIO, leftTask);
var fromEither = external_Task_js_namespaceObject.of;
var fromThese = external_Task_js_namespaceObject.of;
var fromIO = rightIO;
var fromIOEither = external_Task_js_namespaceObject.fromIO;
var fromTask = rightTask;
var match = /*#__PURE__*/ external_TheseT_js_namespaceObject.match(external_Task_js_namespaceObject.Functor);
var matchW = match;
var matchE = /*#__PURE__*/ external_TheseT_js_namespaceObject.matchE(external_Task_js_namespaceObject.Monad);
var fold = matchE;
var matchEW = fold;
var foldW = matchEW;
var swap = /*#__PURE__*/ external_TheseT_js_namespaceObject.swap(external_Task_js_namespaceObject.Functor);
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _bimap = function(fa, f, g) {
    return (0, external_function_js_namespaceObject.pipe)(fa, bimap(f, g));
};
var _mapLeft = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapLeft(f));
};
var map = /*#__PURE__*/ external_TheseT_js_namespaceObject.map(external_Task_js_namespaceObject.Functor);
var bimap = /*#__PURE__*/ external_TheseT_js_namespaceObject.bimap(external_Task_js_namespaceObject.Functor);
var mapLeft = /*#__PURE__*/ external_TheseT_js_namespaceObject.mapLeft(external_Task_js_namespaceObject.Functor);
var of = TaskThese_right;
var URI = 'TaskThese';
var getApply = function(A, S) {
    var ap = external_TheseT_js_namespaceObject.ap(A, S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
        }
    };
};
function getApplicative(A, S) {
    var ap = getApply(A, S).ap;
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: ap,
        of: of
    };
}
function getChain(S) {
    var A = getApply(external_Task_js_namespaceObject.ApplicativePar, S);
    var chain = external_TheseT_js_namespaceObject.chain(external_Task_js_namespaceObject.Monad, S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: function(ma, f) {
            return (0, external_function_js_namespaceObject.pipe)(ma, chain(f));
        }
    };
}
function getMonad(S) {
    var A = getApplicative(external_Task_js_namespaceObject.ApplicativePar, S);
    var C = getChain(S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: of,
        chain: C.chain,
        fromIO: fromIO,
        fromTask: fromTask
    };
}
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
var FromEither = {
    URI: URI,
    fromEither: fromEither
};
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var FromThese = {
    URI: URI,
    fromThese: fromThese
};
var fromTheseK = /*#__PURE__*/ (0, external_FromThese_js_namespaceObject.fromTheseK)(FromThese);
var FromIO = {
    URI: URI,
    fromIO: fromIO
};
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var FromTask = {
    URI: URI,
    fromIO: fromIO,
    fromTask: fromTask
};
var fromTaskK = /*#__PURE__*/ (0, external_FromTask_js_namespaceObject.fromTaskK)(FromTask);
var toTuple2 = /*#__PURE__*/ external_TheseT_js_namespaceObject.toTuple2(external_Task_js_namespaceObject.Functor);
var ApT = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyReadonlyArray);
var traverseReadonlyNonEmptyArrayWithIndex = function(S) {
    var g = external_These_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(S);
    return function(f) {
        return (0, external_function_js_namespaceObject.flow)(external_Task_js_namespaceObject.traverseReadonlyNonEmptyArrayWithIndex(f), external_Task_js_namespaceObject.map(g(external_function_js_namespaceObject.SK)));
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
var traverseReadonlyNonEmptyArrayWithIndexSeq = function(S) {
    return function(f) {
        return function(as) {
            return function() {
                return external_internal_js_namespaceObject.tail(as).reduce(function(acc, a, i) {
                    return acc.then(function(ebs) {
                        return external_These_js_namespaceObject.isLeft(ebs) ? acc : f(i + 1, a)().then(function(eb) {
                            if (external_These_js_namespaceObject.isLeft(eb)) return eb;
                            if (external_These_js_namespaceObject.isBoth(eb)) {
                                var right = ebs.right;
                                right.push(eb.right);
                                return external_These_js_namespaceObject.isBoth(ebs) ? external_These_js_namespaceObject.both(S.concat(ebs.left, eb.left), right) : external_These_js_namespaceObject.both(eb.left, right);
                            }
                            ebs.right.push(eb.right);
                            return ebs;
                        });
                    });
                }, f(0, external_internal_js_namespaceObject.head(as))().then(external_These_js_namespaceObject.map(external_internal_js_namespaceObject.singleton)));
            };
        };
    };
};
var traverseReadonlyArrayWithIndexSeq = function(S) {
    return function(f) {
        var g = traverseReadonlyNonEmptyArrayWithIndexSeq(S)(f);
        return function(as) {
            return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : ApT;
        };
    };
};
var functorTaskThese = {
    URI: URI,
    map: _map
};
var bifunctorTaskThese = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var toTuple = function(e, a) {
    return toTuple2(function() {
        return e;
    }, function() {
        return a;
    });
};
var taskThese = {
    URI: URI,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var getSemigroup = function(SE, SA) {
    return (0, external_Apply_js_namespaceObject.getApplySemigroup)(external_Task_js_namespaceObject.ApplySeq)(external_These_js_namespaceObject.getSemigroup(SE, SA));
};
exports.ApT = __webpack_exports__.ApT;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromIO = __webpack_exports__.FromIO;
exports.FromTask = __webpack_exports__.FromTask;
exports.FromThese = __webpack_exports__.FromThese;
exports.Functor = __webpack_exports__.Functor;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.bifunctorTaskThese = __webpack_exports__.bifunctorTaskThese;
exports.bimap = __webpack_exports__.bimap;
exports.both = __webpack_exports__.both;
exports.flap = __webpack_exports__.flap;
exports.fold = __webpack_exports__.fold;
exports.foldW = __webpack_exports__.foldW;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOEither = __webpack_exports__.fromIOEither;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.fromTask = __webpack_exports__.fromTask;
exports.fromTaskK = __webpack_exports__.fromTaskK;
exports.fromThese = __webpack_exports__.fromThese;
exports.fromTheseK = __webpack_exports__.fromTheseK;
exports.functorTaskThese = __webpack_exports__.functorTaskThese;
exports.getApplicative = __webpack_exports__.getApplicative;
exports.getApply = __webpack_exports__.getApply;
exports.getChain = __webpack_exports__.getChain;
exports.getMonad = __webpack_exports__.getMonad;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.left = __webpack_exports__.left;
exports.leftIO = __webpack_exports__.leftIO;
exports.leftTask = __webpack_exports__.leftTask;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.matchEW = __webpack_exports__.matchEW;
exports.matchW = __webpack_exports__.matchW;
exports.of = __webpack_exports__.of;
exports.right = __webpack_exports__.right;
exports.rightIO = __webpack_exports__.rightIO;
exports.rightTask = __webpack_exports__.rightTask;
exports.swap = __webpack_exports__.swap;
exports.taskThese = __webpack_exports__.taskThese;
exports.toTuple = __webpack_exports__.toTuple;
exports.toTuple2 = __webpack_exports__.toTuple2;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyArrayWithIndexSeq;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndexSeq = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndexSeq;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ApT",
    "Bifunctor",
    "FromEither",
    "FromIO",
    "FromTask",
    "FromThese",
    "Functor",
    "Pointed",
    "URI",
    "bifunctorTaskThese",
    "bimap",
    "both",
    "flap",
    "fold",
    "foldW",
    "fromEither",
    "fromIO",
    "fromIOEither",
    "fromIOK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "fromTask",
    "fromTaskK",
    "fromThese",
    "fromTheseK",
    "functorTaskThese",
    "getApplicative",
    "getApply",
    "getChain",
    "getMonad",
    "getSemigroup",
    "left",
    "leftIO",
    "leftTask",
    "map",
    "mapLeft",
    "match",
    "matchE",
    "matchEW",
    "matchW",
    "of",
    "right",
    "rightIO",
    "rightTask",
    "swap",
    "taskThese",
    "toTuple",
    "toTuple2",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyArrayWithIndexSeq",
    "traverseReadonlyNonEmptyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndexSeq"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
