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
    showNumber: function() {
        return showNumber;
    },
    struct: function() {
        return struct;
    },
    tuple: function() {
        return tuple;
    },
    showString: function() {
        return showString;
    },
    getTupleShow: function() {
        return getTupleShow;
    },
    showBoolean: function() {
        return showBoolean;
    },
    getStructShow: function() {
        return getStructShow;
    }
});
var external_internal_js_namespaceObject = require("./internal.js");
var struct = function(shows) {
    return {
        show: function(a) {
            var s = '{';
            for(var k in shows)if (external_internal_js_namespaceObject.has.call(shows, k)) s += " ".concat(k, ": ").concat(shows[k].show(a[k]), ",");
            if (s.length > 1) s = s.slice(0, -1) + ' ';
            s += '}';
            return s;
        }
    };
};
var tuple = function() {
    for(var _len = arguments.length, shows = new Array(_len), _key = 0; _key < _len; _key++)shows[_key] = arguments[_key];
    return {
        show: function(t) {
            return "[".concat(t.map(function(a, i) {
                return shows[i].show(a);
            }).join(', '), "]");
        }
    };
};
var getTupleShow = tuple;
var getStructShow = struct;
var showBoolean = {
    show: function(a) {
        return JSON.stringify(a);
    }
};
var showString = {
    show: function(a) {
        return JSON.stringify(a);
    }
};
var showNumber = {
    show: function(a) {
        return JSON.stringify(a);
    }
};
exports.getStructShow = __webpack_exports__.getStructShow;
exports.getTupleShow = __webpack_exports__.getTupleShow;
exports.showBoolean = __webpack_exports__.showBoolean;
exports.showNumber = __webpack_exports__.showNumber;
exports.showString = __webpack_exports__.showString;
exports.struct = __webpack_exports__.struct;
exports.tuple = __webpack_exports__.tuple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getStructShow",
    "getTupleShow",
    "showBoolean",
    "showNumber",
    "showString",
    "struct",
    "tuple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
