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
    partitionMap: function() {
        return partitionMap;
    },
    partitionMapWithIndex: function() {
        return partitionMapWithIndex;
    },
    pipeable: function() {
        return pipeable;
    },
    alt: function() {
        return alt;
    },
    reduce: function() {
        return reduce;
    },
    mapWithIndex: function() {
        return mapWithIndex;
    },
    compose: function() {
        return compose;
    },
    reduceRightWithIndex: function() {
        return reduceRightWithIndex;
    },
    map: function() {
        return map;
    },
    extend: function() {
        return extend;
    },
    reduceWithIndex: function() {
        return reduceWithIndex;
    },
    partitionWithIndex: function() {
        return partitionWithIndex;
    },
    partition: function() {
        return partition;
    },
    reduceRight: function() {
        return reduceRight;
    },
    mapLeft: function() {
        return mapLeft;
    },
    promap: function() {
        return promap;
    },
    pipe: function() {
        return pipe;
    },
    filter: function() {
        return filter;
    },
    filterMapWithIndex: function() {
        return filterMapWithIndex;
    },
    foldMap: function() {
        return foldMap;
    },
    bimap: function() {
        return bimap;
    },
    foldMapWithIndex: function() {
        return foldMapWithIndex;
    },
    chain: function() {
        return chain;
    },
    filterMap: function() {
        return filterMap;
    },
    ap: function() {
        return ap;
    },
    filterWithIndex: function() {
        return filterWithIndex;
    },
    contramap: function() {
        return contramap;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_function_js_namespaceObject = require("./function.js");
function map(F) {
    return function(f) {
        return function(fa) {
            return F.map(fa, f);
        };
    };
}
function contramap(F) {
    return function(f) {
        return function(fa) {
            return F.contramap(fa, f);
        };
    };
}
function mapWithIndex(F) {
    return function(f) {
        return function(fa) {
            return F.mapWithIndex(fa, f);
        };
    };
}
function ap(F) {
    return function(fa) {
        return function(fab) {
            return F.ap(fab, fa);
        };
    };
}
function chain(F) {
    return function(f) {
        return function(fa) {
            return F.chain(fa, f);
        };
    };
}
function bimap(F) {
    return function(f, g) {
        return function(fea) {
            return F.bimap(fea, f, g);
        };
    };
}
function mapLeft(F) {
    return function(f) {
        return function(fea) {
            return F.mapLeft(fea, f);
        };
    };
}
function extend(F) {
    return function(f) {
        return function(wa) {
            return F.extend(wa, f);
        };
    };
}
function reduce(F) {
    return function(b, f) {
        return function(fa) {
            return F.reduce(fa, b, f);
        };
    };
}
function foldMap(F) {
    return function(M) {
        var foldMapM = F.foldMap(M);
        return function(f) {
            return function(fa) {
                return foldMapM(fa, f);
            };
        };
    };
}
function reduceRight(F) {
    return function(b, f) {
        return function(fa) {
            return F.reduceRight(fa, b, f);
        };
    };
}
function reduceWithIndex(F) {
    return function(b, f) {
        return function(fa) {
            return F.reduceWithIndex(fa, b, f);
        };
    };
}
function foldMapWithIndex(F) {
    return function(M) {
        var foldMapWithIndexM = F.foldMapWithIndex(M);
        return function(f) {
            return function(fa) {
                return foldMapWithIndexM(fa, f);
            };
        };
    };
}
function reduceRightWithIndex(F) {
    return function(b, f) {
        return function(fa) {
            return F.reduceRightWithIndex(fa, b, f);
        };
    };
}
function alt(F) {
    return function(that) {
        return function(fa) {
            return F.alt(fa, that);
        };
    };
}
function filter(F) {
    return function(predicate) {
        return function(fa) {
            return F.filter(fa, predicate);
        };
    };
}
function filterMap(F) {
    return function(f) {
        return function(fa) {
            return F.filterMap(fa, f);
        };
    };
}
function partition(F) {
    return function(f) {
        return function(fa) {
            return F.partition(fa, f);
        };
    };
}
function partitionMap(F) {
    return function(f) {
        return function(fa) {
            return F.partitionMap(fa, f);
        };
    };
}
function filterWithIndex(F) {
    return function(predicate) {
        return function(fa) {
            return F.filterWithIndex(fa, predicate);
        };
    };
}
function filterMapWithIndex(F) {
    return function(f) {
        return function(fa) {
            return F.filterMapWithIndex(fa, f);
        };
    };
}
function partitionWithIndex(F) {
    return function(f) {
        return function(fa) {
            return F.partitionWithIndex(fa, f);
        };
    };
}
function partitionMapWithIndex(F) {
    return function(f) {
        return function(fa) {
            return F.partitionMapWithIndex(fa, f);
        };
    };
}
function promap(F) {
    return function(f, g) {
        return function(fbc) {
            return F.promap(fbc, f, g);
        };
    };
}
function compose(F) {
    return function(ea) {
        return function(ab) {
            return F.compose(ab, ea);
        };
    };
}
var isFunctor = function(I) {
    return 'function' == typeof I.map;
};
var isContravariant = function(I) {
    return 'function' == typeof I.contramap;
};
var isFunctorWithIndex = function(I) {
    return 'function' == typeof I.mapWithIndex;
};
var isApply = function(I) {
    return 'function' == typeof I.ap;
};
var isChain = function(I) {
    return 'function' == typeof I.chain;
};
var isBifunctor = function(I) {
    return 'function' == typeof I.bimap;
};
var isExtend = function(I) {
    return 'function' == typeof I.extend;
};
var isFoldable = function(I) {
    return 'function' == typeof I.reduce;
};
var isFoldableWithIndex = function(I) {
    return 'function' == typeof I.reduceWithIndex;
};
var isAlt = function(I) {
    return 'function' == typeof I.alt;
};
var isCompactable = function(I) {
    return 'function' == typeof I.compact;
};
var isFilterable = function(I) {
    return 'function' == typeof I.filter;
};
var isFilterableWithIndex = function(I) {
    return 'function' == typeof I.filterWithIndex;
};
var isProfunctor = function(I) {
    return 'function' == typeof I.promap;
};
var isSemigroupoid = function(I) {
    return 'function' == typeof I.compose;
};
var isMonadThrow = function(I) {
    return 'function' == typeof I.throwError;
};
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) r.map = map(I);
    if (isContravariant(I)) r.contramap = contramap(I);
    if (isFunctorWithIndex(I)) r.mapWithIndex = mapWithIndex(I);
    if (isApply(I)) {
        r.ap = ap(I);
        r.apFirst = (0, external_Apply_js_namespaceObject.apFirst)(I);
        r.apSecond = (0, external_Apply_js_namespaceObject.apSecond)(I);
    }
    if (isChain(I)) {
        r.chain = chain(I);
        r.chainFirst = (0, external_Chain_js_namespaceObject.chainFirst)(I);
        r.flatten = r.chain(external_function_js_namespaceObject.identity);
    }
    if (isBifunctor(I)) {
        r.bimap = bimap(I);
        r.mapLeft = mapLeft(I);
    }
    if (isExtend(I)) {
        r.extend = extend(I);
        r.duplicate = r.extend(external_function_js_namespaceObject.identity);
    }
    if (isFoldable(I)) {
        r.reduce = reduce(I);
        r.foldMap = foldMap(I);
        r.reduceRight = reduceRight(I);
    }
    if (isFoldableWithIndex(I)) {
        r.reduceWithIndex = reduceWithIndex(I);
        r.foldMapWithIndex = foldMapWithIndex(I);
        r.reduceRightWithIndex = reduceRightWithIndex(I);
    }
    if (isAlt(I)) r.alt = alt(I);
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        r.filter = filter(I);
        r.filterMap = filterMap(I);
        r.partition = partition(I);
        r.partitionMap = partitionMap(I);
    }
    if (isFilterableWithIndex(I)) {
        r.filterWithIndex = filterWithIndex(I);
        r.filterMapWithIndex = filterMapWithIndex(I);
        r.partitionWithIndex = partitionWithIndex(I);
        r.partitionMapWithIndex = partitionMapWithIndex(I);
    }
    if (isProfunctor(I)) r.promap = promap(I);
    if (isSemigroupoid(I)) r.compose = compose(I);
    if (isMonadThrow(I)) {
        var fromOption = function(onNone) {
            return function(ma) {
                return 'None' === ma._tag ? I.throwError(onNone()) : I.of(ma.value);
            };
        };
        var fromEither = function(ma) {
            return 'Left' === ma._tag ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function(predicate, onFalse) {
            return function(a) {
                return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
            };
        };
        var filterOrElse = function(predicate, onFalse) {
            return function(ma) {
                return I.chain(ma, function(a) {
                    return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
                });
            };
        };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
var pipe = external_function_js_namespaceObject.pipe;
exports.alt = __webpack_exports__.alt;
exports.ap = __webpack_exports__.ap;
exports.bimap = __webpack_exports__.bimap;
exports.chain = __webpack_exports__.chain;
exports.compose = __webpack_exports__.compose;
exports.contramap = __webpack_exports__.contramap;
exports.extend = __webpack_exports__.extend;
exports.filter = __webpack_exports__.filter;
exports.filterMap = __webpack_exports__.filterMap;
exports.filterMapWithIndex = __webpack_exports__.filterMapWithIndex;
exports.filterWithIndex = __webpack_exports__.filterWithIndex;
exports.foldMap = __webpack_exports__.foldMap;
exports.foldMapWithIndex = __webpack_exports__.foldMapWithIndex;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.mapWithIndex = __webpack_exports__.mapWithIndex;
exports.partition = __webpack_exports__.partition;
exports.partitionMap = __webpack_exports__.partitionMap;
exports.partitionMapWithIndex = __webpack_exports__.partitionMapWithIndex;
exports.partitionWithIndex = __webpack_exports__.partitionWithIndex;
exports.pipe = __webpack_exports__.pipe;
exports.pipeable = __webpack_exports__.pipeable;
exports.promap = __webpack_exports__.promap;
exports.reduce = __webpack_exports__.reduce;
exports.reduceRight = __webpack_exports__.reduceRight;
exports.reduceRightWithIndex = __webpack_exports__.reduceRightWithIndex;
exports.reduceWithIndex = __webpack_exports__.reduceWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "alt",
    "ap",
    "bimap",
    "chain",
    "compose",
    "contramap",
    "extend",
    "filter",
    "filterMap",
    "filterMapWithIndex",
    "filterWithIndex",
    "foldMap",
    "foldMapWithIndex",
    "map",
    "mapLeft",
    "mapWithIndex",
    "partition",
    "partitionMap",
    "partitionMapWithIndex",
    "partitionWithIndex",
    "pipe",
    "pipeable",
    "promap",
    "reduce",
    "reduceRight",
    "reduceRightWithIndex",
    "reduceWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
