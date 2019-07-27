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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/listUis/carouselListUi.js
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
      this.addTitleDescStyle();
    }
  }, {
    key: "addTitleDescStyle",
    value: function addTitleDescStyle() {
      var _this = this;

      var title = document.querySelectorAll(".h-list-title");
      var desc = document.querySelectorAll(".h-list-desc");
      title.forEach(function (v) {
        v.style.fontSize = _this.style.title.fontSize;
        v.style.fontWeight = _this.style.title.bold ? "bold" : "null";
      });
      desc.forEach(function (v) {
        v.style.fontSize = _this.style.description;
      });
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
      var _this2 = this;

      var contentWidth = this.style.content.width;
      var containerWidth = this.style.container.width;
      var wholeWidth = this.wholeWidth;
      element.addEventListener("keydown", function (e) {
        return _this2.moveElement(e, element, contentWidth, containerWidth, wholeWidth);
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
      var _this3 = this;

      var contentDom = "";
      this.data.titleArr.forEach(function (v, i) {
        contentDom += "\n      <div style=\"margin:10px\">\n        <div class=\"h-list\" style=\"width:".concat(_this3.style.content.width, "px; height:").concat(_this3.style.content.height, "px;\">\n          <img style=\"width:").concat(_this3.style.content.width, "px; height:").concat(_this3.style.content.width, "px; object-fit: cover;\" src=\"").concat(_this3.data.thumbnailArr[i], "\">\n          <div class=\"h-list-title\">").concat(_this3.data.titleArr[i], "</div>\n          <div class=\"h-list-desc\">").concat(_this3.data.descriptionArr[i], "</div>\n        </div>\n      </div>");
      });
      return contentDom;
    }
  }]);

  return CarouselListUi;
}();


// CONCATENATED MODULE: ./src/js/listUis/gridListUi.js
function gridListUi_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function gridListUi_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function gridListUi_createClass(Constructor, protoProps, staticProps) { if (protoProps) gridListUi_defineProperties(Constructor.prototype, protoProps); if (staticProps) gridListUi_defineProperties(Constructor, staticProps); return Constructor; }

var GridListUi =
/*#__PURE__*/
function () {
  function GridListUi(_ref) {
    var _this = this;

    var domElement = _ref.domElement,
        data = _ref.data,
        style = _ref.style;

    gridListUi_classCallCheck(this, GridListUi);

    Object.assign(this, {
      domElement: domElement,
      data: data,
      style: style
    });
    this.widthIndex = 0;
    this.currentIndex = 0;
    this.link = data.linkArr[this.contentIndex];
    window.addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Enter") {
        e.preventDefault();
        _this.link = data.linkArr[_this.currentIndex];
      }
    });
  }

  gridListUi_createClass(GridListUi, [{
    key: "render",
    value: function render() {
      var container = document.querySelector(this.domElement);
      container.appendChild(this.addLayout());
      var layout = document.querySelector(".h-list-grid-layout");
      layout.appendChild(this.addSelector());
      this.addContainerStyle(container);
      this.addSelectorEvent(container);
      layout.innerHTML += this.addContentList();
      this.addTitleDescStyle();
    }
  }, {
    key: "addTitleDescStyle",
    value: function addTitleDescStyle() {
      var _this2 = this;

      var title = document.querySelectorAll(".h-list-grid-title");
      var desc = document.querySelectorAll(".h-list-grid-desc");
      title.forEach(function (v) {
        v.style.fontSize = _this2.style.title.fontSize;
        v.style.fontWeight = _this2.style.title.bold ? "bold" : "null";
      });
      desc.forEach(function (v) {
        v.style.fontSize = _this2.style.description;
      });
    }
  }, {
    key: "addContentList",
    value: function addContentList() {
      var _this3 = this;

      var contentDom = "";
      this.data.titleArr.forEach(function (v, i) {
        contentDom += "\n      <div style=\"margin:10px\">\n        <div class=\"h-list\" style=\"width:".concat(_this3.style.content.width, "px; height:").concat(_this3.style.content.height, "px;\">\n          <img style=\"width:").concat(_this3.style.content.width, "px; height:").concat(_this3.style.content.width, "px;object-fit: cover;\"src=\"").concat(_this3.data.thumbnailArr[i], "\">\n          <div class=\"h-list-grid-title\">").concat(_this3.data.titleArr[i], "</div>\n          <div class=\"h-list-grid-desc\">").concat(_this3.data.descriptionArr[i], "</div>\n        </div>\n      </div>");
      });
      return contentDom;
    }
  }, {
    key: "addSelectorEvent",
    value: function addSelectorEvent(element) {
      var _this4 = this;

      var contentWidth = this.style.content.width;
      var contentHeight = this.style.content.height;
      var containerWidth = this.style.container.width;
      element.addEventListener("keydown", function (e) {
        return _this4.selectorEvt(e, element, contentWidth, contentHeight, containerWidth);
      }); // 키보드 입력 이벤트 등록
    }
  }, {
    key: "moveSelector",
    value: function moveSelector(transformSizeX, transformSizeY) {
      var selector = document.querySelector(".h-list-grid-selector");
      selector.style.transform = "translateX(".concat(transformSizeX, "px) translateY(").concat(transformSizeY, "px)");
      return selector.style.transform;
    }
  }, {
    key: "selectorEvt",
    value: function selectorEvt(e, element, contentWidth, contentHeight, containerWidth) {
      if (e.key === "ArrowRight") {
        this.moveSelectorRight(element, Number(contentWidth), Number(contentHeight));
      } else if (e.key === "ArrowLeft") {
        this.moveSelectorLeft(element, Number(contentWidth), Number(contentHeight));
      } else if (e.key === "ArrowDown") {
        this.moveSelectorDown(element, Number(contentWidth), Number(contentHeight));
      } else if (e.key === "ArrowUp") {
        this.moveSelectorUp(element, Number(contentWidth), Number(contentHeight));
      } else if (e.key === "Enter") {
        this.goLink();
      }
    }
  }, {
    key: "goLink",
    value: function goLink() {
      window.location.href = this.link;
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
      selector.className = "h-list-grid-selector";
      selector.style.transition = "transform 0.1s linear";
      return selector; //selector생성 함수
    }
  }, {
    key: "addLayout",
    value: function addLayout() {
      var selector = document.createElement("div");
      selector.className = "h-list-grid-layout";
      selector.style.display = "grid";
      selector.style.outline = "none";
      selector.style.width = "".concat(this.style.container.width, "px");
      selector.style.height = "".concat(this.style.container.height, "px");
      selector.style.trnasition = "all 0.3s linear";
      selector.style.gridTemplateColumns = "repeat(".concat(this.style.container.column, ",\n      ").concat(Number(this.style.content.width) + 20, "px)");
      selector.tabIndex = 1;
      return selector;
    }
  }, {
    key: "addContainerStyle",
    value: function addContainerStyle(element) {
      element.tabIndex = 2;
      element.style.position = "relative";
      element.style.width = "".concat(this.style.container.width, "px");
      element.style.height = "".concat(this.style.container.height, "px");
      element.style.overflow = "hidden"; // container element에 Grid 속성을 추가 및 반응형 CSS style추가
    }
  }, {
    key: "moveSelectorLeft",
    value: function moveSelectorLeft(element, contentWidth, contentHeight) {
      var containerHeight = Number(this.style.container.height);
      if (this.currentIndex <= 0) return;
      this.currentIndex--;
      this.widthIndex--;

      if (this.widthIndex < 0) {
        this.widthIndex = Number(this.style.container.column) - 1;
      }

      var heightIndex = Math.floor(this.currentIndex / Number(this.style.container.column));
      var transformSizeX = (contentWidth + 20) * this.widthIndex;
      var transformSizeY = (contentHeight + 20) * heightIndex;
      this.moveSelector(transformSizeX, transformSizeY);
      this.moveLayoutDown(transformSizeY, contentHeight, containerHeight);
    }
  }, {
    key: "moveSelectorRight",
    value: function moveSelectorRight(element, contentWidth, contentHeight) {
      var containerHeight = Number(this.style.container.height);
      if (this.currentIndex >= this.data.titleArr.length - 1) return;
      this.currentIndex++;
      this.widthIndex++;

      if (this.widthIndex >= Number(this.style.container.column)) {
        this.widthIndex = 0;
      }

      var heightIndex = Math.floor(this.currentIndex / Number(this.style.container.column));
      var transformSizeX = (contentWidth + 20) * this.widthIndex;
      var transformSizeY = (contentHeight + 20) * heightIndex;
      this.moveSelector(transformSizeX, transformSizeY);
      this.moveLayoutUp(transformSizeY, contentHeight, containerHeight);
    }
  }, {
    key: "moveSelectorUp",
    value: function moveSelectorUp(element, contentWidth, contentHeight) {
      var containerHeight = Number(this.style.container.height);
      var column = Number(this.style.container.column);
      this.currentIndex -= column;

      if (this.currentIndex < 0) {
        this.currentIndex += column;
        return;
      }

      var heightIndex = Math.floor(this.currentIndex / column);
      var transformSizeX = (contentWidth + 20) * this.widthIndex;
      var transformSizeY = (contentHeight + 20) * heightIndex;
      this.moveSelector(transformSizeX, transformSizeY);
      this.moveLayoutDown(transformSizeY, contentHeight, containerHeight);
    }
  }, {
    key: "moveSelectorDown",
    value: function moveSelectorDown(element, contentWidth, contentHeight) {
      var containerHeight = Number(this.style.container.height);
      var column = Number(this.style.container.column);
      this.currentIndex += column;

      if (this.currentIndex > this.data.titleArr.length - 1) {
        this.currentIndex -= column;
        return;
      }

      var heightIndex = Math.floor(this.currentIndex / column);
      var transformSizeX = (contentWidth + 20) * this.widthIndex;
      var transformSizeY = (contentHeight + 20) * heightIndex;
      this.moveSelector(transformSizeX, transformSizeY);
      this.moveLayoutUp(transformSizeY, contentHeight, containerHeight);
    }
  }, {
    key: "moveLayoutDown",
    value: function moveLayoutDown(transformSizeY, contentHeight, containerHeight) {
      var layout = document.querySelector(".h-list-grid-layout");
      var layoutOriginSize = Number(layout.style.transform.replace(/[^0-9-]/g, ""));
      var isOverContainerHeight = transformSizeY - contentHeight < containerHeight;
      var isTransformSizeOver = -layoutOriginSize < transformSizeY;

      if (isOverContainerHeight) {
        if (isTransformSizeOver) return;
        layout.style.transform = "translateY(-".concat(transformSizeY, "px)");
      }
    }
  }, {
    key: "moveLayoutUp",
    value: function moveLayoutUp(transformSizeY, contentHeight, containerHeight) {
      var layout = document.querySelector(".h-list-grid-layout");
      var layoutOriginSize = Number(layout.style.transform.replace(/[^0-9-]/g, ""));
      var isOverContainerHeight = transformSizeY + contentHeight > containerHeight;
      var isTransformSizeOver = -layoutOriginSize > transformSizeY - 2 * contentHeight;

      if (isOverContainerHeight) {
        if (isTransformSizeOver) return;
        var height = transformSizeY + contentHeight - containerHeight;
        layout.style.transform = "translateY(-".concat(height, "px)");
      }
    }
  }]);

  return GridListUi;
}();


// CONCATENATED MODULE: ./src/js/listUis/listUi.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listUi", function() { return listUi; });


var listUi = {
  createList: function createList(_ref) {
    var type = _ref.type,
        domElement = _ref.domElement,
        data = _ref.data,
        style = _ref.style;

    switch (type) {
      case "typeA":
        this.makeCarouselUi({
          domElement: domElement,
          data: data,
          style: style
        });
        break;

      case "typeB":
        this.makeGridListUi({
          domElement: domElement,
          data: data,
          style: style
        });
        break;
    }
  },
  makeCarouselUi: function makeCarouselUi(_ref2) {
    var domElement = _ref2.domElement,
        data = _ref2.data,
        style = _ref2.style;
    var carouselListUi = new CarouselListUi({
      domElement: domElement,
      data: data,
      style: style
    });
    carouselListUi.render();
  },
  makeGridListUi: function makeGridListUi(_ref3) {
    var domElement = _ref3.domElement,
        data = _ref3.data,
        style = _ref3.style;
    var gridListUi = new GridListUi({
      domElement: domElement,
      data: data,
      style: style
    });
    gridListUi.render();
  }
};


/***/ })
/******/ ]);
});