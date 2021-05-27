(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-users-module"], {
    /***/
    "1COG":
    /*!*********************************************************************!*\
      !*** ./src/app/components/users/user-cards/user-cards.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UserCardsComponent */

    /***/
    function COG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCardsComponent", function () {
        return UserCardsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserCardsComponent = /*#__PURE__*/function () {
        function UserCardsComponent() {
          _classCallCheck(this, UserCardsComponent);
        }

        _createClass(UserCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserCardsComponent;
      }();

      UserCardsComponent.ɵfac = function UserCardsComponent_Factory(t) {
        return new (t || UserCardsComponent)();
      };

      UserCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserCardsComponent,
        selectors: [["app-user-cards"]],
        decls: 284,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-xl-4"], [1, "card", "custom-card"], [1, "card-header"], ["src", "assets/images/user-card/1.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "counter"], ["src", "assets/images/user-card/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/avtar/16.jpg", "alt", "", 1, "rounded-circle"], ["src", "assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/avtar/11.jpg", "alt", "", 1, "rounded-circle"], ["src", "assets/images/user-card/7.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/user-card/5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/user-card/6.jpg", "alt", "", 1, "img-fluid"]],
        template: function UserCardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mark Jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "9564");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Johan Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "2578");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Dev John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Devloper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "6545");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "91");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Johan Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "2578");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Dev John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Devloper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "6545");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "91");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Mark Jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "9564");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "49");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "K");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Total Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "96");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-cards',
            templateUrl: './user-cards.component.html',
            styleUrls: ['./user-cards.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9UTC":
    /*!**********************************************************!*\
      !*** ./src/app/components/users/users-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: UsersRoutingModule */

    /***/
    function UTC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
        return UsersRoutingModule;
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


      var _users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users-profile/users-profile.component */
      "b34V");
      /* harmony import */


      var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-edit/user-edit.component */
      "Gsdg");
      /* harmony import */


      var _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-cards/user-cards.component */
      "1COG");

      var routes = [{
        path: '',
        children: [{
          path: 'profile',
          component: _users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_2__["UsersProfileComponent"],
          data: {
            title: "Profile",
            breadcrumb: "Profile"
          }
        }, {
          path: 'edit',
          component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"],
          data: {
            title: "Edit",
            breadcrumb: "Edit"
          }
        }, {
          path: 'cards',
          component: _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_4__["UserCardsComponent"],
          data: {
            title: "Cards",
            breadcrumb: "Cards"
          }
        }]
      }];

      var UsersRoutingModule = function UsersRoutingModule() {
        _classCallCheck(this, UsersRoutingModule);
      };

      UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsersRoutingModule
      });
      UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsersRoutingModule_Factory(t) {
          return new (t || UsersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
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
    "E6va":
    /*!**************************************************!*\
      !*** ./src/app/components/users/users.module.ts ***!
      \**************************************************/

    /*! exports provided: UsersModule */

    /***/
    function E6va(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
        return UsersModule;
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


      var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");
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


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-routing.module */
      "9UTC");
      /* harmony import */


      var _users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./users-profile/users-profile.component */
      "b34V");
      /* harmony import */


      var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-edit/user-edit.component */
      "Gsdg");
      /* harmony import */


      var _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user-cards/user-cards.component */
      "1COG");

      var UsersModule = function UsersModule() {
        _classCallCheck(this, UsersModule);
      };

      UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsersModule
      });
      UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsersModule_Factory(t) {
          return new (t || UsersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, {
          declarations: [_users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_7__["UsersProfileComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"], _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_9__["UserCardsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_users_profile_users_profile_component__WEBPACK_IMPORTED_MODULE_7__["UsersProfileComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_8__["UserEditComponent"], _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_9__["UserCardsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Gsdg":
    /*!*******************************************************************!*\
      !*** ./src/app/components/users/user-edit/user-edit.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UserEditComponent */

    /***/
    function Gsdg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
        return UserEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UserEditComponent = /*#__PURE__*/function () {
        function UserEditComponent() {
          _classCallCheck(this, UserEditComponent);
        }

        _createClass(UserEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserEditComponent;
      }();

      UserEditComponent.ɵfac = function UserEditComponent_Factory(t) {
        return new (t || UserEditComponent)();
      };

      UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserEditComponent,
        selectors: [["app-user-edit"]],
        decls: 262,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "edit-profile"], [1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-options"], ["data-toggle", "card-collapse", 1, "card-options-collapse", 3, "routerLink"], [1, "fe", "fe-chevron-up"], ["data-toggle", "card-remove", 1, "card-options-remove", 3, "routerLink"], [1, "fe", "fe-x"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-auto"], ["alt", "", "src", "assets/images/user/7.jpg", 1, "img-70", "rounded-circle"], [1, "col"], [1, "mb-1"], [1, "mb-4"], [1, "form-group"], [1, "form-label"], ["rows", "5", 1, "form-control"], ["placeholder", "your-email@domain.com", 1, "form-control"], ["type", "password", "value", "password", 1, "form-control"], ["placeholder", "http://Uplor.com", 1, "form-control"], [1, "form-footer"], [1, "btn", "btn-primary", "btn-block"], [1, "col-lg-8"], [1, "col-md-5"], ["type", "text", "placeholder", "Company", 1, "form-control"], [1, "col-sm-6", "col-md-3"], ["type", "text", "placeholder", "Username", 1, "form-control"], [1, "col-sm-6", "col-md-4"], ["type", "email", "placeholder", "Email", 1, "form-control"], [1, "col-sm-6", "col-md-6"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], [1, "col-md-12"], ["type", "text", "placeholder", "Home Address", 1, "form-control"], ["type", "text", "placeholder", "City", 1, "form-control"], ["type", "number", "placeholder", "ZIP Code", 1, "form-control"], [1, "form-control", "btn-square"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "form-group", "mb-0"], ["rows", "5", "placeholder", "Enter About your description", 1, "form-control"], [1, "card-footer", "text-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "table-responsive"], [1, "table", "card-table", "table-vcenter", "text-nowrap"], [1, "text-inherit", 3, "routerLink"], [1, "status-icon", "bg-success"], [1, "text-right"], [1, "icon", 3, "routerLink"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-transparent", "btn-sm", 3, "routerLink"], [1, "fa", "fa-link"], [1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fa", "fa-trash"], [1, "status-icon", "bg-danger"], [1, "status-icon", "bg-warning"]],
        template: function UserEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MARK JECNO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "DESIGNER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "On the other hand, we denounce with righteous indignation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email-Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Edit Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Postal Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "select", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Canada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Usa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Aus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "textarea", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Add projects And Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "table", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Untrammelled prevents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "28 May 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "$56,908");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "12 June 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " On going");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "$45,087");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "12 July 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "$60,123");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "14 June 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "$70,435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Untrammelled prevents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "25 June 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "$15,987");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Delete");

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
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-edit',
            templateUrl: './user-edit.component.html',
            styleUrls: ['./user-edit.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "a5BO":
    /*!********************************************************************************!*\
      !*** ./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js ***!
      \********************************************************************************/

    /*! exports provided: CountToDirective, CountToModule */

    /***/
    function a5BO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountToDirective", function () {
        return CountToDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountToModule", function () {
        return CountToModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CountToDirective = /*#__PURE__*/function () {
        /**
         * @param {?} el
         */
        function CountToDirective(el) {
          _classCallCheck(this, CountToDirective);

          this.el = el;
          this.from = 0;
          this.duration = 4;
          this.e = this.el.nativeElement;
          this.refreshInterval = 30;
          this.step = 0;
        }
        /**
         * @return {?}
         */


        _createClass(CountToDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.CountTo) {
              this.start();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "calculate",
          value: function calculate() {
            this.duration = this.duration * 1000;
            this.steps = Math.ceil(this.duration / this.refreshInterval);
            this.increment = (this.CountTo - this.from) / this.steps;
            this.num = this.from;
          }
          /**
           * @return {?}
           */

        }, {
          key: "tick",
          value: function tick() {
            var _this = this;

            setTimeout(function () {
              _this.num += _this.increment;
              _this.step++;

              if (_this.step >= _this.steps) {
                _this.num = _this.CountTo;
                _this.e.textContent = _this.CountTo;
              } else {
                _this.e.textContent = Math.round(_this.num);

                _this.tick();
              }
            }, this.refreshInterval);
          }
          /**
           * @return {?}
           */

        }, {
          key: "start",
          value: function start() {
            this.calculate();
            this.tick();
          }
        }]);

        return CountToDirective;
      }();

      CountToDirective.ɵfac = function CountToDirective_Factory(t) {
        return new (t || CountToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CountToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CountToDirective,
        selectors: [["", "CountTo", ""]],
        inputs: {
          from: "from",
          duration: "duration",
          CountTo: "CountTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @nocollapse
       */

      CountToDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      CountToDirective.propDecorators = {
        'CountTo': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'from': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'duration': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountToDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[CountTo]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          from: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          CountTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var CountToModule = /*#__PURE__*/function () {
        function CountToModule() {
          _classCallCheck(this, CountToModule);
        }

        _createClass(CountToModule, null, [{
          key: "forRoot",

          /**
           * Use in AppModule
           * @return {?}
           */
          value: function forRoot() {
            return {
              ngModule: CountToModule,
              providers: []
            };
          }
          /**
           * Use in features modules with lazy loading
           * @return {?}
           */

        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: CountToModule,
              providers: []
            };
          }
        }]);

        return CountToModule;
      }();

      CountToModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CountToModule
      });
      CountToModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CountToModule_Factory(t) {
          return new (t || CountToModule)();
        }
      });
      /**
       * @nocollapse
       */

      CountToModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountToModule, {
          declarations: [CountToDirective],
          exports: [CountToDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountToModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CountToDirective // Pipes.
            // Directives.
            ],
            exports: [CountToDirective // Pipes.
            // Directives.
            ]
          }]
        }], null, null);
      })(); // Public classes.

      /**
       * Angular library starter.
       * Build an Angular library compatible with AoT compilation & Tree shaking.
       * Written by Roberto Simonetti.
       * MIT license.
       * https://github.com/robisim74/angular-count-to
       */

      /**
       * Entry point for all public APIs of the package.
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-count-to.js.map

      /***/

    },

    /***/
    "b34V":
    /*!***************************************************************************!*\
      !*** ./src/app/components/users/users-profile/users-profile.component.ts ***!
      \***************************************************************************/

    /*! exports provided: UsersProfileComponent */

    /***/
    function b34V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersProfileComponent", function () {
        return UsersProfileComponent;
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


      var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");

      var _c0 = function _c0() {
        return {
          downloadable: true
        };
      };

      var UsersProfileComponent = /*#__PURE__*/function () {
        function UsersProfileComponent(galleryService) {
          _classCallCheck(this, UsersProfileComponent);

          this.galleryService = galleryService;
          this.images = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
            img: 'assets/images/other-images/profile-style-img3.png',
            extUrl: 'http://www.google.com'
          })];
          this.images1 = [new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](0, {
            img: 'assets/images/blog/img.png',
            extUrl: 'http://www.google.com'
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
            buttons: [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_FULL_SCREEN"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_EXTURL"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_DOWNLOAD"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["KS_DEFAULT_BTN_CLOSE"]]
          };
          this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["AdvancedLayout"](-1, true)
          };
        }

        _createClass(UsersProfileComponent, [{
          key: "openImageModalRowDescription",
          value: function openImageModalRowDescription(image) {
            var index = this.getCurrentIndexCustomLayout(image, this.images);
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
          key: "onButtonAfterHook",
          value: function onButtonAfterHook(event) {
            if (!event || !event.button) {
              return;
            }
          }
        }, {
          key: "onCustomButtonBeforeHook",
          value: function onCustomButtonBeforeHook(event, galleryId) {
            var _this2 = this;

            if (!event || !event.button) {
              return;
            }

            if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ButtonType"].CUSTOM) {
              this.addRandomImage();
              setTimeout(function () {
                _this2.galleryService.openGallery(galleryId, _this2.images.length - 1);
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
            var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
            var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["Image"](this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
            this.images = [].concat(_toConsumableArray(this.images), [newImage]);
          } //FileUpload

        }, {
          key: "readUrl",
          value: function readUrl(event) {
            var _this3 = this;

            if (event.target.files.length === 0) return; //Image upload validation

            var mimeType = event.target.files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            } // Image upload


            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (_event) {
              _this3.url = reader.result;
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UsersProfileComponent;
      }();

      UsersProfileComponent.ɵfac = function UsersProfileComponent_Factory(t) {
        return new (t || UsersProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]));
      };

      UsersProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsersProfileComponent,
        selectors: [["app-users-profile"]],
        decls: 218,
        vars: 51,
        consts: [[1, "container-fluid"], [1, "user-profile"], [1, "row"], [1, "col-sm-12"], [1, "card", "hovercard", "text-center"], [1, "cardheader"], [1, "user-image"], [1, "avatar"], ["alt", "", 3, "src"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "info"], [1, "col-sm-6", "col-lg-4", "order-sm-1", "order-xl-0"], [1, "col-md-6"], [1, "ttl-info", "text-left"], [1, "fa", "fa-envelope"], [1, "fa", "fa-calendar"], [1, "col-sm-12", "col-lg-4", "order-sm-0", "order-xl-1"], [1, "user-designation"], [1, "title"], ["target", "_blank", "href", ""], [1, "desc", "mt-2"], [1, "col-sm-6", "col-lg-4", "order-sm-2", "order-xl-2"], [1, "fa", "fa-phone"], [1, "fa", "fa-location-arrow"], [1, "social-media"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "follow"], [1, "col-6", "text-md-right", "border-right"], [1, "follow-num", 3, "CountTo", "from", "duration"], [1, "col-6", "text-md-left"], [1, "follow-num", "counter", 3, "CountTo", "from", "duration"], [1, "card"], [1, "profile-img-style"], [1, "col-sm-8"], [1, "media"], ["src", "assets/images/user/7.jpg", "alt", "Generic placeholder image", 1, "img-thumbnail", "rounded-circle", "mr-3"], [1, "media-body", "align-self-center"], [1, "mt-0", "user-name"], [1, "col-sm-4", "align-self-center"], [1, "float-sm-right"], [1, "img-container"], [1, "my-gallery"], [1, "img-fluid", "rounded", 3, "id", "modalImages", "currentImageConfig", "buttonsConfig", "buttonAfterHook"], [1, "like-comment", "mt-4"], [1, "list-inline-item", "border-right", "pr-3"], [1, "m-0"], [1, "fa", "fa-heart"], [1, "ml-2", "counter", 3, "CountTo", "from", "duration"], [1, "list-inline-item", "ml-2"], [1, "fa", "fa-comment"], ["id", "aniimated-thumbnials-2", 1, "row", "mt-4", "pictures", "my-gallery"], [1, "col-sm-6"], [1, "col-lg-12", "col-xl-4"], ["id", "aniimated-thumbnials-3", 1, "my-gallery"], [1, "like-comment", "mt-4", "like-comment-sm-mb"], [1, "col-xl-6"]],
        template: function UsersProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersProfileComponent_Template_input_change_11_listener($event) {
              return ctx.readUrl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA0\xA0\xA0Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Marekjecno@yahoo.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xA0\xA0\xA0BOD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "02 January 1988");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mark jecno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "designer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA0\xA0\xA0Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "India +91 123-456-7890");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\xA0\xA0\xA0Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "B69 Near Schoool Demo Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "5 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ks-modal-gallery", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonAfterHook", function UsersProfileComponent_Template_ks_modal_gallery_buttonAfterHook_100_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "10 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ks-modal-gallery", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonAfterHook", function UsersProfileComponent_Template_ks_modal_gallery_buttonAfterHook_134_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ks-modal-gallery", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonAfterHook", function UsersProfileComponent_Template_ks_modal_gallery_buttonAfterHook_136_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "10 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source .Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h5", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "JOHAN DIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "10 Hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "ks-modal-gallery", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonAfterHook", function UsersProfileComponent_Template_ks_modal_gallery_buttonAfterHook_200_listener($event) {
              return ctx.onButtonAfterHook($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\xA0\xA0Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\xA0\xA0Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "span", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url ? ctx.url : "assets/images/user/1.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 25869)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 659887)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 1)("modalImages", ctx.images)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 2659)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 2)("modalImages", ctx.images)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 3)("modalImages", ctx.images)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c0))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", 4)("modalImages", ctx.images1)("currentImageConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c0))("buttonsConfig", ctx.buttonsConfigCustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", 569)("from", 0)("duration", 5);
          }
        },
        directives: [angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToDirective"], _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["ɵd"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-users-profile',
            templateUrl: './users-profile.component.html',
            styleUrls: ['./users-profile.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-users-users-module-es5.js.map