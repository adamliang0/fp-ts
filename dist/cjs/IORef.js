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
    IORef: function() {
        return IORef;
    },
    newIORef: function() {
        return newIORef;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
var IORef = /*#__PURE__*/ function() {
    "use strict";
    function IORef(value) {
        var _this = this;
        _class_call_check(this, IORef);
        _define_property(this, "value", void 0);
        _define_property(this, "read", void 0);
        this.value = value;
        this.read = function() {
            return _this.value;
        };
        this.write = this.write.bind(this);
        this.modify = this.modify.bind(this);
    }
    _create_class(IORef, [
        {
            key: "write",
            value: function(a) {
                var _this = this;
                return function() {
                    _this.value = a;
                };
            }
        },
        {
            key: "modify",
            value: function(f) {
                var _this = this;
                return function() {
                    _this.value = f(_this.value);
                };
            }
        }
    ]);
    return IORef;
}();
function newIORef(a) {
    return function() {
        return new IORef(a);
    };
}
exports.IORef = __webpack_exports__.IORef;
exports.newIORef = __webpack_exports__.newIORef;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "IORef",
    "newIORef"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
