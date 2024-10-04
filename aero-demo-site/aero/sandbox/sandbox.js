(() => { // webpackBootstrap
var __webpack_modules__ = ({
"./build/AeroSandboxBuilder.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return AeroSandbox; }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var AeroSandbox = /*#__PURE__*/ function() {
    "use strict";
    function AeroSandbox() {
        _class_call_check(this, AeroSandbox);
        _define_property(this, "config", void 0);
        /** This API isn't implemented yet and is here to serve as a placeholder */ _define_property(this, "faker", void 0);
        _define_property(this, "rewriters", void 0);
    }
    _create_class(AeroSandbox, [
        {
            key: "fakeOrigin",
            value: function fakeOrigin(apiIncludeBitwiseEnum, apiExcludeBitwiseEnum, rewriterModesBitwiseEnum) {
                var isWorker = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, proxyOrigin = arguments.length > 4 ? arguments[4] : void 0;
            }
        }
    ]);
    return AeroSandbox;
}();



}),
"./build/customBuilds/aero.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  buildConfig: function() { return buildConfig; },
  fakeOriginSettings: function() { return fakeOriginSettings; }
});
/* harmony import */var _featureMembers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../featureMembers */ "./build/featureMembers.ts");
/* harmony import */var _AeroSandboxBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AeroSandboxBuilder */ "./build/AeroSandboxBuilder.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _instance;


var buildConfig = {
    proxyConfig: _object_spread({}, self.config),
    specialInterceptionFeatures: _featureMembers__WEBPACK_IMPORTED_MODULE_0__.defaultSWProxyFeatures
};
var fakeOriginSettings = [
    "all",
    "all",
    "none"
];

/* harmony default export */ __webpack_exports__["default"] = ((_instance = new _AeroSandboxBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](buildConfig)).fakeOrigin.apply(_instance, _to_consumable_array(fakeOriginSettings)));


}),
"./build/customBuilds/frankenUV.inject.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _featureMembers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../featureMembers */ "./build/featureMembers.ts");
/* harmony import */var _AeroSandboxBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AeroSandboxBuilder */ "./build/AeroSandboxBuilder.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _instance;


var UVRewriterMembers;
(function(UVRewriterMembers) {})(UVRewriterMembers || (UVRewriterMembers = {}));
var __uv$config;
var buildConfig = {
    proxyConfig: {
        encodeUrl: __uv$config.encodeUrl,
        decodeUrl: __uv$config.decodeUrl
    },
    specialInterceptionFeatures: _featureMembers__WEBPACK_IMPORTED_MODULE_0__.defaultProxyFeatures
};
var fakeOriginSettings = [
    "all",
    UVRewriterMembers,
    "none"
];
/* harmony default export */ __webpack_exports__["default"] = ((_instance = new _AeroSandboxBuilder__WEBPACK_IMPORTED_MODULE_1__["default"](buildConfig)).fakeOrigin.apply(_instance, _to_consumable_array(fakeOriginSettings)));


}),
"./build/featureMembers.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultProxyFeatures: function() { return defaultProxyFeatures; },
  defaultSWProxyFeatures: function() { return defaultSWProxyFeatures; },
  miscOriginConcealers: function() { return miscOriginConcealers; },
  miscOriginIsolators: function() { return miscOriginIsolators; },
  originEmulationFeatures: function() { return originEmulationFeatures; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

// TODO: Put all of these terms in the API Interception Glossary
/** @note: These do not cover Origin Isolation although Origin Emulation is a type of Origin Isolation. Origin Emulation is a superset of Origin Isolation. */ var originEmulationFeatures = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/** @note: These do not cover Origin Concealers although Origin Isolation is a type of Origin Concealing. Origin Isolation is a superset of Origin Concealment. */ var miscOriginIsolators = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var miscOriginConcealers = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var defaultSWProxyFeatures = originEmulationFeatures | miscOriginConcealers;
var defaultProxyFeatures = defaultSWProxyFeatures | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



}),
"./src/interceptors/concealer/blob.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_isHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/isHTML */ "./src/shared/isHTML.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: Proxy.revocable(Blob, {
        apply: function apply(target, that, args) {
            var _args = _sliced_to_array(args, 2), arr = _args[0], opts = _args[1];
            if ((0,$shared_isHTML__WEBPACK_IMPORTED_MODULE_0__["default"])(opts.type)) args[0] = arr.map(function(html) {
                return $aero.init + html;
            });
            var ret = Reflect.apply(target, that, args);
            var size = 0;
            args[0].forEach(function(html) {
                return size += html.length;
            });
            ret.size = size;
            return ret;
        }
    }),
    globalProp: "Blob"
});


}),
"./src/interceptors/concealer/css.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/getProxyUrl */ "./src/shared/getProxyUrl.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/** Concealers for methods that return `CSSStyleSheet` (shadow root stylesheets)
 * This file should be required into a bundle for AeroSandbox, so there are no exports
 *
 * @see {@link https://drafts.csswg.org/cssom/#dom-documentorshadowroot-stylesheets}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#obtaining_a_stylesheet} - These explain all of the methods of obtaining `CSSStyleSheet`. TODO: Finish intercepting all of those revealers.
 */ 

// Proxy the getters for shadow root stylesheets
function getSheet(sheet) {
    return new Proxy(sheet, {
        get: function get(target, prop) {
            if (prop === "href") {
                return (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_0__.afterPrefix)(target.href);
            } else if (prop === "parentStyleSheet") {
                // Parent recursion
                var parentStyleSheet = target.parentStyleSheet;
                if (parentStyleSheet !== null) return getSheet(parentStyleSheet);
            }
            return target[prop];
        }
    });
}
// TODO: Inside of .xsl files spoof the conceal processing instructions nodes to hide their stylesheets
function getProcessingInstructionSheet(processingInstruction) {
    return new Proxy(processingInstruction, {
        get: function get(target, prop) {
            if (prop === "sheet") {
                var sheet = target.sheet;
                if (sheet !== null) return getSheet(sheet);
            }
            return target[prop];
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = ({
    modifyObjectProperty: function() {
        return Object.defineProperty(document, "styleSheets", {
            get: function() {
                // Conceal each `CSSStyleSheet` from the `StyleSheetList`
                var ret = Array.from(document.styleSheets).map(getSheet);
                return ret;
            }
        });
    },
    globalProp: "document.styleSheets",
    exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/concealer/error.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/getProxyUrl */ "./src/shared/getProxyUrl.ts");


/*
Error emulation
These properties are not standard, so functionality is different in browsers
These interceptors will probably change a lot over time
*/ /* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: Proxy.revocable(Error, {
        construct: function construct(target, args) {
            var res = Reflect.construct(target, args);
            // Firefox exclusives
            // Error location
            if (typeof res.columnNumber !== "undefined") // TODO: Get the column number of the unscoped file
            // Possibly, add a data attribute with the original script
            res.columnNumber = "";
            if (typeof res.fileName !== "undefined") res.fileName = (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(res.fileName);
            // Implemented in most major browsers
            if (typeof res.stack !== "undefined") {
                if (navigator.userAgent.includes("Firefox")) {
                    var match = /Firefox\/([\d\.]+)/g.exec(navigator.userAgent);
                    if (match !== null && match.length === 2) {
                        var ver = Number.parseFloat(match[1]);
                        res.stack = res.stack.replace(new RegExp("^(@)(.+)(\\d+".concat(ver >= 30 ? ":\\d+" : "", ")$"), "g"), function(_match, g1, g2, g3) {
                            return g1 + (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(g2) + g3;
                        });
                    }
                } else if (navigator.userAgent.includes("Chrome")) res.stack = res.stack.split("\n").map(function(line) {
                    return line.includes(location.origin /*+ config.prefix*/ ) ? "" : line;
                }).join("\n").replace(/^(at )([A-Za-z\.]+ )?.+(?=:\d+:\d+)/g, function(_match, g1, g2, g3) {
                    return g1 + g2 + (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(g3);
                }).replace(RegExp("(?<=\\().+(?=:\\d+:\\d+\\))", "g"), function(_match, g1, g2) {
                    return g1 + (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(g2);
                });
            }
            // TODO: Support Safari
            return res;
        }
    }),
    globalProp: "Error",
    supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/concealer/file.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_stringProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/stringProxy */ "./src/shared/stringProxy.ts");

(0,$shared_stringProxy__WEBPACK_IMPORTED_MODULE_0__.proxyGetString)("File", [
    "webkitRelativePath"
]); // TODO: Finish all interecptors for functions that create new files
 // TODO: Proxy this
 /*
FIXME: Don't use this interface
FileSystemEntry = new Proxy(FileSystemEntry, {
	construct() {
		const ret = target.construct(...arguments);

		const toURL = ret.toURL;
		ret.toURL = () => afterPrefix(toURL());
	},
});
*/ 


}),
"./src/interceptors/concealer/launchQueue.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/getProxyUrl */ "./src/shared/getProxyUrl.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: Proxy.revocable(launchQueue.setConsumer, {
        apply: function apply(_target, _that, args) {
            var _args = _sliced_to_array(args, 1), callback = _args[0];
            // Intercept the manifest
            return function(params) {
                params.targetUrl = (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(params.targetUrl);
                callback(params);
            };
        }
    }),
    globalProp: "launchQueue.setConsumer",
    supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/concealer/misc/scriptSandboxing.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventTargetInterceptor: function() { return EventTargetInterceptor; },
  ProxyProxyInterceptor: function() { return ProxyProxyInterceptor; },
  evalInterceptors: function() { return evalInterceptors; },
  locationConcealers: function() { return locationConcealers; },
  windowProxyInterceptor: function() { return windowProxyInterceptor; }
});
// FIXME: I have no idea why when I make this a library it doesn't work in the unit test builds
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
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
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var ExposedContextsEnum;
// biome-ignore lint/style/useEnumInitializers: <explanation>
(function(ExposedContextsEnum) {
    ExposedContextsEnum[ExposedContextsEnum["dedicatedWorker"] = 0] = "dedicatedWorker";
    ExposedContextsEnum[ExposedContextsEnum["sharedWorker"] = 1] = "sharedWorker";
    ExposedContextsEnum[ExposedContextsEnum["audioWorklet"] = 2] = "audioWorklet";
    ExposedContextsEnum[ExposedContextsEnum["animationWorklet"] = 3] = "animationWorklet";
    ExposedContextsEnum[ExposedContextsEnum["layoutWorklet"] = 4] = "layoutWorklet";
    ExposedContextsEnum[ExposedContextsEnum["sharedStorageWorklet"] = 5] = "sharedStorageWorklet";
    ExposedContextsEnum[ExposedContextsEnum["paintWorklet"] = 6] = "paintWorklet";
    ExposedContextsEnum[ExposedContextsEnum["serviceWorker"] = 7] = "serviceWorker";
    ExposedContextsEnum[ExposedContextsEnum["window"] = 8] = "window";
})(ExposedContextsEnum || (ExposedContextsEnum = {}));
// These interceptors conceal `location` and accessing `location` from the window object. The window proxy is injected directly into the `this` that IIFE that AeroSandbox is powered by.
// Init
/*
const proxyNamespace = window["<proxyNamespace>"];
proxyNamespace.aeroGel = {};
const aeroGel = proxyNamespace.aeroGel;
aeroGel.fakeVars = {};

\/*
// Scope Checking. This is for DPSC. TODO: Make DPSC configurable on AST parsing and only use it when in a block scope.
$aero.check = val => (val === location ? $location : val);
*\/

aeroGel.fakeVarsStore = new Map<
	string,
	{
		value: string;
		isConst: boolean;
	}
>();

const fakeVarsEmulationGetter = {
	get(_target, prop) {
		if (aeroGel.fakeVarsStore.has(prop))
			return aeroGel.fakeVarsStore.get(prop.value);
		return undefined;
	}
};

aeroGel.fakeVarsLet = new Proxy(aeroGel.fakeVars, {
	...fakeVarsEmulationGetter,
	set(_target, prop, value) {
		aeroGel.fakeVarsStore.set(prop, {
			value
		});
		return true;
	}
});
aeroGel.fakeVarsConst = new Proxy(aeroGel.fakeVars, {
	...fakeVarsEmulationGetter,
	set(_target, prop, value) {
		if (!aeroGel.fakeVarsStore.has(prop)) {
			aeroGel.fakeVarsStore.set(prop, {
				value,
				isConst: true
			});
			return true;
		}
		return false;
	}
});
*/ // biome-ignore lint/suspicious/noExplicitAny: <explanation>
var fakeValueForProxyNamespace = null;
var windowProxyInterceptor = {
    proxifiedObj: function(ctx) {
        // TODO: Don't reveal $aero
        if (Object.values(ctx.specialInterceptionFeatures).includes("aeroGel")) {
            // Prevent detection by checking if the fakeWindow was inherited from the real window.
            var winProto = Object.getPrototypeOf(window);
            return new Proxy(window, {
                get: function get(target, prop) {
                    if (prop === "__proto__") return winProto;
                    if (prop === "location") return window["<proxyNamespace>"].proxifiedLocation;
                    if (typeof target[prop] === "function") return target[prop].bind(window);
                    // Don't allow access to the proxy namespace so emulate the property
                    if (prop === "<proxyNamespace>") {
                        if (fakeValueForProxyNamespace !== null) return fakeValueForProxyNamespace;
                        return undefined;
                    }
                    return target[prop];
                },
                set: function set(target, prop, value) {
                    if (prop === "<proxyNamespace>") {
                        fakeValueForProxyNamespace = value;
                        return true;
                    }
                    return Reflect.set(target, prop, value);
                },
                getPrototypeOf: function getPrototypeOf(_target) {
                    return function() {
                        return winProto;
                    };
                },
                // Conceal the proxy namespace by preventing detection from the "in" operator
                has: function has(target, key) {
                    return key !== "<proxyNamespace>" && Reflect.has(target, key);
                }
            });
        }
    },
    globalProp: '["<proxyNamespace>"].js.proxifiedWindow',
    exposedContexts: 8
};
// @ts-ignore
var wrapScript = '["<proxyNamespace>"].js.wrapScript';
var evalInterceptors = [
    {
        proxifiedObj: Proxy.revocable(Function, {
            construct: function construct(target, args) {
                var _args = _sliced_to_array(args, 1), func = _args[0];
                var bak = "";
                if (typeof func === "string") {
                    bak = func;
                    func = wrapScript(func);
                } else if (typeof func === "function" && !(func.toString() !== "function ".concat(func.name, '() { [native code] }"'))) {
                    bak = func.toString();
                    func = wrapScript(func.toString());
                }
                args[0] = func;
                var inst = Reflect.construct(target, args);
                // Use Object.defined to conceal the getter
                inst.bak = bak;
                // Hide the changes from the site
                inst.toString = function() {
                    return bak;
                };
                return inst;
            }
        }),
        globalProp: "Function"
    },
    {
        proxifiedObj: Proxy.revocable(eval, {
            apply: function apply(target, that, args) {
                args[0] = wrapScript(args[0]);
                return Reflect.apply(target, that, args);
            }
        }),
        // You can't rewrite eval in strict mode
        globalProp: '["<proxyNamespace>"].js.eval'
    }
];
var locationConcealers = [
    {
        proxifiedObj: Proxy.revocable(Object.getOwnPropertyDescriptor, {
            apply: function apply(target, that, args) {
                var _args = _sliced_to_array(args, 2), obj = _args[0], prop = _args[1];
                if (obj === location || obj === window && prop === "location") obj = window["<proxyNamespace>"].proxifiedLocation;
                args[0] = obj;
                return Reflect.apply(target, that, args);
            }
        }),
        globalProp: "Object.getOwnPropertyDescriptor",
        exposedContexts: 8
    },
    {
        proxifiedObj: Proxy.revocable(Reflect.set, {
            apply: function apply(target, that, args) {
                var _args = _sliced_to_array(args, 3), theTarget = _args[0], prop = _args[1], value = _args[2];
                if (theTarget === window) // @ts-ignore
                theTarget = [
                    "<proxyNamespace>"
                ].js.proxifiedWindow;
                if (_instanceof(theTarget, Location)) {
                    window["<proxyNamespace>"].proxifiedLocation[prop] = value;
                    return;
                }
                return Reflect.apply(target, that, args);
            }
        }),
        globalProp: "Reflect.set"
    },
    {
        proxifiedObj: Proxy.revocable(Reflect.get, {
            apply: function apply(target, that, args) {
                var _args = _sliced_to_array(args, 2), theTarget = _args[0], theProp = _args[1];
                if (theTarget === Window) // @ts-ignore
                theTarget = [
                    "<proxyNamespace>"
                ].js.proxifiedWindow;
                if (_instanceof(theTarget, Document)) {
                    if (theProp === "location") return window["<proxyNamespace>"].proxifiedLocation;
                }
                if (_instanceof(theTarget, Location)) return window["<proxyNamespace>"].proxifiedLocation;
                [
                    theProp
                ];
                return Reflect.apply(target, that, args);
            }
        }),
        globalProp: "Reflect.get"
    }
];
var ProxyProxyInterceptor = {
    /**
	 * Fixes `that` in the Proxy handlers being used to reveal the window if the target in the Proxy object is a property on the windowon
	 * You could solve this issue with EST parsing, but that would make JS parsing way slower than it is now, so I opted to use the same window proxy object that AeroGel already uses
	 * EST parsing is flawed compared to AeroGel because it is exponentially  `n` times more expensive to keep track of what will happen in the future, which would be a part of the solution for many UV's JS rewriting escapes. That is why the Discord bundle takes so long to rewrite using full-parse methods.
	 */ proxifiedObj: function(ctx) {
        if (Object.values(ctx.specialInterceptionFeatures).includes("aeroGel")) {
            return new Proxy(Proxy, {
                construct: function construct(target, args) {
                    var _args = _sliced_to_array(args, 2), pTarget = _args[0], handler = _args[1];
                    if ("apply" in handler) {
                        var originalApplyHandler = handler.apply;
                        args[1] = function(_target, _that, pArgs) {
                            // _that is null
                            // _target doesn't work
                            var pTargetBak = pTarget;
                            pTarget = function() {
                                return new Error().stack;
                            };
                            var revealingStackError = pTarget();
                            // Restore functionality of the target method
                            pTarget = pTargetBak;
                            // Get the parents that contain the method
                            var targetName = pTarget.name;
                            var parentObjTree = _to_consumable_array(revealingStackError.matchAll(/Error\\n\s\s\s\sat\s([a-zA-Z.]*)/))[0].split(".".concat(targetName))[0];
                            var pThat = window[parentObjTree];
                            if (pThat === window) // @ts-ignore
                            pThat = windowProxyInterceptor.proxifiedObj;
                            return originalApplyHandler(pTarget, pThat, pArgs);
                        };
                    }
                    return Reflect.construct(target, args);
                }
            });
        }
    },
    globalProp: "Proxy",
    insertLevel: 1
};
var EventTargetInterceptor = {
    /**
	 *  If you intercept `EventTarget.prototype.addEventListener` with a Proxy object to try to trap the window events, once a window event is triggered, `event.source` can be used to get the window object. This API interceptor solves that problem by setting `event.source` to the proxified object.
	 */ proxifiedObj: function(ctx) {
        return new Proxy(EventTarget.prototype.addEventListener, {
            apply: function apply(target, that, args) {
                var _args = _sliced_to_array(args, 2), _eventName = _args[0], handler = _args[1];
                // TODO: Use this same interceptor to implement catchall event interception to prevent using multiple proxies for API Interception
                if (Object.values(ctx.specialInterceptionFeatures).includes("aeroGel")) {
                    args[1] = function(event) {
                        // @ts-ignore
                        event.source = ProxyProxyInterceptor.proxifiedObj(ctx);
                        handler(event);
                    };
                }
                return Reflect.apply(target, that, args);
            }
        });
    },
    globalProp: "EventTarget.prototype.addEventListener"
};



}),
"./src/interceptors/concealer/moduleScripts.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");

/**
 * Checks if a segment is a valid directory name.
 *
 * @param {string} segment - The segment to check.
 * @returns {boolean} Whether the segment is a valid directory name.
 */ function isValidDirectoryName(segment) {
    return segment.match(/^[a-zA-Z0-9\-_]+$/) !== null;
}
/**
 * Removes one level from the given path.
 * This function splits the path into segments, iterates over them in reverse order, and removes the first ".." segment it encounters that is followed by a segment that is not a valid directory name.
 *
 * @param - The path to modify.
 * @returns The modified path.
 *
 * @example let path = "../../dir1/dir2;
 * let modifiedPath = removeOneLevel(path);
 * console.log(modifiedPath); // Outputs: "../dir1/dir2"
 */ function removeOneLevel(path) {
    // Split the path into segments
    var segments = path.split("/");
    // Iterate over the segments in reverse order
    for(var i = segments.length - 1; i >= 0; i--){
        // If the segment is ".." and the next segment is not a valid directory name
        if (segments[i] === ".." && i < segments.length - 1 && !isValidDirectoryName(segments[i + 1])) {
            // Remove this segment
            segments.splice(i, 1);
            break;
        }
    }
    // Join the segments back together into a path
    var modifiedPath = segments.join("/");
    return modifiedPath;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    // @ts-ignore
    proxifiedObj: Proxy.revocable(undefined, {
        apply: function apply(target, that, args) {
            var ret = Reflect.apply(target, that, args);
            // Prevent the paths from going behind the proxy origin
            var curr = ret;
            while(!new URL(curr, (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().href).href.startsWith((0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().href)){
                curr = removeOneLevel(curr);
            }
            return curr;
        }
    }),
    // TODO: Define on $aero
    globalProp: "<proxyNamespace>.moduleScripts.resolve"
});


}),
"./src/interceptors/concealer/navigation.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/getProxyUrl */ "./src/shared/getProxyUrl.ts");
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Not finished
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



/* harmony default export */ __webpack_exports__["default"] = ([
    // Entries
    // FIXME:
    {
        proxifiedObj: Proxy.revocable(navigation.entries, {
            apply: function apply(target, that, args) {
                var entries = Reflect.apply(target, that, args);
                // We may delete some entries, so we will update the index with the new index
                var i = 0;
                var newEntries = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var entry = _step.value;
                        var newEntry = entry;
                        // The original property is a getter property, as the value will be changed dynamically
                        Object.defineProperty(newEntry, "url", {
                            get: function() {
                                return entry.url.replace($shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_0__.afterPrefix, "");
                            }
                        });
                        try {
                            if (new URL(newEntry.url).origin !== (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_1__.proxyLocation)().origin) // The site is not supposed to see this entry
                            return "continue";
                        } catch (e) {
                            return "continue";
                        }
                        Object.defineProperty(newEntry, "index", {
                            value: i++
                        });
                        newEntries.push(newEntry);
                    };
                    for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return newEntries;
            }
        }),
        globalProp: "navigation.entries",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: function() {
            return (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_1__.proxyLocation)().href;
        },
        globalProp: "navigation.transition.from",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: Proxy.revocable(navigation.addEventListener, {
            apply: function apply(target, that, args) {
                var _args = _sliced_to_array(args, 2), messageType = _args[0], listener = _args[1];
                if (messageType === "currententrychange") args[1] = function(event) {
                    if ("url" in event.from) Object.defineProperty(event.from, "url", {
                        get: function() {
                            return (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_0__.afterPrefix)(event.from.url);
                        },
                        configurable: false
                    });
                    event.from.addEventListener = new Proxy(event.from.addEventListener, // @ts-ignore
                    i2.proxifiedObj);
                    listener(event);
                };
                return Reflect.apply(target, that, args);
            }
        }),
        globalProp: "navigation.addEventListener",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
]);


}),
"./src/interceptors/concealer/payment.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/stringProxy */ "./src/shared/stringProxy.ts");
/* harmony import */var $shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $shared/src */ "./src/shared/src.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



// Only supported on Chromium
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        proxifiedObj: Proxy.revocable(PaymentRequest, {
            construct: function construct(target, prop, args) {
                var _args = _sliced_to_array(args, 1), methods = _args[0];
                args[0] = methods.map(function(method) {
                    return (0,$shared_src__WEBPACK_IMPORTED_MODULE_2__["default"])(method);
                });
                return Reflect.construct(target, prop, args);
            }
        }),
        globalProp: "PaymentRequest",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: (0,$shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__.proxyGetString)("MerchantValidationEvent", [
            "validationURL"
        ]),
        globalProp: "MerchantValidationEvent",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
]);


}),
"./src/interceptors/concealer/presentation.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/stringProxy */ "./src/shared/stringProxy.ts");
/* harmony import */var $shared_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $shared/src */ "./src/shared/src.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



/* harmony default export */ __webpack_exports__["default"] = ([
    {
        proxifiedObj: Proxy.revocable(PresentationRequest, {
            construct: function construct(that, args) {
                // Could either be a string or an array
                var _args = _sliced_to_array(args, 1), urls = _args[0];
                if (Array.isArray(urls)) urls = urls.map(function(url) {
                    return (0,$shared_src__WEBPACK_IMPORTED_MODULE_2__["default"])(url);
                });
                else urls = (0,$shared_src__WEBPACK_IMPORTED_MODULE_2__["default"])(urls);
                args[0] = urls;
                return Reflect.construct(that, args);
            }
        }),
        globalProp: "PresentationRequest",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: (0,$shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__.proxyGetString)("PresentationConnection", [
            "url"
        ]),
        globalProp: "PresentationConnection",
        supports: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) | Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
]);


}),
"./src/interceptors/concealer/push.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/stringProxy */ "./src/shared/stringProxy.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: (0,$shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__.proxyGetString)("PushSubscription", [
        "endpoint"
    ]),
    globalProp: "PushSubscription",
    exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/concealer/reporting.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 // TODO: Define the undefined APIs on the Window object. This file is very incomplete.
 // Only supported on chromium
 /*
if ("ReportingObserver" in window) {
  async function rewriteReports(reports) {
    for (let report of reports) {
      // https://w3c.github.io/reporting/#serialize-reports
      const json = report.toJSON();
      report.toJSON = () => ({
				..on,
        url: afterPrefix(json.url),
      });

      if (report instanceof CSPViolationReportBody) {
        // Urls
        CSPViolationReportBody.blockedURL = afterPrefix(
          CSPViolationReportBody.blockedURL
        );
        CSPViolationReportBody.referrer = afterPrefix(
          CSPViolationReportBody.referrer
        );
        CSPViolationReportBody.sourceFile = afterPrefix(
          CSPViolationReportBody.sourceFile
        );

        // Don't reveal the rewrote script
        const resp = await fetch(CSPViolationReportBody.sourceFile);
        CSPViolationReportBody.sample = (await resp.text()).slice(
          0,
          resp.length
        );
      }

      // Error location
      report.sourceFile = afterPrefix(report.sourceFile);
      // TODO: Get the column number from the line in the original script (through .lineNumber)
      report.columnNumber = null;
    }
    return reports;
  }

  ReportingObserver = new Proxy(ReportingObserver, {
    construct(target, args) {
      const [callback] = args;

      args[1] = async (reports) => {
        reports = await rewriteReports(reports);

        callback(...arguments);
      };

      const ret = Reflect.construct(target, args);

      ret.takeRecords = async () => rewriteReports(ret.takeRecords());
    },
  });
}
*/ 


}),
"./src/interceptors/concealer/secure.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    modifyObjectProperty: function modifyObjectProperty() {
        Object.defineProperty(window, "isSecureContext", {
            get: function() {
                return(//flags.emulateSecureContext ||
                (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_1__.proxyLocation)().protocol === "https:");
            }
        });
    },
    globalProp: "isSecureContext",
    exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/concealer/timing.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 // FIXME:
 /*
import { prefix } from "$src/config";

import { afterPrefix } from "$shared/afterPrefix";

/*
There are 3 ways to detect proxies using the Performance API
Using entry.name to expose the url
If the site was rewrote or the headers were modified, the size would be different than what is intended. You can think of this as a form of hash checking
If you make a request to two different proxy origins on the site that are both cached and one has the Clear-Site-Data clearing both proxy origins, the proxy can be detected
*\/

// Private scope
{
	const resInfo = new Map();

	const broadcast = new BroadcastChannel("resCached");

	// Detect if cache is cached
	// TODO: Broadcast this info on the sw
	broadcast.onmessage = event => {
		const { url, cached } = event.data.payload;

		resInfo.add(url, cached);
	};

	function isCached(url) {
		let res = resInfo.get(url);

		return res ? url in res : false;
	}

	async function getHeader(name) {
		const resp = await fetch(url);

		return resp.headers[name];
	}

	async function getBodySize(url) {
		return await getHeader(url, "x-aero-size-body");
	}

	performance.getEntries = new Proxy(performance.getEntries, {
		apply(target, that, args) {
			let entries: PerformanceEntryList = Reflect.apply(
				target,
				that,
				args
			);

			return (
				entries
					// Hide aero's injections
					.filter(
						entry =>
							!entry.name.startsWith(location.origin + prefix)
					)
					.map(async entry => {
						if (entry.name) {
							Object.defineProperty(entry, "name", {
								value: afterPrefix(entry.name),
								writable: false,
							});

							// FIXME: Fix this
							const size = target[prop];

							const resCached = isCached(url);
							const resCrossOrigin = !url.startsWith(
								upToProxyOrigin
							);
							const isZero =
								resCached ||
								resCrossOrigin ||
								"timing" in $aero.sec.headers;

							Object.defineProperty(entry, "transferSize", {
								value: isZero
									? 0
									: await getHeader(
											url,
											"x-aero-size-transfer"
									  ),
								writable: false,
							});
							Object.defineProperty(entry, "encodedBodySize", {
								value: async () => {
									if (isZero) return 0;

									const decodeSize = prop.decodedBodySize;

									// There is no encoding
									if (size === decodeSize)
										return await getBodySize(url);
									else
										return await getHeader(
											url,
											"x-aero-size-encbody"
										);
								},
								writable: false,
							});
							Object.defineProperty(entry, "decodedBodySize", {
								value: async () => {
									if (isZero) return 0;

									return await getBodySize(url);
								},
								writable: false,
							});
						}

						return entry;
					})
			);
		},
	});
}
*/ 


}),
"./src/interceptors/concealer/xml.ts": (function () {
// TODO: Determine if XML needs to be rewrote with XML linked documents, or if it is already handled in the mutation observer


}),
"./src/interceptors/event/messages.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_stringProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/stringProxy */ "./src/shared/stringProxy.ts");
/* harmony import */var $shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/getProxyUrl */ "./src/shared/getProxyUrl.ts");
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$aero_browser/misc/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}




// TODO: Adopt the new API Interceptor design
// Sender
// FIXME: Breaks on Google
/*
postMessage = new Proxy(postMessage, {
	apply(target, that, args) {
		let [data, origin] = args;

		if (origin !== "*") {
			args[1] = "*";

			data.origin = origin;

			args[0] = data;
		}

		return Reflect.apply(target, that, args);
	},
});
*/ function eventInterceptor(type, listener) {
    if (type === "message" || type === "messageerror") return function(event) {
        if (_instanceof(event, MessageEvent)) {
            if (event.origin === (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)().origin) {
                Object.defineProperty(event, "origin", {
                    value: (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)().origin,
                    writable: false
                });
                listener(event);
            }
        }
    };
    if (type === "storage") {
        return function(event) {
            if (_instanceof(event, StorageEvent)) {
                Object.defineProperty(event, "url", {
                    value: (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(event.url),
                    writable: false
                });
                // Ensure the event isn't a clear event
                if (event.key !== null) {
                    var proxyKey = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$aero_browser/misc/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event.key);
                    if (proxyKey !== null) Object.defineProperty(event, "key", {
                        value: proxyKey,
                        writable: false
                    });
                }
            }
            listener(event);
        };
    }
    if (type === "hashchange") {
        return function(event) {
            if (_instanceof(event, HashChangeEvent)) {
                Object.defineProperty(event, "newURL", {
                    value: (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(event.newURL),
                    writable: false
                });
                Object.defineProperty(event, "oldURL", {
                    value: (0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(event.oldURL),
                    writable: false
                });
            }
            listener(event);
        };
    }
    return listener;
}
function setHandler(type) {
    var set;
    Object.defineProperty(window, "on".concat(type), {
        set: function(listener) {
            set = eventInterceptor(type, listener);
        },
        get: function() {
            return set;
        }
    });
}
setHandler("message");
setHandler("messageerror");
setHandler("storage");
setHandler("hashchange");
// Reciever concealer
// @ts-ignore
(0,$shared_stringProxy__WEBPACK_IMPORTED_MODULE_0__["default"])("addEventListener", new Map(1, eventInterceptor));


}),
"./src/interceptors/externalResourceLoc/contentIndex.ts": (function () {
// TODO: Implement


}),
"./src/interceptors/externalResourceLoc/share.ts": (function () {
// navigator.share
// TODO: Implement


}),
"./src/interceptors/loc/history.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/src */ "./src/shared/src.ts");
/* harmony import */var $src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $src/interceptors/loc/location */ "./src/interceptors/loc/location.ts");



var historyState = {
    apply: function apply(target, that, args) {
        var url = "";
        if (args.length > 2 && typeof args[2] === "string") {
            url = args[2];
        }
        try {
            if (args.length > 2) {
                args[2] = (0,$shared_src__WEBPACK_IMPORTED_MODULE_1__["default"])(url, (0,$src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)().href);
            }
            if (args.length > 3) {
                args[3] = (0,$shared_src__WEBPACK_IMPORTED_MODULE_1__["default"])(url, (0,$src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)().href);
            }
        } catch (error) {
            $aero.error("An error occurred while intercepting the source in the History API interceptor: ", error);
        }
        return Reflect.apply(target, that, args);
    }
};
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        proxifiedObj: Proxy.revocable(history.pushState, historyState),
        globalProp: "history.pushState",
        exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: Proxy.revocable(history.replaceState, historyState),
        globalProp: "history.replaceState",
        exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
]);


}),
"./src/interceptors/loc/location.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");

// Prevent detection by instanceof
var inheritedObject = {};
Reflect.setPrototypeOf(inheritedObject, Object.getPrototypeOf(location));
var wrap = function(url) {
    return $aero.config.prefix + url;
};
// TODO: Set locationProxy as not writable and not configurable
/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: new Proxy(inheritedObject, {
        get: function get(target, prop) {
            function internal() {
                if (typeof target[prop] === "function") {
                    // @ts-ignore
                    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                    var props = {
                        toString: function() {
                            return (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().toString();
                        }
                    };
                    // These properties below are not defined in workers
                    if ("assign" in location) props.assign = function(url) {
                        return location.assign(wrap(url));
                    };
                    if ("replace" in location) props.replace = function(url) {
                        return location.replace(wrap(url));
                    };
                    return prop in props && prop in location ? props[prop] : target[prop];
                }
                var fakeUrl = $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation;
                /**
				 * `ancestorOrigins` is only found in Chrome
				 */ var customProps = {
                };
                if (prop in customProps) return customProps[prop];
                if (prop in fakeUrl) return fakeUrl[prop];
                return location[prop];
            }
            var ret = internal();
            return ret;
        },
        set: function set(target, prop, value) {
            if (prop === "pathname" || prop === "href" && value.startsWith("/")) target[prop] = $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.upToProxyOrigin + value;
            else target[prop] = value;
            return true;
        }
    }),
    globalProp: '["<proxyNamespace>"].proxifiedLocation'
}); /*
TODO: Make these proper API Interceptors
Object.defineProperty(document, "domain", {
	// @ts-ignore
	get: () => locationProxy.hostname
});
Object.defineProperty(document, "URL", {
	// @ts-ignore
	get: () => locationProxy.href
});
*/ 


}),
"./src/interceptors/loc/navigator.ts": (function () {
 /*
import rewriteSrc from "$shared/src";

import { proxyLocation } from "$shared/proxyLocation";


Navigator.prototype.sendBeacon = new Proxy(Navigator.prototype.sendBeacon, {
	apply(target, that, args) {
		const [url] = args;

		args[0] = rewriteSrc(url, proxyLocation().href);

		return Reflect.apply(target, that, args);
	},
});

// Sandbox data to their respective origin
{
	const protoHandler = {
		apply(target, that, args) {
			const [scheme, url] = args;

			args[0] = $aero.proto.set(scheme);
			args[1] = rewriteSrc(url, proxyLocation().href);

			return Reflect.apply(target, that, args);
		},
	};

	navigator.registerProtocolHandler = new Proxy(
		navigator.registerProtocolHandler,
		protoHandler
	);
	navigator["unregisterProtocolHandler"] = new Proxy(
		navigator["unregisterProtocolHandler"],
		protoHandler
	);
}
{
	const key = "aero.badges";
	const item = localStorage.getItem(key);

	let badges = item === null ? [] : JSON.parse(item) ?? [];

	let badge;

	const found = badges.find(
		badge => badge.origin === proxyLocation().origin,
		(_el, i) => {
			badge = badges[i];
		}
	);

	if (!found) {
		badge = {
			origin: proxyLocation().origin,
			i: 0,
		};

		badges.push(badge);
	}

	const setBak = navigator.setAppBadge;

	function getTotal() {
		let i = 0;

		for (const badge of badges) i += badge.i;

		return i;
	}
	function updateCount() {
		badges.find(
			badge => badge.origin === proxyLocation().origin,
			(_el, i) => {
				// Local
				badges[i] = badge;
				// Update
				setBak(getTotal());
				// Save
				localStorage.setItem(key, badge);
			}
		);
	}

	navigator.setAppBadge = new Proxy(navigator.clearAppBadge, {
		apply(target, that, args) {
			const [contents] = args;

			badge.i = contents;

			updateCount();
		},
	});
	navigator.clearAppBadge = new Proxy(navigator.clearAppBadge, {
		apply() {
			badge.i = 0;

			updateCount();
		},
	});
}
*/ 

}),
"./src/interceptors/loc/open.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/src */ "./src/shared/src.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedApi: new Proxy(open, {
        apply: function apply(target, that, args) {
            var _args = _sliced_to_array(args, 1), url = _args[0];
            args[0] = (0,$shared_src__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
            return Reflect.apply(target, that, args);
        }
    }),
    globalProp: "open",
    exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/originIsolators/privacySandbox/credentials.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $shared_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/escape */ "./src/shared/escape.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");
/* harmony import */var $shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $shared/getProxyUrl */ "./src/shared/getProxyUrl.ts");
// TODO: This is a WIP
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/**
 * This whole file encompasses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API WebAuthn}, {@link https://developer.mozilla.org/en-US/docs/Web/API/FedCM_API FedCM}, {@link https://wicg.github.io/web-otp WebOTP} APIs
 */ 


var credentialStore = new WeakMap();
var publicKeyCredentialStore = new WeakMap();
// Credential Classes
// From WebAuthn
var passwordCredential = new WeakMap();
var federatedCredential = new WeakMap();
var publicKeyCredential = new WeakMap();
// FedCM (draft)
var identityCredential = new WeakMap();
var otpCredential = new WeakMap();
function proxifyCredentials(credentials) {
    var proxifiedCredentials = credentials;
    /**
	 * @see {@link https://w3c.github.io/webappsec-credential-management/#credential-type-registry-credential-type CredentialTypeRegistry}
	 * It seems as if MDN's resource for the credential types is not updated yet to reflect the FedCM Credential Types
	 */ switch(credentials.type){
        /**
		 * @see {@link https://w3c.github.io/webappsec-credential-management/#federatedcredential-interface FederatedCredential}
		 */ case "federated":
            break;
        /**
		 * @see
		 */ case "identity":
            break;
        /**
		 * @see {@link https://wicg.github.io/web-otp/#otpcredential OTPCredential}
		 */ case "otp":
            //
            var otpCredentials = proxifiedCredentials;
            break;
        /**
		 * @see {@link https://w3c.github.io/webappsec-credential-management/#passwordcredential-interface PasswordCredential}
		 */ case "password":
            break;
        /**
		 * @see {@link https://w3c.github.io/webauthn/#publickeycredential PublicKeyCredential}
		 */ case "public-key":
            break;
        default:
            $aero.logger.fatalErr("FedCM", "Unknown credential type");
    }
    return proxifiedCredentials;
}
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        // TODO: Support the rest of the navigator.credentials API - https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer
        proxifiedObj: Proxy.revocable(navigator.credentials.store, {
            apply: function apply(target, that, args) {
                var _args = _sliced_to_array(args, 1), credentialsObj = _args[0];
                var proxifiedCredentialObj = _object_spread({
                    federated: {
                        id: (0,$shared_escape__WEBPACK_IMPORTED_MODULE_0__["default"])(credentialsObj.id)
                    }
                }, credentialsObj);
                // @ts-ignore
                var proxifiedCredentials = Reflect.construct(target, that, args.shift().push(proxifiedCredentialObj));
                // @ts-ignore
                var credentials = Reflect.construct(target, that, args);
                /*
				There is no point of backing it up if it doesn't have what we need. We know it will error anyways
				*/ if ("federated" in credentialsObj && "id" in credentialsObj.federated) credentialStore.set(proxifiedCredentials, credentials);
            }
        }),
        globalProp: "navigator.credentials",
        exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: Proxy.revocable(navigator.credentials.store, {
            apply: function apply(_target, _that, args) {
                var credentialsObj = args[0];
                args[0] = proxifyCredentials(credentialsObj);
            }
        }),
        globalProp: "navigator.credentials.store",
        exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    {
        proxifiedObj: Proxy.revocable(navigator.credentials.get, {
            apply: function apply(target, that, args) {
                var options = args[0];
                if (!options) // Return to normal operations and let the browser throw its proper exception
                return Reflect.apply(target, that, args);
                var newOptions = options;
                // https://w3c.github.io/webappsec-credential-management/#dictdef-federatedcredentialrequestoptions
                newOptions.federated = {
                    /*
					It requires an origin; the path does not matter. The plan is to use passwords later on and do the escaping server-side on a [Bare Extended](https://github.com/tomphttp/specifications-v4/blob/master/optional-specs/BareExtended.md) endpoint to route to the correct identity provider. 😬
					@see {@link https://w3c.github.io/webappsec-credential-management/#provider-identification:~:text=the%20origin%20the%20provider%20uses%20for%20sign%20in}
					*/ providers: options.federated.providers.map(function(_provider) {
                        return location.origin;
                    })
                };
                var newArgs = args;
                args[0] = options;
                var keyCredential = Reflect.apply(target, that, newArgs);
                if (_instanceof(keyCredential, PublicKeyCredential)) {
                    var proxifiedPublicKeyCredential = _object_spread({}, keyCredential);
                    /**
					 * @see {@link https://w3c.github.io/webauthn/#dom-authenticatorresponse-clientdatajson}
					 * @see {@link https://w3c.github.io/webauthn/#dictdef-collectedclientdata}
					 */ var clientData = JSON.parse(new TextDecoder().decode(keyCredential.response.clientDataJSON));
                    var proxifiedClientData = clientData;
                    Object.defineProperties(proxifiedClientData, {
                        type: {
                            // Make readonly
                            writable: false,
                            configurable: false
                        },
                        origin: {
                            // @ts-ignore
                            value: (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)().origin,
                            // Make readonly
                            writable: false,
                            configurable: false
                        },
                        topOrigin: {
                            // @ts-ignore
                            value: (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)({
                                // Make this an actual option lol
                                topLevel: true
                            }).origin,
                            // Make readonly
                            writable: false,
                            configurable: false
                        },
                        crossOrigin: {
                            // @ts-ignore
                            value: new URL((0,$shared_getProxyUrl__WEBPACK_IMPORTED_MODULE_3__.afterPrefix)(clientData.origin)).origin !== (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)().origin,
                            // Make readonly
                            writable: false,
                            configurable: false
                        }
                    });
                    Object.defineProperty(proxifiedPublicKeyCredential.response, "clientDataJSON", {
                        // @ts-ignore
                        value: new TextEncoder().encode(JSON.stringify(proxifiedClientData)),
                        // Make readonly
                        writable: false,
                        configurable: false
                    });
                    return proxifiedPublicKeyCredential;
                } else {
                    return keyCredential;
                }
            }
        }),
        globalProp: "navigator.credentials.get",
        exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
]);


}),
"./src/interceptors/req/eventSource.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/stringProxy */ "./src/shared/stringProxy.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: function(ctx) {
        if ("requestUrlProxifier" in ctx.specialInterceptionFeatures && ctx.specialInterceptionFeatures.requestUrlProxifier === true) return (0,$shared_stringProxy__WEBPACK_IMPORTED_MODULE_1__.proxyConstructString)("EventSource", [
            1
        ]);
        return;
    },
    globalProp: "EventSource",
    specialInterceptionFeatures: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/req/fetch.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$aero_browser/util/swlessUtils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: Proxy.revocable(fetch, {
        apply: function apply(target, that, arg) {
            var _args = _sliced_to_array(args, 2), opts = _args[1];
            opts !== null && opts !== void 0 ? opts : opts = {};
            opts = _instanceof(args[0], Request) ? _object_spread({}, args[0], opts) : opts;
            var headers = {};
            if (opts.cache && // only-if-cached requires the mode to be same origin
            !(opts.mode !== "same-origin" && opts.cache === "only-if-cached")) {
                // Emulate cache mode
                if (_instanceof(headers, Headers)) headers.append("x-aero-cache", opts.cache);
                else headers["x-aero-cache"] = opts.cache;
            }
            if ($aero.sandbox.swlessEnabled) {
                var request = createRequest(opts, headers);
                var nonDefaultResp = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$aero_browser/util/swlessUtils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                    request: request
                });
                if (nonDefaultResp) return nonDefaultResp;
            }
            return Reflect.apply(target, that, args).then(function(resp) {
                var pass = resp.headers.get("x-headers");
                if (pass !== null) resp.headers = new Headers(JSON.parse(pass));
                // Conceal the site's origin if it is revealed
                var respUrl = new URL(resp.url);
                if (respUrl.origin === location.origin) return new Response();
                return resp;
            });
        }
    }),
    globalProp: "fetch",
    exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
function createRequest(opts, headers) {
    return new Request(opts, {
        headers: headers
    });
}


}),
"./src/interceptors/req/wrtc.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var $shared_escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $shared/escape */ "./src/shared/escape.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
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
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>

/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: Proxy.revocable(RTCPeerConnection, {
        construct: function construct(target, args) {
            var _args = _sliced_to_array(args, 1), config = _args[0];
            // Backup
            var iceServersBak = config.iceServers;
            if (config.iceServers && config.wrtcBackends.length > 0) {
                config.iceServers = config.wrtcBackends;
                args[0] = config;
            }
            var ret = _construct(target, _to_consumable_array(args));
            ret["_iceServers"] = iceServersBak;
            return ret;
        },
        get: function get(target, prop) {
            return typeof prop === "string" && (0,$shared_escape__WEBPACK_IMPORTED_MODULE_1__["default"])("iceServers").test(prop) ? target["_".concat(prop)] : Reflect.get(target, prop);
        },
        set: function set(target, prop, value) {
            if (typeof prop === "string" && (0,$shared_escape__WEBPACK_IMPORTED_MODULE_1__["default"])("iceServers").test(prop)) {
                target["_".concat(prop)] = value;
                return true;
            }
            return Reflect.set(target, prop, value);
        }
    }),
    globalProp: "RTCPeerConnection",
    forAltProtocol: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    exposedContexts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});


}),
"./src/interceptors/req/ws.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _mercuryworkshop_bare_mux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mercuryworkshop/bare-mux */ "../../node_modules/@mercuryworkshop/bare-mux/dist/index.mjs");


// TODO: (Percs) This file is incomplete
var client = new _mercuryworkshop_bare_mux__WEBPACK_IMPORTED_MODULE_1__.BareClient();
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        proxifiedObj: Proxy.revocable(WebSocket, {
            construct: function construct(target, args) {
                return client.createWebSocket(args[0], args[1], target, {
                    "User-Agent": navigator.userAgent
                }, ArrayBuffer.prototype);
            }
        }),
        forAltProtocol: Object(function webpackMissingModule() { var e = new Error("Cannot find module '$types/apiInterceptors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        globalProp: "Websocket"
    }
]);


}),
"./src/interceptors/req/wt.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
// Only supported on Chromium
/* harmony default export */ __webpack_exports__["default"] = ({
    proxifiedObj: Proxy.revocable(WebTransport, {
        construct: function construct(target, args) {
            // I'm waiting for the bare/wisp spec to support WebTransport before implementing this
            return Reflect.construct(target, args);
        }
    }),
    globalProp: "WebTransport"
});


}),
"./src/interceptors/storage/cookie.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var $src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $src/interceptors/loc/location */ "./src/interceptors/loc/location.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$shared/hared/cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


function getOriginalCookie(cookie) {
    // Not done
    return cookie;
}
var apiInterceptors = [];
// Get the types for the cookieStore API and import them in index.d.ts for us here
if ("cookieStore" in window) {
    apiInterceptors.push({
        storageProxifiedObj: function(cookieStoreId) {
            return Proxy.revocable(cookieStore.set, {
                apply: function apply(target, that, args) {
                    var _args = _sliced_to_array(args, 1), cookie = _args[0];
                    // TODO: Isolate contextual identity
                    cookie.domain = (0,$src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().domain;
                    cookie.path = (0,$src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_0__.upToProxyOrigin)() + cookie.path;
                    args[0] = cookie;
                    return Reflect.apply(target, that, args);
                }
            });
        },
        globalProp: "cookieStore.set"
    });
    //cookieStore.set =
    /*
	cookieStore.get = new Proxy(cookieStore.set, {
		apply(target, that, args) {
			return getOriginalCookie(
				prefix,
				Reflect.apply(target, that, args)
			);
		},
	});
	*/ cookieStore.addEventListener = new Proxy(cookieStore.addEventListener, {
        apply: function apply(target, that, args) {
            var _args = _sliced_to_array(args, 2), type = _args[0], listener = _args[1];
            if (type === "change") args[1] = function(event) {
                if (_instanceof(event, CookieChangeEvent)) {
                /*
						TODO: Rewrite
						event.changed
						event.deleted
						*/ }
                event.listener(event);
            };
            return Reflect.apply(target, that, args);
        }
    });
}
{
    var cookieBak = document.cookie;
    Object.defineProperty(document, "cookie", {
        get: function() {
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '$shared/hared/cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(cookieBak, (0,$src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)());
        },
        set: function(value) {
            return cookieBak = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$shared/hared/cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value, (0,$src_interceptors_loc_location__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)());
        }
    });
}

}),
"./src/interceptors/storage/fs.ts": (function () {
// TODO: Make it so that any of the directory names inside of the file system APIs are escaped with ${PROXY_ORIGIN}/${ORIGINAL VALUE}
/*
FileSystemDirectoryHandle.prototype.getDirectory = new Proxy(
	FileSystemDirectoryHandle.prototype.getDirectory,
	{
		apply: () => {
			return Reflect.apply(...arguments);
			// TODO: Implement this stub
		}
	}
);
FileSystemDirectoryHandle.prototype.setDirectory = new Proxy(
	FileSystemDirectoryHandle.prototype.setDirectory,
	{
		apply: () => {
			return Reflect.apply(...arguments);
			// TODO: Implement this stub
		}
	}
);
*/ 

}),
"./src/interceptors/storage/iDB.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/interceptors/storage/shared.ts");
/* harmony import */var _shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

/* harmony default export */ __webpack_exports__["default"] = ([
    {
        storageProxifiedObj: function(cookieStoreId) {
            return Proxy.revocable(indexedDB.open, (0,_shared__WEBPACK_IMPORTED_MODULE_0__.storageNomenclature)(cookieStoreId));
        },
        globalProp: "indexedDB.open"
    },
    {
        storageProxifiedObj: function(cookieStoreId) {
            return Proxy.revocable(indexedDB.deleteDatabase, (0,_shared__WEBPACK_IMPORTED_MODULE_0__.storageNomenclature)(cookieStoreId));
        },
        globalProp: "indexedDB.deleteDatabase"
    },
    {
        storageProxifiedObj: function(cookieStoreId) {
            return Proxy.revocable(indexedDB.databases, {
                apply: function apply(target, that, args) {
                    return _async_to_generator(function() {
                        var dbs;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Reflect.apply(target, that, args)
                                    ];
                                case 1:
                                    dbs = _state.sent();
                                    dbs.map(function(db) {
                                        if (_instanceof(db, Error)) return db;
                                        var newName = aeroConfig.prefix + db.name;
                                        if (newName) newName = "".concat(cookieStoreId, "_").concat(newName);
                                        db.name = newName;
                                        return db;
                                    });
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            });
        },
        globalProp: "indexedDB.databases"
    }
]);


}),
"./src/interceptors/storage/shared.ts": (function () {
throw new Error("  × Module build failed:\n  ├─▶   ×\n  │     │   \u001b[31mx\u001b[0m Expected ';', '}' or <eof>\n  │     │    ,-[\u001b[36;1;4m/home/me/js/aero/src/AeroSandbox/src/interceptors/storage/shared.ts\u001b[0m:3:1]\n  │     │  \u001b[2m3\u001b[0m | const storagePrefix = escapeWithOrigin;\n  │     │  \u001b[2m4\u001b[0m |\n  │     │  \u001b[2m5\u001b[0m | const storageNomenclature = cookieStoreId => {\n  │     │  \u001b[2m6\u001b[0m | \tapply(target, that, args) {\n  │     │    : \u001b[31;1m ^^^^^^^^^^^^|^^^^^^^^^^^^\u001b[0m\u001b[33;1m ^\u001b[0m\n  │     │    :              \u001b[31;1m`-- \u001b[31;1mThis is the expression part of an expression statement\u001b[0m\u001b[0m\n  │     │  \u001b[2m7\u001b[0m | \t\tconst [key] = args;\n  │     │  \u001b[2m8\u001b[0m |\n  │     │  \u001b[2m9\u001b[0m | \t\tlet newKey = storagePrefix(key);\n  │     │    `----\n  │     │\n  │   \n  ╰─▶ Syntax Error\n");


}),
"./src/interceptors/storage/sharedStorage.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '$aero/examples/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var prefix = Object(function webpackMissingModule() { var e = new Error("Cannot find module '$aero/examples/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// TODO: Import types for the Shared Storage API
// TODO: Proxify it with the new system
/*
if (flags.nonstandard && "sharedStorage" in window) {
	// @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API}
	// @see {@link https://developers.google.com/privacy-sandbox/relevance/shared-storage}
	window.sharedStorage = 
  }
  */ /* harmony default export */ __webpack_exports__["default"] = ([
    {
        proxifiedObj: Proxy.revocable(window.sharedStorage, {
            apply: function apply(target, that, args) {
                // TODO: Implement
                return Reflect.apply(target, that, args);
            }
        }),
        globalProp: "sharedStorage"
    }
]);


}),
"./src/interceptors/storage/sql.ts": (function () {
throw new Error("  × Module build failed:\n  ├─▶   ×\n  │     │   \u001b[31mx\u001b[0m Expected ';', got '{'\n  │     │     ,-[\u001b[36;1;4m/home/me/js/aero/src/AeroSandbox/src/interceptors/storage/sql.ts\u001b[0m:4:1]\n  │     │  \u001b[2m 4\u001b[0m | const { prefix } = config;\n  │     │  \u001b[2m 5\u001b[0m |\n  │     │  \u001b[2m 6\u001b[0m | const createHandler = (cookieStoreId?) => {\n  │     │  \u001b[2m 7\u001b[0m | \treturn apply(target, that, args) {\n  │     │     : \u001b[31;1m                                  ^\u001b[0m\n  │     │  \u001b[2m 8\u001b[0m | \t\tconst [key]: [string] = args;\n  │     │  \u001b[2m 9\u001b[0m |\n  │     │  \u001b[2m10\u001b[0m | \t\tlet newKey = prefix + key;\n  │     │     `----\n  │     │\n  │   \n  ╰─▶ Syntax Error\n");


}),
"./src/interceptors/storage/storage.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 // TODO: Implement


}),
"./src/interceptors/worker/workers.ts": (function () {
/*
import config from "$src/config";
const { flags } = config;

import rewriteSrc from "$shared/hared/src";

import { proxyLocation } from "$shared/proxyLocation";


if (flags.nestedWorkers)
	if ("serviceWorker" in navigator) {
		// FIXME: Somehow unregisters all service workers, and then reloads on https://radon.games
		// Patch
		Object.defineProperty(navigator, "serviceWorker", {
			get() {
				return undefined;
			},
		});

		/*
		// This api is only exposed in secure contexts
		navigator.serviceWorker.register = new Proxy(
			navigator.serviceWorker.register,
			{
				apply(target, that, args) {
					const [path, opts] = args;

					args[0] = `${rewriteSrc(path, proxyLocation().href)}?mod=${
						opts.type === "module"
					}`;

					$aero.error(
						`Registering a nested service worker\n${path} ➜ ${args[0]}`
					);

					return Reflect.apply(target, that, args);
				},
			}
		);

		const rewriteReg = reg =>
			// Don't let the site see the aero sw
			(reg.active.scriptURL = reg.active.scriptURL.match(
				new RegExp(
					`(?<=${location.origin}${prefix}${proxyLocation().origin}).*`,
					"g"
				)
			)[0]);

		navigator.serviceWorker.getRegistration = new Proxy(
			navigator.serviceWorker.getRegistration,
			{
				apply: async target =>
					(await target()).map(reg => rewriteReg(reg)),
			}
		);
		navigator.serviceWorker.getRegistrations = new Proxy(
			navigator.serviceWorker.getRegistrations,
			{
				apply: async target => rewriteReg(await target()),
			}
		);
		*\/
	}
*/ 

}),
"./src/shared/escape.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; },
  escapeWithOrigin: function() { return escapeWithOrigin; }
});
/* harmony import */var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts");

/** Escapes a string with underscores. */ /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(str) {
    var origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return RegExp("^(?:".concat(origin, "_+)?").concat(str, "$"), "g");
}
/**
 * Escape a string with an origin in the prefix; useful for isolation.
 * @param origin Defaults to the current proxy origin.
 * */ function escapeWithOrigin(str) {
    var origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0,$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().origin;
    return "".concat(origin, "_").concat(str);
}



}),
"./src/shared/getProxyUrl.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  afterOrigin: function() { return afterOrigin; },
  afterPrefix: function() { return afterPrefix; }
});
/* harmony import */var _sharedConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedConfig */ "./src/shared/sharedConfig.ts");

// These methods allow the API Interceptors to get the proxy URL from the real URL
/*
Separate the prefix from the url to get the proxy url isolated
This is primarily used for concealers
*/ function afterPrefix(realURL) {
    self.logger.log("".concat(location.origin).concat((0,_sharedConfig__WEBPACK_IMPORTED_MODULE_0__["default"])("prefix")));
    return realURL.replace(new RegExp("^(".concat(location.origin).concat((0,_sharedConfig__WEBPACK_IMPORTED_MODULE_0__["default"])("prefix"), ")"), "g"), "");
}
function afterOrigin(realURL) {
    return realURL.replace(new RegExp("^(".concat(location.origin, ")"), "g"), "");
}



}),
"./src/shared/isHTML.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type) {
    return type.startsWith("text/html") || type.startsWith("application/xhtml+xml");
};


}),
"./src/shared/proxyLocation.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  proxyLocation: function() { return proxyLocation; },
  upToProxyOrigin: function() { return upToProxyOrigin; }
});
/* harmony import */var _sharedConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedConfig */ "./src/shared/sharedConfig.ts");
/* harmony import */var _getProxyUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProxyUrl */ "./src/shared/getProxyUrl.ts");


var proxyLocation = function() {
    return new URL((0,_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(location.href));
};
var upToProxyOrigin = function() {
    return (0,_sharedConfig__WEBPACK_IMPORTED_MODULE_0__["default"])("prefix") + proxyLocation().origin;
};



}),
"./src/shared/sharedConfig.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(configProp) {
    return "$aero" in self ? self.$aero[configProp] : self.config[configProp];
};


}),
"./src/shared/src.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _sharedConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedConfig */ "./src/shared/sharedConfig.ts");
/* harmony import */var _proxyLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxyLocation */ "./src/shared/proxyLocation.ts");


/**
 * This should not be used for processed html attributes, rather rewriteSrcHtml
 * @param - The url to rewrite
 */ function rewriteSrc(url) {
    var proxyHref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (0,_proxyLocation__WEBPACK_IMPORTED_MODULE_1__.proxyLocation)().href;
    // Protocol
    var rewroteUrl = /^(https?:\/\/)/g.test(url) ? (0,_sharedConfig__WEBPACK_IMPORTED_MODULE_0__["default"])("prefix") + url : new URL(url, proxyHref).href;
    return rewroteUrl;
}
/* harmony default export */ __webpack_exports__["default"] = (rewriteSrc);


}),
"./src/shared/stringProxy.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  proxyConstructString: function() { return proxyConstructString; },
  proxyGetString: function() { return proxyGetString; }
});
/* harmony import */var _sharedConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedConfig */ "./src/shared/sharedConfig.ts");
/* harmony import */var _getProxyUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProxyUrl */ "./src/shared/getProxyUrl.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
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
            if (!_n && _i["return"] != null) _i["return"]();
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
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


function proxy(api, // biome-ignore lint/complexity/noBannedTypes: <explanation>
mapRewriteArgs, // biome-ignore lint/complexity/noBannedTypes: <explanation>
rewriteResult) {
    if (api in window) return new Proxy(window[api], {
        apply: function apply(target, that, args) {
            if (mapRewriteArgs) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = mapRewriteArgs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), argNum = _step_value[0], rewrite = _step_value[1];
                        if (rewrite) args[argNum] = rewrite.apply(void 0, _to_consumable_array(args));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            var ret = Reflect.apply(target, that, args);
            if (rewriteResult) ret = rewriteResult.apply(void 0, [
                ret
            ].concat(_to_consumable_array(args)));
            return ret;
        }
    });
}
function proxyGet(api, // biome-ignore lint/complexity/noBannedTypes: <explanation>
mapReplaceProps) {
    if (api in window) return new Proxy(window[api], {
        get: function get(target, theProp) {
            if (typeof theProp === "string" && mapReplaceProps.has(theProp)) {
                var handler = mapReplaceProps.get(theProp);
                if (handler) return handler(theProp);
            }
            return Reflect.get(target, theProp);
        }
    });
}
function proxyConstructString(apiName, argNums, res) {
    var _arguments = arguments;
    if (argNums) {
        var map = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var argNum = _step.value;
                map.set(argNum, function() {
                    return (0,_sharedConfig__WEBPACK_IMPORTED_MODULE_0__["default"])("prefix") + _arguments[argNum];
                });
            };
            // I forgot what this is for
            for(var _iterator = argNums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return proxy(apiName, map);
    }
    if (res) return proxy(apiName, undefined, function(res) {
        return (0,_getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix)(res);
    });
}
function proxyGetString(apiName, props) {
    var map = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var prop = _step.value;
            map.set(prop, _getProxyUrl__WEBPACK_IMPORTED_MODULE_1__.afterPrefix);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return proxyGet(apiName, map);
}
/* harmony default export */ __webpack_exports__["default"] = (proxy);



}),
"./src/interceptors/README.md": (function () {
throw new Error("  × Module parse failed:\n  ╰─▶   × JavaScript parsing error: Expected ident\n         ╭─[1:1]\n       1 │ ## Index\n         ·  ─\n       2 │\n       3 │ These folders contain the code for aero's API interception\n         ╰────\n      \n  help: \n        You may need an appropriate loader to handle this file type.\n");


}),
"./src/interceptors/concealer/element.ts.old": (function () {
throw new Error("  × Module parse failed:\n  ╰─▶   × JavaScript parsing error: Expected ',', got ':'\n          ╭─[10:1]\n       10 │ // This file isn't needed for proxies and is for Faker. This could be done using the shadow dom, but that isn't performant.\n       11 │ const concealAttrs = (\n       12 │     escapeRules: Map<any, AeroSandboxTypes.EscapeRule[]>\n          ·                ─\n       13 │ ): void => {\n       14 │     for (const [targetElClass, escapeRules] of escapeRules) {\n          ╰────\n      \n  help: \n        You may need an appropriate loader to handle this file type.\n");


}),
"./src/interceptors/originIsolators/privacySandbox/README.md": (function () {
throw new Error("  × Module parse failed:\n  ╰─▶   × JavaScript parsing error: Expected ';', '}' or <eof>\n         ╭─[1:1]\n       1 │ # FLoC APIs\n         ·        ────\n       2 │\n       3 │ > This is a stub\n         ╰────\n      \n  help: \n        You may need an appropriate loader to handle this file type.\n");


}),
"./src/interceptors sync recursive ^\\.\\/.*$": (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./README.md": "./src/interceptors/README.md",
  "./concealer/blob": "./src/interceptors/concealer/blob.ts",
  "./concealer/blob.ts": "./src/interceptors/concealer/blob.ts",
  "./concealer/css": "./src/interceptors/concealer/css.ts",
  "./concealer/css.ts": "./src/interceptors/concealer/css.ts",
  "./concealer/element.ts.old": "./src/interceptors/concealer/element.ts.old",
  "./concealer/error": "./src/interceptors/concealer/error.ts",
  "./concealer/error.ts": "./src/interceptors/concealer/error.ts",
  "./concealer/file": "./src/interceptors/concealer/file.ts",
  "./concealer/file.ts": "./src/interceptors/concealer/file.ts",
  "./concealer/launchQueue": "./src/interceptors/concealer/launchQueue.ts",
  "./concealer/launchQueue.ts": "./src/interceptors/concealer/launchQueue.ts",
  "./concealer/misc/scriptSandboxing": "./src/interceptors/concealer/misc/scriptSandboxing.ts",
  "./concealer/misc/scriptSandboxing.ts": "./src/interceptors/concealer/misc/scriptSandboxing.ts",
  "./concealer/moduleScripts": "./src/interceptors/concealer/moduleScripts.ts",
  "./concealer/moduleScripts.ts": "./src/interceptors/concealer/moduleScripts.ts",
  "./concealer/navigation": "./src/interceptors/concealer/navigation.ts",
  "./concealer/navigation.ts": "./src/interceptors/concealer/navigation.ts",
  "./concealer/payment": "./src/interceptors/concealer/payment.ts",
  "./concealer/payment.ts": "./src/interceptors/concealer/payment.ts",
  "./concealer/presentation": "./src/interceptors/concealer/presentation.ts",
  "./concealer/presentation.ts": "./src/interceptors/concealer/presentation.ts",
  "./concealer/push": "./src/interceptors/concealer/push.ts",
  "./concealer/push.ts": "./src/interceptors/concealer/push.ts",
  "./concealer/reporting": "./src/interceptors/concealer/reporting.ts",
  "./concealer/reporting.ts": "./src/interceptors/concealer/reporting.ts",
  "./concealer/secure": "./src/interceptors/concealer/secure.ts",
  "./concealer/secure.ts": "./src/interceptors/concealer/secure.ts",
  "./concealer/timing": "./src/interceptors/concealer/timing.ts",
  "./concealer/timing.ts": "./src/interceptors/concealer/timing.ts",
  "./concealer/xml": "./src/interceptors/concealer/xml.ts",
  "./concealer/xml.ts": "./src/interceptors/concealer/xml.ts",
  "./event/messages": "./src/interceptors/event/messages.ts",
  "./event/messages.ts": "./src/interceptors/event/messages.ts",
  "./externalResourceLoc/contentIndex": "./src/interceptors/externalResourceLoc/contentIndex.ts",
  "./externalResourceLoc/contentIndex.ts": "./src/interceptors/externalResourceLoc/contentIndex.ts",
  "./externalResourceLoc/share": "./src/interceptors/externalResourceLoc/share.ts",
  "./externalResourceLoc/share.ts": "./src/interceptors/externalResourceLoc/share.ts",
  "./loc/history": "./src/interceptors/loc/history.ts",
  "./loc/history.ts": "./src/interceptors/loc/history.ts",
  "./loc/location": "./src/interceptors/loc/location.ts",
  "./loc/location.ts": "./src/interceptors/loc/location.ts",
  "./loc/navigator": "./src/interceptors/loc/navigator.ts",
  "./loc/navigator.ts": "./src/interceptors/loc/navigator.ts",
  "./loc/open": "./src/interceptors/loc/open.ts",
  "./loc/open.ts": "./src/interceptors/loc/open.ts",
  "./originIsolators/privacySandbox/README.md": "./src/interceptors/originIsolators/privacySandbox/README.md",
  "./originIsolators/privacySandbox/credentials": "./src/interceptors/originIsolators/privacySandbox/credentials.ts",
  "./originIsolators/privacySandbox/credentials.ts": "./src/interceptors/originIsolators/privacySandbox/credentials.ts",
  "./req/eventSource": "./src/interceptors/req/eventSource.ts",
  "./req/eventSource.ts": "./src/interceptors/req/eventSource.ts",
  "./req/fetch": "./src/interceptors/req/fetch.ts",
  "./req/fetch.ts": "./src/interceptors/req/fetch.ts",
  "./req/wrtc": "./src/interceptors/req/wrtc.ts",
  "./req/wrtc.ts": "./src/interceptors/req/wrtc.ts",
  "./req/ws": "./src/interceptors/req/ws.ts",
  "./req/ws.ts": "./src/interceptors/req/ws.ts",
  "./req/wt": "./src/interceptors/req/wt.ts",
  "./req/wt.ts": "./src/interceptors/req/wt.ts",
  "./storage/cookie": "./src/interceptors/storage/cookie.ts",
  "./storage/cookie.ts": "./src/interceptors/storage/cookie.ts",
  "./storage/fs": "./src/interceptors/storage/fs.ts",
  "./storage/fs.ts": "./src/interceptors/storage/fs.ts",
  "./storage/iDB": "./src/interceptors/storage/iDB.ts",
  "./storage/iDB.ts": "./src/interceptors/storage/iDB.ts",
  "./storage/shared": "./src/interceptors/storage/shared.ts",
  "./storage/shared.ts": "./src/interceptors/storage/shared.ts",
  "./storage/sharedStorage": "./src/interceptors/storage/sharedStorage.ts",
  "./storage/sharedStorage.ts": "./src/interceptors/storage/sharedStorage.ts",
  "./storage/sql": "./src/interceptors/storage/sql.ts",
  "./storage/sql.ts": "./src/interceptors/storage/sql.ts",
  "./storage/storage": "./src/interceptors/storage/storage.ts",
  "./storage/storage.ts": "./src/interceptors/storage/storage.ts",
  "./worker/workers": "./src/interceptors/worker/workers.ts",
  "./worker/workers.ts": "./src/interceptors/worker/workers.ts"
};


function webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
function webpackContextResolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/interceptors sync recursive ^\\.\\/.*$";


}),
"../../node_modules/@mercuryworkshop/bare-mux/dist/index.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BareClient: function() { return C; },
  BareMuxConnection: function() { return M; },
  WebSocketFields: function() { return c; },
  WorkerConnection: function() { return u; },
  browserSupportsTransferringStreams: function() { return w; },
  "default": function() { return C; },
  maxRedirects: function() { return e; },
  validProtocol: function() { return f; }
});
const e=20,t=globalThis.fetch,s=globalThis.WebSocket,r=globalThis.Request,o=globalThis.Response,a=globalThis.SharedWorker,n=globalThis.localStorage,i=globalThis.navigator.serviceWorker,c={prototype:{send:s.prototype.send},CLOSED:s.CLOSED,CLOSING:s.CLOSING,CONNECTING:s.CONNECTING,OPEN:s.OPEN};async function h(){const e=(await self.clients.matchAll({type:"window",includeUncontrolled:!0})).map((async e=>{const t=await function(e){let t=new MessageChannel;return new Promise((s=>{e.postMessage({type:"getPort",port:t.port2},[t.port2]),t.port1.onmessage=e=>{s(e.data)}}))}(e);return await l(t),t})),t=Promise.race([Promise.any(e),new Promise(((e,t)=>setTimeout(t,1e3,new TypeError("timeout"))))]);try{return await t}catch(e){if(e instanceof AggregateError)throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."),new Error("All clients returned an invalid MessagePort.");return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"),await h()}}function l(e){const t=new MessageChannel,s=new Promise(((e,s)=>{t.port1.onmessage=t=>{"pong"===t.data.type&&e()},setTimeout(s,1500)}));return e.postMessage({message:{type:"ping"},port:t.port2},[t.port2]),s}function p(e,t){const s=new a(e,"bare-mux-worker");return t&&i.addEventListener("message",(t=>{if("getPort"===t.data.type&&t.data.port){console.debug("bare-mux: recieved request for port from sw");const s=new a(e,"bare-mux-worker");t.data.port.postMessage(s.port,[s.port])}})),s.port}let d=null;function w(){if(null===d){const e=new MessageChannel,t=new ReadableStream;let s;try{e.port1.postMessage(t,[t]),s=!0}catch(e){s=!1}return d=s,s}return d}class u{constructor(e){this.channel=new BroadcastChannel("bare-mux"),e instanceof MessagePort||e instanceof Promise?this.port=e:this.createChannel(e,!0)}createChannel(e,t){if(self.clients)this.port=h(),this.channel.onmessage=e=>{"refreshPort"===e.data.type&&(this.port=h())};else if(e&&a){if(!e.startsWith("/")&&!e.includes("://"))throw new Error("Invalid URL. Must be absolute or start at the root.");this.port=p(e,t),console.debug("bare-mux: setting localStorage bare-mux-path to",e),n["bare-mux-path"]=e}else{if(!a)throw new Error("Unable to get a channel to the SharedWorker.");{const e=n["bare-mux-path"];if(console.debug("bare-mux: got localStorage bare-mux-path:",e),!e)throw new Error("Unable to get bare-mux workerPath from localStorage.");this.port=p(e,t)}}}async sendMessage(e,t){this.port instanceof Promise&&(this.port=await this.port);try{await l(this.port)}catch{return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."),this.createChannel(),await this.sendMessage(e,t)}const s=new MessageChannel,r=[s.port2,...t||[]],o=new Promise(((e,t)=>{s.port1.onmessage=s=>{const r=s.data;"error"===r.type?t(r.error):e(r)}}));return this.port.postMessage({message:e,port:s.port2},r),await o}}class g extends EventTarget{constructor(e,t=[],s,r,o){super(),this.protocols=[],this.readyState=c.CONNECTING,this.binaryType="blob",this.onopen=null,this.onerror=null,this.onmessage=null,this.onclose=null,this.url=e.toString(),this.protocols=t;const a=e=>{this.readyState=c.OPEN,this.protocols=e,this.meta={headers:{"sec-websocket-protocol":e}};const t=new Event("open");this.dispatchEvent(t),this.onopen&&this.onopen(t)},n=async e=>{"string"==typeof e||("byteLength"in e?"blob"===this.binaryType?e=new Blob([e]):Object.setPrototypeOf(e,o):"arrayBuffer"in e&&"arraybuffer"===this.binaryType&&(e=await e.arrayBuffer(),Object.setPrototypeOf(e,o)));const t=new MessageEvent("message",{data:e});this.dispatchEvent(t),this.onmessage&&this.onmessage(t)},i=(e,t)=>{this.readyState=c.CLOSED;const s=new CloseEvent("close",{code:e,reason:t});this.dispatchEvent(s),this.onclose&&this.onclose(s)},h=()=>{this.readyState=c.CLOSED;const e=new Event("error");this.dispatchEvent(e),this.onerror&&this.onerror(e)};this.channel=new MessageChannel,this.channel.port1.onmessage=e=>{"open"===e.data.type?a(e.data.args[0]):"message"===e.data.type?n(e.data.args[0]):"close"===e.data.type?i(e.data.args[0],e.data.args[1]):"error"===e.data.type&&h()},s.sendMessage({type:"websocket",websocket:{url:e.toString(),origin:origin,protocols:t,requestHeaders:r,channel:this.channel.port2}},[this.channel.port2])}send(...e){if(this.readyState===c.CONNECTING)throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");let t=e[0];t.buffer&&(t=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)),this.channel.port1.postMessage({type:"data",data:t},t instanceof ArrayBuffer?[t]:[])}close(e,t){this.readyState=c.CLOSING,this.channel.port1.postMessage({type:"close",closeCode:e,closeReason:t})}get bufferedAmount(){return 0}get protocol(){return Array.isArray(this.protocols)?this.protocols[0]||"":this.protocols||""}get extensions(){return""}}function y(e,t,s){console.error(`error while processing '${s}': `,t),e.postMessage({type:"error",error:t})}g.prototype.CONNECTING=c.CONNECTING,g.prototype.OPEN=c.OPEN,g.prototype.CLOSING=c.CLOSING,g.prototype.CLOSED=c.CLOSED;function f(e){for(let t=0;t<e.length;t++){const s=e[t];if(!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(s))return!1}return!0}const b=["ws:","wss:"],m=[101,204,205,304],E=[301,302,303,307,308];class M{constructor(e){this.worker=new u(e)}async getTransport(){return(await this.worker.sendMessage({type:"get"})).name}async setTransport(e,t,s){await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${e}");\n\t\t\treturn [BareTransport, "${e}"];\n\t\t`,t,s)}async setManualTransport(e,t,s){if("bare-mux-remote"===e)throw new Error("Use setRemoteTransport.");await this.worker.sendMessage({type:"set",client:{function:e,args:t}},s)}async setRemoteTransport(e,t){const s=new MessageChannel;s.port1.onmessage=async t=>{const s=t.data.port,r=t.data.message;if("fetch"===r.type)try{e.ready||await e.init(),await async function(e,t,s){const r=await s.request(new URL(e.fetch.remote),e.fetch.method,e.fetch.body,e.fetch.headers,null);if(!w()&&r.body instanceof ReadableStream){const e=new o(r.body);r.body=await e.arrayBuffer()}r.body instanceof ReadableStream||r.body instanceof ArrayBuffer?t.postMessage({type:"fetch",fetch:r},[r.body]):t.postMessage({type:"fetch",fetch:r})}(r,s,e)}catch(e){y(s,e,"fetch")}else if("websocket"===r.type)try{e.ready||await e.init(),await async function(e,t,s){const[r,o]=s.connect(new URL(e.websocket.url),e.websocket.origin,e.websocket.protocols,e.websocket.requestHeaders,(t=>{e.websocket.channel.postMessage({type:"open",args:[t]})}),(t=>{t instanceof ArrayBuffer?e.websocket.channel.postMessage({type:"message",args:[t]},[t]):e.websocket.channel.postMessage({type:"message",args:[t]})}),((t,s)=>{e.websocket.channel.postMessage({type:"close",args:[t,s]})}),(t=>{e.websocket.channel.postMessage({type:"error",args:[t]})}));e.websocket.channel.onmessage=e=>{"data"===e.data.type?r(e.data.data):"close"===e.data.type&&o(e.data.closeCode,e.data.closeReason)},t.postMessage({type:"websocket"})}(r,s,e)}catch(e){y(s,e,"websocket")}},await this.worker.sendMessage({type:"set",client:{function:"bare-mux-remote",args:[s.port2,t]}},[s.port2])}getInnerPort(){return this.worker.port}}class C{constructor(e){this.worker=new u(e)}createWebSocket(e,t=[],r,o,a){try{e=new URL(e)}catch(t){throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${e}' is invalid.`)}if(!b.includes(e.protocol))throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${e.protocol}' is not allowed.`);Array.isArray(t)||(t=[t]),t=t.map(String);for(const e of t)if(!f(e))throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${e}' is invalid.`);a=a||(r||s).constructor.constructor("return ArrayBuffer")().prototype,(o=o||{}).Host=new URL(e).host,o.Pragma="no-cache",o["Cache-Control"]="no-cache",o.Upgrade="websocket",o.Connection="Upgrade";return new g(e,t,this.worker,o,a)}async fetch(e,s){const a=new r(e,s),n=s?.headers||a.headers,i=n instanceof Headers?Object.fromEntries(n):n,c=a.body;let h=new URL(a.url);if(h.protocol.startsWith("blob:")){const e=await t(h),s=new o(e.body,e);return s.rawHeaders=Object.fromEntries(e.headers),s.rawResponse=e,s}for(let e=0;;e++){"host"in i?i.host=h.host:i.Host=h.host;let t=(await this.worker.sendMessage({type:"fetch",fetch:{remote:h.toString(),method:a.method,headers:i,body:c||void 0}},c?[c]:[])).fetch,r=new o(m.includes(t.status)?void 0:t.body,{headers:new Headers(t.headers),status:t.status,statusText:t.statusText});r.rawHeaders=t.headers,r.rawResponse=new o(t.body),r.finalURL=h.toString();const n=s?.redirect||a.redirect;if(!E.includes(r.status))return r;switch(n){case"follow":{const t=r.headers.get("location");if(20>e&&null!==t){h=new URL(t,h);continue}throw new TypeError("Failed to fetch")}case"error":throw new TypeError("Failed to fetch");case"manual":return r}}}}
//# sourceMappingURL=index.mjs.map


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function (chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function (promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};

})();
// webpack/runtime/get css chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.k = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".css";
        };
      
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.u = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".js";
        };
      
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (function () {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();

})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "aero-sandbox:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');
		
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		script.src = url;

		
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/auto_public_path
(() => {

    var scriptUrl;
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    var document = __webpack_require__.g.document;
    if (!scriptUrl && document) {
      if (document.currentScript) scriptUrl = document.currentScript.src;
        if (!scriptUrl) {
          var scripts = document.getElementsByTagName("script");
              if (scripts.length) {
                var i = scripts.length - 1;
                while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
              }
        }
      }
    
    // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
    // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    __webpack_require__.p = scriptUrl
    
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"sandbox": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (true) {
			// setup Promise in chunk cache
			var promise = new Promise(function (resolve, reject) {
				installedChunkData = installedChunks[chunkId] = [resolve, reject];
			});
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} 
	}
}

        }
        // install a JSONP callback for chunk loading
var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
	var moreModules = data[1];
	var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId,
		chunkId,
		i = 0;
	if (chunkIds.some(function (id) { return installedChunks[id] !== 0 })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
};

var chunkLoadingGlobal = self["webpackChunkaero_sandbox"] = self["webpackChunkaero_sandbox"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _customBuilds_aero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customBuilds/aero */ "./build/customBuilds/aero.ts");
/* harmony import */var _customBuilds_frankenUV_inject_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customBuilds/frankenUV.inject.ts */ "./build/customBuilds/frankenUV.inject.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/config.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}



var proxifiedObjGenCtx = _object_spread({}, _customBuilds_aero__WEBPACK_IMPORTED_MODULE_0__.buildConfig.specialInterceptionFeatures);
if (process.env.BUILD_UV_FRAKEN) proxifiedObjGenCtx = _object_spread({}, _customBuilds_frankenUV_inject_ts__WEBPACK_IMPORTED_MODULE_1__.buildConfig.specialInterceptionFeatures);
if (process.env.BUILD_WOMBAT_SHIM) {
// TODO: Build
}
var insertLater = new Map();
// @ts-ignore TODO: Move this code to AeroSandbox
var ctx = __webpack_require__(/*! ../src/interceptors */ "./src/interceptors sync recursive ^\\.\\/.*$");
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator = ctx.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var fileName = _step.value;
        console.log(fileName);
        var aI = ctx(fileName);
        if (aI.insertLevel && aI.insertLevel !== 0) insertLater.set(aI.insertLevel, aI);
        else handleAI(aI);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
// @ts-ignore
var sortedInsertObj = Object.entries(Array.from(insertLater.keys()).sort(function(a, b) {
    return b[1] - a[1];
}));
var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
try {
    for(var _iterator1 = Object.values(sortedInsertObj)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
        var aI1 = _step1.value;
        handleAI(aI1);
    }
} catch (err) {
    _didIteratorError1 = true;
    _iteratorError1 = err;
} finally{
    try {
        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
            _iterator1.return();
        }
    } finally{
        if (_didIteratorError1) {
            throw _iteratorError1;
        }
    }
}
function handleAI(aI) {
    if (aI.exposedContexts) {
        if (Object.values(aI.exposedContexts).includes("window")) {
            // @ts-ignore
            if (aI.proxifiedObj) {
                var proxyObject = resolveProxifiedObj(// @ts-ignore
                aI.proxifiedObj, proxifiedObjGenCtx);
                window[aI.globalProp] = proxyObject;
            } else if (aI.proxifiedObjWorkerVersion) {
                Object.defineProperty(window, aI.globalProp, aI.proxifiedObjWorkerVersion);
            }
        }
    } else {
        // @ts-ignore
        if (aI.proxifiedObj) {
            var proxyObject1 = resolveProxifiedObj(// @ts-ignore
            aI.proxifiedObj, proxifiedObjGenCtx);
            self[aI.globalProp] = proxyObject1;
        } else if (aI.proxifiedObjWorkerVersion) {
            Object.defineProperty(self, aI.globalProp, aI.proxifiedObjWorkerVersion);
        }
    }
}
function resolveProxifiedObj(proxifiedObj, ctx) {
    var proxyObject = {};
    if (typeof proxifiedObj === "function") proxyObject = proxifiedObj(ctx);
    else if (typeof proxifiedObj === "object") proxyObject = proxifiedObj;
    return proxyObject;
}
// Run the HTML Interceptors as per the config
var supportedHTMLRewriterModes = JSON.parse(// @ts-ignore
(["mutation_observer","custom_elements","domparser","sw_parser"]));
var preferredMode = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/config.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
if (!supportedHTMLRewriterModes.includes(preferredMode)) {
    throw new Error("This build of AeroSandbox does not support ".concat(preferredMode));
}
// TODO: Delete all privacy sandbox APIs until bare-extended is finished and do that under the feature flag `DELETE_UNUSED_APIS` and recommend it for security. It would also delete the fenced frame element.
if (preferredMode === "mutation_observer" || preferredMode === "custom_elements" && Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/config.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === "mutation_observers") Promise.all(/*! import() */ [__webpack_require__.e("src_sandboxers_HTML_shared_htmlRules_ts-src_sandboxers_HTML_shared_htmlSrc_ts"), __webpack_require__.e("src_sandboxers_HTML_adaptors_useMutationObservers_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../src/sandboxers/HTML/adaptors/useMutationObservers.ts */ "./src/sandboxers/HTML/adaptors/useMutationObservers.ts"));
if (preferredMode === "domparser" || preferredMode === "custom_elements" && Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/config.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === "domparser") Promise.all(/*! import() */ [__webpack_require__.e("src_sandboxers_HTML_shared_htmlRules_ts-src_sandboxers_HTML_shared_htmlSrc_ts"), __webpack_require__.e("src_sandboxers_HTML_adaptors_useDOMParser_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../src/sandboxers/HTML/adaptors/useDOMParser.ts */ "./src/sandboxers/HTML/adaptors/useDOMParser.ts"));
if (preferredMode === "sw_parser" || preferredMode === "custom_elements" && Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/config.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === "sw_parser") Promise.all(/*! import() */ [__webpack_require__.e("src_sandboxers_HTML_shared_htmlRules_ts-src_sandboxers_HTML_shared_htmlSrc_ts"), __webpack_require__.e("src_sandboxers_HTML_adaptors_useParser_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../src/sandboxers/HTML/adaptors/useParser.ts */ "./src/sandboxers/HTML/adaptors/useParser.ts"));
if (preferredMode === "custom_elements") Promise.all(/*! import() */ [__webpack_require__.e("src_sandboxers_HTML_shared_htmlRules_ts-src_sandboxers_HTML_shared_htmlSrc_ts"), __webpack_require__.e("src_sandboxers_HTML_adaptors_useCustomElements_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../src/sandboxers/HTML/adaptors/useCustomElements.ts */ "./src/sandboxers/HTML/adaptors/useCustomElements.ts"));

})();

})()
;
//# sourceMappingURL=sandbox.js.map