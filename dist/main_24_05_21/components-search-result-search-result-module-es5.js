(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-search-result-search-result-module"], {
    /***/
    "Ix0R":
    /*!**************************************************************************!*\
      !*** ./src/app/components/search-result/search-result-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: SearchResultRoutingModule */

    /***/
    function Ix0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultRoutingModule", function () {
        return SearchResultRoutingModule;
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


      var _search_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-result.component */
      "w8Y3");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _search_result_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultComponent"],
          data: {
            title: "Search Result",
            breadcrumb: ""
          }
        }]
      }];

      var SearchResultRoutingModule = function SearchResultRoutingModule() {
        _classCallCheck(this, SearchResultRoutingModule);
      };

      SearchResultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SearchResultRoutingModule
      });
      SearchResultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SearchResultRoutingModule_Factory(t) {
          return new (t || SearchResultRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultRoutingModule, [{
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
    "W5AV":
    /*!******************************************************************!*\
      !*** ./src/app/components/search-result/search-result.module.ts ***!
      \******************************************************************/

    /*! exports provided: SearchResultModule */

    /***/
    function W5AV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultModule", function () {
        return SearchResultModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! mousetrap */
      "imBb");
      /* harmony import */


      var mousetrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _search_result_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-result-routing.module */
      "Ix0R");
      /* harmony import */


      var _search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search-result.component */
      "w8Y3");
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      "tdrf");

      var SearchResultModule = function SearchResultModule() {
        _classCallCheck(this, SearchResultModule);
      };

      SearchResultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SearchResultModule
      });
      SearchResultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SearchResultModule_Factory(t) {
          return new (t || SearchResultModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchResultRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchResultModule, {
          declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"], _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_8__["ImageGalleryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchResultRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"], _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_8__["ImageGalleryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _search_result_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchResultRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "tdrf":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/search-result/image-gallery/image-gallery.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ImageGalleryComponent */

    /***/
    function tdrf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function () {
        return ImageGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ks89/angular-modal-gallery */
      "rHMi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ImageGalleryComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageGalleryComponent_ng_container_2_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var img_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openImageModalRowDescription(img_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var img_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0() {
        return {
          downloadable: true
        };
      };

      var ImageGalleryComponent = /*#__PURE__*/function () {
        function ImageGalleryComponent(galleryService) {
          _classCallCheck(this, ImageGalleryComponent);

          this.galleryService = galleryService;
          this.imagesRect = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
            img: 'assets/images/big-lightgallry/01.jpg',
            extUrl: 'http://www.google.com',
            title: 'SPG 1',
            description: '<h4>SPG 1</h4><p>PLC touch screen 3 axes fully automatic surface and plunge grinding system</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](1, {
            img: 'assets/images/big-lightgallry/02.jpg',
            extUrl: 'http://www.google.com',
            title: 'SPG 2',
            description: '<h4>SPG 2</h4><p>Wheel head will raise up to end, start and reference positionable parks at left or right side after cycle is completed.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](3, {
            img: 'assets/images/big-lightgallry/03.jpg',
            extUrl: 'http://www.google.com',
            title: 'SPI 1',
            description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](10, {
            img: 'assets/images/big-lightgallry/04.jpg',
            extUrl: 'http://www.google.com',
            title: 'SPI 20',
            description: '<h4>SPI 20</h4><p>To achieve better accuracy, the number of free passes between down-feeds can be preset depending on work piece material</p>'
          }), new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](11, {
            img: 'assets/images/big-lightgallry/05.jpg',
            extUrl: 'http://www.google.com',
            title: 'SPI 03',
            description: '<h4>High precision</h4><p> cartridge type spindle equipped with 4 pieces of class 7 angular contact ball bearings, suitable for heavy duty grinding.</p>'
          })];
          this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].DEFAULT
          };
          this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].SIMPLE
          };
          this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].ADVANCED
          };
          this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].FULL
          };
          this.buttonsConfigCustom = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonsStrategy"].CUSTOM,
            buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_FULL_SCREEN"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_DELETE"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_EXTURL"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_DOWNLOAD"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_CLOSE"]]
          };
          this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true)
          };
        }

        _createClass(ImageGalleryComponent, [{
          key: "openImageModalRowDescription",
          value: function openImageModalRowDescription(image) {
            var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
            this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, {
              layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](index, true)
            });
          }
        }, {
          key: "getCurrentIndexCustomLayout",
          value: function getCurrentIndexCustomLayout(image, images) {
            return image ? images.indexOf(image) : -1;
          }
        }, {
          key: "onButtonBeforeHook",
          value: function onButtonBeforeHook(event) {
            if (!event || !event.button) {
              return;
            }

            if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].DELETE) {
              this.imagesRect = this.imagesRect.filter(function (val) {
                return event.image && val.id !== event.image.id;
              });
            }
          }
        }, {
          key: "onButtonAfterHook",
          value: function onButtonAfterHook(event) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "onCustomButtonBeforeHook",
          value: function onCustomButtonBeforeHook(event, galleryId) {
            var _this = this;

            if (!event || !event.button) {
              return;
            }

            if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CUSTOM) {
              this.addRandomImage();
              setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.imagesRect.length - 1);
              }, 0);
            }
          }
        }, {
          key: "onCustomButtonAfterHook",
          value: function onCustomButtonAfterHook(event, galleryId) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "addRandomImage",
          value: function addRandomImage() {
            var imageToCopy = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
            var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
            this.imagesRect = [].concat(_toConsumableArray(this.imagesRect), [newImage]);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImageGalleryComponent;
      }();

      ImageGalleryComponent.ɵfac = function ImageGalleryComponent_Factory(t) {
        return new (t || ImageGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]));
      };

      ImageGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageGalleryComponent,
        selectors: [["app-image-gallery"]],
        decls: 4,
        vars: 7,
        consts: [["id", "aniimated-thumbnials", 1, "my-gallery", "row", "gallery-with-description"], [1, "my-app-custom-plain-container-with-desc", "row"], [4, "ngFor", "ngForOf"], [3, "id", "modalImages", "plainGalleryConfig", "currentImageConfig", "buttonsConfig"], [1, "my-app-custom-image-with-desc", "col-xl-3", "col-sm-6"], [3, "src", "click"], [1, "caption"]],
        template: function ImageGalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageGalleryComponent_ng_container_2_Template, 8, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ks-modal-gallery", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagesRect);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 1)("modalImages", ctx.imagesRect)("plainGalleryConfig", ctx.customPlainGalleryRowDescConfig)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("buttonsConfig", ctx.buttonsConfigCustom);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ɵd"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageGalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-image-gallery',
            templateUrl: './image-gallery.component.html',
            styleUrls: ['./image-gallery.component.scss']
          }]
        }], function () {
          return [{
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "w8Y3":
    /*!*********************************************************************!*\
      !*** ./src/app/components/search-result/search-result.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SearchResultComponent */

    /***/
    function w8Y3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () {
        return SearchResultComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-gallery/image-gallery.component */
      "tdrf");

      function SearchResultComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Images ");
        }
      }

      function SearchResultComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About 12,120 results (0.50 seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchResultComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Videos ");
        }
      }

      function SearchResultComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About 6,000 results (0.60 seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SPG 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ref.info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2.5 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SPG 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ref.info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2.5 stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "590 votes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nav", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "iframe", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "iframe", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SearchResultComponent = /*#__PURE__*/function () {
        function SearchResultComponent() {
          _classCallCheck(this, SearchResultComponent);
        }

        _createClass(SearchResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchResultComponent;
      }();

      SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) {
        return new (t || SearchResultComponent)();
      };

      SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchResultComponent,
        selectors: [["app-search-result"]],
        decls: 19,
        vars: 0,
        consts: [[1, "container-fluid", "search-page"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "search-form"], [1, "form-group", "m-0"], ["type", "search", "placeholder", "Search..", 1, "form-control-plaintext"], ["id", "search-custom", 1, "card-body"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs", "nav-material"], ["id", "tabset"], ["ngbTabTitle", "", "class", "nav-item"], ["ngbTabContent", "", "class", "tab-content"], [1, "icon-image"], ["id", "image-links", "role", "tabpanel", "aria-labelledby", "image-link", 1, "tab-pane", "fade", "show"], [1, "info-block", "m-t-30"], [1, "pb-4", "col-sm-12", "digits"], ["aria-label", "..."], [1, "pagination", "pagination-primary"], [1, "page-item", "disabled"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item", "active"], [1, "sr-only"], [1, "icon-video-clapper"], ["id", "video-links", "role", "tabpanel", "aria-labelledby", "video-link", 1, "tab-pane", "fade", "show"], [1, "col-xl-6"], [1, "pb-4"], [1, "media", "info-block"], ["width", "200", "height", "100", "src", "https://www.youtube.com/watch?v=84RgALc8XAk", 1, "mr-3", "mb-3"], [1, "media-body"], ["href", ""], [1, "star-ratings"], [1, "search-info"], ["width", "200", "height", "100", "src", "https://youtu.be/FjEnv3KJU70", 1, "mr-3", "mb-3"], [1, "info-block"], [1, "embed-responsive", "embed-responsive-21by9", "lg-mt"], ["width", "560", "height", "315", "src", "https://youtu.be/fg3JgF9TMXs", "allowfullscreen", ""], [1, "embed-responsive", "embed-responsive-21by9"], ["width", "560", "height", "315", "src", "https://youtu.be/3o4Aoq4ezec", "allowfullscreen", ""]],
        template: function SearchResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-tabset", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchResultComponent_ng_template_14_Template, 2, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SearchResultComponent_ng_template_15_Template, 25, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SearchResultComponent_ng_template_17_Template, 2, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SearchResultComponent_ng_template_18_Template, 65, 0, "ng-template", 12);

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
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_2__["ImageGalleryComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search-result',
            templateUrl: './search-result.component.html',
            styleUrls: ['./search-result.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-search-result-search-result-module-es5.js.map