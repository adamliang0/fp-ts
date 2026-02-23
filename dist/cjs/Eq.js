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
    getTupleEq: function() {
        return getTupleEq;
    },
    eqBoolean: function() {
        return eqBoolean;
    },
    Contravariant: function() {
        return Contravariant;
    },
    eqNumber: function() {
        return eqNumber;
    },
    eqString: function() {
        return eqString;
    },
    struct: function() {
        return struct;
    },
    getMonoid: function() {
        return getMonoid;
    },
    fromEquals: function() {
        return fromEquals;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    getStructEq: function() {
        return getStructEq;
    },
    eqDate: function() {
        return eqDate;
    },
    strictEqual: function() {
        return strictEqual;
    },
    URI: function() {
        return URI;
    },
    eq: function() {
        return eq;
    },
    tuple: function() {
        return tuple;
    },
    eqStrict: function() {
        return eqStrict;
    },
    contramap: function() {
        return contramap;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var fromEquals = function(equals) {
    return {
        equals: function(x, y) {
            return x === y || equals(x, y);
        }
    };
};
var struct = function(eqs) {
    return fromEquals(function(first, second) {
        for(var key in eqs)if (!eqs[key].equals(first[key], second[key])) return false;
        return true;
    });
};
var tuple = function() {
    for(var _len = arguments.length, eqs = new Array(_len), _key = 0; _key < _len; _key++)eqs[_key] = arguments[_key];
    return fromEquals(function(first, second) {
        return eqs.every(function(E, i) {
            return E.equals(first[i], second[i]);
        });
    });
};
var contramap_ = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, contramap(f));
};
var contramap = function(f) {
    return function(fa) {
        return fromEquals(function(x, y) {
            return fa.equals(f(x), f(y));
        });
    };
};
var URI = 'Eq';
var eqStrict = {
    equals: function(a, b) {
        return a === b;
    }
};
var empty = {
    equals: function() {
        return true;
    }
};
var getSemigroup = function() {
    return {
        concat: function(x, y) {
            return fromEquals(function(a, b) {
                return x.equals(a, b) && y.equals(a, b);
            });
        }
    };
};
var getMonoid = function() {
    return {
        concat: getSemigroup().concat,
        empty: empty
    };
};
var Contravariant = {
    URI: URI,
    contramap: contramap_
};
var getTupleEq = tuple;
var getStructEq = struct;
var strictEqual = eqStrict.equals;
var eq = Contravariant;
var eqBoolean = eqStrict;
var eqString = eqStrict;
var eqNumber = eqStrict;
var eqDate = {
    equals: function(first, second) {
        return first.valueOf() === second.valueOf();
    }
};
exports.Contravariant = __webpack_exports__.Contravariant;
exports.URI = __webpack_exports__.URI;
exports.contramap = __webpack_exports__.contramap;
exports.eq = __webpack_exports__.eq;
exports.eqBoolean = __webpack_exports__.eqBoolean;
exports.eqDate = __webpack_exports__.eqDate;
exports.eqNumber = __webpack_exports__.eqNumber;
exports.eqStrict = __webpack_exports__.eqStrict;
exports.eqString = __webpack_exports__.eqString;
exports.fromEquals = __webpack_exports__.fromEquals;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getStructEq = __webpack_exports__.getStructEq;
exports.getTupleEq = __webpack_exports__.getTupleEq;
exports.strictEqual = __webpack_exports__.strictEqual;
exports.struct = __webpack_exports__.struct;
exports.tuple = __webpack_exports__.tuple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Contravariant",
    "URI",
    "contramap",
    "eq",
    "eqBoolean",
    "eqDate",
    "eqNumber",
    "eqStrict",
    "eqString",
    "fromEquals",
    "getMonoid",
    "getSemigroup",
    "getStructEq",
    "getTupleEq",
    "strictEqual",
    "struct",
    "tuple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
