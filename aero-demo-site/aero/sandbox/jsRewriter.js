(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/sandboxers/JS/backends/AST.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return ASTRewriter; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'seafox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'traverse-the-universe'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'astring'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
// Parsers
// import initWasm, { parseSync } from "@oxc-parser/wasm";

// Walkers

// AST -> JS
// This is the only realistic option

// Webpack Feature Flags
// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
var INCLUDE_AST_PARSER_OXC, INCLUDE_AST_PARSER_SEAFOX;
var INCLUDE_AST_WALKER_TRAVERSE_THE_UNIVERSE;
var ASTRewriter = /*#__PURE__*/ function() {
    "use strict";
    function ASTRewriter(config) {
        _class_call_check(this, ASTRewriter);
        _define_property(this, "config", void 0);
        _define_property(this, "parentNode", void 0);
        this.config = config;
    }
    _create_class(ASTRewriter, [
        {
            key: "applyNewConfig",
            value: function applyNewConfig(config) {
                this.config = config;
            }
        },
        {
            /**
	 * I recomend using (@link https://astexplorer.net) to guide you when coming up with ideas of how to rewrite the AST
	 * @param ast - The AST tree
	 * @returns the rewritten script
	 */ key: "rewriteFromAst",
            value: function rewriteFromAst(ast, windowProxyConcealmentAst) {
                var _this = this;
                if (INCLUDE_AST_WALKER_TRAVERSE_THE_UNIVERSE) {
                    // traverse-the-universe has no typings
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'traverse-the-universe'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ast, function(node) {
                        if (node.type === "Identifier" && node.name === "location") {
                            // TODO: Include more checks to ensure that this is the proper `location` that we want to rewrite
                            node.name = _this.config.objPaths.proxy.location;
                        }
                        if (node.type === "Identifier" && node.name === "window") {
                            // TODO: Include more checks to ensure that this is the proper `window` that we want to rewrite
                            node.name = _this.config.objPaths.proxy.window;
                        }
                        if (node.type === "Identifier" && node.name === "that" && // @ts-ignore
                        _this.parentNode && // @ts-ignore
                        _this.parentNode.type === "FunctionExpression" && // @ts-ignore
                        _this.parentNode.parentNode.type === "Property" && // @ts-ignore
                        _this.parentNode.parentNode.key.type === "Identifier" && // @ts-ignore
                        _this.parentNode.parentNode.key.name === "apply" && // @ts-ignore
                        _this.parentNode.parentNode.parentNode === "ObjectExpression" && // @ts-ignore
                        _this.parentNode.parentNode.parentNode.parentNode === "NewExpression" && // @ts-ignore
                        _this.parentNode.parentNode.parentNode.parentNode.callee.name === "Proxy") {
                            // @ts-ignore
                            _this.parentNode.body.insertAfter(windowProxyConcealmentAst);
                        }
                    });
                } else {
                    $aero.logger.warn("No suitable AST walkers found; not rewriting!");
                }
                $aero.logger.fatalErr("AeroGel minimal is unsupported at the moment!");
                return ast;
            }
        },
        {
            key: "parseAst",
            value: function parseAst(script, isModule) {
                if (INCLUDE_AST_PARSER_OXC) {
                    /** @see (@link https://www.npmjs.com/package/@oxc-parser/wasm?activeTab=readme) */ $aero.logger.fatalErr("OXC is unsupported at the moment!");
                }
                if (INCLUDE_AST_PARSER_SEAFOX) {
                    return [
                        // @ts-ignore
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'seafox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(script, {
                            module: isModule,
                            next: true
                        }).body,
                        // @ts-ignore
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'seafox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("\n					if (that === window) {\n						that = window;\n					}\n				", {
                            module: isModule,
                            next: true
                        }).body
                    ];
                }
            }
        },
        {
            key: "rewriteScript",
            value: function rewriteScript(script, isModule) {
                var _this_parseAst = _sliced_to_array(this.parseAst(script, isModule), 2), ast = _this_parseAst[0], windowProxyConcealmentAst = _this_parseAst[1];
                var rewrittenAst = this.rewriteFromAst(ast, windowProxyConcealmentAst);
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'astring'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(rewrittenAst);
            }
        }
    ], [
        {
            key: "supportedParsers",
            value: // These two methods are here because it is possible to compile out the AST parsers and walkers that the user chooses in the build flags
            function supportedParsers() {
                var supports = [];
                if (INCLUDE_AST_PARSER_OXC) supports.push("oxc");
                if (INCLUDE_AST_PARSER_SEAFOX) supports.push("seafox");
                return supports;
            }
        },
        {
            key: "supportedWalkers",
            value: function supportedWalkers() {
                var supports = [];
                if (INCLUDE_AST_WALKER_TRAVERSE_THE_UNIVERSE) supports.push("traverse_the_universe");
                return supports;
            }
        }
    ]);
    return ASTRewriter;
}();
/*
// Scope Checking. This is for DPSC. TODO: Make DPSC configurable on AST parsing and only use it when in a block scope.
$aero.check = val => (val === location ? $location : val);
*/ 


}),
"./src/sandboxers/JS/backends/AeroGel.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return AeroGel; }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
//import esniff from "esniff";
// Webpack Feature Flags
var INCLUDE_ESNIFF;
var AeroGel = /*#__PURE__*/ function() {
    "use strict";
    function AeroGel(config) {
        _class_call_check(this, AeroGel);
        _define_property(this, "config", void 0);
        this.config = config;
    }
    _create_class(AeroGel, [
        {
            key: "applyNewConfig",
            value: function applyNewConfig(config) {
                this.config = config;
            }
        },
        {
            /** This essentially the rewriter
	 * @param script The script to jail. Before it is jailed the let/const to fake vars RegExp rewriting occurs.
	 * @param isModule Module scripts don't need to be rewritten because they don't require fake vars for scope emulation since module scripts run in their own isolated scope.
	 * @example TODO: Provide an example
	 */ key: "jailScript",
            value: function jailScript(script, isModule) {
                return /* js */ "\n			!() => {\n				".concat(isModule ? script : this.rewriteScript(script), "\n		  	}().call({\n				window: ").concat(this.config.objPaths.proxy.window, ",\n				globalThis: ").concat(this.config.objPaths.proxy.window, ",\n				location: ").concat(this.config.objPaths.proxy.location, "\n		 	 });\n		");
            }
        },
        {
            /** This method is specifically for `var keyword rewriting` */ key: "rewriteScript",
            value: function rewriteScript(script) {
                /*
		if (INCLUDE_ESNIFF) {
			let letIndicies = [];
			let constIndicies = [];
			// @ts-ignore
			esniff(script, (emitter: any) => {
				// @ts-ignore
				emitter.on("trigger:let", (accessor: any) => {
					if (accessor.scopeDepth === 0)
						letIndicies.push(accessor.index);
				});
				emitter.on("trigger:const", (accessor: any) => {
					if (accessor.scopeDepth === 0)
						constIndicies.push(accessor.index);
				});
			});
			let keywordReplacements: keywordReplacementType = {};
			letIndicies.forEach(index => {
				keywordReplacements[index] = {
					keywordLen: 3,
					replacementStr: this.config.objPaths.fakeVars.let,
				};
			});
			constIndicies.forEach(index => {
				keywordReplacements[index] = {
					keywordLen: 5,
					replacementStr: this.config.objPaths.fakeVars.const,
				};
			});
			script = this.replaceKeywords(script, keywordReplacements);
		}
		*/ return script;
            }
        },
        {
            key: "replaceKeywords",
            value: function replaceKeywords(str, keywordReplacements) {
                var charArr = Array.from(str);
                var totalAddedToIndex = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.entries(keywordReplacements)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), indexStr = _step_value[0], replacementData = _step_value[1];
                        var keywordLen = replacementData.keywordLen, replacementStr = replacementData.replacementStr;
                        var index = Number.parseInt(indexStr);
                        var replacementArr = Array.from(replacementStr);
                        totalAddedToIndex += replacementArr.length - keywordLen;
                        charArr.splice(index + totalAddedToIndex, keywordLen, replacementStr);
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
                return charArr.join("");
            }
        }
    ], [
        {
            key: "supportedParsers",
            value: function supportedParsers() {
                var supports = [];
                if (INCLUDE_ESNIFF) supports.push("esniff");
                return supports;
            }
        }
    ]);
    return AeroGel;
}();
// TODO: Setup test cases



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

/************************************************************************/
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
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return JSRewriter; }
});
/* harmony import */var _backends_AST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backends/AST */ "./src/sandboxers/JS/backends/AST.ts");
/* harmony import */var _backends_AeroGel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backends/AeroGel */ "./src/sandboxers/JS/backends/AeroGel.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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


var JSRewriter = /*#__PURE__*/ function() {
    "use strict";
    function JSRewriter(config) {
        _class_call_check(this, JSRewriter);
        _define_property(this, "config", void 0);
        this.config = config;
    }
    _create_class(JSRewriter, [
        {
            key: "applyNewConfig",
            value: function applyNewConfig(config) {
                this.config = config;
            }
        },
        {
            key: "rewriteScript",
            value: function rewriteScript(script, rewriteOptions) {
                if (rewriteOptions.isModule) {
                    if (this.config.modeModule === "ast") return this.astRewrite(script, rewriteOptions.isModule);
                    if (this.config.modeModule === "aerogel") return this.aerogelRewrite(script, rewriteOptions.isModule);
                } else {
                    if (this.config.modeDefault === "ast") return this.astRewrite(script, rewriteOptions.isModule);
                    if (this.config.modeDefault === "aerogel") return this.aerogelRewrite(script, rewriteOptions.isModule);
                }
                return script;
            }
        },
        {
            /** Calls the AST Rewriter with the config that you provided in the constructor earlier */ key: "astRewrite",
            value: function astRewrite(script, isModule) {
                var parserOfChoice;
                var walkerOfChoice;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.config.preferredParsers.ast[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var astParser = _step.value;
                        var astSupportedParsers = _backends_AST__WEBPACK_IMPORTED_MODULE_0__["default"].supportedParsers();
                        if (astParser in astSupportedParsers) {
                            parserOfChoice = astParser;
                        }
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
                if (!parserOfChoice) {
                    $aero.logger.fatalErr("No compatible AST parsers found with your preferred list of parsers!");
                    return script;
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.config.preferredASTWalkers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var astWalker = _step1.value;
                        var astSupportedWalkers = _backends_AST__WEBPACK_IMPORTED_MODULE_0__["default"].supportedWalkers();
                        if (astWalker in astSupportedWalkers) walkerOfChoice = astWalker;
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
                if (!walkerOfChoice) {
                    $aero.logger.fatalErr("No compatible AST walkers found with your preferred list of walkers!");
                    return script;
                }
                // @ts-ignore
                var astRewriter = new _backends_AST__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    parserConfig: {
                        parser: parserOfChoice
                    },
                    walkerConfig: {
                        walker: walkerOfChoice
                    }
                });
                return astRewriter.rewriteScript(script, isModule);
            }
        },
        {
            key: "aerogelRewrite",
            value: function aerogelRewrite(script, isModule) {
                var parserOfChoice;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.config.preferredParsers.aerogel[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var aerogelParser = _step.value;
                        var aerogelSupportedParsers = _backends_AeroGel__WEBPACK_IMPORTED_MODULE_1__["default"].supportedParsers();
                        if (aerogelParser in aerogelSupportedParsers) parserOfChoice = aerogelParser;
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
                if (!parserOfChoice) $aero.logger.fatalErr("No compatible AeroGel parsers found with your preferred list of parsers!");
                // @ts-ignore
                var aerogelRewriter = new _backends_AeroGel__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    parserConfig: {
                        parser: parserOfChoice
                    }
                });
                return aerogelRewriter.jailScript(script, isModule);
            }
        },
        {
            /** This is the method you want to use in your proxy */ key: "wrapScript",
            value: function wrapScript(script, rewriteOptions) {
                var lines = this.rewriteScript(script, rewriteOptions).split("\n");
                var _lines = _sliced_to_array(lines, 1), first = _lines[0];
                var _meta = rewriteOptions.isModule ? "".concat(this.config.proxyNamespace, ".moduleScripts.resolve") : "";
                lines[0] = rewriteOptions.insertCode + _meta + first;
                return lines.join("\n");
            }
        }
    ]);
    return JSRewriter;
}();


})();

})()
;
//# sourceMappingURL=jsRewriter.js.map