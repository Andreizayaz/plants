/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(149);
__webpack_require__(431);
__webpack_require__(569);


/***/ }),

/***/ 677:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.links = exports.LOGO_TEXT = void 0;
exports.LOGO_TEXT = "Plants";
exports.links = [
    {
        text: "Home",
        href: "#home",
    },
    {
        text: "About us",
        href: "#about",
    },
    {
        text: "Service",
        href: "#service",
    },
    {
        text: "Price",
        href: "#price",
    },
    {
        text: "Contacts",
        href: "#contacts",
    },
];


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeLinkList = void 0;
const makeLinkList = (data, el) => {
    const fragment = document.createDocumentFragment();
    data.forEach(({ text, href }, index) => {
        const li = document.createElement("li");
        li.classList.add("navigation__link");
        li.innerHTML = `<a href=${href}>${text}</a>`;
        if (!index) {
            li.classList.add("navigation__link_active");
        }
        fragment.appendChild(li);
    });
    el.appendChild(fragment);
};
exports.makeLinkList = makeLinkList;


/***/ }),

/***/ 149:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const logo_svg_1 = __importDefault(__webpack_require__(873));
const data_1 = __webpack_require__(677);
const functions_1 = __webpack_require__(660);
const logo = document.getElementById("logo");
const navigation = document.getElementById("navigation");
logo.innerText = data_1.LOGO_TEXT;
logo.style.backgroundImage = `url(${logo_svg_1.default})`;
(0, functions_1.makeLinkList)(data_1.links, navigation);


/***/ }),

/***/ 411:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.services = void 0;
const _01_jpg_1 = __importDefault(__webpack_require__(622));
const _02_jpg_1 = __importDefault(__webpack_require__(969));
const _03_jpg_1 = __importDefault(__webpack_require__(924));
const _04_jpg_1 = __importDefault(__webpack_require__(863));
const _05_jpg_1 = __importDefault(__webpack_require__(482));
const _06_jpg_1 = __importDefault(__webpack_require__(381));
exports.services = [
    {
        label: "Gardens",
        title: "Garden care",
        desc: "Lorem Ipsum has been the industry",
        image: _01_jpg_1.default,
    },
    {
        label: "Planting",
        title: "Planting",
        desc: "Lorem Ipsum has been the industry",
        image: _02_jpg_1.default,
    },
    {
        label: "Lawn",
        title: "Lawn care",
        desc: "Lorem Ipsum has been the industry",
        image: _03_jpg_1.default,
    },
    {
        label: "Planting",
        title: "Planting",
        desc: "Lorem Ipsum has been the industry",
        image: _04_jpg_1.default,
    },
    {
        label: "Gardens",
        title: "Garden care",
        desc: "Lorem Ipsum has been the industry",
        image: _05_jpg_1.default,
    },
    {
        label: "Planting",
        title: "Planting",
        desc: "Lorem Ipsum has been the industry",
        image: _06_jpg_1.default,
    },
];


/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterOptions = exports.getBtns = exports.getServicesList = void 0;
const getServicesList = (data, el) => {
    const fragment = document.createDocumentFragment();
    data.forEach(({ title, desc, image }) => {
        const li = document.createElement("li");
        li.classList.add("service-item");
        li.innerHTML = `<img class="image" src=${image} alt=${title}>
    <div class="bottom-card"><h3 class="heading">${title}</h3>
            <p class="description">${desc}</p></div>
            `;
        fragment.appendChild(li);
    });
    el.appendChild(fragment);
};
exports.getServicesList = getServicesList;
const getBtns = (data, el) => {
    const fragment = document.createDocumentFragment();
    const btnS = [...new Set(data.map(({ label }) => label))].sort();
    btnS.forEach((label) => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.innerText = label;
        btn.name = label;
        fragment.appendChild(btn);
    });
    el.appendChild(fragment);
};
exports.getBtns = getBtns;
const filterOptions = (e, btnsEl, servecesEl) => {
    [...btnsEl.children].forEach((item) => item?.name === e.target?.name
        ? item.classList.add("btn_active")
        : item.classList.remove("btn_active"));
};
exports.filterOptions = filterOptions;


/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const data_1 = __webpack_require__(411);
const functions_1 = __webpack_require__(774);
const servicesList = document.getElementById("services-list");
const optionBtns = document.getElementById("options-btns");
(0, functions_1.getServicesList)(data_1.services, servicesList);
(0, functions_1.getBtns)(data_1.services, optionBtns);
optionBtns.addEventListener("click", (e) => (0, functions_1.filterOptions)(e, optionBtns, servicesList));


/***/ }),

/***/ 431:
/***/ (() => {



/***/ }),

/***/ 873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.bca97622.svg";

/***/ }),

/***/ 622:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/01.5b8c0fd3.jpg";

/***/ }),

/***/ 969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/02.cb5bf225.jpg";

/***/ }),

/***/ 924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/03.79910641.jpg";

/***/ }),

/***/ 863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/04.85cabfff.jpg";

/***/ }),

/***/ 482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/05.e6d55622.jpg";

/***/ }),

/***/ 381:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/06.8518cfd7.jpg";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(814);
__webpack_require__(311);

})();

/******/ })()
;