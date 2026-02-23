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
    flatMapEither: function() {
        return flatMapEither;
    },
    emptyRecord: function() {
        return emptyRecord;
    },
    flatMapNullable: function() {
        return flatMapNullable;
    },
    head: function() {
        return head;
    },
    isLeft: function() {
        return isLeft;
    },
    isNone: function() {
        return isNone;
    },
    isSome: function() {
        return isSome;
    },
    liftNullable: function() {
        return liftNullable;
    },
    flatMapReader: function() {
        return flatMapReader;
    },
    liftOption: function() {
        return liftOption;
    },
    none: function() {
        return none;
    },
    left: function() {
        return left;
    },
    right: function() {
        return right;
    },
    isNonEmpty: function() {
        return isNonEmpty;
    },
    fromReadonlyNonEmptyArray: function() {
        return fromReadonlyNonEmptyArray;
    },
    isRight: function() {
        return isRight;
    },
    singleton: function() {
        return singleton;
    },
    flatMapOption: function() {
        return flatMapOption;
    },
    flatMapIO: function() {
        return flatMapIO;
    },
    some: function() {
        return some;
    },
    tail: function() {
        return tail;
    },
    flatMapTask: function() {
        return flatMapTask;
    },
    has: function() {
        return has;
    },
    emptyReadonlyArray: function() {
        return emptyReadonlyArray;
    }
});
var external_function_js_namespaceObject = require("./function.js");
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
var isNone = function(fa) {
    return 'None' === fa._tag;
};
var isSome = function(fa) {
    return 'Some' === fa._tag;
};
var none = {
    _tag: 'None'
};
var some = function(a) {
    return {
        _tag: 'Some',
        value: a
    };
};
var isLeft = function(ma) {
    return 'Left' === ma._tag;
};
var isRight = function(ma) {
    return 'Right' === ma._tag;
};
var left = function(e) {
    return {
        _tag: 'Left',
        left: e
    };
};
var right = function(a) {
    return {
        _tag: 'Right',
        right: a
    };
};
var singleton = function(a) {
    return [
        a
    ];
};
var isNonEmpty = function(as) {
    return as.length > 0;
};
var head = function(as) {
    return as[0];
};
var tail = function(as) {
    return as.slice(1);
};
var emptyReadonlyArray = [];
var emptyRecord = {};
var has = Object.prototype.hasOwnProperty;
var fromReadonlyNonEmptyArray = function(as) {
    return [
        as[0]
    ].concat(_to_consumable_array(as.slice(1)));
};
var liftNullable = function(F) {
    return function(f, onNullable) {
        return function() {
            for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
            var o = f.apply(void 0, _to_consumable_array(a));
            return F.fromEither(null == o ? left(onNullable.apply(void 0, _to_consumable_array(a))) : right(o));
        };
    };
};
var liftOption = function(F) {
    return function(f, onNone) {
        return function() {
            for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
            var o = f.apply(void 0, _to_consumable_array(a));
            return F.fromEither(isNone(o) ? left(onNone.apply(void 0, _to_consumable_array(a))) : right(o.value));
        };
    };
};
var flatMapNullable = function(F, M) {
    return /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(3, function(self, f, onNullable) {
        return M.flatMap(self, liftNullable(F)(f, onNullable));
    });
};
var flatMapOption = function(F, M) {
    return /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(3, function(self, f, onNone) {
        return M.flatMap(self, liftOption(F)(f, onNone));
    });
};
var flatMapEither = function(F, M) {
    return /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
        return M.flatMap(self, function(a) {
            return F.fromEither(f(a));
        });
    });
};
var flatMapIO = function(F, M) {
    return /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
        return M.flatMap(self, function(a) {
            return F.fromIO(f(a));
        });
    });
};
var flatMapTask = function(F, M) {
    return /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
        return M.flatMap(self, function(a) {
            return F.fromTask(f(a));
        });
    });
};
var flatMapReader = function(F, M) {
    return /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
        return M.flatMap(self, function(a) {
            return F.fromReader(f(a));
        });
    });
};
exports.emptyReadonlyArray = __webpack_exports__.emptyReadonlyArray;
exports.emptyRecord = __webpack_exports__.emptyRecord;
exports.flatMapEither = __webpack_exports__.flatMapEither;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatMapNullable = __webpack_exports__.flatMapNullable;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatMapReader = __webpack_exports__.flatMapReader;
exports.flatMapTask = __webpack_exports__.flatMapTask;
exports.fromReadonlyNonEmptyArray = __webpack_exports__.fromReadonlyNonEmptyArray;
exports.has = __webpack_exports__.has;
exports.head = __webpack_exports__.head;
exports.isLeft = __webpack_exports__.isLeft;
exports.isNonEmpty = __webpack_exports__.isNonEmpty;
exports.isNone = __webpack_exports__.isNone;
exports.isRight = __webpack_exports__.isRight;
exports.isSome = __webpack_exports__.isSome;
exports.left = __webpack_exports__.left;
exports.liftNullable = __webpack_exports__.liftNullable;
exports.liftOption = __webpack_exports__.liftOption;
exports.none = __webpack_exports__.none;
exports.right = __webpack_exports__.right;
exports.singleton = __webpack_exports__.singleton;
exports.some = __webpack_exports__.some;
exports.tail = __webpack_exports__.tail;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "emptyReadonlyArray",
    "emptyRecord",
    "flatMapEither",
    "flatMapIO",
    "flatMapNullable",
    "flatMapOption",
    "flatMapReader",
    "flatMapTask",
    "fromReadonlyNonEmptyArray",
    "has",
    "head",
    "isLeft",
    "isNonEmpty",
    "isNone",
    "isRight",
    "isSome",
    "left",
    "liftNullable",
    "liftOption",
    "none",
    "right",
    "singleton",
    "some",
    "tail"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
