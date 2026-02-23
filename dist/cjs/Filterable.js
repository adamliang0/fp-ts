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
    filterMap: function() {
        return filterMap;
    },
    getFilterableComposition: function() {
        return getFilterableComposition;
    },
    filter: function() {
        return filter;
    },
    partition: function() {
        return partition;
    }
});
var external_Compactable_js_namespaceObject = require("./Compactable.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_Option_js_namespaceObject = require("./Option.js");
var external_Predicate_js_namespaceObject = require("./Predicate.js");
var external_Separated_js_namespaceObject = require("./Separated.js");
function filter(F, G) {
    return function(predicate) {
        return function(fga) {
            return F.map(fga, function(ga) {
                return G.filter(ga, predicate);
            });
        };
    };
}
function filterMap(F, G) {
    return function(f) {
        return function(fga) {
            return F.map(fga, function(ga) {
                return G.filterMap(ga, f);
            });
        };
    };
}
function partition(F, G) {
    var _filter = filter(F, G);
    return function(predicate) {
        var left = _filter((0, external_Predicate_js_namespaceObject.not)(predicate));
        var right = _filter(predicate);
        return function(fgb) {
            return (0, external_Separated_js_namespaceObject.separated)(left(fgb), right(fgb));
        };
    };
}
function partitionMap(F, G) {
    var _filterMap = filterMap(F, G);
    return function(f) {
        return function(fga) {
            return (0, external_Separated_js_namespaceObject.separated)((0, external_function_js_namespaceObject.pipe)(fga, _filterMap(function(a) {
                return (0, external_Option_js_namespaceObject.getLeft)(f(a));
            })), (0, external_function_js_namespaceObject.pipe)(fga, _filterMap(function(a) {
                return (0, external_Option_js_namespaceObject.getRight)(f(a));
            })));
        };
    };
}
function getFilterableComposition(F, G) {
    var map = (0, external_Functor_js_namespaceObject.getFunctorComposition)(F, G).map;
    var _compact = (0, external_Compactable_js_namespaceObject.compact)(F, G);
    var _separate = (0, external_Compactable_js_namespaceObject.separate)(F, G, G);
    var _filter = filter(F, G);
    var _filterMap = filterMap(F, G);
    var _partition = partition(F, G);
    var _partitionMap = partitionMap(F, G);
    return {
        map: map,
        compact: _compact,
        separate: _separate,
        filter: function(fga, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _filter(f));
        },
        filterMap: function(fga, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _filterMap(f));
        },
        partition: function(fga, p) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _partition(p));
        },
        partitionMap: function(fga, f) {
            return (0, external_function_js_namespaceObject.pipe)(fga, _partitionMap(f));
        }
    };
}
exports.filter = __webpack_exports__.filter;
exports.filterMap = __webpack_exports__.filterMap;
exports.getFilterableComposition = __webpack_exports__.getFilterableComposition;
exports.partition = __webpack_exports__.partition;
exports.partitionMap = __webpack_exports__.partitionMap;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "filter",
    "filterMap",
    "getFilterableComposition",
    "partition",
    "partitionMap"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
