/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/accordion.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/accordion.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion: () => (/* binding */ accordion)
/* harmony export */ });
function accordion() {
    document.querySelectorAll('.accordion__trigger').forEach(button => {
        button.addEventListener('click', () => {
            const parentItem = button.closest('.accordion__item');
            const isActive = parentItem.classList.contains('_active');

            document.querySelectorAll('.accordion__item').forEach(item => {
                item.classList.remove('_active');
            });

            if (!isActive) {
                parentItem.classList.add('_active');
            }
        });
    });
}


/***/ }),

/***/ "./src/scripts/components/equalizeFinancingRows.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/equalizeFinancingRows.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   equalizeFinancingRows: () => (/* binding */ equalizeFinancingRows)
/* harmony export */ });
function equalizeFinancingRows() {
    const cards = document.querySelectorAll('.financing-programs__card-grid');
    if (!cards.length) return;

    cards.forEach(card => {
        card.querySelectorAll('.financing-programs__card-row').forEach(row => {
            row.style.height = 'auto';
        });
    });

    const maxRows = Math.max(...Array.from(cards).map(card => card.querySelectorAll('.financing-programs__card-row').length));

    for (let i = 0; i < maxRows; i++) {
        let maxHeight = 0;

        cards.forEach(card => {
            const row = card.querySelectorAll('.financing-programs__card-row')[i];
            if (row) {
                maxHeight = Math.max(maxHeight, row.offsetHeight);
            }
        });

        cards.forEach(card => {
            const row = card.querySelectorAll('.financing-programs__card-row')[i];
            if (row) {
                row.style.height = maxHeight + 'px';
            }
        });
    }
}


/***/ }),

/***/ "./src/scripts/components/fancybox.js":
/*!********************************************!*\
  !*** ./src/scripts/components/fancybox.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fancyboxVideo: () => (/* binding */ fancyboxVideo)
/* harmony export */ });
/* harmony import */ var _fancyapps_ui_dist_fancybox___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/ */ "./node_modules/@fancyapps/ui/dist/fancybox/index.js");



function fancyboxVideo() {
    _fancyapps_ui_dist_fancybox___WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-fancybox]", {
        Html: {
            video: {
                autoplay: true,
                mute: true
            }
        },
        Youtube: {
            autoplay: 1,
            controls: 1,
            // тут важно
            modestbranding: 1,
            rel: 0
        }
    });
}


/***/ }),

/***/ "./src/scripts/components/faqDetailAnchors.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/faqDetailAnchors.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   faqDetailAnchors: () => (/* binding */ faqDetailAnchors)
/* harmony export */ });
function faqDetailAnchors() {
    const faqRoot = document.querySelector('.faq-detail');
    if (!faqRoot) return;

    const getHeaderHeight = () => {
        const headerEl = document.getElementById('header') || document.querySelector('.header');
        if (!headerEl) return 0;
        return Math.ceil(headerEl.getBoundingClientRect().height);
    };

    const scrollToTarget = (target) => {
        if (!target) return;
        const headerHeight = getHeaderHeight();
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
    };

    const handleClick = (event) => {
        const link = event.currentTarget;
        const hash = link.getAttribute('href');
        if (!hash || !hash.startsWith('#')) return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        history.pushState(null, '', hash);
        scrollToTarget(target);
    };

    faqRoot.querySelectorAll('.faq-detail__nav-link[href^="#"]').forEach((link) => {
        link.addEventListener('click', handleClick);
    });

    const initialHash = window.location.hash;
    if (initialHash) {
        const target = document.querySelector(initialHash);
        if (target && faqRoot.contains(target)) {
            setTimeout(() => scrollToTarget(target), 0);
        }
    }
}


/***/ }),

/***/ "./src/scripts/components/header.js":
/*!******************************************!*\
  !*** ./src/scripts/components/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
function header(navController) {
    const burger = document.querySelector('.header__burger');
    const mobileNav = document.getElementById('mobileNav');
    if (!burger || !mobileNav) return;

    const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;

    const openMobileNav = () => {
        if (!isMobile()) return;
        if (navController && typeof navController.open === 'function') {
            navController.open();
            return;
        }
        mobileNav.classList.add('show');
        document.documentElement.classList.add('overflow-hidden');
    };

    const closeMobileNav = () => {
        if (navController && typeof navController.close === 'function') {
            navController.close();
            return;
        }
        mobileNav.classList.remove('show');
        document.documentElement.classList.remove('overflow-hidden');
    };

    burger.addEventListener('click', openMobileNav);

    mobileNav.querySelectorAll('[data-mobile-menu-close]').forEach(btn => {
        btn.addEventListener('click', closeMobileNav);
    });

}


/***/ }),

/***/ "./src/scripts/components/mobile-nav.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/mobile-nav.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileNav: () => (/* binding */ mobileNav)
/* harmony export */ });
function mobileNav() {
    const root = document.getElementById('mobileNav');
    if (!root) return;

    const overlay = root.querySelector('.mobile-nav__overlay');
    const contentSubmenu = root.querySelector('.mobile-nav__content--submenu');
    const closeButtons = root.querySelectorAll('.mobile-nav__close');
    const backButtons = root.querySelectorAll('.mobile-nav__back');
    const mainMenu = root.querySelector('#mobileNavMain');
    const submenus = root.querySelectorAll('.mobile-nav__menu--submenu');


    if (!contentSubmenu || !mainMenu) return;

    const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;

    const openRoot = () => {
        if (!isMobile()) return;
        root.classList.add('show');
        document.documentElement.classList.add('overflow-hidden');
        goToMain();
    };

    const closeRoot = () => {
        root.classList.remove('show');
        document.documentElement.classList.remove('overflow-hidden');
        goToMain();
    };

    const goToMain = () => {
        submenus.forEach(m => m.classList.remove('_active'));
        mainMenu.classList.add('_active');
        contentSubmenu.classList.remove('_active');
        contentSubmenu.classList.add('_isactive');
    };

    const openSubmenuById = (submenuId) => {
        const submenu = root.querySelector(`#${submenuId}`);
        if (!submenu) return;

        mainMenu.classList.remove('_active');

        contentSubmenu.classList.add('_active');
        contentSubmenu.classList.remove('_isactive');

        submenus.forEach(m => m.classList.remove('_active'));
        submenu.classList.add('_active');
    };

    if (overlay) overlay.addEventListener('click', closeRoot);

    closeButtons.forEach(btn => btn.addEventListener('click', closeRoot));
    backButtons.forEach(btn => btn.addEventListener('click', goToMain));

    mainMenu.addEventListener('click', (event) => {
        const item = event.target.closest('.mobile-nav__item');
        if (!item || !mainMenu.contains(item)) return;
        const submenuId = item.dataset.submenu;
        if (submenuId) {
            event.preventDefault();
            openSubmenuById(submenuId);
        }
    });


    return { open: openRoot, close: closeRoot, goToMain };
}


/***/ }),

/***/ "./src/scripts/components/sliders.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/sliders.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slidersAboutFounder: () => (/* binding */ slidersAboutFounder),
/* harmony export */   slidersOurServices: () => (/* binding */ slidersOurServices),
/* harmony export */   slidersPricing: () => (/* binding */ slidersPricing),
/* harmony export */   slidersPromo: () => (/* binding */ slidersPromo),
/* harmony export */   slidersReviews: () => (/* binding */ slidersReviews),
/* harmony export */   slidersStatsCard: () => (/* binding */ slidersStatsCard)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");



function slidersPromo() {
    document.querySelectorAll('.promo__swiper').forEach((el) => {
        const slidesCount = el.querySelectorAll('.swiper-slide').length;

        new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
            modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay],
            loop: true,
            loopedSlides: slidesCount,
            slidesPerView: 1,
            effect: "fade",
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            speed: 800,
        });
    });
}

function slidersStatsCard() {
    document.querySelectorAll('.stats-card__swiper').forEach((el) => {
        new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
            breakpoints: {
                320: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    allowTouchMove: false,
                }
            },
        });
    });
}

function slidersAboutFounder() {
    document.querySelectorAll('.about-founder__swiper').forEach((el) => {
        new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
            modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
            loop: true,
            spaceBetween: 20,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2.2,

                },
                992: {
                    slidesPerView: 4,
                }
            },
            navigation: {
                prevEl: ".about-founder__swiper-button--prev",
                nextEl: ".about-founder__swiper-button--next"
            }
        });
    });
}


function slidersOurServices() {
    const initBreakpoint = 576.98;

    document.querySelectorAll('.our-services__swiper').forEach((el) => {
        let swiperInstance = null;

        function initSwiper() {
            if (window.innerWidth <= initBreakpoint && !swiperInstance) {
                swiperInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
                    spaceBetween: 20,
                    slidesPerView: 1.3,
                });
            } else if (window.innerWidth > initBreakpoint && swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }

        initSwiper();

        window.addEventListener('resize', initSwiper);
    });
}


function slidersPricing() {
    document.querySelectorAll('.pricing__swiper').forEach((el) => {
        new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },

                576: {
                    slidesPerView: 1.8,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                700: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    allowTouchMove: false,
                }
            },
        });
    });
}


function slidersReviews() {
    document.querySelectorAll('.reviews__swiper').forEach((el) => {
        new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                768: {
                    slidesPerView: 2.01,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    allowTouchMove: true,
                }
            },
        });
    });
}


/***/ }),

/***/ "./src/scripts/components/submenu.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/submenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submenuController: () => (/* binding */ submenuController)
/* harmony export */ });
function submenuController() {
    const root = document.querySelector('.submenu');
    if (!root) return;

    const toggle = root.querySelector('.submenu__toggle-btn');
    const overlay = root.querySelector('.submenu__overlay');
    const submenuMobile = root.querySelector('#submenuMobile');
    const submenuDropdown = root.querySelectorAll('.submenu__dropdown');

    const isMobile = () => window.matchMedia('(max-width: 576.98px)').matches;
    isMobile() ? root.classList.add('_close') : root.classList.remove('_close');

    const open = () => {
        if (!isMobile()) return;
        root.classList.remove('_close');
        root.classList.add('_open');
        submenuDropdown.forEach(d => d.classList.add('submenu__dropdown--open'));
        toggle?.setAttribute('data-expanded', 'true');
        document.body.classList.add('hidden');
    };

    const close = () => {
        const anyOpen = [...submenuDropdown].some(d => d.classList.contains('submenu__dropdown--open'));
        if (!anyOpen) {
            root.classList.remove('_open');
            root.classList.add('_close');
            toggle?.setAttribute('data-expanded', 'false');
            document.body.classList.remove('hidden');
        }
    };

    const toggleMenu = () => {
        if (!isMobile()) return;
        if (root.classList.contains('_open')) {
            submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
            close();
        } else {
            open();
        }
    };

    toggle?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', () => {
        submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
        close();
    });

    submenuDropdown.forEach(d => {
        d.addEventListener('click', (e) => {
            if (e.target.closest('.submenu__list')) {
                return;
            }

            if (d.classList.contains('submenu__dropdown--open')) {
                d.classList.remove('submenu__dropdown--open');
                close();
            } else {
                d.classList.add('submenu__dropdown--open');
                root.classList.remove('_close');
                root.classList.add('_open');
            }
        });
    });

    window.addEventListener('resize', () => {
        if (!isMobile()) {
            submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
            root.classList.remove('_open');
            root.classList.add('_close');
            document.body.classList.remove('hidden');
        }
    });

    submenuMobile?.addEventListener('click', (e) => {
        const link = e.target.closest('.submenu__link');
        if (link && submenuMobile.contains(link)) {
            submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
            close();
        }
    });

    return { open, close };
}


/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.js */ "./src/scripts/components/header.js");
/* harmony import */ var _components_mobile_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-nav.js */ "./src/scripts/components/mobile-nav.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion.js */ "./src/scripts/components/accordion.js");
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sliders.js */ "./src/scripts/components/sliders.js");
/* harmony import */ var _components_submenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/submenu.js */ "./src/scripts/components/submenu.js");
/* harmony import */ var _components_fancybox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fancybox.js */ "./src/scripts/components/fancybox.js");
/* harmony import */ var _components_equalizeFinancingRows_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/equalizeFinancingRows.js */ "./src/scripts/components/equalizeFinancingRows.js");
/* harmony import */ var _components_faqDetailAnchors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/faqDetailAnchors.js */ "./src/scripts/components/faqDetailAnchors.js");















document.addEventListener("DOMContentLoaded", function () {
    const navController = (0,_components_mobile_nav_js__WEBPACK_IMPORTED_MODULE_2__.mobileNav)();
    (0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.header)(navController);
    (0,_components_sliders_js__WEBPACK_IMPORTED_MODULE_4__.slidersPromo)();
    (0,_components_accordion_js__WEBPACK_IMPORTED_MODULE_3__.accordion)();
    (0,_components_sliders_js__WEBPACK_IMPORTED_MODULE_4__.slidersStatsCard)();
    (0,_components_sliders_js__WEBPACK_IMPORTED_MODULE_4__.slidersAboutFounder)();
    (0,_components_sliders_js__WEBPACK_IMPORTED_MODULE_4__.slidersOurServices)();
    (0,_components_sliders_js__WEBPACK_IMPORTED_MODULE_4__.slidersPricing)();
    (0,_components_submenu_js__WEBPACK_IMPORTED_MODULE_5__.submenuController)();
    (0,_components_sliders_js__WEBPACK_IMPORTED_MODULE_4__.slidersReviews)();
    (0,_components_fancybox_js__WEBPACK_IMPORTED_MODULE_6__.fancyboxVideo)();
    (0,_components_equalizeFinancingRows_js__WEBPACK_IMPORTED_MODULE_7__.equalizeFinancingRows)();
    window.addEventListener('resize', _components_equalizeFinancingRows_js__WEBPACK_IMPORTED_MODULE_7__.equalizeFinancingRows);
    (0,_components_faqDetailAnchors_js__WEBPACK_IMPORTED_MODULE_8__.faqDetailAnchors)();
})


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkArthur_Greyf"] = self["webpackChunkArthur_Greyf"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles","node-vendors"], () => (__webpack_require__("./src/scripts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;