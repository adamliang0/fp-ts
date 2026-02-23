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
    fromReadonlyArray: function() {
        return fromReadonlyArray;
    },
    toReadonlyArray: function() {
        return toReadonlyArray;
    },
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
    insert: function() {
        return insert;
    },
    isEmpty: function() {
        return isEmpty;
    },
    intersection: function() {
        return intersection;
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
    remove: function() {
        return remove;
    },
    separate: function() {
        return separate;
    },
    fromSet: function() {
        return fromSet;
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
    toSet: function() {
        return toSet;
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
    empty: function() {
        return empty;
    },
    every: function() {
        return every;
    },
    filter: function() {
        return filter;
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
    getShow: function() {
        return getShow;
    },
    getUnionMonoid: function() {
        return getUnionMonoid;
    },
    getUnionSemigroup: function() {
        return getUnionSemigroup;
    },
    isSubset: function() {
        return isSubset;
    },
    getDifferenceMagma: function() {
        return getDifferenceMagma;
    }
});
var external_Eq_js_namespaceObject = require("./Eq.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Predicate_js_namespaceObject = require("./Predicate.js");
var external_Separated_js_namespaceObject = require("./Separated.js");
var fromSet = function(s) {
    return new Set(s);
};
var singleton = function(a) {
    return new Set([
        a
    ]);
};
var fromReadonlyArray = function(E) {
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
function toSet(s) {
    return new Set(s);
}
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
        if (isEmpty(me) || isEmpty(that)) return empty;
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
function reduce(O) {
    var toReadonlyArrayO = toReadonlyArray(O);
    return function(b, f) {
        return function(fa) {
            return toReadonlyArrayO(fa).reduce(f, b);
        };
    };
}
function foldMap(O, M) {
    var toReadonlyArrayO = toReadonlyArray(O);
    return function(f) {
        return function(fa) {
            return toReadonlyArrayO(fa).reduce(function(b, a) {
                return M.concat(b, f(a));
            }, M.empty);
        };
    };
}
var reduceRight = function(O) {
    var toReadonlyArrayO = toReadonlyArray(O);
    return function(b, f) {
        return function(fa) {
            return toReadonlyArrayO(fa).reduceRight(function(b, a) {
                return f(a, b);
            }, b);
        };
    };
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
var some = function(predicate) {
    return function(set) {
        var values = set.values();
        var e;
        var found = false;
        while(!found && !(e = values.next()).done)found = predicate(e.value);
        return found;
    };
};
function every(predicate) {
    return (0, external_Predicate_js_namespaceObject.not)(some((0, external_Predicate_js_namespaceObject.not)(predicate)));
}
function isSubset(E) {
    var elemE = elem(E);
    return function(me, that) {
        if (void 0 === that) {
            var isSubsetE = isSubset(E);
            return function(that) {
                return isSubsetE(that, me);
            };
        }
        return every(function(a) {
            return elemE(a, that);
        })(me);
    };
}
function elem(E) {
    return function(a, set) {
        if (void 0 === set) {
            var elemE = elem(E);
            return function(set) {
                return elemE(a, set);
            };
        }
        var values = set.values();
        var e;
        var found = false;
        while(!found && !(e = values.next()).done)found = E.equals(a, e.value);
        return found;
    };
}
var toReadonlyArray = function(O) {
    return function(set) {
        var out = [];
        set.forEach(function(e) {
            return out.push(e);
        });
        return out.sort(O.compare);
    };
};
var URI = 'ReadonlySet';
function getShow(S) {
    return {
        show: function(s) {
            var entries = [];
            s.forEach(function(a) {
                entries.push(S.show(a));
            });
            return "new Set([".concat(entries.sort().join(', '), "])");
        }
    };
}
function getEq(E) {
    var subsetE = isSubset(E);
    return (0, external_Eq_js_namespaceObject.fromEquals)(function(x, y) {
        return subsetE(x, y) && subsetE(y, x);
    });
}
var getUnionSemigroup = function(E) {
    return {
        concat: union(E)
    };
};
var getUnionMonoid = function(E) {
    return {
        concat: getUnionSemigroup(E).concat,
        empty: empty
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
var fromArray = fromReadonlyArray;
exports.URI = __webpack_exports__.URI;
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
exports.fromReadonlyArray = __webpack_exports__.fromReadonlyArray;
exports.fromSet = __webpack_exports__.fromSet;
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
exports.toReadonlyArray = __webpack_exports__.toReadonlyArray;
exports.toSet = __webpack_exports__.toSet;
exports.toggle = __webpack_exports__.toggle;
exports.union = __webpack_exports__.union;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "URI",
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
    "fromReadonlyArray",
    "fromSet",
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
    "toReadonlyArray",
    "toSet",
    "toggle",
    "union"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
