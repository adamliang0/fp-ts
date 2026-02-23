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
    updateAt: function() {
        return updateAt;
    },
    reduceWithIndex: function() {
        return reduceWithIndex;
    },
    singleton: function() {
        return singleton;
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
    values: function() {
        return values;
    },
    fromFoldable: function() {
        return fromFoldable;
    },
    map_: function() {
        return map_;
    },
    keys: function() {
        return Map_keys;
    },
    getFoldableWithIndex: function() {
        return getFoldableWithIndex;
    },
    partitionWithIndex: function() {
        return partitionWithIndex;
    },
    toUnfoldable: function() {
        return toUnfoldable;
    },
    Functor: function() {
        return Functor;
    },
    filter: function() {
        return filter;
    },
    member: function() {
        return member;
    },
    size: function() {
        return size;
    },
    getShow: function() {
        return getShow;
    },
    getUnionSemigroup: function() {
        return getUnionSemigroup;
    },
    upsertAt: function() {
        return upsertAt;
    },
    insertAt: function() {
        return insertAt;
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
    lookupWithKey: function() {
        return lookupWithKey;
    },
    getWitherable: function() {
        return getWitherable;
    },
    partitionMap: function() {
        return partitionMap;
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
    flap: function() {
        return flap;
    },
    filterMap: function() {
        return filterMap;
    },
    isSubmap: function() {
        return isSubmap;
    },
    deleteAt: function() {
        return deleteAt;
    },
    getDifferenceMagma: function() {
        return getDifferenceMagma;
    },
    getFilterableWithIndex: function() {
        return getFilterableWithIndex;
    },
    getUnionMonoid: function() {
        return getUnionMonoid;
    },
    foldMap: function() {
        return foldMap;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Option_js_namespaceObject = require("./Option.js");
var external_ReadonlyMap_js_namespaceObject = require("./ReadonlyMap.js");
var external_Separated_js_namespaceObject = require("./Separated.js");
var external_Witherable_js_namespaceObject = require("./Witherable.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function Map_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = null != source ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else Map_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
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
var getShow = external_ReadonlyMap_js_namespaceObject.getShow;
var size = external_ReadonlyMap_js_namespaceObject.size;
var isEmpty = external_ReadonlyMap_js_namespaceObject.isEmpty;
var member = external_ReadonlyMap_js_namespaceObject.member;
var elem = external_ReadonlyMap_js_namespaceObject.elem;
var Map_keys = function(O) {
    return function(m) {
        return Array.from(m.keys()).sort(O.compare);
    };
};
var values = function(O) {
    return function(m) {
        return Array.from(m.values()).sort(O.compare);
    };
};
function collect(O) {
    var keysO = Map_keys(O);
    return function(f) {
        return function(m) {
            var out = [];
            var ks = keysO(m);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = void 0;
            try {
                for(var _iterator = ks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var key = _step.value;
                    out.push(f(key, m.get(key)));
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
function toArray(O) {
    return collect(O)(function(k, a) {
        return [
            k,
            a
        ];
    });
}
function toUnfoldable(ord, U) {
    var toArrayO = toArray(ord);
    return function(d) {
        var kas = toArrayO(d);
        var len = kas.length;
        return U.unfold(0, function(b) {
            return b < len ? external_internal_js_namespaceObject.some([
                kas[b],
                b + 1
            ]) : external_internal_js_namespaceObject.none;
        });
    };
}
var upsertAt = function(E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function(k, a) {
        var lookupWithKeyEk = lookupWithKeyE(k);
        return function(m) {
            var found = lookupWithKeyEk(m);
            if (external_internal_js_namespaceObject.isNone(found)) {
                var out = new Map(m);
                out.set(k, a);
                return out;
            }
            if (found.value[1] !== a) {
                var out1 = new Map(m);
                out1.set(found.value[0], a);
                return out1;
            }
            return m;
        };
    };
};
var deleteAt = function(E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function(k) {
        return function(m) {
            var found = lookupWithKeyE(k, m);
            if (external_internal_js_namespaceObject.isSome(found)) {
                var r = new Map(m);
                r.delete(found.value[0]);
                return r;
            }
            return m;
        };
    };
};
var updateAt = function(E) {
    var modifyAtE = modifyAt(E);
    return function(k, a) {
        return modifyAtE(k, function() {
            return a;
        });
    };
};
var modifyAt = function(E) {
    var lookupWithKeyE = lookupWithKey(E);
    return function(k, f) {
        return function(m) {
            var found = lookupWithKeyE(k, m);
            if (external_internal_js_namespaceObject.isNone(found)) return external_internal_js_namespaceObject.none;
            var r = new Map(m);
            r.set(found.value[0], f(found.value[1]));
            return external_internal_js_namespaceObject.some(r);
        };
    };
};
function pop(E) {
    var lookupE = lookup(E);
    var deleteAtE = deleteAt(E);
    return function(k) {
        var deleteAtEk = deleteAtE(k);
        return function(m) {
            return (0, external_function_js_namespaceObject.pipe)(lookupE(k, m), external_Option_js_namespaceObject.map(function(a) {
                return [
                    a,
                    deleteAtEk(m)
                ];
            }));
        };
    };
}
function lookupWithKey(E) {
    return function(k, m) {
        if (void 0 === m) {
            var lookupWithKeyE = lookupWithKey(E);
            return function(m) {
                return lookupWithKeyE(k, m);
            };
        }
        var entries = m.entries();
        var e;
        while(!(e = entries.next()).done){
            var _e_value = _sliced_to_array(e.value, 2), ka = _e_value[0], a = _e_value[1];
            if (E.equals(ka, k)) return external_internal_js_namespaceObject.some([
                ka,
                a
            ]);
        }
        return external_internal_js_namespaceObject.none;
    };
}
var lookup = external_ReadonlyMap_js_namespaceObject.lookup;
var isSubmap = external_ReadonlyMap_js_namespaceObject.isSubmap;
var getEq = external_ReadonlyMap_js_namespaceObject.getEq;
function getMonoid(SK, SA) {
    var lookupWithKeyS = lookupWithKey(SK);
    return {
        concat: function(mx, my) {
            if (isEmpty(mx)) return my;
            if (isEmpty(my)) return mx;
            var r = new Map(mx);
            var entries = my.entries();
            var e;
            while(!(e = entries.next()).done){
                var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], a = _e_value[1];
                var mxOptA = lookupWithKeyS(k, mx);
                if (external_internal_js_namespaceObject.isSome(mxOptA)) r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], a));
                else r.set(k, a);
            }
            return r;
        },
        empty: new Map()
    };
}
var singleton = function(k, a) {
    return new Map([
        [
            k,
            a
        ]
    ]);
};
function fromFoldable(E, M, F) {
    return function(fka) {
        var lookupWithKeyE = lookupWithKey(E);
        return F.reduce(fka, new Map(), function(b, param) {
            var _param = _sliced_to_array(param, 2), k = _param[0], a = _param[1];
            var bOpt = lookupWithKeyE(k, b);
            if (external_internal_js_namespaceObject.isSome(bOpt)) b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
            else b.set(k, a);
            return b;
        });
    };
}
var _mapWithIndex = function(fa, f) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    while(!(e = entries.next()).done){
        var _e_value = _sliced_to_array(e.value, 2), key = _e_value[0], a = _e_value[1];
        m.set(key, f(key, a));
    }
    return m;
};
var partitionMapWithIndex = function(f) {
    return function(fa) {
        var left = new Map();
        var right = new Map();
        var entries = fa.entries();
        var e;
        while(!(e = entries.next()).done){
            var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], a = _e_value[1];
            var ei = f(k, a);
            if (external_internal_js_namespaceObject.isLeft(ei)) left.set(k, ei.left);
            else right.set(k, ei.right);
        }
        return (0, external_Separated_js_namespaceObject.separated)(left, right);
    };
};
function partitionWithIndex(predicateWithIndex) {
    return function(fa) {
        var left = new Map();
        var right = new Map();
        var entries = fa.entries();
        var e;
        while(!(e = entries.next()).done){
            var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], a = _e_value[1];
            if (predicateWithIndex(k, a)) right.set(k, a);
            else left.set(k, a);
        }
        return (0, external_Separated_js_namespaceObject.separated)(left, right);
    };
}
var filterMapWithIndex = function(f) {
    return function(fa) {
        var m = new Map();
        var entries = fa.entries();
        var e;
        while(!(e = entries.next()).done){
            var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], a = _e_value[1];
            var o = f(k, a);
            if (external_internal_js_namespaceObject.isSome(o)) m.set(k, o.value);
        }
        return m;
    };
};
function filterWithIndex(p) {
    return function(m) {
        var out = new Map();
        var entries = m.entries();
        var e;
        while(!(e = entries.next()).done){
            var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], a = _e_value[1];
            if (p(k, a)) out.set(k, a);
        }
        return out;
    };
}
var _map = function(fa, f) {
    return _mapWithIndex(fa, function(_, a) {
        return f(a);
    });
};
var _filter = function(fa, p) {
    return _filterWithIndex(fa, function(_, a) {
        return p(a);
    });
};
var _filterMap = function(fa, f) {
    return _filterMapWithIndex(fa, function(_, a) {
        return f(a);
    });
};
var _partition = function(fa, predicate) {
    return _partitionWithIndex(fa, function(_, a) {
        return predicate(a);
    });
};
var _partitionMap = function(fa, f) {
    return _partitionMapWithIndex(fa, function(_, a) {
        return f(a);
    });
};
var _filterWithIndex = function(fa, p) {
    return (0, external_function_js_namespaceObject.pipe)(fa, filterWithIndex(p));
};
var _filterMapWithIndex = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, filterMapWithIndex(f));
};
var _partitionWithIndex = function(fa, p) {
    return (0, external_function_js_namespaceObject.pipe)(fa, partitionWithIndex(p));
};
var _partitionMapWithIndex = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, partitionMapWithIndex(f));
};
var compact = function(fa) {
    var m = new Map();
    var entries = fa.entries();
    var e;
    while(!(e = entries.next()).done){
        var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], oa = _e_value[1];
        if (external_internal_js_namespaceObject.isSome(oa)) m.set(k, oa.value);
    }
    return m;
};
var filter = function(predicate) {
    return function(fa) {
        return _filter(fa, predicate);
    };
};
var filterMap = function(f) {
    return function(fa) {
        return _filterMap(fa, f);
    };
};
var map = function(f) {
    return function(fa) {
        return _map(fa, f);
    };
};
var mapWithIndex = function(f) {
    return function(fa) {
        return _mapWithIndex(fa, f);
    };
};
var partition = function(predicate) {
    return function(fa) {
        return _partition(fa, predicate);
    };
};
var partitionMap = function(f) {
    return function(fa) {
        return _partitionMap(fa, f);
    };
};
var separate = function(fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e;
    while(!(e = entries.next()).done){
        var _e_value = _sliced_to_array(e.value, 2), k = _e_value[0], ei = _e_value[1];
        if (external_internal_js_namespaceObject.isLeft(ei)) left.set(k, ei.left);
        else right.set(k, ei.right);
    }
    return (0, external_Separated_js_namespaceObject.separated)(left, right);
};
var URI = 'Map';
var getUnionSemigroup = function(E, S) {
    var unionES = union(E, S);
    return {
        concat: function(first, second) {
            return unionES(second)(first);
        }
    };
};
var getUnionMonoid = function(E, S) {
    return {
        concat: getUnionSemigroup(E, S).concat,
        empty: new Map()
    };
};
var getIntersectionSemigroup = function(E, S) {
    var intersectionES = intersection(E, S);
    return {
        concat: function(first, second) {
            return intersectionES(second)(first);
        }
    };
};
var getDifferenceMagma = function(E) {
    return function() {
        var differenceE = difference(E);
        return {
            concat: function(first, second) {
                return differenceE(second)(first);
            }
        };
    };
};
function getFilterableWithIndex() {
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        mapWithIndex: _mapWithIndex,
        compact: compact,
        separate: separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
    };
}
function getWitherable(O) {
    var TWI = getTraversableWithIndex(O);
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        compact: compact,
        separate: separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: TWI.reduce,
        foldMap: TWI.foldMap,
        reduceRight: TWI.reduceRight,
        traverse: TWI.traverse,
        sequence: TWI.sequence,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: TWI.reduceWithIndex,
        foldMapWithIndex: TWI.foldMapWithIndex,
        reduceRightWithIndex: TWI.reduceRightWithIndex,
        traverseWithIndex: TWI.traverseWithIndex,
        wilt: (0, external_Witherable_js_namespaceObject.wiltDefault)(TWI, Compactable),
        wither: (0, external_Witherable_js_namespaceObject.witherDefault)(TWI, Compactable)
    };
}
var reduce = external_ReadonlyMap_js_namespaceObject.reduce;
var foldMap = external_ReadonlyMap_js_namespaceObject.foldMap;
var reduceRight = external_ReadonlyMap_js_namespaceObject.reduceRight;
var getFoldable = function(O) {
    return _object_spread_props(_object_spread({}, external_ReadonlyMap_js_namespaceObject.getFoldable(O)), {
        URI: URI
    });
};
var reduceWithIndex = external_ReadonlyMap_js_namespaceObject.reduceWithIndex;
var foldMapWithIndex = external_ReadonlyMap_js_namespaceObject.foldMapWithIndex;
var reduceRightWithIndex = external_ReadonlyMap_js_namespaceObject.reduceRightWithIndex;
var getFoldableWithIndex = function(O) {
    return _object_spread_props(_object_spread({}, external_ReadonlyMap_js_namespaceObject.getFoldableWithIndex(O)), {
        URI: URI
    });
};
var getTraversableWithIndex = function(O) {
    var FWI = getFoldableWithIndex(O);
    var keysO = Map_keys(O);
    var traverseWithIndex = function(F) {
        return function(ta, f) {
            var _loop = function(i) {
                var key = ks[i];
                var a = ta.get(key);
                fm = F.ap(F.map(fm, function(m) {
                    return function(b) {
                        return m.set(key, b);
                    };
                }), f(key, a));
            };
            var fm = F.of(new Map());
            var ks = keysO(ta);
            var len = ks.length;
            for(var i = 0; i < len; i++)_loop(i);
            return fm;
        };
    };
    var traverse = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f) {
            return traverseWithIndexF(ta, function(_, a) {
                return f(a);
            });
        };
    };
    var sequence = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta) {
            return traverseWithIndexF(ta, function(_, a) {
                return a;
            });
        };
    };
    return {
        URI: URI,
        _E: void 0,
        map: _map,
        mapWithIndex: _mapWithIndex,
        reduce: FWI.reduce,
        foldMap: FWI.foldMap,
        reduceRight: FWI.reduceRight,
        reduceWithIndex: FWI.reduceWithIndex,
        foldMapWithIndex: FWI.foldMapWithIndex,
        reduceRightWithIndex: FWI.reduceRightWithIndex,
        traverse: traverse,
        sequence: sequence,
        traverseWithIndex: traverseWithIndex
    };
};
var Functor = {
    URI: URI,
    map: _map
};
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
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
var copy = function(m) {
    return new Map(m);
};
var union = function(E, M) {
    var unionEM = external_ReadonlyMap_js_namespaceObject.union(E, M);
    return function(second) {
        return function(first) {
            if (isEmpty(first)) return copy(second);
            if (isEmpty(second)) return copy(first);
            return unionEM(second)(first);
        };
    };
};
var intersection = function(E, M) {
    var intersectionEM = external_ReadonlyMap_js_namespaceObject.intersection(E, M);
    return function(second) {
        return function(first) {
            if (isEmpty(first) || isEmpty(second)) return new Map();
            return intersectionEM(second)(first);
        };
    };
};
var difference = function(E) {
    var differenceE = external_ReadonlyMap_js_namespaceObject.difference(E);
    return function(second) {
        return function(first) {
            if (isEmpty(first)) return copy(second);
            if (isEmpty(second)) return copy(first);
            return differenceE(second)(first);
        };
    };
};
var empty = new Map();
var insertAt = upsertAt;
var map_ = Filterable;
exports.Compactable = __webpack_exports__.Compactable;
exports.Filterable = __webpack_exports__.Filterable;
exports.Functor = __webpack_exports__.Functor;
exports.URI = __webpack_exports__.URI;
exports.collect = __webpack_exports__.collect;
exports.compact = __webpack_exports__.compact;
exports.deleteAt = __webpack_exports__.deleteAt;
exports.difference = __webpack_exports__.difference;
exports.elem = __webpack_exports__.elem;
exports.empty = __webpack_exports__.empty;
exports.filter = __webpack_exports__.filter;
exports.filterMap = __webpack_exports__.filterMap;
exports.filterMapWithIndex = __webpack_exports__.filterMapWithIndex;
exports.filterWithIndex = __webpack_exports__.filterWithIndex;
exports.flap = __webpack_exports__.flap;
exports.foldMap = __webpack_exports__.foldMap;
exports.foldMapWithIndex = __webpack_exports__.foldMapWithIndex;
exports.fromFoldable = __webpack_exports__.fromFoldable;
exports.getDifferenceMagma = __webpack_exports__.getDifferenceMagma;
exports.getEq = __webpack_exports__.getEq;
exports.getFilterableWithIndex = __webpack_exports__.getFilterableWithIndex;
exports.getFoldable = __webpack_exports__.getFoldable;
exports.getFoldableWithIndex = __webpack_exports__.getFoldableWithIndex;
exports.getIntersectionSemigroup = __webpack_exports__.getIntersectionSemigroup;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getShow = __webpack_exports__.getShow;
exports.getTraversableWithIndex = __webpack_exports__.getTraversableWithIndex;
exports.getUnionMonoid = __webpack_exports__.getUnionMonoid;
exports.getUnionSemigroup = __webpack_exports__.getUnionSemigroup;
exports.getWitherable = __webpack_exports__.getWitherable;
exports.insertAt = __webpack_exports__.insertAt;
exports.intersection = __webpack_exports__.intersection;
exports.isEmpty = __webpack_exports__.isEmpty;
exports.isSubmap = __webpack_exports__.isSubmap;
exports.keys = __webpack_exports__.keys;
exports.lookup = __webpack_exports__.lookup;
exports.lookupWithKey = __webpack_exports__.lookupWithKey;
exports.map = __webpack_exports__.map;
exports.mapWithIndex = __webpack_exports__.mapWithIndex;
exports.map_ = __webpack_exports__.map_;
exports.member = __webpack_exports__.member;
exports.modifyAt = __webpack_exports__.modifyAt;
exports.partition = __webpack_exports__.partition;
exports.partitionMap = __webpack_exports__.partitionMap;
exports.partitionMapWithIndex = __webpack_exports__.partitionMapWithIndex;
exports.partitionWithIndex = __webpack_exports__.partitionWithIndex;
exports.pop = __webpack_exports__.pop;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.reduceRightWithIndex = __webpack_exports__.reduceRightWithIndex;
exports.reduceWithIndex = __webpack_exports__.reduceWithIndex;
exports.separate = __webpack_exports__.separate;
exports.singleton = __webpack_exports__.singleton;
exports.size = __webpack_exports__.size;
exports.toArray = __webpack_exports__.toArray;
exports.toUnfoldable = __webpack_exports__.toUnfoldable;
exports.union = __webpack_exports__.union;
exports.updateAt = __webpack_exports__.updateAt;
exports.upsertAt = __webpack_exports__.upsertAt;
exports.values = __webpack_exports__.values;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Compactable",
    "Filterable",
    "Functor",
    "URI",
    "collect",
    "compact",
    "deleteAt",
    "difference",
    "elem",
    "empty",
    "filter",
    "filterMap",
    "filterMapWithIndex",
    "filterWithIndex",
    "flap",
    "foldMap",
    "foldMapWithIndex",
    "fromFoldable",
    "getDifferenceMagma",
    "getEq",
    "getFilterableWithIndex",
    "getFoldable",
    "getFoldableWithIndex",
    "getIntersectionSemigroup",
    "getMonoid",
    "getShow",
    "getTraversableWithIndex",
    "getUnionMonoid",
    "getUnionSemigroup",
    "getWitherable",
    "insertAt",
    "intersection",
    "isEmpty",
    "isSubmap",
    "keys",
    "lookup",
    "lookupWithKey",
    "map",
    "mapWithIndex",
    "map_",
    "member",
    "modifyAt",
    "partition",
    "partitionMap",
    "partitionMapWithIndex",
    "partitionWithIndex",
    "pop",
    "reduce",
    "reduceRight",
    "reduceRightWithIndex",
    "reduceWithIndex",
    "separate",
    "singleton",
    "size",
    "toArray",
    "toUnfoldable",
    "union",
    "updateAt",
    "upsertAt",
    "values"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
