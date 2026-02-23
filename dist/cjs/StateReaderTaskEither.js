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
    chainStateK: function() {
        return chainStateK;
    },
    FromIO: function() {
        return FromIO;
    },
    execute: function() {
        return execute;
    },
    get: function() {
        return get;
    },
    flatMapReader: function() {
        return flatMapReader;
    },
    Alt: function() {
        return Alt;
    },
    FromTask: function() {
        return FromTask;
    },
    traverseArrayWithIndex: function() {
        return traverseArrayWithIndex;
    },
    chainFirstIOK: function() {
        return chainFirstIOK;
    },
    URI: function() {
        return URI;
    },
    fromIO: function() {
        return fromIO;
    },
    asks: function() {
        return asks;
    },
    fromTaskK: function() {
        return fromTaskK;
    },
    alt: function() {
        return alt;
    },
    tapEither: function() {
        return tapEither;
    },
    chainTaskEitherKW: function() {
        return chainTaskEitherKW;
    },
    fromOptionK: function() {
        return fromOptionK;
    },
    apS: function() {
        return apS;
    },
    left: function() {
        return left;
    },
    Apply: function() {
        return Apply;
    },
    fromState: function() {
        return fromState;
    },
    Functor: function() {
        return Functor;
    },
    fromReaderTaskEither: function() {
        return fromReaderTaskEither;
    },
    sequenceArray: function() {
        return sequenceArray;
    },
    rightReader: function() {
        return rightReader;
    },
    FromReader: function() {
        return FromReader;
    },
    chainEitherKW: function() {
        return chainEitherKW;
    },
    chainReaderTaskEitherK: function() {
        return chainReaderTaskEitherK;
    },
    Applicative: function() {
        return Applicative;
    },
    flattenW: function() {
        return flattenW;
    },
    fromEither: function() {
        return fromEither;
    },
    chainReaderKW: function() {
        return chainReaderKW;
    },
    modify: function() {
        return modify;
    },
    rightState: function() {
        return rightState;
    },
    let: function() {
        return let_;
    },
    mapLeft: function() {
        return mapLeft;
    },
    fromOption: function() {
        return fromOption;
    },
    chainOptionKW: function() {
        return chainOptionKW;
    },
    leftIO: function() {
        return leftIO;
    },
    apW: function() {
        return apW;
    },
    ask: function() {
        return ask;
    },
    Bifunctor: function() {
        return Bifunctor;
    },
    fromReaderTaskEitherK: function() {
        return fromReaderTaskEitherK;
    },
    fromReaderEither: function() {
        return fromReaderEither;
    },
    bimap: function() {
        return bimap;
    },
    chainFirstReaderK: function() {
        return chainFirstReaderK;
    },
    fromReaderK: function() {
        return fromReaderK;
    },
    chainIOEitherKW: function() {
        return chainIOEitherKW;
    },
    bind: function() {
        return bind;
    },
    chainFirstEitherK: function() {
        return chainFirstEitherK;
    },
    flatMapTaskEither: function() {
        return flatMapTaskEither;
    },
    bindTo: function() {
        return bindTo;
    },
    chainFirstTaskK: function() {
        return chainFirstTaskK;
    },
    chainIOEitherK: function() {
        return chainIOEitherK;
    },
    chainIOK: function() {
        return chainIOK;
    },
    rightTask: function() {
        return rightTask;
    },
    flatMapState: function() {
        return flatMapState;
    },
    apFirstW: function() {
        return apFirstW;
    },
    apSecond: function() {
        return apSecond;
    },
    Monad: function() {
        return Monad;
    },
    evalState: function() {
        return evalState;
    },
    of: function() {
        return of;
    },
    traverseReadonlyNonEmptyArrayWithIndex: function() {
        return traverseReadonlyNonEmptyArrayWithIndex;
    },
    apFirst: function() {
        return apFirst;
    },
    ap: function() {
        return ap;
    },
    stateReaderTaskEither: function() {
        return stateReaderTaskEither;
    },
    chainTaskEitherK: function() {
        return chainTaskEitherK;
    },
    fromTaskEither: function() {
        return fromTaskEither;
    },
    flatMapReaderTaskEither: function() {
        return flatMapReaderTaskEither;
    },
    filterOrElse: function() {
        return filterOrElse;
    },
    traverseReadonlyArrayWithIndex: function() {
        return traverseReadonlyArrayWithIndex;
    },
    right: function() {
        return right;
    },
    tap: function() {
        return tap;
    },
    apSecondW: function() {
        return apSecondW;
    },
    FromEither: function() {
        return FromEither;
    },
    put: function() {
        return put;
    },
    local: function() {
        return local;
    },
    chainW: function() {
        return chainW;
    },
    fromIOEither: function() {
        return fromIOEither;
    },
    MonadThrow: function() {
        return MonadThrow;
    },
    asUnit: function() {
        return asUnit;
    },
    flatMapTask: function() {
        return flatMapTask;
    },
    fromEitherK: function() {
        return fromEitherK;
    },
    stateReaderTaskEitherSeq: function() {
        return stateReaderTaskEitherSeq;
    },
    run: function() {
        return run;
    },
    altW: function() {
        return altW;
    },
    FromState: function() {
        return FromState;
    },
    as: function() {
        return StateReaderTaskEither_as;
    },
    apSW: function() {
        return apSW;
    },
    flatMapIOEither: function() {
        return flatMapIOEither;
    },
    fromTaskEitherK: function() {
        return fromTaskEitherK;
    },
    fromStateK: function() {
        return fromStateK;
    },
    chainOptionK: function() {
        return chainOptionK;
    },
    leftState: function() {
        return leftState;
    },
    chainReaderK: function() {
        return chainReaderK;
    },
    execState: function() {
        return execState;
    },
    MonadTask: function() {
        return MonadTask;
    },
    Chain: function() {
        return Chain;
    },
    asksStateReaderTaskEither: function() {
        return asksStateReaderTaskEither;
    },
    traverseArray: function() {
        return traverseArray;
    },
    chainFirst: function() {
        return chainFirst;
    },
    tapReader: function() {
        return tapReader;
    },
    flatMap: function() {
        return flatMap;
    },
    tapIO: function() {
        return tapIO;
    },
    gets: function() {
        return gets;
    },
    flatMapIO: function() {
        return flatMapIO;
    },
    flatten: function() {
        return flatten;
    },
    fromIOK: function() {
        return fromIOK;
    },
    chainEitherK: function() {
        return chainEitherK;
    },
    tapTask: function() {
        return tapTask;
    },
    chain: function() {
        return chain;
    },
    chainFirstW: function() {
        return chainFirstW;
    },
    fromIOEitherK: function() {
        return fromIOEitherK;
    },
    fromTask: function() {
        return fromTask;
    },
    fromReader: function() {
        return fromReader;
    },
    bindW: function() {
        return bindW;
    },
    chainFirstReaderKW: function() {
        return chainFirstReaderKW;
    },
    fromPredicate: function() {
        return fromPredicate;
    },
    asksStateReaderTaskEitherW: function() {
        return asksStateReaderTaskEitherW;
    },
    map: function() {
        return map;
    },
    leftTask: function() {
        return leftTask;
    },
    leftReader: function() {
        return leftReader;
    },
    MonadIO: function() {
        return MonadIO;
    },
    Pointed: function() {
        return Pointed;
    },
    chainReaderTaskEitherKW: function() {
        return chainReaderTaskEitherKW;
    },
    chainTaskK: function() {
        return chainTaskK;
    },
    filterOrElseW: function() {
        return filterOrElseW;
    },
    flatMapOption: function() {
        return flatMapOption;
    },
    evaluate: function() {
        return evaluate;
    },
    throwError: function() {
        return throwError;
    },
    flap: function() {
        return flap;
    },
    chainFirstEitherKW: function() {
        return chainFirstEitherKW;
    },
    rightIO: function() {
        return rightIO;
    }
});
var external_Apply_js_namespaceObject = require("./Apply.js");
var external_Chain_js_namespaceObject = require("./Chain.js");
var external_Either_js_namespaceObject = require("./Either.js");
var external_FromEither_js_namespaceObject = require("./FromEither.js");
var external_FromIO_js_namespaceObject = require("./FromIO.js");
var external_FromReader_js_namespaceObject = require("./FromReader.js");
var external_FromState_js_namespaceObject = require("./FromState.js");
var external_FromTask_js_namespaceObject = require("./FromTask.js");
var external_function_js_namespaceObject = require("./function.js");
var external_Functor_js_namespaceObject = require("./Functor.js");
var external_internal_js_namespaceObject = require("./internal.js");
var external_Reader_js_namespaceObject = require("./Reader.js");
var external_ReaderTaskEither_js_namespaceObject = require("./ReaderTaskEither.js");
var external_StateT_js_namespaceObject = require("./StateT.js");
function _array_like_to_array(arr, len) {
    if (null == len || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if ("u" > typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = null == arr ? null : "u" > typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null == _i) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && null != _i["return"]) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var left = function(e) {
    return function() {
        return external_ReaderTaskEither_js_namespaceObject.left(e);
    };
};
var right = /*#__PURE__*/ external_StateT_js_namespaceObject.of(external_ReaderTaskEither_js_namespaceObject.Pointed);
function rightTask(ma) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.rightTask(ma));
}
function leftTask(me) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.leftTask(me));
}
function rightReader(ma) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.rightReader(ma));
}
function leftReader(me) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.leftReader(me));
}
function rightIO(ma) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.rightIO(ma));
}
function leftIO(me) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.leftIO(me));
}
var rightState = function(sa) {
    return (0, external_function_js_namespaceObject.flow)(sa, external_ReaderTaskEither_js_namespaceObject.right);
};
var leftState = function(me) {
    return function(s) {
        return external_ReaderTaskEither_js_namespaceObject.left(me(s)[0]);
    };
};
var fromEither = /*#__PURE__*/ external_Either_js_namespaceObject.match(function(e) {
    return left(e);
}, right);
var fromReader = rightReader;
var fromIO = rightIO;
var fromTask = rightTask;
var fromState = /*#__PURE__*/ external_StateT_js_namespaceObject.fromState(external_ReaderTaskEither_js_namespaceObject.Pointed);
var fromTaskEither = function(ma) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.fromTaskEither(ma));
};
var fromIOEither = function(ma) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.fromIOEither(ma));
};
var fromReaderEither = function(ma) {
    return fromReaderTaskEither(external_ReaderTaskEither_js_namespaceObject.fromReaderEither(ma));
};
var fromReaderTaskEither = /*#__PURE__*/ external_StateT_js_namespaceObject.fromF(external_ReaderTaskEither_js_namespaceObject.Functor);
var local = function(f) {
    return function(ma) {
        return (0, external_function_js_namespaceObject.flow)(ma, external_Reader_js_namespaceObject.local(f));
    };
};
var asksStateReaderTaskEitherW = function(f) {
    return function(s) {
        return function(r) {
            return f(r)(s)(r);
        };
    };
};
var asksStateReaderTaskEither = asksStateReaderTaskEitherW;
var fromIOEitherK = function(f) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return fromIOEither(f.apply(void 0, _to_consumable_array(a)));
    };
};
var fromTaskEitherK = function(f) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return fromTaskEither(f.apply(void 0, _to_consumable_array(a)));
    };
};
var fromReaderTaskEitherK = function(f) {
    return function() {
        for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++)a[_key] = arguments[_key];
        return fromReaderTaskEither(f.apply(void 0, _to_consumable_array(a)));
    };
};
var chainReaderTaskEitherKW = function(f) {
    return function(ma) {
        return flatMap(ma, fromReaderTaskEitherK(f));
    };
};
var chainReaderTaskEitherK = chainReaderTaskEitherKW;
var _map = function(fa, f) {
    return (0, external_function_js_namespaceObject.pipe)(fa, map(f));
};
var _ap = function(fab, fa) {
    return (0, external_function_js_namespaceObject.pipe)(fab, ap(fa));
};
var _alt = function(fa, that) {
    return function(s) {
        return (0, external_function_js_namespaceObject.pipe)(fa(s), external_ReaderTaskEither_js_namespaceObject.alt(function() {
            return that()(s);
        }));
    };
};
var _bimap = function(fea, f, g) {
    return function(s) {
        return (0, external_function_js_namespaceObject.pipe)(fea(s), external_ReaderTaskEither_js_namespaceObject.bimap(f, function(param) {
            var _param = _sliced_to_array(param, 2), a = _param[0], _$s = _param[1];
            return [
                g(a),
                _$s
            ];
        }));
    };
};
var _mapLeft = function(fea, f) {
    return function(s) {
        return (0, external_function_js_namespaceObject.pipe)(fea(s), external_ReaderTaskEither_js_namespaceObject.mapLeft(f));
    };
};
var map = /*#__PURE__*/ external_StateT_js_namespaceObject.map(external_ReaderTaskEither_js_namespaceObject.Functor);
var bimap = function(f, g) {
    return function(fa) {
        return _bimap(fa, f, g);
    };
};
var mapLeft = function(f) {
    return function(fa) {
        return _mapLeft(fa, f);
    };
};
var ap = /*#__PURE__*/ external_StateT_js_namespaceObject.ap(external_ReaderTaskEither_js_namespaceObject.Chain);
var apW = ap;
var of = right;
var _FromIO = {
    fromIO: fromIO
};
var _FromTask = {
    fromTask: fromTask
};
var _FromReader = {
    fromReader: fromReader
};
var _FromEither = {
    fromEither: fromEither
};
var flatMap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_StateT_js_namespaceObject.flatMap(external_ReaderTaskEither_js_namespaceObject.Monad));
var _FlatMap = {
    flatMap: flatMap
};
var flatMapTaskEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, function(a) {
        return fromTaskEitherK(f)(a);
    });
});
var flatMapIO = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapIO(_FromIO, _FlatMap);
var flatMapTask = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapTask(_FromTask, _FlatMap);
var flatMapReader = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapReader(_FromReader, _FlatMap);
var flatMapIOEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, function(a) {
        return fromIOEitherK(f)(a);
    });
});
var flatMapEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_internal_js_namespaceObject.flatMapEither(_FromEither, _FlatMap));
var flatMapOption = /*#__PURE__*/ external_internal_js_namespaceObject.flatMapOption(_FromEither, _FlatMap);
var flatMapReaderTaskEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, function(a) {
        return fromReaderTaskEitherK(f)(a);
    });
});
var flatMapState = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, function(self, f) {
    return flatMap(self, fromStateK(f));
});
var flattenW = /*#__PURE__*/ flatMap(external_function_js_namespaceObject.identity);
var flatten = flattenW;
var altW = function(that) {
    return function(fa) {
        return function(r) {
            return (0, external_function_js_namespaceObject.pipe)(fa(r), external_ReaderTaskEither_js_namespaceObject.altW(function() {
                return that()(r);
            }));
        };
    };
};
var alt = altW;
var throwError = left;
var URI = 'StateReaderTaskEither';
var Functor = {
    URI: URI,
    map: _map
};
var StateReaderTaskEither_as = (0, external_function_js_namespaceObject.dual)(2, (0, external_Functor_js_namespaceObject.as)(Functor));
var asUnit = (0, external_Functor_js_namespaceObject.asUnit)(Functor);
var flap = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.flap)(Functor);
var Pointed = {
    URI: URI,
    of: of
};
var Apply = {
    URI: URI,
    map: _map,
    ap: _ap
};
var apFirst = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apFirst)(Apply);
var apFirstW = apFirst;
var apSecond = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apSecond)(Apply);
var apSecondW = apSecond;
var Applicative = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of
};
var Chain = {
    URI: URI,
    map: _map,
    ap: _ap,
    chain: flatMap
};
var FromState = {
    URI: URI,
    fromState: fromState
};
var get = /*#__PURE__*/ (0, external_FromState_js_namespaceObject.get)(FromState);
var put = /*#__PURE__*/ (0, external_FromState_js_namespaceObject.put)(FromState);
var modify = /*#__PURE__*/ (0, external_FromState_js_namespaceObject.modify)(FromState);
var gets = /*#__PURE__*/ (0, external_FromState_js_namespaceObject.gets)(FromState);
var fromStateK = /*#__PURE__*/ (0, external_FromState_js_namespaceObject.fromStateK)(FromState);
var chainStateK = /*#__PURE__*/ (0, external_FromState_js_namespaceObject.chainStateK)(FromState, Chain);
var Monad = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap
};
var MonadIO = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    fromIO: fromIO
};
var MonadTask = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    fromIO: fromIO,
    fromTask: fromTask
};
var MonadThrow = {
    URI: URI,
    map: _map,
    ap: _ap,
    of: of,
    chain: flatMap,
    throwError: throwError
};
var FromEither = {
    URI: URI,
    fromEither: fromEither
};
var FromIO = {
    URI: URI,
    fromIO: fromIO
};
var FromTask = {
    URI: URI,
    fromIO: fromIO,
    fromTask: fromTask
};
var FromReader = {
    URI: URI,
    fromReader: fromReader
};
var tap = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, external_Chain_js_namespaceObject.tap(Chain));
var tapEither = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromEither_js_namespaceObject.tapEither)(FromEither, Chain));
var tapIO = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromIO_js_namespaceObject.tapIO)(FromIO, Chain));
var tapTask = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromTask_js_namespaceObject.tapTask)(FromTask, Chain));
var tapReader = /*#__PURE__*/ (0, external_function_js_namespaceObject.dual)(2, (0, external_FromReader_js_namespaceObject.tapReader)(FromReader, Chain));
var Bifunctor = {
    URI: URI,
    bimap: _bimap,
    mapLeft: _mapLeft
};
var Alt = {
    URI: URI,
    map: _map,
    alt: _alt
};
var ask = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.ask)(FromReader);
var asks = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.asks)(FromReader);
var fromReaderK = /*#__PURE__*/ (0, external_FromReader_js_namespaceObject.fromReaderK)(FromReader);
var chainReaderK = flatMapReader;
var chainReaderKW = flatMapReader;
var chainFirstReaderK = tapReader;
var chainFirstReaderKW = tapReader;
var fromOption = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOption)(FromEither);
var fromOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromOptionK)(FromEither);
var chainOptionK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.chainOptionK)(FromEither, Chain);
var chainOptionKW = chainOptionK;
var chainEitherK = flatMapEither;
var chainEitherKW = flatMapEither;
var chainFirstEitherK = tapEither;
var chainFirstEitherKW = tapEither;
var fromPredicate = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromPredicate)(FromEither);
var filterOrElse = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.filterOrElse)(FromEither, Chain);
var filterOrElseW = filterOrElse;
var fromEitherK = /*#__PURE__*/ (0, external_FromEither_js_namespaceObject.fromEitherK)(FromEither);
var fromIOK = /*#__PURE__*/ (0, external_FromIO_js_namespaceObject.fromIOK)(FromIO);
var chainIOK = flatMapIO;
var chainFirstIOK = tapIO;
var chainTaskEitherKW = flatMapTaskEither;
var chainTaskEitherK = flatMapTaskEither;
var chainIOEitherKW = flatMapIOEither;
var chainIOEitherK = flatMapIOEither;
var fromTaskK = /*#__PURE__*/ (0, external_FromTask_js_namespaceObject.fromTaskK)(FromTask);
var chainTaskK = flatMapTask;
var chainFirstTaskK = tapTask;
var evaluate = /*#__PURE__*/ external_StateT_js_namespaceObject.evaluate(external_ReaderTaskEither_js_namespaceObject.Functor);
var execute = /*#__PURE__*/ external_StateT_js_namespaceObject.execute(external_ReaderTaskEither_js_namespaceObject.Functor);
var bindTo = /*#__PURE__*/ (0, external_Functor_js_namespaceObject.bindTo)(Functor);
var let_ = /*#__PURE__*/ (0, external_Functor_js_namespaceObject["let"])(Functor);
var bind = /*#__PURE__*/ external_Chain_js_namespaceObject.bind(Chain);
var bindW = bind;
var apS = /*#__PURE__*/ (0, external_Apply_js_namespaceObject.apS)(Apply);
var apSW = apS;
var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
        return function(s) {
            return function(r) {
                return function() {
                    return external_internal_js_namespaceObject.tail(as).reduce(function(acc, a, i) {
                        return acc.then(function(ebs) {
                            return external_internal_js_namespaceObject.isLeft(ebs) ? acc : f(i + 1, a)(ebs.right[1])(r)().then(function(eb) {
                                if (external_internal_js_namespaceObject.isLeft(eb)) return eb;
                                var _eb_right = _sliced_to_array(eb.right, 2), b = _eb_right[0], _$s = _eb_right[1];
                                ebs.right[0].push(b);
                                ebs.right[1] = _$s;
                                return ebs;
                            });
                        });
                    }, f(0, external_internal_js_namespaceObject.head(as))(s)(r)().then(external_Either_js_namespaceObject.map(function(param) {
                        var _param = _sliced_to_array(param, 2), b = _param[0], _$s = _param[1];
                        return [
                            [
                                b
                            ],
                            _$s
                        ];
                    })));
                };
            };
        };
    };
};
var traverseReadonlyArrayWithIndex = function(f) {
    var g = traverseReadonlyNonEmptyArrayWithIndex(f);
    return function(as) {
        return external_internal_js_namespaceObject.isNonEmpty(as) ? g(as) : of(external_internal_js_namespaceObject.emptyReadonlyArray);
    };
};
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
var traverseArray = function(f) {
    return traverseReadonlyArrayWithIndex(function(_, a) {
        return f(a);
    });
};
var sequenceArray = /*#__PURE__*/ traverseArray(external_function_js_namespaceObject.identity);
var chain = flatMap;
var chainW = flatMap;
var chainFirst = tap;
var chainFirstW = tap;
var stateReaderTaskEither = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    fromIO: fromIO,
    fromTask: fromTask,
    throwError: throwError
};
var stateReaderTaskEitherSeq = {
    URI: URI,
    map: _map,
    of: of,
    ap: _ap,
    chain: flatMap,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    fromIO: fromIO,
    fromTask: fromTask,
    throwError: throwError
};
var evalState = function(fsa, s) {
    return (0, external_function_js_namespaceObject.pipe)(fsa(s), external_ReaderTaskEither_js_namespaceObject.map(function(param) {
        var _param = _sliced_to_array(param, 1), a = _param[0];
        return a;
    }));
};
var execState = function(fsa, s) {
    return (0, external_function_js_namespaceObject.pipe)(fsa(s), external_ReaderTaskEither_js_namespaceObject.map(function(param) {
        var _param = _sliced_to_array(param, 2), _$s = (_param[0], _param[1]);
        return _$s;
    }));
};
function run(ma, s, r) {
    return ma(s)(r)();
}
exports.Alt = __webpack_exports__.Alt;
exports.Applicative = __webpack_exports__.Applicative;
exports.Apply = __webpack_exports__.Apply;
exports.Bifunctor = __webpack_exports__.Bifunctor;
exports.Chain = __webpack_exports__.Chain;
exports.FromEither = __webpack_exports__.FromEither;
exports.FromIO = __webpack_exports__.FromIO;
exports.FromReader = __webpack_exports__.FromReader;
exports.FromState = __webpack_exports__.FromState;
exports.FromTask = __webpack_exports__.FromTask;
exports.Functor = __webpack_exports__.Functor;
exports.Monad = __webpack_exports__.Monad;
exports.MonadIO = __webpack_exports__.MonadIO;
exports.MonadTask = __webpack_exports__.MonadTask;
exports.MonadThrow = __webpack_exports__.MonadThrow;
exports.Pointed = __webpack_exports__.Pointed;
exports.URI = __webpack_exports__.URI;
exports.alt = __webpack_exports__.alt;
exports.altW = __webpack_exports__.altW;
exports.ap = __webpack_exports__.ap;
exports.apFirst = __webpack_exports__.apFirst;
exports.apFirstW = __webpack_exports__.apFirstW;
exports.apS = __webpack_exports__.apS;
exports.apSW = __webpack_exports__.apSW;
exports.apSecond = __webpack_exports__.apSecond;
exports.apSecondW = __webpack_exports__.apSecondW;
exports.apW = __webpack_exports__.apW;
exports.as = __webpack_exports__.as;
exports.asUnit = __webpack_exports__.asUnit;
exports.ask = __webpack_exports__.ask;
exports.asks = __webpack_exports__.asks;
exports.asksStateReaderTaskEither = __webpack_exports__.asksStateReaderTaskEither;
exports.asksStateReaderTaskEitherW = __webpack_exports__.asksStateReaderTaskEitherW;
exports.bimap = __webpack_exports__.bimap;
exports.bind = __webpack_exports__.bind;
exports.bindTo = __webpack_exports__.bindTo;
exports.bindW = __webpack_exports__.bindW;
exports.chain = __webpack_exports__.chain;
exports.chainEitherK = __webpack_exports__.chainEitherK;
exports.chainEitherKW = __webpack_exports__.chainEitherKW;
exports.chainFirst = __webpack_exports__.chainFirst;
exports.chainFirstEitherK = __webpack_exports__.chainFirstEitherK;
exports.chainFirstEitherKW = __webpack_exports__.chainFirstEitherKW;
exports.chainFirstIOK = __webpack_exports__.chainFirstIOK;
exports.chainFirstReaderK = __webpack_exports__.chainFirstReaderK;
exports.chainFirstReaderKW = __webpack_exports__.chainFirstReaderKW;
exports.chainFirstTaskK = __webpack_exports__.chainFirstTaskK;
exports.chainFirstW = __webpack_exports__.chainFirstW;
exports.chainIOEitherK = __webpack_exports__.chainIOEitherK;
exports.chainIOEitherKW = __webpack_exports__.chainIOEitherKW;
exports.chainIOK = __webpack_exports__.chainIOK;
exports.chainOptionK = __webpack_exports__.chainOptionK;
exports.chainOptionKW = __webpack_exports__.chainOptionKW;
exports.chainReaderK = __webpack_exports__.chainReaderK;
exports.chainReaderKW = __webpack_exports__.chainReaderKW;
exports.chainReaderTaskEitherK = __webpack_exports__.chainReaderTaskEitherK;
exports.chainReaderTaskEitherKW = __webpack_exports__.chainReaderTaskEitherKW;
exports.chainStateK = __webpack_exports__.chainStateK;
exports.chainTaskEitherK = __webpack_exports__.chainTaskEitherK;
exports.chainTaskEitherKW = __webpack_exports__.chainTaskEitherKW;
exports.chainTaskK = __webpack_exports__.chainTaskK;
exports.chainW = __webpack_exports__.chainW;
exports.evalState = __webpack_exports__.evalState;
exports.evaluate = __webpack_exports__.evaluate;
exports.execState = __webpack_exports__.execState;
exports.execute = __webpack_exports__.execute;
exports.filterOrElse = __webpack_exports__.filterOrElse;
exports.filterOrElseW = __webpack_exports__.filterOrElseW;
exports.flap = __webpack_exports__.flap;
exports.flatMap = __webpack_exports__.flatMap;
exports.flatMapEither = __webpack_exports__.flatMapEither;
exports.flatMapIO = __webpack_exports__.flatMapIO;
exports.flatMapIOEither = __webpack_exports__.flatMapIOEither;
exports.flatMapOption = __webpack_exports__.flatMapOption;
exports.flatMapReader = __webpack_exports__.flatMapReader;
exports.flatMapReaderTaskEither = __webpack_exports__.flatMapReaderTaskEither;
exports.flatMapState = __webpack_exports__.flatMapState;
exports.flatMapTask = __webpack_exports__.flatMapTask;
exports.flatMapTaskEither = __webpack_exports__.flatMapTaskEither;
exports.flatten = __webpack_exports__.flatten;
exports.flattenW = __webpack_exports__.flattenW;
exports.fromEither = __webpack_exports__.fromEither;
exports.fromEitherK = __webpack_exports__.fromEitherK;
exports.fromIO = __webpack_exports__.fromIO;
exports.fromIOEither = __webpack_exports__.fromIOEither;
exports.fromIOEitherK = __webpack_exports__.fromIOEitherK;
exports.fromIOK = __webpack_exports__.fromIOK;
exports.fromOption = __webpack_exports__.fromOption;
exports.fromOptionK = __webpack_exports__.fromOptionK;
exports.fromPredicate = __webpack_exports__.fromPredicate;
exports.fromReader = __webpack_exports__.fromReader;
exports.fromReaderEither = __webpack_exports__.fromReaderEither;
exports.fromReaderK = __webpack_exports__.fromReaderK;
exports.fromReaderTaskEither = __webpack_exports__.fromReaderTaskEither;
exports.fromReaderTaskEitherK = __webpack_exports__.fromReaderTaskEitherK;
exports.fromState = __webpack_exports__.fromState;
exports.fromStateK = __webpack_exports__.fromStateK;
exports.fromTask = __webpack_exports__.fromTask;
exports.fromTaskEither = __webpack_exports__.fromTaskEither;
exports.fromTaskEitherK = __webpack_exports__.fromTaskEitherK;
exports.fromTaskK = __webpack_exports__.fromTaskK;
exports.get = __webpack_exports__.get;
exports.gets = __webpack_exports__.gets;
exports.left = __webpack_exports__.left;
exports.leftIO = __webpack_exports__.leftIO;
exports.leftReader = __webpack_exports__.leftReader;
exports.leftState = __webpack_exports__.leftState;
exports.leftTask = __webpack_exports__.leftTask;
exports["let"] = __webpack_exports__["let"];
exports.local = __webpack_exports__.local;
exports.map = __webpack_exports__.map;
exports.mapLeft = __webpack_exports__.mapLeft;
exports.modify = __webpack_exports__.modify;
exports.of = __webpack_exports__.of;
exports.put = __webpack_exports__.put;
exports.right = __webpack_exports__.right;
exports.rightIO = __webpack_exports__.rightIO;
exports.rightReader = __webpack_exports__.rightReader;
exports.rightState = __webpack_exports__.rightState;
exports.rightTask = __webpack_exports__.rightTask;
exports.run = __webpack_exports__.run;
exports.sequenceArray = __webpack_exports__.sequenceArray;
exports.stateReaderTaskEither = __webpack_exports__.stateReaderTaskEither;
exports.stateReaderTaskEitherSeq = __webpack_exports__.stateReaderTaskEitherSeq;
exports.tap = __webpack_exports__.tap;
exports.tapEither = __webpack_exports__.tapEither;
exports.tapIO = __webpack_exports__.tapIO;
exports.tapReader = __webpack_exports__.tapReader;
exports.tapTask = __webpack_exports__.tapTask;
exports.throwError = __webpack_exports__.throwError;
exports.traverseArray = __webpack_exports__.traverseArray;
exports.traverseArrayWithIndex = __webpack_exports__.traverseArrayWithIndex;
exports.traverseReadonlyArrayWithIndex = __webpack_exports__.traverseReadonlyArrayWithIndex;
exports.traverseReadonlyNonEmptyArrayWithIndex = __webpack_exports__.traverseReadonlyNonEmptyArrayWithIndex;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Alt",
    "Applicative",
    "Apply",
    "Bifunctor",
    "Chain",
    "FromEither",
    "FromIO",
    "FromReader",
    "FromState",
    "FromTask",
    "Functor",
    "Monad",
    "MonadIO",
    "MonadTask",
    "MonadThrow",
    "Pointed",
    "URI",
    "alt",
    "altW",
    "ap",
    "apFirst",
    "apFirstW",
    "apS",
    "apSW",
    "apSecond",
    "apSecondW",
    "apW",
    "as",
    "asUnit",
    "ask",
    "asks",
    "asksStateReaderTaskEither",
    "asksStateReaderTaskEitherW",
    "bimap",
    "bind",
    "bindTo",
    "bindW",
    "chain",
    "chainEitherK",
    "chainEitherKW",
    "chainFirst",
    "chainFirstEitherK",
    "chainFirstEitherKW",
    "chainFirstIOK",
    "chainFirstReaderK",
    "chainFirstReaderKW",
    "chainFirstTaskK",
    "chainFirstW",
    "chainIOEitherK",
    "chainIOEitherKW",
    "chainIOK",
    "chainOptionK",
    "chainOptionKW",
    "chainReaderK",
    "chainReaderKW",
    "chainReaderTaskEitherK",
    "chainReaderTaskEitherKW",
    "chainStateK",
    "chainTaskEitherK",
    "chainTaskEitherKW",
    "chainTaskK",
    "chainW",
    "evalState",
    "evaluate",
    "execState",
    "execute",
    "filterOrElse",
    "filterOrElseW",
    "flap",
    "flatMap",
    "flatMapEither",
    "flatMapIO",
    "flatMapIOEither",
    "flatMapOption",
    "flatMapReader",
    "flatMapReaderTaskEither",
    "flatMapState",
    "flatMapTask",
    "flatMapTaskEither",
    "flatten",
    "flattenW",
    "fromEither",
    "fromEitherK",
    "fromIO",
    "fromIOEither",
    "fromIOEitherK",
    "fromIOK",
    "fromOption",
    "fromOptionK",
    "fromPredicate",
    "fromReader",
    "fromReaderEither",
    "fromReaderK",
    "fromReaderTaskEither",
    "fromReaderTaskEitherK",
    "fromState",
    "fromStateK",
    "fromTask",
    "fromTaskEither",
    "fromTaskEitherK",
    "fromTaskK",
    "get",
    "gets",
    "left",
    "leftIO",
    "leftReader",
    "leftState",
    "leftTask",
    "let",
    "local",
    "map",
    "mapLeft",
    "modify",
    "of",
    "put",
    "right",
    "rightIO",
    "rightReader",
    "rightState",
    "rightTask",
    "run",
    "sequenceArray",
    "stateReaderTaskEither",
    "stateReaderTaskEitherSeq",
    "tap",
    "tapEither",
    "tapIO",
    "tapReader",
    "tapTask",
    "throwError",
    "traverseArray",
    "traverseArrayWithIndex",
    "traverseReadonlyArrayWithIndex",
    "traverseReadonlyNonEmptyArrayWithIndex"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
