"use strict";
(self["webpackChunkaero_sandbox"] =
	self["webpackChunkaero_sandbox"] || []).push([
	[
		"src_sandboxers_HTML_shared_htmlRules_ts-src_sandboxers_HTML_shared_htmlSrc_ts"
	],
	{
		"./src/cors/policy.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__;
				}
			});
			// TODO: Check the policy of the parent's too in case this is an iframe
			/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(
				list
			) {
				if (list) {
				}
				return false;
			}
		},
		"./src/sandboxers/HTML/shared/Cloner.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return _class;
				}
			});
			/* harmony import */ var _tt__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! ./tt */ "./src/sandboxers/HTML/shared/tt.ts"
				);
			/* harmony import */ var _Cloner__WEBPACK_IMPORTED_MODULE_1__ =
				__webpack_require__(
					/*! ./Cloner */ "./src/sandboxers/HTML/shared/Cloner.ts"
				);
			function _class_call_check(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function _defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
			function _create_class(Constructor, protoProps, staticProps) {
				if (protoProps)
					_defineProperties(Constructor.prototype, protoProps);
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
			function _instanceof(left, right) {
				if (
					right != null &&
					typeof Symbol !== "undefined" &&
					right[Symbol.hasInstance]
				) {
					return !!right[Symbol.hasInstance](left);
				} else {
					return left instanceof right;
				}
			}

			var _class = /*#__PURE__*/ (function () {
				"use strict";
				function _class(el) {
					_class_call_check(this, _class);
					_define_property(this, "el", void 0);
					_define_property(this, "copy", void 0);
					var copy = document.createElement(el.tagName);
					this.el = el;
					this.copy = copy;
					copy["observed"] = true;
					var _iteratorNormalCompletion = true,
						_didIteratorError = false,
						_iteratorError = undefined;
					try {
						for (
							var _iterator = el
									.getAttributeNames()
									[Symbol.iterator](),
								_step;
							!(_iteratorNormalCompletion = (_step =
								_iterator.next()).done);
							_iteratorNormalCompletion = true
						) {
							var name = _step.value;
							if (name !== "integrity") copy[name] = el[name];
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (
								!_iteratorNormalCompletion &&
								_iterator.return != null
							) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
					if ("innerHTML" in el && el.innerHTML !== "")
						(0, _tt__WEBPACK_IMPORTED_MODULE_0__.safeText)(
							copy,
							el.innerHTML
						);
				}
				_create_class(
					_class,
					[
						{
							key: "clone",
							value: function clone() {
								// Insert
								this.el.after(this.copy);
							}
						},
						{
							key: "cleanup",
							value: function cleanup() {
								_Cloner__WEBPACK_IMPORTED_MODULE_1__[
									"default"
								].deleteScript(this.el);
							}
						}
					],
					[
						{
							key: "deleteScript",
							value: function deleteScript(script) {
								if (_instanceof(script, HTMLScriptElement)) {
									// Disable old script by breaking the type so it doesn't run
									script.type = "_";
									(0,
									_tt__WEBPACK_IMPORTED_MODULE_0__.safeText)(
										script,
										""
									);
								}
								script.remove();
							}
						}
					]
				);
				return _class;
			})();
			// In the case of CORS attributes present the original is deleted and a new clone is made because it isn't possible to modify the CORS properties internally
		},
		"./src/sandboxers/HTML/shared/csp.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__;
				}
			});
			/* harmony import */ var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts"
				);
			function _array_like_to_array(arr, len) {
				if (len == null || len > arr.length) len = arr.length;
				for (var i = 0, arr2 = new Array(len); i < len; i++)
					arr2[i] = arr[i];
				return arr2;
			}
			function _array_with_holes(arr) {
				if (Array.isArray(arr)) return arr;
			}
			function _iterable_to_array_limit(arr, i) {
				var _i =
					arr == null
						? null
						: (typeof Symbol !== "undefined" &&
								arr[Symbol.iterator]) ||
							arr["@@iterator"];
				if (_i == null) return;
				var _arr = [];
				var _n = true;
				var _d = false;
				var _s, _e;
				try {
					for (
						_i = _i.call(arr);
						!(_n = (_s = _i.next()).done);
						_n = true
					) {
						_arr.push(_s.value);
						if (i && _arr.length === i) break;
					}
				} catch (err) {
					_d = true;
					_e = err;
				} finally {
					try {
						if (!_n && _i["return"] != null) _i["return"]();
					} finally {
						if (_d) throw _e;
					}
				}
				return _arr;
			}
			function _non_iterable_rest() {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			}
			function _sliced_to_array(arr, i) {
				return (
					_array_with_holes(arr) ||
					_iterable_to_array_limit(arr, i) ||
					_unsupported_iterable_to_array(arr, i) ||
					_non_iterable_rest()
				);
			}
			function _unsupported_iterable_to_array(o, minLen) {
				if (!o) return;
				if (typeof o === "string")
					return _array_like_to_array(o, minLen);
				var n = Object.prototype.toString.call(o).slice(8, -1);
				if (n === "Object" && o.constructor) n = o.constructor.name;
				if (n === "Map" || n === "Set") return Array.from(n);
				if (
					n === "Arguments" ||
					/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
				)
					return _array_like_to_array(o, minLen);
			}

			// TODO: Use policy.ts
			// Gets the sources in the CSP with directive
			function cspSrc(dir) {
				var _$aero_sec_csp_match = _sliced_to_array(
						$aero.sec.csp.match(
							new RegExp("".concat(dir, " ([^;]*)")),
							"g"
						),
						1
					),
					sources = _$aero_sec_csp_match[0];
				if (typeof sources === "undefined") return;
				return sources.split(" ");
			}
			// If CSP blocked
			/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(
				dir
			) {
				var sources = cspSrc(dir);
				var blocked = false;
				if (sources) {
					var allowed = false;
					var _iteratorNormalCompletion = true,
						_didIteratorError = false,
						_iteratorError = undefined;
					if (!sources.includes("'none'"))
						try {
							for (
								var _iterator = sources[Symbol.iterator](),
									_step;
								!(_iteratorNormalCompletion = (_step =
									_iterator.next()).done);
								_iteratorNormalCompletion = true
							) {
								var source = _step.value;
								if (
									(0,
									$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().href.startsWith(
										source
									)
								) {
									allowed = true;
									break;
								}
								// TODO: Instead use matchWildcard for full accuracy
								var wc = source.split("*");
								if (
									// Wildcard found
									wc.length > 1 &&
									(0,
									$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_0__.proxyLocation)().href.startsWith(
										wc[0]
									)
								) {
									allowed = true;
									break;
								}
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (
									!_iteratorNormalCompletion &&
									_iterator.return != null
								) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					if (!allowed) blocked = true;
				}
				return blocked;
			}
		},
		"./src/sandboxers/HTML/shared/htmlRules.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			/* harmony import */ var _csp__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! ./csp */ "./src/sandboxers/HTML/shared/csp.ts"
				);
			/* harmony import */ var _Cloner__WEBPACK_IMPORTED_MODULE_1__ =
				__webpack_require__(
					/*! ./Cloner */ "./src/sandboxers/HTML/shared/Cloner.ts"
				);
			/* harmony import */ var $shared_appendSearchParam__WEBPACK_IMPORTED_MODULE_2__ =
				__webpack_require__(
					/*! $shared/appendSearchParam */ "./src/shared/appendSearchParam.ts"
				);
			/* harmony import */ var $cors_policy__WEBPACK_IMPORTED_MODULE_3__ =
				__webpack_require__(/*! $cors/policy */ "./src/cors/policy.ts");
			/* harmony import */ var $shared_src__WEBPACK_IMPORTED_MODULE_4__ =
				__webpack_require__(/*! $shared/src */ "./src/shared/src.ts");
			/* harmony import */ var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_5__ =
				__webpack_require__(
					/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts"
				);

			// biome-ignore lint/suspicious/noExplicitAny: TODO: Make any Element
			var htmlRules = new Map();
			var blockHandler = function (allowDir) {
				return function (_el, newVal) {
					if (
						(0,
						$cors_policy__WEBPACK_IMPORTED_MODULE_3__["default"])(
							"allowDir"
						)
					)
						return "";
				};
			};
			// @ts-ignore
			htmlRules.set(HTMLScriptElement, {
				mustBeNew: true,
				onAttrHandlers: {
					src: function (el, newVal) {
						if (
							(0, _csp__WEBPACK_IMPORTED_MODULE_0__["default"])(
								"script-src"
							)
						) {
							var url = new URL(newVal);
							var isMod = el.type === "module";
							var params = url.searchParams;
							(0,
							$shared_appendSearchParam__WEBPACK_IMPORTED_MODULE_2__[
								"default"
							])(
								params,
								$aero.searchParamOptions.isModule,
								isMod.toString()
							);
							if (isMod && el.integrity) {
								(0,
								$shared_appendSearchParam__WEBPACK_IMPORTED_MODULE_2__[
									"default"
								])(
									params,
									$aero.searchParamOptions.integrity,
									el.integrity
								);
							}
							return url.href;
						}
					},
					// @ts-ignore
					onCreateHandler: function (el) {
						if (
							!el.src &&
							typeof el.innerHTML === "string" &&
							el.innerHTML !== "" && // Ensure the script has a JS type
							(el.type === "" ||
								el.type === "module" ||
								el.type === "text/javascript" ||
								el.type === "application/javascript")
						) {
							// FIXME: Fix safeText so that it could be used here
							el.innerHTML = $aero.js.wrapScript(el.innerText, {
								isModule: el.type === "module"
							});
							// The inline code is read-only, so the element must be cloned
							var cloner =
								new _Cloner__WEBPACK_IMPORTED_MODULE_1__[
									"default"
								](el);
							cloner.clone();
							cloner.cleanup();
						}
					}
				}
			});
			var linkElements = [
				HTMLAnchorElement,
				HTMLAreaElement,
				HTMLBaseElement
			];
			var _iteratorNormalCompletion = true,
				_didIteratorError = false,
				_iteratorError = undefined;
			try {
				for (
					var _iterator = linkElements[Symbol.iterator](), _step;
					!(_iteratorNormalCompletion = (_step = _iterator.next())
						.done);
					_iteratorNormalCompletion = true
				) {
					var linkElement = _step.value;
					htmlRules.set(linkElement, {
						onAttrHandlers: {
							href: "rewrite-html-src"
						}
					});
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (
						!_iteratorNormalCompletion &&
						_iterator.return != null
					) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
			htmlRules.set(SVGAElement, {
				onAttrHandlers: {
					href: "rewrite-html-src",
					"xlink:href": "rewrite-html-src"
				}
			});
			htmlRules.set(HTMLFormElement, {
				onAttrHandlers: {
					action: "rewrite-html-src"
				}
			});
			// @ts-ignore
			htmlRules.set(HTMLPortalElement, {
				onAttrHandlers: {
					src: "rewrite-html-src"
				}
			});
			// Permissions Policy emulation
			htmlRules.set(HTMLImageElement, {
				onAttrHandlers: {
					src: blockHandler("img-src")
				}
			});
			var autoplayElements = [
				HTMLAnchorElement,
				HTMLAreaElement,
				HTMLBaseElement
			];
			var _iteratorNormalCompletion1 = true,
				_didIteratorError1 = false,
				_iteratorError1 = undefined;
			try {
				for (
					var _iterator1 = autoplayElements[Symbol.iterator](),
						_step1;
					!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next())
						.done);
					_iteratorNormalCompletion1 = true
				) {
					var autoplayElement = _step1.value;
					htmlRules.set(autoplayElement, {
						onAttrHandlers: {
							autoplay: blockHandler("autoplay")
						}
					});
				}
			} catch (err) {
				_didIteratorError1 = true;
				_iteratorError1 = err;
			} finally {
				try {
					if (
						!_iteratorNormalCompletion1 &&
						_iterator1.return != null
					) {
						_iterator1.return();
					}
				} finally {
					if (_didIteratorError1) {
						throw _iteratorError1;
					}
				}
			}
			{
				var sec = {};
				htmlRules.set(HTMLIFrameElement, {
					onAttrHandlers: {
						src: function (el, newVal) {
							if (
								!(0,
								$cors_policy__WEBPACK_IMPORTED_MODULE_3__[
									"default"
								])("frame-src")
							)
								return "";
							// Embed the origin as an attribute, so that the frame can reference it to do its checks
							// @ts-ignore
							el.contentWindow.$aero.frame.parentProxyOrigin = (0,
							$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_5__.proxyLocation)().origin;
							return newVal;
							// TODO: Bring back
						},
						// Inject aero imports
						srcdoc: function (_el, newVal) {
							return $aero.init + newVal;
						},
						// Emulate CSP later
						csp: function (_el, newVal, oldVal) {
							return "";
						},
						allow: function (_el, newVal, oldVal) {
							sec.perms = oldVal;
							return "";
						},
						allowPaymentRequest: function (_el, _newVal, oldVal) {
							sec.pr = oldVal;
							return "";
						}
					},
					onCreateHandler: function (el) {
						// @ts-ignore
						el.contentWindow.$aero.frame.sec = JSON.stringify(sec);
					}
				});
			}
			htmlRules.set(HTMLMetaElement, {
				onAttrHandlers: {
					httpEquiv: function (el, newVal) {
						switch (newVal) {
							case "content-security-policy":
								return el.content;
							case "refresh":
								return el.content.replace(
									/^([0-9]+)(;)(\s+)?(url=)(.*)/g,
									function (_match, g1, g2, g3, g4, g5) {
										return (
											g1 +
											g2 +
											g3 +
											g4 +
											(0,
											$shared_src__WEBPACK_IMPORTED_MODULE_4__[
												"default"
											])(
												g5,
												(0,
												$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_5__.proxyLocation)()
													.href
											)
										);
									}
								);
						}
					}
				}
			});
			/* harmony default export */ __webpack_exports__["default"] =
				htmlRules;
		},
		"./src/sandboxers/HTML/shared/htmlSrc.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__;
				}
			});
			/* harmony import */ var $shared_sharedConfig__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! $shared/sharedConfig */ "./src/shared/sharedConfig.ts"
				);
			/* harmony import */ var $src_shared_src__WEBPACK_IMPORTED_MODULE_1__ =
				__webpack_require__(
					/*! $src/shared/src */ "./src/shared/src.ts"
				);
			/* harmony import */ var $shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__ =
				__webpack_require__(
					/*! $shared/proxyLocation */ "./src/shared/proxyLocation.ts"
				);
			function _array_like_to_array(arr, len) {
				if (len == null || len > arr.length) len = arr.length;
				for (var i = 0, arr2 = new Array(len); i < len; i++)
					arr2[i] = arr[i];
				return arr2;
			}
			function _array_without_holes(arr) {
				if (Array.isArray(arr)) return _array_like_to_array(arr);
			}
			function _instanceof(left, right) {
				if (
					right != null &&
					typeof Symbol !== "undefined" &&
					right[Symbol.hasInstance]
				) {
					return !!right[Symbol.hasInstance](left);
				} else {
					return left instanceof right;
				}
			}
			function _iterable_to_array(iter) {
				if (
					(typeof Symbol !== "undefined" &&
						iter[Symbol.iterator] != null) ||
					iter["@@iterator"] != null
				)
					return Array.from(iter);
			}
			function _non_iterable_spread() {
				throw new TypeError(
					"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			}
			function _to_consumable_array(arr) {
				return (
					_array_without_holes(arr) ||
					_iterable_to_array(arr) ||
					_unsupported_iterable_to_array(arr) ||
					_non_iterable_spread()
				);
			}
			function _unsupported_iterable_to_array(o, minLen) {
				if (!o) return;
				if (typeof o === "string")
					return _array_like_to_array(o, minLen);
				var n = Object.prototype.toString.call(o).slice(8, -1);
				if (n === "Object" && o.constructor) n = o.constructor.name;
				if (n === "Map" || n === "Set") return Array.from(n);
				if (
					n === "Arguments" ||
					/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
				)
					return _array_like_to_array(o, minLen);
			}

			/**
			 * Extends src rewriting for processed html urls
			 * @param - The url to rewrite
			 * @param - If its to rewrite an iFrame src
			 */ /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(
				src,
				isIFrame
			) {
				// TODO: rewrite
				if (_instanceof(src, Blob)) return src;
				var url = $aero.proto.get(
					src.replace(
						new RegExp("^(".concat(location.origin, ")"), "g"),
						""
					)
				);
				if (/^javascript:/g.test(url))
					return (0,
					$shared_sharedConfig__WEBPACK_IMPORTED_MODULE_0__[
						"default"
					])("rewriters").js.wrapScript(url);
				if (/^data:/g.test(url)) {
					if (isIFrame) {
						var exp = /^data:text\/html(;base64)?,/g;
						var matches = _to_consumable_array(url.matchAll(exp));
						if (matches.length === 2)
							return matches[0].replace(
								exp,
								"$&".concat(
									encodeURIComponent(
										$aero.init + decodeURIComponent(url)
									)
								)
							);
						if (matches.length === 1)
							return "$&".concat(btoa($aero.init + atob(url)));
					}
					return url;
				}
				if (
					// Ignore about:blank
					/^about:/g.test(url) || // Don't rewrite again
					new RegExp(
						"^(".concat(
							(0,
							$shared_sharedConfig__WEBPACK_IMPORTED_MODULE_0__[
								"default"
							])("prefix"),
							")"
						)
					).test(url)
				)
					return url;
				return (0,
				$src_shared_src__WEBPACK_IMPORTED_MODULE_1__["default"])(
					url,
					(0,
					$shared_proxyLocation__WEBPACK_IMPORTED_MODULE_2__.proxyLocation)()
						.href
				);
			}
		},
		"./src/sandboxers/HTML/shared/tt.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				safeText: function () {
					return safeText;
				},
				tt: function () {
					return tt;
				}
			});
			Object(
				(function webpackMissingModule() {
					var e = new Error(
						"Cannot find module '$aero/examples/config'"
					);
					e.code = "MODULE_NOT_FOUND";
					throw e;
				})()
			);
			function _instanceof(left, right) {
				if (
					right != null &&
					typeof Symbol !== "undefined" &&
					right[Symbol.hasInstance]
				) {
					return !!right[Symbol.hasInstance](left);
				} else {
					return left instanceof right;
				}
			}

			var flags = Object(
				(function webpackMissingModule() {
					var e = new Error(
						"Cannot find module '$aero/examples/config'"
					);
					e.code = "MODULE_NOT_FOUND";
					throw e;
				})()
			);
			// For Cors Emulation
			var tt = trustedTypes.createPolicy("$aero", {
				createHTML: function (str) {
					return str;
				},
				createScript: function (str) {
					return str;
				}
			});
			// A safe wrapper for text to comply with trusted types
			var safeText = function (el, str) {
				var isScript = _instanceof(el, HTMLScriptElement);
				el.innerHTML = flags.corsEmulation
					? tt[isScript ? "createHTML" : "createScript"](str)
					: str;
			};
		},
		"./src/shared/appendSearchParam.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__;
				}
			});
			// appendSearchParam.ts
			/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(
				searchParams,
				searchParamOptions,
				str
			) {
				// Until a compatible search param is found
				var escapingCharCount = 0;
				while (true) {
					var escapesStr = "";
					for (var i = 0; i < escapingCharCount; i++)
						escapesStr += searchParamOptions.escapeKeyword;
					// Try the search param with yet another escapeChar
					var paramToTry =
						escapesStr + searchParamOptions.searchParam;
					if (!searchParams.has(paramToTry))
						return searchParams.set(paramToTry, str);
				}
			}
		}
	}
]);
//# sourceMappingURL=src_sandboxers_HTML_shared_htmlRules_ts-src_sandboxers_HTML_shared_htmlSrc_ts.js.map
