/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://webpack_test/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://webpack_test/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://webpack_test/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://webpack_test/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://webpack_test/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/assets/asset.js":
/*!*****************************!*\
  !*** ./src/assets/asset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Asset)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n\r\n\r\nclass Asset {\r\n  constructor(options) {\r\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    this.options = options || {};\r\n    this.isMouseOver = false;\r\n    this.dragging = false;\r\n    this.path = null;\r\n  }\r\n\r\n  get zIndex() {\r\n    return this.options?.zIndex | 0;\r\n  }\r\n  \r\n  draw(ctx) {\r\n    //PLEASE IMPLEMENT ME\r\n  }\r\n\r\n  passTime(deltaTime) {\r\n    if (typeof this.options?.passTime === \"function\") {\r\n      this.options.passTime(deltaTime);\r\n    }\r\n  }\r\n\r\n  setMouseOver(state) {\r\n    this.isMouseOver = state;\r\n  }\r\n\r\n  setDragging(state) {\r\n    this.dragging = state;\r\n  }\r\n\r\n  isMouseInside(ctx, event) {\r\n    if (this.path) {\r\n      return ctx.isPointInPath(this.path, event.offsetX, event.offsetY);\r\n    }\r\n    return false;\r\n  }\r\n\r\n  outputDebug(){\r\n    console.log(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/assets/asset.js?");

/***/ }),

/***/ "./src/assets/circle.js":
/*!******************************!*\
  !*** ./src/assets/circle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circle\": () => (/* binding */ Circle)\n/* harmony export */ });\n/* harmony import */ var _helpers_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/vector */ \"./src/helpers/vector.js\");\n/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset */ \"./src/assets/asset.js\");\n\r\n\r\n\r\nclass Circle extends _asset__WEBPACK_IMPORTED_MODULE_1__.default{\r\n  constructor(options) {\r\n    super(options);\r\n  }\r\n\r\n  draw(ctx) {\r\n    if (typeof this.options?.modifier === \"function\") {\r\n      this.options.modifier(ctx, this);\r\n    }\r\n\r\n    this.path = new Path2D();\r\n    this.path.arc(\r\n      this.options.location.x,\r\n      this.options.location.y,\r\n      this.options.radius,\r\n      this.options.startAngle,\r\n      this.options.endAngle,\r\n      false\r\n    );\r\n    ctx.fill(this.path);\r\n  }\r\n\r\n  /**\r\n   * \r\n   * @param {Vector} vector \r\n   */\r\n  nudgeLocation(vector) {\r\n    if (vector) {\r\n      this.options.location = this.options.location.add(vector);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/assets/circle.js?");

/***/ }),

/***/ "./src/assets/director.js":
/*!********************************!*\
  !*** ./src/assets/director.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCurrentScene\": () => (/* binding */ setCurrentScene),\n/* harmony export */   \"addToScene\": () => (/* binding */ addToScene),\n/* harmony export */   \"passTime\": () => (/* binding */ passTime),\n/* harmony export */   \"addToCurrentScene\": () => (/* binding */ addToCurrentScene),\n/* harmony export */   \"getCurrentScene\": () => (/* binding */ getCurrentScene),\n/* harmony export */   \"onMouseMove\": () => (/* binding */ onMouseMove),\n/* harmony export */   \"onMouseUp\": () => (/* binding */ onMouseUp),\n/* harmony export */   \"onMouseDown\": () => (/* binding */ onMouseDown),\n/* harmony export */   \"drawScene\": () => (/* binding */ drawScene),\n/* harmony export */   \"removeFromCurrentScene\": () => (/* binding */ removeFromCurrentScene)\n/* harmony export */ });\n/* harmony import */ var _ui_mouse_mutex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/mouse-mutex */ \"./src/ui/mouse-mutex.js\");\n/* harmony import */ var _ui_mouse_mutex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_mouse_mutex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ \"./src/assets/scene.js\");\n\r\n\r\nconst scenes = {};\r\nlet currentSceneName = null;\r\n\r\nfunction setCurrentScene(name){\r\n    if (scenes[name] === undefined){\r\n        scenes[name] = new _scene__WEBPACK_IMPORTED_MODULE_1__.default(name);\r\n    }\r\n\r\n    currentSceneName = name;\r\n}\r\n\r\nfunction addToScene(name, asset){\r\n    const scene = scenes[name]\r\n    if (name && scene){\r\n        scene.addAsset(asset);\r\n    } else{\r\n        throw Error(`something wrong with this scene ${name}`);\r\n    }\r\n}\r\n\r\nfunction passTime(delta){\r\n    const scene = getCurrentScene();\r\n    scene.passTime(delta);\r\n}\r\n\r\nfunction addToCurrentScene(asset){\r\n    if (!currentSceneName){\r\n        throw Error(`Current Scene not set, please set the scene to add asset to`);\r\n    }\r\n\r\n    addToScene(currentSceneName, asset);\r\n}\r\n\r\nfunction getCurrentScene(){\r\n    return scenes[currentSceneName];\r\n}\r\n\r\nfunction onMouseMove(ctx, event){\r\n    const currentScene = getCurrentScene();\r\n    const zIndexSorted = currentScene.assets.sort(zIndexFunction);\r\n    let finished = false;\r\n    for (let i = 0; i< zIndexSorted.length; i++){\r\n        const asset = zIndexSorted[i];\r\n        if (finished){\r\n            asset.setMouseOver(false);\r\n            continue;\r\n        }\r\n        \r\n        const isMouseInside = asset.isMouseInside(ctx, event);\r\n        if (isMouseInside) {\r\n            finished = true;\r\n            asset.setMouseOver(true);\r\n            continue;\r\n        } else {\r\n            asset.setMouseOver(false);\r\n        }\r\n    }\r\n\r\n    if (currentScene.isDragging){\r\n        const asset = currentScene.draggedAsset;\r\n        if (asset?.options?.isDraggable && !asset?.options?.isSnapOnDragEnd){\r\n            //animate the drag\r\n            const vector = _ui_mouse_mutex__WEBPACK_IMPORTED_MODULE_0__.calculateCurrentVector(event);\r\n            asset.nudgeLocation(vector);\r\n        }\r\n    }\r\n}\r\n\r\nconst zIndexFunction = function(a, b){\r\n    if (a.zIndex > b.zIndex) return -1;\r\n    if (a.zIndex < b.zIndex) return 1;\r\n\r\n    return 0;\r\n}\r\n\r\n\r\nfunction onMouseUp(ctx, event){\r\n    //we'll do the snap move first, then figure shit out\r\n    const currentScene = getCurrentScene();\r\n    const asset = currentScene.draggedAsset;\r\n    if (asset?.options?.isDraggable\r\n        && asset?.options?.isSnapOnDragEnd){\r\n        const vector = _ui_mouse_mutex__WEBPACK_IMPORTED_MODULE_0__.calculateCurrentVectorSinceMouseDown(event);\r\n        asset.nudgeLocation(vector);\r\n    }\r\n\r\n    if (asset){\r\n        asset.outputDebug();\r\n    }\r\n    currentScene.onMouseUp();\r\n}\r\n\r\nfunction onMouseDown(ctx, event){\r\n    const currentScene = getCurrentScene();\r\n    currentScene.onMouseDown();\r\n}\r\n\r\nfunction drawScene(ctx){\r\n    const scene = getCurrentScene();\r\n    //TODO: adjust for zoom level at some stage\r\n    scene.assets.sort(zIndexFunction).reverse().forEach(x => x.draw(ctx));\r\n}\r\n\r\nfunction removeFromCurrentScene(thing){\r\n    const scene = getCurrentScene();\r\n    const index = scene.assets.findIndex((element) => element.id == thing.id);\r\n    if (index >= 0){\r\n        scene.assets.splice(index, 1);\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/assets/director.js?");

/***/ }),

/***/ "./src/assets/scene.js":
/*!*****************************!*\
  !*** ./src/assets/scene.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scene)\n/* harmony export */ });\n\r\nclass Scene {\r\n    constructor(name){\r\n        this.name = name;\r\n        this.assets = []; \r\n        this.isMouseDown = false;\r\n        this.draggedAsset = null;\r\n    }\r\n\r\n    addAsset(asset){\r\n        this.assets.push(asset);\r\n    }\r\n\r\n    get currentMouseOverAsset(){\r\n        return this.assets.find(x => x.isMouseOver === true);\r\n    }\r\n\r\n    get isDragging(){\r\n        return this.draggedAsset !== null;\r\n    }\r\n\r\n    onMouseDown(){\r\n        this.isMouseDown = true;\r\n        this.draggedAsset = this.currentMouseOverAsset;\r\n        if (this.currentMouseOverAsset) {\r\n            this.currentMouseOverAsset.setDragging(true);\r\n        }\r\n    }\r\n\r\n    onMouseUp(){\r\n        // calculate what to happen if there was a asset that's movable\r\n        this.isMouseDown = false;\r\n        if (this.draggedAsset){\r\n            this.draggedAsset.setDragging(false);\r\n        }\r\n        this.draggedAsset = null;\r\n    }\r\n\r\n    passTime(deltaTime){\r\n        this.assets.forEach(asset => asset.passTime(deltaTime));\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/assets/scene.js?");

/***/ }),

/***/ "./src/bootloader.js":
/*!***************************!*\
  !*** ./src/bootloader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _assets_circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/circle */ \"./src/assets/circle.js\");\n/* harmony import */ var _helpers_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/point */ \"./src/helpers/point.js\");\n/* harmony import */ var _assets_director__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/director */ \"./src/assets/director.js\");\n/* harmony import */ var _core_city_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/city-registry */ \"./src/core/city-registry.js\");\n/* harmony import */ var _data_world_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/world-map */ \"./src/data/world-map.js\");\n/* harmony import */ var _data_actors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/actors */ \"./src/data/actors.js\");\n/* harmony import */ var _core_agency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/agency */ \"./src/core/agency.js\");\n//loads relevant data and sets the scene\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//this is the bootloader function\r\nfunction init() {\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_2__.setCurrentScene(\"default\");\r\n  \r\n  testData();\r\n  \r\n  loadCities();\r\n  loadAgents();\r\n  \r\n}\r\n\r\nfunction loadCities() {\r\n  for (const [_, value] of Object.entries(_data_world_map__WEBPACK_IMPORTED_MODULE_4__.CITIES)) {\r\n    _core_city_registry__WEBPACK_IMPORTED_MODULE_3__.registerCity(value);\r\n    _assets_director__WEBPACK_IMPORTED_MODULE_2__.addToCurrentScene(value);\r\n  }\r\n}\r\n\r\nfunction loadAgents() {\r\n  for (const [_, value] of Object.entries(_data_actors__WEBPACK_IMPORTED_MODULE_5__.ACTORS)) {\r\n    _core_agency__WEBPACK_IMPORTED_MODULE_6__.addAgent(value);\r\n  }\r\n}\r\n\r\nfunction testData() {\r\n  const circle1Pattern = new _assets_circle__WEBPACK_IMPORTED_MODULE_0__.Circle({\r\n    radius: 10,\r\n    startAngle: 0,\r\n    endAngle: 2 * Math.PI,\r\n    location: new _helpers_point__WEBPACK_IMPORTED_MODULE_1__.default(70, 80),\r\n    modifier: function (ctx, obj) {\r\n      if (obj.isMouseOver) {\r\n        ctx.fillStyle = \"green\";\r\n      } else {\r\n        ctx.fillStyle = \"red\";\r\n      }\r\n    },\r\n    isDraggable: true,\r\n    isSnapOnDragEnd: true,\r\n    zIndex: 3,\r\n  });\r\n\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_2__.addToCurrentScene(circle1Pattern);\r\n\r\n  let blinky = 0;\r\n  let blinkState = \"black\";\r\n  const uiCircle2 = new _assets_circle__WEBPACK_IMPORTED_MODULE_0__.Circle({\r\n    location: new _helpers_point__WEBPACK_IMPORTED_MODULE_1__.default(75, 85),\r\n    radius: 10,\r\n    startAngle: 0,\r\n    endAngle: Math.PI * 2,\r\n    modifier: (ctx, obj) => {\r\n      ctx.fillStyle = blinkState;\r\n    },\r\n    passTime: (deltaTime) => {\r\n      blinky += deltaTime;\r\n      if (Math.round(blinky / 200) % 2 === 1) {\r\n        blinkState = \"black\";\r\n      } else {\r\n        blinkState = \"purple\";\r\n      }\r\n    },\r\n    isDraggable: true,\r\n    zIndex: 2,\r\n  });\r\n\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_2__.addToCurrentScene(uiCircle2);\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/bootloader.js?");

/***/ }),

/***/ "./src/core/agency.js":
/*!****************************!*\
  !*** ./src/core/agency.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAgent\": () => (/* binding */ addAgent),\n/* harmony export */   \"passTime\": () => (/* binding */ passTime)\n/* harmony export */ });\n/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agent */ \"./src/core/agent.js\");\n\r\n\r\nconst knownAgents = [];\r\n\r\n/**\r\n * \r\n * @param {Agent} agent \r\n */\r\nfunction addAgent(agent){\r\n    knownAgents.push(agent);\r\n}\r\n\r\nfunction passTime(deltaTime){\r\n    //should only be called from the main loop\r\n    knownAgents.forEach(x => x.passTime(deltaTime));\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/agency.js?");

/***/ }),

/***/ "./src/core/agent.js":
/*!***************************!*\
  !*** ./src/core/agent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Agent)\n/* harmony export */ });\nclass Agent {\r\n  constructor() {}\r\n  passTime(deltaTime) {\r\n    console.log(`please override me plz ${typeof this}`);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/agent.js?");

/***/ }),

/***/ "./src/core/caravan.js":
/*!*****************************!*\
  !*** ./src/core/caravan.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Caravan)\n/* harmony export */ });\n/* harmony import */ var _assets_director__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/director */ \"./src/assets/director.js\");\n/* harmony import */ var _city_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-registry */ \"./src/core/city-registry.js\");\n/* harmony import */ var _journey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journey */ \"./src/core/journey.js\");\n\r\n\r\n\r\n\r\nconst CARAVAN_MOVE_SPEED = 22; //PICK A NUMBER RANDOMLY?\r\nconst DEFAULT_CARAVAN_MAX_SIZE = 20;\r\n\r\nclass Caravan{\r\n    #load = 0;\r\n    #actions = null;\r\n    #options;\r\n\r\n    constructor(options){\r\n        this.route = {};\r\n        this.#options = options || { maxCaravanSize: DEFAULT_CARAVAN_MAX_SIZE};\r\n    }\r\n\r\n    set cargo(load){\r\n        // TODO: implement actual value and economy systems later\r\n        if (load > this.#options.maxCaravanSize){\r\n            throw Error(\"can't load this much\");\r\n        }\r\n\r\n        this.#load = load;\r\n    }\r\n    get maxCaravanLoad(){\r\n        return this.#options.maxCaravanSize;\r\n    }\r\n\r\n    get cargo(){\r\n        return this.#load;\r\n    }\r\n\r\n    set homeCity(name){\r\n        this.route.homeCity = (0,_city_registry__WEBPACK_IMPORTED_MODULE_1__.getCity)(name);\r\n    }\r\n\r\n    set destination(name){\r\n        this.route.destination = (0,_city_registry__WEBPACK_IMPORTED_MODULE_1__.getCity)(name);\r\n    }\r\n\r\n    set journeyLegs(actions){\r\n        this.#actions = actions;\r\n    }\r\n\r\n    startJourney(onFinishedCallback){\r\n        if (!onFinishedCallback){\r\n            throw Error('hey yo, please have a callback else you wont know its done');\r\n        }\r\n\r\n        if (!this.#actions?.length){\r\n            throw Error(\"no actions set, that's a little odd\");\r\n        }\r\n\r\n        this.onFinishedCallback = onFinishedCallback;\r\n\r\n        if (!this.route.homeCity || !this.route.destination){\r\n            console.error(`broken journey - home city: ${this.route.homeCity} | destination city: ${this.route.desiredQuantity}`);\r\n        }\r\n\r\n        //once a journey has begun, it's activated creates an entity on the map\r\n        //which starts working\r\n        this.journey = new _journey__WEBPACK_IMPORTED_MODULE_2__.default(this.#actions,\r\n            this.route.homeCity, \r\n            this.route.destination, \r\n            (j) => this.finishJourney(j));\r\n\r\n        //TODO: figure out if i like this or not\r\n        _assets_director__WEBPACK_IMPORTED_MODULE_0__.addToCurrentScene(this.journey);\r\n    }\r\n\r\n    finishJourney(journey){\r\n        console.log('finished a joruney')\r\n        //this is not guarenteed to be on this current scene so should be interesting\r\n        // TODO fix me and remove me from global?\r\n        _assets_director__WEBPACK_IMPORTED_MODULE_0__.removeFromCurrentScene(this.journey);\r\n        this.journey = null;\r\n        \r\n        // TODO: build in failure conditions later\r\n        // assume this journey is successful\r\n        this.onFinishedCallback(this, true);\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/caravan.js?");

/***/ }),

/***/ "./src/core/city-registry.js":
/*!***********************************!*\
  !*** ./src/core/city-registry.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCityLocation\": () => (/* binding */ getCityLocation),\n/* harmony export */   \"registerCity\": () => (/* binding */ registerCity),\n/* harmony export */   \"getCity\": () => (/* binding */ getCity)\n/* harmony export */ });\n\r\nconst cityRegistry = {};\r\n// world Directory\r\nfunction getCityLocation(name){\r\n    return cityRegistry[name].location;\r\n}\r\n\r\nfunction registerCity(city){\r\n    cityRegistry[city.name] = city;\r\n}\r\n\r\nfunction getCity(name){\r\n    return cityRegistry[name];\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/city-registry.js?");

/***/ }),

/***/ "./src/core/city.js":
/*!**************************!*\
  !*** ./src/core/city.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ City)\n/* harmony export */ });\n/* harmony import */ var _assets_asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/asset */ \"./src/assets/asset.js\");\n/* harmony import */ var _inventory_warehouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory/warehouse */ \"./src/core/inventory/warehouse.js\");\n/* harmony import */ var _caravan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caravan */ \"./src/core/caravan.js\");\n\r\n\r\n\r\n\r\nclass City extends _assets_asset__WEBPACK_IMPORTED_MODULE_0__.default {\r\n\r\n    constructor(name, worldDetails){\r\n        super({});\r\n        this.name = name; \r\n        this.worldDetails = worldDetails;\r\n        this.caravans = [];\r\n        this.warehouse = new _inventory_warehouse__WEBPACK_IMPORTED_MODULE_1__.default();\r\n    }\r\n\r\n    setProfiles(profile){\r\n        this.consumptionProfile = profile?.consumptionProfile;\r\n        this.productionProfile = profile?.productionProfile;\r\n    }\r\n\r\n    get location(){\r\n        return this.worldDetails.location\r\n    }\r\n\r\n    passTime(deltaTime){\r\n        this.consumptionProfile?.passTime(deltaTime);\r\n        this.productionProfile?.passTime(deltaTime);\r\n\r\n    }\r\n\r\n    get hunger(){\r\n        return this.consumptionProfile?.hunger;\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {Caravan} caravan \r\n     */\r\n    addToTradeFleet(caravan){\r\n        this.caravans.push(caravan);\r\n    }\r\n    \r\n    removeFromTradeFleet(caravan){\r\n        const i = this.caravans.findIndex(x => x.id === caravan.id);\r\n        this.caravans.splice(i, 1);\r\n    }\r\n\r\n    draw(ctx){\r\n        this.path = new Path2D();\r\n        //bah who cares\r\n        this.path.arc(this.worldDetails.location.x, this.worldDetails.location.y, 25, 0, Math.PI * 2, false);\r\n        ctx.fillStyle = \"purple\";\r\n        ctx.fill(this.path);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/city.js?");

/***/ }),

/***/ "./src/core/consumer-profile.js":
/*!**************************************!*\
  !*** ./src/core/consumer-profile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConsumerProfile)\n/* harmony export */ });\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/products */ \"./src/data/products.js\");\n/* harmony import */ var _inventory_simple_sink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory/simple-sink */ \"./src/core/inventory/simple-sink.js\");\n/* harmony import */ var _inventory_crate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory/crate */ \"./src/core/inventory/crate.js\");\n\r\n\r\n\r\n\r\nclass ConsumerProfile {\r\n  #sinks;\r\n  #warehouse;\r\n  constructor(warehosue) {\r\n    //let start off with a basic consumer profile that does per second ticks\r\n    //10 units of wood per 100000\r\n    this.#sinks = [new _inventory_simple_sink__WEBPACK_IMPORTED_MODULE_1__.default(_data_products__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS.wood, 10, 10000)];\r\n    this.#warehouse = warehosue;\r\n  }\r\n\r\n  passTime(delta) {\r\n    this.#sinks.forEach((h) => {\r\n      h.passTime(delta);\r\n    });\r\n  }\r\n\r\n  get demands() {\r\n    return this.#sinks\r\n      .filter((x) => { return x.currentDemand > 0; })\r\n      .map((x) => {\r\n        return new _inventory_crate__WEBPACK_IMPORTED_MODULE_2__.default(x.itemType, x.quantity);\r\n      });\r\n  }\r\n\r\n  quenchDemand(crate) {\r\n      const sink = this.#sinks.find(x => { return x.itemType === crate.itemType; });\r\n      sink.quenchDemand(crate.quantity);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/consumer-profile.js?");

/***/ }),

/***/ "./src/core/inventory/crafting-recipe.js":
/*!***********************************************!*\
  !*** ./src/core/inventory/crafting-recipe.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CraftingRecipe)\n/* harmony export */ });\n/* harmony import */ var _crate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crate */ \"./src/core/inventory/crate.js\");\n\r\n\r\nclass CraftingRecipe {\r\n\r\n    /**\r\n     * \r\n     * @param {Crate[]} inputs \r\n     * @param {Crate[]} outputs \r\n     * @param {Number} duration \r\n     */\r\n    constructor(inputs, outputs, duration) {\r\n        this.inputs = inputs;\r\n        this.outputs = outputs;\r\n        this.duration = duration;\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/inventory/crafting-recipe.js?");

/***/ }),

/***/ "./src/core/inventory/crate.js":
/*!*************************************!*\
  !*** ./src/core/inventory/crate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crate)\n/* harmony export */ });\nclass Crate{\r\n    constructor(itemType, quantity){\r\n        if (!itemType){\r\n            throw Error(\"no item type for this crate\");\r\n        }\r\n\r\n        if (!quantity){\r\n            throw Error(`invalid quantity ${quantity}`);\r\n        }\r\n\r\n        this.itemType = itemType;\r\n        this.quantity = quantity;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/inventory/crate.js?");

/***/ }),

/***/ "./src/core/inventory/factory.js":
/*!***************************************!*\
  !*** ./src/core/inventory/factory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Factory)\n/* harmony export */ });\n/* harmony import */ var _warehouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse */ \"./src/core/inventory/warehouse.js\");\n/* harmony import */ var _crafting_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crafting-recipe */ \"./src/core/inventory/crafting-recipe.js\");\n/* harmony import */ var _time_sensitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-sensitive */ \"./src/core/time-sensitive.js\");\n/* harmony import */ var _crate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crate */ \"./src/core/inventory/crate.js\");\n\r\n\r\n\r\n\r\n\r\nclass Factory extends _time_sensitive__WEBPACK_IMPORTED_MODULE_2__.default{\r\n    #craftingRecipe;\r\n    #warehouse;\r\n    #localWarehouse;\r\n    #options;\r\n\r\n    /**\r\n     * \r\n     * @param {Warehouse} warehouse \r\n     * @param {CraftingRecipe} craftingRecipe \r\n     * @param {*} options \r\n     */\r\n    constructor(warehouse, craftingRecipe, options){\r\n        super(craftingRecipe.duration);\r\n        this.#warehouse = warehouse;\r\n        this.#craftingRecipe = craftingRecipe;\r\n        this.#options = options;\r\n        this.#localWarehouse = new _warehouse__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    }\r\n\r\n    shouldPassTime(){\r\n        if (this.#craftingRecipe.inputs?.length > 0){\r\n            const hasItems = this.#craftingRecipe.inputs.map(crate => {\r\n                return this.#warehouse.hasItems(crate.itemType, crate.quantity);\r\n            });\r\n            return hasItems.every(x => x === true);\r\n        }\r\n        \r\n        return true;\r\n    }\r\n\r\n    execute(){\r\n        this.#craftingRecipe.outputs.forEach(item => {\r\n            this.#localWarehouse.receive(item.itemType, item.quantity);\r\n        });\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @returns {Crate[]}\r\n     */\r\n    takeAllStock(){\r\n        const crates = this.#localWarehouse.takeAll();\r\n        return crates;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/inventory/factory.js?");

/***/ }),

/***/ "./src/core/inventory/simple-sink.js":
/*!*******************************************!*\
  !*** ./src/core/inventory/simple-sink.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SimpleSink)\n/* harmony export */ });\n/* harmony import */ var _time_sensitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../time-sensitive */ \"./src/core/time-sensitive.js\");\n\r\n\r\nconst LOWEST_BOUND = -10;\r\n\r\nclass SimpleSink extends _time_sensitive__WEBPACK_IMPORTED_MODULE_0__.default{\r\n    #quantity = 0;\r\n    #options;\r\n    #currentDemand = 0;\r\n    \r\n    constructor(itemType, quantity, interval, options){\r\n        super(interval);\r\n        this.itemType = itemType;\r\n        this.#quantity = quantity;\r\n        this.#options = options || {};\r\n    }\r\n\r\n    /**\r\n     * Negative demand means it has enough supplies.\r\n     */\r\n    get currentDemand(){\r\n        return this.#currentDemand;\r\n    }\r\n\r\n    execute(){\r\n        this.#currentDemand += this.#quantity;\r\n\r\n        if (this.#options.maxDemand < this.#currentDemand){\r\n            if (this.#options.maxDemandConsequence){\r\n                this.#options.maxDemandConsequence();\r\n            }\r\n        }\r\n    }\r\n\r\n    quenchDemand(quantity){\r\n        if (this.#currentDemand - quantity < LOWEST_BOUND){\r\n            return false;\r\n        }\r\n\r\n        this.#currentDemand -= this.#quantity;\r\n        return true;\r\n    }\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/inventory/simple-sink.js?");

/***/ }),

/***/ "./src/core/inventory/warehouse.js":
/*!*****************************************!*\
  !*** ./src/core/inventory/warehouse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Warehouse)\n/* harmony export */ });\n/* harmony import */ var _crate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crate */ \"./src/core/inventory/crate.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/products */ \"./src/data/products.js\");\n\r\n\r\nclass Warehouse{\r\n    #stock; \r\n    #options;\r\n\r\n    constructor(defaultStock, options){\r\n        this.#stock = defaultStock || {};\r\n        this.#options = options || {};\r\n    }\r\n\r\n    takeAll(){\r\n        const results = [];\r\n        for (const [itemTypeName, quantity] of Object.entries(this.#stock)) {\r\n            const itemType = _data_products__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS[itemTypeName];\r\n            results.push(new _crate__WEBPACK_IMPORTED_MODULE_0__.default(itemType, this.take(itemType, quantity)));\r\n        }\r\n\r\n        this.#stock = {};\r\n        return results;\r\n    }\r\n\r\n    take(itemType, quantity){\r\n        if (this.hasItems(itemType,quantity)){\r\n            this.#stock[itemType.name] -= quantity;\r\n            return quantity;\r\n        }\r\n\r\n        return 0;\r\n    }\r\n\r\n    canReceive(itemType, quantity){\r\n        // TODO: build warehouse limiters\r\n        return true;\r\n    }\r\n\r\n    receive(itemType, quantity){\r\n        if (this.canReceive(itemType,quantity)){\r\n            if (!this.#stock[itemType.name]){\r\n                this.#stock[itemType.name] = 0;\r\n            }\r\n            \r\n            this.#stock[itemType.name] += quantity;\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    reserve(itemType, quantity){\r\n        // TODO: build out a reservation system\r\n    }\r\n\r\n    release(itemType, quantity){\r\n        // TODO: release the resource for someone else\r\n    }\r\n\r\n    hasItems(itemType, quantity){\r\n        if (!itemType){\r\n            throw Error(\"item type not set\");\r\n        }\r\n        if (!quantity || quantity < 0){\r\n            throw Error(\"invalid quantity\");\r\n        }\r\n        \r\n        const store = this.#stock[itemType.name];\r\n        if (store){\r\n            return store >= quantity;\r\n        }\r\n\r\n        return false;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/inventory/warehouse.js?");

/***/ }),

/***/ "./src/core/journey.js":
/*!*****************************!*\
  !*** ./src/core/journey.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Journey)\n/* harmony export */ });\n/* harmony import */ var _assets_asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/asset */ \"./src/assets/asset.js\");\n\r\n\r\nclass Journey extends _assets_asset__WEBPACK_IMPORTED_MODULE_0__.default {\r\n  #actions = null;\r\n  constructor(actions, homeCity, destinationCity, completedCallback) {\r\n    super({});\r\n\r\n    this.homeCity = homeCity;\r\n    this.destinationCity = destinationCity;\r\n\r\n    this.#actions = actions;\r\n    this.completedCallback = completedCallback;\r\n  }\r\n\r\n  passTime(deltaTime) {\r\n    if (this.#actions.length === 0){\r\n      return;\r\n    }\r\n\r\n    const completed = this.#actions[0]?.execute(deltaTime);\r\n\r\n    if (completed) {\r\n      this.#actions.shift();\r\n    }\r\n\r\n    if (this.#actions.length === 0) {\r\n      this.completedCallback(this);\r\n    }\r\n  }\r\n\r\n  draw(ctx) {\r\n    //maybe also draw the vector from start to finish\r\n    //do the scale thing later\r\n    this.#actions[0]?.draw(ctx);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/journey.js?");

/***/ }),

/***/ "./src/core/production-profile.js":
/*!****************************************!*\
  !*** ./src/core/production-profile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProducerProfile)\n/* harmony export */ });\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/products */ \"./src/data/products.js\");\n/* harmony import */ var _inventory_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory/factory */ \"./src/core/inventory/factory.js\");\n/* harmony import */ var _time_sensitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-sensitive */ \"./src/core/time-sensitive.js\");\n\r\n\r\n\r\n\r\nclass ProducerProfile extends _time_sensitive__WEBPACK_IMPORTED_MODULE_2__.default{\r\n    #warehouse = null;\r\n    #sources = [];\r\n\r\n    constructor(warehouse){\r\n        super(0);\r\n        this.#warehouse = warehouse;\r\n        this.#sources = [new _inventory_factory__WEBPACK_IMPORTED_MODULE_1__.default(this.#warehouse, _data_products__WEBPACK_IMPORTED_MODULE_0__.RAW_PRODUCTION_RECIPE.wood)];\r\n    }\r\n\r\n    execute(){\r\n        this.#sources.forEach(factory => {\r\n            const crates = factory.takeAllStock();\r\n            crates.forEach(crate => {\r\n                this.#warehouse.receive(crate.itemType, crate.quantity);\r\n            });\r\n        });\r\n    }\r\n        \r\n    passTime(deltaTime){\r\n        super.passTime(deltaTime);\r\n\r\n        this.#sources.forEach(pipe => {\r\n            pipe.passTime(deltaTime);\r\n            //add to warehouse\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/core/production-profile.js?");

/***/ }),

/***/ "./src/core/time-sensitive.js":
/*!************************************!*\
  !*** ./src/core/time-sensitive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TimeSensitive)\n/* harmony export */ });\nclass TimeSensitive {\r\n  #elapsedTime = 0;\r\n  #timeTillNextCall = 0;\r\n\r\n  constructor(timeTillNextCall) {\r\n    this.#timeTillNextCall = timeTillNextCall;\r\n  }\r\n\r\n  shouldPassTime() {\r\n    // by default, everything should just be able to pass time, but there are\r\n    // speecial occasions when this needs to wait\r\n    return true;\r\n  }\r\n\r\n  passTime(deltaTime) {\r\n    if (this.shouldPassTime()) {\r\n      this.#elapsedTime += deltaTime;\r\n      if (this.#elapsedTime >= this.#timeTillNextCall) {\r\n        this.#elapsedTime -= this.#timeTillNextCall;\r\n        this.execute();\r\n      }\r\n    }\r\n  }\r\n\r\n  execute() {\r\n    console.log(\"why have you done this to me? please extend me\");\r\n    console.log(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/time-sensitive.js?");

/***/ }),

/***/ "./src/core/trade-minister.js":
/*!************************************!*\
  !*** ./src/core/trade-minister.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TradeMinister)\n/* harmony export */ });\n/* harmony import */ var _caravan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caravan */ \"./src/core/caravan.js\");\n/* harmony import */ var _trade_buy_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trade/buy-action */ \"./src/core/trade/buy-action.js\");\n/* harmony import */ var _trade_offload_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade/offload-action */ \"./src/core/trade/offload-action.js\");\n/* harmony import */ var _trade_travel_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade/travel-action */ \"./src/core/trade/travel-action.js\");\n/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city */ \"./src/core/city.js\");\n/* harmony import */ var _time_sensitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-sensitive */ \"./src/core/time-sensitive.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass TradeMinister extends _time_sensitive__WEBPACK_IMPORTED_MODULE_5__.default {\r\n  #fetchingProducts = [];\r\n\r\n  /**\r\n   * \r\n   * @param {City} city \r\n   */\r\n  constructor(city) {\r\n      super(0);\r\n    this.city = city;\r\n  }\r\n\r\n  execute() {\r\n    const hungryFor = this.city.consumptionProfile.demands;\r\n    if (hungryFor?.length) {\r\n      //cross reference with dispatched caravans\r\n      hungryFor.forEach((hunger) => {\r\n        // console.log(hunger);\r\n        if (!this.#dispatched(hunger.product)) {\r\n          //TODO: fetch a caravan from the city instead\r\n          const caravan = new _caravan__WEBPACK_IMPORTED_MODULE_0__.default();\r\n          //base it on how big the caravan is\r\n          const quantity = Math.min(hunger.quantity, caravan.maxCaravanLoad); \r\n          caravan.homeCity = this.city.name;\r\n          this.#fetchingProducts.push(hunger.product);\r\n          caravan.destination = getClosetProducer(hunger.product);\r\n          this.city.addToTradeFleet(caravan);\r\n          caravan.journeyLegs = createSimpleTradeMission(\r\n            caravan,\r\n            caravan.route,\r\n            hunger.product,\r\n            quantity\r\n          );\r\n          caravan.startJourney((c, s) => this.onJourneyCompleted(c, s, hunger.product));\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  #dispatched(product) {\r\n    const found = this.#fetchingProducts.find((x) => x === product);\r\n    return !!found;\r\n  }\r\n\r\n  onJourneyCompleted(caravan, state, product) {\r\n    if (state) {\r\n\r\n    } else {\r\n      throw Error(\"i'm not cool enough to handle failed journeys\");\r\n    }\r\n\r\n    //close the ticket from the trade minister sider\r\n    const index = this.#fetchingProducts.findIndex(x => x === product);\r\n    this.#fetchingProducts.splice(index, 1);\r\n    this.city.removeFromTradeFleet(caravan);\r\n  }\r\n}\r\n\r\nfunction getClosetProducer(productName) {\r\n  // TODO: this is a hack for now\r\n  // should i enact a foreign policy?\r\n  return \"bar\"; // HACK: PLZ STOP\r\n  //help me\r\n}\r\n\r\nfunction createSimpleTradeMission(caravan, route, itemType, quantity) {\r\n  return [\r\n    new _trade_travel_action__WEBPACK_IMPORTED_MODULE_3__.default(caravan, route.homeCity, route.destination),\r\n    new _trade_buy_action__WEBPACK_IMPORTED_MODULE_1__.default(caravan, route.destination, itemType, -quantity),\r\n    new _trade_travel_action__WEBPACK_IMPORTED_MODULE_3__.default(caravan, route.destination, route.homeCity),\r\n    new _trade_offload_action__WEBPACK_IMPORTED_MODULE_2__.default(caravan, route.homeCity, itemType, quantity),\r\n  ];\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/trade-minister.js?");

/***/ }),

/***/ "./src/core/trade/buy-action.js":
/*!**************************************!*\
  !*** ./src/core/trade/buy-action.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BuyAction)\n/* harmony export */ });\n/* harmony import */ var _inventory_crate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inventory/crate */ \"./src/core/inventory/crate.js\");\n\r\n\r\nconst LOADTIME = 1000;\r\n\r\nclass BuyAction{\r\n    #executed = false;\r\n    #elapsedTime = 0;\r\n    constructor(caravan, targetCity, itemType, quantity){\r\n        this.caravan = caravan;\r\n        this.itemType = itemType;\r\n        this.targetCity = targetCity;\r\n        this.quantity = quantity;\r\n        this.currentLocation = targetCity.location;\r\n\r\n    }\r\n\r\n    #canExecute(){\r\n        // check target city has the goods\r\n        return this.targetCity.warehouse.hasItems(this.itemType, this.quantity);\r\n    }\r\n\r\n    execute(deltaTime){\r\n        if (!this.#canExecute()){\r\n            return false;\r\n        }\r\n        this.#elapsedTime += deltaTime;\r\n        if (this.#elapsedTime >= LOADTIME) {\r\n          const takenQuantity = this.targetCity.warehouse.take(this.itemType, this.quantity);\r\n          this.cargo = new _inventory_crate__WEBPACK_IMPORTED_MODULE_0__.default(this.itemType, takenQuantity);\r\n          this.caravan.cargo = this.cargo.quantity;\r\n          return true;\r\n        }\r\n    \r\n        return false;\r\n\r\n    }\r\n\r\n    draw(ctx){\r\n        ctx.fillStyle = \"green\";\r\n        ctx.fillRect(this.currentLocation.x, this.currentLocation.y, 5, 5);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/trade/buy-action.js?");

/***/ }),

/***/ "./src/core/trade/offload-action.js":
/*!******************************************!*\
  !*** ./src/core/trade/offload-action.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OffloadAction)\n/* harmony export */ });\nconst OFFLOADTIME = 3000;\r\n\r\n\r\nclass OffloadAction {\r\n  constructor(caravan, targetCity, item, quantity) {\r\n    this.caravan = caravan; //not sure what this does yet\r\n    this.item = item;\r\n    this.quantity = quantity;\r\n\r\n    this.targetCity = targetCity;\r\n    this.currentLocation = targetCity.location;\r\n    this.elapsedTime = 0;\r\n  }\r\n\r\n  #canExecute() {\r\n    return this.targetCity.warehouse.canReceive(this.item, this.quantity);\r\n  }\r\n\r\n  execute(deltaTime) {\r\n    if (!this.#canExecute()){\r\n        return false;\r\n    }\r\n\r\n    this.elapsedTime += deltaTime;\r\n    if (this.elapsedTime >= OFFLOADTIME) {\r\n      this.targetCity.warehouse.receive(this.item, this.quantity);\r\n      return true;\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  draw(ctx) {\r\n    //TODO: make it blink when it's offloading\r\n    ctx.fillStyle = \"green\";\r\n    ctx.fillRect(this.currentLocation.x, this.currentLocation.y, 5, 5);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/core/trade/offload-action.js?");

/***/ }),

/***/ "./src/core/trade/travel-action.js":
/*!*****************************************!*\
  !*** ./src/core/trade/travel-action.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TravelAction)\n/* harmony export */ });\n/* harmony import */ var _helpers_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/vector */ \"./src/helpers/vector.js\");\n\r\n\r\nconst SPEED = 20;\r\n\r\nclass TravelAction {\r\n    #caravan = null;\r\n    #direction = null;\r\n    #unitsCompleted = 0;\r\n    #legTotalDistance = null;\r\n    \r\n  constructor(caravan, sourceCity, destinationCity) {\r\n      this.#caravan = caravan;\r\n\r\n      this.destinationCity = destinationCity;\r\n      this.sourceCity = sourceCity;\r\n      this.currentLocation = sourceCity.location;\r\n\r\n      const v = (0,_helpers_vector__WEBPACK_IMPORTED_MODULE_0__.getVector)(sourceCity.location, destinationCity.location);\r\n      this.#direction = v.normalise();\r\n      this.#legTotalDistance = v.length();\r\n  }\r\n\r\n  execute(deltaTime) {\r\n    //calculate the time\r\n    const distance = calculateWorldDistance(deltaTime, SPEED);\r\n    const v = this.#direction.multiply(distance);\r\n    const nextLocation = this.currentLocation.add(v);\r\n    this.currentLocation = nextLocation;\r\n\r\n    //calculate leg completion\r\n    this.#unitsCompleted += distance;\r\n    if (this.#unitsCompleted >= this.#legTotalDistance) {\r\n        return true;\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  draw(ctx){\r\n    ctx.beginPath();\r\n    const c1 = this.sourceCity.location;\r\n    ctx.moveTo(c1.x, c1.y);\r\n    const c2 = this.destinationCity.location;\r\n    ctx.lineTo(c2.x, c2.y);\r\n    // TODO: make this prettier but who cares right now\r\n    ctx.stroke();\r\n    ctx.fillStyle = \"black\";\r\n    ctx.fillRect(this.currentLocation.x, this.currentLocation.y, 5, 5);\r\n  }\r\n}\r\n\r\n// TODO: split me out?\r\nfunction calculateWorldDistance(time, unitPerTime) {\r\n    // world ratio is currently set at 100\r\n    const WORLD_RATIO = 1 / 100;\r\n    return time * unitPerTime * WORLD_RATIO;\r\n  }\r\n  \n\n//# sourceURL=webpack://webpack_test/./src/core/trade/travel-action.js?");

/***/ }),

/***/ "./src/data/actors.js":
/*!****************************!*\
  !*** ./src/data/actors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTORS\": () => (/* binding */ ACTORS)\n/* harmony export */ });\n/* harmony import */ var _core_trade_minister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/trade-minister */ \"./src/core/trade-minister.js\");\n/* harmony import */ var _world_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world-map */ \"./src/data/world-map.js\");\n\r\n\r\n\r\nconst ACTORS = [\r\n    new _core_trade_minister__WEBPACK_IMPORTED_MODULE_0__.default(_world_map__WEBPACK_IMPORTED_MODULE_1__.CITIES.foo)\r\n]\n\n//# sourceURL=webpack://webpack_test/./src/data/actors.js?");

/***/ }),

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PRODUCTS\": () => (/* binding */ PRODUCTS),\n/* harmony export */   \"RAW_PRODUCTION_RECIPE\": () => (/* binding */ RAW_PRODUCTION_RECIPE)\n/* harmony export */ });\n/* harmony import */ var _core_inventory_crafting_recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/inventory/crafting-recipe */ \"./src/core/inventory/crafting-recipe.js\");\n/* harmony import */ var _core_inventory_crate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/inventory/crate */ \"./src/core/inventory/crate.js\");\n\r\n\r\n\r\nconst PRODUCTS = {\r\n  wood: {\r\n    name: \"wood\",\r\n    baseValue: 10,\r\n    flavourText:\r\n      \"everyone needs some wood yo. used in construction of most products\",\r\n  },\r\n  tools: {\r\n    name: \"tools\",\r\n    baseValue: 50,\r\n    flavourText:\r\n      \"some things can be done with tools. tools reduce time to produce products\",\r\n  },\r\n  fineTools: {\r\n    name: \"fineTools\",\r\n    baseValue: 250,\r\n    flavourText: \"used for higher end products\",\r\n  },\r\n  ironOre: {\r\n    name: \"ironOre\",\r\n    baseValue: 5,\r\n    flavourText: \"needs more work to be usable\",\r\n  },\r\n  ironIngot: {\r\n    name: \"ironIngot\",\r\n    baseValue: 30,\r\n    flavourText: \"used to produce a lot of other goodies\",\r\n  },\r\n  ironWeapons: {\r\n    name: \"ironWeapons\",\r\n    baseValue: 400,\r\n    flavourText: \"point the pointy end to people you don't like\",\r\n  },\r\n  stone: {\r\n    name: \"stone\",\r\n    baseValue: 8,\r\n  },\r\n  food: {\r\n    name: \"food\",\r\n    baseValue: 2,\r\n    flavourText: \"you eat this to survive, duh\",\r\n  },\r\n};\r\n\r\nconst RAW_PRODUCTION_RECIPE = {\r\n  wood: new _core_inventory_crafting_recipe__WEBPACK_IMPORTED_MODULE_0__.default([], [new _core_inventory_crate__WEBPACK_IMPORTED_MODULE_1__.default(PRODUCTS.wood, 1)], 500),\r\n  stone: new _core_inventory_crafting_recipe__WEBPACK_IMPORTED_MODULE_0__.default([], [new _core_inventory_crate__WEBPACK_IMPORTED_MODULE_1__.default(PRODUCTS.stone, 1)], 500),\r\n  ironIngot: new _core_inventory_crafting_recipe__WEBPACK_IMPORTED_MODULE_0__.default([new _core_inventory_crate__WEBPACK_IMPORTED_MODULE_1__.default(PRODUCTS.ironOre, 1)], [new _core_inventory_crate__WEBPACK_IMPORTED_MODULE_1__.default(PRODUCTS.ironIngot, 1)], 1000)\r\n};\r\n\n\n//# sourceURL=webpack://webpack_test/./src/data/products.js?");

/***/ }),

/***/ "./src/data/world-map.js":
/*!*******************************!*\
  !*** ./src/data/world-map.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CITIES\": () => (/* binding */ CITIES)\n/* harmony export */ });\n/* harmony import */ var _core_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/city */ \"./src/core/city.js\");\n/* harmony import */ var _helpers_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/point */ \"./src/helpers/point.js\");\n/* harmony import */ var _core_consumer_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/consumer-profile */ \"./src/core/consumer-profile.js\");\n/* harmony import */ var _core_production_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/production-profile */ \"./src/core/production-profile.js\");\n\r\n\r\n\r\n\r\n\r\nconst CITIES = {\r\n    foo: new _core_city__WEBPACK_IMPORTED_MODULE_0__.default(\"foo\", { location: new _helpers_point__WEBPACK_IMPORTED_MODULE_1__.default(20, 20) }),\r\n    bar: new _core_city__WEBPACK_IMPORTED_MODULE_0__.default(\"bar\", { location: new _helpers_point__WEBPACK_IMPORTED_MODULE_1__.default(400, 300) })\r\n}\r\n\r\nconst barProductionProfile = new _core_production_profile__WEBPACK_IMPORTED_MODULE_3__.default(CITIES.bar.warehouse);\r\nCITIES.bar.setProfiles({productionProfile: barProductionProfile})\r\n\r\n\r\nconst fooConsumptionProfile = new _core_consumer_profile__WEBPACK_IMPORTED_MODULE_2__.default();\r\nCITIES.foo.setProfiles({consumptionProfile: fooConsumptionProfile});\r\n\n\n//# sourceURL=webpack://webpack_test/./src/data/world-map.js?");

/***/ }),

/***/ "./src/helpers/point.js":
/*!******************************!*\
  !*** ./src/helpers/point.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Point)\n/* harmony export */ });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/helpers/vector.js\");\n\r\n\r\nclass Point{\r\n    constructor(x, y){\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {Vector} vector \r\n     */\r\n    add(vector){\r\n        return new Point(this.x + vector.xDir, this.y + vector.yDir);\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/helpers/point.js?");

/***/ }),

/***/ "./src/helpers/vector.js":
/*!*******************************!*\
  !*** ./src/helpers/vector.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vector),\n/* harmony export */   \"getVector\": () => (/* binding */ getVector)\n/* harmony export */ });\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/helpers/point.js\");\n\r\n\r\nclass Vector{\r\n    constructor(xDir, yDir){\r\n        this.xDir = xDir;\r\n        this.yDir = yDir;\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {Vector} otherVector \r\n     */\r\n    add(otherVector){\r\n        return new Vector(this.xDir + otherVector.xDir, this.yDir + otherVector.yDir);\r\n    }\r\n\r\n    reverse(){\r\n        return new Vector(-this.xDir, -this.yDir);\r\n    }\r\n\r\n    normalise(){\r\n        const hypotenuseLength = Math.sqrt(Math.pow(this.yDir, 2) + Math.pow(this.xDir, 2));\r\n        return new Vector(this.xDir / hypotenuseLength, this.yDir/hypotenuseLength);\r\n    }\r\n\r\n    multiply(factor){\r\n        return new Vector(this.xDir * factor, this.yDir * factor);\r\n    }\r\n\r\n    length(){\r\n        return Math.sqrt(Math.pow(this.xDir, 2) + Math.pow(this.yDir, 2));\r\n    }\r\n    \r\n}\r\n\r\n/**\r\n * \r\n * @param {Point} p1 \r\n * @param {Point} p2 \r\n * @returns {Vector}\r\n */\r\nfunction getVector(p1, p2){\r\n    return new Vector(p2.x - p1.x, p2.y - p1.y);\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/helpers/vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/mouse-mutex.js */ \"./src/ui/mouse-mutex.js\");\n/* harmony import */ var _ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _world_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world-clock */ \"./src/world-clock.js\");\n/* harmony import */ var _bootloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootloader */ \"./src/bootloader.js\");\n/* harmony import */ var _assets_director__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/director */ \"./src/assets/director.js\");\n/* harmony import */ var _core_agency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/agency */ \"./src/core/agency.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById(\"root\");\r\nvar ctx = canvas.getContext(\"2d\");\r\n\r\n(0,_bootloader__WEBPACK_IMPORTED_MODULE_2__.init)();\r\n\r\ncanvas.addEventListener(\"mousemove\", function (event) {\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_3__.onMouseMove(ctx, event);\r\n  _ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0__.mouseMove(event);\r\n});\r\n\r\ncanvas.addEventListener(\"mousedown\", function (event) {\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_3__.onMouseDown(ctx, event);\r\n  _ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0__.mouseDown(event);\r\n});\r\n\r\ncanvas.addEventListener(\"mouseup\", function (event) {\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_3__.onMouseUp(ctx, event);\r\n  _ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0__.mouseUp(event);\r\n});\r\n\r\ncanvas.addEventListener(\"mouseout\", function (event) {\r\n  //default action to catch edge exiting.\r\n  //TODO: should really be snap/cancel\r\n  _ui_mouse_mutex_js__WEBPACK_IMPORTED_MODULE_0__.mouseUp(event);\r\n});\r\n\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    _assets_director__WEBPACK_IMPORTED_MODULE_3__.drawScene(ctx);\r\n}\r\n\r\n//render the current scene\r\nfunction gameDrawLoop(){\r\n    draw();\r\n    window.requestAnimationFrame(gameDrawLoop);\r\n}\r\n\r\nfunction gameLogicalLoop(delta){\r\n  _assets_director__WEBPACK_IMPORTED_MODULE_3__.passTime(delta);\r\n  _core_agency__WEBPACK_IMPORTED_MODULE_4__.passTime(delta);\r\n}\r\n\r\n_world_clock__WEBPACK_IMPORTED_MODULE_1__.init(gameLogicalLoop);\r\n_world_clock__WEBPACK_IMPORTED_MODULE_1__.start();\r\nwindow.requestAnimationFrame(gameDrawLoop);\r\n\r\n// setTimeout(() => {\r\n\r\n// }, (3000));\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");

/***/ }),

/***/ "./src/ui/mouse-mutex.js":
/*!*******************************!*\
  !*** ./src/ui/mouse-mutex.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: Vector } = __webpack_require__(/*! ../helpers/vector */ \"./src/helpers/vector.js\");\r\n\r\nlet lastDownMs = null;\r\nconst CLICKTHRESHOLDMS = 100;\r\n\r\nlet mouseDownLocation = null;\r\nlet currentMouseLocation = null;\r\n\r\nfunction calculateCurrentVector(event){\r\n    if (mouseDownLocation != null){\r\n        const current = getLocation(event);\r\n        return new Vector(current.x - currentMouseLocation.x, current.y - currentMouseLocation.y);\r\n    }\r\n}\r\n\r\nfunction calculateCurrentVectorSinceMouseDown(event){\r\n    if (mouseDownLocation != null){\r\n        const current = getLocation(event);\r\n        return new Vector(current.x - mouseDownLocation.x, \r\n            current.y - mouseDownLocation.y);\r\n    }\r\n}\r\n\r\nfunction mouseDown(event){\r\n    mouseDownLocation = getLocation(event);\r\n    lastDownMs = performance.now();\r\n    // console.log('mouse down ' + JSON.stringify(mouseDownLocation));\r\n    \r\n}\r\n\r\nfunction mouseUp(event){\r\n    const withinClickThreshold = performance.now() - lastDownMs < CLICKTHRESHOLDMS;\r\n    lastDownMs = null;\r\n\r\n    // const mouseUpLocation = getLocation(event);\r\n    // console.log('mouse up ' + JSON.stringify(mouseUpLocation));\r\n\r\n    mouseDownLocation = null;\r\n    return { \r\n        withinClickThreshold\r\n    };\r\n}\r\n\r\nfunction mouseMove(event){\r\n    currentMouseLocation = getLocation(event);\r\n}\r\n\r\nfunction isItStillDown(){\r\n    return lastDownMs != null;\r\n}\r\n\r\nfunction getLocation(event){\r\n    return { x: event.offsetX, y: event.offsetY };\r\n}\r\n\r\nmodule.exports = {\r\n    mouseDown,\r\n    mouseUp,\r\n    mouseMove,\r\n    isItStillDown,\r\n    calculateCurrentVector,\r\n    calculateCurrentVectorSinceMouseDown\r\n}\n\n//# sourceURL=webpack://webpack_test/./src/ui/mouse-mutex.js?");

/***/ }),

/***/ "./src/world-clock.js":
/*!****************************!*\
  !*** ./src/world-clock.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimeDialationFactor\": () => (/* binding */ getTimeDialationFactor),\n/* harmony export */   \"getClock\": () => (/* binding */ getClock),\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"pause\": () => (/* binding */ pause)\n/* harmony export */ });\nconst GAMETICK = 10;\r\nlet clock = null;\r\nlet GAMESTARTED = false;\r\nlet timeDialationFactor = 1; // change this to add increase game speed\r\nlet active = false;\r\nlet lastTickMs = 0;\r\nlet worldTickFunction = null;\r\n\r\nfunction tick() {\r\n  if (!active) {\r\n    setTimeout(tick, GAMETICK);\r\n  } else {\r\n    const now = performance.now();\r\n    const diff = now - lastTickMs; // real time\r\n    const delta = (diff * timeDialationFactor);\r\n    clock += delta;\r\n    worldTickFunction(delta)\r\n    // queue next tick\r\n    lastTickMs = now;\r\n    setTimeout(tick, GAMETICK);\r\n  }\r\n}\r\n\r\nfunction getTimeDialationFactor() {\r\n    return timeDialationFactor;\r\n}\r\n\r\nfunction getClock(){\r\n    return clock;\r\n}\r\n\r\nfunction init(func){\r\n    // call me once only\r\n    if (GAMESTARTED){\r\n        throw Error (\"hey yo, this game has already started what's going on\");\r\n    }\r\n\r\n    GAMESTARTED = true;\r\n    clock = 0;\r\n    worldTickFunction = func; // this can cause significant lag\r\n    lastTickMs = performance.now();\r\n    setTimeout(tick, GAMETICK);\r\n}\r\n\r\nfunction start() {\r\n  active = true;\r\n}\r\n\r\nfunction pause() {\r\n  active = false;\r\n}\r\n\n\n//# sourceURL=webpack://webpack_test/./src/world-clock.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;