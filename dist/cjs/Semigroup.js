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
    first: function() {
        return Semigroup_first;
    },
    min: function() {
        return min;
    },
    semigroupAll: function() {
        return semigroupAll;
    },
    getDualSemigroup: function() {
        return getDualSemigroup;
    },
    getObjectSemigroup: function() {
        return getObjectSemigroup;
    },
    fold: function() {
        return fold;
    },
    getMeetSemigroup: function() {
        return getMeetSemigroup;
    },
    semigroupAny: function() {
        return semigroupAny;
    },
    getFunctionSemigroup: function() {
        return getFunctionSemigroup;
    },
    semigroupSum: function() {
        return semigroupSum;
    },
    struct: function() {
        return struct;
    },
    getLastSemigroup: function() {
        return getLastSemigroup;
    },
    getStructSemigroup: function() {
        return getStructSemigroup;
    },
    last: function() {
        return last;
    },
    getFirstSemigroup: function() {
        return getFirstSemigroup;
    },
    semigroupString: function() {
        return semigroupString;
    },
    getTupleSemigroup: function() {
        return getTupleSemigroup;
    },
    constant: function() {
        return constant;
    },
    getIntercalateSemigroup: function() {
        return getIntercalateSemigroup;
    },
    reverse: function() {
        return reverse;
    },
    semigroupProduct: function() {
        return semigroupProduct;
    },
    semigroupVoid: function() {
        return semigroupVoid;
    },
    concatAll: function() {
        return concatAll;
    },
    tuple: function() {
        return tuple;
    },
    intercalate: function() {
        return intercalate;
    },
    max: function() {
        return max;
    },
    getJoinSemigroup: function() {
        return getJoinSemigroup;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Magma_js_namespaceObject = require("./Magma.js");
var external_Ord_js_namespaceObject = require("./Ord.js");
var min = function(O) {
    return {
        concat: external_Ord_js_namespaceObject.min(O)
    };
};
var max = function(O) {
    return {
        concat: external_Ord_js_namespaceObject.max(O)
    };
};
var constant = function(a) {
    return {
        concat: function() {
            return a;
        }
    };
};
var reverse = external_Magma_js_namespaceObject.reverse;
var struct = function(semigroups) {
    return {
        concat: function(first, second) {
            var r = {};
            for(var k in semigroups)if (external_internal_js_namespaceObject.has.call(semigroups, k)) r[k] = semigroups[k].concat(first[k], second[k]);
            return r;
        }
    };
};
var tuple = function() {
    for(var _len = arguments.length, semigroups = new Array(_len), _key = 0; _key < _len; _key++)semigroups[_key] = arguments[_key];
    return {
        concat: function(first, second) {
            return semigroups.map(function(s, i) {
                return s.concat(first[i], second[i]);
            });
        }
    };
};
var intercalate = function(middle) {
    return function(S) {
        return {
            concat: function(x, y) {
                return S.concat(x, S.concat(middle, y));
            }
        };
    };
};
var Semigroup_first = function() {
    return {
        concat: external_function_js_namespaceObject.identity
    };
};
var last = function() {
    return {
        concat: function(_, y) {
            return y;
        }
    };
};
var concatAll = external_Magma_js_namespaceObject.concatAll;
var semigroupVoid = constant(void 0);
var getObjectSemigroup = function() {
    return {
        concat: function(first, second) {
            return Object.assign({}, first, second);
        }
    };
};
var getLastSemigroup = last;
var getFirstSemigroup = Semigroup_first;
var getTupleSemigroup = tuple;
var getStructSemigroup = struct;
var getDualSemigroup = reverse;
var getJoinSemigroup = max;
var getMeetSemigroup = min;
var getIntercalateSemigroup = intercalate;
function fold(S) {
    var concatAllS = concatAll(S);
    return function(startWith, as) {
        return void 0 === as ? concatAllS(startWith) : concatAllS(startWith)(as);
    };
}
var semigroupAll = {
    concat: function(x, y) {
        return x && y;
    }
};
var semigroupAny = {
    concat: function(x, y) {
        return x || y;
    }
};
var getFunctionSemigroup = external_function_js_namespaceObject.getSemigroup;
var semigroupString = {
    concat: function(x, y) {
        return x + y;
    }
};
var semigroupSum = {
    concat: function(x, y) {
        return x + y;
    }
};
var semigroupProduct = {
    concat: function(x, y) {
        return x * y;
    }
};
exports.concatAll = __webpack_exports__.concatAll;
exports.constant = __webpack_exports__.constant;
exports.first = __webpack_exports__.first;
exports.fold = __webpack_exports__.fold;
exports.getDualSemigroup = __webpack_exports__.getDualSemigroup;
exports.getFirstSemigroup = __webpack_exports__.getFirstSemigroup;
exports.getFunctionSemigroup = __webpack_exports__.getFunctionSemigroup;
exports.getIntercalateSemigroup = __webpack_exports__.getIntercalateSemigroup;
exports.getJoinSemigroup = __webpack_exports__.getJoinSemigroup;
exports.getLastSemigroup = __webpack_exports__.getLastSemigroup;
exports.getMeetSemigroup = __webpack_exports__.getMeetSemigroup;
exports.getObjectSemigroup = __webpack_exports__.getObjectSemigroup;
exports.getStructSemigroup = __webpack_exports__.getStructSemigroup;
exports.getTupleSemigroup = __webpack_exports__.getTupleSemigroup;
exports.intercalate = __webpack_exports__.intercalate;
exports.last = __webpack_exports__.last;
exports.max = __webpack_exports__.max;
exports.min = __webpack_exports__.min;
exports.reverse = __webpack_exports__.reverse;
exports.semigroupAll = __webpack_exports__.semigroupAll;
exports.semigroupAny = __webpack_exports__.semigroupAny;
exports.semigroupProduct = __webpack_exports__.semigroupProduct;
exports.semigroupString = __webpack_exports__.semigroupString;
exports.semigroupSum = __webpack_exports__.semigroupSum;
exports.semigroupVoid = __webpack_exports__.semigroupVoid;
exports.struct = __webpack_exports__.struct;
exports.tuple = __webpack_exports__.tuple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "concatAll",
    "constant",
    "first",
    "fold",
    "getDualSemigroup",
    "getFirstSemigroup",
    "getFunctionSemigroup",
    "getIntercalateSemigroup",
    "getJoinSemigroup",
    "getLastSemigroup",
    "getMeetSemigroup",
    "getObjectSemigroup",
    "getStructSemigroup",
    "getTupleSemigroup",
    "intercalate",
    "last",
    "max",
    "min",
    "reverse",
    "semigroupAll",
    "semigroupAny",
    "semigroupProduct",
    "semigroupString",
    "semigroupSum",
    "semigroupVoid",
    "struct",
    "tuple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
