(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselListUi", function() { return CarouselListUi; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarouselListUi =
/*#__PURE__*/
function () {
  function CarouselListUi(_ref) {
    var domElement = _ref.domElement,
        data = _ref.data,
        style = _ref.style;

    _classCallCheck(this, CarouselListUi);

    Object.assign(this, {
      domElement: domElement,
      data: data,
      style: style
    });
    this.contentIndex = 0;
    this.overContentIndex = 0;
    this.link = data.linkArr[this.contentIndex];
    this.wholeWidth = this.style.content.width * (this.data.titleArr.length + 1);
  }

  _createClass(CarouselListUi, [{
    key: "render",
    value: function render() {
      var container = document.querySelector(this.domElement);
      container.appendChild(this.addLayout());
      container.appendChild(this.addSelector());
      var layout = document.querySelector(".h-list-layout");
      this.addContainerStyle(container);
      this.addLayoutStyle(layout);
      this.addLayoutEvent(layout);
      layout.innerHTML += this.addContentList();
    }
  }, {
    key: "addLayout",
    value: function addLayout() {
      var selector = document.createElement("div");
      selector.className = "h-list-layout";
      window.tabIndex = 0;
      selector.tabIndex = 1;
      return selector;
    }
  }, {
    key: "addSelector",
    value: function addSelector() {
      var selector = document.createElement("div");
      selector.style.width = "".concat(Number(this.style.content.width) + 20, "px");
      selector.style.height = "".concat(Number(this.style.content.height) + 20, "px");
      selector.style.position = "absolute";
      selector.style.top = "0";
      selector.style.backgroundColor = "#008000";
      selector.style.opacity = "0.5";
      selector.className = "h-list-selector";
      selector.style.transition = "transform 0.1s linear";
      return selector;
    }
  }, {
    key: "moveSelector",
    value: function moveSelector(transformSize) {
      var selector = document.querySelector(".h-list-selector");
      this.link = this.data.linkArr[this.contentIndex + this.overContentIndex];
      selector.style.transform = "translateX(".concat(transformSize, "px)");
      return selector.style.transform;
    }
  }, {
    key: "goLink",
    value: function goLink() {
      window.location.href = this.link;
    }
  }, {
    key: "addContainerStyle",
    value: function addContainerStyle(element) {
      element.style.width = "".concat(this.style.container.width, "px");
      element.style.height = "".concat(this.style.container.height, "px");
      element.style.position = "relative";
      element.style.overflow = "hidden";
      return element;
    }
  }, {
    key: "addLayoutStyle",
    value: function addLayoutStyle(element) {
      element.style.display = "flex";
      element.style.outline = "none";
      element.style.transition = "transform 0.1s linear";
      element.style.width = "".concat(this.wholeWidth, "px");
      return element;
    }
  }, {
    key: "addLayoutEvent",
    value: function addLayoutEvent(element) {
      var _this = this;

      var contentWidth = this.style.content.width;
      var containerWidth = this.style.container.width;
      var wholeWidth = this.wholeWidth;
      element.addEventListener("keydown", function (e) {
        return _this.moveElement(e, element, contentWidth, containerWidth, wholeWidth);
      });
    }
  }, {
    key: "moveElement",
    value: function moveElement(e, element, contentWidth, containerWidth, wholeWidth) {
      if (e.key === "ArrowRight") {
        this.changeLayoutRight(element, contentWidth, containerWidth, wholeWidth);
      } else if (e.key === "ArrowLeft") {
        this.changeLayoutLeft(element, contentWidth, containerWidth, wholeWidth);
      } else if (e.key === "Enter") {
        this.goLink();
      }
    }
  }, {
    key: "changeLayoutLeft",
    value: function changeLayoutLeft(element, contentWidth, containerWidth, wholeWidth) {
      var originSize = Number(element.style.transform.replace(/[^0-9-]/g, ""));
      var contentWidthSize = Number(contentWidth);

      if (originSize >= 0) {
        return;
      }

      if (Math.abs(originSize) > wholeWidth - containerWidth && this.overContentIndex > 0) {
        this.overContentIndex--;
        this.moveSelector((contentWidthSize + 20) * this.overContentIndex);
        return;
      }

      this.contentIndex--;
      this.link = this.data.linkArr[this.contentIndex];
      element.style.transform = "translateX(".concat(originSize + contentWidthSize + 20, "px)");
    }
  }, {
    key: "changeLayoutRight",
    value: function changeLayoutRight(element, contentWidth, containerWidth, wholeWidth) {
      var originSize = Number(element.style.transform.replace(/[^0-9-]/g, ""));
      var contentWidthSize = Number(contentWidth);

      if (Math.abs(originSize) > wholeWidth - containerWidth) {
        this.selectorMoveChecker(contentWidthSize, containerWidth);
        return;
      }

      this.contentIndex++;
      this.link = this.data.linkArr[this.contentIndex];
      element.style.transform = "translateX(".concat(originSize - contentWidthSize - 20, "px)");
    }
  }, {
    key: "selectorMoveChecker",
    value: function selectorMoveChecker(contentWidth, containerWidth) {
      if ((contentWidth + 20) * (this.overContentIndex + 1) > containerWidth - contentWidth) {
        return;
      }

      this.overContentIndex++;
      this.moveSelector((contentWidth + 20) * this.overContentIndex);
      return;
    }
  }, {
    key: "addContentList",
    value: function addContentList() {
      var _this2 = this;

      var contentDom = "";
      this.data.titleArr.forEach(function (v, i) {
        contentDom += "\n      <a href=\"".concat(_this2.data.linkArr[i], "\" style=\"margin:10px\">\n        <div class=\"h-list\" style=\"width:").concat(_this2.style.content.width, "px; height:").concat(_this2.style.content.height, "px;\">\n          <img style=\"width:").concat(_this2.style.content.width, "px; height:").concat(_this2.style.content.width, "px;\"src=\"").concat(_this2.data.thumbnailArr[i], "\">\n          <div class=\"h-list-title\">").concat(_this2.data.titleArr[i], "</div>\n          <div class=\"h-list-desc\">").concat(_this2.data.descriptionArr[i], "</div>\n        </div>\n      </a>");
      });
      return contentDom;
    }
  }]);

  return CarouselListUi;
}();



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});