(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-pages-error-pages-module"],{

/***/ "44QO":
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error500/error500.component.ts ***!
  \******************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Error500Component {
    constructor() { }
    ngOnInit() { }
}
Error500Component.ɵfac = function Error500Component_Factory(t) { return new (t || Error500Component)(); };
Error500Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error500Component, selectors: [["app-error500"]], decls: 14, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-primary"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-primary-gradien", "btn-lg", 3, "routerLink"]], template: function Error500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/default");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error500Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error500',
                templateUrl: './error500.component.html',
                styleUrls: ['./error500.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ckjp":
/*!*****************************************************************!*\
  !*** ./src/app/pages/error-pages/error-pages-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesRoutingModule", function() { return ErrorPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error400_error400_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error400/error400.component */ "j6OG");
/* harmony import */ var _error401_error401_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error401/error401.component */ "dYBQ");
/* harmony import */ var _error403_error403_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error403/error403.component */ "PHaT");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error404/error404.component */ "LZbx");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error500/error500.component */ "44QO");
/* harmony import */ var _error503_error503_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error503/error503.component */ "ybtU");










const routes = [
    {
        path: '',
        children: [
            {
                path: '400',
                component: _error400_error400_component__WEBPACK_IMPORTED_MODULE_2__["Error400Component"],
            },
            {
                path: '401',
                component: _error401_error401_component__WEBPACK_IMPORTED_MODULE_3__["Error401Component"]
            },
            {
                path: '403',
                component: _error403_error403_component__WEBPACK_IMPORTED_MODULE_4__["Error403Component"]
            },
            {
                path: '404',
                component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"]
            },
            {
                path: '500',
                component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_6__["Error500Component"]
            },
            {
                path: '503',
                component: _error503_error503_component__WEBPACK_IMPORTED_MODULE_7__["Error503Component"]
            }
        ]
    }
];
class ErrorPagesRoutingModule {
}
ErrorPagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorPagesRoutingModule });
ErrorPagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorPagesRoutingModule_Factory(t) { return new (t || ErrorPagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LZbx":
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error404/error404.component.ts ***!
  \******************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Error404Component {
    constructor() { }
    ngOnInit() { }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 14, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-danger"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-danger-gradien", "btn-lg", 3, "routerLink"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/default");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error404',
                templateUrl: './error404.component.html',
                styleUrls: ['./error404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PHaT":
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error403/error403.component.ts ***!
  \******************************************************************/
/*! exports provided: Error403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error403Component", function() { return Error403Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Error403Component {
    constructor() { }
    ngOnInit() { }
}
Error403Component.ɵfac = function Error403Component_Factory(t) { return new (t || Error403Component)(); };
Error403Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error403Component, selectors: [["app-error403"]], decls: 14, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-success"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-success-gradien", "btn-lg", 3, "routerLink"]], template: function Error403Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/default");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMy5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error403Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error403',
                templateUrl: './error403.component.html',
                styleUrls: ['./error403.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XKfY":
/*!*********************************************************!*\
  !*** ./src/app/pages/error-pages/error-pages.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function() { return ErrorPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-pages-routing.module */ "Ckjp");
/* harmony import */ var _error400_error400_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error400/error400.component */ "j6OG");
/* harmony import */ var _error401_error401_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error401/error401.component */ "dYBQ");
/* harmony import */ var _error403_error403_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error403/error403.component */ "PHaT");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error404/error404.component */ "LZbx");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error500/error500.component */ "44QO");
/* harmony import */ var _error503_error503_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error503/error503.component */ "ybtU");










class ErrorPagesModule {
}
ErrorPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorPagesModule });
ErrorPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorPagesModule_Factory(t) { return new (t || ErrorPagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorPagesModule, { declarations: [_error400_error400_component__WEBPACK_IMPORTED_MODULE_3__["Error400Component"], _error401_error401_component__WEBPACK_IMPORTED_MODULE_4__["Error401Component"], _error403_error403_component__WEBPACK_IMPORTED_MODULE_5__["Error403Component"], _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_7__["Error500Component"], _error503_error503_component__WEBPACK_IMPORTED_MODULE_8__["Error503Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesRoutingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_error400_error400_component__WEBPACK_IMPORTED_MODULE_3__["Error400Component"], _error401_error401_component__WEBPACK_IMPORTED_MODULE_4__["Error401Component"], _error403_error403_component__WEBPACK_IMPORTED_MODULE_5__["Error403Component"], _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_7__["Error500Component"], _error503_error503_component__WEBPACK_IMPORTED_MODULE_8__["Error503Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dYBQ":
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error401/error401.component.ts ***!
  \******************************************************************/
/*! exports provided: Error401Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return Error401Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Error401Component {
    constructor() { }
    ngOnInit() { }
}
Error401Component.ɵfac = function Error401Component_Factory(t) { return new (t || Error401Component)(); };
Error401Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error401Component, selectors: [["app-error401"]], decls: 14, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-warning"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-warning-gradien", "btn-lg", 3, "routerLink"]], template: function Error401Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "401");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/default");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMS5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error401Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error401',
                templateUrl: './error401.component.html',
                styleUrls: ['./error401.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j6OG":
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error400/error400.component.ts ***!
  \******************************************************************/
/*! exports provided: Error400Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400Component", function() { return Error400Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Error400Component {
    constructor() { }
    ngOnInit() { }
}
Error400Component.ɵfac = function Error400Component_Factory(t) { return new (t || Error400Component)(); };
Error400Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error400Component, selectors: [["app-error400"]], decls: 14, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-info"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-info-gradien", "btn-lg", 3, "routerLink"]], template: function Error400Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/default");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMC5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error400Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error400',
                templateUrl: './error400.component.html',
                styleUrls: ['./error400.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ybtU":
/*!******************************************************************!*\
  !*** ./src/app/pages/error-pages/error503/error503.component.ts ***!
  \******************************************************************/
/*! exports provided: Error503Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error503Component", function() { return Error503Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class Error503Component {
    constructor() { }
    ngOnInit() { }
}
Error503Component.ɵfac = function Error503Component_Factory(t) { return new (t || Error503Component)(); };
Error503Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error503Component, selectors: [["app-error503"]], decls: 14, vars: 1, consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-secondary"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-secondary-gradien", "btn-lg", 3, "routerLink"]], template: function Error503Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "503");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BACK TO HOME PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/default");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMy5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error503Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error503',
                templateUrl: './error503.component.html',
                styleUrls: ['./error503.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-error-pages-error-pages-module-es2015.js.map