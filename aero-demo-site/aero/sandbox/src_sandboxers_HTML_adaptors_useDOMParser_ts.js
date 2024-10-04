"use strict";
(self["webpackChunkaero_sandbox"] =
	self["webpackChunkaero_sandbox"] || []).push([
	["src_sandboxers_HTML_adaptors_useDOMParser_ts"],
	{
		"./src/sandboxers/HTML/adaptors/useDOMParser.ts": function (
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
			/* harmony import */ var $sandbox_HTML_shared_rewriteElement__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! $sandbox/HTML/shared/rewriteElement */ "./src/sandboxers/HTML/shared/rewriteElement.ts"
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

			/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(
				domText
			) {
				var dom = new DOMParser().parseFromString(domText, "text/html");
				var _iteratorNormalCompletion = true,
					_didIteratorError = false,
					_iteratorError = undefined;
				try {
					for (
						var _iterator = dom.childNodes[Symbol.iterator](),
							_step;
						!(_iteratorNormalCompletion = (_step = _iterator.next())
							.done);
						_iteratorNormalCompletion = true
					) {
						var childNode = _step.value;
						if (_instanceof(childNode, HTMLElement))
							(0,
							$sandbox_HTML_shared_rewriteElement__WEBPACK_IMPORTED_MODULE_0__[
								"default"
							])(childNode);
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
				// Convert back to string
				return dom.documentElement.innerHTML;
			}
		},
		"./src/sandboxers/HTML/shared/rewriteElement.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return rewriteElement;
				}
			});
			/* harmony import */ var _htmlRules__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! ./htmlRules */ "./src/sandboxers/HTML/shared/htmlRules.ts"
				);
			/* harmony import */ var $shared_src__WEBPACK_IMPORTED_MODULE_1__ =
				__webpack_require__(/*! $shared/src */ "./src/shared/src.ts");
			/* harmony import */ var _htmlSrc__WEBPACK_IMPORTED_MODULE_2__ =
				__webpack_require__(
					/*! ./htmlSrc */ "./src/sandboxers/HTML/shared/htmlSrc.ts"
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

			var afterRewrote = new WeakMap();
			var elContainer = new WeakMap();
			function set(el, attr) {
				var val =
						arguments.length > 2 && arguments[2] !== void 0
							? arguments[2]
							: "",
					backup =
						arguments.length > 3 && arguments[3] !== void 0
							? arguments[3]
							: true;
				// Avoid rewriting the next time by marking it to not be rewrote
				if (afterRewrote.has(el)) {
					var isAfterRewrote = afterRewrote.get(el);
					if (isAfterRewrote === true) {
						afterRewrote.set(el, false);
						return;
					}
				}
				afterRewrote.set(el, true);
				var elBak = el.cloneNode(true);
				if (_instanceof(elBak, Element)) {
					el.setAttribute(attr, val);
					// Backup element (for Element hooks)
					if (backup) elContainer.set(el, elBak);
				}
				if (
					$aero.config.featureFlags.HTML_REWRITER_TYPE ===
					"mutation_observer"
				) {
					Object.defineProperty(el, attr, {
						// @ts-ignore
						get: Object.getOwnPropertyDescriptors(elBak).get,
						// @ts-ignore
						set: Object.getOwnPropertyDescriptors(el).set
					});
				}
			}
			function rewriteElement(el, attrName) {
				// Don't exclusively rewrite attributes or check for already observed elements
				var isNew = typeof attrName === "undefined";
				// Check if the element's classes are any from the ignore classes
				var elClassList = Array.from(el.classList);
				var _iteratorNormalCompletion = true,
					_didIteratorError = false,
					_iteratorError = undefined,
					_iteratorNormalCompletion1 = true,
					_didIteratorError1 = false,
					_iteratorError1 = undefined;
				try {
					for (
						var _iterator = elClassList[Symbol.iterator](), _step;
						!(_iteratorNormalCompletion1 = (_step =
							_iterator.next()).done);
						_iteratorNormalCompletion1 = true
					) {
						var elClass = _step.value;
						try {
							for (
								var _iterator1 =
										$aero.config.rewriters.html.ignoreClasses[
											Symbol.iterator
										](),
									_step1;
								!(_iteratorNormalCompletion = (_step1 =
									_iterator1.next()).done);
								_iteratorNormalCompletion = true
							) {
								var ignoreClass = _step1.value;
								if (elClass === ignoreClass) return el;
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (
									!_iteratorNormalCompletion &&
									_iterator1.return != null
								) {
									_iterator1.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError1 = true;
					_iteratorError1 = err;
				} finally {
					try {
						if (
							!_iteratorNormalCompletion1 &&
							_iterator.return != null
						) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError1) {
							throw _iteratorError1;
						}
					}
				}
				if (isNew && "integrity" in el && el.integrity !== "") {
					// @ts-ignore
					var cloner = new Cloner(el);
					cloner.clone();
					cloner.cleanup();
				}
				var _iteratorNormalCompletion2 = true,
					_didIteratorError2 = false,
					_iteratorError2 = undefined;
				try {
					// @ts-ignore
					for (
						var _iterator2 =
								_htmlRules__WEBPACK_IMPORTED_MODULE_0__[
									"default"
								]
									.entries()
									[Symbol.iterator](),
							_step2;
						!(_iteratorNormalCompletion2 = (_step2 =
							_iterator2.next()).done);
						_iteratorNormalCompletion2 = true
					) {
						var _step_value = _sliced_to_array(_step2.value, 2),
							elForRule = _step_value[0],
							htmlRule = _step_value[1];
						if (
							_instanceof(el, elForRule) && htmlRule.mustBeNew
								? isNew
								: true && attrName in htmlRule.onAttrHandlers
						) {
							var attrHandler = htmlRule.onAttrHandlers[attrName];
							if (_instanceof(attrHandler, Function))
								set(
									el,
									attrName,
									attrHandler[attrName](el, attrName)
								);
							else if (attrHandler === "rewrite-src")
								set(
									el,
									attrName,
									(0,
									$shared_src__WEBPACK_IMPORTED_MODULE_1__[
										"default"
									])(attrName)
								);
							else if (attrHandler === "rewrite-html-src")
								set(
									el,
									attrName,
									(0,
									_htmlSrc__WEBPACK_IMPORTED_MODULE_2__[
										"default"
									])(el.getAttribute(attrName))
								);
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (
							!_iteratorNormalCompletion2 &&
							_iterator2.return != null
						) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
				// @ts-ignore
				if (typeof el.onload === "string")
					// @ts-ignore
					set(
						el,
						"onload",
						$aero.rewriters.js(el.getAttribute("onload"))
					);
				// @ts-ignore
				if (typeof el.error === "string")
					// @ts-ignore
					set(
						el,
						"onerror",
						$aero.rewriters.js(el.getAttribute("onload"))
					);
			}
		}
	}
]);
//# sourceMappingURL=src_sandboxers_HTML_adaptors_useDOMParser_ts.js.map
