(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sample-page-sample-page-module"], {
    /***/
    "0vw+":
    /*!**************************************************************!*\
      !*** ./src/app/components/sample-page/sample-page.module.ts ***!
      \**************************************************************/

    /*! exports provided: SamplePageModule */

    /***/
    function vw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageModule", function () {
        return SamplePageModule;
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


      var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sample-page-routing.module */
      "B9FH");
      /* harmony import */


      var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sample-page.component */
      "PsGq");

      var SamplePageModule = function SamplePageModule() {
        _classCallCheck(this, SamplePageModule);
      };

      SamplePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SamplePageModule
      });
      SamplePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SamplePageModule_Factory(t) {
          return new (t || SamplePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePageModule, {
          declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SamplePageRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "B9FH":
    /*!**********************************************************************!*\
      !*** ./src/app/components/sample-page/sample-page-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SamplePageRoutingModule */

    /***/
    function B9FH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function () {
        return SamplePageRoutingModule;
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


      var _sample_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sample-page.component */
      "PsGq");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _sample_page_component__WEBPACK_IMPORTED_MODULE_2__["SamplePageComponent"],
          data: {
            title: "Sample Page",
            breadcrumb: ""
          }
        }]
      }];

      var SamplePageRoutingModule = function SamplePageRoutingModule() {
        _classCallCheck(this, SamplePageRoutingModule);
      };

      SamplePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SamplePageRoutingModule
      });
      SamplePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SamplePageRoutingModule_Factory(t) {
          return new (t || SamplePageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageRoutingModule, [{
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
    "PsGq":
    /*!*****************************************************************!*\
      !*** ./src/app/components/sample-page/sample-page.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SamplePageComponent */

    /***/
    function PsGq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function () {
        return SamplePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SamplePageComponent = /*#__PURE__*/function () {
        function SamplePageComponent() {
          _classCallCheck(this, SamplePageComponent);
        }

        _createClass(SamplePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SamplePageComponent;
      }();

      SamplePageComponent.ɵfac = function SamplePageComponent_Factory(t) {
        return new (t || SamplePageComponent)();
      };

      SamplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SamplePageComponent,
        selectors: [["app-sample-page"]],
        decls: 12,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"]],
        template: function SamplePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sample Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "lorem ipsum dolor sit amet, consectetur adipisicing elit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sample-page',
            templateUrl: './sample-page.component.html',
            styleUrls: ['./sample-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-sample-page-sample-page-module-es5.js.map