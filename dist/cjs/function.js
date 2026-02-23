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
    SK: function() {
        return SK;
    },
    absurd: function() {
        return absurd;
    },
    apply: function() {
        return apply;
    },
    constFalse: function() {
        return constFalse;
    },
    constNull: function() {
        return constNull;
    },
    constTrue: function() {
        return constTrue;
    },
    constUndefined: function() {
        return constUndefined;
    },
    constVoid: function() {
        return constVoid;
    },
    constant: function() {
        return constant;
    },
    decrement: function() {
        return decrement;
    },
    dual: function() {
        return dual;
    },
    flip: function() {
        return flip;
    },
    flow: function() {
        return flow;
    },
    getBooleanAlgebra: function() {
        return getBooleanAlgebra;
    },
    getEndomorphismMonoid: function() {
        return getEndomorphismMonoid;
    },
    getMonoid: function() {
        return getMonoid;
    },
    getRing: function() {
        return getRing;
    },
    getSemigroup: function() {
        return getSemigroup;
    },
    getSemiring: function() {
        return getSemiring;
    },
    hole: function() {
        return hole;
    },
    identity: function() {
        return identity;
    },
    increment: function() {
        return increment;
    },
    not: function() {
        return not;
    },
    pipe: function() {
        return pipe;
    },
    tuple: function() {
        return tuple;
    },
    tupled: function() {
        return tupled;
    },
    unsafeCoerce: function() {
        return unsafeCoerce;
    },
    untupled: function() {
        return untupled;
    }
});
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if ("u" > typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var getBooleanAlgebra = function(B) {
    return function() {
        return {
            meet: function(x, y) {
                return function(a) {
                    return B.meet(x(a), y(a));
                };
            },
            join: function(x, y) {
                return function(a) {
                    return B.join(x(a), y(a));
                };
            },
            zero: function() {
                return B.zero;
            },
            one: function() {
                return B.one;
            },
            implies: function(x, y) {
                return function(a) {
                    return B.implies(x(a), y(a));
                };
            },
            not: function(x) {
                return function(a) {
                    return B.not(x(a));
                };
            }
        };
    };
};
var getSemigroup = function(S) {
    return function() {
        return {
            concat: function(f, g) {
                return function(a) {
                    return S.concat(f(a), g(a));
                };
            }
        };
    };
};
var getMonoid = function(M) {
    var getSemigroupM = getSemigroup(M);
    return function() {
        return {
            concat: getSemigroupM().concat,
            empty: function() {
                return M.empty;
            }
        };
    };
};
var getSemiring = function(S) {
    return {
        add: function(f, g) {
            return function(x) {
                return S.add(f(x), g(x));
            };
        },
        zero: function() {
            return S.zero;
        },
        mul: function(f, g) {
            return function(x) {
                return S.mul(f(x), g(x));
            };
        },
        one: function() {
            return S.one;
        }
    };
};
var getRing = function(R) {
    var S = getSemiring(R);
    return {
        add: S.add,
        mul: S.mul,
        one: S.one,
        zero: S.zero,
        sub: function(f, g) {
            return function(x) {
                return R.sub(f(x), g(x));
            };
        }
    };
};
var apply = function(a) {
    return function(f) {
        return f(a);
    };
};
function identity(a) {
    return a;
}
var unsafeCoerce = identity;
function constant(a) {
    return function() {
        return a;
    };
}
var constTrue = /*#__PURE__*/ constant(true);
var constFalse = /*#__PURE__*/ constant(false);
var constNull = /*#__PURE__*/ constant(null);
var constUndefined = /*#__PURE__*/ constant(void 0);
var constVoid = constUndefined;
function flip(f) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length > 1) return f(args[1], args[0]);
        return function(a) {
            return f(a)(args[0]);
        };
    };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch(arguments.length){
        case 1:
            return ab;
        case 2:
            return function() {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function() {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function() {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function() {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function() {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function() {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function() {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function() {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
}
function tuple() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++)t[_key] = arguments[_key];
    return t;
}
function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
function tupled(f) {
    return function(a) {
        return f.apply(void 0, _to_consumable_array(a));
    };
}
function untupled(f) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return f(a);
    };
}
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch(arguments.length){
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        default:
            var ret = arguments[0];
            for(var i = 1; i < arguments.length; i++)ret = arguments[i](ret);
            return ret;
    }
}
var hole = absurd;
var SK = function(_, b) {
    return b;
};
function not(predicate) {
    return function(a) {
        return !predicate(a);
    };
}
var getEndomorphismMonoid = function() {
    return {
        concat: function(first, second) {
            return flow(first, second);
        },
        empty: identity
    };
};
var dual = function(arity, body) {
    var isDataFirst = 'number' == typeof arity ? function(args) {
        return args.length >= arity;
    } : arity;
    return function() {
        var args = Array.from(arguments);
        if (isDataFirst(arguments)) return body.apply(this, args);
        return function(self) {
            return body.apply(void 0, [
                self
            ].concat(_to_consumable_array(args)));
        };
    };
};
exports.SK = __webpack_exports__.SK;
exports.absurd = __webpack_exports__.absurd;
exports.apply = __webpack_exports__.apply;
exports.constFalse = __webpack_exports__.constFalse;
exports.constNull = __webpack_exports__.constNull;
exports.constTrue = __webpack_exports__.constTrue;
exports.constUndefined = __webpack_exports__.constUndefined;
exports.constVoid = __webpack_exports__.constVoid;
exports.constant = __webpack_exports__.constant;
exports.decrement = __webpack_exports__.decrement;
exports.dual = __webpack_exports__.dual;
exports.flip = __webpack_exports__.flip;
exports.flow = __webpack_exports__.flow;
exports.getBooleanAlgebra = __webpack_exports__.getBooleanAlgebra;
exports.getEndomorphismMonoid = __webpack_exports__.getEndomorphismMonoid;
exports.getMonoid = __webpack_exports__.getMonoid;
exports.getRing = __webpack_exports__.getRing;
exports.getSemigroup = __webpack_exports__.getSemigroup;
exports.getSemiring = __webpack_exports__.getSemiring;
exports.hole = __webpack_exports__.hole;
exports.identity = __webpack_exports__.identity;
exports.increment = __webpack_exports__.increment;
exports.not = __webpack_exports__.not;
exports.pipe = __webpack_exports__.pipe;
exports.tuple = __webpack_exports__.tuple;
exports.tupled = __webpack_exports__.tupled;
exports.unsafeCoerce = __webpack_exports__.unsafeCoerce;
exports.untupled = __webpack_exports__.untupled;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "SK",
    "absurd",
    "apply",
    "constFalse",
    "constNull",
    "constTrue",
    "constUndefined",
    "constVoid",
    "constant",
    "decrement",
    "dual",
    "flip",
    "flow",
    "getBooleanAlgebra",
    "getEndomorphismMonoid",
    "getMonoid",
    "getRing",
    "getSemigroup",
    "getSemiring",
    "hole",
    "identity",
    "increment",
    "not",
    "pipe",
    "tuple",
    "tupled",
    "unsafeCoerce",
    "untupled"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
