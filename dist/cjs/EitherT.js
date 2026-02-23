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
    matchE: function() {
        return matchE;
    },
    orLeft: function() {
        return orLeft;
    },
    fromNullableK: function() {
        return fromNullableK;
    },
    alt: function() {
        return alt;
    },
    rightF: function() {
        return rightF;
    },
    match: function() {
        return match;
    },
    fromNullable: function() {
        return fromNullable;
    },
    right: function() {
        return right;
    },
    flatMap: function() {
        return flatMap;
    },
    map: function() {
        return map;
    },
    orElse: function() {
        return orElse;
    },
    left: function() {
        return left;
    },
    getOrElse: function() {
        return getOrElse;
    },
    orElseFirst: function() {
        return orElseFirst;
    },
    altValidation: function() {
        return altValidation;
    },
    swap: function() {
        return swap;
    },
    tapError: function() {
        return tapError;
    },
    mapLeft: function() {
        return mapLeft;
    },
    mapBoth: function() {
        return mapBoth;
    },
    toUnion: function() {
        return toUnion;
    },
    mapError: function() {
        return mapError;
    },
    bimap: function() {
        return bimap;
    },
    chain: function() {
        return chain;
    },
    getOrElseW: function() {
        return getOrElseW;
    },
    ap: function() {
        return ap;
    },
    leftF: function() {
        return leftF;
    },
    getEitherM: function() {
        return getEitherM;
    },
    chainNullableK: function() {
        return chainNullableK;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Either_js_namespaceObject = require("./Either.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function right(F) {
    return (0, external_function_js_namespaceObject.flow)(external_Either_js_namespaceObject.right, F.of);
}
function left(F) {
    return (0, external_function_js_namespaceObject.flow)(external_Either_js_namespaceObject.left, F.of);
}
function rightF(F) {
    return function(fa) {
        return F.map(fa, external_Either_js_namespaceObject.right);
    };
}
function leftF(F) {
    return function(fe) {
        return F.map(fe, external_Either_js_namespaceObject.left);
    };
}
function fromNullable(F) {
    return function(e) {
        return (0, external_function_js_namespaceObject.flow)(external_Either_js_namespaceObject.fromNullable(e), F.of);
    };
}
function fromNullableK(F) {
    var fromNullableF = fromNullable(F);
    return function(e) {
        var fromNullableFE = fromNullableF(e);
        return function(f) {
            return (0, external_function_js_namespaceObject.flow)(f, fromNullableFE);
        };
    };
}
function chainNullableK(M) {
    var chainM = chain(M);
    var fromNullableKM = fromNullableK(M);
    return function(e) {
        var fromNullableKMe = fromNullableKM(e);
        return function(f) {
            return chainM(fromNullableKMe(f));
        };
    };
}
function map(F) {
    return (0, external_Functor_js_namespaceObject.map)(F, external_Either_js_namespaceObject.Functor);
}
function ap(F) {
    return (0, external_Apply_js_namespaceObject.ap)(F, external_Either_js_namespaceObject.Apply);
}
function chain(M) {
    var flatMapM = flatMap(M);
    return function(f) {
        return function(ma) {
            return flatMapM(ma, f);
        };
    };
}
function flatMap(M) {
    return function(ma, f) {
        return M.chain(ma, function(e) {
            return external_Either_js_namespaceObject.isLeft(e) ? M.of(e) : f(e.right);
        });
    };
}
function alt(M) {
    return function(second) {
        return function(first) {
            return M.chain(first, function(e) {
                return external_Either_js_namespaceObject.isLeft(e) ? second() : M.of(e);
            });
        };
    };
}
function bimap(F) {
    var mapBothF = mapBoth(F);
    return function(f, g) {
        return function(self) {
            return mapBothF(self, f, g);
        };
    };
}
function mapBoth(F) {
    return function(self, f, g) {
        return F.map(self, external_Either_js_namespaceObject.bimap(f, g));
    };
}
function mapLeft(F) {
    var mapErrorF = mapError(F);
    return function(f) {
        return function(self) {
            return mapErrorF(self, f);
        };
    };
}
function mapError(F) {
    return function(self, f) {
        return F.map(self, external_Either_js_namespaceObject.mapLeft(f));
    };
}
function altValidation(M, S) {
    return function(second) {
        return function(first) {
            return M.chain(first, external_Either_js_namespaceObject.match(function(e1) {
                return M.map(second(), external_Either_js_namespaceObject.mapLeft(function(e2) {
                    return S.concat(e1, e2);
                }));
            }, right(M)));
        };
    };
}
function match(F) {
    return function(onLeft, onRight) {
        return function(ma) {
            return F.map(ma, external_Either_js_namespaceObject.match(onLeft, onRight));
        };
    };
}
function matchE(M) {
    return function(onLeft, onRight) {
        return function(ma) {
            return M.chain(ma, external_Either_js_namespaceObject.match(onLeft, onRight));
        };
    };
}
function getOrElse(M) {
    return function(onLeft) {
        return function(ma) {
            return M.chain(ma, external_Either_js_namespaceObject.match(onLeft, M.of));
        };
    };
}
function getOrElseW(M) {
    return function(onLeft) {
        return function(ma) {
            return M.chain(ma, function(ea) {
                return external_Either_js_namespaceObject.isLeft(ea) ? M.map(onLeft(ea.left), function(b) {
                    return b;
                }) : M.of(ea.right);
            });
        };
    };
}
function orElse(M) {
    return function(onLeft) {
        return function(ma) {
            return M.chain(ma, function(e) {
                return external_Either_js_namespaceObject.isLeft(e) ? onLeft(e.left) : M.of(e);
            });
        };
    };
}
function orElseFirst(M) {
    var tapErrorM = tapError(M);
    return function(onLeft) {
        return function(ma) {
            return tapErrorM(ma, onLeft);
        };
    };
}
function tapError(M) {
    var orElseM = orElse(M);
    return function(ma, onLeft) {
        return (0, external_function_js_namespaceObject.pipe)(ma, orElseM(function(e) {
            return M.map(onLeft(e), function(eb) {
                return external_Either_js_namespaceObject.isLeft(eb) ? eb : external_Either_js_namespaceObject.left(e);
            });
        }));
    };
}
function orLeft(M) {
    return function(onLeft) {
        return function(ma) {
            return M.chain(ma, external_Either_js_namespaceObject.match(function(e) {
                return M.map(onLeft(e), external_Either_js_namespaceObject.left);
            }, function(a) {
                return M.of(external_Either_js_namespaceObject.right(a));
            }));
        };
    };
}
function swap(F) {
    return function(ma) {
        return F.map(ma, external_Either_js_namespaceObject.swap);
    };
}
function toUnion(F) {
    return function(fa) {
        return F.map(fa, external_Either_js_namespaceObject.toUnion);
    };
}
function getEitherM(M) {
    var _ap = ap(M);
    var _map = map(M);
    var _chain = chain(M);
    var _alt = alt(M);
    var _bimap = bimap(M);
    var _mapLeft = mapLeft(M);
    var _fold = matchE(M);
    var _getOrElse = getOrElse(M);
    var _orElse = orElse(M);
    return {
        map: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _map(f));
        },
        ap: function(fab, fa) {
            return (0, external_function_js_namespaceObject.pipe)(fab, _ap(fa));
        },
        of: right(M),
        chain: function(ma, f) {
            return (0, external_function_js_namespaceObject.pipe)(ma, _chain(f));
        },
        alt: function(fa, that) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _alt(that));
        },
        bimap: function(fea, f, g) {
            return (0, external_function_js_namespaceObject.pipe)(fea, _bimap(f, g));
        },
        mapLeft: function(fea, f) {
            return (0, external_function_js_namespaceObject.pipe)(fea, _mapLeft(f));
        },
        fold: function(fa, onLeft, onRight) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _fold(onLeft, onRight));
        },
        getOrElse: function(fa, onLeft) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _getOrElse(onLeft));
        },
        orElse: function(fa, f) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _orElse(f));
        },
        swap: swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: left(M)
    };
}
exports.alt = __webpack_exports__.alt;
exports.altValidation = __webpack_exports__.altValidation;
exports.ap = __webpack_exports__.ap;
exports.bimap = __webpack_exports__.bimap;
exports.chain = __webpack_exports__.chain;
exports.chainNullableK = __webpack_exports__.chainNullableK;
exports.flatMap = __webpack_exports__.flatMap;
exports.fromNullable = __webpack_exports__.fromNullable;
exports.fromNullableK = __webpack_exports__.fromNullableK;
exports.getEitherM = __webpack_exports__.getEitherM;
exports.getOrElse = __webpack_exports__.getOrElse;
exports.getOrElseW = __webpack_exports__.getOrElseW;
exports.left = __webpack_exports__.left;
exports.leftF = __webpack_exports__.leftF;
exports.map = __webpack_exports__.map;
exports.mapBoth = __webpack_exports__.mapBoth;
exports.mapError = __webpack_exports__.mapError;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.orElse = __webpack_exports__.orElse;
exports.orElseFirst = __webpack_exports__.orElseFirst;
exports.orLeft = __webpack_exports__.orLeft;
exports.right = __webpack_exports__.right;
exports.rightF = __webpack_exports__.rightF;
exports.swap = __webpack_exports__.swap;
exports.tapError = __webpack_exports__.tapError;
exports.toUnion = __webpack_exports__.toUnion;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "alt",
    "altValidation",
    "ap",
    "bimap",
    "chain",
    "chainNullableK",
    "flatMap",
    "fromNullable",
    "fromNullableK",
    "getEitherM",
    "getOrElse",
    "getOrElseW",
    "left",
    "leftF",
    "map",
    "mapBoth",
    "mapError",
    "mapLeft",
    "match",
    "matchE",
    "orElse",
    "orElseFirst",
    "orLeft",
    "right",
    "rightF",
    "swap",
    "tapError",
    "toUnion"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
