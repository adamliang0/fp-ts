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
    now: function() {
        return now;
    },
    eqMonth: function() {
        return eqMonth;
    },
    create: function() {
        return create;
    },
    Ord: function() {
        return Ord;
    },
    eqDate: function() {
        return eqDate;
    },
    eqYear: function() {
        return eqYear;
    }
});
var external_function_js_namespaceObject = require("./function.js");
var external_number_js_namespaceObject = require("./number.js");
var external_Ord_js_namespaceObject = require("./Ord.js");
var Eq = {
    equals: function(first, second) {
        return first.valueOf() === second.valueOf();
    }
};
var eqDate = {
    equals: function(x, y) {
        return x.getDate() === y.getDate();
    }
};
var eqMonth = {
    equals: function(x, y) {
        return x.getMonth() === y.getMonth();
    }
};
var eqYear = {
    equals: function(x, y) {
        return x.getFullYear() === y.getFullYear();
    }
};
var Ord = /*#__PURE__*/ (0, external_function_js_namespaceObject.pipe)(external_number_js_namespaceObject.Ord, /*#__PURE__*/ external_Ord_js_namespaceObject.contramap(function(date) {
    return date.valueOf();
}));
var create = function() {
    return new Date();
};
var now = function() {
    return new Date().getTime();
};
exports.Eq = __webpack_exports__.Eq;
exports.Ord = __webpack_exports__.Ord;
exports.create = __webpack_exports__.create;
exports.eqDate = __webpack_exports__.eqDate;
exports.eqMonth = __webpack_exports__.eqMonth;
exports.eqYear = __webpack_exports__.eqYear;
exports.now = __webpack_exports__.now;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Eq",
    "Ord",
    "create",
    "eqDate",
    "eqMonth",
    "eqYear",
    "now"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
