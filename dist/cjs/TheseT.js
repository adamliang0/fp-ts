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
    rightF: function() {
        return rightF;
    },
    swap: function() {
        return swap;
    },
    match: function() {
        return match;
    },
    getTheseM: function() {
        return getTheseM;
    },
    right: function() {
        return right;
    },
    map: function() {
        return map;
    },
    left: function() {
        return left;
    },
    mapLeft: function() {
        return mapLeft;
    },
    both: function() {
        return both;
    },
    toTuple2: function() {
        return toTuple2;
    },
    bimap: function() {
        return bimap;
    },
    chain: function() {
        return chain;
    },
    ap: function() {
        return ap;
    },
    leftF: function() {
        return leftF;
    },
    matchE: function() {
        return matchE;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_These_js_namespaceObject = require("./These.js");
function right(F) {
    return (0, external_function_js_namespaceObject.flow)(external_These_js_namespaceObject.right, F.of);
}
function left(F) {
    return (0, external_function_js_namespaceObject.flow)(external_These_js_namespaceObject.left, F.of);
}
function both(F) {
    return (0, external_function_js_namespaceObject.flow)(external_These_js_namespaceObject.both, F.of);
}
function rightF(F) {
    return function(fa) {
        return F.map(fa, external_These_js_namespaceObject.right);
    };
}
function leftF(F) {
    return function(fe) {
        return F.map(fe, external_These_js_namespaceObject.left);
    };
}
function map(F) {
    return (0, external_Functor_js_namespaceObject.map)(F, external_These_js_namespaceObject.Functor);
}
function ap(F, S) {
    return (0, external_Apply_js_namespaceObject.ap)(F, external_These_js_namespaceObject.getApply(S));
}
function chain(M, S) {
    var _left = left(M);
    return function(f) {
        return function(ma) {
            return M.chain(ma, external_These_js_namespaceObject.match(_left, f, function(e1, a) {
                return M.map(f(a), external_These_js_namespaceObject.match(function(e2) {
                    return external_These_js_namespaceObject.left(S.concat(e1, e2));
                }, function(b) {
                    return external_These_js_namespaceObject.both(e1, b);
                }, function(e2, b) {
                    return external_These_js_namespaceObject.both(S.concat(e1, e2), b);
                }));
            }));
        };
    };
}
function bimap(F) {
    return function(f, g) {
        return function(fea) {
            return F.map(fea, external_These_js_namespaceObject.bimap(f, g));
        };
    };
}
function mapLeft(F) {
    return function(f) {
        return function(fea) {
            return F.map(fea, external_These_js_namespaceObject.mapLeft(f));
        };
    };
}
function match(F) {
    return function(onLeft, onRight, onBoth) {
        return function(ma) {
            return F.map(ma, external_These_js_namespaceObject.match(onLeft, onRight, onBoth));
        };
    };
}
function matchE(M) {
    return function(onLeft, onRight, onBoth) {
        return function(ma) {
            return M.chain(ma, external_These_js_namespaceObject.match(onLeft, onRight, onBoth));
        };
    };
}
function swap(F) {
    return function(ma) {
        return F.map(ma, external_These_js_namespaceObject.swap);
    };
}
function toTuple2(F) {
    return function(e, a) {
        return function(fa) {
            return F.map(fa, external_These_js_namespaceObject.toTuple2(e, a));
        };
    };
}
function getTheseM(M) {
    var _map = map(M);
    var _bimap = bimap(M);
    var _mapLeft = mapLeft(M);
    var _fold = matchE(M);
    var _toTuple2 = toTuple2(M);
    var of = right(M);
    var mapT = function(fa, f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, _map(f));
    };
    return {
        map: mapT,
        bimap: function(fea, f, g) {
            return (0, external_function_js_namespaceObject.pipe)(fea, _bimap(f, g));
        },
        mapLeft: function(fea, f) {
            return (0, external_function_js_namespaceObject.pipe)(fea, _mapLeft(f));
        },
        fold: function(fa, onLeft, onRight, onBoth) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _fold(onLeft, onRight, onBoth));
        },
        swap: swap(M),
        rightM: rightF(M),
        leftM: leftF(M),
        left: left(M),
        right: right(M),
        both: both(M),
        toTuple: function(fa, e, a) {
            return (0, external_function_js_namespaceObject.pipe)(fa, _toTuple2(function() {
                return e;
            }, function() {
                return a;
            }));
        },
        getMonad: function(S) {
            var _ap = ap(M, S);
            var _chain = chain(M, S);
            return {
                _E: void 0,
                map: mapT,
                of: of,
                ap: function(fab, fa) {
                    return (0, external_function_js_namespaceObject.pipe)(fab, _ap(fa));
                },
                chain: function(ma, f) {
                    return (0, external_function_js_namespaceObject.pipe)(ma, _chain(f));
                }
            };
        }
    };
}
exports.ap = __webpack_exports__.ap;
exports.bimap = __webpack_exports__.bimap;
exports.both = __webpack_exports__.both;
exports.chain = __webpack_exports__.chain;
exports.getTheseM = __webpack_exports__.getTheseM;
exports.left = __webpack_exports__.left;
exports.leftF = __webpack_exports__.leftF;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.match = __webpack_exports__.match;
exports.matchE = __webpack_exports__.matchE;
exports.right = __webpack_exports__.right;
exports.rightF = __webpack_exports__.rightF;
exports.swap = __webpack_exports__.swap;
exports.toTuple2 = __webpack_exports__.toTuple2;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ap",
    "bimap",
    "both",
    "chain",
    "getTheseM",
    "left",
    "leftF",
    "map",
    "mapLeft",
    "match",
    "matchE",
    "right",
    "rightF",
    "swap",
    "toTuple2"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
