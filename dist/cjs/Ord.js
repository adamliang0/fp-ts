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
    fromCompare: function() {
        return fromCompare;
    },
    equals: function() {
        return equals;
    },
    Contravariant: function() {
        return Contravariant;
    },
    clamp: function() {
        return clamp;
    },
    lt: function() {
        return lt;
    },
    geq: function() {
        return geq;
    },
    min: function() {
        return min;
    },
    getMonoid: function() {
        return getMonoid;
    },
    ordNumber: function() {
        return ordNumber;
    },
    ordString: function() {
        return ordString;
    },
    ord: function() {
        return ord;
    },
    ordDate: function() {
        return ordDate;
    },
    trivial: function() {
        return trivial;
    },
    leq: function() {
        return leq;
    },
    between: function() {
        return between;
    },
    equalsDefault: function() {
        return equalsDefault;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    ordBoolean: function() {
        return ordBoolean;
    },
    getTupleOrd: function() {
        return getTupleOrd;
    },
    gt: function() {
        return gt;
    },
    URI: function() {
        return URI;
    },
    reverse: function() {
        return reverse;
    },
    tuple: function() {
        return tuple;
    },
    getDualOrd: function() {
        return getDualOrd;
    },
    max: function() {
        return max;
    },
    contramap: function() {
        return contramap;
    }
});
var external_Eq_js_namespaceObject = require("./Eq.js");
var external_function_js_namespaceObject = require("./function.js");
var equalsDefault = function(compare) {
    return function(first, second) {
        return first === second || 0 === compare(first, second);
    };
};
var fromCompare = function(compare) {
    return {
        equals: equalsDefault(compare),
        compare: function(first, second) {
            return first === second ? 0 : compare(first, second);
        }
    };
};
var tuple = function() {
    for(var _len = arguments.length, ords = new Array(_len), _key = 0; _key < _len; _key++)ords[_key] = arguments[_key];
    return fromCompare(function(first, second) {
        var i = 0;
        for(; i < ords.length - 1; i++){
            var r = ords[i].compare(first[i], second[i]);
            if (0 !== r) return r;
        }
        return ords[i].compare(first[i], second[i]);
    });
};
var reverse = function(O) {
    return fromCompare(function(first, second) {
        return O.compare(second, first);
    });
};
var contramap_ = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, contramap(f));
};
var contramap = function(f) {
    return function(fa) {
        return fromCompare(function(first, second) {
            return fa.compare(f(first), f(second));
        });
    };
};
var URI = 'Ord';
var getSemigroup = function() {
    return {
        concat: function(first, second) {
            return fromCompare(function(a, b) {
                var ox = first.compare(a, b);
                return 0 !== ox ? ox : second.compare(a, b);
            });
        }
    };
};
var getMonoid = function() {
    return {
        concat: getSemigroup().concat,
        empty: fromCompare(function() {
            return 0;
        })
    };
};
var Contravariant = {
    URI: URI,
    contramap: contramap_
};
var trivial = {
    equals: external_function_js_namespaceObject.constTrue,
    compare: /*#__PURE__*/ (0, external_function_js_namespaceObject.constant)(0)
};
var equals = function(O) {
    return function(second) {
        return function(first) {
            return first === second || 0 === O.compare(first, second);
        };
    };
};
var lt = function(O) {
    return function(first, second) {
        return -1 === O.compare(first, second);
    };
};
var gt = function(O) {
    return function(first, second) {
        return 1 === O.compare(first, second);
    };
};
var leq = function(O) {
    return function(first, second) {
        return 1 !== O.compare(first, second);
    };
};
var geq = function(O) {
    return function(first, second) {
        return -1 !== O.compare(first, second);
    };
};
var min = function(O) {
    return function(first, second) {
        return first === second || O.compare(first, second) < 1 ? first : second;
    };
};
var max = function(O) {
    return function(first, second) {
        return first === second || O.compare(first, second) > -1 ? first : second;
    };
};
var clamp = function(O) {
    var minO = min(O);
    var maxO = max(O);
    return function(low, hi) {
        return function(a) {
            return maxO(minO(a, hi), low);
        };
    };
};
var between = function(O) {
    var ltO = lt(O);
    var gtO = gt(O);
    return function(low, hi) {
        return function(a) {
            return !(ltO(a, low) || gtO(a, hi));
        };
    };
};
var getTupleOrd = tuple;
var getDualOrd = reverse;
var ord = Contravariant;
function Ord_compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
var strictOrd = {
    equals: external_Eq_js_namespaceObject.eqStrict.equals,
    compare: Ord_compare
};
var ordBoolean = strictOrd;
var ordString = strictOrd;
var ordNumber = strictOrd;
var ordDate = /*#__PURE__*/ (0, external_function_js_namespaceObject.pipe)(ordNumber, /*#__PURE__*/ contramap(function(date) {
    return date.valueOf();
}));
exports.Contravariant = __webpack_exports__.Contravariant;
exports.URI = __webpack_exports__.URI;
exports.between = __webpack_exports__.between;
exports.clamp = __webpack_exports__.clamp;
exports.contramap = __webpack_exports__.contramap;
exports.equals = __webpack_exports__.equals;
exports.equalsDefault = __webpack_exports__.equalsDefault;
exports.fromCompare = __webpack_exports__.fromCompare;
exports.geq = __webpack_exports__.geq;
exports.getDualOrd = __webpack_exports__.getDualOrd;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getTupleOrd = __webpack_exports__.getTupleOrd;
exports.gt = __webpack_exports__.gt;
exports.leq = __webpack_exports__.leq;
exports.lt = __webpack_exports__.lt;
exports.max = __webpack_exports__.max;
exports.min = __webpack_exports__.min;
exports.ord = __webpack_exports__.ord;
exports.ordBoolean = __webpack_exports__.ordBoolean;
exports.ordDate = __webpack_exports__.ordDate;
exports.ordNumber = __webpack_exports__.ordNumber;
exports.ordString = __webpack_exports__.ordString;
exports.reverse = __webpack_exports__.reverse;
exports.trivial = __webpack_exports__.trivial;
exports.tuple = __webpack_exports__.tuple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Contravariant",
    "URI",
    "between",
    "clamp",
    "contramap",
    "equals",
    "equalsDefault",
    "fromCompare",
    "geq",
    "getDualOrd",
    "getMonoid",
    "getSemigroup",
    "getTupleOrd",
    "gt",
    "leq",
    "lt",
    "max",
    "min",
    "ord",
    "ordBoolean",
    "ordDate",
    "ordNumber",
    "ordString",
    "reverse",
    "trivial",
    "tuple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
