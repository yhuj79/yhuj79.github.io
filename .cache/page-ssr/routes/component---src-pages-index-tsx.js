exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
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

/***/ "./src/components/catetgoryFilter/categoryFilter.tsx":
/*!***********************************************************!*\
  !*** ./src/components/catetgoryFilter/categoryFilter.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useScrollCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useScrollCenter */ "./src/components/catetgoryFilter/useScrollCenter.ts");





const ACTIVE = "active";

const CategoryFilter = ({
  categoryList
}) => {
  const categoryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ALL_CATEGORY_NAME = "All";

  const isActive = ({
    isCurrent
  }) => isCurrent ? {
    id: ACTIVE,
    tabIndex: -1
  } : {};

  (0,_useScrollCenter__WEBPACK_IMPORTED_MODULE_3__["default"])({
    ref: categoryRef,
    targetId: ACTIVE
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Nav, {
    "aria-label": "Category Filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategoryTitle, null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategoryButton, {
    getProps: isActive,
    to: "/"
  }, ALL_CATEGORY_NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategoryUl, {
    ref: categoryRef,
    className: "invisible-scrollbar"
  }, categoryList.sort((a, b) => b.totalCount - a.totalCount).map(category => {
    const {
      fieldValue
    } = category;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: fieldValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategoryButton, {
      getProps: isActive,
      to: `/category/${lodash_kebabCase__WEBPACK_IMPORTED_MODULE_2___default()(fieldValue)}/`
    }, fieldValue));
  })));
};

const Nav = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].nav.withConfig({
  displayName: "categoryFilter__Nav"
})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:", "){padding:12px;}"], ({
  theme
}) => theme.device.sm);
const CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].em.withConfig({
  displayName: "categoryFilter__CategoryTitle"
})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-semi-bold);font-style:initial;margin-right:var(--sizing-lg);margin-top:14px;margin-bottom:14px;@media (max-width:", "){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"], ({
  theme
}) => theme.device.sm);
const CategoryButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "categoryFilter__CategoryButton"
})(["cursor:pointer;display:block;background-color:var(--color-category-button);margin-top:14px;margin-bottom:14px;padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:0.875rem;font-weight:var(--font-weight-semi-bold);:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"]);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "categoryFilter__Divider"
})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]);
const CategoryUl = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "categoryFilter__CategoryUl"
})(["display:flex;list-style:none;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;li{margin:4px;margin-bottom:10px;}::-webkit-scrollbar{height:8px;width:8px;background-color:var(--color-card);}::-webkit-scrollbar-thumb:horizontal{background-color:var(--color-category-button);border-radius:10px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryFilter);

/***/ }),

/***/ "./src/components/catetgoryFilter/index.ts":
/*!*************************************************!*\
  !*** ./src/components/catetgoryFilter/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _categoryFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoryFilter */ "./src/components/catetgoryFilter/categoryFilter.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_categoryFilter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/catetgoryFilter/useScrollCenter.ts":
/*!***********************************************************!*\
  !*** ./src/components/catetgoryFilter/useScrollCenter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useScrollCenter = ({
  ref,
  targetId
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const categoryWrapEl = ref.current;

    if (!categoryWrapEl) {
      return;
    }

    const isScrollActivated = categoryWrapEl.scrollWidth >= categoryWrapEl.offsetWidth;

    if (!isScrollActivated) {
      return;
    }

    const activeCategoryEl = categoryWrapEl.querySelector(`#${targetId}`);

    if (!activeCategoryEl) {
      return;
    }

    const offsetX = activeCategoryEl.offsetLeft - categoryWrapEl.offsetLeft;
    categoryWrapEl.scrollTo(offsetX - categoryWrapEl.offsetWidth / 2 + activeCategoryEl.offsetWidth / 2, 0);
  }, [ref, targetId]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollCenter);

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

/***/ "./src/components/postGrid/card/card.tsx":
/*!***********************************************!*\
  !*** ./src/components/postGrid/card/card.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var Styles_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Styles/category */ "./src/styles/category.ts");
/* harmony import */ var Styles_dateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Styles/dateTime */ "./src/styles/dateTime.ts");
/* harmony import */ var _centeredImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centeredImg */ "./src/components/postGrid/card/centeredImg.tsx");






const Card = ({
  thumbnail,
  alt,
  category,
  title,
  desc,
  date
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_centeredImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: thumbnail,
    alt: alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Styles_category__WEBPACK_IMPORTED_MODULE_1__["default"], null, category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Desc, null, desc)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Styles_dateTime__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateTime: date
  }, date)));
};

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "card__Wrapper"
})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "card__Text"
})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h3.withConfig({
  displayName: "card__Title"
})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:", "){font-size:1.3125rem;}@media (max-width:", "){font-size:var(--text-md);}"], ({
  theme
}) => theme.device.md, ({
  theme
}) => theme.device.sm);
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "card__Desc"
})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Card));

/***/ }),

/***/ "./src/components/postGrid/card/centeredImg.tsx":
/*!******************************************************!*\
  !*** ./src/components/postGrid/card/centeredImg.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbnailWrapper": () => (/* binding */ ThumbnailWrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3784290690_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/page-data/sq/d/3784290690.json */ "./public/page-data/sq/d/3784290690.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const DEFAULT_ALT = "Thumbnail Image";

const CenteredImg = ({
  src,
  alt
}) => {
  const data = _public_page_data_sq_d_3784290690_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const image = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const imageSharp = data.allImageSharp.edges.find(edge => edge.node.id === src);
    return imageSharp === null || imageSharp === void 0 ? void 0 : imageSharp.node.gatsbyImageData;
  }, [src, data.allImageSharp.edges]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ThumbnailWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(InnerWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    image: image,
    loading: "eager",
    alt: alt !== null && alt !== void 0 ? alt : DEFAULT_ALT
  })));
};

const ThumbnailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "centeredImg__ThumbnailWrapper"
})(["position:relative;width:100%;&::after{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}"]);
const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "centeredImg__InnerWrapper"
})(["overflow:hidden;"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CenteredImg));

/***/ }),

/***/ "./src/components/postGrid/card/index.ts":
/*!***********************************************!*\
  !*** ./src/components/postGrid/card/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/components/postGrid/card/card.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_card__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/postGrid/index.ts":
/*!******************************************!*\
  !*** ./src/components/postGrid/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _postGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postGrid */ "./src/components/postGrid/postGrid.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_postGrid__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/postGrid/postGrid.tsx":
/*!**********************************************!*\
  !*** ./src/components/postGrid/postGrid.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/components/postGrid/card/index.ts");
/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useInfiniteScroll */ "./src/components/postGrid/useInfiniteScroll.ts");
/* harmony import */ var _card_centeredImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/centeredImg */ "./src/components/postGrid/card/centeredImg.tsx");







const PostGrid = ({
  posts
}) => {
  const scrollEdgeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const currentList = (0,_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"])({
    posts,
    scrollEdgeRef,
    maxPostNum: 10,
    offsetY: 200
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, {
    role: "list"
  }, currentList.map(data => {
    const {
      id,
      slug,
      title,
      desc,
      date,
      category,
      thumbnail,
      alt
    } = data;
    const ariaLabel = `${title} - ${category} - Posted on ${date}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(List, {
      key: id,
      role: "listitem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: slug !== null && slug !== void 0 ? slug : "",
      "aria-label": ariaLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      thumbnail: thumbnail,
      alt: alt,
      category: category,
      title: title,
      desc: desc,
      date: date
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollEdgeRef
  }));
};

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul.withConfig({
  displayName: "postGrid__Grid"
})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:", "){grid-gap:var(--grid-gap-lg);}"], ({
  theme
}) => theme.device.sm);
const List = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "postGrid__List"
})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ", "::after,a:focus ", "::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:", "){grid-column:span 2;}"], _card_centeredImg__WEBPACK_IMPORTED_MODULE_4__.ThumbnailWrapper, _card_centeredImg__WEBPACK_IMPORTED_MODULE_4__.ThumbnailWrapper, ({
  theme
}) => theme.device.sm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostGrid);

/***/ }),

/***/ "./src/components/postGrid/useInfiniteScroll.ts":
/*!******************************************************!*\
  !*** ./src/components/postGrid/useInfiniteScroll.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfiniteScroll = ({
  posts,
  scrollEdgeRef,
  maxPostNum = 10,
  offsetY = 400
}) => {
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: currentList,
    1: setCurrentList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: observerLoading,
    1: setObserverLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!posts.length || isLoading) return;
    setHasMore(posts.length > maxPostNum);
    setCurrentList([...posts.slice(0, maxPostNum)]);
    setIsLoading(true);
  }, [isLoading, posts, maxPostNum]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const loadEdges = () => {
      const currentLength = currentList.length;
      const more = currentLength < posts.length;
      const nextEdges = more ? posts.slice(currentLength, currentLength + maxPostNum) : [];
      setHasMore(more);
      setCurrentList([...currentList, ...nextEdges]);
    };

    const scrollEdgeElem = scrollEdgeRef.current;
    const option = {
      rootMargin: `0px 0px ${offsetY}px 0px`,
      threshold: [0]
    };
    observer.current = new IntersectionObserver(entries => {
      if (!hasMore) return;
      entries.forEach(entry => {
        if (!observerLoading) {
          setObserverLoading(true);
          return;
        }

        if (entry.isIntersecting) loadEdges();
      });
    }, option);
    observer.current.observe(scrollEdgeElem);
    return () => observer.current && observer.current.disconnect();
  });
  return currentList;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Hooks/useSiteMetadata */ "./src/hooks/useSiteMetadata.ts");
/* harmony import */ var Layouts_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Layouts/layout */ "./src/layouts/layout.tsx");
/* harmony import */ var Components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/seo */ "./src/components/seo.tsx");
/* harmony import */ var Components_postGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/postGrid */ "./src/components/postGrid/index.ts");
/* harmony import */ var Components_catetgoryFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Components/catetgoryFilter */ "./src/components/catetgoryFilter/index.ts");








const Home = ({
  pageContext,
  data
}) => {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const currentCategory = pageContext.category;
  const postData = data.allMarkdownRemark.edges;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const filteredPostData = currentCategory ? postData.filter(({
      node
    }) => {
      var _node$frontmatter;

      return (node === null || node === void 0 ? void 0 : (_node$frontmatter = node.frontmatter) === null || _node$frontmatter === void 0 ? void 0 : _node$frontmatter.category) === currentCategory;
    }) : postData;
    filteredPostData.forEach(({
      node
    }) => {
      const {
        id
      } = node;
      const {
        slug
      } = node === null || node === void 0 ? void 0 : node.fields;
      const {
        title,
        desc,
        date,
        category,
        thumbnail,
        alt
      } = node === null || node === void 0 ? void 0 : node.frontmatter;
      const {
        childImageSharp
      } = thumbnail;
      setPosts(prevPost => [...prevPost, {
        id,
        slug,
        title,
        desc,
        date,
        category,
        thumbnail: childImageSharp === null || childImageSharp === void 0 ? void 0 : childImageSharp.id,
        alt
      }]);
    });
  }, [currentCategory, postData]);
  const site = (0,Hooks_useSiteMetadata__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const postTitle = currentCategory || site.postTitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Layouts_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_catetgoryFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    categoryList: data.allMarkdownRemark.group
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PostTitle, null, postTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Components_postGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: posts
  }))));
};

const Main = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].main.withConfig({
  displayName: "pages__Main"
})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__Content"
})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:", "){padding-top:var(--grid-gap-lg);width:87.5%;}"], ({
  theme
}) => theme.device.sm);
const PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h2.withConfig({
  displayName: "pages__PostTitle"
})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:", "){font-size:1.75rem;}"], ({
  theme
}) => theme.device.sm);
const query = "162817471";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ "./src/styles/category.ts":
/*!********************************!*\
  !*** ./src/styles/category.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Category = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "category__Category"
})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);

/***/ }),

/***/ "./src/styles/dateTime.ts":
/*!********************************!*\
  !*** ./src/styles/dateTime.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].time.withConfig({
  displayName: "dateTime__DateTime"
})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTime);

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

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return string;
};

const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = Object.assign({
    pascalCase: false
  }, options);

  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }

  const hasUpperCase = input !== input.toLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};

module.exports = camelCase; // TODO: Remove this for the next major release

module.exports["default"] = camelCase;

/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


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

/***/ "./node_modules/lodash/kebabCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/kebabCase.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAAAAABqKySAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAQYPOx+uJIGjAAAUU0lEQVR42u3debhd473A8XUioyGJMWKKseKi5ikUNdRUU1QpUnPN1JD0qZmWIsTwkJbWnOZeU1FSUoLgXlM9hhC55GpoTKkEkXk47/1DkOF911p7n+Q4Z+/P59+z1m+tvZLzfc4+Z693ZQGglchcAkCwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAMFyCQDBAhAsQLAABIvm8va+ldjv0JPPG3DrA8PHlZrdLzbietccwaJKL2RVWfNn1z4/vWj21rE9j3HNESyaN1hZlmUddrtvpmAhWLSKYGVZ1v3c9wQLwaJ1BCvL2uz9tmAhWLSOYGVZp/6zBAvBonUEK8u2GCFYCBatJFhZ++sEC8GilQQry64VLASL1hKsbKBgIVi0lmA13CRYCBatJFhZw+OChWDRSoKVrTtdsBAsWkmwsksEC8GitQRr8TGChWDRSoKV7S9YCBbNH6y2Wyzg+z26tCm6r/BjwUKwaPZgdYtuO2vErSf2yCvWHwQLwaKFBCuEEGY/2rshGaxdBAvBogUFK4TwxFqpYLUdL1gIFi0qWGHKfqli3SJYCBYtK1hh+h6JYJ0iWAgWLSxYYcqa8WD9RLAQLFpasML98WD1EiwEixYXrNArut8agoVg0fKCdU10v44LO1gTR4/4aKZ/JQSLJgXr3fh7wi8WUrDG3HTWz/fYbNWOWZZlDcv03P6AEy4aNr36V/npa4/ecslJvXfa/8gzLv/7BP/qgkWdBSt0iy6KNXMhBGvykNN6xvZcYs9rR1XzEkde/P15B6191OOz59li6jkxfrITLGomWBvF9lu+yW8JJ1y5c4ecm396HDusstf32nn/EZuzct9/zbXRZ9FjTfW/Q7ColWD9KLbfhk0M1sSLuxauCbHD0+Vf3aidkmM69h0vWIJFvQRrz9h+uzYpWJOvWLbUMjY/eqHca5tyTvu8MV1uFCzBok6CtWlsv183IVjTrl2x9Mpbe79S4qUNWaNozIGfC5ZgURfBitZlePXBenf9ih55cWnR+U0/uMSYNd4ULMGiDoI1IbaaX5eZVQdr+HIVLm96aH5Ppu1VasoKbwiWYFH7wbo1ttsBodpg/aldxQsyb/VRXq/2LDll+RGCJVjUfLCiQXisymDN+mU1S8iv8nK6V3uUnrLSOMESLGo8WK+3jey1TaguWJN3r/IxPQ8kzm5qJQN3axQswaKmg9W4TWyvv1UZrD7VPqan02vx0zuloimXCpZgUdPB6l+8tkz5YP2h+geLrfNF7Oyea1PRkHb/J1iCRQ0H6+rYPp1HVxeslzosxEchhhDC9PUrHHKQYAkWNRusGedG9xkcqgrW+NWb9PDW/gue30WVzmh4TLAEixoN1hPrRXc5KlQVrMY9m9SrrO3w+Y86sn3FQ5YVLMGiFoM16Y6dE3e5zKguWJfndKTbCVff8/wbQ2++cMf0oxCzFT+b76jbZQuJYAkWrThY44b+7idLJL65+8wKVQVr4tLJ92kHPvzt5+bH/Ga1ZFcunvegz+RXaOMDTut/wzmH79xVsASLWglW+x/OZ6ue3ZfI+d4+eXaoLljJH7B6PDXvrC+PSW253KR5Nvx5zmmu+5t3v95s2l8O6CBYgkVNBKsy3R+Ozy4O1tRuiZGHT1xg2kOpuw0HzL3VZ53Sy8nM+5jXMHYvwRIs6i5Yh6YWSS8O1g2JkcfGxr28ZHzjlede7P365GnuMXaBibcvLViCRT0Fq12fV5KzC4M1s0diuatZ0XlDE3dI3zTXNhulTvSIxsjEt5YTLMGiXoLVZpNzP8iZXRis2+JjN52SGPjH+PZrf9u3l1Knul+8gS93FizBoi6CdfjDn+fPLgzWBvHBzyUnbhvf4d5vNjg+ca7bTktMfLqdYAkW9RCsjY8Z8MiYxiYE67343EPSE1+MfyDr6G826Jl44/pWcuSvBEuwqJvfYS37iydnVxusW+NLMLyfc7qHxVc6/vrLnyc+Ydo3PXHSqoIlWNRLsLIsW+n0UdUFK/6RqePyTndk/BTGzPny44kz/DJn5L2CJVjUUbCyrO3Jn1YTrFWy4gdZzG/j6D5ff8Lq0vj5/S535AaCJVjUU7CyrOuV0ysO1jvxhY8bc883/tH4PnO+ul/8j5n/yh15pWAJFvUVrCzb6L1Kg3VjdM5Z+ec7JvpbqpXnfHXl6Mid80d+1FawBIs6C1bW7fkKgxV/cOCzBSe8SXSvt0MIIYyNn9ntBSP3EizBot6ClXX8z8qC1T369m1SwQkfFT32n0IIIfw1fmIfFYwcKFiCRWsO1mLrL6DnKp0Ll0q/o5JgzYy+ufte0QlfFz3yhSGE1Cfhu1cZbcESLFpHsOIL+DV+OfK/zt4r54bhji9WEKxPoiN+WnTCw+Pr24QQEs/GyH5cNHJaO8ESLGouWF+Z/uBBi6eKtfJH5YP1ZuKZWwXiD4w4OIQQwjnRr51feBE2ESzBokaDFUIYf8JiiWL1mlE6WPEfle4pPOPlY7vtEkII4cSCOw1TjhQswaJ2gxXCK1skijWwdLDui+7/98IzXjt6X2MIIYRDoiOfKhzZT7AEi1oOVpi8a2L10cllgxX/GNYLhUfeLPpx0xBCCPEn8LxaOPJSwRIsajpYYdre8WJdVjZYl0R3f6vwwD+M/ro/hBDCNtGR/ywcOVCwBIvaDlb4YqXorkt/VjJYp0d3/6DwuPtG95sUQgjxJyZOKBw5WLAEixoPVmqZg4Elg3V4dO8vCw/bJ7rf+yGEEH8W2MzCkQ8JlmBR68EKO0b33bNksOJ/0htfeNSfpveLr7vwReHIuwRLsKj5YN0U//To5HLBOq/KXzjtHv1ofmMIIfwg/cNXrhsFS7Co+WB9Er9X58Fywbo2uvNrhUftFX2aagghhH2iI0cUjrxcsASLmg9WvEjZ8eWCNSi68zOFB42+71s3hJD6tdizhSN/LViCRe0H66D85afyg/VodOchhQeN/mZ92xBCCL+MjnyocORxgiVY1H6w4oFYv1yw4o8QvLXomI3RGxn3CSGEcFHRJ8MqeZcpWIJFbQXrsviDdMoF693ozmcUHTO+sPJRIYTU0jOFC0DMWlywBIt6DVbD9FLBmljNcsapWxC/eo7XndGvrVU08nXrYQkWdRCs+IfVs7GlghXap//cl+P86CEvDyGkFoBoKHhAdbhZsASLOghWfHWE7LNywdqqqntz4nfmDA0hhDApvurN/QUjDxYswaIOgrV9lr4RuThY8YfE313w+6Zu0UfRz1kJPv7Uwv3zR07oKFiCRe0Ha2L0TV22eslgxT/X0Dv/mPFnO/ea89Xjo19t92nuyOs9l1CwqINg3R3/Rt+mZLC+jD4PsGP+rX/HRA959pyv3hY/o+tyR24mWIJFHQQr8buf3iWDlfigfO5TBGcsk7tO6aj4Ga2Z156HMsESLGo/WK8kFnY/qWyw4nfE7Jh3zHvi7/m+vt+6MfFIn5znUEzqIViCRR0Ea7vEN/qAssEamlV6d86MdbL0jTkhJJZyyLIObydH9s0ES7Co/WBdlfpGH102WJPizwPsmV5x7+r4Ec/5ZoM/Js5p2ymJiUPbCpZgUfvBSv1tLdswlA1W+FmFvyMfH3/H1/DtQvCTOifOardp0YlPdMoES7Co9WDNvqwh9X1+QflgvRqfsPjziTeEiSf1zP05q5NSp7XPjMjE4UtkgiVY1HqwXt48/X3+WvlgJZ7LlS33v7GDNh6WOOKLc200InleGy6QwSn92maCJVjUdrBmP37YYulv87luNS4O1jOJIWu8F+nVGYmNd5pns+2SZ9bmlE/m3nDWg2tmmWAJFrUcrDH391s199v8t5UEK2ybmNLltvkP/M8dUkd8bJ7tBuWc22I73/jhnB+unjphhSwTLMGiFoK15CULOu/UI3pvv3TRd/kaUysK1sPJQfu+M/d2U3+/VGrDzed9QdO65Z9g+9V77bJ+16wEwRIsWkewqvdgqChYjRumR20zcM5buJlPHd0lvdm9872iuxfWSxEswaLGg7VnqCxY4bl2eeOWWm/X/bZcqU3eJns1zv+Seld81usIlmBRh8Hq8E6lwUo87au01Rd8EP3Hy1Q4Y+tBgiVY1GGwLg0VByvxJOeyhXwp8prurHDI04IlWNRhsE4PVQRr4rpNOOLvoy/qxxXN2DcIlmBRf8E6IVQTrDBi8aqPeFj8RX24dgUzVhknWIJF/QXriMbqghXuqPaIG0xKvKoPyv/U1v65IFiCRd0F65DZocpghcEdqzriDumljz9ev+SMhluCYAkW9RaszjctOLt0sMKL3as45LEzcl7XvzcqNaPtoCBYgkW9BWu390NTghXGblbpERe7Nv+Fjd+qxJBOX33OVbAEizoKVpebo7MrCFaYUuGnG7oOLXplM6/uXDRks5FBsASL+gpW11PHhiYHKzRe0bmCY247qsRr+/CQ/LeD5339nlKwBIs6CdbmN09Oza4oWCFMOHvJksfc8tGSr+7J9O/e2x797jebCZZgUQ/BWurof+TMrjBYIfz7rE4lDrrpQ+Vf3sxHjlkuNmOFk9+dayvBEixqPFgN6x150+uzc2dXHKwQPjq1KFkb/aWxslc4a9iJ8/4NsmGt44bNmmeTeLCm+d8hWLTuYDV0WX2TnQ44pu/lQz8vnl1FsEKY+ljfjVLrxXfZf+Doal5k4+hn7rqmX5+dd9zvyNMHPLXgmd8e/Qui/xyCBSV8fGefFRf4nVOvC/575iI63oBYsNb27yBYUNLkMS8Oua1/3yMOOunCG+5+8o1xsxbhsX4V/Ry9fwPBghbo8FiwDnVdBAtaoOjiDv1cF8GCluftyp4/jWDBQvHqNRHDC3a6Khqsh1xNwYJFalj02a75n9yasnL0SWeTXU3BgkVqcvTh8/fk7nNZ5nfuggXfhS2jD7Iel7PHqPgzD4e4loIFi9iZ0fpsPz65w8drRPdYdqZrKViwiA2J39Sz1puJ7cduGt/heJdSsGBRm71eYl2Jv0Y3f3DZxG2Lz7uUggWL3ODUbdu9H1lgbYmXDkrd5H2kCylY0Aw/YvVMLjWx2oVzrzw/+pYfJLdccYILKVjQDAblLY+z7Cb7nnzFbdddeGrv3Of03OsyChY0h1nbN3mV+v1dRcGC5jFutSb2aukPXUTBgmbycqcm9WqZf7iEggXN5s9N6dXyr7mAggXNqH+bqnvVfaTLJ1jQrB5cqsperfqOiydY0MxGrFlVr3Z736UTLGh2n+5Uea66DXbdBAu+E3dV+ENWwy8+c9EEC74j069auoJebfysKyZY8B2acGbJZC1x1P+4WoIF3/VPWQ8c2LEwV1vcONGVEixoCb64ddclc26H3v0CnxQVLGhBZr816IwdOs/fqo5bn/ZnH7sSLGiJGse8POy+mwecf+qZv71h8N+eG/WJZdsFC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLECwAwQIQLECwAAQLQLAAwQIQLICq/D9Usy7+sdsylQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAEsKADAAQAAAABAAACdgAAAADToF46AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAxLTA2VDE1OjU5OjI4KzAwOjAw2hfaOQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMS0wNlQxNTo1OToyOCswMDowMKtKYoUAAAASdEVYdGV4aWY6RXhpZk9mZnNldAAyNlMbomUAAAAZdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADEyMDDEGiTqAAAAGHRFWHRleGlmOlBpeGVsWURpbWVuc2lvbgA2MzD1X+RdAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"gatsby-starter-apple","version":"2.0.0","description":"Gatsby blog starter kit with beautiful and responsive design","main":"index.js","private":true,"scripts":{"build":"gatsby build","develop":"gatsby develop","deploy":"gatsby build && gh-pages -d public -b deploy","format":"prettier --write \\"**/*.{js,jsx,ts,tsx,json,md}\\"","start":"gatsby develop","serve":"gatsby serve","clean":"gatsby clean","lint":"eslint \'**/*.{ts,tsx}\'","semantic-release":"semantic-release","generate":"graphql-codegen --config codegen.yml"},"dependencies":{"dark-theme-github":"github:remorses/dark-github-theme","gatsby":"^4.5.4","gatsby-plugin-disqus":"^1.2.4","gatsby-plugin-feed":"^4.4.0","gatsby-plugin-image":"^2.4.0","gatsby-plugin-manifest":"^4.4.0","gatsby-plugin-offline":"^5.4.0","gatsby-plugin-react-helmet":"^5.4.0","gatsby-plugin-sharp":"^4.4.0","gatsby-plugin-sitemap":"^5.4.0","gatsby-plugin-styled-components":"^5.4.0","gatsby-plugin-typography":"^4.4.0","gatsby-remark-copy-linked-files":"^5.4.0","gatsby-remark-images":"^6.4.0","gatsby-remark-vscode":"^3.3.0","gatsby-source-filesystem":"^4.4.0","gatsby-transformer-remark":"^5.4.0","gatsby-transformer-sharp":"^4.4.0","react":"^17.0.1","react-dom":"^17.0.1","react-helmet":"^6.1.0","react-typography":"^0.16.20","styled-components":"^5.3.3","styled-reset":"^4.3.4","typography":"^0.16.21","vscode-theme-github-light":"github:chuling/vscode-theme-github-light"},"devDependencies":{"@graphql-codegen/cli":"^2.3.1","@graphql-codegen/introspection":"2.1.1","@graphql-codegen/typescript":"2.4.2","@graphql-codegen/typescript-operations":"^2.2.2","@graphql-codegen/typescript-react-apollo":"3.2.3","@semantic-release/commit-analyzer":"^9.0.2","@semantic-release/github":"^8.0.2","@semantic-release/release-notes-generator":"^10.0.3","@types/react-helmet":"^6.1.5","@types/styled-components":"^5.1.19","@types/typography":"^0.16.4","@typescript-eslint/eslint-plugin":"^5.8.1","@typescript-eslint/parser":"^5.8.1","disable-scroll":"^0.6.0","eslint-plugin-jsx-a11y":"^6.5.1","gatsby-plugin-alias-imports":"^1.0.5","gatsby-plugin-robots-txt":"^1.6.14","gatsby-plugin-typescript":"^4.4.0","gh-pages":"^4.0.0","graphql":"^15.8.0","lodash":"^4.17.21","prettier":"^2.4.1","semantic-release":"^19.0.3","typescript":"^4.5.4"},"repository":{"type":"git","url":"https://github.com/sungik-choi/gatsby-starter-apple.git"},"keywords":["gatsby"],"author":"Sungik Choi <sungik.dev@gmail.com> (http://sungikchoi.com/)","license":"MIT","bugs":{"url":"https://github.com/sungik-choi/gatsby-starter-apple/issues"},"homepage":"https://github.com/sungik-choi/gatsby-starter-apple#readme"}');

/***/ }),

/***/ "./public/page-data/sq/d/1840460387.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1840460387.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BLOG_YHUJ","description":"yhuj79\'s Blog","author":"yhuj79","siteUrl":"https://yhuj79.github.io","lang":"en","utterances":{"repo":"yhuj79/blog-comments"},"postTitle":"All","menuLinks":[{"name":"Home","link":"/"},{"name":"About","link":"/about/"},{"name":"Github","link":"https://github.com/yhuj79"}]}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3784290690.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3784290690.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allImageSharp":{"edges":[{"node":{"id":"6bf744e5-dd73-578e-9d11-c907a8f983ce","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAs2AAALNgG/CNh6AAAAjElEQVQY02P4jw38+/fv////P3/+/Pr163/cgAGr6N+/f////79x48YjR47AzSKsGaLt2rVr9vaOpqbmvr5+Hz9+xKUfXfOfP3/+//8/c+YsHh4+ERExf/9AiE6iNENsPnPmjLCwKDc3r7i45LVr1+HiRPn5////S5cu6+7unjt33u/fv4l1NnJoEwQAE96DQ5VqxGUAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/b584aef05c78d38d57188b4fded110c0/43adf/apple.png","srcSet":"/static/b584aef05c78d38d57188b4fded110c0/c38c7/apple.png 250w,\\n/static/b584aef05c78d38d57188b4fded110c0/db21a/apple.png 500w,\\n/static/b584aef05c78d38d57188b4fded110c0/43adf/apple.png 999w","sizes":"(min-width: 999px) 999px, 100vw"},"sources":[{"srcSet":"/static/b584aef05c78d38d57188b4fded110c0/f0a7e/apple.webp 250w,\\n/static/b584aef05c78d38d57188b4fded110c0/16f4d/apple.webp 500w,\\n/static/b584aef05c78d38d57188b4fded110c0/11bd2/apple.webp 999w","type":"image/webp","sizes":"(min-width: 999px) 999px, 100vw"}]},"width":999,"height":344}}},{"node":{"id":"581b962c-96ec-5370-9836-e0a4d069b843","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7zAAAO8wEcU5k6AAAA0ElEQVQY02P4cNsHDf145Pvrie/Px74f7/hgyiIjBjT+u5s+p3d67F3remij24vL3p/v+Xy8A0Wf7vqgGYfQ/P4WSPrFFW9He+O4SIsAX9NDm9w+3PZ9ecXn+SWfl1d9nl32fnPd5yMezU8veocFmbXX2RVlW+1b737ruNfVQ16XD3rdPuF9YZ/n4/Pen+6CVOKw+bJ3YaZ1bIR5QrTFub0e3x/5frjt8+mO76c7Ph/u4HY2HD2/7P30ovezi97vYDa8JzLAQPbchSL8QQ3UDAAgsRbmtrt/gwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/167e34f6505fa21c2ee10cfa93272bdb/f64b9/javascript.png","srcSet":"/static/167e34f6505fa21c2ee10cfa93272bdb/2f18f/javascript.png 174w,\\n/static/167e34f6505fa21c2ee10cfa93272bdb/e934d/javascript.png 348w,\\n/static/167e34f6505fa21c2ee10cfa93272bdb/f64b9/javascript.png 696w","sizes":"(min-width: 696px) 696px, 100vw"},"sources":[{"srcSet":"/static/167e34f6505fa21c2ee10cfa93272bdb/9b963/javascript.webp 174w,\\n/static/167e34f6505fa21c2ee10cfa93272bdb/12833/javascript.webp 348w,\\n/static/167e34f6505fa21c2ee10cfa93272bdb/9c382/javascript.webp 696w","type":"image/webp","sizes":"(min-width: 696px) 696px, 100vw"}]},"width":696,"height":240}}},{"node":{"id":"26a26d89-0aa0-5079-a7a1-742262b2c32f","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVQoz42RO8qDQBSF4wbSuhZXY5HGMoXuQEQiCMZG0wRfKdMHFV+NXZqIFkkgiI9dnJ+5YEjzhwwcDgOHb86duxrHEYuGYcA8z+i6DkVRkPI8R1mWpKqq6N62LeVYnumTsfqELcDdbgfTNBEEAcIwhOM4cF2XfL/fQ9O0N+grcJomPB4P+L4PwzCw3W4JJIoi2JFlGa/Xi8D3+/3d8ivw+XxSs81mg/V6DZ7nIQgCsiwDx3GwbRuHw4EeZvmfgbqu43Q64Xq9QlEU9H0PSZJQ1zUBf2q4QBnMsix4nkdwNmIURTifzzgej1BV9bc/XJbSNA2SJEGapuRsXOZxHONyueB2u/275T+B8c9y/zqYFQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/9bfdc7fafe79a87a2683e18104d89254/bafbe/markdown.png","srcSet":"/static/9bfdc7fafe79a87a2683e18104d89254/d0382/markdown.png 124w,\\n/static/9bfdc7fafe79a87a2683e18104d89254/93cc9/markdown.png 248w,\\n/static/9bfdc7fafe79a87a2683e18104d89254/bafbe/markdown.png 496w","sizes":"(min-width: 496px) 496px, 100vw"},"sources":[{"srcSet":"/static/9bfdc7fafe79a87a2683e18104d89254/1c007/markdown.webp 124w,\\n/static/9bfdc7fafe79a87a2683e18104d89254/1f88a/markdown.webp 248w,\\n/static/9bfdc7fafe79a87a2683e18104d89254/c2929/markdown.webp 496w","type":"image/webp","sizes":"(min-width: 496px) 496px, 100vw"}]},"width":496,"height":171}}},{"node":{"id":"b49c3fed-29a6-5fa3-a23c-e45437aedf51","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAs2AAALNgG/CNh6AAAA40lEQVQY02P43eP4u8cBhLodoAyISLc9mAFG3Y4wQbgaEGL402yPjprs/rQ6/+nw+NNgDWKDkP2fBhtkNb/BJMOfSlsQqkKQv2scf01P/7a49ueUtN9Vdr9rnX5XO/xq9f1daQdVXGn7G0wy/C6wQkH5lr9L7L/PLPl+98qfm2d+lTn/7I7/2Zvya0La7wKrP2AEV8zwJ80CBaVb/kk2+VkV/HvLgt9Lu35nWP/OsgehTNs/6RZoihl+x5hhQZFGv0N0fodog9jRJiAUY4qpjOFPsDEWFGLyJ9TsT6gplA1BGMoAhczsLKvx8dsAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/c19f3ea62cfbfd5f0f457e5c279e6e27/e74ba/swift.png","srcSet":"/static/c19f3ea62cfbfd5f0f457e5c279e6e27/74d09/swift.png 167w,\\n/static/c19f3ea62cfbfd5f0f457e5c279e6e27/a30d5/swift.png 333w,\\n/static/c19f3ea62cfbfd5f0f457e5c279e6e27/e74ba/swift.png 666w","sizes":"(min-width: 666px) 666px, 100vw"},"sources":[{"srcSet":"/static/c19f3ea62cfbfd5f0f457e5c279e6e27/c626c/swift.webp 167w,\\n/static/c19f3ea62cfbfd5f0f457e5c279e6e27/a8f41/swift.webp 333w,\\n/static/c19f3ea62cfbfd5f0f457e5c279e6e27/53596/swift.webp 666w","type":"image/webp","sizes":"(min-width: 666px) 666px, 100vw"}]},"width":666,"height":230}}},{"node":{"id":"0ebf2671-ac57-57ab-af64-3613212d38e9","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAZugSaJr/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECAyH/2gAIAQEAAQUCyijrKlp//8QAFhEAAwAAAAAAAAAAAAAAAAAAAQIQ/9oACAEDAQE/AVM//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABoQAAEFAQAAAAAAAAAAAAAAAAABAhEhQ4L/2gAIAQEABj8CpxmvJB//xAAaEAEAAgMBAAAAAAAAAAAAAAABABFRgaHR/9oACAEBAAE/ISKto9jQi5bq8iuP/9oADAMBAAIAAwAAABCL7//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QZYNaf//EABYRAAMAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPxAIv//EABsQAQACAwEBAAAAAAAAAAAAAAEAESFBgTGR/9oACAEBAAE/EATCs0J0whxGaHyHbsUFWOnyf//Z"},"images":{"fallback":{"src":"/static/226e1805d348bcc4c7005ca1701ee334/3ea24/thumbnail.jpg","srcSet":"/static/226e1805d348bcc4c7005ca1701ee334/cfb03/thumbnail.jpg 150w,\\n/static/226e1805d348bcc4c7005ca1701ee334/ef389/thumbnail.jpg 300w,\\n/static/226e1805d348bcc4c7005ca1701ee334/3ea24/thumbnail.jpg 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/226e1805d348bcc4c7005ca1701ee334/157dc/thumbnail.webp 150w,\\n/static/226e1805d348bcc4c7005ca1701ee334/3af8d/thumbnail.webp 300w,\\n/static/226e1805d348bcc4c7005ca1701ee334/927fb/thumbnail.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":207}}},{"node":{"id":"5d934df3-9ee8-55db-9a52-e2f73c298814","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAApUlEQVQoz52QXQrCMBCEcw+bNqlRCSVFPUChpUr6Y/GhlFT0/scY2UDBJyF5GHb2h+FjmZAKCRfgqQTnArsk86JZjFhVNej7CU1zxzBMoL6ub8jzE9J0jyxTQWJtazHPDuP4xLp+YO2IrntAKe0PhDgEiVHAsrw8pXNvH0aeAomQjoIIi+IMYy7QukRZXqG18V7KYxwhUXCe47duv9voggL/LWMIv6ZQyu5s+bMQAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/715979ddc34156f2e8bf96e84e997288/6ef95/dict1.png","srcSet":"/static/715979ddc34156f2e8bf96e84e997288/34ecb/dict1.png 281w,\\n/static/715979ddc34156f2e8bf96e84e997288/b1322/dict1.png 561w,\\n/static/715979ddc34156f2e8bf96e84e997288/6ef95/dict1.png 1122w","sizes":"(min-width: 1122px) 1122px, 100vw"},"sources":[{"srcSet":"/static/715979ddc34156f2e8bf96e84e997288/ff592/dict1.webp 281w,\\n/static/715979ddc34156f2e8bf96e84e997288/b0700/dict1.webp 561w,\\n/static/715979ddc34156f2e8bf96e84e997288/989b8/dict1.webp 1122w","type":"image/webp","sizes":"(min-width: 1122px) 1122px, 100vw"}]},"width":1122,"height":387}}},{"node":{"id":"e741f005-21c7-5b1a-8c77-2c44c21f9900","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuElEQVQoz6WR2wqEMAxE+/9/qS/itYoWrJdmOVki2YV92kBwbGcmExpKKULZN+csKSXZ9/0npsGcmdY6eLP7vmUcRxV0XaeNyOO2bRXDgXtdl/gK3gzSsiz6P02TDMOgGCFNcRZjVAz3PM9H/yTctk2qqlLRuq56iZA+jkP6vtc7wwwj7TzPqq3rWpqmeSf0KxPfpmOA2FJZWjOn4FrCj5X9w0BispmwFibfGA5J2cY/TDBnM/0XvwC+tCEOKY7jHgAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/63cbf8ba5a8735d7e40cd0aee4a4068b/bd1cb/queue1.png","srcSet":"/static/63cbf8ba5a8735d7e40cd0aee4a4068b/b94c0/queue1.png 424w,\\n/static/63cbf8ba5a8735d7e40cd0aee4a4068b/fe3e2/queue1.png 847w,\\n/static/63cbf8ba5a8735d7e40cd0aee4a4068b/bd1cb/queue1.png 1694w","sizes":"(min-width: 1694px) 1694px, 100vw"},"sources":[{"srcSet":"/static/63cbf8ba5a8735d7e40cd0aee4a4068b/12027/queue1.webp 424w,\\n/static/63cbf8ba5a8735d7e40cd0aee4a4068b/10e9a/queue1.webp 847w,\\n/static/63cbf8ba5a8735d7e40cd0aee4a4068b/30ce6/queue1.webp 1694w","type":"image/webp","sizes":"(min-width: 1694px) 1694px, 100vw"}]},"width":1694,"height":584}}},{"node":{"id":"99326d43-d890-5f31-b371-372bdbbf9c58","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0ElEQVQoz62RzQqDMBCE8yylpcZERdEU/0WkIh6l+HcQ3/8hpiQlxYJ66uFjQtidZHaJaZpgjEHqPyCcc2Vo2/YhlmVB1kmVnNWSMAyRZZlq0OZaZbPjOAiCQOG6rkIb70HGccSyLMp0XVfM84xpmjAMA6qqQlmWaJoGbdui6zr0fQ9K6TeiPG8hQjwQRjF838ezrlEUBfI8V3iep36UpimSJEEcxxBCnEfmJgU3riomNYyf1/UYtovToziMfPdyXKIXmHEDY5/ZabTx3t3Rlt8Actvwu1YgpwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/30818c3abd9ae013883684ee868c2760/f0a3f/queue2.png","srcSet":"/static/30818c3abd9ae013883684ee868c2760/3c1cf/queue2.png 169w,\\n/static/30818c3abd9ae013883684ee868c2760/d61d9/queue2.png 338w,\\n/static/30818c3abd9ae013883684ee868c2760/f0a3f/queue2.png 676w","sizes":"(min-width: 676px) 676px, 100vw"},"sources":[{"srcSet":"/static/30818c3abd9ae013883684ee868c2760/afb24/queue2.webp 169w,\\n/static/30818c3abd9ae013883684ee868c2760/97241/queue2.webp 338w,\\n/static/30818c3abd9ae013883684ee868c2760/4d9dd/queue2.webp 676w","type":"image/webp","sizes":"(min-width: 676px) 676px, 100vw"}]},"width":676,"height":233}}},{"node":{"id":"9928a7e8-1f69-5612-8d26-effbb10803e4","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA40lEQVQoz22SB4rEQAwE/f9POrHGcZ1z6KMEOi6sYfCgltwlyYEkzfOsvu/VdZ2GYVDbtrquy04Yhnq9XnaiKFJZlpRoHEfLp46a9/ut53kUICJM02Tisixqmkbneeq+b0vcts20dV3NjIccctGJV1VlAIGLuEORZZniODZXTLg7Ifc8z82Ad5qm3zV0AoB9EHfa5iO4QUzRcRxG9InQycnd992g/hHi5G7essed0GdYFIWSJPlMiAtDpkVc67o2Ohy5E0PjQOYQdEUd+q8ZepuIvj3c2NrfOIv4+WcQZ1RobPkLyQkXVItdVFUAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/33363695593ed924af92ebc89eebbe5c/36850/stack1.png","srcSet":"/static/33363695593ed924af92ebc89eebbe5c/60963/stack1.png 425w,\\n/static/33363695593ed924af92ebc89eebbe5c/0fbcf/stack1.png 850w,\\n/static/33363695593ed924af92ebc89eebbe5c/36850/stack1.png 1700w","sizes":"(min-width: 1700px) 1700px, 100vw"},"sources":[{"srcSet":"/static/33363695593ed924af92ebc89eebbe5c/380ea/stack1.webp 425w,\\n/static/33363695593ed924af92ebc89eebbe5c/3f62d/stack1.webp 850w,\\n/static/33363695593ed924af92ebc89eebbe5c/362ed/stack1.webp 1700w","type":"image/webp","sizes":"(min-width: 1700px) 1700px, 100vw"}]},"width":1700,"height":586}}},{"node":{"id":"e305536f-1a88-5fae-88ee-99dafe227fb4","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0UlEQVQoz61SywqDMBDMt5SW1iQqakxR8YUHT3oQehARvPj/nzAlCxErbemhh2GSzWYys4RxziGEgOF/gEkpSdDzPLiu+8J2bWF6bf0TWJIkKIqCmn3f39jAiIRhCKUUQWtN5/tHjmDjOGJZFmRZhnVdMU0T5nlG13Wo6xpN06Dve7Rti2EYKI3jOBTP8BFM6zvSNIOKInJaliWJx3FMLoMgQFVVyPMcJs1+HG8jS+5A3s4UZT9c48TOze5t7Wvka1jilD4gbhdwIbeLR/Fff8ITNNfbGTZKgqcAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/aa900287899bad703fc5825faf55bf92/f0a3f/stack2.png","srcSet":"/static/aa900287899bad703fc5825faf55bf92/3c1cf/stack2.png 169w,\\n/static/aa900287899bad703fc5825faf55bf92/d61d9/stack2.png 338w,\\n/static/aa900287899bad703fc5825faf55bf92/f0a3f/stack2.png 676w","sizes":"(min-width: 676px) 676px, 100vw"},"sources":[{"srcSet":"/static/aa900287899bad703fc5825faf55bf92/afb24/stack2.webp 169w,\\n/static/aa900287899bad703fc5825faf55bf92/97241/stack2.webp 338w,\\n/static/aa900287899bad703fc5825faf55bf92/4d9dd/stack2.webp 676w","type":"image/webp","sizes":"(min-width: 676px) 676px, 100vw"}]},"width":676,"height":233}}},{"node":{"id":"587338bb-145c-5f28-9314-944f3e44158c","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAC4jAAAuIwF4pT92AAABUUlEQVQY0y2OsctBURjGn3MOzokug3RvSUbrtfAnIN0Md5DyFxjIZrLYzYrJoIwMUnaTgWI22u7XLZPU833c77e9z9Pv7YFlWVprpZTv+9frlWQQBIPBAMBwOCTZ7XYBNBqNx+NBcjqdKqWEEFJKaK2LxeJutyP5er1ms1mhUBBCAFgsFiQrlQq+lEqly+VCcrvdZjKZKITneSQPh4PrugCUUqlUCsDpdHo+n47jAEgmk1JKY8x6vSbped6/XKvVIjmXywkhLMuSUmaz2SAIbrcb8Fn3GQmUy+X9fk+y1WohKtLp9HK5JHm/36vVavTRdV2Sq9UqOvP5/Hw+f7/fJDebjW3bn9QYE4/HAYzHY5JhGHY6HQC+75McjUYA+v1+GIYkz+dzvV4HIL4gkUhorY0xANrtNsnj8QhgMpmQbDabUsqfL71eT2sNIBaLSSn/5F+0M5lw/6r5HAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/084297f4fcbc02bd527b64d3142b6d5f/b309e/icon.png","srcSet":"/static/084297f4fcbc02bd527b64d3142b6d5f/5774c/icon.png 48w,\\n/static/084297f4fcbc02bd527b64d3142b6d5f/d8bb7/icon.png 96w,\\n/static/084297f4fcbc02bd527b64d3142b6d5f/b309e/icon.png 192w","sizes":"(min-width: 192px) 192px, 100vw"},"sources":[{"srcSet":"/static/084297f4fcbc02bd527b64d3142b6d5f/5ece1/icon.webp 48w,\\n/static/084297f4fcbc02bd527b64d3142b6d5f/8f415/icon.webp 96w,\\n/static/084297f4fcbc02bd527b64d3142b6d5f/25b53/icon.webp 192w","type":"image/webp","sizes":"(min-width: 192px) 192px, 100vw"}]},"width":192,"height":66}}},{"node":{"id":"25eabf77-806e-5a73-9b49-d2fe742cc061","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVQY06XQMQrFIBAEUO/mYaytPYDHsbNYECvvoeAhFlmdQIoUPz8kIa8dhoFR+GetNXdrhwsKH6jzJoDee8651ioizDzGeFQWEQAhBK21McY5Z62NMR7R/XJrjYhKKSkl7z0RPSqfMfOc88VhP29fHb4BnJeSl1+szJsAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/27a905ef34888856158821bca49edde9/1883b/og-default.png","srcSet":"/static/27a905ef34888856158821bca49edde9/bfcd6/og-default.png 300w,\\n/static/27a905ef34888856158821bca49edde9/749e3/og-default.png 600w,\\n/static/27a905ef34888856158821bca49edde9/1883b/og-default.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/27a905ef34888856158821bca49edde9/3af8d/og-default.webp 300w,\\n/static/27a905ef34888856158821bca49edde9/927fb/og-default.webp 600w,\\n/static/27a905ef34888856158821bca49edde9/b46ba/og-default.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":414}}},{"node":{"id":"e7b747cb-bf28-5de4-923f-5c36a96e7101","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVQoz32RwUrDQBCG81gefRkv4sGXEAQFD16UigdBQfEiehB7KR5asdRWCrYahBKbuk0MTWu6CTa7nySm2lrrwMDO7D8/3+wazAutiZVOj4dXNRaWc5iWm9axUplEz4wZf3tpEqmOY4hDNi4qLK7uc960f+4zs9+mxmRzLNRKpYY4L3TXl+gH/fTeb5vYmyswiv4nnDRUSSpNnLRGH3TNBremjSUC8sUn3pp3FOotZDTK1p+mNSbXnBehDIlkhOd/kfUHw2Ri5pm+CVVWNLqSs7rHvR1Qag0wXUnLCzmpeVTtgGcvoikC6q+SsvXOoyNTbduPpglV9ptlK2Cr0Elz70aQKwkexJC1fJujisNx1WX7usNpzWWnKNgtCg7KDpeNHmOwT10rEq1QU8pfAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/f15bc49f25ea9e71d792d46e669549c9/5f9ec/datastructure.png","srcSet":"/static/f15bc49f25ea9e71d792d46e669549c9/933ad/datastructure.png 272w,\\n/static/f15bc49f25ea9e71d792d46e669549c9/b6f7f/datastructure.png 544w,\\n/static/f15bc49f25ea9e71d792d46e669549c9/5f9ec/datastructure.png 1087w","sizes":"(min-width: 1087px) 1087px, 100vw"},"sources":[{"srcSet":"/static/f15bc49f25ea9e71d792d46e669549c9/e8ff7/datastructure.webp 272w,\\n/static/f15bc49f25ea9e71d792d46e669549c9/5139a/datastructure.webp 544w,\\n/static/f15bc49f25ea9e71d792d46e669549c9/f6fa6/datastructure.webp 1087w","type":"image/webp","sizes":"(min-width: 1087px) 1087px, 100vw"}]},"width":1087,"height":375}}},{"node":{"id":"ad49c348-fe35-5814-9f35-559382b1ee0f","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwElEQVQoz52Qyw6CMBBF+x/Sh1AjLly4cAemEIo8RMXyEBP//zOuaU3c18XdTCbnnhki1hIBFaBMgPE1AsqxCr6xc9+Q0ylHXXfIMo22vSFNMyhVIIpiMBaBc+kVonWNcVzQdT2W5Y2qurgCKXfgTEKIjVdIUVTo+8FBLLgsGwe1hrbRLnkbGjM5yDy/oHWDPC8Rhtsf0MvQGhkzO8NheOJ8bpEkCnG8dz/862QLut8HPB4TmuYKpTQOhyMoDb2BHxlM00lKxqyiAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/73f885dad62511fcf6332b419a9d94d3/6ef95/dict2.png","srcSet":"/static/73f885dad62511fcf6332b419a9d94d3/34ecb/dict2.png 281w,\\n/static/73f885dad62511fcf6332b419a9d94d3/b1322/dict2.png 561w,\\n/static/73f885dad62511fcf6332b419a9d94d3/6ef95/dict2.png 1122w","sizes":"(min-width: 1122px) 1122px, 100vw"},"sources":[{"srcSet":"/static/73f885dad62511fcf6332b419a9d94d3/ff592/dict2.webp 281w,\\n/static/73f885dad62511fcf6332b419a9d94d3/b0700/dict2.webp 561w,\\n/static/73f885dad62511fcf6332b419a9d94d3/989b8/dict2.webp 1122w","type":"image/webp","sizes":"(min-width: 1122px) 1122px, 100vw"}]},"width":1122,"height":387}}},{"node":{"id":"7b74a6fd-c82e-5f80-b24c-fe27265cb3f0","gatsbyImageData":{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABuElEQVQoz6WPT2tTQRTFz8ydmfcvrbaltiY1bRP/YE2LCiKWSulGcOnaD6CBrHwLxSa2uul7DQRFiqJ057Ku/EaKb2bey6apAXejL/gNvHA4d3H5nXPhnINzLnDO1f9Dy865qGTh5Mtn7L2IHyeDzvjl0XPb/9Av0o9Jkbw7KHr9btFNdotXg17xerBfvHm/P+y93R2mnw6Gh8fpsLxLjxJzeJz+7u51n3z9dgKwbQBVPMUGxqjDoI4cqyhQRY4mCqyhwDJyNP75LCzmkWMaFjOwCJABGAN4hnJqnTlELb899dD7Fd6TOryjTHRf2WhL2WhH5cFNacK7yoabyvrr0sgaabUitNcUWpyjDGDfOeOnQoi4ElWAuUfT8Buq7bXESF2jzL8trLdOVq2RLXd1lYy3Iax3g6y4yDXzkEEgY2UzNmn3A8CIiGI/8IHZB1PwlmRbVPmpapGmRaZpgWl5hYyocU0X2ESiyrW4xA0tci2WuKF5puUKN7LBf/IKO+OgWMIDFjrnEVxXbf+WOAu2pZGr3JSAYFPk4Y7MywA+wyYQ2eQm2BK5vEymhHstsuVXTGJEjGL1F/gHwhXKou49z4IAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/a62b05be417a0bb8ff1aefa9ef688775/02ce1/Appleterminal.png","srcSet":"/static/a62b05be417a0bb8ff1aefa9ef688775/5934e/Appleterminal.png 341w,\\n/static/a62b05be417a0bb8ff1aefa9ef688775/ec18b/Appleterminal.png 682w,\\n/static/a62b05be417a0bb8ff1aefa9ef688775/02ce1/Appleterminal.png 1364w","sizes":"(min-width: 1364px) 1364px, 100vw"},"sources":[{"srcSet":"/static/a62b05be417a0bb8ff1aefa9ef688775/c9766/Appleterminal.webp 341w,\\n/static/a62b05be417a0bb8ff1aefa9ef688775/ee634/Appleterminal.webp 682w,\\n/static/a62b05be417a0bb8ff1aefa9ef688775/81ee5/Appleterminal.webp 1364w","type":"image/webp","sizes":"(min-width: 1364px) 1364px, 100vw"}]},"width":1364,"height":470}}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map