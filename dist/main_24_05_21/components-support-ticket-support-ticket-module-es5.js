(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-support-ticket-support-ticket-module"], {
    /***/
    "EP6p":
    /*!***********************************************************************!*\
      !*** ./src/app/components/support-ticket/support-ticket.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SupportTicketComponent */

    /***/
    function EP6p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportTicketComponent", function () {
        return SupportTicketComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/tables/support-ticket */
      "H0RT");
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");

      var _c0 = function _c0() {
        return {
          name: "img"
        };
      };

      var _c1 = function _c1() {
        return {
          name: "position"
        };
      };

      var _c2 = function _c2() {
        return {
          name: "salary"
        };
      };

      var _c3 = function _c3() {
        return {
          name: "office"
        };
      };

      var _c4 = function _c4() {
        return {
          name: "skill"
        };
      };

      var _c5 = function _c5() {
        return {
          name: "extn"
        };
      };

      var _c6 = function _c6() {
        return {
          name: "email"
        };
      };

      var _c7 = function _c7(a0, a1, a2, a3, a4, a5, a6) {
        return [a0, a1, a2, a3, a4, a5, a6];
      };

      var SupportTicketComponent = /*#__PURE__*/function () {
        function SupportTicketComponent() {
          _classCallCheck(this, SupportTicketComponent);

          this.support = [];
          this.settings = {
            columns: {
              img: {
                title: 'Image',
                type: 'html'
              },
              position: {
                title: 'Position'
              },
              salary: {
                title: 'Salary'
              },
              office: {
                title: 'Office'
              },
              skill: {
                title: 'Skill',
                type: 'html'
              },
              extn: {
                title: 'Extn'
              },
              email: {
                title: 'Email'
              }
            }
          };
          this.support = _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_1__["supportDB"].ticket;
        }

        _createClass(SupportTicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SupportTicketComponent;
      }();

      SupportTicketComponent.??fac = function SupportTicketComponent_Factory(t) {
        return new (t || SupportTicketComponent)();
      };

      SupportTicketComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SupportTicketComponent,
        selectors: [["app-support-ticket"]],
        decls: 159,
        vars: 40,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-xl-4", "col-sm-6"], [1, "card", "ecommerce-widget"], [1, "card-body", "support-ticket-font"], [1, "col-5"], [1, "counter", 3, "CountTo", "from", "duration"], [1, "col-7"], [1, "text-md-right"], [1, "product-stts", "txt-success", "ml-2"], [1, "icon-angle-up", "f-12", "ml-1"], [1, "product-stts", "txt-danger", "ml-2"], [1, "icon-angle-down", "f-12", "ml-1"], [1, "progress-showcase"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], [1, "progress-showcase", "mt-4"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "25%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "70%"], [1, "table-responsive"], [1, "server-datatable"], [1, "bootstrap", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"]],
        template: function SupportTicketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Support Ticket List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "List of ticket opend by customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Running");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Active Dactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Cancle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Profit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "8989");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Loss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "2560");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "ngx-datatable", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 2563)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 8943)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 2500)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 2060)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 5600)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 2560)("from", 0)("duration", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rows", ctx.support)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction7"](32, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](25, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](26, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](27, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](28, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](29, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](30, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](31, _c6)))("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
          }
        },
        directives: [angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SupportTicketComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-support-ticket',
            templateUrl: './support-ticket.component.html',
            styleUrls: ['./support-ticket.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "H0RT":
    /*!******************************************************!*\
      !*** ./src/app/shared/data/tables/support-ticket.ts ***!
      \******************************************************/

    /*! exports provided: supportDB */

    /***/
    function H0RT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportDB", function () {
        return supportDB;
      });

      var supportDB = function supportDB() {
        _classCallCheck(this, supportDB);
      };

      supportDB.ticket = [{
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Tiger</div></div></div>",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger' role='progressbar'></div></div></div>",
        extn: 5421,
        email: "t.nixon@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Tiger</div></div></div>",
        position: "System Architect",
        salary: "$320,800",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary' role='progressbar'></div></div></div>",
        extn: 5421,
        email: "t.nixon@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/4.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Garrett Winters</div></div></div>",
        position: "Accountant",
        salary: "$170,750",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 8422,
        email: "g.winters@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/6.jpg'><div class='media-body align-self-center'> <div>Ashton Cox</div></div></div>",
        position: "Junior Technical Author",
        salary: "$86,000",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 1562,
        email: "a.cox@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/7.jpg'><div class='media-body align-self-center'> <div>Cedric Kelly</div></div></div>",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary' role='progressbar'></div></div></div>",
        extn: 6224,
        email: "c.kelly@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/8.jpg'><div class='media-body align-self-center'> <div>Cedric Kelly</div></div></div>",
        position: "Senior Javascript Developer",
        salary: "$433,060",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary' role='progressbar'></div></div></div>",
        extn: 6224,
        email: "c.kelly@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/9.jpg'><div class='media-body align-self-center'> <div>Airi Satou</div></div></div>",
        position: "Accountant",
        salary: "$162,700",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 5407,
        email: "a.satou@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/10.jpg'><div class='media-body align-self-center'> <div>Brielle Williamson</div></div></div>",
        position: "Integration Specialist",
        salary: "$372,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-info' role='progressbar'></div></div></div>",
        extn: 4804,
        email: "b.williamson@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Herrod Chandler</div></div></div>",
        position: "Sales Assistant",
        salary: "$137,500",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning' role='progressbar'></div></div></div>",
        extn: 9608,
        email: "h.chandler@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Rhona Davidson</div></div></div>",
        position: "Integration Specialist",
        salary: "$327,900",
        office: "Tokyo",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-secondary' role='progressbar'></div></div></div>",
        extn: 6200,
        email: "r.davidson@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Colleen Hurst</div></div></div>",
        position: "Javascript Developer",
        salary: "$205,500",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 2360,
        email: "c.hurst@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Sonya Frost</div></div></div>",
        position: "Software Engineer",
        salary: "$103,600",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary' role='progressbar'></div></div></div>",
        extn: 1667,
        email: "s.frost@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>Jena Gaines</div></div></div>",
        position: "Office Manager",
        salary: "$90,560",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning' role='progressbar'></div></div></div>",
        extn: 3814,
        email: "j.gaines@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/4.jpg'><div class='media-body align-self-center'> <div>Quinn Flynn</div></div></div>",
        position: "Support Lead",
        salary: "$342,000",
        office: "Edinburgh",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger' role='progressbar'></div></div></div>",
        extn: 9497,
        email: "q.flynn@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Charde Marshall</div></div></div>",
        position: "Regional Director",
        salary: "$470,600",
        office: "San Francisco",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-info' role='progressbar'></div></div></div>",
        extn: 6741,
        email: "c.marshall@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/6.jpg'><div class='media-body align-self-center'> <div>Haley Kennedy</div></div></div>",
        position: "Senior Marketing Designer",
        salary: "$313,500",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 3597,
        email: "h.kennedy@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/7.jpg'><div class='media-body align-self-center'> <div>Tatyana Fitzpatrick</div></div></div>",
        position: "Regional Director",
        salary: "$385,750",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-warning' role='progressbar'></div></div></div>",
        extn: 1965,
        email: "t.fitzpatrick@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/8.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Marketing Designer",
        salary: "$198,500",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary' role='progressbar'></div></div></div>",
        extn: 1581,
        email: "m.silva@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/9.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Paul Byrd",
        salary: "Chief Financial Officer (CFO)",
        office: "$725,000",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-ress-bar bg-success' role='progressbar'></div></div></div>",
        extn: 3059,
        email: "p.byrd@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/10.jpg'><div class='media-body align-self-center'> <div>Gloria Little</div></div></div>",
        position: "Systems Administrator",
        salary: "$237,500",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 1721,
        email: "g.little@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Bradley Greer</div></div></div>",
        position: "Software Engineer",
        salary: "$132,000",
        office: "London",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary' role='progressbar'></div></div></div>",
        extn: 2558,
        email: "b.greer@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/5.jpg'><div class='media-body align-self-center'> <div>Michael Silva</div></div></div>",
        position: "Dai Rios",
        salary: "Personnel Lead",
        office: "$217,500",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-gress-bar bg-warning' role='progressbar'></div></div></div>",
        extn: 2290,
        email: "d.rios@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/1.jpg'><div class='media-body align-self-center'> <div>Jenette Caldwell</div></div></div>",
        position: "Development Lead",
        salary: "$345,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-primary' role='progressbar'></div></div></div>",
        extn: 1937,
        email: "j.caldwell@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/2.png'><div class='media-body align-self-center'> <div>Yuri Berry</div></div></div>",
        position: "Chief Marketing Officer (CMO)",
        salary: "$675,000",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-danger' role='progressbar'></div></div></div>",
        extn: 6154,
        email: "y.berry@datatables.net"
      }, {
        img: "<div class='media'><img class='rounded-circle img-30 mr-3' src='assets/images/user/3.jpg'><div class='media-body align-self-center'> <div>C</div></div></div>",
        position: "Pre-Sales Support",
        salary: "$106,450",
        office: "New York",
        skill: "<div class='progress-showcase'><div class='progress sm-progress-bar'><div class='progress-bar custom-progress-width bg-success' role='progressbar'></div></div></div>",
        extn: 8330,
        email: "c.vance@datatables.net"
      }];
      /***/
    },

    /***/
    "UNkk":
    /*!********************************************************************!*\
      !*** ./src/app/components/support-ticket/support-ticket.module.ts ***!
      \********************************************************************/

    /*! exports provided: SupportTicketModule */

    /***/
    function UNkk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportTicketModule", function () {
        return SupportTicketModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./support-ticket-routing.module */
      "gHVh");
      /* harmony import */


      var _support_ticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./support-ticket.component */
      "EP6p");

      var SupportTicketModule = function SupportTicketModule() {
        _classCallCheck(this, SupportTicketModule);
      };

      SupportTicketModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SupportTicketModule
      });
      SupportTicketModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SupportTicketModule_Factory(t) {
          return new (t || SupportTicketModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_4__["SupportTicketRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SupportTicketModule, {
          declarations: [_support_ticket_component__WEBPACK_IMPORTED_MODULE_5__["SupportTicketComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_4__["SupportTicketRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SupportTicketModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_support_ticket_component__WEBPACK_IMPORTED_MODULE_5__["SupportTicketComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_4__["SupportTicketRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
          }]
        }], null, null);
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

      CountToDirective.??fac = function CountToDirective_Factory(t) {
        return new (t || CountToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CountToDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: CountToDirective,
        selectors: [["", "CountTo", ""]],
        inputs: {
          from: "from",
          duration: "duration",
          CountTo: "CountTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
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
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountToDirective, [{
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

      CountToModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CountToModule
      });
      CountToModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
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
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CountToModule, {
          declarations: [CountToDirective],
          exports: [CountToDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CountToModule, [{
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
    "gHVh":
    /*!****************************************************************************!*\
      !*** ./src/app/components/support-ticket/support-ticket-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: SupportTicketRoutingModule */

    /***/
    function gHVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportTicketRoutingModule", function () {
        return SupportTicketRoutingModule;
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


      var _support_ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./support-ticket.component */
      "EP6p");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _support_ticket_component__WEBPACK_IMPORTED_MODULE_2__["SupportTicketComponent"],
          data: {
            title: "Support Ticket",
            breadcrumb: ""
          }
        }]
      }];

      var SupportTicketRoutingModule = function SupportTicketRoutingModule() {
        _classCallCheck(this, SupportTicketRoutingModule);
      };

      SupportTicketRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SupportTicketRoutingModule
      });
      SupportTicketRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SupportTicketRoutingModule_Factory(t) {
          return new (t || SupportTicketRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SupportTicketRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SupportTicketRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-support-ticket-support-ticket-module-es5.js.map