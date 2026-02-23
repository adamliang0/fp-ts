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
    Applicative: function() {
        return Applicative;
    },
    Chain: function() {
        return Chain;
    },
    Foldable: function() {
        return Foldable;
    },
    chainFirst: function() {
        return chainFirst;
    },
    elem: function() {
        return elem;
    },
    fold: function() {
        return fold;
    },
    drawForest: function() {
        return drawForest;
    },
    flatMap: function() {
        return flatMap;
    },
    tree: function() {
        return Tree_tree;
    },
    let: function() {
        return let_;
    },
    exists: function() {
        return exists;
    },
    reduceRight: function() {
        return reduceRight;
    },
    flatten: function() {
        return flatten;
    },
    unfoldForestM: function() {
        return unfoldForestM;
    },
    getEq: function() {
        return getEq;
    },
    URI: function() {
        return URI;
    },
    chain: function() {
        return chain;
    },
    make: function() {
        return make;
    },
    bind: function() {
        return bind;
    },
    extract: function() {
        return extract;
    },
    reduce: function() {
        return reduce;
    },
    bindTo: function() {
        return bindTo;
    },
    drawTree: function() {
        return drawTree;
    },
    Do: function() {
        return Do;
    },
    unfoldForest: function() {
        return unfoldForest;
    },
    Traversable: function() {
        return Traversable;
    },
    map: function() {
        return map;
    },
    apS: function() {
        return apS;
    },
    Pointed: function() {
        return Pointed;
    },
    extend: function() {
        return extend;
    },
    Apply: function() {
        return Apply;
    },
    traverse: function() {
        return traverse;
    },
    sequence: function() {
        return sequence;
    },
    Comonad: function() {
        return Comonad;
    },
    apSecond: function() {
        return apSecond;
    },
    Functor: function() {
        return Functor;
    },
    Monad: function() {
        return Monad;
    },
    duplicate: function() {
        return duplicate;
    },
    flap: function() {
        return flap;
    },
    apFirst: function() {
        return apFirst;
    },
    foldMap: function() {
        return foldMap;
    },
    ap: function() {
        return ap;
    },
    getShow: function() {
        return getShow;
    },
    of: function() {
        return of;
    },
    unfoldTree: function() {
        return unfoldTree;
    },
    unfoldTreeM: function() {
        return unfoldTreeM;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Array_js_namespaceObject = require("./Array.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_Eq_js_namespaceObject = require("./Eq.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
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
function make(value) {
    var forest = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return {
        value: value,
        forest: forest
    };
}
function getShow(S) {
    var show = function(t) {
        return external_Array_js_namespaceObject.isEmpty(t.forest) ? "make(".concat(S.show(t.value), ")") : "make(".concat(S.show(t.value), ", [").concat(t.forest.map(show).join(', '), "])");
    };
    return {
        show: show
    };
}
function getEq(E) {
    var SA;
    var R = (0, external_Eq_js_namespaceObject.fromEquals)(function(x, y) {
        return E.equals(x.value, y.value) && SA.equals(x.forest, y.forest);
    });
    SA = external_Array_js_namespaceObject.getEq(R);
    return R;
}
var draw = function(indentation, forest) {
    var r = '';
    var len = forest.length;
    var tree;
    for(var i = 0; i < len; i++){
        tree = forest[i];
        var isLast = i === len - 1;
        r += indentation + (isLast ? '└' : '├') + '─ ' + tree.value;
        r += draw(indentation + (len > 1 && !isLast ? '│  ' : '   '), tree.forest);
    }
    return r;
};
function drawForest(forest) {
    return draw('\n', forest);
}
function drawTree(tree) {
    return tree.value + drawForest(tree.forest);
}
function unfoldTree(b, f) {
    var _f = _sliced_to_array(f(b), 2), a = _f[0], bs = _f[1];
    return {
        value: a,
        forest: unfoldForest(bs, f)
    };
}
function unfoldForest(bs, f) {
    return bs.map(function(b) {
        return unfoldTree(b, f);
    });
}
function unfoldTreeM(M) {
    var unfoldForestMM = unfoldForestM(M);
    return function(b, f) {
        return M.chain(f(b), function(param) {
            var _param = _sliced_to_array(param, 2), a = _param[0], bs = _param[1];
            return M.map(unfoldForestMM(bs, f), function(ts) {
                return {
                    value: a,
                    forest: ts
                };
            });
        });
    };
}
function unfoldForestM(M) {
    var traverseM = external_Array_js_namespaceObject.traverse(M);
    return function(bs, f) {
        return (0, external_function_js_namespaceObject.pipe)(bs, traverseM(function(b) {
            return unfoldTreeM(M)(b, f);
        }));
    };
}
function fold(f) {
    var go = function(tree) {
        return f(tree.value, tree.forest.map(go));
    };
    return go;
}
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return flatMap(fab, function(f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
    });
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
var _extend = function(wa, f) {
    return (0, external_function_js_namespaceObject.pipe)(wa, extend(f));
};
var _traverse = function(F) {
    var traverseF = traverse(F);
    return function(ta, f) {
        return (0, external_function_js_namespaceObject.pipe)(ta, traverseF(f));
    };
};
var ap = function(fa) {
    return function(fab) {
        return _ap(fab, fa);
    };
};
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    var _f = f(ma.value), value = _f.value, forest = _f.forest;
    var concat = external_Array_js_namespaceObject.getMonoid().concat;
    return {
        value: value,
        forest: concat(forest, ma.forest.map(flatMap(f)))
    };
});
var extend = function(f) {
    return function(wa) {
        return {
            value: f(wa),
            forest: wa.forest.map(extend(f))
        };
    };
};
var duplicate = /*#__PURE__*/ extend(external_function_js_namespaceObject.identity);
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var map = function(f) {
    return function(fa) {
        return {
            value: f(fa.value),
            forest: fa.forest.map(map(f))
        };
    };
};
var reduce = function(b, f) {
    return function(fa) {
        var r = f(b, fa.value);
        var len = fa.forest.length;
        for(var i = 0; i < len; i++)r = (0, external_function_js_namespaceObject.pipe)(fa.forest[i], reduce(r, f));
        return r;
    };
};
var foldMap = function(M) {
    return function(f) {
        return reduce(M.empty, function(acc, a) {
            return M.concat(acc, f(a));
        });
    };
};
var reduceRight = function(b, f) {
    return function(fa) {
        var r = b;
        var len = fa.forest.length;
        for(var i = len - 1; i >= 0; i--)r = (0, external_function_js_namespaceObject.pipe)(fa.forest[i], reduceRight(r, f));
        return f(fa.value, r);
    };
};
var extract = function(wa) {
    return wa.value;
};
var traverse = function(F) {
    var traverseF = external_Array_js_namespaceObject.traverse(F);
    var out = function(f) {
        return function(ta) {
            return F.ap(F.map(f(ta.value), function(value) {
                return function(forest) {
                    return {
                        value: value,
                        forest: forest
                    };
                };
            }), (0, external_function_js_namespaceObject.pipe)(ta.forest, traverseF(out(f))));
        };
    };
    return out;
};
var sequence = function(F) {
    return traverse(F)(external_function_js_namespaceObject.identity);
};
var of = function(a) {
    return make(a);
};
var URI = 'Tree';
var Functor = {
    URI: URI,
    map: _map
};
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
    ap: _ap,
    of: of,
    chain: flatMap
};
var chainFirst = /*#__PURE__*/ (0, external_Chain_js_namespaceObject.chainFirst)(Chain);
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
var Comonad = {
    URI: URI,
    map: _map,
    extend: _extend,
    extract: extract
};
var Do = /*#__PURE__*/ of(external_internal_js_namespaceObject.emptyRecord);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ (0, external_Chain_js_namespaceObject.bind)(Chain);
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
function elem(E) {
    var go = function(a, fa) {
        return E.equals(a, fa.value) || fa.forest.some(function(tree) {
            return go(a, tree);
        });
    };
    return go;
}
var exists = function(predicate) {
    return function(ma) {
        return predicate(ma.value) || ma.forest.some(exists(predicate));
    };
};
var chain = flatMap;
var Tree_tree = {
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
    extract: extract,
    extend: _extend
};
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.Comonad = __webpack_exports__.Comonad;
exports.Do = __webpack_exports__.Do;
exports.Foldable = __webpack_exports__.Foldable;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.Pointed = __webpack_exports__.Pointed;
exports.Traversable = __webpack_exports__.Traversable;
exports.URI = __webpack_exports__.URI;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.drawForest = __webpack_exports__.drawForest;
exports.drawTree = __webpack_exports__.drawTree;
exports.duplicate = __webpack_exports__.duplicate;
exports.elem = __webpack_exports__.elem;
exports.exists = __webpack_exports__.exists;
exports.extend = __webpack_exports__.extend;
exports.extract = __webpack_exports__.extract;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatten = __webpack_exports__.flatten;
exports.fold = __webpack_exports__.fold;
exports.foldMap = __webpack_exports__.foldMap;
exports.getEq = __webpack_exports__.getEq;
exports.getShow = __webpack_exports__.getShow;
exports["let"] = __webpack_exports__["let"];
exports.make = __webpack_exports__.make;
exports.map = __webpack_exports__.map;
exports.of = __webpack_exports__.of;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.sequence = __webpack_exports__.sequence;
exports.traverse = __webpack_exports__.traverse;
exports.tree = __webpack_exports__.tree;
exports.unfoldForest = __webpack_exports__.unfoldForest;
exports.unfoldForestM = __webpack_exports__.unfoldForestM;
exports.unfoldTree = __webpack_exports__.unfoldTree;
exports.unfoldTreeM = __webpack_exports__.unfoldTreeM;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Applicative",
    "Apply",
    "Chain",
    "Comonad",
    "Do",
    "Foldable",
    "Functor",
    "Monad",
    "Pointed",
    "Traversable",
    "URI",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "bind",
    "bindTo",
    "chain",
    "chainFirst",
    "drawForest",
    "drawTree",
    "duplicate",
    "elem",
    "exists",
    "extend",
    "extract",
    "flap",
    "flatMap",
    "flatten",
    "fold",
    "foldMap",
    "getEq",
    "getShow",
    "let",
    "make",
    "map",
    "of",
    "reduce",
    "reduceRight",
    "sequence",
    "traverse",
    "tree",
    "unfoldForest",
    "unfoldForestM",
    "unfoldTree",
    "unfoldTreeM"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
