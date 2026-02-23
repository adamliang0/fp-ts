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
    sequenceT: function() {
        return sequenceT;
    },
    apFirst: function() {
        return apFirst;
    },
    apS: function() {
        return apS;
    },
    ap: function() {
        return ap;
    },
    apSecond: function() {
        return apSecond;
    },
    getApplySemigroup: function() {
        return getApplySemigroup;
    },
    sequenceS: function() {
        return sequenceS;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_internal_js_namespaceObject = require("./internal.js");
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
function ap(F, G) {
    return function(fa) {
        return function(fab) {
            return F.ap(F.map(fab, function(gab) {
                return function(ga) {
                    return G.ap(gab, ga);
                };
            }), fa);
        };
    };
}
function apFirst(A) {
    return function(second) {
        return function(first) {
            return A.ap(A.map(first, function(a) {
                return function() {
                    return a;
                };
            }), second);
        };
    };
}
function apSecond(A) {
    return function(second) {
        return function(first) {
            return A.ap(A.map(first, function() {
                return function(b) {
                    return b;
                };
            }), second);
        };
    };
}
function apS(F) {
    return function(name, fb) {
        return function(fa) {
            return F.ap(F.map(fa, function(a) {
                return function(b) {
                    return Object.assign({}, a, _define_property({}, name, b));
                };
            }), fb);
        };
    };
}
function getApplySemigroup(F) {
    return function(S) {
        return {
            concat: function(first, second) {
                return F.ap(F.map(first, function(x) {
                    return function(y) {
                        return S.concat(x, y);
                    };
                }), second);
            }
        };
    };
}
function curried(f, n, acc) {
    return function(x) {
        var combined = Array(acc.length + 1);
        for(var i = 0; i < acc.length; i++)combined[i] = acc[i];
        combined[acc.length] = x;
        return 0 === n ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
}
var tupleConstructors = {
    1: function(a) {
        return [
            a
        ];
    },
    2: function(a) {
        return function(b) {
            return [
                a,
                b
            ];
        };
    },
    3: function(a) {
        return function(b) {
            return function(c) {
                return [
                    a,
                    b,
                    c
                ];
            };
        };
    },
    4: function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return [
                        a,
                        b,
                        c,
                        d
                    ];
                };
            };
        };
    },
    5: function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return [
                            a,
                            b,
                            c,
                            d,
                            e
                        ];
                    };
                };
            };
        };
    }
};
function getTupleConstructor(len) {
    if (!external_internal_js_namespaceObject.has.call(tupleConstructors, len)) tupleConstructors[len] = curried(external_function_js_namespaceObject.tuple, len - 1, []);
    return tupleConstructors[len];
}
function sequenceT(F) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var len = args.length;
        var f = getTupleConstructor(len);
        var fas = F.map(args[0], f);
        for(var i = 1; i < len; i++)fas = F.ap(fas, args[i]);
        return fas;
    };
}
function getRecordConstructor(keys) {
    var len = keys.length;
    switch(len){
        case 1:
            return function(a) {
                return _define_property({}, keys[0], a);
            };
        case 2:
            return function(a) {
                return function(b) {
                    var _obj;
                    return _obj = {}, _define_property(_obj, keys[0], a), _define_property(_obj, keys[1], b), _obj;
                };
            };
        case 3:
            return function(a) {
                return function(b) {
                    return function(c) {
                        var _obj;
                        return _obj = {}, _define_property(_obj, keys[0], a), _define_property(_obj, keys[1], b), _define_property(_obj, keys[2], c), _obj;
                    };
                };
            };
        case 4:
            return function(a) {
                return function(b) {
                    return function(c) {
                        return function(d) {
                            var _obj;
                            return _obj = {}, _define_property(_obj, keys[0], a), _define_property(_obj, keys[1], b), _define_property(_obj, keys[2], c), _define_property(_obj, keys[3], d), _obj;
                        };
                    };
                };
            };
        case 5:
            return function(a) {
                return function(b) {
                    return function(c) {
                        return function(d) {
                            return function(e) {
                                var _obj;
                                return _obj = {}, _define_property(_obj, keys[0], a), _define_property(_obj, keys[1], b), _define_property(_obj, keys[2], c), _define_property(_obj, keys[3], d), _define_property(_obj, keys[4], e), _obj;
                            };
                        };
                    };
                };
            };
        default:
            return curried(function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                var r = {};
                for(var i = 0; i < len; i++)r[keys[i]] = args[i];
                return r;
            }, len - 1, []);
    }
}
function sequenceS(F) {
    return function(r) {
        var keys = Object.keys(r);
        var len = keys.length;
        var f = getRecordConstructor(keys);
        var fr = F.map(r[keys[0]], f);
        for(var i = 1; i < len; i++)fr = F.ap(fr, r[keys[i]]);
        return fr;
    };
}
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apS = __webpack_exports__.apS;
exports.apSecond = __webpack_exports__.apSecond;
exports.getApplySemigroup = __webpack_exports__.getApplySemigroup;
exports.sequenceS = __webpack_exports__.sequenceS;
exports.sequenceT = __webpack_exports__.sequenceT;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ap",
    "apFirst",
    "apS",
    "apSecond",
    "getApplySemigroup",
    "sequenceS",
    "sequenceT"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
