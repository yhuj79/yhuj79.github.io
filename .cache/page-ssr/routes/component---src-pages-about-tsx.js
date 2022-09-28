exports.id = "component---src-pages-about-tsx";
exports.ids = ["component---src-pages-about-tsx"];
exports.modules = {

/***/ "./node_modules/disable-scroll/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/disable-scroll/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var canUseDOM = function () {
    return typeof window !== 'undefined' && !!window.document && !!window.document.createElement;
};
var DisableScroll = /** @class */ (function () {
    function DisableScroll() {
        var _this = this;
        this.handleWheel = function (e) {
            e.preventDefault();
        };
        this.handleScroll = function () {
            window.scrollTo.apply(window, _this.lockToScrollPos);
        };
        this.handleKeydown = function (e) {
            var keys = _this.options.keyboardKeys;
            /* istanbul ignore else */
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
                keys = keys.filter(function (key) { return !_this.options.authorizedInInputs.includes(key); });
            }
            /* istanbul ignore else */
            if (keys.includes(e.keyCode)) {
                e.preventDefault();
            }
        };
        this.element = null;
        this.lockToScrollPos = [0, 0];
        this.options = {
            authorizedInInputs: [32, 37, 38, 39, 40],
            disableKeys: true,
            disableScroll: true,
            disableWheel: true,
            keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
        };
        /* istanbul ignore else */
        if (canUseDOM()) {
            this.element = document.scrollingElement;
        }
    }
    /**
     * Disable Page Scroll
     */
    DisableScroll.prototype.on = function (element, options) {
        var _a, _b, _c, _d;
        if (!canUseDOM())
            return;
        this.element = element || this.element;
        this.options = __assign(__assign({}, this.options), options);
        var _e = this.options, disableKeys = _e.disableKeys, disableScroll = _e.disableScroll, disableWheel = _e.disableWheel;
        /* istanbul ignore else */
        if (disableWheel) {
            document.addEventListener('wheel', this.handleWheel, { passive: false });
            document.addEventListener('touchmove', this.handleWheel, { passive: false });
        }
        /* istanbul ignore else */
        if (disableScroll) {
            this.lockToScrollPos = [(_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.scrollLeft) !== null && _b !== void 0 ? _b : 0, (_d = (_c = this.element) === null || _c === void 0 ? void 0 : _c.scrollTop) !== null && _d !== void 0 ? _d : 0];
            document.addEventListener('scroll', this.handleScroll, { passive: false });
        }
        /* istanbul ignore else */
        if (disableKeys) {
            document.addEventListener('keydown', this.handleKeydown, { passive: false });
        }
    };
    /**
     * Re-enable page scrolls
     */
    DisableScroll.prototype.off = function () {
        if (!canUseDOM())
            return;
        document.removeEventListener('wheel', this.handleWheel);
        document.removeEventListener('touchmove', this.handleWheel);
        document.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('keydown', this.handleKeydown);
    };
    return DisableScroll;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DisableScroll());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/components/navBar/linkList.tsx":
/*!********************************************!*\
  !*** ./src/components/navBar/linkList.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNil */ "./node_modules/lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



const ROOT = "/";
const EXTENRAL_LINK_EXP = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi;

const LinkList = ({
  links,
  setToggle
}) => {
  const generateLink = props => {
    if (lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(props)) {
      return;
    }

    const {
      link,
      name
    } = props;
    const safeLink = lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(link) ? "" : link;
    const isExternalLink = EXTENRAL_LINK_EXP.test(safeLink);

    if (safeLink === ROOT) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
        key: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: safeLink,
        onClick: () => setToggle(false)
      }, name));
    }

    if (isExternalLink) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
        key: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        target: "__blank",
        rel: "noreferrer",
        href: safeLink
      }, name));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      key: name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: safeLink
    }, name));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, links === null || links === void 0 ? void 0 : links.map(generateLink));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkList);

/***/ }),

/***/ "./src/components/navBar/menuIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/navBar/menuIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



const MenuIcon = ({
  toggle,
  handleClick
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuIconButton, {
    onClick: handleClick,
    toggle: toggle,
    "aria-label": "Menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuIconBreadTop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuIconBreadBottom, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)));
};

const MenuIconBreadTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "menuIcon__MenuIconBreadTop"
})(["top:22px;"]);
const MenuIconBreadBottom = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "menuIcon__MenuIconBreadBottom"
})(["bottom:22px;"]);
const MenuIconButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "menuIcon__MenuIconButton"
})(["z-index:9999;display:none;@media (max-width:", "){position:relative;margin-left:auto;display:block;cursor:pointer;width:var(--nav-height);height:var(--nav-height);border:none;background-color:transparent;& > div{position:absolute;width:18px;height:1px;right:var(--padding-sm);opacity:0.8;transition:opacity 0.3s ease,transform ", ";}& > div > div{width:100%;height:100%;background-color:var(--color-text);transition:transform ", ";}", "{transform:", ";div{transform:", ";}}", "{transform:", ";div{transform:", ";}}&:hover > div{opacity:1;}}"], ({
  theme
}) => theme.device.sm, ({
  toggle
}) => toggle === true ? "0.1s ease" : "0.2s ease 0.1s", ({
  toggle
}) => toggle === true ? "0.2s ease 0.1s" : "0.1s ease", MenuIconBreadTop, ({
  toggle
}) => toggle === false ? "none" : "translateY(4.5px)", ({
  toggle
}) => toggle === false ? "none" : "rotate(45deg)", MenuIconBreadBottom, ({
  toggle
}) => toggle === false ? "none" : "translateY(-4.5px)", ({
  toggle
}) => toggle === false ? "none" : "rotate(-45deg)");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);

/***/ }),

/***/ "./src/components/navBar/navBar.tsx":
/*!******************************************!*\
  !*** ./src/components/navBar/navBar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Hooks/useSiteMetadata */ "./src/hooks/useSiteMetadata.ts");
/* harmony import */ var Styles_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Styles/background */ "./src/styles/background.ts");
/* harmony import */ var Styles_navBarAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Styles/navBarAnimation */ "./src/styles/navBarAnimation.ts");
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useMenu */ "./src/components/navBar/useMenu.ts");
/* harmony import */ var _linkList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./linkList */ "./src/components/navBar/linkList.tsx");
/* harmony import */ var _themeToggleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themeToggleButton */ "./src/components/navBar/themeToggleButton/index.ts");
/* harmony import */ var _menuIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menuIcon */ "./src/components/navBar/menuIcon.tsx");











const NavBar = ({
  title,
  themeToggler
}) => {
  const {
    menuLinks
  } = (0,Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    device
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_9__.ThemeContext);
  const navRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const curtainRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    toggle,
    setToggle,
    handleClick
  } = (0,_useMenu__WEBPACK_IMPORTED_MODULE_5__["default"])({
    navRef,
    curtainRef,
    listRef,
    device
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Nav, {
    ref: navRef,
    "aria-label": "Global Navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBackground, {
    toggle: toggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    onClick: () => setToggle(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Curtain, {
    ref: curtainRef,
    toggle: toggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_menuIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    toggle: toggle,
    handleClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkUl, {
    ref: listRef,
    toggle: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_linkList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    links: menuLinks,
    setToggle: setToggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_themeToggleButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    themeToggler: themeToggler
  })))))));
};

const Nav = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].nav.withConfig({
  displayName: "navBar__Nav"
})(["min-width:var(--min-width);position:sticky;top:0;left:0;width:100%;height:var(--nav-height);z-index:10;a:hover{text-decoration:none;}"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "navBar__Content"
})(["box-sizing:content-box;position:relative;margin:0 auto;max-width:var(--width);padding:0 var(--padding-lg);height:100%;z-index:2;display:flex;justify-content:space-between;align-items:center;li{margin:0;list-style-type:none;}@media (max-width:", "){padding:0 var(--padding-sm);}"], ({
  theme
}) => theme.device.sm);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "navBar__Title"
})(["z-index:9999;padding:0;border:none;font-size:var(--text-title);font-weight:var(--font-weight-semi-bold);color:var(--color-text);a{color:inherit;}@media (max-width:", "){font-size:var(--text-md);}"], ({
  theme
}) => theme.device.sm);
const LinkUl = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].ul.withConfig({
  displayName: "navBar__LinkUl"
})(["display:flex;a{font-weight:var(--font-weight-regular);}a:hover,a:focus{color:var(--color-blue);}li{display:flex;justify-content:center;align-items:center;margin-left:32px;}li:first-child,li:last-child{margin-left:0;}@media (max-width:", "){", " pointer-events:", ";flex-direction:column;padding:0 var(--sizing-lg);li{display:block;margin-left:0;font-size:var(--text-md);transform:", ";opacity:", ";}a{display:block;height:100%;padding:0.5rem 0;font-weight:var(--font-weight-medium);}li + li::before{content:\"\";display:block;position:absolute;width:calc(100vw - var(--sizing-lg) * 2);height:1px;transform:translateY(-2px);background-color:var(--color-divider);}}"], ({
  theme
}) => theme.device.sm, ({
  toggle
}) => (0,Styles_navBarAnimation__WEBPACK_IMPORTED_MODULE_4__.listAnimationCSS)(toggle), ({
  toggle
}) => toggle ? "auto" : "none", ({
  toggle
}) => toggle ? `translateY(var(--sizing-lg))` : `translateY(0)`, ({
  toggle
}) => toggle ? "1" : "0");
const NavBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Styles_background__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "navBar__NavBackground"
})(["@media (max-width:", "){&::after{", ";content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-post-background);}}"], ({
  theme
}) => theme.device.sm, ({
  toggle
}) => (0,Styles_navBarAnimation__WEBPACK_IMPORTED_MODULE_4__.navBackgroundAnimationCSS)(toggle));
const Curtain = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "navBar__Curtain"
})(["display:none;@media (max-width:", "){", " display:block;position:fixed;top:calc(var(--nav-height) - 1px);left:0;width:100%;height:calc(100% - var(--nav-height) + 1px);background-color:var(--color-post-background);}"], ({
  theme
}) => theme.device.sm, ({
  toggle
}) => (0,Styles_navBarAnimation__WEBPACK_IMPORTED_MODULE_4__.curtainAnimationCSS)(toggle));
const LinkContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "navBar__LinkContent"
})(["@media (max-width:", "){width:100%;z-index:200;}"], ({
  theme
}) => theme.device.sm);
const LinkWrap = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "navBar__LinkWrap"
})(["display:flex;@media (max-width:", "){position:absolute;top:0;left:0;width:100%;height:var(--nav-height);}"], ({
  theme
}) => theme.device.sm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/navBar/themeToggleButton/index.ts":
/*!**********************************************************!*\
  !*** ./src/components/navBar/themeToggleButton/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _themeToggleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeToggleButton */ "./src/components/navBar/themeToggleButton/themeToggleButton.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_themeToggleButton__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/navBar/themeToggleButton/themeIcon.tsx":
/*!***************************************************************!*\
  !*** ./src/components/navBar/themeToggleButton/themeIcon.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Constants_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Constants/theme */ "./src/constants/theme.ts");



const ThemeIcon = ({
  theme
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, theme === Constants_theme__WEBPACK_IMPORTED_MODULE_1__.DARK ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "11",
    y: "1",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "4.3",
    y: "3.8",
    transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -2.1881 5.2825)",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "1.5",
    y: "10.5",
    transform: "matrix(4.547480e-11 -1 1 4.547480e-11 -9.5 14.5)",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "4.3",
    y: "17.2",
    transform: "matrix(-0.7071 -0.7071 0.7071 -0.7071 -4.2175 35.6881)",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "11",
    y: "20",
    transform: "matrix(-1 -9.004010e-11 9.004010e-11 -1 24 43)",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "17.7",
    y: "17.2",
    transform: "matrix(-0.7071 0.7071 -0.7071 -0.7071 45.1881 18.7175)",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "20.5",
    y: "10.5",
    transform: "matrix(-1.355149e-10 1 -1 -1.355149e-10 33.5 -9.5)",
    width: "2",
    height: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "17.7",
    y: "3.8",
    transform: "matrix(0.7071 0.7071 -0.7071 0.7071 9.2175 -11.6881)",
    width: "2",
    height: "3"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16.3,15.2c-4.1-1.2-7.2-4.8-7.5-9.1C8.8,4.8,8.9,3.5,9.3,2.4C4.8,3.6,1.5,8,2.1,13.1c0.5,4.6,4.2,8.3,8.7,8.8 c4.9,0.6,9.2-2.4,10.6-6.7C19.9,15.7,18.1,15.8,16.3,15.2z"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeIcon);

/***/ }),

/***/ "./src/components/navBar/themeToggleButton/themeToggleButton.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/navBar/themeToggleButton/themeToggleButton.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var Stores_themeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Stores/themeContext */ "./src/stores/themeContext.ts");
/* harmony import */ var Styles_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Styles/background */ "./src/styles/background.ts");
/* harmony import */ var Constants_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Constants/theme */ "./src/constants/theme.ts");
/* harmony import */ var _themeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeIcon */ "./src/components/navBar/themeToggleButton/themeIcon.tsx");







const ThemeToggleButton = ({
  themeToggler
}) => {
  const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Stores_themeContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const LABEL_TEXT = theme === Constants_theme__WEBPACK_IMPORTED_MODULE_3__.DARK ? "Light theme" : "Dark theme";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {
    onClick: themeToggler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonBackground, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_themeIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: theme
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, LABEL_TEXT)));
};

const Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].svg.withConfig({
  displayName: "themeToggleButton__Icon"
})(["width:1.125rem;height:1.125rem;fill:var(--color-icon);transform:translateY(-1px);@media (max-width:", "){width:0;height:1rem;transition:width 0.3s ease;}"], ({
  theme
}) => theme.device.sm);
const ButtonBackground = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Styles_background__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "themeToggleButton__ButtonBackground"
})(["border:none;background-color:var(--color-floating-button);border-radius:var(--border-radius-lg);box-shadow:0 3px 15px var(--color-floating-button-shadow);@media (max-width:", "){visibility:hidden;background-color:transparent;border-radius:0;box-shadow:none;}"], ({
  theme
}) => theme.device.sm);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "themeToggleButton__Content"
})(["z-index:2;display:flex;justify-content:center;align-items:center;background-color:transparent;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "themeToggleButton__Text"
})(["color:var(--color-floating-button-text);margin-left:6px;@media (max-width:", "){color:var(--color-text);margin-left:0;font-weight:var(--font-weight-medium);border-radius:50%;}"], ({
  theme
}) => theme.device.sm);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "themeToggleButton__Button"
})(["cursor:pointer;box-sizing:border-box;position:fixed;display:flex;justify-content:center;align-items:center;background-color:transparent;z-index:100;right:var(--sizing-md);bottom:var(--sizing-md);padding:var(--sizing-base);padding-right:20px;border:1px solid var(--color-floating-button-border);border-radius:var(--border-radius-lg);font-weight:var(--font-weight-medium);@media (min-width:", "){&:hover{outline:none;border:1px solid var(--color-floating-button-border-hover);", ",", "{color:var(--color-floating-button-text-hover);fill:var(--color-floating-button-text-hover);}", "{background-color:var(--color-floating-button-hover);box-shadow:0 3px 15px var(--color-floating-button-shadow-hover);}}}@media (max-width:", "){justify-content:start;position:static;border-radius:0;border:none;width:100%;padding:0.5rem 0;&:hover{", ",", "{fill:var(--color-blue);color:var(--color-blue);}", "{width:1rem;margin-right:4px;}}&:focus-visible{", ",", "{fill:var(--color-blue);color:var(--color-blue);}", "{width:1rem;margin-right:4px;}}}"], ({
  theme
}) => theme.device.sm, Icon, Text, ButtonBackground, ({
  theme
}) => theme.device.sm, Icon, Text, Icon, Icon, Text, Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggleButton);

/***/ }),

/***/ "./src/components/navBar/useMenu.ts":
/*!******************************************!*\
  !*** ./src/components/navBar/useMenu.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/esm/index.js");



const isNonNullableRef = ref => !!(ref && ref.current);

const FOCUSABLE_TABINDEX = 0;
const NON_FOCUSABLE_TABINDEX = -1;
const ESC_CODE = "Escape";
const TAB_CODE = "Tab";

const useMenu = ({
  navRef,
  curtainRef,
  listRef,
  device
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const mql = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleClick = () => toggle === true ? setToggle(false) : setToggle(true);

  const focusableElementsString = `a[href], button:not([disabled])`;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mql.current = window.matchMedia(`(max-width: ${device.sm})`);
  }, [device.sm]);
  const toggleKeyboardFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _listRef$current, _mql$current;

    const focusableElements = listRef === null || listRef === void 0 ? void 0 : (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll(focusableElementsString);

    if (!((_mql$current = mql.current) !== null && _mql$current !== void 0 && _mql$current.matches)) {
      focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.forEach(e => e.setAttribute("tabindex", `${FOCUSABLE_TABINDEX}`));
      return;
    }

    const tabIndex = toggle ? FOCUSABLE_TABINDEX : NON_FOCUSABLE_TABINDEX;
    focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.forEach(e => e.setAttribute("tabindex", `${tabIndex}`));
  }, [focusableElementsString, listRef, toggle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    toggleKeyboardFocus();
  }, [toggleKeyboardFocus]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _mql$current2;

    (_mql$current2 = mql.current) === null || _mql$current2 === void 0 ? void 0 : _mql$current2.addEventListener("change", toggleKeyboardFocus);
    return () => {
      var _mql$current3;

      return (_mql$current3 = mql.current) === null || _mql$current3 === void 0 ? void 0 : _mql$current3.removeEventListener("change", toggleKeyboardFocus);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _navRef$current;

    const focusableElements = navRef === null || navRef === void 0 ? void 0 : (_navRef$current = navRef.current) === null || _navRef$current === void 0 ? void 0 : _navRef$current.querySelectorAll(focusableElementsString);
    const firstTabStop = focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements[0];
    const lastTabStop = focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements[(focusableElements === null || focusableElements === void 0 ? void 0 : focusableElements.length) - 1];

    const trapTabKey = e => {
      if (!toggle) return;

      if (e.code === TAB_CODE) {
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop === null || lastTabStop === void 0 ? void 0 : lastTabStop.focus();
          }
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop === null || firstTabStop === void 0 ? void 0 : firstTabStop.focus();
          }
        }
      }

      if (e.code === ESC_CODE) setToggle(false);
    };

    window.addEventListener("keydown", trapTabKey);
    return () => window.removeEventListener("keydown", trapTabKey);
  }, [focusableElementsString, navRef, toggle, setToggle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (toggle) disable_scroll__WEBPACK_IMPORTED_MODULE_1__["default"].on();else disable_scroll__WEBPACK_IMPORTED_MODULE_1__["default"].off();
  }, [toggle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _mql$current4;

    const TIMER = 500;

    const hideAnimation = () => {
      if (isNonNullableRef(curtainRef) && isNonNullableRef(listRef)) {
        curtainRef.current.style.display = "none";
        listRef.current.style.display = "none";
      }

      setTimeout(() => {
        if (isNonNullableRef(curtainRef) && isNonNullableRef(listRef)) {
          curtainRef.current.style.display = "block";
          listRef.current.style.display = "flex";
        }
      }, TIMER);
    };

    const closeMenu = e => {
      if (e.matches) {
        hideAnimation();
        return;
      }

      setToggle(false);
    };

    (_mql$current4 = mql.current) === null || _mql$current4 === void 0 ? void 0 : _mql$current4.addEventListener("change", closeMenu);
    return () => {
      var _mql$current5;

      return (_mql$current5 = mql.current) === null || _mql$current5 === void 0 ? void 0 : _mql$current5.removeEventListener("change", closeMenu);
    };
  });
  return {
    toggle,
    setToggle,
    handleClick
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenu);

/***/ }),

/***/ "./src/components/seo.tsx":
/*!********************************!*\
  !*** ./src/components/seo.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Hooks/useSiteMetadata */ "./src/hooks/useSiteMetadata.ts");
/* harmony import */ var _images_og_default_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/og-default.png */ "./src/images/og-default.png");




const DEFAULT_LANG = "en";

const SEO = ({
  title,
  desc = "",
  image
}) => {
  var _site$siteUrl, _site$lang;

  const site = (0,Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const description = desc || site.description;
  const ogImageUrl = (_site$siteUrl = site.siteUrl) !== null && _site$siteUrl !== void 0 ? _site$siteUrl : "" + (image || _images_og_default_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    htmlAttributes: {
      lang: (_site$lang = site.lang) !== null && _site$lang !== void 0 ? _site$lang : DEFAULT_LANG
    },
    title: title !== null && title !== void 0 ? title : "",
    titleTemplate: `%s | ${site.title}`,
    meta: [{
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:creator",
      content: site.author
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: description
    }, {
      property: "image",
      content: ogImageUrl
    }, {
      property: "og:image",
      content: ogImageUrl
    }, {
      property: "twitter:image",
      content: ogImageUrl
    }]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/constants/theme.ts":
/*!********************************!*\
  !*** ./src/constants/theme.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIGHT": () => (/* binding */ LIGHT),
/* harmony export */   "DARK": () => (/* binding */ DARK)
/* harmony export */ });
const LIGHT = "light";
const DARK = "dark";

/***/ }),

/***/ "./src/hooks/useSiteMetadata.ts":
/*!**************************************!*\
  !*** ./src/hooks/useSiteMetadata.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1840460387_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1840460387.json */ "./public/page-data/sq/d/1840460387.json");


const useSiteMetadata = () => {
  const {
    site
  } = _public_page_data_sq_d_1840460387_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return site.siteMetadata;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ "./src/hooks/useTheme.ts":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Constants_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Constants/theme */ "./src/constants/theme.ts");


/** @see gatsby-ssr.js */

const useTheme = () => {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const themeToggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const nextTheme = theme === Constants_theme__WEBPACK_IMPORTED_MODULE_1__.LIGHT ? Constants_theme__WEBPACK_IMPORTED_MODULE_1__.DARK : Constants_theme__WEBPACK_IMPORTED_MODULE_1__.LIGHT;
    setTheme(nextTheme);

    window.__setPreferredTheme(nextTheme);
  }, [theme]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== "undefined") {
      setTheme(window.__theme);
    }

    window.__onThemeChange = newTheme => {
      setTheme(newTheme);
    };
  }, []);
  return {
    theme,
    themeToggler
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ }),

/***/ "./src/layouts/layout.tsx":
/*!********************************!*\
  !*** ./src/layouts/layout.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var Stores_themeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Stores/themeContext */ "./src/stores/themeContext.ts");
/* harmony import */ var Hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Hooks/useTheme */ "./src/hooks/useTheme.ts");
/* harmony import */ var Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Hooks/useSiteMetadata */ "./src/hooks/useSiteMetadata.ts");
/* harmony import */ var Components_navBar_navBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/navBar/navBar */ "./src/components/navBar/navBar.tsx");
/* harmony import */ var Styles_styledTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Styles/styledTheme */ "./src/styles/styledTheme.ts");
/* harmony import */ var Styles_globalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Styles/globalStyle */ "./src/styles/globalStyle.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../package.json */ "./package.json");









const {
  name,
  homepage
} = _package_json__WEBPACK_IMPORTED_MODULE_7__;

const Layout = ({
  children
}) => {
  const {
    theme,
    themeToggler
  } = (0,Hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    title,
    author
  } = (0,Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const copyrightStr = `Copyright © ${author}. Built with `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
    theme: Styles_styledTheme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Stores_themeContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Styles_globalStyle__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_navBar_navBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    themeToggler: themeToggler
  }), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, {
    role: "contentinfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Copyright, {
    "aria-label": "Copyright"
  }, copyrightStr, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RepoLink, {
    href: homepage,
    target: "__blank"
  }, name)))));
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "layout__Container"
})(["width:100%;height:100%;min-height:calc(100vh - var(--footer-height));background-color:var(--color-post-background);"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].footer.withConfig({
  displayName: "layout__Footer"
})(["display:flex;text-align:center;justify-content:center;align-items:center;height:var(--footer-height);background-color:var(--color-gray-1);"]);
const Copyright = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "layout__Copyright"
})(["font-size:var(--text-sm);font-weight:var(--font-weight-regular);color:var(--color-gray-6);"]);
const RepoLink = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "layout__RepoLink"
})(["color:var(--color-blue);&:hover{text-decoration:underline;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/about.tsx":
/*!*****************************!*\
  !*** ./src/pages/about.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1318141210_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1318141210.json */ "./public/page-data/sq/d/1318141210.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var Layouts_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Layouts/layout */ "./src/layouts/layout.tsx");
/* harmony import */ var Components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/seo */ "./src/components/seo.tsx");
/* harmony import */ var Styles_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Styles/markdown */ "./src/styles/markdown.ts");
/* harmony import */ var Styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Styles/typography */ "./src/styles/typography.ts");








const About = () => {
  const data = _public_page_data_sq_d_1318141210_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const markdown = data.allMarkdownRemark.edges[0].node.html;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Layouts_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "About"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, {
    dangerouslySetInnerHTML: {
      __html: markdown !== null && markdown !== void 0 ? markdown : ""
    },
    rhythm: Styles_typography__WEBPACK_IMPORTED_MODULE_5__.rhythm
  }));
};

const Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Styles_markdown__WEBPACK_IMPORTED_MODULE_4__["default"]).attrs({
  as: "main"
}).withConfig({
  displayName: "about__Container"
})(["width:var(--post-width);margin:0 auto;margin-top:80px;margin-bottom:6rem;@media (max-width:", "){margin-top:var(--sizing-xl);width:87.5%;}h1{margin-bottom:2rem;}h2{margin-top:var(--sizing-lg);@media (max-width:", "){font-size:1.75rem;}}h3{@media (max-width:", "){font-size:1.25rem;}}"], ({
  theme
}) => theme.device.sm, ({
  theme
}) => theme.device.sm, ({
  theme
}) => theme.device.sm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/stores/themeContext.ts":
/*!************************************!*\
  !*** ./src/stores/themeContext.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);

/***/ }),

/***/ "./src/styles/background.ts":
/*!**********************************!*\
  !*** ./src/styles/background.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Background = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "background__Background"
})(["position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;backdrop-filter:saturate(180%) blur(20px);background-color:var(--color-nav-bar);border-bottom:1px solid var(--color-nav-border);"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),

/***/ "./src/styles/globalStyle.ts":
/*!***********************************!*\
  !*** ./src/styles/globalStyle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/esm/index.js");


const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["", ":root{font-size:100%;--width:980px;--min-width:320px;--post-width:650px;--nav-height:54px;--footer-height:60px;--grid-gap-sm:10px;--grid-gap-lg:24px;--grid-gap-xl:36px;--padding-sm:16px;--padding-lg:22px;--border-radius-sm:6px;--border-radius-base:8px;--border-radius-lg:28px;--sizing-xs:4px;--sizing-sm:8px;--sizing-base:16px;--sizing-md:24px;--sizing-lg:40px;--sizing-xl:64px;--text-xs:0.625rem;--text-sm:0.75rem;--text-base:1rem;--text-md:1.125rem;--text-title:1.25rem;--text-lg:1.5rem;--text-xl:3rem;--device-xs-max-width:419px;--device-sm-max-width:767px;--device-md-max-width:1023px;--device-lg-max-width:1441px;--device-xs-max-width-query:(max-width:419px);--device-sm-max-width-query:(max-width:767px);--device-md-max-width-query:(max-width:1023px);--device-lg-max-width-query:(max-width:1441px);--font-weight-regular:400;--font-weight-medium:500;--font-weight-semi-bold:600;--font-weight-bold:700;--font-weight-extra-bold:800;--color-outline:rgba(0,125,250,0.6);body.light{--color-text:#1d1d1d;--color-text-2:#1d1d1d;--color-text-3:#696969;--color-white:#ffffff;--color-nav-bar:rgba(255,255,255,0.7);--color-nav-border:rgba(200,200,200,0.7);--color-category-button:#f2f2f2;--color-background:#f2f2f2;--color-post-background:#ffffff;--color-card:#ffffff;--color-code:#f2f2f2;--color-code-block:#fafafa;--color-code-highlight:rgba(0,0,0,0.05);--color-code-highlight-border:rgba(0,0,0,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;--color-divider:rgba(0,0,0,0.15);--color-dimmed:rgba(0,0,0,0.15);--color-floating-button:rgba(255,255,255,0.7);--color-floating-button-hover:rgba(50,50,50,0.7);--color-floating-button-border:rgba(230,230,230,0.7);--color-floating-button-border-hover:rgba(255,255,255,0.2);--color-floating-button-text:#202020;--color-floating-button-text-hover:#f2f2f2;--color-floating-button-shadow:rgba(0,0,0,0.2);--color-floating-button-shadow-hover:rgba(0,0,0,0.4);--color-blue:#0066cc;--color-icon:#2c2c2c;}body.dark{--color-text:#e6e6e6;--color-text-2:#d1d1d1;--color-text-3:#8c8c8c;--color-white:#e6e6e6;--color-nav-bar:rgba(29,29,29,0.7);--color-nav-border:rgba(255,255,255,0.2);--color-category-button:#484848;--color-background:#1c1c1c;--color-post-background:#1c1c1c;--color-card:#2c2c2c;--color-code:#3a3a3a;--color-code-block:#242424;--color-code-highlight:rgba(255,255,255,0.05);--color-code-highlight-border:rgba(255,255,255,0.2);--color-gray-1:#1c1c1c;--color-gray-2:#2c2c2c;--color-gray-3:#3a3a3a;--color-gray-4:#484848;--color-gray-5:#646464;--color-gray-6:#868686;--color-divider:rgba(255,255,255,0.15);--color-dimmed:rgba(0,0,0,0.15);--color-floating-button:rgba(50,50,50,0.7);--color-floating-button-hover:rgba(255,255,255,0.7);--color-floating-button-border:rgba(255,255,255,0.2);--color-floating-button-border-hover:rgba(230,230,230,0.7);--color-floating-button-text:#d1d1d1;--color-floating-button-text-hover:#202020;--color-floating-button-shadow:rgba(0,0,0,0.4);--color-floating-button-shadow-hover:rgba(0,0,0,0.4);--color-blue:#0a84ff;--color-icon:#d1d1d1;}}html,body,#___gatsby,#gatsby-focus-wrapper{min-height:100%;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background-color:var(--color-post-background);-webkit-font-smoothing:antialiased;*{color:var(--color-text);}}:lang(ko){word-break:keep-all;}ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button{margin:0;padding:0;}h1 a,li a{text-decoration:none;}a{text-decoration:none;}*:focus:not(:focus-visible){outline:none;}:focus-visible{outline:4px solid var(--color-outline);outline-offset:1px;}.js-focus-visible:focus:not(.focus-visible){outline:none;}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"], styled_reset__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./src/styles/markdown.ts":
/*!********************************!*\
  !*** ./src/styles/markdown.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Markdown = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "markdown__Markdown"
})(["h1,h2,h3,h4,h5,h6{font-weight:var(--font-weight-bold);}td,th{border-bottom:1px solid var(--color-gray-3);}strong{font-weight:var(--font-weight-semi-bold);}a,p{font-weight:var(--font-weight-regular);}a{text-decoration:none;color:var(--color-blue) !important;*{color:var(--color-blue) !important;}&:hover,&:active{text-decoration:underline;}}& > *:first-child{margin-top:0;}h1{font-size:2.5rem;@media (max-width:", "){font-size:2rem;}}h2{font-size:1.75rem;line-height:1.3;margin-bottom:", ";margin-top:", ";@media (max-width:", "){font-size:1.3125rem;}}h3{font-size:1.31951rem;line-height:1.3;margin-bottom:", ";margin-top:", ";@media (max-width:", "){font-size:1.1875rem;}}h4,h5,h6{margin-bottom:", ";margin-top:", ";}ul,ol{margin-top:", ";margin-bottom:", ";margin-left:", ";}li > ul,li > ol{margin-top:0;margin-bottom:0;}li > p{margin-bottom:0;}li > ol,li > ul{margin-left:", ";}li{margin-bottom:", ";}p,li,blockquote{font-size:1.0625rem;}p{line-height:1.68;text-align:left;margin-bottom:var(--sizing-md);}hr{margin:var(--sizing-lg) 0;background:var(--color-gray-3);}blockquote{border-left:0.25rem solid var(--color-gray-2);padding-left:var(--sizing-base);margin:var(--sizing-md) 0;*{color:var(--color-gray-6);}}img{display:block;}pre,code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;background-color:var(--color-code-block);}pre{border:1px solid var(--color-gray-3);}pre.grvsc-container{margin:var(--sizing-md) 0;}.grvsc-line-highlighted::before{background-color:var(--color-code-highlight) !important;box-shadow:inset 4px 0 0 0 var(--color-code-highlight-border) !important;}*:not(pre) > code{background-color:var(--color-code);padding:0.2rem 0.4rem;margin:0;font-size:85%;border-radius:3px;}"], ({
  theme
}) => theme.device.sm, ({
  rhythm
}) => rhythm(1), ({
  rhythm
}) => rhythm(2.25), ({
  theme
}) => theme.device.sm, ({
  rhythm
}) => rhythm(1), ({
  rhythm
}) => rhythm(1.5), ({
  theme
}) => theme.device.sm, ({
  rhythm
}) => rhythm(0.5), ({
  rhythm
}) => rhythm(1), ({
  rhythm
}) => rhythm(1), ({
  rhythm
}) => rhythm(1), ({
  rhythm
}) => rhythm(1.25), ({
  rhythm
}) => rhythm(1.25), ({
  rhythm
}) => rhythm(0.3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Markdown);

/***/ }),

/***/ "./src/styles/navBarAnimation.ts":
/*!***************************************!*\
  !*** ./src/styles/navBarAnimation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listAnimationCSS": () => (/* binding */ listAnimationCSS),
/* harmony export */   "navBackgroundAnimationCSS": () => (/* binding */ navBackgroundAnimationCSS),
/* harmony export */   "curtainAnimationCSS": () => (/* binding */ curtainAnimationCSS)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const listAnimationCSS = toggle => {
  let styles = "";
  const MAX_NUM = 10;
  const OPEN_BASE = 0.1;
  const CLOSE_BASE = 0.25;
  const OFFSET = 0.06;
  const TRANSFORM_DURING = 0.5;
  const OPACITY_DURING = 0.3;
  const TRANSFORM_TIMING_FUNC = toggle ? "cubic-bezier(.19,.2,0,.99)" : "ease-in";
  const OPACITY_TIMING_FUNC = "ease-out";

  const calcDelaySec = i => toggle ? OPEN_BASE + i * OFFSET : CLOSE_BASE - i * OFFSET;

  for (let i = 0; i < MAX_NUM; i += 1) {
    styles += `
    li:nth-child(${i}) {
        transition-property: transform, opacity;
        transition-duration: ${TRANSFORM_DURING}s, ${OPACITY_DURING}s;
        transition-delay: ${calcDelaySec(i)}s;
        transition-timing-function: ${TRANSFORM_TIMING_FUNC}, ${OPACITY_TIMING_FUNC};
    }
    `;
  }

  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ""], styles);
};
const navBackgroundAnimationCSS = toggle => {
  const TRANSITION = toggle ? "0.3s ease" : "0.4s ease-in-out 0.48s";
  const OPACITY = toggle ? 1 : 0;
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transition:opacity ", ";opacity:", ";"], TRANSITION, OPACITY);
};
const curtainAnimationCSS = toggle => {
  const SCALE = toggle ? "scaleY(1)" : "scaleY(0)";
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["transition:transform 0.6s cubic-bezier(0.41,0.06,0.05,1) 0.1s;transform:", ";transform-origin:top;"], SCALE);
};

/***/ }),

/***/ "./src/styles/styledTheme.ts":
/*!***********************************!*\
  !*** ./src/styles/styledTheme.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styledTheme = {
  device: {
    xs: "419px",
    sm: "767px",
    md: "1023px",
    lg: "1441px"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styledTheme);

/***/ }),

/***/ "./node_modules/lodash/isNil.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNil.js ***!
  \**************************************/
/***/ ((module) => {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ "./node_modules/styled-reset/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/styled-reset/lib/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "Reset": () => (/* binding */ Reset),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

// prettier-ignore
var reset = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"], ["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));
var Reset = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), reset);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/images/og-default.png":
/*!***********************************!*\
  !*** ./src/images/og-default.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAAAAABqKySAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAQYPOx+uJIGjAAAUU0lEQVR42u3debhd473A8XUioyGJMWKKseKi5ikUNdRUU1QpUnPN1JD0qZmWIsTwkJbWnOZeU1FSUoLgXlM9hhC55GpoTKkEkXk47/1DkOF911p7n+Q4Z+/P59+z1m+tvZLzfc4+Z693ZQGglchcAkCwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAMFyCQDBAhAsQLAABIvm8va+ldjv0JPPG3DrA8PHlZrdLzbietcc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");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"gatsby-starter-apple","version":"2.0.0","description":"Gatsby blog starter kit with beautiful and responsive design","main":"index.js","private":true,"scripts":{"build":"gatsby build","develop":"gatsby develop","deploy":"gatsby build && gh-pages -d public -b deploy","format":"prettier --write \\"**/*.{js,jsx,ts,tsx,json,md}\\"","start":"gatsby develop","serve":"gatsby serve","clean":"gatsby clean","lint":"eslint \'**/*.{ts,tsx}\'","semantic-release":"semantic-release","generate":"graphql-codegen --config codegen.yml"},"dependencies":{"dark-theme-github":"github:remorses/dark-github-theme","gatsby":"^4.5.4","gatsby-plugin-feed":"^4.4.0","gatsby-plugin-image":"^2.4.0","gatsby-plugin-manifest":"^4.4.0","gatsby-plugin-offline":"^5.4.0","gatsby-plugin-react-helmet":"^5.4.0","gatsby-plugin-sharp":"^4.4.0","gatsby-plugin-sitemap":"^5.4.0","gatsby-plugin-styled-components":"^5.4.0","gatsby-plugin-typography":"^4.4.0","gatsby-remark-copy-linked-files":"^5.4.0","gatsby-remark-images":"^6.4.0","gatsby-remark-vscode":"^3.3.0","gatsby-source-filesystem":"^4.4.0","gatsby-transformer-remark":"^5.4.0","gatsby-transformer-sharp":"^4.4.0","react":"^17.0.1","react-dom":"^17.0.1","react-helmet":"^6.1.0","react-typography":"^0.16.20","styled-components":"^5.3.3","styled-reset":"^4.3.4","typography":"^0.16.21","vscode-theme-github-light":"github:chuling/vscode-theme-github-light"},"devDependencies":{"@graphql-codegen/cli":"^2.3.1","@graphql-codegen/introspection":"2.1.1","@graphql-codegen/typescript":"2.4.2","@graphql-codegen/typescript-operations":"^2.2.2","@graphql-codegen/typescript-react-apollo":"3.2.3","@semantic-release/commit-analyzer":"^9.0.2","@semantic-release/github":"^8.0.2","@semantic-release/release-notes-generator":"^10.0.3","@types/react-helmet":"^6.1.5","@types/styled-components":"^5.1.19","@types/typography":"^0.16.4","@typescript-eslint/eslint-plugin":"^5.8.1","@typescript-eslint/parser":"^5.8.1","disable-scroll":"^0.6.0","eslint-plugin-jsx-a11y":"^6.5.1","gatsby-plugin-alias-imports":"^1.0.5","gatsby-plugin-robots-txt":"^1.6.14","gatsby-plugin-typescript":"^4.4.0","gh-pages":"^4.0.0","graphql":"^15.8.0","lodash":"^4.17.21","prettier":"^2.4.1","semantic-release":"^19.0.3","typescript":"^4.5.4"},"repository":{"type":"git","url":"https://github.com/sungik-choi/gatsby-starter-apple.git"},"keywords":["gatsby"],"author":"Sungik Choi <sungik.dev@gmail.com> (http://sungikchoi.com/)","license":"MIT","bugs":{"url":"https://github.com/sungik-choi/gatsby-starter-apple/issues"},"homepage":"https://github.com/sungik-choi/gatsby-starter-apple#readme"}');

/***/ }),

/***/ "./public/page-data/sq/d/1318141210.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1318141210.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"html":"<h1>Hello</h1>\\n<p>Welcome to my blog. My name is Ed.<br>\\nI\'m very interested in the web front-end development.</p>\\n<p>Visit my <a href=\\"https://github.com/sungik-choi/gatsby-starter-apple\\">Github repository</a>.</p>\\n<style class=\\"grvsc-styles\\">\\n  .grvsc-container {\\n    overflow: auto;\\n    position: relative;\\n    -webkit-overflow-scrolling: touch;\\n    padding-top: 1rem;\\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\\n    padding-bottom: 1rem;\\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\\n    border-radius: 8px;\\n    border-radius: var(--grvsc-border-radius, 8px);\\n    font-feature-settings: normal;\\n    line-height: 1.4;\\n  }\\n  \\n  .grvsc-code {\\n    display: table;\\n  }\\n  \\n  .grvsc-line {\\n    display: table-row;\\n    box-sizing: border-box;\\n    width: 100%;\\n    position: relative;\\n  }\\n  \\n  .grvsc-line > * {\\n    position: relative;\\n  }\\n  \\n  .grvsc-gutter-pad {\\n    display: table-cell;\\n    padding-left: 0.75rem;\\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\\n  }\\n  \\n  .grvsc-gutter {\\n    display: table-cell;\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n  }\\n  \\n  .grvsc-gutter::before {\\n    content: attr(data-content);\\n  }\\n  \\n  .grvsc-source {\\n    display: table-cell;\\n    padding-left: 1.5rem;\\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\\n    padding-right: 1.5rem;\\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\\n  }\\n  \\n  .grvsc-source:empty::after {\\n    content: \' \';\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n  }\\n  \\n  .grvsc-gutter + .grvsc-source {\\n    padding-left: 0.75rem;\\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\\n  }\\n  \\n  /* Line transformer styles */\\n  \\n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\\n    content: \' \';\\n    position: absolute;\\n    width: 100%;\\n  }\\n  \\n  .grvsc-line-diff-add::before {\\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\\n  }\\n  \\n  .grvsc-line-diff-del::before {\\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\\n  }\\n  \\n  .grvsc-line-number {\\n    padding: 0 2px;\\n    text-align: right;\\n    opacity: 0.7;\\n  }\\n  \\n</style>"}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/1840460387.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1840460387.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BLOG_YHUJ","description":"yhuj79\'s Blog","author":"yhuj79","siteUrl":"https://yhuj79.github.io","lang":"en","utterances":{"repo":"sungik-choi/gatsby-starter-apple-comment"},"postTitle":"All","menuLinks":[{"name":"Home","link":"/"},{"name":"About","link":"/about/"},{"name":"Github","link":"https://github.com/yhuj79"}]}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-tsx.js.map