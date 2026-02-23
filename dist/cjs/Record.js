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
    getFoldable: function() {
        return getFoldable;
    },
    Foldable: function() {
        return Foldable;
    },
    partitionMapWithIndex: function() {
        return partitionMapWithIndex;
    },
    getTraversableWithIndex: function() {
        return getTraversableWithIndex;
    },
    elem: function() {
        return elem;
    },
    getIntersectionSemigroup: function() {
        return getIntersectionSemigroup;
    },
    lookup: function() {
        return lookup;
    },
    reduceRightWithIndex: function() {
        return reduceRightWithIndex;
    },
    pop: function() {
        return pop;
    },
    some: function() {
        return some;
    },
    updateAt: function() {
        return updateAt;
    },
    reduceWithIndex: function() {
        return reduceWithIndex;
    },
    singleton: function() {
        return singleton;
    },
    FunctorWithIndex: function() {
        return FunctorWithIndex;
    },
    wilt: function() {
        return wilt;
    },
    filterMapWithIndex: function() {
        return filterMapWithIndex;
    },
    collect: function() {
        return collect;
    },
    URI: function() {
        return URI;
    },
    record: function() {
        return record;
    },
    isSubrecord: function() {
        return isSubrecord;
    },
    fromFoldable: function() {
        return fromFoldable;
    },
    keys: function() {
        return keys;
    },
    traverseWithIndex: function() {
        return traverseWithIndex;
    },
    Traversable: function() {
        return Traversable;
    },
    hasOwnProperty: function() {
        return Record_hasOwnProperty;
    },
    traverse: function() {
        return traverse;
    },
    fromFoldableMap: function() {
        return fromFoldableMap;
    },
    getFoldableWithIndex: function() {
        return getFoldableWithIndex;
    },
    partitionWithIndex: function() {
        return partitionWithIndex;
    },
    sequence: function() {
        return sequence;
    },
    toUnfoldable: function() {
        return toUnfoldable;
    },
    Functor: function() {
        return Functor;
    },
    fromEntries: function() {
        return fromEntries;
    },
    every: function() {
        return every;
    },
    filter: function() {
        return filter;
    },
    size: function() {
        return size;
    },
    getShow: function() {
        return getShow;
    },
    getTraversable: function() {
        return getTraversable;
    },
    getUnionSemigroup: function() {
        return getUnionSemigroup;
    },
    has: function() {
        return has;
    },
    TraversableWithIndex: function() {
        return TraversableWithIndex;
    },
    insertAt: function() {
        return insertAt;
    },
    upsertAt: function() {
        return upsertAt;
    },
    mapWithIndex: function() {
        return mapWithIndex;
    },
    getMonoid: function() {
        return getMonoid;
    },
    Filterable: function() {
        return Filterable;
    },
    union: function() {
        return union;
    },
    reduceRight: function() {
        return reduceRight;
    },
    isEmpty: function() {
        return isEmpty;
    },
    getEq: function() {
        return getEq;
    },
    intersection: function() {
        return intersection;
    },
    Compactable: function() {
        return Compactable;
    },
    separate: function() {
        return separate;
    },
    foldMapWithIndex: function() {
        return foldMapWithIndex;
    },
    filterWithIndex: function() {
        return filterWithIndex;
    },
    getWitherable: function() {
        return getWitherable;
    },
    FilterableWithIndex: function() {
        return FilterableWithIndex;
    },
    partitionMap: function() {
        return partitionMap;
    },
    Witherable: function() {
        return Witherable;
    },
    reduce: function() {
        return reduce;
    },
    modifyAt: function() {
        return modifyAt;
    },
    map: function() {
        return map;
    },
    difference: function() {
        return difference;
    },
    wither: function() {
        return wither;
    },
    compact: function() {
        return compact;
    },
    partition: function() {
        return partition;
    },
    toArray: function() {
        return toArray;
    },
    empty: function() {
        return empty;
    },
    FoldableWithIndex: function() {
        return FoldableWithIndex;
    },
    flap: function() {
        return flap;
    },
    foldMap: function() {
        return foldMap;
    },
    deleteAt: function() {
        return deleteAt;
    },
    getUnionMonoid: function() {
        return getUnionMonoid;
    },
    filterMap: function() {
        return filterMap;
    },
    getDifferenceMagma: function() {
        return getDifferenceMagma;
    },
    toEntries: function() {
        return toEntries;
    }
});
var external_Array_js_namespaceObject = require("./Array.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_ReadonlyRecord_js_namespaceObject = require("./ReadonlyRecord.js");
var external_Semigroup_js_namespaceObject = require("./Semigroup.js");
var external_string_js_namespaceObject = require("./string.js");
var external_Witherable_js_namespaceObject = require("./Witherable.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _iterable_to_array(iter) {
    if ("u" > typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if ("function" == typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
var size = external_ReadonlyRecord_js_namespaceObject.size;
var isEmpty = external_ReadonlyRecord_js_namespaceObject.isEmpty;
var keys_ = function(O) {
    return function(r) {
        return Object.keys(r).sort(O.compare);
    };
};
var keys = /*#__PURE__*/ keys_(external_string_js_namespaceObject.Ord);
function collect(O) {
    if ('function' == typeof O) return collect(external_string_js_namespaceObject.Ord)(O);
    var keysO = keys_(O);
    return function(f) {
        return function(r) {
            var out = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
            try {
                for(var _iterator = keysO(r)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var key = _step.value;
                    out.push(f(key, r[key]));
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
}
var toArray = /*#__PURE__*/ collect(external_string_js_namespaceObject.Ord)(function(k, a) {
    return [
        k,
        a
    ];
});
function toUnfoldable(U) {
    return function(r) {
        var sas = toArray(r);
        var len = sas.length;
        return U.unfold(0, function(b) {
            return b < len ? external_internal_js_namespaceObject.some([
                sas[b],
                b + 1
            ]) : external_internal_js_namespaceObject.none;
        });
    };
}
var upsertAt = external_ReadonlyRecord_js_namespaceObject.upsertAt;
var has = external_ReadonlyRecord_js_namespaceObject.has;
function deleteAt(k) {
    return function(r) {
        if (!external_internal_js_namespaceObject.has.call(r, k)) return r;
        var out = Object.assign({}, r);
        delete out[k];
        return out;
    };
}
var updateAt = function(k, a) {
    return modifyAt(k, function() {
        return a;
    });
};
var modifyAt = function(k, f) {
    return function(r) {
        if (!has(k, r)) return external_internal_js_namespaceObject.none;
        var out = Object.assign({}, r);
        out[k] = f(r[k]);
        return external_internal_js_namespaceObject.some(out);
    };
};
function pop(k) {
    var deleteAtk = deleteAt(k);
    return function(r) {
        var oa = lookup(k, r);
        return external_internal_js_namespaceObject.isNone(oa) ? external_internal_js_namespaceObject.none : external_internal_js_namespaceObject.some([
            oa.value,
            deleteAtk(r)
        ]);
    };
}
var isSubrecord = external_ReadonlyRecord_js_namespaceObject.isSubrecord;
var lookup = external_ReadonlyRecord_js_namespaceObject.lookup;
var mapWithIndex = external_ReadonlyRecord_js_namespaceObject.mapWithIndex;
var map = external_ReadonlyRecord_js_namespaceObject.map;
function reduceWithIndex() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return 1 === args.length ? external_ReadonlyRecord_js_namespaceObject.reduceWithIndex(args[0]) : external_ReadonlyRecord_js_namespaceObject.reduceWithIndex(external_string_js_namespaceObject.Ord).apply(this, _to_consumable_array(args));
}
function foldMapWithIndex(O) {
    return 'compare' in O ? external_ReadonlyRecord_js_namespaceObject.foldMapWithIndex(O) : external_ReadonlyRecord_js_namespaceObject.foldMapWithIndex(external_string_js_namespaceObject.Ord)(O);
}
function reduceRightWithIndex() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return 1 === args.length ? external_ReadonlyRecord_js_namespaceObject.reduceRightWithIndex(args[0]) : external_ReadonlyRecord_js_namespaceObject.reduceRightWithIndex(external_string_js_namespaceObject.Ord).apply(this, _to_consumable_array(args));
}
var singleton = external_ReadonlyRecord_js_namespaceObject.singleton;
function traverseWithIndex(F) {
    return external_ReadonlyRecord_js_namespaceObject.traverseWithIndex(F);
}
function traverse(F) {
    return external_ReadonlyRecord_js_namespaceObject.traverse(F);
}
function sequence(F) {
    return external_ReadonlyRecord_js_namespaceObject.sequence(F);
}
var wither = function(F) {
    var traverseF = traverse(F);
    return function(f) {
        return function(fa) {
            return F.map((0, external_function_js_namespaceObject.pipe)(fa, traverseF(f)), compact);
        };
    };
};
var wilt = function(F) {
    var traverseF = traverse(F);
    return function(f) {
        return function(fa) {
            return F.map((0, external_function_js_namespaceObject.pipe)(fa, traverseF(f)), separate);
        };
    };
};
var partitionMapWithIndex = external_ReadonlyRecord_js_namespaceObject.partitionMapWithIndex;
function partitionWithIndex(predicateWithIndex) {
    return external_ReadonlyRecord_js_namespaceObject.partitionWithIndex(predicateWithIndex);
}
var filterMapWithIndex = external_ReadonlyRecord_js_namespaceObject.filterMapWithIndex;
function filterWithIndex(predicateWithIndex) {
    return external_ReadonlyRecord_js_namespaceObject.filterWithIndex(predicateWithIndex);
}
function fromFoldable(M, F) {
    return external_ReadonlyRecord_js_namespaceObject.fromFoldable(M, F);
}
var toEntries = toArray;
var fromEntries = function(fa) {
    return fromFoldable(external_Semigroup_js_namespaceObject.last(), external_Array_js_namespaceObject.Foldable)(fa);
};
function fromFoldableMap(M, F) {
    return external_ReadonlyRecord_js_namespaceObject.fromFoldableMap(M, F);
}
var every = external_ReadonlyRecord_js_namespaceObject.every;
var some = external_ReadonlyRecord_js_namespaceObject.some;
var elem = external_ReadonlyRecord_js_namespaceObject.elem;
var union = function(M) {
    var unionM = external_ReadonlyRecord_js_namespaceObject.union(M);
    return function(second) {
        return function(first) {
            if (isEmpty(first)) return _object_spread({}, second);
            if (isEmpty(second)) return _object_spread({}, first);
            return unionM(second)(first);
        };
    };
};
var intersection = function(M) {
    return function(second) {
        return function(first) {
            if (isEmpty(first) || isEmpty(second)) return {};
            return external_ReadonlyRecord_js_namespaceObject.intersection(M)(second)(first);
        };
    };
};
var difference = function(second) {
    return function(first) {
        if (isEmpty(first)) return _object_spread({}, second);
        if (isEmpty(second)) return _object_spread({}, first);
        return external_ReadonlyRecord_js_namespaceObject.difference(second)(first);
    };
};
var _map = external_ReadonlyRecord_js_namespaceObject._map;
var _mapWithIndex = external_ReadonlyRecord_js_namespaceObject._mapWithIndex;
var _reduce = external_ReadonlyRecord_js_namespaceObject._reduce;
var _foldMap = external_ReadonlyRecord_js_namespaceObject._foldMap;
var _reduceRight = external_ReadonlyRecord_js_namespaceObject._reduceRight;
var _filter = external_ReadonlyRecord_js_namespaceObject._filter;
var _filterMap = external_ReadonlyRecord_js_namespaceObject._filterMap;
var _partition = external_ReadonlyRecord_js_namespaceObject._partition;
var _partitionMap = external_ReadonlyRecord_js_namespaceObject._partitionMap;
var _reduceWithIndex = external_ReadonlyRecord_js_namespaceObject._reduceWithIndex;
var _foldMapWithIndex = external_ReadonlyRecord_js_namespaceObject._foldMapWithIndex;
var _reduceRightWithIndex = external_ReadonlyRecord_js_namespaceObject._reduceRightWithIndex;
var _partitionMapWithIndex = external_ReadonlyRecord_js_namespaceObject._partitionMapWithIndex;
var _partitionWithIndex = external_ReadonlyRecord_js_namespaceObject._partitionWithIndex;
var _filterMapWithIndex = external_ReadonlyRecord_js_namespaceObject._filterMapWithIndex;
var _filterWithIndex = external_ReadonlyRecord_js_namespaceObject._filterWithIndex;
var _traverse = external_ReadonlyRecord_js_namespaceObject._traverse;
var _sequence = external_ReadonlyRecord_js_namespaceObject._sequence;
var _traverseWithIndex = function(O) {
    return function(F) {
        var keysO = keys_(O);
        return function(ta, f) {
            var ks = keysO(ta);
            if (0 === ks.length) return F.of({});
            var fr = F.of({});
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
            try {
                var _loop = function() {
                    var key = _step.value;
                    fr = F.ap(F.map(fr, function(r) {
                        return function(b) {
                            r[key] = b;
                            return r;
                        };
                    }), f(key, ta[key]));
                };
                for(var _iterator = ks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
            return fr;
        };
    };
};
var filter = external_ReadonlyRecord_js_namespaceObject.filter;
var filterMap = external_ReadonlyRecord_js_namespaceObject.filterMap;
var partition = external_ReadonlyRecord_js_namespaceObject.partition;
var partitionMap = external_ReadonlyRecord_js_namespaceObject.partitionMap;
function reduce() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return 1 === args.length ? external_ReadonlyRecord_js_namespaceObject.reduce(args[0]) : external_ReadonlyRecord_js_namespaceObject.reduce(external_string_js_namespaceObject.Ord).apply(this, _to_consumable_array(args));
}
function foldMap(O) {
    return 'compare' in O ? external_ReadonlyRecord_js_namespaceObject.foldMap(O) : external_ReadonlyRecord_js_namespaceObject.foldMap(external_string_js_namespaceObject.Ord)(O);
}
function reduceRight() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return 1 === args.length ? external_ReadonlyRecord_js_namespaceObject.reduceRight(args[0]) : external_ReadonlyRecord_js_namespaceObject.reduceRight(external_string_js_namespaceObject.Ord).apply(this, _to_consumable_array(args));
}
var compact = external_ReadonlyRecord_js_namespaceObject.compact;
var separate = external_ReadonlyRecord_js_namespaceObject.separate;
var URI = 'Record';
function getShow(O) {
    return 'compare' in O ? external_ReadonlyRecord_js_namespaceObject.getShow(O) : external_ReadonlyRecord_js_namespaceObject.getShow(external_string_js_namespaceObject.Ord)(O);
}
var getEq = external_ReadonlyRecord_js_namespaceObject.getEq;
var getMonoid = external_ReadonlyRecord_js_namespaceObject.getMonoid;
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var FunctorWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex
};
var getFoldable = function(O) {
    return {
        URI: URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O)
    };
};
var getFoldableWithIndex = function(O) {
    return {
        URI: URI,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O)
    };
};
var Compactable = {
    URI: URI,
    compact: compact,
    separate: separate
};
var Filterable = {
    URI: URI,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap
};
var FilterableWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex
};
var getTraversable = function(O) {
    return {
        URI: URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: _traverse(O),
        sequence: _sequence(O)
    };
};
var getTraversableWithIndex = function(O) {
    return {
        URI: URI,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        reduceWithIndex: _reduceWithIndex(O),
        foldMapWithIndex: _foldMapWithIndex(O),
        reduceRightWithIndex: _reduceRightWithIndex(O),
        traverse: _traverse(O),
        sequence: _sequence(O),
        traverseWithIndex: _traverseWithIndex(O)
    };
};
var getWitherable = function(O) {
    var T = getTraversable(O);
    return {
        URI: URI,
        map: _map,
        reduce: _reduce(O),
        foldMap: _foldMap(O),
        reduceRight: _reduceRight(O),
        traverse: T.traverse,
        sequence: T.sequence,
        compact: compact,
        separate: separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: (0, external_Witherable_js_namespaceObject.witherDefault)(T, Compactable),
        wilt: (0, external_Witherable_js_namespaceObject.wiltDefault)(T, Compactable)
    };
};
var getUnionSemigroup = function(S) {
    var unionS = union(S);
    return {
        concat: function(first, second) {
            return unionS(second)(first);
        }
    };
};
var getUnionMonoid = function(S) {
    return {
        concat: getUnionSemigroup(S).concat,
        empty: {}
    };
};
var getIntersectionSemigroup = function(S) {
    var intersectionS = intersection(S);
    return {
        concat: function(first, second) {
            return intersectionS(second)(first);
        }
    };
};
var getDifferenceMagma = function() {
    return {
        concat: function(first, second) {
            return difference(second)(first);
        }
    };
};
var Foldable = {
    URI: URI,
    reduce: /*#__PURE__*/ _reduce(external_string_js_namespaceObject.Ord),
    foldMap: /*#__PURE__*/ _foldMap(external_string_js_namespaceObject.Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(external_string_js_namespaceObject.Ord)
};
var FoldableWithIndex = {
    URI: URI,
    reduce: /*#__PURE__*/ _reduce(external_string_js_namespaceObject.Ord),
    foldMap: /*#__PURE__*/ _foldMap(external_string_js_namespaceObject.Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(external_string_js_namespaceObject.Ord),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(external_string_js_namespaceObject.Ord),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(external_string_js_namespaceObject.Ord),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(external_string_js_namespaceObject.Ord)
};
var Traversable = {
    URI: URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(external_string_js_namespaceObject.Ord),
    foldMap: /*#__PURE__*/ _foldMap(external_string_js_namespaceObject.Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(external_string_js_namespaceObject.Ord),
    traverse: /*#__PURE__*/ _traverse(external_string_js_namespaceObject.Ord),
    sequence: sequence
};
var TraversableWithIndex = {
    URI: URI,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: /*#__PURE__*/ _reduce(external_string_js_namespaceObject.Ord),
    foldMap: /*#__PURE__*/ _foldMap(external_string_js_namespaceObject.Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(external_string_js_namespaceObject.Ord),
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(external_string_js_namespaceObject.Ord),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(external_string_js_namespaceObject.Ord),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(external_string_js_namespaceObject.Ord),
    traverse: /*#__PURE__*/ _traverse(external_string_js_namespaceObject.Ord),
    sequence: sequence,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(external_string_js_namespaceObject.Ord)
};
var _wither = /*#__PURE__*/ (0, external_Witherable_js_namespaceObject.witherDefault)(Traversable, Compactable);
var _wilt = /*#__PURE__*/ (0, external_Witherable_js_namespaceObject.wiltDefault)(Traversable, Compactable);
var Witherable = {
    URI: URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(external_string_js_namespaceObject.Ord),
    foldMap: /*#__PURE__*/ _foldMap(external_string_js_namespaceObject.Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(external_string_js_namespaceObject.Ord),
    traverse: /*#__PURE__*/ _traverse(external_string_js_namespaceObject.Ord),
    sequence: sequence,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    wither: _wither,
    wilt: _wilt
};
var empty = {};
var insertAt = upsertAt;
var Record_hasOwnProperty = external_ReadonlyRecord_js_namespaceObject.hasOwnProperty;
var record = {
    URI: URI,
    map: _map,
    reduce: /*#__PURE__*/ _reduce(external_string_js_namespaceObject.Ord),
    foldMap: /*#__PURE__*/ _foldMap(external_string_js_namespaceObject.Ord),
    reduceRight: /*#__PURE__*/ _reduceRight(external_string_js_namespaceObject.Ord),
    traverse: /*#__PURE__*/ _traverse(external_string_js_namespaceObject.Ord),
    sequence: sequence,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: /*#__PURE__*/ _reduceWithIndex(external_string_js_namespaceObject.Ord),
    foldMapWithIndex: /*#__PURE__*/ _foldMapWithIndex(external_string_js_namespaceObject.Ord),
    reduceRightWithIndex: /*#__PURE__*/ _reduceRightWithIndex(external_string_js_namespaceObject.Ord),
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    traverseWithIndex: /*#__PURE__*/ _traverseWithIndex(external_string_js_namespaceObject.Ord),
    wither: _wither,
    wilt: _wilt
};
exports.Compactable = __webpack_exports__.Compactable;
exports.Filterable = __webpack_exports__.Filterable;
exports.FilterableWithIndex = __webpack_exports__.FilterableWithIndex;
exports.Foldable = __webpack_exports__.Foldable;
exports.FoldableWithIndex = __webpack_exports__.FoldableWithIndex;
exports.Functor = __webpack_exports__.Functor;
exports.FunctorWithIndex = __webpack_exports__.FunctorWithIndex;
exports.Traversable = __webpack_exports__.Traversable;
exports.TraversableWithIndex = __webpack_exports__.TraversableWithIndex;
exports.URI = __webpack_exports__.URI;
exports.Witherable = __webpack_exports__.Witherable;
exports.collect = __webpack_exports__.collect;
exports.compact = __webpack_exports__.compact;
exports.deleteAt = __webpack_exports__.deleteAt;
exports.difference = __webpack_exports__.difference;
exports.elem = __webpack_exports__.elem;
exports.empty = __webpack_exports__.empty;
exports.every = __webpack_exports__.every;
exports.filter = __webpack_exports__.filter;
exports.filterMap = __webpack_exports__.filterMap;
exports.filterMapWithIndex = __webpack_exports__.filterMapWithIndex;
exports.filterWithIndex = __webpack_exports__.filterWithIndex;
exports.flap = __webpack_exports__.flap;
exports.foldMap = __webpack_exports__.foldMap;
exports.foldMapWithIndex = __webpack_exports__.foldMapWithIndex;
exports.fromEntries = __webpack_exports__.fromEntries;
exports.fromFoldable = __webpack_exports__.fromFoldable;
exports.fromFoldableMap = __webpack_exports__.fromFoldableMap;
exports.getDifferenceMagma = __webpack_exports__.getDifferenceMagma;
exports.getEq = __webpack_exports__.getEq;
exports.getFoldable = __webpack_exports__.getFoldable;
exports.getFoldableWithIndex = __webpack_exports__.getFoldableWithIndex;
exports.getIntersectionSemigroup = __webpack_exports__.getIntersectionSemigroup;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getShow = __webpack_exports__.getShow;
exports.getTraversable = __webpack_exports__.getTraversable;
exports.getTraversableWithIndex = __webpack_exports__.getTraversableWithIndex;
exports.getUnionMonoid = __webpack_exports__.getUnionMonoid;
exports.getUnionSemigroup = __webpack_exports__.getUnionSemigroup;
exports.getWitherable = __webpack_exports__.getWitherable;
exports.has = __webpack_exports__.has;
exports.hasOwnProperty = __webpack_exports__.hasOwnProperty;
exports.insertAt = __webpack_exports__.insertAt;
exports.intersection = __webpack_exports__.intersection;
exports.isEmpty = __webpack_exports__.isEmpty;
exports.isSubrecord = __webpack_exports__.isSubrecord;
exports.keys = __webpack_exports__.keys;
exports.lookup = __webpack_exports__.lookup;
exports.map = __webpack_exports__.map;
exports.mapWithIndex = __webpack_exports__.mapWithIndex;
exports.modifyAt = __webpack_exports__.modifyAt;
exports.partition = __webpack_exports__.partition;
exports.partitionMap = __webpack_exports__.partitionMap;
exports.partitionMapWithIndex = __webpack_exports__.partitionMapWithIndex;
exports.partitionWithIndex = __webpack_exports__.partitionWithIndex;
exports.pop = __webpack_exports__.pop;
exports.record = __webpack_exports__.record;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.reduceRightWithIndex = __webpack_exports__.reduceRightWithIndex;
exports.reduceWithIndex = __webpack_exports__.reduceWithIndex;
exports.separate = __webpack_exports__.separate;
exports.sequence = __webpack_exports__.sequence;
exports.singleton = __webpack_exports__.singleton;
exports.size = __webpack_exports__.size;
exports.some = __webpack_exports__.some;
exports.toArray = __webpack_exports__.toArray;
exports.toEntries = __webpack_exports__.toEntries;
exports.toUnfoldable = __webpack_exports__.toUnfoldable;
exports.traverse = __webpack_exports__.traverse;
exports.traverseWithIndex = __webpack_exports__.traverseWithIndex;
exports.union = __webpack_exports__.union;
exports.updateAt = __webpack_exports__.updateAt;
exports.upsertAt = __webpack_exports__.upsertAt;
exports.wilt = __webpack_exports__.wilt;
exports.wither = __webpack_exports__.wither;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Compactable",
    "Filterable",
    "FilterableWithIndex",
    "Foldable",
    "FoldableWithIndex",
    "Functor",
    "FunctorWithIndex",
    "Traversable",
    "TraversableWithIndex",
    "URI",
    "Witherable",
    "collect",
    "compact",
    "deleteAt",
    "difference",
    "elem",
    "empty",
    "every",
    "filter",
    "filterMap",
    "filterMapWithIndex",
    "filterWithIndex",
    "flap",
    "foldMap",
    "foldMapWithIndex",
    "fromEntries",
    "fromFoldable",
    "fromFoldableMap",
    "getDifferenceMagma",
    "getEq",
    "getFoldable",
    "getFoldableWithIndex",
    "getIntersectionSemigroup",
    "getMonoid",
    "getShow",
    "getTraversable",
    "getTraversableWithIndex",
    "getUnionMonoid",
    "getUnionSemigroup",
    "getWitherable",
    "has",
    "hasOwnProperty",
    "insertAt",
    "intersection",
    "isEmpty",
    "isSubrecord",
    "keys",
    "lookup",
    "map",
    "mapWithIndex",
    "modifyAt",
    "partition",
    "partitionMap",
    "partitionMapWithIndex",
    "partitionWithIndex",
    "pop",
    "record",
    "reduce",
    "reduceRight",
    "reduceRightWithIndex",
    "reduceWithIndex",
    "separate",
    "sequence",
    "singleton",
    "size",
    "some",
    "toArray",
    "toEntries",
    "toUnfoldable",
    "traverse",
    "traverseWithIndex",
    "union",
    "updateAt",
    "upsertAt",
    "wilt",
    "wither"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
