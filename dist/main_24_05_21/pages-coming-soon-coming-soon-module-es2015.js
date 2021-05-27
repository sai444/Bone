(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coming-soon-coming-soon-module"],{

/***/ "WXLg":
/*!********************************************************************************!*\
  !*** ./src/app/pages/coming-soon/page-with-video/page-with-video.component.ts ***!
  \********************************************************************************/
/*! exports provided: PageWithVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWithVideoComponent", function() { return PageWithVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageWithVideoComponent {
    constructor() {
        this.setTime();
    }
    setTime() {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnInit() { }
}
PageWithVideoComponent.ɵfac = function PageWithVideoComponent_Factory(t) { return new (t || PageWithVideoComponent)(); };
PageWithVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageWithVideoComponent, selectors: [["app-page-with-video"]], decls: 26, vars: 0, consts: [[1, "container-fluid", "p-0"], [1, "comingsoon", "auth-bg-video"], ["id", "bgvid", "poster", "assets/images/other-images/coming-soon-bg.jpg", "playsinline", "", "autoplay", "", "muted", "", "loop", "", 1, "bgvideo-comingsoon"], ["src", "assets/video/auth-bg.mp4", "type", "video/mp4"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", ""], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]], template: function PageWithVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WE ARE COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpdGgtdmlkZW8uY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageWithVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-with-video',
                templateUrl: './page-with-video.component.html',
                styleUrls: ['./page-with-video.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XvYO":
/*!**************************************************************!*\
  !*** ./src/app/pages/coming-soon/simple/simple.component.ts ***!
  \**************************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { count } from 'rxjs/operators';
// export interface Time {
// }
class SimpleComponent {
    constructor() {
        this.setTime();
    }
    setTime() {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnInit() { }
}
SimpleComponent.ɵfac = function SimpleComponent_Factory(t) { return new (t || SimpleComponent)(); };
SimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleComponent, selectors: [["app-simple"]], decls: 24, vars: 0, consts: [[1, "container-fluid", "p-0"], [1, "comingsoon"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", ""], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]], template: function SimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WE ARE COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple',
                templateUrl: './simple.component.html',
                styleUrls: ['./simple.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lfE2":
/*!*****************************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComingSoonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonRoutingModule", function() { return ComingSoonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple/simple.component */ "XvYO");
/* harmony import */ var _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-with-video/page-with-video.component */ "WXLg");
/* harmony import */ var _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-with-image/page-with-image.component */ "qKlz");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'page',
                component: _simple_simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"]
            },
            {
                path: 'page/image',
                component: _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_4__["PageWithImageComponent"]
            },
            {
                path: 'page/video',
                component: _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_3__["PageWithVideoComponent"]
            }
        ]
    }
];
class ComingSoonRoutingModule {
}
ComingSoonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComingSoonRoutingModule });
ComingSoonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComingSoonRoutingModule_Factory(t) { return new (t || ComingSoonRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComingSoonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingSoonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qKlz":
/*!********************************************************************************!*\
  !*** ./src/app/pages/coming-soon/page-with-image/page-with-image.component.ts ***!
  \********************************************************************************/
/*! exports provided: PageWithImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWithImageComponent", function() { return PageWithImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageWithImageComponent {
    constructor() {
        this.setTime();
    }
    setTime() {
        setInterval(function () {
            var countDown = new Date('Sep 30, 2019 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnInit() { }
}
PageWithImageComponent.ɵfac = function PageWithImageComponent_Factory(t) { return new (t || PageWithImageComponent)(); };
PageWithImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageWithImageComponent, selectors: [["app-page-with-image"]], decls: 24, vars: 0, consts: [[1, "container-fluid", "p-0", "m-0"], [1, "comingsoon", "comingsoon-bgimg"], [1, "comingsoon-inner", "text-center"], ["src", "assets/images/other-images/coming-soon-Logo.png", "alt", ""], ["id", "clockdiv", 1, "countdown"], ["id", "days", 1, "time", "digits"], [1, "title"], ["id", "hours", 1, "time", "digits"], ["id", "minutes", 1, "time", "digits"], ["id", "seconds", 1, "time", "digits"]], template: function PageWithImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WE ARE COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpdGgtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageWithImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-with-image',
                templateUrl: './page-with-image.component.html',
                styleUrls: ['./page-with-image.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wOFA":
/*!*********************************************************!*\
  !*** ./src/app/pages/coming-soon/coming-soon.module.ts ***!
  \*********************************************************/
/*! exports provided: ComingSoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon-routing.module */ "lfE2");
/* harmony import */ var _simple_simple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple/simple.component */ "XvYO");
/* harmony import */ var _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-with-image/page-with-image.component */ "qKlz");
/* harmony import */ var _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-with-video/page-with-video.component */ "WXLg");







class ComingSoonModule {
}
ComingSoonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComingSoonModule });
ComingSoonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComingSoonModule_Factory(t) { return new (t || ComingSoonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComingSoonRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComingSoonModule, { declarations: [_simple_simple_component__WEBPACK_IMPORTED_MODULE_3__["SimpleComponent"], _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_4__["PageWithImageComponent"], _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_5__["PageWithVideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComingSoonRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingSoonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_simple_simple_component__WEBPACK_IMPORTED_MODULE_3__["SimpleComponent"], _page_with_image_page_with_image_component__WEBPACK_IMPORTED_MODULE_4__["PageWithImageComponent"], _page_with_video_page_with_video_component__WEBPACK_IMPORTED_MODULE_5__["PageWithVideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComingSoonRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-coming-soon-coming-soon-module-es2015.js.map