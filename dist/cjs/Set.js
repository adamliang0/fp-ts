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
    fromArray: function() {
        return fromArray;
    },
    elem: function() {
        return elem;
    },
    getIntersectionSemigroup: function() {
        return getIntersectionSemigroup;
    },
    some: function() {
        return some;
    },
    union: function() {
        return union;
    },
    singleton: function() {
        return singleton;
    },
    reduceRight: function() {
        return reduceRight;
    },
    remove: function() {
        return remove;
    },
    separate: function() {
        return separate;
    },
    intersection: function() {
        return intersection;
    },
    insert: function() {
        return insert;
    },
    isEmpty: function() {
        return isEmpty;
    },
    chain: function() {
        return chain;
    },
    getEq: function() {
        return getEq;
    },
    partitionMap: function() {
        return partitionMap;
    },
    reduce: function() {
        return reduce;
    },
    toggle: function() {
        return toggle;
    },
    map: function() {
        return map;
    },
    subset: function() {
        return subset;
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
    filter: function() {
        return filter;
    },
    every: function() {
        return every;
    },
    foldMap: function() {
        return foldMap;
    },
    filterMap: function() {
        return filterMap;
    },
    size: function() {
        return size;
    },
    isSubset: function() {
        return isSubset;
    },
    getDifferenceMagma: function() {
        return getDifferenceMagma;
    },
    getShow: function() {
        return getShow;
    },
    getUnionMonoid: function() {
        return getUnionMonoid;
    },
    getUnionSemigroup: function() {
        return getUnionSemigroup;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_ReadonlySet_js_namespaceObject = require("./ReadonlySet.js");
var external_Separated_js_namespaceObject = require("./Separated.js");
var getShow = external_ReadonlySet_js_namespaceObject.getShow;
var getEq = external_ReadonlySet_js_namespaceObject.getEq;
function map(E) {
    var elemE = elem(E);
    return function(f) {
        return function(set) {
            var r = new Set();
            set.forEach(function(e) {
                var v = f(e);
                if (!elemE(v, r)) r.add(v);
            });
            return r;
        };
    };
}
function chain(E) {
    var elemE = elem(E);
    return function(f) {
        return function(set) {
            var r = new Set();
            set.forEach(function(e) {
                f(e).forEach(function(e) {
                    if (!elemE(e, r)) r.add(e);
                });
            });
            return r;
        };
    };
}
function filter(predicate) {
    return function(set) {
        var values = set.values();
        var e;
        var r = new Set();
        while(!(e = values.next()).done){
            var a = e.value;
            if (predicate(a)) r.add(a);
        }
        return r;
    };
}
function partition(predicate) {
    return function(set) {
        var values = set.values();
        var e;
        var right = new Set();
        var left = new Set();
        while(!(e = values.next()).done){
            var a = e.value;
            if (predicate(a)) right.add(a);
            else left.add(a);
        }
        return (0, external_Separated_js_namespaceObject.separated)(left, right);
    };
}
function union(E) {
    var elemE = elem(E);
    return function(me, that) {
        if (void 0 === that) {
            var unionE = union(E);
            return function(that) {
                return unionE(me, that);
            };
        }
        if (isEmpty(me)) return that;
        if (isEmpty(that)) return me;
        var r = new Set(me);
        that.forEach(function(e) {
            if (!elemE(e, r)) r.add(e);
        });
        return r;
    };
}
function intersection(E) {
    var elemE = elem(E);
    return function(me, that) {
        if (void 0 === that) {
            var intersectionE = intersection(E);
            return function(that) {
                return intersectionE(that, me);
            };
        }
        if (isEmpty(me) || isEmpty(that)) return new Set();
        var r = new Set();
        me.forEach(function(e) {
            if (elemE(e, that)) r.add(e);
        });
        return r;
    };
}
function partitionMap(EB, EC) {
    return function(f) {
        return function(set) {
            var values = set.values();
            var e;
            var left = new Set();
            var right = new Set();
            var hasB = elem(EB);
            var hasC = elem(EC);
            while(!(e = values.next()).done){
                var v = f(e.value);
                switch(v._tag){
                    case 'Left':
                        if (!hasB(v.left, left)) left.add(v.left);
                        break;
                    case 'Right':
                        if (!hasC(v.right, right)) right.add(v.right);
                        break;
                }
            }
            return (0, external_Separated_js_namespaceObject.separated)(left, right);
        };
    };
}
function difference(E) {
    var elemE = elem(E);
    return function(me, that) {
        if (void 0 === that) {
            var differenceE = difference(E);
            return function(that) {
                return differenceE(that, me);
            };
        }
        return filter(function(a) {
            return !elemE(a, that);
        })(me);
    };
}
var getUnionSemigroup = function(E) {
    return {
        concat: union(E)
    };
};
var getUnionMonoid = function(E) {
    return {
        concat: getUnionSemigroup(E).concat,
        empty: new Set()
    };
};
var getIntersectionSemigroup = function(E) {
    return {
        concat: intersection(E)
    };
};
var getDifferenceMagma = function(E) {
    return {
        concat: difference(E)
    };
};
var reduce = external_ReadonlySet_js_namespaceObject.reduce;
var foldMap = external_ReadonlySet_js_namespaceObject.foldMap;
var reduceRight = external_ReadonlySet_js_namespaceObject.reduceRight;
var singleton = function(a) {
    return new Set([
        a
    ]);
};
function insert(E) {
    var elemE = elem(E);
    return function(a) {
        return function(set) {
            if (elemE(a)(set)) return set;
            var r = new Set(set);
            r.add(a);
            return r;
        };
    };
}
var remove = function(E) {
    return function(a) {
        return function(set) {
            return filter(function(ax) {
                return !E.equals(a, ax);
            })(set);
        };
    };
};
var toggle = function(E) {
    var elemE = elem(E);
    var removeE = remove(E);
    var insertE = insert(E);
    return function(a) {
        return function(set) {
            return (elemE(a, set) ? removeE : insertE)(a)(set);
        };
    };
};
var fromArray = function(E) {
    return function(as) {
        var len = as.length;
        var out = new Set();
        var has = elem(E);
        for(var i = 0; i < len; i++){
            var a = as[i];
            if (!has(a, out)) out.add(a);
        }
        return out;
    };
};
var compact = function(E) {
    return filterMap(E)(external_function_js_namespaceObject.identity);
};
function separate(EE, EA) {
    return function(fa) {
        var elemEE = elem(EE);
        var elemEA = elem(EA);
        var left = new Set();
        var right = new Set();
        fa.forEach(function(e) {
            switch(e._tag){
                case 'Left':
                    if (!elemEE(e.left, left)) left.add(e.left);
                    break;
                case 'Right':
                    if (!elemEA(e.right, right)) right.add(e.right);
                    break;
            }
        });
        return (0, external_Separated_js_namespaceObject.separated)(left, right);
    };
}
function filterMap(E) {
    var elemE = elem(E);
    return function(f) {
        return function(fa) {
            var r = new Set();
            fa.forEach(function(a) {
                var ob = f(a);
                if ('Some' === ob._tag && !elemE(ob.value, r)) r.add(ob.value);
            });
            return r;
        };
    };
}
var empty = new Set();
var isEmpty = function(set) {
    return 0 === set.size;
};
var size = function(set) {
    return set.size;
};
var some = external_ReadonlySet_js_namespaceObject.some;
var every = external_ReadonlySet_js_namespaceObject.every;
var isSubset = external_ReadonlySet_js_namespaceObject.isSubset;
var elem = external_ReadonlySet_js_namespaceObject.elem;
var toArray = function(O) {
    return function(set) {
        var out = [];
        set.forEach(function(e) {
            return out.push(e);
        });
        return out.sort(O.compare);
    };
};
var subset = external_ReadonlySet_js_namespaceObject.isSubset;
exports.chain = __webpack_exports__.chain;
exports.compact = __webpack_exports__.compact;
exports.difference = __webpack_exports__.difference;
exports.elem = __webpack_exports__.elem;
exports.empty = __webpack_exports__.empty;
exports.every = __webpack_exports__.every;
exports.filter = __webpack_exports__.filter;
exports.filterMap = __webpack_exports__.filterMap;
exports.foldMap = __webpack_exports__.foldMap;
exports.fromArray = __webpack_exports__.fromArray;
exports.getDifferenceMagma = __webpack_exports__.getDifferenceMagma;
exports.getEq = __webpack_exports__.getEq;
exports.getIntersectionSemigroup = __webpack_exports__.getIntersectionSemigroup;
exports.getShow = __webpack_exports__.getShow;
exports.getUnionMonoid = __webpack_exports__.getUnionMonoid;
exports.getUnionSemigroup = __webpack_exports__.getUnionSemigroup;
exports.insert = __webpack_exports__.insert;
exports.intersection = __webpack_exports__.intersection;
exports.isEmpty = __webpack_exports__.isEmpty;
exports.isSubset = __webpack_exports__.isSubset;
exports.map = __webpack_exports__.map;
exports.partition = __webpack_exports__.partition;
exports.partitionMap = __webpack_exports__.partitionMap;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.remove = __webpack_exports__.remove;
exports.separate = __webpack_exports__.separate;
exports.singleton = __webpack_exports__.singleton;
exports.size = __webpack_exports__.size;
exports.some = __webpack_exports__.some;
exports.subset = __webpack_exports__.subset;
exports.toArray = __webpack_exports__.toArray;
exports.toggle = __webpack_exports__.toggle;
exports.union = __webpack_exports__.union;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "chain",
    "compact",
    "difference",
    "elem",
    "empty",
    "every",
    "filter",
    "filterMap",
    "foldMap",
    "fromArray",
    "getDifferenceMagma",
    "getEq",
    "getIntersectionSemigroup",
    "getShow",
    "getUnionMonoid",
    "getUnionSemigroup",
    "insert",
    "intersection",
    "isEmpty",
    "isSubset",
    "map",
    "partition",
    "partitionMap",
    "reduce",
    "reduceRight",
    "remove",
    "separate",
    "singleton",
    "size",
    "some",
    "subset",
    "toArray",
    "toggle",
    "union"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
