(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-pages-error-pages-module"], {
    /***/
    "44QO":
    /*!******************************************************************!*\
      !*** ./src/app/pages/error-pages/error500/error500.component.ts ***!
      \******************************************************************/

    /*! exports provided: Error500Component */

    /***/
    function QO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error500Component", function () {
        return Error500Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Error500Component = /*#__PURE__*/function () {
        function Error500Component() {
          _classCallCheck(this, Error500Component);
        }

        _createClass(Error500Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error500Component;
      }();

      Error500Component.??fac = function Error500Component_Factory(t) {
        return new (t || Error500Component)();
      };

      Error500Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error500Component,
        selectors: [["app-error500"]],
        decls: 14,
        vars: 1,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-primary"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-primary-gradien", "btn-lg", 3, "routerLink"]],
        template: function Error500Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Error500Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error500',
            templateUrl: './error500.component.html',
            styleUrls: ['./error500.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ckjp":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/error-pages/error-pages-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ErrorPagesRoutingModule */

    /***/
    function Ckjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesRoutingModule", function () {
        return ErrorPagesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _error400_error400_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error400/error400.component */
      "j6OG");
      /* harmony import */


      var _error401_error401_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error401/error401.component */
      "dYBQ");
      /* harmony import */


      var _error403_error403_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error403/error403.component */
      "PHaT");
      /* harmony import */


      var _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error404/error404.component */
      "LZbx");
      /* harmony import */


      var _error500_error500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./error500/error500.component */
      "44QO");
      /* harmony import */


      var _error503_error503_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error503/error503.component */
      "ybtU");

      var routes = [{
        path: '',
        children: [{
          path: '400',
          component: _error400_error400_component__WEBPACK_IMPORTED_MODULE_2__["Error400Component"]
        }, {
          path: '401',
          component: _error401_error401_component__WEBPACK_IMPORTED_MODULE_3__["Error401Component"]
        }, {
          path: '403',
          component: _error403_error403_component__WEBPACK_IMPORTED_MODULE_4__["Error403Component"]
        }, {
          path: '404',
          component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"]
        }, {
          path: '500',
          component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_6__["Error500Component"]
        }, {
          path: '503',
          component: _error503_error503_component__WEBPACK_IMPORTED_MODULE_7__["Error503Component"]
        }]
      }];

      var ErrorPagesRoutingModule = function ErrorPagesRoutingModule() {
        _classCallCheck(this, ErrorPagesRoutingModule);
      };

      ErrorPagesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ErrorPagesRoutingModule
      });
      ErrorPagesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ErrorPagesRoutingModule_Factory(t) {
          return new (t || ErrorPagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ErrorPagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorPagesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LZbx":
    /*!******************************************************************!*\
      !*** ./src/app/pages/error-pages/error404/error404.component.ts ***!
      \******************************************************************/

    /*! exports provided: Error404Component */

    /***/
    function LZbx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
        return Error404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Error404Component = /*#__PURE__*/function () {
        function Error404Component() {
          _classCallCheck(this, Error404Component);
        }

        _createClass(Error404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error404Component;
      }();

      Error404Component.??fac = function Error404Component_Factory(t) {
        return new (t || Error404Component)();
      };

      Error404Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error404Component,
        selectors: [["app-error404"]],
        decls: 14,
        vars: 1,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-danger"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-danger-gradien", "btn-lg", 3, "routerLink"]],
        template: function Error404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Error404Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error404',
            templateUrl: './error404.component.html',
            styleUrls: ['./error404.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PHaT":
    /*!******************************************************************!*\
      !*** ./src/app/pages/error-pages/error403/error403.component.ts ***!
      \******************************************************************/

    /*! exports provided: Error403Component */

    /***/
    function PHaT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error403Component", function () {
        return Error403Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Error403Component = /*#__PURE__*/function () {
        function Error403Component() {
          _classCallCheck(this, Error403Component);
        }

        _createClass(Error403Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error403Component;
      }();

      Error403Component.??fac = function Error403Component_Factory(t) {
        return new (t || Error403Component)();
      };

      Error403Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error403Component,
        selectors: [["app-error403"]],
        decls: 14,
        vars: 1,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-success"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-success-gradien", "btn-lg", 3, "routerLink"]],
        template: function Error403Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "403");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMy5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Error403Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error403',
            templateUrl: './error403.component.html',
            styleUrls: ['./error403.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XKfY":
    /*!*********************************************************!*\
      !*** ./src/app/pages/error-pages/error-pages.module.ts ***!
      \*********************************************************/

    /*! exports provided: ErrorPagesModule */

    /***/
    function XKfY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function () {
        return ErrorPagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-pages-routing.module */
      "Ckjp");
      /* harmony import */


      var _error400_error400_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error400/error400.component */
      "j6OG");
      /* harmony import */


      var _error401_error401_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error401/error401.component */
      "dYBQ");
      /* harmony import */


      var _error403_error403_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error403/error403.component */
      "PHaT");
      /* harmony import */


      var _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./error404/error404.component */
      "LZbx");
      /* harmony import */


      var _error500_error500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./error500/error500.component */
      "44QO");
      /* harmony import */


      var _error503_error503_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./error503/error503.component */
      "ybtU");

      var ErrorPagesModule = function ErrorPagesModule() {
        _classCallCheck(this, ErrorPagesModule);
      };

      ErrorPagesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ErrorPagesModule
      });
      ErrorPagesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ErrorPagesModule_Factory(t) {
          return new (t || ErrorPagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ErrorPagesModule, {
          declarations: [_error400_error400_component__WEBPACK_IMPORTED_MODULE_3__["Error400Component"], _error401_error401_component__WEBPACK_IMPORTED_MODULE_4__["Error401Component"], _error403_error403_component__WEBPACK_IMPORTED_MODULE_5__["Error403Component"], _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_7__["Error500Component"], _error503_error503_component__WEBPACK_IMPORTED_MODULE_8__["Error503Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesRoutingModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorPagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_error400_error400_component__WEBPACK_IMPORTED_MODULE_3__["Error400Component"], _error401_error401_component__WEBPACK_IMPORTED_MODULE_4__["Error401Component"], _error403_error403_component__WEBPACK_IMPORTED_MODULE_5__["Error403Component"], _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"], _error500_error500_component__WEBPACK_IMPORTED_MODULE_7__["Error500Component"], _error503_error503_component__WEBPACK_IMPORTED_MODULE_8__["Error503Component"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dYBQ":
    /*!******************************************************************!*\
      !*** ./src/app/pages/error-pages/error401/error401.component.ts ***!
      \******************************************************************/

    /*! exports provided: Error401Component */

    /***/
    function dYBQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error401Component", function () {
        return Error401Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Error401Component = /*#__PURE__*/function () {
        function Error401Component() {
          _classCallCheck(this, Error401Component);
        }

        _createClass(Error401Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error401Component;
      }();

      Error401Component.??fac = function Error401Component_Factory(t) {
        return new (t || Error401Component)();
      };

      Error401Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error401Component,
        selectors: [["app-error401"]],
        decls: 14,
        vars: 1,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-warning"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-warning-gradien", "btn-lg", 3, "routerLink"]],
        template: function Error401Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "401");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMS5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Error401Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error401',
            templateUrl: './error401.component.html',
            styleUrls: ['./error401.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "j6OG":
    /*!******************************************************************!*\
      !*** ./src/app/pages/error-pages/error400/error400.component.ts ***!
      \******************************************************************/

    /*! exports provided: Error400Component */

    /***/
    function j6OG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error400Component", function () {
        return Error400Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Error400Component = /*#__PURE__*/function () {
        function Error400Component() {
          _classCallCheck(this, Error400Component);
        }

        _createClass(Error400Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error400Component;
      }();

      Error400Component.??fac = function Error400Component_Factory(t) {
        return new (t || Error400Component)();
      };

      Error400Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error400Component,
        selectors: [["app-error400"]],
        decls: 14,
        vars: 1,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-info"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-info-gradien", "btn-lg", 3, "routerLink"]],
        template: function Error400Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "400");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwMC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Error400Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error400',
            templateUrl: './error400.component.html',
            styleUrls: ['./error400.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ybtU":
    /*!******************************************************************!*\
      !*** ./src/app/pages/error-pages/error503/error503.component.ts ***!
      \******************************************************************/

    /*! exports provided: Error503Component */

    /***/
    function ybtU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error503Component", function () {
        return Error503Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Error503Component = /*#__PURE__*/function () {
        function Error503Component() {
          _classCallCheck(this, Error503Component);
        }

        _createClass(Error503Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Error503Component;
      }();

      Error503Component.??fac = function Error503Component_Factory(t) {
        return new (t || Error503Component)();
      };

      Error503Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: Error503Component,
        selectors: [["app-error503"]],
        decls: 14,
        vars: 1,
        consts: [[1, "error-wrapper"], [1, "container"], ["src", "assets/images/other-images/sad.png", "alt", "", 1, "img-100"], [1, "error-heading"], ["src", "assets/images/cloud-bg-1.png", "alt", "", 1, "cloud-first"], [1, "headline", "font-secondary"], ["src", "assets/images/cloud-bg-2.png", "alt", "", 1, "cloud-second"], [1, "col-md-8", "offset-md-2"], [1, "sub-content"], [1, ""], [1, "btn", "btn-secondary-gradien", "btn-lg", 3, "routerLink"]],
        template: function Error503Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "503");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "BACK TO HOME PAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/dashboard/default");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjUwMy5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Error503Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error503',
            templateUrl: './error503.component.html',
            styleUrls: ['./error503.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-error-pages-error-pages-module-es5.js.map