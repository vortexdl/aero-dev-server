"use strict";
(self["webpackChunkaero_sandbox"] =
	self["webpackChunkaero_sandbox"] || []).push([
	["src_sandboxers_HTML_adaptors_useCustomElements_ts"],
	{
		"./src/sandboxers/HTML/adaptors/useCustomElements.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			/* harmony import */ var $aero_src_shared_src__WEBPACK_IMPORTED_MODULE_0__ =
				__webpack_require__(
					/*! $aero/src/shared/src */ "./src/shared/src.ts"
				);
			/* harmony import */ var _shared_htmlSrc__WEBPACK_IMPORTED_MODULE_1__ =
				__webpack_require__(
					/*! ../shared/htmlSrc */ "./src/sandboxers/HTML/shared/htmlSrc.ts"
				);
			/* harmony import */ var _shared_proxifyCustomElementName__WEBPACK_IMPORTED_MODULE_2__ =
				__webpack_require__(
					/*! ../shared/proxifyCustomElementName */ "./src/sandboxers/HTML/shared/proxifyCustomElementName.ts"
				);
			/* harmony import */ var _shared_htmlRules__WEBPACK_IMPORTED_MODULE_3__ =
				__webpack_require__(
					/*! ../shared/htmlRules */ "./src/sandboxers/HTML/shared/htmlRules.ts"
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
			function _assert_this_initialized(self) {
				if (self === void 0) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				}
				return self;
			}
			function _class_call_check(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function _construct(Parent, args, Class) {
				if (_is_native_reflect_construct()) {
					_construct = Reflect.construct;
				} else {
					_construct = function construct(Parent, args, Class) {
						var a = [null];
						a.push.apply(a, args);
						var Constructor = Function.bind.apply(Parent, a);
						var instance = new Constructor();
						if (Class) _set_prototype_of(instance, Class.prototype);
						return instance;
					};
				}
				return _construct.apply(null, arguments);
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
			function _get(target, property, receiver) {
				if (typeof Reflect !== "undefined" && Reflect.get) {
					_get = Reflect.get;
				} else {
					_get = function get(target, property, receiver) {
						var base = _super_prop_base(target, property);
						if (!base) return;
						var desc = Object.getOwnPropertyDescriptor(
							base,
							property
						);
						if (desc.get) {
							return desc.get.call(receiver || target);
						}
						return desc.value;
					};
				}
				return _get(target, property, receiver || target);
			}
			function _get_prototype_of(o) {
				_get_prototype_of = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function getPrototypeOf(o) {
							return o.__proto__ || Object.getPrototypeOf(o);
						};
				return _get_prototype_of(o);
			}
			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				}
				subClass.prototype = Object.create(
					superClass && superClass.prototype,
					{
						constructor: {
							value: subClass,
							writable: true,
							configurable: true
						}
					}
				);
				if (superClass) _set_prototype_of(subClass, superClass);
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
			function _is_native_function(fn) {
				return (
					Function.toString.call(fn).indexOf("[native code]") !== -1
				);
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
			function _possible_constructor_return(self, call) {
				if (
					call &&
					(_type_of(call) === "object" || typeof call === "function")
				) {
					return call;
				}
				return _assert_this_initialized(self);
			}
			function _set_prototype_of(o, p) {
				_set_prototype_of =
					Object.setPrototypeOf ||
					function setPrototypeOf(o, p) {
						o.__proto__ = p;
						return o;
					};
				return _set_prototype_of(o, p);
			}
			function _sliced_to_array(arr, i) {
				return (
					_array_with_holes(arr) ||
					_iterable_to_array_limit(arr, i) ||
					_unsupported_iterable_to_array(arr, i) ||
					_non_iterable_rest()
				);
			}
			function _super_prop_base(object, property) {
				while (
					!Object.prototype.hasOwnProperty.call(object, property)
				) {
					object = _get_prototype_of(object);
					if (object === null) break;
				}
				return object;
			}
			function _type_of(obj) {
				"@swc/helpers - typeof";
				return obj &&
					typeof Symbol !== "undefined" &&
					obj.constructor === Symbol
					? "symbol"
					: typeof obj;
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
			function _wrap_native_super(Class) {
				var _cache = typeof Map === "function" ? new Map() : undefined;
				_wrap_native_super = function wrapNativeSuper(Class) {
					if (Class === null || !_is_native_function(Class))
						return Class;
					if (typeof Class !== "function") {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}
					if (typeof _cache !== "undefined") {
						if (_cache.has(Class)) return _cache.get(Class);
						_cache.set(Class, Wrapper);
					}
					function Wrapper() {
						return _construct(
							Class,
							arguments,
							_get_prototype_of(this).constructor
						);
					}
					Wrapper.prototype = Object.create(Class.prototype, {
						constructor: {
							value: Wrapper,
							enumerable: false,
							writable: true,
							configurable: true
						}
					});
					return _set_prototype_of(Wrapper, Class);
				};
				return _wrap_native_super(Class);
			}
			function _is_native_reflect_construct() {
				if (typeof Reflect === "undefined" || !Reflect.construct)
					return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Boolean.prototype.valueOf.call(
						Reflect.construct(Boolean, [], function () {})
					);
					return true;
				} catch (e) {
					return false;
				}
			}
			function _create_super(Derived) {
				var hasNativeReflectConstruct = _is_native_reflect_construct();
				return function _createSuperInternal() {
					var Super = _get_prototype_of(Derived),
						result;
					if (hasNativeReflectConstruct) {
						var NewTarget = _get_prototype_of(this).constructor;
						result = Reflect.construct(Super, arguments, NewTarget);
					} else {
						result = Super.apply(this, arguments);
					}
					return _possible_constructor_return(this, result);
				};
			}

			// TODO: Use $shared

			{
				var _iteratorNormalCompletion = true,
					_didIteratorError = false,
					_iteratorError = undefined;
				try {
					var _loop = function () {
						var _step_value = _sliced_to_array(_step.value, 2),
							OriginalHTMLElement = _step_value[0],
							htmlRule = _step_value[1];
						var observeAttributesArray = [];
						customElements.define(
							(0,
							_shared_proxifyCustomElementName__WEBPACK_IMPORTED_MODULE_2__[
								"default"
							])(htmlRule.tagName), // @ts-ignore
							/*#__PURE__*/ (function (OriginalHTMLElement) {
								"use strict";
								_inherits(
									ProxifiedElement,
									OriginalHTMLElement
								);
								var _super = _create_super(ProxifiedElement);
								function ProxifiedElement() {
									_class_call_check(this, ProxifiedElement);
									var _this = _super.call(this);
									observeAttributesArray = Object.keys(
										htmlRule.onAttrHandlers
									);
									return _this;
								}
								_create_class(
									ProxifiedElement,
									[
										{
											key: "attributeChangedCallback",
											value: function attributeChangedCallback(
												attrName,
												_oldVal,
												newVal
											) {
												var handler =
													htmlRule.onAttrHandlers[
														attrName
													];
												if (handler) {
													var rewriteHandler =
														htmlRule.onAttrHandlers[
															attrName
														];
													var actualRewriteHandler;
													if (
														rewriteHandler ===
														"rewrite-src"
													)
														actualRewriteHandler =
															function (newVal) {
																return (0,
																$aero_src_shared_src__WEBPACK_IMPORTED_MODULE_0__[
																	"default"
																])(newVal);
															};
													else if (
														rewriteHandler ===
														"rewrite-html-src"
													)
														actualRewriteHandler =
															function (newVal) {
																return (0,
																_shared_htmlSrc__WEBPACK_IMPORTED_MODULE_1__[
																	"default"
																])(newVal);
															};
													else
														actualRewriteHandler =
															rewriteHandler[
																attrName
															];
													_get(
														_get_prototype_of(
															ProxifiedElement.prototype
														),
														"setAttribute",
														this
													).call(
														this,
														attrName, // @ts-ignore
														actualRewriteHandler(
															newVal
														)
													);
												}
											}
										}
									],
									[
										{
											key: "observeAttributes",
											get: function get() {
												return observeAttributesArray;
											}
										}
									]
								);
								return ProxifiedElement;
							})(OriginalHTMLElement),
							{
								extends: htmlRule.tagName
							}
						);
					};
					for (
						var _iterator =
								_shared_htmlRules__WEBPACK_IMPORTED_MODULE_3__[
									"default"
								]
									.entries()
									[Symbol.iterator](),
							_step;
						!(_iteratorNormalCompletion = (_step = _iterator.next())
							.done);
						_iteratorNormalCompletion = true
					)
						_loop();
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
			} // "is" appending with Custom Elements
			// You can also use a Mutation Observer. TODO: I will make a flag so that you can choose which method you prefer.
			// TODO: On the SW wrap the site content with `$aero.config.htmlSandboxElementName`
			{
				var alreadyRewrittenChildren = new WeakSet();
				var HTMLSandbox = /*#__PURE__*/ (function (HTMLDivElement1) {
					"use strict";
					_inherits(HTMLSandbox, HTMLDivElement1);
					var _super = _create_super(HTMLSandbox);
					function HTMLSandbox() {
						_class_call_check(this, HTMLSandbox);
						return _super.apply(this, arguments);
					}
					_create_class(HTMLSandbox, [
						{
							key: "connectedCallback",
							value: function connectedCallback() {
								var _iteratorNormalCompletion = true,
									_didIteratorError = false,
									_iteratorError = undefined;
								try {
									for (
										var _iterator = _get(
												_get_prototype_of(
													HTMLSandbox.prototype
												),
												"children",
												this
											)[Symbol.iterator](),
											_step;
										!(_iteratorNormalCompletion = (_step =
											_iterator.next()).done);
										_iteratorNormalCompletion = true
									) {
										var child = _step.value;
										if (
											!alreadyRewrittenChildren.has(child)
										) {
											var _iteratorNormalCompletion1 = true,
												_didIteratorError1 = false,
												_iteratorError1 = undefined;
											try {
												for (
													var _iterator1 =
															_shared_htmlRules__WEBPACK_IMPORTED_MODULE_3__[
																"default"
															]
																.entries()
																[
																	Symbol
																		.iterator
																](),
														_step1;
													!(_iteratorNormalCompletion1 =
														(_step1 =
															_iterator1.next())
															.done);
													_iteratorNormalCompletion1 = true
												) {
													var _step_value =
															_sliced_to_array(
																_step1.value,
																2
															),
														OriginalHTMLElement =
															_step_value[0],
														htmlRule =
															_step_value[1];
													if (
														// @ts-ignore
														_instanceof(
															child,
															OriginalHTMLElement
														) && // Parity check
														htmlRule.tagName ===
															child.tagName
													)
														child.setAttribute(
															"is",
															(0,
															_shared_proxifyCustomElementName__WEBPACK_IMPORTED_MODULE_2__[
																"default"
															])(child.tagName)
														);
												}
											} catch (err) {
												_didIteratorError1 = true;
												_iteratorError1 = err;
											} finally {
												try {
													if (
														!_iteratorNormalCompletion1 &&
														_iterator1.return !=
															null
													) {
														_iterator1.return();
													}
												} finally {
													if (_didIteratorError1) {
														throw _iteratorError1;
													}
												}
											}
											alreadyRewrittenChildren.add(child);
										} else {
											// Toggle
											alreadyRewrittenChildren.delete(
												child
											);
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
							}
						}
					]);
					return HTMLSandbox;
				})(_wrap_native_super(HTMLDivElement));
				customElements.define(
					$aero.config.htmlSandboxElementName,
					HTMLSandbox
				);
			}
		},
		"./src/sandboxers/HTML/shared/proxifyCustomElementName.ts": function (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__
		) {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: function () {
					return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__;
				},
				key: function () {
					return key;
				}
			});
			var key = "proxified_";

			/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(
				name
			) {
				return "".concat(key, "_").concat(name);
			}
		}
	}
]);
//# sourceMappingURL=src_sandboxers_HTML_adaptors_useCustomElements_ts.js.map
