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
    Eq: function() {
        return Eq;
    },
    slice: function() {
        return slice;
    },
    toLowerCase: function() {
        return toLowerCase;
    },
    trimLeft: function() {
        return trimLeft;
    },
    trimRight: function() {
        return trimRight;
    },
    toUpperCase: function() {
        return toUpperCase;
    },
    trim: function() {
        return trim;
    },
    Show: function() {
        return Show;
    },
    empty: function() {
        return empty;
    },
    Ord: function() {
        return Ord;
    },
    includes: function() {
        return includes;
    },
    Monoid: function() {
        return Monoid;
    },
    isEmpty: function() {
        return isEmpty;
    },
    replace: function() {
        return replace;
    },
    size: function() {
        return size;
    },
    endsWith: function() {
        return endsWith;
    },
    startsWith: function() {
        return startsWith;
    },
    Semigroup: function() {
        return Semigroup;
    },
    split: function() {
        return split;
    },
    isString: function() {
        return isString;
    }
});
var external_ReadonlyNonEmptyArray_js_namespaceObject = require("./ReadonlyNonEmptyArray.js");
var Eq = {
    equals: function(first, second) {
        return first === second;
    }
};
var Semigroup = {
    concat: function(first, second) {
        return first + second;
    }
};
var empty = '';
var Monoid = {
    concat: Semigroup.concat,
    empty: empty
};
var Ord = {
    equals: Eq.equals,
    compare: function(first, second) {
        return first < second ? -1 : first > second ? 1 : 0;
    }
};
var Show = {
    show: function(s) {
        return JSON.stringify(s);
    }
};
var isString = function(u) {
    return 'string' == typeof u;
};
var toUpperCase = function(s) {
    return s.toUpperCase();
};
var toLowerCase = function(s) {
    return s.toLowerCase();
};
var replace = function(searchValue, replaceValue) {
    return function(s) {
        return s.replace(searchValue, replaceValue);
    };
};
var trim = function(s) {
    return s.trim();
};
var trimLeft = function(s) {
    return s.trimLeft();
};
var trimRight = function(s) {
    return s.trimRight();
};
var slice = function(start, end) {
    return function(s) {
        return s.slice(start, end);
    };
};
var isEmpty = function(s) {
    return 0 === s.length;
};
var size = function(s) {
    return s.length;
};
var split = function(separator) {
    return function(s) {
        var out = s.split(separator);
        return (0, external_ReadonlyNonEmptyArray_js_namespaceObject.isNonEmpty)(out) ? out : [
            s
        ];
    };
};
var includes = function(searchString, position) {
    return function(s) {
        return s.includes(searchString, position);
    };
};
var startsWith = function(searchString, position) {
    return function(s) {
        return s.startsWith(searchString, position);
    };
};
var endsWith = function(searchString, position) {
    return function(s) {
        return s.endsWith(searchString, position);
    };
};
exports.Eq = __webpack_exports__.Eq;
exports.Monoid = __webpack_exports__.Monoid;
exports.Ord = __webpack_exports__.Ord;
exports.Semigroup = __webpack_exports__.Semigroup;
exports.Show = __webpack_exports__.Show;
exports.empty = __webpack_exports__.empty;
exports.endsWith = __webpack_exports__.endsWith;
exports.includes = __webpack_exports__.includes;
exports.isEmpty = __webpack_exports__.isEmpty;
exports.isString = __webpack_exports__.isString;
exports.replace = __webpack_exports__.replace;
exports.size = __webpack_exports__.size;
exports.slice = __webpack_exports__.slice;
exports.split = __webpack_exports__.split;
exports.startsWith = __webpack_exports__.startsWith;
exports.toLowerCase = __webpack_exports__.toLowerCase;
exports.toUpperCase = __webpack_exports__.toUpperCase;
exports.trim = __webpack_exports__.trim;
exports.trimLeft = __webpack_exports__.trimLeft;
exports.trimRight = __webpack_exports__.trimRight;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Eq",
    "Monoid",
    "Ord",
    "Semigroup",
    "Show",
    "empty",
    "endsWith",
    "includes",
    "isEmpty",
    "isString",
    "replace",
    "size",
    "slice",
    "split",
    "startsWith",
    "toLowerCase",
    "toUpperCase",
    "trim",
    "trimLeft",
    "trimRight"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
