(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+803":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators */
      "yrbL");
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(activatedRoute, router) {
          var _this = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this.activatedRoute;
          })).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (route) {
            return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"];
          })).subscribe(function (route) {
            var snapshot = _this.router.routerState.snapshot;
            var title = route.snapshot.data['title'];
            var parent = route.parent.snapshot.data['breadcrumb'];
            var child = route.snapshot.data['breadcrumb'];
            _this.breadcrumbs = {};
            _this.title = title;
            _this.breadcrumbs = {
              "parentBreadcrumb": parent,
              "childBreadcrumb": child
            };
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 0,
        vars: 0,
        template: function BreadcrumbComponent_Template(rf, ctx) {},
        styles: [".ProfileCard-realName[_ngcontent-%COMP%]   .realname[_ngcontent-%COMP%] {\n  color: #949598 !important;\n}\n\n.offcanvas-bookmark.page-wrapper[_ngcontent-%COMP%]   .page-body-wrapper[_ngcontent-%COMP%]   .page-body[_ngcontent-%COMP%]   .bookmark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.bookmark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #313131;\n}\n\ni.fa.fa-star-o.f-18.mt-1.starred[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7RUFDSSxjQUFlO0FBQ25COztBQUVBO0VBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlByb2ZpbGVDYXJkLXJlYWxOYW1lIC5yZWFsbmFtZSB7XHJcbiAgICBjb2xvcjogIzk0OTU5OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub2ZmY2FudmFzLWJvb2ttYXJrLnBhZ2Utd3JhcHBlciAucGFnZS1ib2R5LXdyYXBwZXIgLnBhZ2UtYm9keSAuYm9va21hcmsgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ib29rbWFyayB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjMzEzMTMxIDtcclxufVxyXG5cclxuaS5mYS5mYS1zdGFyLW8uZi0xOC5tdC0xLnN0YXJyZWQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4iXX0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/ubuntu/Desktop/b1/B1/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0AgT":
    /*!**********************************************!*\
      !*** ./src/app/shared/routes/full.routes.ts ***!
      \**********************************************/

    /*! exports provided: full */

    /***/
    function AgT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "full", function () {
        return full;
      });

      var full = [{
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-error-pages-error-pages-module */
          "pages-error-pages-error-pages-module").then(__webpack_require__.bind(null,
          /*! ../../pages/error-pages/error-pages.module */
          "XKfY")).then(function (m) {
            return m.ErrorPagesModule;
          });
        }
      }, {
        path: 'authentication',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-authentication-authentication-module */
          "pages-authentication-authentication-module").then(__webpack_require__.bind(null,
          /*! ../../pages/authentication/authentication.module */
          "CAGU")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }, {
        path: 'comingsoon',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-coming-soon-coming-soon-module */
          "pages-coming-soon-coming-soon-module").then(__webpack_require__.bind(null,
          /*! ../../pages/coming-soon/coming-soon.module */
          "wOFA")).then(function (m) {
            return m.ComingSoonModule;
          });
        }
      }, {
        path: 'maintenance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-maintenance-maintenance-module */
          "pages-maintenance-maintenance-module").then(__webpack_require__.bind(null,
          /*! ../../pages/maintenance/maintenance.module */
          "bUxz")).then(function (m) {
            return m.MaintenanceModule;
          });
        }
      }];
      /***/
    },

    /***/
    "0VKv":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CustomizerComponent */

    /***/
    function VKv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function () {
        return CustomizerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_customizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/customizer.service */
      "hFtW");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CustomizerComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customizer configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_18_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To replace our design with your desired theme. Please do configuration as mention ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Path : shared > data > config > config.ts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n                  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_18_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.copyText(ctx_r4.customize.data);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copy Json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["\nexport class ConfigDB {\n   static data = {\n   settings: {\n   layout_type: '", ctx_r1.customize.data.settings.layout_type, "',\n   sidebar: {\n      type: '", ctx_r1.customize.data.settings.sidebar.type, "',\n      body_type: '", ctx_r1.customize.data.settings.sidebar.body_type, "'\n   },\n   sidebar_setting: '", ctx_r1.customize.data.settings.sidebar_setting, "',\n   sidebar_backround: '", ctx_r1.customize.data.settings.sidebar_backround, "'\n},\ncolor: {\n   layout_version: '", ctx_r1.customize.data.color.layout_version, "',\n   color: '", ctx_r1.customize.data.color.color, "',\n   primary_color: '", ctx_r1.customize.data.color.primary_color, "',\n   secondary_color: '", ctx_r1.customize.data.color.secondary_color, "',\n   mix_layout: '", ctx_r1.customize.data.color.mix_layout, "'\n},\nrouter_animation: 'fadeIn'\n}\n}\n"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "active show": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "active": a0
        };
      };

      var CustomizerComponent = /*#__PURE__*/function () {
        function CustomizerComponent(customize, modalService, toastrService) {
          _classCallCheck(this, CustomizerComponent);

          this.customize = customize;
          this.modalService = modalService;
          this.toastrService = toastrService;
          this.sidebarSetting = 'color';
          this.layoutType = 'ltr';
          this.sidebarType = 'default';
          this.customize.data.color.layout_version = localStorage.getItem("layoutVersion");
          this.customize.data.color.color = localStorage.getItem("color");
          this.customize.data.color.primary_color = localStorage.getItem("primary_color");
          this.customize.data.color.secondary_color = localStorage.getItem("secondary_color");
        } // Open customizer


        _createClass(CustomizerComponent, [{
          key: "openCustomizerSetting",
          value: function openCustomizerSetting(val) {
            this.customizer = val;
          } // Sidebar customizer Settings

        }, {
          key: "customizerSetting",
          value: function customizerSetting(val) {
            this.sidebarSetting = val;
          } // Customize Layout Type

        }, {
          key: "customizeLayoutType",
          value: function customizeLayoutType(val) {
            this.customize.setLayoutType(val);
            this.layoutType = val;
          } // Customize Sidebar Type

        }, {
          key: "customizeSidebarType",
          value: function customizeSidebarType(val) {
            if (val == 'default') {
              this.customize.data.settings.sidebar.type = 'compact-wrapper';
              this.customize.data.settings.sidebar.body_type = 'sidebar-icon'; // this.customize.data.settings.sidebar.type = 'default';
              // this.customize.data.settings.sidebar.body_type = 'default';
            } else if (val == 'compact') {
              this.customize.data.settings.sidebar.type = 'compact-wrapper';
              this.customize.data.settings.sidebar.body_type = 'sidebar-icon';
            } else if (val == 'compact-icon') {
              this.customize.data.settings.sidebar.type = 'compact-page';
              this.customize.data.settings.sidebar.body_type = 'sidebar-hover';
            }

            this.sidebarType = val;
          } // Customize Sidebar Setting

        }, {
          key: "customizeSidebarSetting",
          value: function customizeSidebarSetting(val) {
            this.customize.data.settings.sidebar_setting = val;
          } // Customize Sidebar Backround

        }, {
          key: "customizeSidebarBackround",
          value: function customizeSidebarBackround(val) {
            this.customize.data.settings.sidebar_backround = val;
          } // Customize Mix Layout

        }, {
          key: "customizeMixLayout",
          value: function customizeMixLayout(val) {
            this.customize.setLayout(val);
          } // Customize Light Color

        }, {
          key: "customizeLightColorScheme",
          value: function customizeLightColorScheme(val) {
            this.customize.setColorLightScheme(val);
          } // Customize Dark Color

        }, {
          key: "customizeDarkColorScheme",
          value: function customizeDarkColorScheme(val) {
            this.customize.setColorDarkScheme(val);
          } //Display modal for copy config

        }, {
          key: "copyConfig",
          value: function copyConfig(popup, data) {
            this.modalService.open(popup, {
              backdropClass: 'dark-modal',
              centered: true
            });
            data = this.customize.data;
          } //Copy config

        }, {
          key: "copyText",
          value: function copyText(data) {
            var selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = JSON.stringify(data);
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', {
              closeButton: true,
              enableHtml: true,
              positionClass: 'toast-bottom-right'
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customizeMixLayout('dark-only');
            this.customizeSidebarType('compact');
          }
        }]);

        return CustomizerComponent;
      }();

      CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
        return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__["CustomizerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      CustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomizerComponent,
        selectors: [["app-customizer"]],
        decls: 244,
        vars: 60,
        consts: [["id", "inner-customizer", 1, "customizer-links", 3, "ngClass"], ["id", "c-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nac-pills"], ["href", "javascript:void(0)", "id", "c-pills-home-tab", 1, "nav-link", 3, "ngClass", "click"], [1, "settings"], [1, "icofont", "icofont-ui-settings"], ["href", "javascript:void(0)", "id", "c-pills-profile-tab", 1, "nav-link", 3, "ngClass", "click"], [1, "settings", "color-settings"], [1, "icofont", "icofont-color-bucket"], [1, "customizer-contain", 3, "ngClass"], ["id", "c-pills-tabContent", 1, "tab-content"], [1, "customizer-header"], [1, "icofont-close", "icon-close", 3, "click"], [1, "mb-0"], [1, "btn", "btn-primary", "plus-popup", "mt-2", 3, "click"], ["popup", ""], [1, "customizer-body", "custom-scrollbar"], ["id", "c-pills-home", "role", "tabpanel", "aria-labelledby", "c-pills-home-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "main-layout", "layout-grid"], ["data-attr", "ltr", 3, "ngClass", "click"], [1, "header", "bg-light"], [1, "body"], [1, "bg-dark", "sidebar"], [1, "bg-light", "body"], [1, "badge", "badge-dark"], ["data-attr", "rtl", 3, "ngClass", "click"], [1, ""], [1, "sidebar-type", "layout-grid"], ["data-attr", "normal-sidebar", 3, "ngClass", "click"], ["data-attr", "compact-sidebar", 3, "ngClass", "click"], [1, "bg-dark", "sidebar", "compact"], ["data-attr", "compact-icon-sidebar", 3, "ngClass", "click"], [1, "bg-dark", "sidebar", "compact-icon"], [1, "sidebar-setting", "layout-grid"], ["data-attr", "default-sidebar", 3, "ngClass", "click"], [1, "body", "bg-light"], ["data-attr", "border-sidebar", 3, "ngClass", "click"], ["data-attr", "iconcolor-sidebar", 3, "ngClass", "click"], ["id", "c-pills-profile", "role", "tabpanel", "aria-labelledby", "c-pills-profile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "layout-grid", "customizer-color"], ["data-attr", "light-1", "data-primary", "#4466f2", "data-secondary", "#1ea6ec", 1, "color-layout", 3, "click"], ["data-attr", "light-2", "data-primary", "#0288d1", "data-secondary", "#26c6da", 1, "color-layout", 3, "click"], ["data-attr", "light-3", "data-primary", "#8e24aa", "data-secondary", "#ff6e40", 1, "color-layout", 3, "click"], ["data-attr", "light-4", "data-primary", "#4c2fbf", "data-secondary", "#2e9de4", 1, "color-layout", 3, "click"], ["data-attr", "light-5", "data-primary", "#7c4dff", "data-secondary", "#7b1fa2", 1, "color-layout", 3, "click"], ["data-attr", "light-6", "data-primary", "#3949ab", "data-secondary", "#4fc3f7", 1, "color-layout", 3, "click"], [1, "layout-grid", "customizer-color", "dark"], ["data-attr", "dark-1", "data-primary", "#4466f2", "data-secondary", "#1ea6ec", 1, "color-layout", 3, "click"], ["data-attr", "dark-2", "data-primary", "#0288d1", "data-secondary", "#26c6da", 1, "color-layout", 3, "click"], ["data-attr", "dark-3", "data-primary", "#8e24aa", "data-secondary", "#ff6e40", 1, "color-layout", 3, "click"], ["data-attr", "dark-4", "data-primary", "#4c2fbf", "data-secondary", "#2e9de4", 1, "color-layout", 3, "click"], ["data-attr", "dark-5", "data-primary", "#7c4dff", "data-secondary", "#7b1fa2", 1, "color-layout", 3, "click"], ["data-attr", "dark-6", "data-primary", "#3949ab", "data-secondary", "#4fc3f7", 1, "color-layout", 3, "click"], [1, "layout-grid", "customizer-mix"], ["data-attr", "light-only", 1, "color-layout", 3, "click"], [1, "bg-light", "sidebar"], ["data-attr", "", 1, "color-layout", 3, "click"], ["data-attr", "dark-body-only", 1, "color-layout", 3, "click"], [1, "bg-dark", "body"], ["data-attr", "dark-sidebar-body-mix", 1, "color-layout", 3, "click"], ["data-attr", "dark-header-sidebar-mix", 1, "color-layout", 3, "click"], [1, "header", "bg-dark"], ["data-attr", "dark-only", 1, "color-layout", 3, "click"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nac-pills"], [1, "nav-item"], ["href", "javascript:void(0)", "id", "pills-home-tab", 1, "nav-link", 3, "ngClass", "click"], ["href", "javascript:void(0)", "id", "pills-profile-tab", 1, "nav-link", 3, "ngClass", "click"], ["href", "javascript:void(0)", "id", "pills-contact-tab", 1, "nav-link", 3, "ngClass", "click"], ["id", "pills-tabContent", 1, "tab-content", "sidebar-main-bg-setting"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "sidebar-bg-settings"], ["data-attr", "dark-sidebar", 1, "bg-dark", 3, "click"], ["data-attr", "light-sidebar", 1, "bg-white", 3, "click"], ["data-attr", "color1-sidebar", 1, "bg-color1", 3, "click"], ["data-attr", "color2-sidebar", 1, "bg-color2", 3, "click"], ["data-attr", "color3-sidebar", 1, "bg-color3", 3, "click"], ["data-attr", "color4-sidebar", 1, "bg-color4", 3, "click"], ["data-attr", "color5-sidebar", 1, "bg-color5", 3, "click"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade", 3, "ngClass"], ["data-attr", "sidebar-pattern1", 1, "bg-pattern1", 3, "click"], ["data-attr", "sidebar-pattern2", 1, "bg-pattern2", 3, "click"], ["data-attr", "sidebar-pattern3", 1, "bg-pattern3", 3, "click"], ["data-attr", "sidebar-pattern4", 1, "bg-pattern4", 3, "click"], ["data-attr", "sidebar-pattern5", 1, "bg-pattern5", 3, "click"], ["data-attr", "sidebar-pattern6", 1, "bg-pattern6", 3, "click"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade", 3, "ngClass"], ["data-attr", "sidebar-img1", 1, "bg-img1", 3, "click"], ["data-attr", "sidebar-img2", 1, "bg-img2", 3, "click"], ["data-attr", "sidebar-img3", 1, "bg-img3", 3, "click"], ["data-attr", "sidebar-img4", 1, "bg-img4", 3, "click"], ["data-attr", "sidebar-img5", 1, "bg-img5", 3, "click"], ["data-attr", "sidebar-img6", 1, "bg-img6", 3, "click"], [1, "modal-header", "modal-copy-header"], [1, "headerTitle", "mb-0"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-header", "config-popup"], [1, "btn", "btn-primary", "mt-2", 3, "click"]],
        template: function CustomizerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() {
              return ctx.openCustomizerSetting("settings");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_5_listener() {
              return ctx.openCustomizerSetting("color");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_i_click_11_listener() {
              return ctx.customizer = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Customizer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Customize & Preview Real Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

              return ctx.copyConfig(_r0, ctx.data);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomizerComponent_ng_template_18_Template, 20, 10, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Layout Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_25_listener() {
              return ctx.customizeLayoutType("ltr");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "LTR Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_37_listener() {
              return ctx.customizeLayoutType("rtl");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "RTL Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sidebar Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_52_listener() {
              return ctx.customizeSidebarType("default");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_62_listener() {
              return ctx.customizeSidebarType("compact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "li", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_72_listener() {
              return ctx.customizeSidebarType("compact-icon");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sidebar settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_85_listener() {
              return ctx.customizeSidebarSetting("default-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_94_listener() {
              return ctx.customizeSidebarSetting("border-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_103_listener() {
              return ctx.customizeSidebarSetting("iconcolor-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "icon Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Light layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_116_listener() {
              return ctx.customizeLightColorScheme("color-1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_118_listener() {
              return ctx.customizeLightColorScheme("color-2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_120_listener() {
              return ctx.customizeLightColorScheme("color-3");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_122_listener() {
              return ctx.customizeLightColorScheme("color-4");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_124_listener() {
              return ctx.customizeLightColorScheme("color-5");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_126_listener() {
              return ctx.customizeLightColorScheme("color-6");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Dark Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_131_listener() {
              return ctx.customizeDarkColorScheme("color-1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_133_listener() {
              return ctx.customizeDarkColorScheme("color-2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_135_listener() {
              return ctx.customizeDarkColorScheme("color-3");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_137_listener() {
              return ctx.customizeDarkColorScheme("color-4");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_139_listener() {
              return ctx.customizeDarkColorScheme("color-5");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_141_listener() {
              return ctx.customizeDarkColorScheme("color-6");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Mix Layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_146_listener() {
              return ctx.customizeMixLayout("light-only");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_156_listener() {
              return ctx.customizeMixLayout("default");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_166_listener() {
              return ctx.customizeMixLayout("dark-body-only");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "li", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_176_listener() {
              return ctx.customizeMixLayout("dark-sidebar-body-mix");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_186_listener() {
              return ctx.customizeMixLayout("dark-header-sidebar-mix");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_196_listener() {
              return ctx.customizeMixLayout("dark-only");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h6", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Sidebar background setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_210_listener() {
              return ctx.customizerSetting("color");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_213_listener() {
              return ctx.customizerSetting("pattern");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Pattern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_216_listener() {
              return ctx.customizerSetting("image");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ul", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_221_listener() {
              return ctx.customizeSidebarBackround("dark-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_222_listener() {
              return ctx.customizeSidebarBackround("light-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_223_listener() {
              return ctx.customizeSidebarBackround("color1-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_224_listener() {
              return ctx.customizeSidebarBackround("color2-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_225_listener() {
              return ctx.customizeSidebarBackround("color3-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_226_listener() {
              return ctx.customizeSidebarBackround("color4-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_227_listener() {
              return ctx.customizeSidebarBackround("color5-sidebar");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "ul", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_230_listener() {
              return ctx.customizeSidebarBackround("sidebar-pattern1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_231_listener() {
              return ctx.customizeSidebarBackround("sidebar-pattern2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_232_listener() {
              return ctx.customizeSidebarBackround("sidebar-pattern3");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_233_listener() {
              return ctx.customizeSidebarBackround("sidebar-pattern4");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_234_listener() {
              return ctx.customizeSidebarBackround("sidebar-pattern5");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_235_listener() {
              return ctx.customizeSidebarBackround("sidebar-pattern6");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "ul", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_238_listener() {
              return ctx.customizeSidebarBackround("sidebar-img1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_239_listener() {
              return ctx.customizeSidebarBackround("sidebar-img2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_240_listener() {
              return ctx.customizeSidebarBackround("sidebar-img3");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "li", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_241_listener() {
              return ctx.customizeSidebarBackround("sidebar-img4");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_242_listener() {
              return ctx.customizeSidebarBackround("sidebar-img5");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_243_listener() {
              return ctx.customizeSidebarBackround("sidebar-img6");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.customizer));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.customizer == "settings"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.customizer == "color"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.customizer));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.customizer == "settings"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c2, ctx.layoutType == "ltr"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c2, ctx.layoutType == "rtl"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c2, ctx.sidebarType == "default"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c2, ctx.sidebarType == "compact"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c2, ctx.sidebarType == "compact-icon"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c2, ctx.customize.data.settings.sidebar_setting == "default-sidebar"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c2, ctx.customize.data.settings.sidebar_setting == "border-sidebar"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c2, ctx.customize.data.settings.sidebar_setting == "iconcolor-sidebar"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, ctx.customizer == "color"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx.sidebarSetting == "color"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c1, ctx.sidebarSetting == "pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c1, ctx.sidebarSetting == "image"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c1, ctx.sidebarSetting == "color"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c1, ctx.sidebarSetting == "pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c1, ctx.sidebarSetting == "image"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        styles: [".config-popup[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLXBvcHVwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufSJdfQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customizer',
            templateUrl: './customizer.component.html',
            styleUrls: ['./customizer.component.scss']
          }]
        }], function () {
          return [{
            type: _services_customizer_service__WEBPACK_IMPORTED_MODULE_1__["CustomizerService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0yvB":
    /*!************************************************!*\
      !*** ./src/app/shared/services/nav.service.ts ***!
      \************************************************/

    /*! exports provided: NavService */

    /***/
    function yvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavService", function () {
        return NavService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NavService = /*#__PURE__*/function () {
        function NavService() {
          _classCallCheck(this, NavService);

          this.collapseSidebar = false;
          this.fullScreen = false;
          this.MENUITEMS = [{
            title: 'Dashboard',
            icon: 'home',
            type: 'sub',
            badgeType: 'primary',
            badgeValue: 'new',
            active: false,
            children: [{
              path: '/dashboard/default',
              title: 'Default',
              type: 'link'
            }, {
              path: '/dashboard/e-commerce',
              title: 'E-Commerce',
              type: 'link'
            }, {
              path: '/dashboard/university',
              title: 'University',
              type: 'link'
            }, {
              path: '/dashboard/bitcoin',
              title: 'Crypto',
              type: 'link'
            }, {
              path: '/dashboard/server',
              title: 'Server',
              type: 'link'
            }, {
              path: '/dashboard/project',
              title: 'Project',
              type: 'link'
            }]
          }, {
            title: 'Widgets',
            icon: 'airplay',
            type: 'sub',
            active: false,
            children: [{
              path: '/widgets/general',
              title: 'General',
              type: 'link'
            }, {
              path: '/widgets/chart',
              title: 'Chart',
              type: 'link'
            }]
          }, {
            title: 'UI-Elements',
            icon: 'slack',
            type: 'sub',
            active: false,
            children: [{
              path: '/ui-elements/avatars',
              title: 'Avatars',
              type: 'link'
            }, {
              path: '/ui-elements/breadcrumb',
              title: 'Breadcrumb',
              type: 'link'
            }, {
              path: '/ui-elements/grid',
              title: 'Grid',
              type: 'link'
            }, {
              path: '/ui-elements/helper-classes',
              title: 'Helper-Classes',
              type: 'link'
            }, {
              path: '/ui-elements/list',
              title: 'List',
              type: 'link'
            }, {
              path: '/ui-elements/ribbons',
              title: 'Ribbons',
              type: 'link'
            }, {
              path: '/ui-elements/shadow',
              title: 'Shadow',
              type: 'link'
            }, {
              path: '/ui-elements/spinner',
              title: 'Spinner',
              type: 'link'
            }, {
              path: '/ui-elements/state-color',
              title: 'State-color',
              type: 'link'
            }, {
              path: '/ui-elements/steps',
              title: 'Steps',
              type: 'link'
            }, {
              path: '/ui-elements/tag-n-pills',
              title: 'Tag and Pills',
              type: 'link'
            }, {
              path: '/ui-elements/typography',
              title: 'Typography',
              type: 'link'
            }]
          }, {
            title: 'Base',
            icon: 'box',
            type: 'sub',
            active: false,
            children: [{
              path: '/base/accordion',
              title: 'Accordion',
              type: 'link'
            }, {
              path: '/base/alert',
              title: 'Alert',
              type: 'link'
            }, {
              path: '/base/buttons',
              title: 'Buttons',
              type: 'link'
            }, {
              path: '/base/carousel',
              title: 'Carousel',
              type: 'link'
            }, {
              path: '/base/collapse',
              title: 'Collapse',
              type: 'link'
            }, {
              path: '/base/datepicker',
              title: 'Datepicker',
              type: 'link'
            }, {
              path: '/base/dropdown',
              title: 'Dropdown',
              type: 'link'
            }, {
              path: '/base/modal',
              title: 'Modal',
              type: 'link'
            }, {
              path: '/base/pagination',
              title: 'Pagination',
              type: 'link'
            }, {
              path: '/base/popover',
              title: 'Popover',
              type: 'link'
            }, {
              path: '/base/progressbar',
              title: 'Progressbar',
              type: 'link'
            }, {
              path: '/base/rating',
              title: 'Rating',
              type: 'link'
            }, {
              path: '/base/tabset',
              title: 'Tabset',
              type: 'link'
            }, {
              path: '/base/timepicker',
              title: 'Timepicker',
              type: 'link'
            }, {
              path: '/base/tooltip',
              title: 'Tooltip',
              type: 'link'
            }, {
              path: '/base/typeahead',
              title: 'Typeahead',
              type: 'link'
            }]
          }, {
            title: 'Advance',
            icon: 'folder-plus',
            type: 'sub',
            active: false,
            children: [{
              path: '/advance/drag-drop',
              title: 'Drag and Drop',
              type: 'link'
            }, {
              path: '/advance/dropzone',
              title: 'Dropzone',
              type: 'link'
            }, {
              path: '/advance/crop',
              title: 'Image Cropper',
              type: 'link'
            }, {
              path: '/advance/toastr',
              title: 'Ngx Toastr',
              type: 'link'
            }, {
              path: '/advance/owl-carousel',
              title: 'Owl-Carousel',
              type: 'link'
            }, {
              path: '/advance/range-slider',
              title: 'Range Slider',
              type: 'link'
            }, {
              path: '/advance/scrollable',
              title: 'Scrollable',
              type: 'link'
            }, {
              path: '/advance/sticky',
              title: 'Sticky',
              type: 'link'
            }, {
              path: '/advance/sweetalert',
              title: 'SweetAlert',
              type: 'link'
            }, {
              path: '/advance/upload',
              title: 'Upload',
              type: 'link'
            }]
          }, {
            title: 'Icons',
            icon: 'command',
            type: 'sub',
            active: false,
            children: [{
              path: '/icons/flag',
              title: 'Flag icon',
              type: 'link'
            }, {
              path: '/icons/fontawesome',
              title: 'Fontawesome Icon',
              type: 'link'
            }, {
              path: '/icons/ico',
              title: 'Ico Icon',
              type: 'link'
            }, {
              path: '/icons/themify',
              title: 'Themify Icon',
              type: 'link'
            }, {
              path: '/icons/feather',
              title: 'Feather Icon',
              type: 'link'
            }, {
              path: '/icons/whether',
              title: 'Whether Icon',
              type: 'link'
            }]
          }, {
            title: 'Buttons',
            icon: 'cloud',
            type: 'sub',
            active: false,
            children: [{
              path: '/buttons/default',
              title: 'Default Style',
              type: 'link'
            }, {
              path: '/buttons/flat',
              title: 'Flat Style',
              type: 'link'
            }, {
              path: '/buttons/edge',
              title: 'Edge Style',
              type: 'link'
            }, {
              path: '/buttons/raised',
              title: 'Raised Style',
              type: 'link'
            }, {
              path: '/buttons/group',
              title: 'Button Group',
              type: 'link'
            }]
          }, {
            title: 'Gallery',
            icon: 'book',
            type: 'sub',
            children: [{
              path: '/gallery/gallery-grid',
              title: 'Gallery Grid',
              type: 'link'
            }, {
              path: '/gallery/gallery-desc',
              title: 'Gallery Grid With Desc',
              type: 'link'
            }, {
              path: '/gallery/mesonry',
              title: 'Masonry Gallery',
              type: 'link'
            }, {
              path: '/gallery/hover-effect',
              title: 'Hover Effect',
              type: 'link'
            }]
          }, {
            title: 'Forms',
            icon: 'file-text',
            type: 'sub',
            active: false,
            children: [{
              title: 'Form Controls',
              type: 'sub',
              children: [{
                path: '/form/validation',
                title: 'Form Validation',
                type: 'link'
              }, {
                path: '/form/inputs',
                title: 'Base Inputs',
                type: 'link'
              }, {
                path: '/form/checkbox-radio',
                title: 'Checkbox & Radio',
                type: 'link'
              }, {
                path: '/form/input-groups',
                title: 'Input Groups',
                type: 'link'
              }, {
                path: '/form/mega-options',
                title: 'Mega Options',
                type: 'link'
              }]
            }, {
              path: '/form/form-default',
              title: 'Form Default',
              type: 'link'
            }, {
              path: '/form/wizard',
              title: 'Ngx Wizard',
              type: 'link'
            }]
          }, {
            title: 'Tables',
            icon: 'server',
            type: 'sub',
            active: false,
            children: [{
              title: 'Bootstrap Tables',
              type: 'sub',
              active: false,
              children: [{
                path: '/table/basic',
                title: 'Basic Table',
                type: 'link'
              }, {
                path: '/table/sizing',
                title: 'Sizing Table',
                type: 'link'
              }, {
                path: '/table/border',
                title: 'Border Table',
                type: 'link'
              }, {
                path: '/table/styling',
                title: 'Styling Table',
                type: 'link'
              }]
            }, {
              title: 'Ngx-Datatables',
              type: 'sub',
              active: false,
              children: [{
                path: '/table/ngx-datatables/basic',
                title: 'Basic Table',
                type: 'link'
              }, {
                path: '/table/ngx-datatables/editing',
                title: 'Editing Table',
                type: 'link'
              }, {
                path: '/table/ngx-datatables/filter',
                title: 'Filter Table',
                type: 'link'
              }, {
                path: '/table/ngx-datatables/fullscreen',
                title: 'Fullscreen Table',
                type: 'link'
              }, {
                path: '/table/ngx-datatables/paging',
                title: 'Paging Table',
                type: 'link'
              }, {
                path: '/table/ngx-datatables/selection',
                title: 'Selection',
                type: 'link'
              }, {
                path: '/table/ngx-datatables/sort',
                title: 'Sorting Table',
                type: 'link',
                active: false
              }]
            }]
          }, {
            title: 'Cards',
            icon: 'book',
            type: 'sub',
            active: false,
            children: [{
              path: '/cards/basic',
              title: 'Basic Card',
              type: 'link'
            }, {
              path: '/cards/creative',
              title: 'Creative Card',
              type: 'link'
            }, {
              path: '/cards/tabbed',
              title: 'Tabbed Card',
              type: 'link'
            }, {
              path: '/cards/draggable',
              title: 'Draggable Card',
              type: 'link'
            }]
          }, {
            title: 'Timeline',
            icon: 'sliders',
            type: 'sub',
            active: false,
            children: [{
              path: '/timeline/timeline1',
              title: 'Timeline 1',
              type: 'link'
            }, {
              path: '/timeline/timeline2',
              title: 'Timeline 2',
              type: 'link'
            }]
          }, {
            title: 'Charts',
            icon: 'bar-chart',
            type: 'sub',
            active: false,
            children: [{
              path: '/chart/google',
              title: 'Google Chart',
              type: 'link'
            }, {
              path: '/chart/chartjs',
              title: 'Chartjs',
              type: 'link'
            }, {
              path: '/chart/chartist',
              title: 'Chartist',
              type: 'link'
            }, {
              path: '/chart/ngx-chart',
              title: 'Ngx-Chart',
              type: 'link'
            }]
          }, {
            title: 'Map',
            icon: 'map',
            type: 'sub',
            active: false,
            children: [{
              path: '/map/google',
              title: 'Google Map',
              type: 'link'
            }, {
              path: '/map/leaflet',
              title: 'Leaflet Map',
              type: 'link'
            }]
          }, {
            path: '/editor',
            title: 'Editor',
            icon: 'git-pull-request',
            type: 'link'
          }, {
            title: 'Users',
            icon: 'users',
            type: 'sub',
            active: false,
            children: [{
              path: '/users/profile',
              title: 'Users Profile',
              type: 'link'
            }, {
              path: '/users/edit',
              title: 'Users Edit',
              type: 'link'
            }, {
              path: '/users/cards',
              title: 'Users Cards',
              type: 'link'
            }]
          }, {
            path: '/calender',
            title: 'Calender',
            icon: 'calendar',
            type: 'link',
            bookmark: true
          }, {
            title: 'Blog',
            icon: 'edit',
            type: 'sub',
            active: false,
            children: [{
              path: '/blog/details',
              title: 'Blog Details',
              type: 'link'
            }, {
              path: '/blog/single',
              title: 'Blog Single',
              type: 'link'
            }]
          }, {
            path: '/email',
            title: 'Email',
            icon: 'mail',
            type: 'link',
            bookmark: true
          }, {
            path: '/contact/contacts',
            title: 'contact',
            icon: 'user-plus',
            type: 'link'
          }, {
            path: '/chat',
            title: 'Chat',
            icon: 'message-square',
            type: 'link',
            bookmark: true
          }, {
            path: '/social-app',
            title: 'Social App',
            icon: 'chrome',
            type: 'link'
          }, {
            title: 'Job-Search',
            icon: 'user-check',
            type: 'sub',
            active: false,
            children: [{
              path: '/job-search/cardview',
              title: 'Card View',
              type: 'link'
            }, {
              path: '/job-search/listview',
              title: 'List View',
              type: 'link'
            }, {
              path: '/job-search/job-desc/1',
              title: 'Job Detail',
              type: 'link'
            }, {
              path: '/job-search/job-apply/1',
              title: 'Apply',
              type: 'link'
            }]
          }, {
            title: 'Learning',
            icon: 'layers',
            type: 'sub',
            active: false,
            children: [{
              path: '/learning/learninglist',
              title: 'Learning List',
              type: 'link'
            }, {
              path: '/learning/learning-detail/1',
              title: 'Detail Course',
              type: 'link'
            }]
          }, {
            path: '/faq',
            title: 'FAQ',
            icon: 'help-circle',
            type: 'link'
          }, {
            path: '/knowledgebase',
            title: 'Knowledgebase',
            icon: 'database',
            type: 'link'
          }, {
            path: '/support-ticket',
            title: 'Support Ticket',
            icon: 'headphones',
            type: 'link'
          }, {
            path: '/to-do',
            title: 'To-Do',
            icon: 'mic',
            type: 'link'
          }, {
            path: '/to-do-firebase',
            title: 'To-Do-Firebase',
            icon: 'mic',
            type: 'link'
          }, {
            title: 'Ecommerce',
            icon: 'shopping-bag',
            type: 'sub',
            active: false,
            children: [{
              path: '/ecommerce/products',
              title: 'Product',
              type: 'link'
            }, {
              path: '/ecommerce/product-details/1',
              title: 'Product page',
              type: 'link'
            }, {
              path: '/ecommerce/product/list',
              title: 'Product list',
              type: 'link'
            }, {
              path: '/ecommerce/payment/detail',
              title: 'Payment Details',
              type: 'link'
            }, {
              path: '/ecommerce/order',
              title: 'Order History',
              type: 'link'
            }]
          }, {
            path: '/pricing',
            title: 'Pricing',
            icon: 'dollar-sign',
            type: 'link'
          }, {
            path: '/sample-page',
            title: 'Sample page',
            icon: 'file',
            type: 'link'
          }, {
            path: '/search-result',
            title: 'Search Pages',
            icon: 'search',
            type: 'link'
          }, {
            title: 'Error Page',
            icon: 'alert-octagon',
            type: 'sub',
            active: false,
            children: [{
              path: 'error/400',
              title: 'Error 400',
              type: 'extTabLink'
            }, {
              path: 'error/401',
              title: 'Error 401',
              type: 'extTabLink'
            }, {
              path: 'error/403',
              title: 'Error 403',
              type: 'extTabLink'
            }, {
              path: 'error/404',
              title: 'Error 404',
              type: 'extTabLink'
            }, {
              path: 'error/500',
              title: 'Error 500',
              type: 'extTabLink'
            }, {
              path: 'error/503',
              title: 'Error 503',
              type: 'extTabLink'
            }]
          }, {
            title: 'Authentication',
            icon: 'unlock',
            type: 'sub',
            active: false,
            children: [{
              path: 'authentication/login',
              title: 'Login Simple',
              type: 'extTabLink'
            }, {
              path: 'authentication/login/image',
              title: 'Login with Bg Image',
              type: 'extTabLink'
            }, {
              path: 'authentication/login/video',
              title: 'Login with Bg video',
              type: 'extTabLink'
            }, {
              path: 'authentication/register',
              title: 'Register Simple',
              type: 'extTabLink'
            }, {
              path: 'authentication/register/image',
              title: 'Register with Bg Image',
              type: 'extTabLink'
            }, {
              path: 'authentication/register/video',
              title: 'Register with Bg video',
              type: 'extTabLink'
            }, {
              path: 'authentication/unlockuser',
              title: 'Unlock User',
              type: 'extTabLink'
            }, {
              path: 'authentication/forgetpassword',
              title: 'Forget Password',
              type: 'extTabLink'
            }, {
              path: 'authentication/resetpassword',
              title: 'Reset Password',
              type: 'extTabLink'
            }]
          }, {
            title: 'Coming Soon',
            icon: 'briefcase',
            type: 'sub',
            active: false,
            children: [{
              path: 'comingsoon/page',
              title: 'Coming Simple',
              type: 'extTabLink'
            }, {
              path: 'comingsoon/page/image',
              title: 'Coming with Bg Image',
              type: 'extTabLink'
            }, {
              path: 'comingsoon/page/video',
              title: 'Coming with Bg video',
              type: 'extTabLink'
            }]
          }, {
            path: '/maintenance',
            title: 'Maintenance',
            icon: 'settings',
            type: 'link'
          }]; // Array

          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.MENUITEMS);
          this.MENUITEMnev = [{
            title: 'Dashboard',
            icon: 'home',
            type: 'sub',
            badgeType: 'primary',
            badgeValue: 'new',
            active: false,
            children: [{
              path: '/dashboard/default',
              title: 'Default',
              type: 'link'
            }, {
              path: '/dashboard/e-commerce',
              title: 'E-Commerce',
              type: 'link'
            }, {
              path: '/dashboard/university',
              title: 'University',
              type: 'link'
            }, {
              path: '/dashboard/bitcoin',
              title: 'Crypto',
              type: 'link'
            }, {
              path: '/dashboard/server',
              title: 'Server',
              type: 'link'
            }, {
              path: '/dashboard/project',
              title: 'Project',
              type: 'link'
            }]
          }, {
            title: 'Widgets',
            icon: 'airplay',
            type: 'sub',
            active: false,
            children: [{
              path: '/widgets/general',
              title: 'General',
              type: 'link'
            }, {
              path: '/widgets/chart',
              title: 'Chart',
              type: 'link'
            }]
          }, {
            title: 'Map',
            icon: 'map',
            type: 'sub',
            active: false,
            children: [{
              path: '/map/google',
              title: 'Google Map',
              type: 'link'
            }, {
              path: '/map/leaflet',
              title: 'Leaflet Map',
              type: 'link'
            }]
          }, {
            path: '/editor',
            title: 'Editor',
            icon: 'git-pull-request',
            type: 'link'
          }, {
            title: 'Users',
            icon: 'users',
            type: 'sub',
            active: false,
            children: [{
              path: '/users/profile',
              title: 'Users Profile',
              type: 'link'
            }, {
              path: '/users/edit',
              title: 'Users Edit',
              type: 'link'
            }, {
              path: '/users/cards',
              title: 'Users Cards',
              type: 'link'
            }]
          }, {
            path: '/knowledgebase',
            title: 'Knowledgebase',
            icon: 'database',
            type: 'link'
          }, {
            path: '/support-ticket',
            title: 'Support Ticket',
            icon: 'headphones',
            type: 'link'
          }, {
            path: '/to-do',
            title: 'To-Do',
            icon: 'mic',
            type: 'link'
          }, {
            path: '/to-do-firebase',
            title: 'To-Do-Firebase',
            icon: 'mic',
            type: 'link'
          }, {
            title: 'Coming Soon',
            icon: 'briefcase',
            type: 'sub',
            active: false,
            children: [{
              path: 'comingsoon/page',
              title: 'Coming Simple',
              type: 'extTabLink'
            }, {
              path: 'comingsoon/page/image',
              title: 'Coming with Bg Image',
              type: 'extTabLink'
            }, {
              path: 'comingsoon/page/video',
              title: 'Coming with Bg video',
              type: 'extTabLink'
            }]
          }, {
            path: '/maintenance',
            title: 'Maintenance',
            icon: 'settings',
            type: 'link'
          }]; // Array

          this.item = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.MENUITEMnev);
          this.onResize();

          if (this.screenWidth < 991) {
            this.collapseSidebar = true;
          }
        } // Windows width


        _createClass(NavService, [{
          key: "onResize",
          value: function onResize(event) {
            this.screenWidth = window.innerWidth;
          }
        }]);

        return NavService;
      }();

      NavService.ɵfac = function NavService_Factory(t) {
        return new (t || NavService)();
      };

      NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavService,
        factory: NavService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "5sY3":
    /*!*************************************************************!*\
      !*** ./src/app/shared/guard/SecureInnerPagesGuard.guard.ts ***!
      \*************************************************************/

    /*! exports provided: SecureInnerPagesGuard */

    /***/
    function sY3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function () {
        return SecureInnerPagesGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/firebase/auth.service */
      "VaEd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SecureInnerPagesGuard = /*#__PURE__*/function () {
        function SecureInnerPagesGuard(authService, router) {
          _classCallCheck(this, SecureInnerPagesGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(SecureInnerPagesGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = JSON.parse(localStorage.getItem('user'));

            if (this.authService.isLoggedIn) {
              window.alert("You are not allowed to access this URL!");
              this.router.navigate(['/dashboard/default']);
            }

            return true;
          }
        }]);

        return SecureInnerPagesGuard;
      }();

      SecureInnerPagesGuard.ɵfac = function SecureInnerPagesGuard_Factory(t) {
        return new (t || SecureInnerPagesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      SecureInnerPagesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SecureInnerPagesGuard,
        factory: SecureInnerPagesGuard.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecureInnerPagesGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "668k":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          var _this2 = this;

          _classCallCheck(this, LoaderComponent);

          this.show = true;
          setTimeout(function () {
            _this2.show = false;
          }, 1500);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 3,
        vars: 2,
        consts: [[1, "loader-wrapper"], [1, "loader", "bg-white"], [1, "whirly-loader"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
          }
        },
        styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLXdyYXBwZXIubG9kZXJoaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9nW4":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/nav2.service.ts ***!
      \*************************************************/

    /*! exports provided: Nav2Service1 */

    /***/
    function nW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Nav2Service1", function () {
        return Nav2Service1;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var Nav2Service1 = /*#__PURE__*/function () {
        function Nav2Service1() {
          _classCallCheck(this, Nav2Service1);

          this.collapseSidebar = false;
          this.fullScreen = false; // tslint:disable-next-line: member-ordering

          this.Menu1ITEMS2 = [{
            title: 'Dashboard',
            icon: 'home',
            type: 'sub',
            badgeType: 'primary',
            active: false,
            children: [{
              path: '/dashboard/planthome',
              title: 'Home',
              type: 'link'
            }, // { path: '/dashboard/default', title: 'Plant', type: 'link' },
            // { path: '/config/alertimg', title: 'Alert Image', type: 'link' },
            {
              path: '/dashboard/plantline',
              title: 'Line',
              type: 'link'
            }, {
              path: '/dashboard/aidriven',
              title: 'AI-Driven for Line',
              type: 'link'
            }, // { path: '/dashboard/plantmach', title: 'Machine', type: 'link', },
            {
              path: '/dashboard/metaline',
              title: 'Line Meta Data',
              type: 'link'
            }, {
              path: '/dashboard/metamech',
              title: 'Machine Meta Data',
              type: 'link'
            }]
          }, // {
          // 	title: 'ref', icon: 'file-text', type: 'sub', badgeType: 'primary', active: false, children: [
          // 		{ path: '/dashboard/e-commerce', title: 'E-Commerce', type: 'link', },
          // 		{ path: '/dashboard/university', title: 'University', type: 'link' },
          // 		{ path: '/dashboard/bitcoin', title: 'Crypto', type: 'link' },
          // 		{ path: '/dashboard/server', title: 'Server', type: 'link' },
          // 		{ path: '/dashboard/project', title: 'Project', type: 'link' },
          //     { path: '/dashboard/plantselect', title: 'Plant', type: 'link' }
          // 	]
          // },
          {
            title: 'Alert',
            icon: 'file-text',
            type: 'sub',
            badgeType: 'primary',
            active: false,
            children: [{
              path: '/config/alertimg',
              title: 'Alert',
              type: 'link'
            }, {
              path: '/dashboard/alertconf',
              title: 'Alert Config',
              type: 'link'
            }]
          }, {
            title: 'Advance',
            icon: 'folder-plus',
            type: 'sub',
            active: false,
            children: [{
              path: '/dashboard/trends',
              title: 'Trends',
              icon: 'report',
              type: 'link'
            }, {
              path: '/dashboard/sticky',
              title: 'Status Pod',
              type: 'link'
            }, {
              path: '/search-result',
              title: 'Search Pages',
              icon: 'search',
              type: 'link'
            }, // {
            //   path: '/config/crepo', title: 'Report Chart', icon: 'report', type: 'link'
            // },
            {
              path: '/to-do',
              title: 'Task Pane',
              icon: 'mic',
              type: 'link'
            }]
          }, {
            title: 'Admin',
            icon: 'slack',
            type: 'sub',
            badgeType: 'primary',
            active: false,
            children: [{
              title: 'User Managment',
              type: 'sub',
              children: [{
                path: '/config/compname',
                title: 'Company',
                type: 'link'
              }, {
                path: '/config/compplant',
                title: 'Plant',
                type: 'link'
              }, {
                path: '/config/dept',
                title: 'Department',
                type: 'link'
              }, {
                path: '/config/role',
                title: 'Role',
                type: 'link'
              }, {
                path: '/config/emp',
                title: 'Employee',
                type: 'link'
              }]
            }, {
              title: 'Machine',
              type: 'sub',
              children: [{
                path: '/config/thingshape',
                title: 'Part Shape',
                type: 'link'
              }, {
                path: '/config/thingtemp',
                title: 'Part Template',
                type: 'link'
              }, {
                path: '/config/thing',
                title: 'Machine',
                type: 'link'
              }]
            }, {
              title: 'Process',
              type: 'sub',
              children: [// { path: '/config/processhape', title: 'Satge Shape', type: 'link' },
              {
                path: '/config/processtemp',
                title: 'Stage',
                type: 'link'
              }, {
                path: '/config/mprocess',
                title: 'Main Process',
                type: 'link'
              }]
            }]
          }]; // Array

          this.items1 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.Menu1ITEMS2);
          this.onResize();

          if (this.screenWidth < 991) {
            this.collapseSidebar = true;
          }
        } // Windows width


        _createClass(Nav2Service1, [{
          key: "onResize",
          value: function onResize(event) {
            this.screenWidth = window.innerWidth;
          }
        }]);

        return Nav2Service1;
      }();

      Nav2Service1.ɵfac = function Nav2Service1_Factory(t) {
        return new (t || Nav2Service1)();
      };

      Nav2Service1.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Nav2Service1,
        factory: Nav2Service1.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Nav2Service1, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        firebase: {
          apiKey: "Your Api Key",
          authDomain: "Your Auth Domain",
          databaseURL: "Your Database Url",
          projectId: "Your Project Id",
          storageBucket: "Your StorageBucket url",
          messagingSenderId: "Your Sender Id"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BAfr":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function BAfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
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


      var _services_nav2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/nav2.service */
      "9nW4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function SidebarComponent_li_16_a_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_16_a_1_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
        }
      }

      function SidebarComponent_li_16_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_16_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.toggletNavActive(menuItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_a_1_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_a_1_i_6_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_16_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_16_a_2_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_16_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_a_2_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_a_2_i_6_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, menuItem_r1.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, menuItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_16_a_3_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_16_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
        }
      }

      function SidebarComponent_li_16_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_a_3_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_a_3_i_6_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, menuItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_16_a_4_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_16_a_4_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
        }
      }

      function SidebarComponent_li_16_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_a_4_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_a_4_i_6_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, menuItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_1_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_16_ul_5_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r36.toggletNavActive(childrenItem_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_a_1_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_ul_5_li_1_a_1_i_6_Template, 1, 0, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, childrenItem_r27.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_2_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function SidebarComponent_li_16_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_a_2_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_ul_5_li_1_a_2_i_6_Template, 1, 0, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", !childrenItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, childrenItem_r27.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, childrenItem_r27.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_3_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_a_3_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_ul_5_li_1_a_3_i_6_Template, 1, 0, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, childrenItem_r27.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_4_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_4_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_a_4_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_16_ul_5_li_1_a_4_i_6_Template, 1, 0, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, childrenItem_r27.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_1_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", !childrenSubItem_r53.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, childrenSubItem_r53.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, childrenSubItem_r53.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_2_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r53.type ? null : childrenSubItem_r53.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, childrenSubItem_r53.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_3_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_3_span_5_Template, 2, 4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r53.type ? null : childrenSubItem_r53.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, childrenSubItem_r53.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_1_Template, 6, 9, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_2_Template, 6, 7, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_a_3_Template, 6, 5, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "extTabLink");
        }
      }

      function SidebarComponent_li_16_ul_5_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_16_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", childrenItem_r27.children);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          active: a0
        };
      };

      function SidebarComponent_li_16_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_16_ul_5_li_1_a_1_Template, 7, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_16_ul_5_li_1_a_2_Template, 7, 10, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_16_ul_5_li_1_a_3_Template, 7, 8, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_16_ul_5_li_1_a_4_Template, 7, 6, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_li_1_ul_5_Template, 2, 1, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, childrenItem_r27.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "menu-open": a0,
          "menu-close": a1
        };
      };

      function SidebarComponent_li_16_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_16_ul_5_li_1_Template, 6, 8, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, menuItem_r1.active, !menuItem_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_16_a_1_Template, 7, 6, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_16_a_2_Template, 7, 9, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_16_a_3_Template, 7, 7, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_16_a_4_Template, 7, 7, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_16_ul_5_Template, 2, 5, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, menuItem_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      } // import { NavService, Menu } from '../../services/nav.service';


      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(router, navServices) {
          var _this3 = this;

          _classCallCheck(this, SidebarComponent);

          this.router = router;
          this.navServices = navServices;
          this.navServices.items1.subscribe(function (menuItems) {
            _this3.menuItems = menuItems;

            _this3.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                menuItems.filter(function (items) {
                  if (items.path === event.url) _this3.setNavActive(items);
                  if (!items.children) return false;
                  items.children.filter(function (subItems) {
                    if (subItems.path === event.url) _this3.setNavActive(subItems);
                    if (!subItems.children) return false;
                    subItems.children.filter(function (subSubItems) {
                      if (subSubItems.path === event.url) _this3.setNavActive(subSubItems);
                    });
                  });
                });
              }
            });
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.username = localStorage.getItem('username');
            this.userrole = localStorage.getItem('userrole'); //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
          } // Active Nave state

        }, {
          key: "setNavActive",
          value: function setNavActive(item) {
            this.menuItems.filter(function (menuItem) {
              if (menuItem != item) menuItem.active = false;
              if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

              if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                    menuItem.active = true;
                    submenuItems.active = true;
                  }
                });
              }
            });
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this4 = this;

            if (!item.active) {
              this.menuItems.forEach(function (a) {
                if (_this4.menuItems.includes(item)) a.active = false;
                if (!a.children) return false;
                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          } //Fileupload

        }, {
          key: "readUrl",
          value: function readUrl(event) {
            var _this5 = this;

            if (event.target.files.length === 0) return; //Image upload validation

            var mimeType = event.target.files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            } // Image upload


            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (_event) {
              _this5.url = reader.result;
            };
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav2_service__WEBPACK_IMPORTED_MODULE_2__["Nav2Service1"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 17,
        vars: 3,
        consts: [[2, "background-color", "#0137bf"], [1, "logo-wrapper"], ["src", "assets/images/logo/compact-logo.png", "alt", "#", 2, "margin-bottom", "15px", "width", "140px", "margin-top", "15px"], [1, "sidebar", "custom-scrollbar", 2, "background-color", "#02091b"], [1, "sidebar-user", "text-center", 2, "background-color", "#02091b"], ["src", "assets/images/user/1.jpg", "alt", "#", 1, "img-60", "rounded-circle"], [1, "profile-edit"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "mt-3", "f-14"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-header", 3, "routerLink", 4, "ngIf"], ["class", "sidebar-header", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "click"], [3, "icon"], [3, "class", 4, "ngIf"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "sidebar-header", 3, "routerLink"], [1, "sidebar-header", 3, "href"], ["target", "_blank", 1, "sidebar-header", 3, "href"], [1, "sidebar-submenu", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-circle"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_10_listener($event) {
              return ctx.readUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidebarComponent_li_16_Template, 6, 8, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userrole);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__["FeatherIconsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_nav2_service__WEBPACK_IMPORTED_MODULE_2__["Nav2Service1"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "F+b7":
    /*!******************************************!*\
      !*** ./src/app/shared/data/chat/chat.ts ***!
      \******************************************/

    /*! exports provided: ChatDB */

    /***/
    function FB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatDB", function () {
        return ChatDB;
      });

      var ChatDB = function ChatDB() {
        _classCallCheck(this, ChatDB);
      }; // Chat User


      ChatDB.chatUser = [{
        id: 0,
        name: 'Elana Jecno',
        status: 'In Meeting..',
        profile: 'assets/images/user/1.jpg',
        seen: 'online',
        online: true,
        typing: false,
        authenticate: 1,
        call: {
          status: '',
          date_time: ''
        }
      }, {
        id: 1,
        name: 'Mark Jecno',
        status: 'Be the change',
        profile: 'assets/images/user/12.png',
        seen: 'online',
        online: true,
        typing: false,
        authenticate: 0,
        call: {
          status: 'incoming',
          date_time: '5 May, 4:40 PM'
        }
      }, {
        id: 2,
        name: 'Aiden Chavez',
        status: 'Out is my favorite.',
        profile: 'assets/images/user/2.png',
        seen: 'Last Seen 3:55 PM',
        online: false,
        typing: false,
        authenticate: 0,
        call: {
          status: 'incoming',
          date_time: '6 May, 1:50 PM'
        }
      }, {
        id: 3,
        name: 'Prasanth Anand',
        status: 'Change for anyone.',
        profile: 'assets/images/user/8.jpg',
        seen: 'online',
        online: true,
        typing: false,
        authenticate: 0,
        call: {
          status: 'outgoing',
          date_time: '7 May, 9:40 PM'
        }
      }, {
        id: 4,
        name: 'Venkata Satyamu',
        status: 'First bun like a sun.',
        profile: 'assets/images/user/4.jpg',
        seen: 'online',
        online: true,
        typing: false,
        authenticate: 0,
        call: {
          status: 'incoming',
          date_time: '7 May, 10:50 PM'
        }
      }, {
        id: 5,
        name: 'Ginger Johnston',
        status: 'its my life. Mind it.',
        profile: 'assets/images/user/5.jpg',
        seen: 'Last Seen 5:55 PM',
        online: false,
        typing: false,
        authenticate: 0,
        call: {
          status: 'outgoing',
          date_time: '7 May, 11:40 PM'
        }
      }, {
        id: 6,
        name: 'Kori Thomas',
        status: 'status pending...',
        profile: 'assets/images/user/9.jpg',
        seen: 'online',
        online: true,
        typing: false,
        authenticate: 0,
        call: {
          status: 'outgoing',
          date_time: '8 May, 9:15 AM'
        }
      }, {
        id: 7,
        name: 'Marked Thomas',
        status: 'away from home',
        profile: 'assets/images/user/11.png',
        seen: 'Last Seen 1:55 PM',
        online: false,
        typing: false,
        authenticate: 0,
        call: {
          status: 'incoming',
          date_time: '8 May, 10:50 Am'
        }
      }, {
        id: 8,
        name: 'Jaclin Thomas',
        status: 'Single..',
        profile: 'assets/images/user/10.jpg',
        seen: 'Last Seen 3:15 PM',
        online: false,
        typing: false,
        authenticate: 0,
        call: {
          status: 'incoming',
          date_time: '9 May, 11:50 PM'
        }
      }]; // Message

      ChatDB.chat = [{
        id: 1,
        message: [{
          sender: 1,
          time: '10:12 am',
          text: 'Are we meeting today? Project has been already finished and I have results to show you.'
        }, {
          sender: 0,
          time: '10:14 am',
          text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?.'
        }, {
          sender: 0,
          time: '10:14 am',
          text: 'Well I am not sure. The rest of the team.'
        }, {
          sender: 1,
          time: '10:20 am',
          text: 'Actually everything was fine. I am very excited to show this to our team.'
        }]
      }, {
        id: 2,
        message: []
      }, {
        id: 3,
        message: []
      }, {
        id: 4,
        message: []
      }, {
        id: 5,
        message: []
      }, {
        id: 6,
        message: []
      }, {
        id: 7,
        message: []
      }, {
        id: 8,
        message: []
      }];
      /***/
    },

    /***/
    "JJXW":
    /*!***************************************************************!*\
      !*** ./src/app/pages/authentication/login/login.component.ts ***!
      \***************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function JJXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, router, http) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.http = http;
          this.submitted = false;
          this.hide = true;
          this.ress = {};
          this.url = 'http://122.166.167.113:8085/login';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            localStorage.setItem('mainurl', 'http://122.166.167.113:8085/');
            this.loginForm = this.formBuilder.group({
              username: [''],
              password: ['']
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //    [Focus input] * /

            $('.input100').each(function () {
              $(this).on('blur', function () {
                if ($(this).val().trim() != '') {
                  $(this).addClass('has-val');
                } else {
                  $(this).removeClass('has-val');
                }
              });
            });
          }
        }, {
          key: "showErrorAlert",
          value: function showErrorAlert() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Yikes!', 'username or password  went wrong!', 'error');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            } else {
              this.http.post(this.url, this.loginForm.value).subscribe(function (res) {
                console.log(res);
                _this6.ress = res;
                localStorage.setItem('username', _this6.ress.username);
                localStorage.setItem('userid', _this6.ress.id);
                localStorage.setItem('usertoken', _this6.ress.token);
                localStorage.setItem('userrole', _this6.ress.role);
                localStorage.setItem('mainurl', 'http://122.166.167.113:8085/');
                console.log('userrole', _this6.ress.role); // tslint:disable-next-line: triple-equals

                if (_this6.ress.role == 'Admin' || _this6.ress.role == 'admin') {
                  _this6.router.navigate(['/dashboard/plantline']);
                } else if (_this6.ress.role == 'Supervisor') {
                  _this6.router.navigate(['/dashboard/plantline']);
                } else {
                  _this6.router.navigate(['/dashboard/plantline']);
                }
              }, function (err) {
                console.log(err.error);

                _this6.showErrorAlert();

                console.log(err.name);
                console.log(err.message);
                console.log(err.status);
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 34,
        vars: 1,
        consts: [[1, "container-fluid", "p-0"], [1, "auth-bg-video"], ["id", "bgvid", "poster", "assets/images/new.jpg", "playsinline", "", "autoplay", "", "muted", "", "loop", ""], ["src", "assets/video/auth-bg.mp4", "type", "video/mp4"], [1, "authentication-main", 2, "background-color", "#28a74561", "height", "800px"], [1, "row"], [1, "col-md-12"], [1, "auth-innerright"], [1, "authentication-box"], [1, "text-center"], [2, "font-size", "-webkit-xxx-large", "color", "#151e8a"], [1, "card", "mt-4"], [1, "card-body"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "formControlName", "username", "aria-describedby", "emailHelp", "placeholder", "username", 1, "form-control"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", "formControlName", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-left", "p-t-30", "p-b-20"], [1, "txt3"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brevium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LOGIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Check me out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MO6y":
    /*!******************************************************************!*\
      !*** ./src/app/shared/components/bookmark/bookmark.component.ts ***!
      \******************************************************************/

    /*! exports provided: BookmarkComponent */

    /***/
    function MO6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookmarkComponent", function () {
        return BookmarkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/nav.service */
      "0yvB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function BookmarkComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-feather-icons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragula", "drag-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", item_r2 == null ? null : item_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2 == null ? null : item_r2.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r2 == null ? null : item_r2.icon);
        }
      }

      function BookmarkComponent_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-feather-icons", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkComponent_div_9_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.removeFix();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkComponent_div_9_div_1_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var item_r4 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.addToBookmark(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r4 == null ? null : item_r4.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("starred", item_r4.bookmark);
        }
      }

      function BookmarkComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookmarkComponent_div_9_div_1_Template, 10, 5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx_r1.searchResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 3, ctx_r1.menuItems, 0, 8));
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var BookmarkComponent = /*#__PURE__*/function () {
        function BookmarkComponent(navServices) {
          _classCallCheck(this, BookmarkComponent);

          this.navServices = navServices;
          this.open = false;
          this.searchResult = false;
          this.searchResultEmpty = false;
          this.bookmarkItems = [];
        }

        _createClass(BookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.navServices.items.subscribe(function (menuItems) {
              _this7.items = menuItems;

              _this7.items.filter(function (items) {
                if (items.bookmark) {
                  _this7.bookmarkItems.push(items);
                }
              });
            });
          }
        }, {
          key: "openBookmarkSearch",
          value: function openBookmarkSearch() {
            this.open = !this.open;
            this.removeFix();
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this8 = this;

            term ? this.addFix() : this.removeFix();

            if (!term) {
              this.open = false;
              return this.menuItems = [];
            }

            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }

              if (!menuItems.children) return false;
              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }

                if (!subItems.children) return false;
                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });

              _this8.checkSearchResultEmpty(items);

              _this8.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
            document.getElementById("canvas-bookmark").classList.add("offcanvas-bookmark");
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = "";
            document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
          }
        }, {
          key: "addToBookmark",
          value: function addToBookmark(items) {
            var index = this.bookmarkItems.indexOf(items);

            if (index === -1 && !items.bookmark) {
              items.bookmark = true;
              this.bookmarkItems.push(items);
              this.text = "";
            } else {
              this.bookmarkItems.splice(index, 1);
              items.bookmark = false;
            }
          }
        }]);

        return BookmarkComponent;
      }();

      BookmarkComponent.ɵfac = function BookmarkComponent_Factory(t) {
        return new (t || BookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]));
      };

      BookmarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookmarkComponent,
        selectors: [["app-bookmark"]],
        decls: 14,
        vars: 10,
        consts: [[1, "bookmark", "pull-right"], [3, "dragula", 4, "ngFor", "ngForOf"], ["href", "javacript::void(0)", 3, "click"], [1, "bookmark-search", 3, "icon"], [1, "form-inline", "search-form", "bookmark-form"], [1, "form-group", "form-control-search"], ["type", "text", "placeholder", "Search..", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], ["class", "Typeahead-menu", "id", "boomark-search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], [3, "dragula"], ["placement", "top", 3, "routerLink", "ngbTooltip"], [3, "icon"], ["id", "boomark-search-outer", 1, "Typeahead-menu"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"], [1, "pull-right"], [1, "fa", "fa-star-o", "f-18", "mt-1"]],
        template: function BookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookmarkComponent_li_2_Template, 3, 4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookmarkComponent_Template_a_click_4_listener() {
              return ctx.openBookmarkSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-feather-icons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookmarkComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.text = $event;
            })("keyup", function BookmarkComponent_Template_input_keyup_8_listener() {
              return ctx.searchTerm(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookmarkComponent_div_9_Template, 3, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Opps!! There are no result found. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookmarkItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rbWFyay5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bookmark',
            templateUrl: './bookmark.component.html',
            styleUrls: ['./bookmark.component.scss']
          }]
        }], function () {
          return [{
            type: _services_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/loader/loader.component */
      "668k");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "BAfr");
      /* harmony import */


      var _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/layout/content-layout/content-layout.component */
      "XPAA");
      /* harmony import */


      var _components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/layout/full-layout/full-layout.component */
      "y/Jg");
      /* harmony import */


      var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/right-sidebar/right-sidebar.component */
      "SvO3");
      /* harmony import */


      var _components_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/bookmark/bookmark.component */
      "MO6y");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/customizer/customizer.component */
      "0VKv");
      /* harmony import */


      var ng2_dragula__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng2-dragula */
      "9Ejp");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_19__);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! mousetrap */
      "imBb");
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/nav.service */
      "0yvB");
      /* harmony import */


      var _services_chat_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/chat.service */
      "xgtH");
      /* harmony import */


      var _services_customizer_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/customizer.service */
      "hFtW");
      /* harmony import */


      var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./directives/fullscreen.directive */
      "jArk"); // services
      // Directives


      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_21__["NavService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_22__["ChatService"], _services_customizer_service__WEBPACK_IMPORTED_MODULE_23__["CustomizerService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_18__["GalleryModule"].forRoot()], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__["BookmarkComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["RightSidebarComponent"], _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_8__["ContentLayoutComponent"], _components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_9__["FullLayoutComponent"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__["FeatherIconsComponent"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_24__["ToggleFullscreenDirective"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_18__["GalleryModule"]],
          exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__["FeatherIconsComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__["BookmarkComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["RightSidebarComponent"], _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_8__["ContentLayoutComponent"], _components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_9__["FullLayoutComponent"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__["FeatherIconsComponent"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_24__["ToggleFullscreenDirective"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_16__["DragulaModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_18__["GalleryModule"].forRoot()],
            exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_10__["FeatherIconsComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]],
            providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_21__["NavService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_22__["ChatService"], _services_customizer_service__WEBPACK_IMPORTED_MODULE_23__["CustomizerService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RFpt":
    /*!**********************************************!*\
      !*** ./src/app/shared/data/config/config.ts ***!
      \**********************************************/

    /*! exports provided: ConfigDB */

    /***/
    function RFpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigDB", function () {
        return ConfigDB;
      });

      var ConfigDB = function ConfigDB() {
        _classCallCheck(this, ConfigDB);
      };

      ConfigDB.data = {
        settings: {
          layout_type: 'ltr',
          sidebar: {
            type: 'default',
            body_type: 'default'
          },
          sidebar_setting: 'default-sidebar',
          sidebar_backround: 'dark-sidebar'
        },
        color: {
          layout_version: 'light',
          color: 'color-1',
          primary_color: '#4466f2',
          secondary_color: '#1ea6ec',
          mix_layout: 'default'
        },
        router_animation: 'fadeIn'
      };
      /***/
    },

    /***/
    "SvO3":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/right-sidebar/right-sidebar.component.ts ***!
      \****************************************************************************/

    /*! exports provided: RightSidebarComponent */

    /***/
    function SvO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function () {
        return RightSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/chat.service */
      "xgtH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/chat/"];
      };

      var _c1 = function _c1(a0, a1) {
        return {
          "online": a0,
          "offline": a1
        };
      };

      function RightSidebarComponent_ng_container_15_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r2 == null ? null : user_r2.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, user_r2.online, !user_r2.online));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.status);
        }
      }

      function RightSidebarComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RightSidebarComponent_ng_container_15_li_1_Template, 9, 9, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var user_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r2.authenticate != 1);
        }
      }

      function RightSidebarComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sorry, We didn't find any results matching this search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      var RightSidebarComponent = /*#__PURE__*/function () {
        function RightSidebarComponent(chatService) {
          var _this9 = this;

          _classCallCheck(this, RightSidebarComponent);

          this.chatService = chatService;
          this.users = [];
          this.searchUsers = [];
          this.notFound = false;
          this.chatService.getUsers().subscribe(function (users) {
            _this9.searchUsers = users;
            _this9.users = users;
          });
        }

        _createClass(RightSidebarComponent, [{
          key: "searchTerm",
          value: function searchTerm(term) {
            if (!term) return this.searchUsers = this.users;
            term = term.toLowerCase();
            var user = [];
            this.users.filter(function (users) {
              if (users.name.toLowerCase().includes(term)) {
                user.push(users);
              }
            });
            this.checkSearchResultEmpty(user);
            this.searchUsers = user;
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(user) {
            if (!user.length) this.notFound = true;else this.notFound = false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RightSidebarComponent;
      }();

      RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]));
      };

      RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        decls: 17,
        vars: 5,
        consts: [[1, "container", "p-0"], [1, "modal-header", "p-l-20", "p-r-20"], [1, "col-sm-8", "p-0"], [1, "modal-title", "font-weight-bold"], [1, "col-sm-4", "text-right", "p-0"], ["data-feather", "settings", 1, "mr-2"], [1, "friend-list-search", "mt-0"], ["type", "text", "placeholder", "search", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "fa", "fa-search"], [1, "p-l-30", "p-r-30"], [1, "chat-box"], [1, "people-list", "friend-list", "custom-scrollbar"], [1, "list"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "clearfix", 4, "ngIf"], [1, "clearfix"], [3, "routerLink"], ["alt", "", 1, "rounded-circle", "user-image", 3, "src"], [1, "status-circle", 3, "ngClass"], [1, "about"], [1, "name"], [1, "status"], [1, "image-not-found"], [1, ""], ["src", "assets/images/search-not-found.png", "alt", ""], [1, "mb-0"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FRIEND LIST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightSidebarComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.searchText = $event;
            })("keyup", function RightSidebarComponent_Template_input_keyup_9_listener() {
              return ctx.searchTerm(ctx.searchText);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RightSidebarComponent_ng_container_15_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RightSidebarComponent_ng_container_16_Template, 6, 0, "ng-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchUsers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notFound);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/components/loader/loader.component */
      "668k");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'endless';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".page-body[_ngcontent-%COMP%]   ng-tns-c114-0[_ngcontent-%COMP%] {\n  background-color: #c3e5f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLHlCQUF5QjtBQUgzQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ucGFnZS1ib2R5IG5nLXRucy1jMTE0LTB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2U1Zjc7XHJcblxyXG59XHJcbiJdfQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "VaEd":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/firebase/auth.service.ts ***!
      \**********************************************************/

    /*! exports provided: AuthService */

    /***/
    function VaEd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-cookie-service */
      "ReVU");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afs, afAuth, router, ngZone, toster, cookieService) {
          var _this10 = this;

          _classCallCheck(this, AuthService);

          this.afs = afs;
          this.afAuth = afAuth;
          this.router = router;
          this.ngZone = ngZone;
          this.toster = toster;
          this.cookieService = cookieService;
          this.showLoader = false;
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this10.userData = user;
              _this10._sessionId = _this10.userData;
              cookieService.set('user', JSON.stringify(_this10.userData));
              localStorage.setItem('user', JSON.stringify(_this10.userData));
              JSON.parse(localStorage.getItem('user'));

              _this10.router.navigateByUrl('/dashboard/default');
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          });
        }

        _createClass(AuthService, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //sign in function

        }, {
          key: "SignIn",
          value: function SignIn(email, password) {
            var _this11 = this;

            return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (result) {
              if (result.user.emailVerified !== true) {
                _this11.SetUserData(result.user);

                _this11.SendVerificationMail();

                _this11.showLoader = true;
              } else {
                _this11.showLoader = false;

                _this11.ngZone.run(function () {
                  _this11.router.navigate(['/auth/login']);
                });
              }
            })["catch"](function (error) {
              _this11.toster.error('You have enter Wrong Email or Password.');
            });
          } //main verification function

        }, {
          key: "SendVerificationMail",
          value: function SendVerificationMail() {
            var _this12 = this;

            return this.afAuth.auth.currentUser.sendEmailVerification().then(function () {
              _this12.router.navigate(['/dashboard/default']);
            });
          } //Sign in with Facebook

        }, {
          key: "signInFacebok",
          value: function signInFacebok() {
            return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider());
          } //Sign in with Twitter

        }, {
          key: "signInTwitter",
          value: function signInTwitter() {
            return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider());
          } //Sign in with Google

        }, {
          key: "GoogleAuth",
          value: function GoogleAuth() {
            return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
          }
        }, {
          key: "ForgotPassword",
          value: function ForgotPassword(passwordResetEmail) {
            return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(function () {
              window.alert('Password reset email sent, check your inbox.');
            })["catch"](function (error) {
              window.alert(error);
            });
          } //Authentication for Login

        }, {
          key: "AuthLogin",
          value: function AuthLogin(provider) {
            var _this13 = this;

            return this.afAuth.auth.signInWithPopup(provider).then(function (result) {
              _this13.ngZone.run(function () {
                _this13.router.navigate(['/dashboard/default']);
              });

              _this13.SetUserData(result.user);
            })["catch"](function (error) {
              window.alert(error);
            });
          } //Set user

        }, {
          key: "SetUserData",
          value: function SetUserData(user) {
            var userRef = this.afs.doc("users/".concat(user.uid));
            var userData = {
              email: user.email,
              displayName: user.displayName,
              uid: user.uid,
              photoURL: user.photoURL || 'assets/dashboeard/boy-2.png',
              emailVerified: user.emailVerified
            };
            userRef["delete"]().then(function () {})["catch"](function (error) {});
            return userRef.set(userData, {
              merge: true
            });
          } // Sign out

        }, {
          key: "SignOut",
          value: function SignOut() {
            var _this14 = this;

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };

            return this.afAuth.auth.signOut().then(function () {
              _this14.showLoader = false;
              localStorage.clear();

              _this14.cookieService.deleteAll('user', '/auth/login');

              _this14.router.navigate(['/auth/login']);
            });
          }
        }, {
          key: "isLoggedIn",
          get: function get() {
            var user = JSON.parse(localStorage.getItem('user'));
            return user != null && user.emailVerified != false ? true : false;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XPAA":
    /*!*************************************************************************************!*\
      !*** ./src/app/shared/components/layout/content-layout/content-layout.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ContentLayoutComponent */

    /***/
    function XPAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function () {
        return ContentLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-animate */
      "5Rqa");
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! feather-icons */
      "d8Z/");
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/nav.service */
      "0yvB");
      /* harmony import */


      var _services_customizer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/customizer.service */
      "hFtW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../header/header.component */
      "aZ8m");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "BAfr");
      /* harmony import */


      var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../right-sidebar/right-sidebar.component */
      "SvO3");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../customizer/customizer.component */
      "0VKv");

      var ContentLayoutComponent = /*#__PURE__*/function () {
        function ContentLayoutComponent(navServices, customizer) {
          _classCallCheck(this, ContentLayoutComponent);

          this.navServices = navServices;
          this.customizer = customizer;
        }

        _createClass(ContentLayoutComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_3__["replace"]();
            });
          }
        }, {
          key: "clickedOutside",
          value: function clickedOutside(event) {
            // click outside Area perform following action
            document.getElementById('outer-container').onclick = function (e) {
              e.stopPropagation();

              if (e.target != document.getElementById('search-outer')) {
                document.getElementsByTagName("body")[0].classList.remove("offcanvas");
              }

              if (e.target != document.getElementById('outer-container')) {
                document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
              }

              if (e.target != document.getElementById('inner-customizer')) {
                document.getElementsByClassName("customizer-links")[0].classList.remove("open");
                document.getElementsByClassName("customizer-contain")[0].classList.remove("open");
              }
            };
          }
        }, {
          key: "getRouterOutletState",
          value: function getRouterOutletState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }, {
          key: "rightSidebar",
          value: function rightSidebar($event) {
            this.right_side_bar = $event;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContentLayoutComponent;
      }();

      ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) {
        return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_5__["CustomizerService"]));
      };

      ContentLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentLayoutComponent,
        selectors: [["app-content-layout"]],
        hostBindings: function ContentLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLayoutComponent_click_HostBindingHandler($event) {
              return ctx.clickedOutside($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 15,
        vars: 9,
        consts: [["id", "outer-container", 1, "dark-body-only"], ["id", "canvas-bookmark", 1, "page-wrapper", 3, "ngClass"], [3, "rightSidebarEvent"], [1, "page-body-wrapper", 3, "ngClass"], ["id", "pages-sidebar", 1, "page-sidebar", 3, "ngClass"], ["id", "right_side_bar", 1, "right-sidebar"], [1, "page-body"], ["o", "outlet"], [1, "footer"]],
        template: function ContentLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rightSidebarEvent", function ContentLayoutComponent_Template_app_header_rightSidebarEvent_2_listener($event) {
              return ctx.rightSidebar($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-right-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "footer", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-customizer");
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customizer.data.settings.sidebar.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customizer.data.settings.sidebar.body_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.navServices.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customizer.data.settings.sidebar_backround);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("sidebar-layout", ctx.customizer.data.settings.sidebar_setting);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.right_side_bar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateRoute", ctx.getRouterOutletState(_r0));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["RightSidebarComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"], _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_12__["CustomizerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateRoute', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], {// Set the duration to 5seconds and delay to 2 seconds
            //params: { timing: 3}
          }))])]
        }
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-content-layout',
            templateUrl: './content-layout.component.html',
            styleUrls: ['./content-layout.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateRoute', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], {// Set the duration to 5seconds and delay to 2 seconds
              //params: { timing: 3}
            }))])]
          }]
        }], function () {
          return [{
            type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]
          }, {
            type: _services_customizer_service__WEBPACK_IMPORTED_MODULE_5__["CustomizerService"]
          }];
        }, {
          clickedOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "bsvf");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/services/firebase/auth.service */
      "VaEd");
      /* harmony import */


      var _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/guard/admin.guard */
      "u4sm");
      /* harmony import */


      var _shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/guard/SecureInnerPagesGuard.guard */
      "5sY3");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-cookie-service */
      "ReVU");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire */
      "05qF");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps"); // AoT requires an exported function for factories


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"], _shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_14__["SecureInnerPagesGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
              }
            }), _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"]],
            providers: [_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"], _shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_14__["SecureInnerPagesGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aF9I":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 0,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aZ8m":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function aZ8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/nav.service */
      "0yvB");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/firebase/auth.service */
      "VaEd");
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      "pqks");

      function HeaderComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r3.photoURL == null ? "assets/images/user/1.jpg" : user_r3.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      var body = document.getElementsByTagName("body")[0];

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, navServices, document, translate, authService) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.navServices = navServices;
          this.document = document;
          this.translate = translate;
          this.authService = authService;
          this.searchResult = false;
          this.searchResultEmpty = false;
          this.openNav = false;
          this.right_sidebar = false;
          this.isOpenMobile = false;
          this.rightSidebarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          translate.setDefaultLang('en');
        }

        _createClass(HeaderComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.removeFix();
          }
        }, {
          key: "right_side_bar",
          value: function right_side_bar() {
            this.right_sidebar = !this.right_sidebar;
            this.rightSidebarEvent.emit(this.right_sidebar);
          }
        }, {
          key: "collapseSidebar",
          value: function collapseSidebar() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
          }
        }, {
          key: "openMobileNav",
          value: function openMobileNav() {
            this.openNav = !this.openNav;
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lang) {
            this.translate.use(lang);
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this15 = this;

            term ? this.addFix() : this.removeFix();
            if (!term) return this.menuItems = [];
            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }

              if (!menuItems.children) return false;
              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }

                if (!subItems.children) return false;
                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });

              _this15.checkSearchResultEmpty(items);

              _this15.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
            body.classList.add("offcanvas");
          }
        }, {
          key: "SignOut",
          value: function SignOut() {
            this.router.navigate(['/authentication/login']);
          }
        }, {
          key: "lockout",
          value: function lockout() {
            this.router.navigate(['/authentication/unlockuser']);
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            body.classList.remove("offcanvas");
            this.text = "";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.elem = document.documentElement;
            this.navServices.items.subscribe(function (menuItems) {
              _this16.items = menuItems;
            });
          }
        }, {
          key: "toggleFullScreen",
          value: function toggleFullScreen() {
            this.navServices.fullScreen = !this.navServices.fullScreen;

            if (this.navServices.fullScreen) {
              if (this.elem.requestFullscreen) {
                this.elem.requestFullscreen();
              } else if (this.elem.mozRequestFullScreen) {
                /* Firefox */
                this.elem.mozRequestFullScreen();
              } else if (this.elem.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.elem.webkitRequestFullscreen();
              } else if (this.elem.msRequestFullscreen) {
                /* IE/Edge */
                this.elem.msRequestFullscreen();
              }
            } else {
              if (!this.document.exitFullscreen) {
                this.document.exitFullscreen();
              } else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
              } else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
              } else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
              }
            }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        outputs: {
          rightSidebarEvent: "rightSidebarEvent"
        },
        decls: 28,
        vars: 12,
        consts: [["id", "page-main-header", 1, "page-main-header", 3, "ngClass"], [1, "main-header-right", "row", 2, "background-color", "#02091b"], [1, "main-header-left", "d-lg-none"], [1, "mobile-sidebar"], [1, "media-body", "text-right", "switch-sm"], [1, "switch"], ["href", "javascript:void(0)", 3, "click"], ["id", "sidebar-toggle", 3, "icon"], [2, "width", "700px", "font-family", "Roboto"], [1, "nav-right", "col"], [1, "nav-menus", 3, "ngClass"], ["href", "javascript:void(0)", 1, "text-dark", 3, "click"], [3, "icon"], [1, "onhover-dropdown"], ["class", "media align-items-center", 4, "ngIf"], [1, "profile-dropdown", "onhover-show-div", "p-20"], [1, "d-lg-none", "mobile-toggle", "pull-right", 3, "click"], [1, "media", "align-items-center"], ["src", "assets/images/dashboard/user.png", "alt", "header-user", 1, "align-self-center", "pull-right", "img-50", "rounded-circle"], [1, "dotted-animation"], [1, "animate-circle"], [1, "main-circle"], ["alt", "header-user", 1, "align-self-center", "pull-right", "img-50", "rounded-circle", 3, "src"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() {
              return ctx.collapseSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-feather-icons", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SKF BNG BREVIUM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
              return ctx.toggleFullScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 5, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_div_20_Template, 5, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() {
              return ctx.SignOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_26_listener() {
              return ctx.openMobileNav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-feather-icons", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.navServices.collapseSidebar));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "align-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.openNav));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "maximize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.userData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "log-out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "more-horizontal");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__["FeatherIconsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }, {
            type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, {
          rightSidebarEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/firebase/auth.service */
      "VaEd");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_form_12_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_12_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_12_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_12_div_5_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_form_12_div_6_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_form_12_div_11_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remember me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.login(ctx_r4.loginForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.loginFacebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.loginTwitter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.loginGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.touched && (ctx_r0.loginForm.controls.email.errors == null ? null : ctx_r0.loginForm.controls.email.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.touched && (ctx_r0.loginForm.controls.email.errors == null ? null : ctx_r0.loginForm.controls.email.errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.password.touched && (ctx_r0.loginForm.controls.password.errors == null ? null : ctx_r0.loginForm.controls.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loader--text", ctx_r0.authService.showLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.loginForm.valid || ctx_r0.authService.showLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.authService.showLoader ? "" : "Login");
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, afauth, fb, router) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.afauth = afauth;
          this.fb = fb;
          this.router = router;
          this.newUser = false;
          this.formErrors = {
            'email': '',
            'password': ''
          };
          this.loginForm = fb.group({
            email: ['test@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['test123', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Login With Google

        }, {
          key: "loginGoogle",
          value: function loginGoogle() {
            this.authService.GoogleAuth();
          } // Login With Twitter

        }, {
          key: "loginTwitter",
          value: function loginTwitter() {
            this.authService.signInTwitter();
          } // Login With Facebook

        }, {
          key: "loginFacebook",
          value: function loginFacebook() {
            this.authService.signInFacebok();
          } // Simple Login

        }, {
          key: "login",
          value: function login() {
            this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 13,
        vars: 1,
        consts: [[1, "page-wrapper"], [1, "auth-bg"], [1, "authentication-box"], [1, "text-center"], ["src", "assets/images/endless-logo.png", "alt", ""], [1, "card", "mt-4"], [1, "card-body"], ["class", "theme-form", 3, "formGroup", 4, "ngIf"], [1, "theme-form", 3, "formGroup"], [1, "form-group"], [1, "col-form-label", "pt-0"], ["formControlName", "email", "type", "email", "required", "", 1, "form-control"], ["class", "text text-danger mt-1", 4, "ngIf"], [1, "col-form-label"], ["type", "password", "formControlName", "password", "required", "", 1, "form-control"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1"], [1, "form-group", "form-row", "mt-3", "mb-0"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", 3, "disabled", "click"], [1, "login-divider"], [1, "social", "mt-3"], [1, "form-group", "btn-showcase", "d-flex"], [1, "btn", "social-btn", "btn-fb", "d-inline-block", 3, "click"], [1, "fa", "fa-facebook"], [1, "btn", "social-btn", "btn-twitter", "d-inline-block", 3, "click"], [1, "fa", "fa-twitter"], [1, "btn", "social-btn", "btn-google", "d-inline-block", 3, "click"], [1, "fa", "fa-google"], [1, "text", "text-danger", "mt-1"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOGIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your Username and Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_form_12_Template, 29, 8, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newUser);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: [".loader--text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 200%;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.loader--text[_ngcontent-%COMP%]:after {\n  content: \"Loading\";\n  font-weight: bold;\n  -webkit-animation-name: loading-text;\n          animation-name: loading-text;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n\n@-webkit-keyframes loading-text {\n  0% {\n    content: \"Loading\";\n  }\n  25% {\n    content: \"Loading.\";\n  }\n  50% {\n    content: \"Loading..\";\n  }\n  75% {\n    content: \"Loading...\";\n  }\n}\n\n@keyframes loading-text {\n  0% {\n    content: \"Loading\";\n  }\n  25% {\n    content: \"Loading.\";\n  }\n  50% {\n    content: \"Loading..\";\n  }\n  75% {\n    content: \"Loading...\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFFckM7O0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtFQUUxQjtFQUFBO0lBQ0UsNEJBQTRCO0VBRTlCO0VBQUE7SUFDRSw0QkFBNEI7RUFFOUI7RUFBQTtJQUNFLHdCQUF3QjtFQUUxQjtBQUNGOztBQWRBO0VBQ0U7SUFDRSx3QkFBd0I7RUFFMUI7RUFBQTtJQUNFLDRCQUE0QjtFQUU5QjtFQUFBO0lBQ0UsNEJBQTRCO0VBRTlCO0VBQUE7SUFDRSx3QkFBd0I7RUFFMUI7QUFDRjs7QUFBQTtFQUNFO0lBQ0Usa0JBQWtCO0VBR3BCO0VBREE7SUFDRSxtQkFBbUI7RUFHckI7RUFEQTtJQUNFLG9CQUFvQjtFQUd0QjtFQURBO0lBQ0UscUJBQXFCO0VBR3ZCO0FBQ0Y7O0FBZkE7RUFDRTtJQUNFLGtCQUFrQjtFQUdwQjtFQURBO0lBQ0UsbUJBQW1CO0VBR3JCO0VBREE7SUFDRSxvQkFBb0I7RUFHdEI7RUFEQTtJQUNFLHFCQUFxQjtFQUd2QjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci0tdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLS10ZXh0OmFmdGVyIHtcclxuICBjb250ZW50OiBcIkxvYWRpbmdcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb24tbmFtZTogbG9hZGluZy10ZXh0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyIHtcclxuICAxNSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMzBweCk7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy10ZXh0IHtcclxuICAwJSB7XHJcbiAgICBjb250ZW50OiBcIkxvYWRpbmdcIjtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGNvbnRlbnQ6IFwiTG9hZGluZy5cIjtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGNvbnRlbnQ6IFwiTG9hZGluZy4uXCI7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBjb250ZW50OiBcIkxvYWRpbmcuLi5cIjtcclxuICB9XHJcbn1cclxuIl19 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hFtW":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/customizer.service.ts ***!
      \*******************************************************/

    /*! exports provided: CustomizerService */

    /***/
    function hFtW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomizerService", function () {
        return CustomizerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/config/config */
      "RFpt");

      var CustomizerService = /*#__PURE__*/function () {
        function CustomizerService() {
          _classCallCheck(this, CustomizerService);

          // Configration Layout
          this.data = _shared_data_config_config__WEBPACK_IMPORTED_MODULE_1__["ConfigDB"].data;
          document.body.className = this.data.color.mix_layout;
          document.body.setAttribute("main-theme-layout", this.data.settings.layout_type);
          document.getElementsByTagName('html')[0].setAttribute('dir', this.data.settings.layout_type);
          var color = localStorage.getItem("color") || this.data.color.color;
          var layoutVersion = localStorage.getItem("layoutVersion") || this.data.color.layout_version;

          if (color) {
            this.createStyle(color);
            if (layoutVersion) document.body.className = layoutVersion;
          }
        } // Set Customize layout Version


        _createClass(CustomizerService, [{
          key: "setLayoutType",
          value: function setLayoutType(layout) {
            document.body.setAttribute("main-theme-layout", layout);
            document.getElementsByTagName('html')[0].setAttribute('dir', layout);
            this.data.settings.layout_type = layout;
          } // Set Customize layout Version

        }, {
          key: "setLayout",
          value: function setLayout(layout) {
            document.body.className = layout;
            this.data.color.mix_layout = layout;
            localStorage.setItem('layout_type', layout);
          } // Set Color 

        }, {
          key: "setColor",
          value: function setColor(color) {
            this.createStyle(color);
            this.data.color.color = color;

            if (color == "color-1") {
              this.data.color.primary_color = '#4466f2';
              this.data.color.secondary_color = '#1ea6ec';
            } else if (color == "color-2") {
              this.data.color.primary_color = '#0288d1';
              this.data.color.secondary_color = '#26c6da';
            } else if (color == "color-3") {
              this.data.color.primary_color = '#8e24aa';
              this.data.color.secondary_color = '#ff6e40';
            } else if (color == "color-4") {
              this.data.color.primary_color = '#4c2fbf';
              this.data.color.secondary_color = '#2e9de4';
            } else if (color == "color-5") {
              this.data.color.primary_color = '#7c4dff';
              this.data.color.secondary_color = '#7b1fa2';
            } else if (color == "color-6") {
              this.data.color.primary_color = '#3949ab';
              this.data.color.secondary_color = '#4fc3f7';
            }

            localStorage.setItem('color', this.data.color.color);
            localStorage.setItem('primary_color', this.data.color.primary_color);
            localStorage.setItem('secondary_color', this.data.color.secondary_color);
            window.location.reload();
          } // Set Customize layout Version

        }, {
          key: "setColorLightScheme",
          value: function setColorLightScheme(color) {
            this.setColor(color);
            this.data.color.layout_version = 'light';
            localStorage.setItem('layoutVersion', this.data.color.layout_version);
          } // Set Customize layout Version

        }, {
          key: "setColorDarkScheme",
          value: function setColorDarkScheme(color) {
            this.setColor(color);
            this.data.color.layout_version = 'dark-only';
            localStorage.setItem('layoutVersion', this.data.color.layout_version);
          } // Create style sheet append in head

        }, {
          key: "createStyle",
          value: function createStyle(color) {
            var head = document.head;
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = window.location.origin + "/assets/css/" + color + ".css";
            head.appendChild(link);
          }
        }]);

        return CustomizerService;
      }();

      CustomizerService.ɵfac = function CustomizerService_Factory(t) {
        return new (t || CustomizerService)();
      };

      CustomizerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomizerService,
        factory: CustomizerService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "j1Tj":
    /*!*************************************************!*\
      !*** ./src/app/shared/routes/content-routes.ts ***!
      \*************************************************/

    /*! exports provided: content */

    /***/
    function j1Tj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "content", function () {
        return content;
      });

      var content = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-dashboard-dashboard-module */
          [__webpack_require__.e("default~components-configs-configs-module~components-dashboard-dashboard-module~components-widgets-w~bdffd707"), __webpack_require__.e("default~components-dashboard-dashboard-module~components-widgets-widgets-module"), __webpack_require__.e("default~components-configs-configs-module~components-dashboard-dashboard-module"), __webpack_require__.e("default~components-dashboard-dashboard-module~components-map-map-module"), __webpack_require__.e("components-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ../../components/dashboard/dashboard.module */
          "5+sL")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          breadcrumb: "Dashboard"
        }
      }, {
        path: 'base',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-base-base-module */
          "components-base-base-module").then(__webpack_require__.bind(null,
          /*! ../../components/base/base.module */
          "cGcg")).then(function (m) {
            return m.BaseModule;
          });
        },
        data: {
          breadcrumb: "Base"
        }
      }, {
        path: 'config',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-configs-configs-module */
          [__webpack_require__.e("default~components-configs-configs-module~components-dashboard-dashboard-module~components-widgets-w~bdffd707"), __webpack_require__.e("default~components-configs-configs-module~components-dashboard-dashboard-module"), __webpack_require__.e("components-configs-configs-module")]).then(__webpack_require__.bind(null,
          /*! ../../components/configs/configs.module */
          "V0Mb")).then(function (m) {
            return m.ConfigsModule;
          });
        },
        data: {
          breadcrumb: "Advance"
        }
      }, {
        path: 'icons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-icons-icons-module */
          "components-icons-icons-module").then(__webpack_require__.bind(null,
          /*! ../../components/icons/icons.module */
          "Gba+")).then(function (m) {
            return m.IconsModule;
          });
        },
        data: {
          breadcrumb: "Icons"
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-users-users-module */
          "components-users-users-module").then(__webpack_require__.bind(null,
          /*! ../../components/users/users.module */
          "E6va")).then(function (m) {
            return m.UsersModule;
          });
        },
        data: {
          breadcrumb: "Users"
        }
      }, {
        path: 'to-do',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-to-do-to-do-module */
          "components-to-do-to-do-module").then(__webpack_require__.bind(null,
          /*! ../../components/to-do/to-do.module */
          "H1qS")).then(function (m) {
            return m.ToDoModule;
          });
        },
        data: {
          breadcrumb: "To-do"
        }
      }, {
        path: 'social-app',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-social-app-social-app-module */
          "components-social-app-social-app-module").then(__webpack_require__.bind(null,
          /*! ../../components/social-app/social-app.module */
          "A/vE")).then(function (m) {
            return m.SocialAppModule;
          });
        },
        data: {
          breadcrumb: "Social-app"
        }
      }, {
        path: 'support-ticket',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-support-ticket-support-ticket-module */
          "components-support-ticket-support-ticket-module").then(__webpack_require__.bind(null,
          /*! ../../components/support-ticket/support-ticket.module */
          "UNkk")).then(function (m) {
            return m.SupportTicketModule;
          });
        },
        data: {
          breadcrumb: "Support-Ticket"
        }
      }, {
        path: 'search-result',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-search-result-search-result-module */
          "components-search-result-search-result-module").then(__webpack_require__.bind(null,
          /*! ../../components/search-result/search-result.module */
          "W5AV")).then(function (m) {
            return m.SearchResultModule;
          });
        },
        data: {
          breadcrumb: "Search-Result"
        }
      }, {
        path: 'sample-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-sample-page-sample-page-module */
          "components-sample-page-sample-page-module").then(__webpack_require__.bind(null,
          /*! ../../components/sample-page/sample-page.module */
          "0vw+")).then(function (m) {
            return m.SamplePageModule;
          });
        },
        data: {
          breadcrumb: "Sample-Page"
        }
      }, {
        path: 'map',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-map-map-module */
          [__webpack_require__.e("default~components-dashboard-dashboard-module~components-map-map-module"), __webpack_require__.e("components-map-map-module")]).then(__webpack_require__.bind(null,
          /*! ../../components/map/map.module */
          "s1Mh")).then(function (m) {
            return m.MapModule;
          });
        },
        data: {
          breadcrumb: "Map"
        }
      }, {
        path: 'ui-elements',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-ui-elements-ui-elements-module */
          "components-ui-elements-ui-elements-module").then(__webpack_require__.bind(null,
          /*! ../../components/ui-elements/ui-elements.module */
          "+KiH")).then(function (m) {
            return m.UiElementsModule;
          });
        },
        data: {
          breadcrumb: "UI-Elements"
        }
      }, {
        path: 'widgets',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-widgets-widgets-module */
          [__webpack_require__.e("default~components-configs-configs-module~components-dashboard-dashboard-module~components-widgets-w~bdffd707"), __webpack_require__.e("default~components-dashboard-dashboard-module~components-widgets-widgets-module"), __webpack_require__.e("components-widgets-widgets-module")]).then(__webpack_require__.bind(null,
          /*! ../../components/widgets/widgets.module */
          "IVP+")).then(function (m) {
            return m.WidgetsModule;
          });
        },
        data: {
          breadcrumb: "Widgets"
        }
      }, {
        path: 'to-do-firebase',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-to-do-firebase-to-do-firebase-module */
          "components-to-do-firebase-to-do-firebase-module").then(__webpack_require__.bind(null,
          /*! ../../components/to-do-firebase/to-do-firebase.module */
          "zlNs")).then(function (m) {
            return m.ToDoFirebaseModule;
          });
        },
        data: {
          breadcrumb: "To-do"
        }
      }];
      /***/
    },

    /***/
    "jArk":
    /*!***********************************************************!*\
      !*** ./src/app/shared/directives/fullscreen.directive.ts ***!
      \***********************************************************/

    /*! exports provided: ToggleFullscreenDirective */

    /***/
    function jArk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function () {
        return ToggleFullscreenDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var screenfull = __webpack_require__(
      /*! screenfull */
      "k7+O");

      var ToggleFullscreenDirective = /*#__PURE__*/function () {
        function ToggleFullscreenDirective() {
          _classCallCheck(this, ToggleFullscreenDirective);
        }

        _createClass(ToggleFullscreenDirective, [{
          key: "onClick",
          value: function onClick() {
            if (screenfull.enabled) {
              screenfull.toggle();
            }
          }
        }]);

        return ToggleFullscreenDirective;
      }();

      ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) {
        return new (t || ToggleFullscreenDirective)();
      };

      ToggleFullscreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ToggleFullscreenDirective,
        selectors: [["", "toggleFullscreen", ""]],
        hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        }
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullscreenDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[toggleFullscreen]'
          }]
        }], null, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /***/

    },

    /***/
    "pqks":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
      \****************************************************************************/

    /*! exports provided: FeatherIconsComponent */

    /***/
    function pqks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatherIconsComponent", function () {
        return FeatherIconsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! feather-icons */
      "d8Z/");
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_1__);

      var FeatherIconsComponent = /*#__PURE__*/function () {
        function FeatherIconsComponent() {
          _classCallCheck(this, FeatherIconsComponent);
        }

        _createClass(FeatherIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_1__["replace"]();
            });
          }
        }]);

        return FeatherIconsComponent;
      }();

      FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) {
        return new (t || FeatherIconsComponent)();
      };

      FeatherIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeatherIconsComponent,
        selectors: [["app-feather-icons"]],
        inputs: {
          icon: "icon"
        },
        decls: 1,
        vars: 1,
        template: function FeatherIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-feather", ctx.icon);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatherIconsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-feather-icons',
            templateUrl: './feather-icons.component.html',
            styleUrls: ['./feather-icons.component.scss']
          }]
        }], function () {
          return [];
        }, {
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['icon']
          }]
        });
      })();
      /***/

    },

    /***/
    "u4sm":
    /*!*********************************************!*\
      !*** ./src/app/shared/guard/admin.guard.ts ***!
      \*********************************************/

    /*! exports provided: AdminGuard */

    /***/
    function u4sm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/firebase/auth.service */
      "VaEd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(authService, router) {
          _classCallCheck(this, AdminGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            // Guard for user is login or not
            var user = JSON.parse(localStorage.getItem('user'));

            if (!user) {
              this.router.navigate(['/auth/login']);
              return true;
            }

            return true;
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminGuard,
        factory: AdminGuard.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _app_pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../app/pages/authentication/login/login.component */
      "JJXW");
      /* harmony import */


      var _shared_components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/components/layout/content-layout/content-layout.component */
      "XPAA");
      /* harmony import */


      var _shared_components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/components/layout/full-layout/full-layout.component */
      "y/Jg");
      /* harmony import */


      var _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/routes/content-routes */
      "j1Tj");
      /* harmony import */


      var _shared_routes_full_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/routes/full.routes */
      "0AgT");

      var routes = [{
        path: '',
        redirectTo: 'authentication/login/video',
        pathMatch: 'full'
      }, {
        path: 'authentication/login/video',
        component: _app_pages_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: '',
        component: _shared_components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"],
        // canActivate: [AdminGuard],
        children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_5__["content"]
      }, {
        path: '',
        component: _shared_components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_4__["FullLayoutComponent"],
        // canActivate: [AdminGuard],
        children: _shared_routes_full_routes__WEBPACK_IMPORTED_MODULE_6__["full"]
      }, {
        path: '**',
        redirectTo: 'error/404'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          // preloadingStrategy: PreloadAllModules,
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              // preloadingStrategy: PreloadAllModules,
              anchorScrolling: 'enabled',
              scrollPositionRestoration: 'enabled',
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xgtH":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/chat.service.ts ***!
      \*************************************************/

    /*! exports provided: ChatService */

    /***/
    function xgtH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_chat_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/chat/chat */
      "F+b7");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var today = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      var ChatService = /*#__PURE__*/function () {
        function ChatService() {
          _classCallCheck(this, ChatService);

          this.chat = [];
          this.users = [];
          this.chat = _shared_data_chat_chat__WEBPACK_IMPORTED_MODULE_1__["ChatDB"].chat;
          this.users = _shared_data_chat_chat__WEBPACK_IMPORTED_MODULE_1__["ChatDB"].chatUser;
        } // Get User Data


        _createClass(ChatService, [{
          key: "getUsers",
          value: function getUsers() {
            var _this17 = this;

            var users = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              observer.next(_this17.users);
              observer.complete();
            });
            return users;
          } // Get cuurent user

        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
              return users.find(function (item) {
                return item.authenticate === 1;
              });
            }));
          } // chat to user

        }, {
          key: "chatToUser",
          value: function chatToUser(id) {
            return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
              return users.find(function (item) {
                return item.id === id;
              });
            }));
          } // Get users chat

        }, {
          key: "getUserChat",
          value: function getUserChat() {
            var _this18 = this;

            var chat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              observer.next(_this18.chat);
              observer.complete();
            });
            return chat;
          } // Get chat History

        }, {
          key: "getChatHistory",
          value: function getChatHistory(id) {
            return this.getUserChat().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
              return users.find(function (item) {
                return item.id === id;
              });
            }));
          } // Send Message to user

        }, {
          key: "sendMessage",
          value: function sendMessage(chat) {
            var _this19 = this;

            this.chat.filter(function (chats) {
              if (chats.id == chat.receiver) {
                chats.message.push({
                  sender: chat.sender,
                  time: today.toLowerCase(),
                  text: chat.message
                });
                setTimeout(function () {
                  document.querySelector(".chat-history").scrollBy({
                    top: 200,
                    behavior: 'smooth'
                  });
                }, 310);

                _this19.responseMessage(chat);
              }
            });
          }
        }, {
          key: "responseMessage",
          value: function responseMessage(chat) {
            this.chat.filter(function (chats) {
              if (chats.id == chat.receiver) {
                setTimeout(function () {
                  chats.message.push({
                    sender: chat.receiver,
                    time: today.toLowerCase(),
                    text: 'Hey This is ' + chat.receiver_name + ', Sorry I busy right now, I will text you later'
                  });
                }, 2000);
                setTimeout(function () {
                  document.querySelector(".chat-history").scrollBy({
                    top: 200,
                    behavior: 'smooth'
                  });
                }, 2310);
              }
            });
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)();
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "y/Jg":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/components/layout/full-layout/full-layout.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: FullLayoutComponent */

    /***/
    function yJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function () {
        return FullLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FullLayoutComponent = /*#__PURE__*/function () {
        function FullLayoutComponent() {
          _classCallCheck(this, FullLayoutComponent);
        }

        _createClass(FullLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FullLayoutComponent;
      }();

      FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
        return new (t || FullLayoutComponent)();
      };

      FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullLayoutComponent,
        selectors: [["app-full-layout"]],
        decls: 2,
        vars: 0,
        consts: [[1, "page-wrapper"]],
        template: function FullLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full-layout.component.html',
            styleUrls: ['./full-layout.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map