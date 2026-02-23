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
    zipWith: function() {
        return zipWith;
    },
    Foldable: function() {
        return Foldable;
    },
    unsafeInsertAt: function() {
        return unsafeInsertAt;
    },
    reduceRightWithIndex: function() {
        return reduceRightWithIndex;
    },
    sort: function() {
        return sort;
    },
    unappend: function() {
        return unappend;
    },
    groupSort: function() {
        return groupSort;
    },
    unsafeUpdateAt: function() {
        return unsafeUpdateAt;
    },
    Alt: function() {
        return Alt;
    },
    reduceWithIndex: function() {
        return reduceWithIndex;
    },
    updateAt: function() {
        return updateAt;
    },
    prependW: function() {
        return prependW;
    },
    FunctorWithIndex: function() {
        return FunctorWithIndex;
    },
    append: function() {
        return append;
    },
    rotate: function() {
        return rotate;
    },
    splitAt: function() {
        return splitAt;
    },
    snoc: function() {
        return snoc;
    },
    zip: function() {
        return zip;
    },
    reverse: function() {
        return reverse;
    },
    URI: function() {
        return URI;
    },
    modifyHead: function() {
        return modifyHead;
    },
    updateLast: function() {
        return updateLast;
    },
    min: function() {
        return min;
    },
    traverseWithIndex: function() {
        return traverseWithIndex;
    },
    alt: function() {
        return alt;
    },
    sortBy: function() {
        return sortBy;
    },
    Do: function() {
        return Do;
    },
    altW: function() {
        return altW;
    },
    prepend: function() {
        return prepend;
    },
    Traversable: function() {
        return Traversable;
    },
    prependToAll: function() {
        return prependToAll;
    },
    apS: function() {
        return apS;
    },
    cons: function() {
        return cons;
    },
    copy: function() {
        return copy;
    },
    Apply: function() {
        return Apply;
    },
    chop: function() {
        return chop;
    },
    extend: function() {
        return extend;
    },
    fromReadonlyNonEmptyArray: function() {
        return fromReadonlyNonEmptyArray;
    },
    isNonEmpty: function() {
        return isNonEmpty;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    Comonad: function() {
        return Comonad;
    },
    chunksOf: function() {
        return chunksOf;
    },
    Functor: function() {
        return Functor;
    },
    filter: function() {
        return filter;
    },
    range: function() {
        return range;
    },
    chainWithIndex: function() {
        return chainWithIndex;
    },
    sequence: function() {
        return sequence;
    },
    concatAll: function() {
        return concatAll;
    },
    getShow: function() {
        return getShow;
    },
    getUnionSemigroup: function() {
        return getUnionSemigroup;
    },
    TraversableWithIndex: function() {
        return TraversableWithIndex;
    },
    intersperse: function() {
        return intersperse;
    },
    max: function() {
        return max;
    },
    Applicative: function() {
        return Applicative;
    },
    Chain: function() {
        return Chain;
    },
    concat: function() {
        return concat;
    },
    fromArray: function() {
        return fromArray;
    },
    chainFirst: function() {
        return chainFirst;
    },
    fold: function() {
        return fold;
    },
    groupBy: function() {
        return groupBy;
    },
    insertAt: function() {
        return insertAt;
    },
    flatMap: function() {
        return flatMap;
    },
    mapWithIndex: function() {
        return mapWithIndex;
    },
    traverse: function() {
        return traverse;
    },
    uncons: function() {
        return uncons;
    },
    appendW: function() {
        return appendW;
    },
    group: function() {
        return group;
    },
    prependAll: function() {
        return prependAll;
    },
    last: function() {
        return last;
    },
    let: function() {
        return let_;
    },
    reduceRight: function() {
        return reduceRight;
    },
    replicate: function() {
        return replicate;
    },
    union: function() {
        return union;
    },
    flatten: function() {
        return flatten;
    },
    isOutOfBound: function() {
        return isOutOfBound;
    },
    getEq: function() {
        return getEq;
    },
    init: function() {
        return NonEmptyArray_init;
    },
    chain: function() {
        return chain;
    },
    matchLeft: function() {
        return matchLeft;
    },
    foldMapWithIndex: function() {
        return foldMapWithIndex;
    },
    filterWithIndex: function() {
        return filterWithIndex;
    },
    intercalate: function() {
        return intercalate;
    },
    modifyLast: function() {
        return modifyLast;
    },
    bind: function() {
        return bind;
    },
    extract: function() {
        return extract;
    },
    unprepend: function() {
        return unprepend;
    },
    unsnoc: function() {
        return unsnoc;
    },
    head: function() {
        return NonEmptyArray_head;
    },
    bindTo: function() {
        return bindTo;
    },
    modifyAt: function() {
        return modifyAt;
    },
    reduce: function() {
        return reduce;
    },
    uniq: function() {
        return uniq;
    },
    updateHead: function() {
        return updateHead;
    },
    map: function() {
        return map;
    },
    Pointed: function() {
        return Pointed;
    },
    nonEmptyArray: function() {
        return nonEmptyArray;
    },
    tail: function() {
        return NonEmptyArray_tail;
    },
    unzip: function() {
        return unzip;
    },
    apSecond: function() {
        return apSecond;
    },
    Monad: function() {
        return Monad;
    },
    FoldableWithIndex: function() {
        return FoldableWithIndex;
    },
    duplicate: function() {
        return duplicate;
    },
    flap: function() {
        return flap;
    },
    foldMap: function() {
        return foldMap;
    },
    apFirst: function() {
        return apFirst;
    },
    ap: function() {
        return ap;
    },
    concatW: function() {
        return concatW;
    },
    makeBy: function() {
        return makeBy;
    },
    matchRight: function() {
        return matchRight;
    },
    of: function() {
        return of;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Ord_js_namespaceObject = require("./Ord.js");
var external_ReadonlyNonEmptyArray_js_namespaceObject = require("./ReadonlyNonEmptyArray.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if ("u" > typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var isNonEmpty = function(as) {
    return as.length > 0;
};
var isOutOfBound = function(i, as) {
    return i < 0 || i >= as.length;
};
var prependW = function(head) {
    return function(tail) {
        return [
            head
        ].concat(_to_consumable_array(tail));
    };
};
var prepend = prependW;
var appendW = function(end) {
    return function(init) {
        return _to_consumable_array(init).concat([
            end
        ]);
    };
};
var append = appendW;
var unsafeInsertAt = function(i, a, as) {
    if (isNonEmpty(as)) {
        var xs = fromReadonlyNonEmptyArray(as);
        xs.splice(i, 0, a);
        return xs;
    }
    return [
        a
    ];
};
var unsafeUpdateAt = function(i, a, as) {
    var xs = fromReadonlyNonEmptyArray(as);
    xs[i] = a;
    return xs;
};
var uniq = function(E) {
    return function(as) {
        if (1 === as.length) return copy(as);
        var out = [
            NonEmptyArray_head(as)
        ];
        var rest = NonEmptyArray_tail(as);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
        try {
            var _loop = function() {
                var a = _step.value;
                if (out.every(function(o) {
                    return !E.equals(o, a);
                })) out.push(a);
            };
            for(var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && null != _iterator.return) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        return out;
    };
};
var sortBy = function(ords) {
    if (isNonEmpty(ords)) {
        var M = (0, external_Ord_js_namespaceObject.getMonoid)();
        return sort(ords.reduce(M.concat, M.empty));
    }
    return copy;
};
var union = function(E) {
    var uniqE = uniq(E);
    return function(second) {
        return function(first) {
            return uniqE((0, external_function_js_namespaceObject.pipe)(first, concat(second)));
        };
    };
};
var rotate = function(n) {
    return function(as) {
        var len = as.length;
        var m = Math.round(n) % len;
        if (isOutOfBound(Math.abs(m), as) || 0 === m) return copy(as);
        if (!(m < 0)) return rotate(m - len)(as);
        var _splitAt = _sliced_to_array(splitAt(-m)(as), 2), f = _splitAt[0], s = _splitAt[1];
        return (0, external_function_js_namespaceObject.pipe)(s, concat(f));
    };
};
var fromReadonlyNonEmptyArray = external_internal_js_namespaceObject.fromReadonlyNonEmptyArray;
var fromArray = function(as) {
    return isNonEmpty(as) ? external_internal_js_namespaceObject.some(as) : external_internal_js_namespaceObject.none;
};
var makeBy = function(f) {
    return function(n) {
        var j = Math.max(0, Math.floor(n));
        var out = [
            f(0)
        ];
        for(var i = 1; i < j; i++)out.push(f(i));
        return out;
    };
};
var replicate = function(a) {
    return makeBy(function() {
        return a;
    });
};
var range = function(start, end) {
    return start <= end ? makeBy(function(i) {
        return start + i;
    })(end - start + 1) : [
        start
    ];
};
var unprepend = function(as) {
    return [
        NonEmptyArray_head(as),
        NonEmptyArray_tail(as)
    ];
};
var unappend = function(as) {
    return [
        NonEmptyArray_init(as),
        last(as)
    ];
};
function concatW(second) {
    return function(first) {
        return first.concat(second);
    };
}
function concat(x, y) {
    return y ? x.concat(y) : function(y) {
        return y.concat(x);
    };
}
var reverse = function(as) {
    return [
        last(as)
    ].concat(_to_consumable_array(as.slice(0, -1).reverse()));
};
function group(E) {
    return function(as) {
        var len = as.length;
        if (0 === len) return [];
        var out = [];
        var head = as[0];
        var nea = [
            head
        ];
        for(var i = 1; i < len; i++){
            var a = as[i];
            if (E.equals(a, head)) nea.push(a);
            else {
                out.push(nea);
                head = a;
                nea = [
                    head
                ];
            }
        }
        out.push(nea);
        return out;
    };
}
var groupBy = function(f) {
    return function(as) {
        var out = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
        try {
            for(var _iterator = as[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var a = _step.value;
                var k = f(a);
                if (external_internal_js_namespaceObject.has.call(out, k)) out[k].push(a);
                else out[k] = [
                    a
                ];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && null != _iterator.return) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        return out;
    };
};
var sort = function(O) {
    return function(as) {
        return as.slice().sort(O.compare);
    };
};
var insertAt = function(i, a) {
    return function(as) {
        return i < 0 || i > as.length ? external_internal_js_namespaceObject.none : external_internal_js_namespaceObject.some(unsafeInsertAt(i, a, as));
    };
};
var updateAt = function(i, a) {
    return modifyAt(i, function() {
        return a;
    });
};
var modifyAt = function(i, f) {
    return function(as) {
        return isOutOfBound(i, as) ? external_internal_js_namespaceObject.none : external_internal_js_namespaceObject.some(unsafeUpdateAt(i, f(as[i]), as));
    };
};
var copy = fromReadonlyNonEmptyArray;
var of = function(a) {
    return [
        a
    ];
};
var zipWith = function(as, bs, f) {
    var cs = [
        f(as[0], bs[0])
    ];
    var len = Math.min(as.length, bs.length);
    for(var i = 1; i < len; i++)cs[i] = f(as[i], bs[i]);
    return cs;
};
function zip(as, bs) {
    if (void 0 === bs) return function(bs) {
        return zip(bs, as);
    };
    return zipWith(as, bs, function(a, b) {
        return [
            a,
            b
        ];
    });
}
var unzip = function(abs) {
    var fa = [
        abs[0][0]
    ];
    var fb = [
        abs[0][1]
    ];
    for(var i = 1; i < abs.length; i++){
        fa[i] = abs[i][0];
        fb[i] = abs[i][1];
    }
    return [
        fa,
        fb
    ];
};
var prependAll = function(middle) {
    return function(as) {
        var out = [
            middle,
            as[0]
        ];
        for(var i = 1; i < as.length; i++)out.push(middle, as[i]);
        return out;
    };
};
var intersperse = function(middle) {
    return function(as) {
        var rest = NonEmptyArray_tail(as);
        return isNonEmpty(rest) ? (0, external_function_js_namespaceObject.pipe)(rest, prependAll(middle), prepend(NonEmptyArray_head(as))) : copy(as);
    };
};
var foldMapWithIndex = external_ReadonlyNonEmptyArray_js_namespaceObject.foldMapWithIndex;
var foldMap = external_ReadonlyNonEmptyArray_js_namespaceObject.foldMap;
var chainWithIndex = function(f) {
    return function(as) {
        var out = fromReadonlyNonEmptyArray(f(0, NonEmptyArray_head(as)));
        for(var i = 1; i < as.length; i++){
            var bs = f(i, as[i]);
            for(var j = 0; j < bs.length; j++)out.push(bs[j]);
        }
        return out;
    };
};
var chop = function(f) {
    return function(as) {
        var _f = _sliced_to_array(f(as), 2), b = _f[0], rest = _f[1];
        var out = [
            b
        ];
        var next = rest;
        while(isNonEmpty(next)){
            var _f1 = _sliced_to_array(f(next), 2), b1 = _f1[0], rest1 = _f1[1];
            out.push(b1);
            next = rest1;
        }
        return out;
    };
};
var splitAt = function(n) {
    return function(as) {
        var m = Math.max(1, n);
        return m >= as.length ? [
            copy(as),
            []
        ] : [
            (0, external_function_js_namespaceObject.pipe)(as.slice(1, m), prepend(NonEmptyArray_head(as))),
            as.slice(m)
        ];
    };
};
var chunksOf = function(n) {
    return chop(splitAt(n));
};
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _mapWithIndex = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, mapWithIndex(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
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
var _alt = function(fa, that) {
    return (0, external_function_js_namespaceObject.pipe)(fa, alt(that));
};
var _reduceWithIndex = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduceWithIndex(b, f));
};
var _foldMapWithIndex = function(M) {
    var foldMapWithIndexM = foldMapWithIndex(M);
    return function(fa, f) {
        return (0, external_function_js_namespaceObject.pipe)(fa, foldMapWithIndexM(f));
    };
};
var _reduceRightWithIndex = function(fa, b, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, reduceRightWithIndex(b, f));
};
var _traverseWithIndex = function(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function(ta, f) {
        return (0, external_function_js_namespaceObject.pipe)(ta, traverseWithIndexF(f));
    };
};
var altW = function(that) {
    return function(as) {
        return (0, external_function_js_namespaceObject.pipe)(as, concatW(that()));
    };
};
var alt = altW;
var ap = function(as) {
    return flatMap(function(f) {
        return (0, external_function_js_namespaceObject.pipe)(as, map(f));
    });
};
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(ma, f) {
    return (0, external_function_js_namespaceObject.pipe)(ma, chainWithIndex(function(i, a) {
        return f(a, i);
    }));
});
var extend = function(f) {
    return function(as) {
        var next = NonEmptyArray_tail(as);
        var out = [
            f(as)
        ];
        while(isNonEmpty(next)){
            out.push(f(next));
            next = NonEmptyArray_tail(next);
        }
        return out;
    };
};
var duplicate = /*#__PURE__*/ extend(external_function_js_namespaceObject.identity);
var flatten = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var map = function(f) {
    return mapWithIndex(function(_, a) {
        return f(a);
    });
};
var mapWithIndex = function(f) {
    return function(as) {
        var out = [
            f(0, NonEmptyArray_head(as))
        ];
        for(var i = 1; i < as.length; i++)out.push(f(i, as[i]));
        return out;
    };
};
var reduce = external_ReadonlyNonEmptyArray_js_namespaceObject.reduce;
var reduceWithIndex = external_ReadonlyNonEmptyArray_js_namespaceObject.reduceWithIndex;
var reduceRight = external_ReadonlyNonEmptyArray_js_namespaceObject.reduceRight;
var reduceRightWithIndex = external_ReadonlyNonEmptyArray_js_namespaceObject.reduceRightWithIndex;
var traverse = function(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function(f) {
        return traverseWithIndexF(function(_, a) {
            return f(a);
        });
    };
};
var sequence = function(F) {
    return traverseWithIndex(F)(function(_, a) {
        return a;
    });
};
var traverseWithIndex = function(F) {
    return function(f) {
        return function(as) {
            var out = F.map(f(0, NonEmptyArray_head(as)), of);
            for(var i = 1; i < as.length; i++)out = F.ap(F.map(out, function(bs) {
                return function(b) {
                    return (0, external_function_js_namespaceObject.pipe)(bs, append(b));
                };
            }), f(i, as[i]));
            return out;
        };
    };
};
var extract = external_ReadonlyNonEmptyArray_js_namespaceObject.head;
var URI = 'NonEmptyArray';
var getShow = external_ReadonlyNonEmptyArray_js_namespaceObject.getShow;
var getSemigroup = function() {
    return {
        concat: concat
    };
};
var getEq = external_ReadonlyNonEmptyArray_js_namespaceObject.getEq;
var getUnionSemigroup = function(E) {
    var unionE = union(E);
    return {
        concat: function(first, second) {
            return unionE(second)(first);
        }
    };
};
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var FunctorWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex
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
var chainFirst = /*#__PURE__*/ (0, external_Chain_js_namespaceObject.chainFirst)(Chain);
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap
};
var Foldable = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
};
var FoldableWithIndex = {
    URI: URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex
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
var TraversableWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex
};
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
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
var NonEmptyArray_head = external_ReadonlyNonEmptyArray_js_namespaceObject.head;
var NonEmptyArray_tail = function(as) {
    return as.slice(1);
};
var last = external_ReadonlyNonEmptyArray_js_namespaceObject.last;
var NonEmptyArray_init = function(as) {
    return as.slice(0, -1);
};
var min = external_ReadonlyNonEmptyArray_js_namespaceObject.min;
var max = external_ReadonlyNonEmptyArray_js_namespaceObject.max;
var concatAll = function(S) {
    return function(as) {
        return as.reduce(S.concat);
    };
};
var matchLeft = function(f) {
    return function(as) {
        return f(NonEmptyArray_head(as), NonEmptyArray_tail(as));
    };
};
var matchRight = function(f) {
    return function(as) {
        return f(NonEmptyArray_init(as), last(as));
    };
};
var modifyHead = function(f) {
    return function(as) {
        return [
            f(NonEmptyArray_head(as))
        ].concat(_to_consumable_array(NonEmptyArray_tail(as)));
    };
};
var updateHead = function(a) {
    return modifyHead(function() {
        return a;
    });
};
var modifyLast = function(f) {
    return function(as) {
        return (0, external_function_js_namespaceObject.pipe)(NonEmptyArray_init(as), append(f(last(as))));
    };
};
var updateLast = function(a) {
    return modifyLast(function() {
        return a;
    });
};
var intercalate = external_ReadonlyNonEmptyArray_js_namespaceObject.intercalate;
var chain = flatMap;
function groupSort(O) {
    var sortO = sort(O);
    var groupO = group(O);
    return function(as) {
        return isNonEmpty(as) ? groupO(sortO(as)) : [];
    };
}
function filter(predicate) {
    return filterWithIndex(function(_, a) {
        return predicate(a);
    });
}
var filterWithIndex = function(predicate) {
    return function(as) {
        return fromArray(as.filter(function(a, i) {
            return predicate(i, a);
        }));
    };
};
var uncons = unprepend;
var unsnoc = unappend;
function cons(head, tail) {
    return void 0 === tail ? prepend(head) : (0, external_function_js_namespaceObject.pipe)(tail, prepend(head));
}
var snoc = function(init, end) {
    return (0, external_function_js_namespaceObject.pipe)(init, append(end));
};
var prependToAll = prependAll;
var fold = external_ReadonlyNonEmptyArray_js_namespaceObject.concatAll;
var nonEmptyArray = {
    URI: URI,
    of: of,
    map: _map,
    mapWithIndex: _mapWithIndex,
    ap: _ap,
    chain: flatMap,
    extend: _extend,
    extract: extract,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: sequence,
    reduceWithIndex: _reduceWithIndex,
    foldMapWithIndex: _foldMapWithIndex,
    reduceRightWithIndex: _reduceRightWithIndex,
    traverseWithIndex: _traverseWithIndex,
    alt: _alt
};
exports.Alt = __webpack_exports__.Alt;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Chain = __webpack_exports__.Chain;
exports.Comonad = __webpack_exports__.Comonad;
exports.Do = __webpack_exports__.Do;
exports.Foldable = __webpack_exports__.Foldable;
exports.FoldableWithIndex = __webpack_exports__.FoldableWithIndex;
exports.Functor = __webpack_exports__.Functor;
exports.FunctorWithIndex = __webpack_exports__.FunctorWithIndex;
exports.Monad = __webpack_exports__.Monad;
exports.Pointed = __webpack_exports__.Pointed;
exports.Traversable = __webpack_exports__.Traversable;
exports.TraversableWithIndex = __webpack_exports__.TraversableWithIndex;
exports.URI = __webpack_exports__.URI;
exports.alt = __webpack_exports__.alt;
exports.altW = __webpack_exports__.altW;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.append = __webpack_exports__.append;
exports.appendW = __webpack_exports__.appendW;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.chain = __webpack_exports__.chain;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainWithIndex = __webpack_exports__.chainWithIndex;
exports.chop = __webpack_exports__.chop;
exports.chunksOf = __webpack_exports__.chunksOf;
exports.concat = __webpack_exports__.concat;
exports.concatAll = __webpack_exports__.concatAll;
exports.concatW = __webpack_exports__.concatW;
exports.cons = __webpack_exports__.cons;
exports.copy = __webpack_exports__.copy;
exports.duplicate = __webpack_exports__.duplicate;
exports.extend = __webpack_exports__.extend;
exports.extract = __webpack_exports__.extract;
exports.filter = __webpack_exports__.filter;
exports.filterWithIndex = __webpack_exports__.filterWithIndex;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatten = __webpack_exports__.flatten;
exports.fold = __webpack_exports__.fold;
exports.foldMap = __webpack_exports__.foldMap;
exports.foldMapWithIndex = __webpack_exports__.foldMapWithIndex;
exports.fromArray = __webpack_exports__.fromArray;
exports.fromReadonlyNonEmptyArray = __webpack_exports__.fromReadonlyNonEmptyArray;
exports.getEq = __webpack_exports__.getEq;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getShow = __webpack_exports__.getShow;
exports.getUnionSemigroup = __webpack_exports__.getUnionSemigroup;
exports.group = __webpack_exports__.group;
exports.groupBy = __webpack_exports__.groupBy;
exports.groupSort = __webpack_exports__.groupSort;
exports.head = __webpack_exports__.head;
exports.init = __webpack_exports__.init;
exports.insertAt = __webpack_exports__.insertAt;
exports.intercalate = __webpack_exports__.intercalate;
exports.intersperse = __webpack_exports__.intersperse;
exports.isNonEmpty = __webpack_exports__.isNonEmpty;
exports.isOutOfBound = __webpack_exports__.isOutOfBound;
exports.last = __webpack_exports__.last;
exports["let"] = __webpack_exports__["let"];
exports.makeBy = __webpack_exports__.makeBy;
exports.map = __webpack_exports__.map;
exports.mapWithIndex = __webpack_exports__.mapWithIndex;
exports.matchLeft = __webpack_exports__.matchLeft;
exports.matchRight = __webpack_exports__.matchRight;
exports.max = __webpack_exports__.max;
exports.min = __webpack_exports__.min;
exports.modifyAt = __webpack_exports__.modifyAt;
exports.modifyHead = __webpack_exports__.modifyHead;
exports.modifyLast = __webpack_exports__.modifyLast;
exports.nonEmptyArray = __webpack_exports__.nonEmptyArray;
exports.of = __webpack_exports__.of;
exports.prepend = __webpack_exports__.prepend;
exports.prependAll = __webpack_exports__.prependAll;
exports.prependToAll = __webpack_exports__.prependToAll;
exports.prependW = __webpack_exports__.prependW;
exports.range = __webpack_exports__.range;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.reduceRightWithIndex = __webpack_exports__.reduceRightWithIndex;
exports.reduceWithIndex = __webpack_exports__.reduceWithIndex;
exports.replicate = __webpack_exports__.replicate;
exports.reverse = __webpack_exports__.reverse;
exports.rotate = __webpack_exports__.rotate;
exports.sequence = __webpack_exports__.sequence;
exports.snoc = __webpack_exports__.snoc;
exports.sort = __webpack_exports__.sort;
exports.sortBy = __webpack_exports__.sortBy;
exports.splitAt = __webpack_exports__.splitAt;
exports.tail = __webpack_exports__.tail;
exports.traverse = __webpack_exports__.traverse;
exports.traverseWithIndex = __webpack_exports__.traverseWithIndex;
exports.unappend = __webpack_exports__.unappend;
exports.uncons = __webpack_exports__.uncons;
exports.union = __webpack_exports__.union;
exports.uniq = __webpack_exports__.uniq;
exports.unprepend = __webpack_exports__.unprepend;
exports.unsafeInsertAt = __webpack_exports__.unsafeInsertAt;
exports.unsafeUpdateAt = __webpack_exports__.unsafeUpdateAt;
exports.unsnoc = __webpack_exports__.unsnoc;
exports.unzip = __webpack_exports__.unzip;
exports.updateAt = __webpack_exports__.updateAt;
exports.updateHead = __webpack_exports__.updateHead;
exports.updateLast = __webpack_exports__.updateLast;
exports.zip = __webpack_exports__.zip;
exports.zipWith = __webpack_exports__.zipWith;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "Applicative",
    "Apply",
    "Chain",
    "Comonad",
    "Do",
    "Foldable",
    "FoldableWithIndex",
    "Functor",
    "FunctorWithIndex",
    "Monad",
    "Pointed",
    "Traversable",
    "TraversableWithIndex",
    "URI",
    "alt",
    "altW",
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "append",
    "appendW",
    "bind",
    "bindTo",
    "chain",
    "chainFirst",
    "chainWithIndex",
    "chop",
    "chunksOf",
    "concat",
    "concatAll",
    "concatW",
    "cons",
    "copy",
    "duplicate",
    "extend",
    "extract",
    "filter",
    "filterWithIndex",
    "flap",
    "flatMap",
    "flatten",
    "fold",
    "foldMap",
    "foldMapWithIndex",
    "fromArray",
    "fromReadonlyNonEmptyArray",
    "getEq",
    "getSemigroup",
    "getShow",
    "getUnionSemigroup",
    "group",
    "groupBy",
    "groupSort",
    "head",
    "init",
    "insertAt",
    "intercalate",
    "intersperse",
    "isNonEmpty",
    "isOutOfBound",
    "last",
    "let",
    "makeBy",
    "map",
    "mapWithIndex",
    "matchLeft",
    "matchRight",
    "max",
    "min",
    "modifyAt",
    "modifyHead",
    "modifyLast",
    "nonEmptyArray",
    "of",
    "prepend",
    "prependAll",
    "prependToAll",
    "prependW",
    "range",
    "reduce",
    "reduceRight",
    "reduceRightWithIndex",
    "reduceWithIndex",
    "replicate",
    "reverse",
    "rotate",
    "sequence",
    "snoc",
    "sort",
    "sortBy",
    "splitAt",
    "tail",
    "traverse",
    "traverseWithIndex",
    "unappend",
    "uncons",
    "union",
    "uniq",
    "unprepend",
    "unsafeInsertAt",
    "unsafeUpdateAt",
    "unsnoc",
    "unzip",
    "updateAt",
    "updateHead",
    "updateLast",
    "zip",
    "zipWith"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
