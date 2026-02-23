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
    Foldable: function() {
        return Foldable;
    },
    fst: function() {
        return fst;
    },
    swap: function() {
        return swap;
    },
    mapFst: function() {
        return mapFst;
    },
    compose: function() {
        return compose;
    },
    snd: function() {
        return snd;
    },
    readonlyTuple: function() {
        return readonlyTuple;
    },
    reduceRight: function() {
        return reduceRight;
    },
    mapLeft: function() {
        return mapLeft;
    },
    Semigroupoid: function() {
        return Semigroupoid;
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
    mapSnd: function() {
        return mapSnd;
    },
    extract: function() {
        return extract;
    },
    getChainRec: function() {
        return getChainRec;
    },
    reduce: function() {
        return reduce;
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
    extend: function() {
        return extend;
    },
    traverse: function() {
        return traverse;
    },
    sequence: function() {
        return sequence;
    },
    getApply: function() {
        return getApply;
    },
    Comonad: function() {
        return Comonad;
    },
    getChain: function() {
        return getChain;
    },
    Functor: function() {
        return Functor;
    },
    duplicate: function() {
        return duplicate;
    },
    foldMap: function() {
        return foldMap;
    },
    flap: function() {
        return flap;
    },
    getApplicative: function() {
        return getApplicative;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = null == arr ? null : "u" > typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null == _i) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && null != _i["return"]) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if ("string" == typeof o) return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if ("Object" === n && o.constructor) n = o.constructor.name;
    if ("Map" === n || "Set" === n) return Array.from(n);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function fst(ea) {
    return ea[0];
}
function snd(ea) {
    return ea[1];
}
var swap = function(ea) {
    return [
        snd(ea),
        fst(ea)
    ];
};
function getApply(S) {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: function(fab, fa) {
            return [
                fst(fab)(fst(fa)),
                S.concat(snd(fab), snd(fa))
            ];
        }
    };
}
var of = function(M) {
    return function(a) {
        return [
            a,
            M.empty
        ];
    };
};
function getApplicative(M) {
    var A = getApply(M);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        of: of(M)
    };
}
function getChain(S) {
    var A = getApply(S);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: A.ap,
        chain: function(ma, f) {
            var _f = _sliced_to_array(f(fst(ma)), 2), b = _f[0], s = _f[1];
            return [
                b,
                S.concat(snd(ma), s)
            ];
        }
    };
}
function getMonad(M) {
    var C = getChain(M);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: C.ap,
        chain: C.chain,
        of: of(M)
    };
}
function getChainRec(M) {
    var chainRec = function(a, f) {
        var result = f(a);
        var acc = M.empty;
        var s = fst(result);
        while('Left' === s._tag){
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [
            s.right,
            M.concat(acc, snd(result))
        ];
    };
    var C = getChain(M);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        ap: C.ap,
        chain: C.chain,
        chainRec: chainRec
    };
}
var _compose = function(bc, ab) {
    return (0, external_function_js_namespaceObject.pipe)(bc, compose(ab));
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapFst(f));
};
var _bimap = function(fa, f, g) {
    return (0, external_function_js_namespaceObject.pipe)(fa, bimap(f, g));
};
var _mapLeft = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapSnd(f));
};
var _extend = function(wa, f) {
    return (0, external_function_js_namespaceObject.pipe)(wa, extend(f));
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
        return [
            g(fst(fa)),
            f(snd(fa))
        ];
    };
};
var mapFst = function(f) {
    return function(fa) {
        return [
            f(fst(fa)),
            snd(fa)
        ];
    };
};
var mapSnd = function(f) {
    return function(fa) {
        return [
            fst(fa),
            f(snd(fa))
        ];
    };
};
var compose = function(ab) {
    return function(bc) {
        return [
            fst(bc),
            snd(ab)
        ];
    };
};
var extend = function(f) {
    return function(wa) {
        return [
            f(wa),
            snd(wa)
        ];
    };
};
var extract = fst;
var duplicate = /*#__PURE__*/ extend(external_function_js_namespaceObject.identity);
var reduce = function(b, f) {
    return function(fa) {
        return f(b, fst(fa));
    };
};
var foldMap = function() {
    return function(f) {
        return function(fa) {
            return f(fst(fa));
        };
    };
};
var reduceRight = function(b, f) {
    return function(fa) {
        return f(fst(fa), b);
    };
};
var traverse = function(F) {
    return function(f) {
        return function(ta) {
            return F.map(f(fst(ta)), function(b) {
                return [
                    b,
                    snd(ta)
                ];
            });
        };
    };
};
var sequence = function(F) {
    return function(fas) {
        return F.map(fst(fas), function(a) {
            return [
                a,
                snd(fas)
            ];
        });
    };
};
var URI = 'ReadonlyTuple';
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var map = mapFst;
var mapLeft = mapSnd;
var Bifunctor = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var Semigroupoid = {
    URI: URI,
    compose: _compose
};
var Comonad = {
    URI: URI,
    map: _map,
    extend: _extend,
    extract: extract
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
var readonlyTuple = {
    URI: URI,
    compose: _compose,
    map: _map,
    bimap: _bimap,
    mapLeft: _mapLeft,
    extract: extract,
    extend: _extend,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence
};
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Comonad = __webpack_exports__.Comonad;
exports.Foldable = __webpack_exports__.Foldable;
exports.Functor = __webpack_exports__.Functor;
exports.Semigroupoid = __webpack_exports__.Semigroupoid;
exports.Traversable = __webpack_exports__.Traversable;
exports.URI = __webpack_exports__.URI;
exports.bimap = __webpack_exports__.bimap;
exports.compose = __webpack_exports__.compose;
exports.duplicate = __webpack_exports__.duplicate;
exports.extend = __webpack_exports__.extend;
exports.extract = __webpack_exports__.extract;
exports.flap = __webpack_exports__.flap;
exports.foldMap = __webpack_exports__.foldMap;
exports.fst = __webpack_exports__.fst;
exports.getApplicative = __webpack_exports__.getApplicative;
exports.getApply = __webpack_exports__.getApply;
exports.getChain = __webpack_exports__.getChain;
exports.getChainRec = __webpack_exports__.getChainRec;
exports.getMonad = __webpack_exports__.getMonad;
exports.map = __webpack_exports__.map;
exports.mapFst = __webpack_exports__.mapFst;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.mapSnd = __webpack_exports__.mapSnd;
exports.readonlyTuple = __webpack_exports__.readonlyTuple;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.sequence = __webpack_exports__.sequence;
exports.snd = __webpack_exports__.snd;
exports.swap = __webpack_exports__.swap;
exports.traverse = __webpack_exports__.traverse;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Bifunctor",
    "Comonad",
    "Foldable",
    "Functor",
    "Semigroupoid",
    "Traversable",
    "URI",
    "bimap",
    "compose",
    "duplicate",
    "extend",
    "extract",
    "flap",
    "foldMap",
    "fst",
    "getApplicative",
    "getApply",
    "getChain",
    "getChainRec",
    "getMonad",
    "map",
    "mapFst",
    "mapLeft",
    "mapSnd",
    "readonlyTuple",
    "reduce",
    "reduceRight",
    "sequence",
    "snd",
    "swap",
    "traverse"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
