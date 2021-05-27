(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-base-base-module"], {
    /***/
    "3WFG":
    /*!********************************************************************!*\
      !*** ./src/app/components/base/timepicker/timepicker.component.ts ***!
      \********************************************************************/

    /*! exports provided: TimepickerComponent */

    /***/
    function WFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function () {
        return TimepickerComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TimepickerComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Great choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_84_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select some time during lunchtime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_84_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oh no, it's way too late");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_84_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It's a bit too early");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimepickerComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimepickerComponent_div_84_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimepickerComponent_div_84_div_2_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimepickerComponent_div_84_div_3_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.errors["required"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.errors["tooLate"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ctrl.errors["tooEarly"]);
        }
      }

      var TimepickerComponent = /*#__PURE__*/function () {
        function TimepickerComponent() {
          _classCallCheck(this, TimepickerComponent);

          this.time = {
            hour: 13,
            minute: 30
          };
          this.meridian = true;
          this.timeSeccond = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.seconds = true;
          this.timeSpinners = {
            hour: 13,
            minute: 30
          };
          this.spinners = true;
          this.timeCustom = {
            hour: 13,
            minute: 30,
            second: 0
          };
          this.hourStep = 1;
          this.minuteStep = 15;
          this.secondStep = 30;
          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;

            if (!value) {
              return null;
            }

            if (value.hour < 12) {
              return {
                tooEarly: true
              };
            }

            if (value.hour > 13) {
              return {
                tooLate: true
              };
            }

            return null;
          });
        }

        _createClass(TimepickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMeridian",
          value: function toggleMeridian() {
            this.meridian = !this.meridian;
          }
        }, {
          key: "toggleSeconds",
          value: function toggleSeconds() {
            this.seconds = !this.seconds;
          }
        }, {
          key: "toggleSpinners",
          value: function toggleSpinners() {
            this.spinners = !this.spinners;
          }
        }]);

        return TimepickerComponent;
      }();

      TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) {
        return new (t || TimepickerComponent)();
      };

      TimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimepickerComponent,
        selectors: [["app-timepicker"]],
        decls: 89,
        vars: 45,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "time-picker-custom", 3, "ngModel", "ngModelChange"], [1, "mb-0"], [1, "time-picker-custom", 3, "ngModel", "meridian", "ngModelChange"], [3, "click"], [1, "time-picker-custom", 3, "ngModel", "seconds", "ngModelChange"], [1, "time-picker-custom", 3, "ngModel", "spinners", "ngModelChange"], [1, "time-picker-custom", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"], [1, "col-sm-3"], ["for", "changeHourStep"], ["id", "changeHourStep", "type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-sm-3", "xs-mt-timer-steps"], ["for", "changeMinuteStep"], ["id", "changeMinuteStep", "type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "changeSecondStep"], ["id", "changeSecondStep", "type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["required", "", 1, "time-picker-custom", 3, "formControl"], ["class", "small form-text text-primary", 4, "ngIf"], ["class", "small form-text text-danger", 4, "ngIf"], [1, "small", "form-text", "text-primary"], [1, "small", "form-text", "text-danger"], [4, "ngIf"]],
        template: function TimepickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Timepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-timepicker", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_8_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Meridian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-timepicker", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_19_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_button_click_20_listener() {
              return ctx.toggleMeridian();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngb-timepicker", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_32_listener($event) {
              return ctx.timeSeccond = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_button_click_33_listener() {
              return ctx.toggleSeconds();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Spinners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngb-timepicker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_45_listener($event) {
              return ctx.timeSpinners = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_button_click_47_listener() {
              return ctx.toggleSpinners();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Custom steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngb-timepicker", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_ngb_timepicker_ngModelChange_55_listener($event) {
              return ctx.timeCustom = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hour Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.hourStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Minute Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_64_listener($event) {
              return ctx.minuteStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Second Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.secondStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Custom validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Illustrates custom validation, you have to select time between 12:00 and 13:59");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "ngb-timepicker", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, TimepickerComponent_div_83_Template, 2, 0, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, TimepickerComponent_div_84_Template, 4, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 35, ctx.time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("meridian", ctx.meridian);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-outline-", ctx.meridian ? "primary" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Meridian - ", ctx.meridian ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 37, ctx.time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeSeccond)("seconds", ctx.seconds);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-outline-", ctx.seconds ? "primary" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Seconds - ", ctx.seconds ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 39, ctx.timeSeccond), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeSpinners)("spinners", ctx.spinners);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-t-1 btn btn-sm btn-outline-", ctx.spinners ? "primary" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Spinners - ", ctx.spinners ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeCustom)("seconds", true)("hourStep", ctx.hourStep)("minuteStep", ctx.minuteStep)("secondStep", ctx.secondStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hourStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minuteStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 41, ctx.timeCustom), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ctrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 43, ctx.ctrl.value), "");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-timepicker',
            templateUrl: './timepicker.component.html',
            styleUrls: ['./timepicker.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "4MWi":
    /*!**********************************************************!*\
      !*** ./src/app/components/base/alert/alert.component.ts ***!
      \**********************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function MWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AlertComponent_p_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_p_30_Template_ngb_alert_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var alert_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.close(alert_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r3.type)("dismissible", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r3.message);
        }
      }

      function AlertComponent_ngb_alert_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_ngb_alert_39_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.staticAlertClosed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check out our awesome new features! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AlertComponent_ngb_alert_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AlertComponent_ngb_alert_43_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.successMessage = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.successMessage, " ");
        }
      }

      var ALERTS = [{
        type: 'success',
        message: 'This is an success alert'
      }, {
        type: 'info',
        message: 'This is an info alert'
      }, {
        type: 'warning',
        message: 'This is a warning alert'
      }, {
        type: 'danger',
        message: 'This is a danger alert'
      }, {
        type: 'primary',
        message: 'This is a primary alert'
      }, {
        type: 'secondary',
        message: 'This is a secondary alert'
      }, {
        type: 'light',
        message: 'This is a light alert'
      }, {
        type: 'dark',
        message: 'This is a dark alert'
      }];

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent() {
          _classCallCheck(this, AlertComponent);

          this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.staticAlertClosed = false;
          this.reset();
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              return _this.staticAlertClosed = true;
            }, 20000);

            this._success.subscribe(function (message) {
              return _this.successMessage = message;
            });

            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(function () {
              return _this.successMessage = null;
            });
          }
        }, {
          key: "changeSuccessMessage",
          value: function changeSuccessMessage() {
            this._success.next("".concat(new Date(), " - Message successfully changed."));
          }
        }, {
          key: "close",
          value: function close(alert) {
            this.alerts.splice(this.alerts.indexOf(alert), 1);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.alerts = Array.from(ALERTS);
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)();
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["app-alert"]],
        decls: 58,
        vars: 20,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "type", "dismissible"], [4, "ngFor", "ngForOf"], [3, "close", 4, "ngIf"], ["type", "success", 3, "close", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["type", "custom", 1, "alert-custom", 3, "dismissible"], [3, "type", "dismissible", "close"], [3, "close"], ["type", "success", 3, "close"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is an success alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This is an info alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This is a warning alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This is a danger alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This is a primary alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This is a secondary alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " This is a light alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This is a dark alert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Closable Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AlertComponent_p_30_Template, 3, 3, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Self closing alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AlertComponent_ngb_alert_39_Template, 2, 0, "ngb-alert", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Show a self-closing success message that disappears after 5 seconds. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AlertComponent_ngb_alert_43_Template, 2, 1, "ngb-alert", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_45_listener() {
              return ctx.changeSuccessMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Change message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Custom alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngb-alert", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Whoa!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " This is a custom alert.");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "success")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "warning")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "danger")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "primary")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "secondary")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "light")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "dark")("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "5Aj/":
    /*!********************************************************!*\
      !*** ./src/app/components/base/base-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: BaseRoutingModule */

    /***/
    function Aj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function () {
        return BaseRoutingModule;
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


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "vh5d");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert/alert.component */
      "4MWi");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "UG++");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "XchE");
      /* harmony import */


      var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collapse/collapse.component */
      "IzV/");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "94hR");
      /* harmony import */


      var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dropdown/dropdown.component */
      "CEzb");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modal/modal.component */
      "ztLi");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "DUpQ");
      /* harmony import */


      var _popover_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./popover/popover.component */
      "Ww/p");
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "XTM7");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./rating/rating.component */
      "YqGi");
      /* harmony import */


      var _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./tabset/tabset.component */
      "m534");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "3WFG");
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      "Hfkd");
      /* harmony import */


      var _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./typeahead/typeahead.component */
      "m13V");

      var routes = [{
        path: '',
        children: [{
          path: 'accordion',
          component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"],
          data: {
            title: "Accordion",
            breadcrumb: "Accordion"
          }
        }, {
          path: 'alert',
          component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
          data: {
            title: "Alert",
            breadcrumb: "Alert"
          }
        }, {
          path: 'buttons',
          component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
          data: {
            title: "Buttons",
            breadcrumb: "Buttons"
          }
        }, {
          path: 'carousel',
          component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
          data: {
            title: "Carousel",
            breadcrumb: "Carousel"
          }
        }, {
          path: 'collapse',
          component: _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_6__["CollapseComponent"],
          data: {
            title: "Collapse",
            breadcrumb: "Collapse"
          }
        }, {
          path: 'datepicker',
          component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_7__["DatepickerComponent"],
          data: {
            title: "Datepicker",
            breadcrumb: "Datepicker"
          }
        }, {
          path: 'dropdown',
          component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"],
          data: {
            title: "Dropdown",
            breadcrumb: "Dropdown"
          }
        }, {
          path: 'modal',
          component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
          data: {
            title: "Modal",
            breadcrumb: "Modal"
          }
        }, {
          path: 'pagination',
          component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"],
          data: {
            title: "Pagination",
            breadcrumb: "Pagination"
          }
        }, {
          path: 'popover',
          component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_11__["PopoverComponent"],
          data: {
            title: "Popover",
            breadcrumb: "Popover"
          }
        }, {
          path: 'progressbar',
          component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressbarComponent"],
          data: {
            title: "Progressbar",
            breadcrumb: "Progressbar"
          }
        }, {
          path: 'rating',
          component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_13__["RatingComponent"],
          data: {
            title: "Rating",
            breadcrumb: "Rating"
          }
        }, {
          path: 'tabset',
          component: _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_14__["TabsetComponent"],
          data: {
            title: "Tabset",
            breadcrumb: "Tabset"
          }
        }, {
          path: 'timepicker',
          component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_15__["TimepickerComponent"],
          data: {
            title: "TimePicker",
            breadcrumb: "TimePicker"
          }
        }, {
          path: 'tooltip',
          component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__["TooltipComponent"],
          data: {
            title: "Tooltip",
            breadcrumb: "Tooltip"
          }
        }, {
          path: 'typeahead',
          component: _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_17__["TypeaheadComponent"],
          data: {
            title: "Typeahead",
            breadcrumb: "Typeahead"
          }
        }]
      }];

      var BaseRoutingModule = function BaseRoutingModule() {
        _classCallCheck(this, BaseRoutingModule);
      };

      BaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BaseRoutingModule
      });
      BaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BaseRoutingModule_Factory(t) {
          return new (t || BaseRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseRoutingModule, [{
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
    "94hR":
    /*!********************************************************************!*\
      !*** ./src/app/components/base/datepicker/datepicker.component.ts ***!
      \********************************************************************/

    /*! exports provided: DatepickerComponent */

    /***/
    function hR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function () {
        return DatepickerComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DatepickerComponent_ng_template_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatepickerComponent_ng_template_84_Template_span_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var date_r11 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.hoveredDate = date_r11;
          })("mouseleave", function DatepickerComponent_ng_template_84_Template_span_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.hoveredDate = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r11 = ctx.$implicit;
          var focused_r12 = ctx.focused;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r12)("range", ctx_r4.isRange(date_r11))("faded", ctx_r4.isHovered(date_r11) || ctx_r4.isInside(date_r11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r11.day, " ");
        }
      }

      function DatepickerComponent_ng_template_107_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_ng_template_107_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

            ctx_r16.model = ctx_r16.today;
            return _r5.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_ng_template_107_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

            return _r5.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatepickerComponent_ng_template_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var date_r19 = ctx.$implicit;
          var currentMonth_r20 = ctx.currentMonth;
          var selected_r21 = ctx.selected;
          var disabled_r22 = ctx.disabled;
          var focused_r23 = ctx.focused;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("weekend", ctx_r10.isWeekend(date_r19))("focused", focused_r23)("bg-primary", selected_r21)("hidden", date_r19.month !== currentMonth_r20)("text-muted", disabled_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r19.day, " ");
        }
      }

      var DatepickerComponent = /*#__PURE__*/function () {
        function DatepickerComponent(calendar) {
          var _this2 = this;

          _classCallCheck(this, DatepickerComponent);

          this.calendar = calendar;
          this.disabled = true;
          this.displayMonths = 2;
          this.navigation = 'select';
          this.showWeekNumbers = false;
          this.outsideDays = 'visible';
          this.today = this.calendar.getToday();

          this.isDisabled = function (date, current) {
            return date.month !== current.month;
          };

          this.isWeekend = function (date) {
            return _this2.calendar.getWeekday(date) >= 6;
          };

          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        }

        _createClass(DatepickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectToday",
          value: function selectToday() {
            this.model = this.calendar.getToday();
          }
        }, {
          key: "onDateSelection",
          value: function onDateSelection(date) {
            if (!this.fromDate && !this.toDate) {
              this.fromDate = date;
            } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
              this.toDate = date;
            } else {
              this.toDate = null;
              this.fromDate = date;
            }
          }
        }, {
          key: "isHovered",
          value: function isHovered(date) {
            return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
          }
        }, {
          key: "isInside",
          value: function isInside(date) {
            return date.after(this.fromDate) && date.before(this.toDate);
          }
        }, {
          key: "isRange",
          value: function isRange(date) {
            return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
          }
        }]);

        return DatepickerComponent;
      }();

      DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) {
        return new (t || DatepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]));
      };

      DatepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatepickerComponent,
        selectors: [["app-datepicker"]],
        decls: 125,
        vars: 41,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datepicker"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "btn-showcase"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [1, "d-block"], [3, "ngModel", "disabled", "ngModelChange"], [3, "click"], [1, "col-sm-12", "col-xl-6", "xl-100"], [1, "card-body", "mutliple-datepicker"], [3, "displayMonths", "navigation", "showWeekNumbers", "outsideDays"], [1, "form-inline", "custom-datepicker-dropdown"], [1, "form-group", "mb-0"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "displayMonths", "navigation", "outsideDays", "showWeekNumbers"], ["k", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "calendar", 3, "click"], [1, "fa", "fa-calendar"], [1, "d-flex", "flex-wrap", "align-content-between", "p-2"], [1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["value", "none"], ["value", "select"], ["value", "arrows"], ["value", "visible"], ["value", "hidden"], ["value", "collapsed"], ["outsideDays", "hidden", 3, "displayMonths", "dayTemplate", "select"], ["t", ""], [1, "col-xl-6"], [1, "card-body"], [1, "form-inline", "custom-datepicker", "custom-datepicker-dropdown"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "footerTemplate", "ngModelChange"], ["f", "ngbDatepicker"], ["footerTemplate", ""], [1, "colsm-12", "col-xl-6"], [1, "form-inline", "custom-datepicker-dropdown", "custom-datepicker"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "dayTemplate", "markDisabled", "ngModelChange"], ["c", "ngbDatepicker"], ["customDay", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], [1, "my-0"], [1, "btn", "btn-primary", "btn-sm", "m-2", "float-left", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", "m-2", "float-right", 3, "click"], [1, "custom-day"]],
        template: function DatepickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-datepicker", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_8_listener($event) {
              return ctx.model = $event;
            })("navigate", function DatepickerComponent_Template_ngb_datepicker_navigate_8_listener($event) {
              return ctx.date = $event.next;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_12_listener() {
              return ctx.selectToday();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return _r0.navigateTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "To current month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return _r0.navigateTo({
                year: 2013,
                month: 2
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "To Feb 2013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-datepicker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_ngb_datepicker_ngModelChange_30_listener($event) {
              return ctx.modelDisabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_32_listener() {
              return ctx.disabled = !ctx.disabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Multiple months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ngb-datepicker", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_48_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_52_listener($event) {
              return ctx.displayMonths = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "One month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Two months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_57_listener($event) {
              return ctx.navigation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Without navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "With select boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Without select boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_64_listener($event) {
              return ctx.showWeekNumbers = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Week numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "No week numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_select_ngModelChange_69_listener($event) {
              return ctx.outsideDays = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Visible outside days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Hidden outside days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Collapsed outside days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Range selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ngb-datepicker", 33, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DatepickerComponent_Template_ngb_datepicker_select_82_listener($event) {
              return ctx.onDateSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DatepickerComponent_ng_template_84_Template, 2, 7, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Footer template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_102_listener($event) {
              return ctx.modelFooter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_105_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

              return _r5.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, DatepickerComponent_ng_template_107_Template, 5, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Custom day view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_118_listener($event) {
              return ctx.modelCustom = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_button_click_121_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](119);

              return _r8.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, DatepickerComponent_ng_template_123_Template, 2, 11, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Month: ", ctx.date.month, ".", ctx.date.year, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 35, ctx.model), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelDisabled)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-outline-", ctx.disabled ? "danger" : "primary", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.disabled ? "disabled" : "enabled", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", ctx.displayMonths)("navigation", ctx.navigation)("showWeekNumbers", ctx.showWeekNumbers)("outsideDays", ctx.outsideDays);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", ctx.displayMonths)("navigation", ctx.navigation)("outsideDays", ctx.outsideDays)("showWeekNumbers", ctx.showWeekNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.displayMonths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.navigation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showWeekNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.outsideDays);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", 2)("dayTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("From: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 37, ctx.fromDate), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 39, ctx.toDate), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelFooter)("footerTemplate", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelCustom)("dayTemplate", _r9)("markDisabled", ctx.isDisabled);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatepickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-datepicker',
            templateUrl: './datepicker.component.html',
            styleUrls: ['./datepicker.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CEzb":
    /*!****************************************************************!*\
      !*** ./src/app/components/base/dropdown/dropdown.component.ts ***!
      \****************************************************************/

    /*! exports provided: DropdownComponent */

    /***/
    function CEzb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
        return DropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var DropdownComponent = /*#__PURE__*/function () {
        function DropdownComponent(config) {
          _classCallCheck(this, DropdownComponent);

          // customize default values of dropdowns used by this component tree
          config.placement = 'top-left';
          config.autoClose = false;
        }

        _createClass(DropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownComponent;
      }();

      DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
        return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]));
      };

      DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DropdownComponent,
        selectors: [["app-dropdown"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]] // add NgbDropdownConfig to the component providers
        )],
        decls: 121,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row", "btn-showcase"], [1, "col"], ["ngbDropdown", "", "placement", "bottom", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "col", "text-right"], ["ngbDropdown", "", "placement", "top-right", 1, "d-inline-block"], ["id", "dropdownBasic2", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "mr-0"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic2"], ["ngbDropdown", "", 1, "d-inline-block", "btn-showcase"], ["myDrop", "ngbDropdown"], ["id", "dropdownManual", "ngbDropdownAnchor", "", 1, "btn", "btn-outline-primary", "mr-2", 3, "focus"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], [1, "btn", "btn-outline-primary", "mr-2", 3, "click"], [1, "btn-showcase"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", 1, "btn", "btn-primary", "mr-0"], ["ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], [1, "btn-group", "mr-3"], ["ngbDropdown", ""], ["id", "dropdownConfig", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownConfig"]],
        template: function DropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Toggle dropup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Manual and custom triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DropdownComponent_Template_button_focus_39_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_48_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              $event.stopPropagation();
              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Open from outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_50_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

              $event.stopPropagation();
              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Close from outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Manual and custom triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Plain ol' button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Drop me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Split me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Select me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Or me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Global configuration of dropdowns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Something else is here");

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
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownAnchor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dropdown',
            templateUrl: './dropdown.component.html',
            styleUrls: ['./dropdown.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]] // add NgbDropdownConfig to the component providers

          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DUpQ":
    /*!********************************************************************!*\
      !*** ./src/app/components/base/pagination/pagination.component.ts ***!
      \********************************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function DUpQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent(config) {
          _classCallCheck(this, PaginationComponent);

          this.page = 4;
          this.advancePage = 1;
          this.currentPage = 3;
          this.isDisabled = true; // customize default values of paginations used by this component tree

          config.size = 'sm';
          config.boundaryLinks = true;
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleDisabled",
          value: function toggleDisabled() {
            this.isDisabled = !this.isDisabled;
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]));
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["app-pagination"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]] // add NgbPaginationConfig to the component providers
        )],
        decls: 85,
        vars: 42,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body", "pagination-space"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageChange"], [1, "pagination-top"], [3, "collectionSize", "page", "directionLinks", "pageChange"], [3, "collectionSize", "page", "boundaryLinks", "pageChange"], [1, "mb-0"], [3, "collectionSize", "page", "maxSize", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], [1, "card-body"], ["size", "lg", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "pageChange"], ["size", "sm", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-start", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "disabled", "pageChange"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Default pagination:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-pagination", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_10_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No direction links:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-pagination", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_14_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "With boundary links:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-pagination", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_18_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Advanced pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Restricted size, no rotation:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-pagination", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_30_listener($event) {
              return ctx.advancePage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Restricted size with rotation:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-pagination", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_34_listener($event) {
              return ctx.advancePage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Restricted size with rotation and no ellipses:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-pagination", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_38_listener($event) {
              return ctx.advancePage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pre", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Pagination size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ngb-pagination", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_48_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ngb-pagination", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_50_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ngb-pagination", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_52_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pagination alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ngb-pagination", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_59_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ngb-pagination", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_61_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngb-pagination", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_63_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Disabled pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Pagination control can be disabled:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ngb-pagination", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_72_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_button_click_74_listener() {
              return ctx.toggleDisabled();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Toggle disabled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Global configuration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "This pagination uses custom default values");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ngb-pagination", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationComponent_Template_ngb_pagination_pageChange_84_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page)("directionLinks", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current page: ", ctx.page, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 120)("page", ctx.advancePage)("maxSize", 5)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 120)("page", ctx.advancePage)("maxSize", 5)("rotate", true)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 120)("page", ctx.advancePage)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current page: ", ctx.advancePage, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPagination"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]] // add NgbPaginationConfig to the component providers

          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Hfkd":
    /*!**************************************************************!*\
      !*** ./src/app/components/base/tooltip/tooltip.component.ts ***!
      \**************************************************************/

    /*! exports provided: TooltipComponent */

    /***/
    function Hfkd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
        return TooltipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function TooltipComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Hello, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "!");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.name);
        }
      }

      function TooltipComponent_ng_template_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "!");
        }

        if (rf & 2) {
          var greeting_r9 = ctx.greeting;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", greeting_r9, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.name);
        }
      }

      var TooltipComponent = /*#__PURE__*/function () {
        function TooltipComponent() {
          _classCallCheck(this, TooltipComponent);

          this.name = 'World';
        }

        _createClass(TooltipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //tooltip toggle

        }, {
          key: "toggleWithGreeting",
          value: function toggleWithGreeting(tooltip, greeting) {
            if (tooltip.isOpen()) {
              tooltip.close();
            } else {
              tooltip.open({
                greeting: greeting
              });
            }
          }
        }]);

        return TooltipComponent;
      }();

      TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
        return new (t || TooltipComponent)();
      };

      TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["app-tooltip"]],
        decls: 119,
        vars: 8,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase"], ["type", "button", "placement", "top", "ngbTooltip", "Tooltip on top", 1, "btn", "btn-outline-primary", "mr-2"], ["type", "button", "placement", "right", "ngbTooltip", "Tooltip on right", 1, "btn", "btn-outline-primary", "mr-2"], ["type", "button", "placement", "bottom", "ngbTooltip", "Tooltip on bottom", 1, "btn", "btn-outline-primary", "mr-2"], ["type", "button", "placement", "left", "ngbTooltip", "Tooltip on left", 1, "btn", "btn-outline-primary"], [1, "card-body"], ["tipContent", ""], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs-eplisis", 3, "ngbTooltip"], ["type", "button", "ngbTooltip", "You see, I show up on click!", "triggers", "click:blur", 1, "btn", "btn-outline-primary"], [1, "btn-showcase"], ["type", "button", "ngbTooltip", "What a great tip!", "triggers", "manual", 1, "btn", "btn-outline-primary", "mr-2", 3, "autoClose", "click"], ["t", "ngbTooltip"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "mb-2"], ["type", "button", "triggers", "click", "ngbTooltip", "Click inside or press Escape to close", 1, "btn", "btn-outline-primary", 3, "autoClose"], ["type", "button", "triggers", "click", "ngbTooltip", "Click outside or press Escape to close", 1, "btn", "btn-outline-primary", 3, "autoClose"], [1, "d-inline-block", "btn-showcase"], ["type", "button", "triggers", "click", "ngbTooltip", "Click anywhere or press Escape to close (try the toggling element too)", 1, "btn", "btn-outline-primary", "mr-0", 3, "autoClose"], ["tooltip3", "ngbTooltip"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs-eplisis", 3, "click"], ["type", "button", "triggers", "manual", 1, "btn", "btn-outline-primary", "mr-2", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], ["t2", "ngbTooltip"], ["t3", "ngbTooltip"], ["type", "button", "ngbTooltip", "Nice class!", "tooltipClass", "my-custom-class", 1, "btn", "btn-outline-primary"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quick and easy tooltips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tooltip on top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tooltip on right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tooltip on bottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Tooltip on left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HTML and bindings in tooltips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "<ng-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TooltipComponent_ng_template_27_Template, 4, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " I've got markup and bindings in my tooltip! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Custom and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " You can easily override open and close triggers by specifying event names (separated by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ") in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Click me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Alternatively you can take full manual control over tooltip opening / closing events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_51_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

              return _r2.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Click me to open a tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_54_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

              return _r2.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Click me to close a tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Automatic closing with keyboard and mouse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "As for some other popup-based widgets, you can set the tooltip to close automatically upon some events.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "In the following examples, they will all close on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Escape");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " as well as:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " click inside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " click outside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " all clicks: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_85_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Click to toggle the external tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Context and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " You can optionally pass in a context when manually triggering a tooltip. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, TooltipComponent_ng_template_95_Template, 4, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_98_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](99);

              return ctx.toggleWithGreeting(_r6, "Bonjour");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " French ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 25, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_101_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);

              return ctx.toggleWithGreeting(_r7, "Gutentag");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " German ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 25, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipComponent_Template_button_click_104_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](105);

              return ctx.toggleWithGreeting(_r8, "Hello");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Context and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " You can optionally pass in a custom class via ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "tooltipClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Tooltip with custom class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "inside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r0);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tooltip',
            templateUrl: './tooltip.component.html',
            styleUrls: ['./tooltip.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "IzV/":
    /*!****************************************************************!*\
      !*** ./src/app/components/base/collapse/collapse.component.ts ***!
      \****************************************************************/

    /*! exports provided: CollapseComponent */

    /***/
    function IzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollapseComponent", function () {
        return CollapseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var CollapseComponent = /*#__PURE__*/function () {
        function CollapseComponent() {
          _classCallCheck(this, CollapseComponent);

          this.isCollapsed = false;
        }

        _createClass(CollapseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CollapseComponent;
      }();

      CollapseComponent.ɵfac = function CollapseComponent_Factory(t) {
        return new (t || CollapseComponent)();
      };

      CollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CollapseComponent,
        selectors: [["app-collapse"]],
        decls: 15,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "collapseExample", 3, "ngbCollapse"], [1, "card", "mb-0"]],
        template: function CollapseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Collapse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapseComponent_Template_button_click_9_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " You can collapse this card by clicking Toggle ");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-collapse',
            templateUrl: './collapse.component.html',
            styleUrls: ['./collapse.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UG++":
    /*!**************************************************************!*\
      !*** ./src/app/components/base/buttons/buttons.component.ts ***!
      \**************************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function UG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(formBuilder) {
          _classCallCheck(this, ButtonsComponent);

          this.formBuilder = formBuilder;
          this.model = {
            left: true,
            middle: false,
            right: false
          };
          this.modelRadio = 1;
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkboxGroupForm = this.formBuilder.group({
              left: true,
              middle: false,
              right: false
            });
            this.radioGroupForm = this.formBuilder.group({
              'model': 1
            });
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) {
        return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonsComponent,
        selectors: [["app-buttons"]],
        decls: 82,
        vars: 18,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "btn-group", "btn-group-toggle"], ["ngbButtonLabel", "", 1, "btn-primary"], ["type", "checkbox", "ngbButton", "", 3, "ngModel", "ngModelChange"], [1, "mb-0"], [3, "formGroup"], ["type", "checkbox", "formControlName", "left", "ngbButton", ""], ["type", "checkbox", "formControlName", "middle", "ngbButton", ""], ["type", "checkbox", "formControlName", "right", "ngbButton", ""], ["ngbRadioGroup", "", "name", "radioBasic", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButton", "", "type", "radio", 3, "value"], ["ngbButton", "", "type", "radio", "value", "middle"], ["ngbRadioGroup", "", "name", "radioBasic", "formControlName", "model", 1, "btn-group", "btn-group-toggle"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Checkbox buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.model.left = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.model.middle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.model.right = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Checkbox buttons (Reactive Forms)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pre", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Radio buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonsComponent_Template_div_ngModelChange_49_listener($event) {
              return ctx.modelRadio = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "pre", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Radio buttons (Reactive Forms)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "pre", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.left);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.middle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.right);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, ctx.model));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkboxGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 16, ctx.checkboxGroupForm.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelRadio);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modelRadio);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.radioGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.radioGroupForm.value["model"]);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadio"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ww/p":
    /*!**************************************************************!*\
      !*** ./src/app/components/base/popover/popover.component.ts ***!
      \**************************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function WwP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PopoverComponent_ng_template_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "!");
        }

        if (rf & 2) {
          var greeting_r14 = ctx.greeting;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", greeting_r14, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.name);
        }
      }

      function PopoverComponent_ng_template_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var language_r15 = ctx.language;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Greeting in ", language_r15, "");
        }
      }

      function PopoverComponent_ng_template_150_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Hello, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "!");
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.name);
        }
      }

      function PopoverComponent_ng_template_152_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fancy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(config) {
          _classCallCheck(this, PopoverComponent);

          this.name = 'World'; // customize default values of popovers used by this component tree

          config.placement = 'top';
          config.triggers = 'click';
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //Tooltip greeting on click as well as hover

        }, {
          key: "toggleWithGreeting",
          value: function toggleWithGreeting(popover, greeting, language) {
            if (popover.isOpen()) {
              popover.close();
            } else {
              popover.open({
                greeting: greeting,
                language: language
              });
            }
          }
        }, {
          key: "recordShown",
          value: function recordShown() {
            this.lastShown = new Date();
          }
        }, {
          key: "recordHidden",
          value: function recordHidden() {
            this.lastHidden = new Date();
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
        return new (t || PopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]));
      };

      PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopoverComponent,
        selectors: [["app-popover"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]] // add NgbPopoverConfig to the component providers
        )],
        decls: 156,
        vars: 21,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body", "btn-showcase", "popover-mr"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-outline-primary"], ["type", "button", "placement", "right", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", 1, "btn", "btn-outline-primary"], ["type", "button", "placement", "bottom", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on bottom", 1, "btn", "btn-outline-primary"], ["type", "button", "placement", "left", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on left", 1, "btn", "btn-outline-primary"], [1, "card-body"], ["type", "button", "ngbPopover", "This popover gets its inputs from the customized configuration", "popoverTitle", "Customized popover", 1, "btn", "btn-outline-primary"], ["type", "button", "ngbPopover", "You see, I show up on hover!", "triggers", "mouseenter:mouseleave", "popoverTitle", "Pop title", 1, "btn", "btn-outline-primary"], [1, "btn-showcase"], ["type", "button", "ngbPopover", "What a great tip!", "triggers", "manual", "popoverTitle", "Pop title", 1, "btn", "btn-outline-primary", "mr-2", 3, "autoClose", "click"], ["p", "ngbPopover"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "mb-2"], ["type", "button", "popoverTitle", "Pop title", "ngbPopover", "Click inside or press Escape to close", 1, "btn", "btn-outline-primary", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-outline-primary", 3, "autoClose"], [1, "btn-showcase", "d-inline-block"], ["type", "button", "popoverTitle", "Pop title", "ngbPopover", "Click anywhere or press Escape to close (try the toggling element too)", 1, "btn", "btn-outline-primary", "mr-0", 3, "autoClose"], ["popover3", "ngbPopover"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-0", "btn-xs-eplisis", 3, "click"], ["type", "button", "ngbPopover", "Nice class!", "popoverClass", "my-custom-class", 1, "btn", "btn-outline-primary"], ["popContent", ""], ["popTitle", ""], ["type", "button", "triggers", "manual", 1, "btn", "btn-outline-primary", "mr-2", 3, "ngbPopover", "popoverTitle", "click"], ["p1", "ngbPopover"], ["p2", "ngbPopover"], ["p3", "ngbPopover"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-outline-primary", 3, "shown", "hidden"], ["popover", "ngbPopover"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-xs-eplisis", 3, "ngbPopover", "popoverTitle"]],
        template: function PopoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quick and easy popovers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Popover on top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Popover on right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Popover on bottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Popover on left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Global configuration of popovers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Customized popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Custom and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " You can easily override open and close triggers by specifying event names (separated by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ") in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Hover over me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Alternatively you can take full manual control over popover opening / closing events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_44_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Click me to open a popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_47_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Click me to close a popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Automatic closing with keyboard and mouse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "As for some other popup-based widgets, you can set the popover to close automatically upon some events.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "In the following examples, they will all close on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Escape");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " as well as:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " click inside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " click outside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " all clicks: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_78_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Click to toggle the external popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Popover with custom class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " You can optionally pass in a custom class via ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "popoverClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Popover with custom class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Context and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " You can optionally pass in a context when manually triggering a popover. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, PopoverComponent_ng_template_100_Template, 4, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, PopoverComponent_ng_template_102_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_105_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](106);

              return ctx.toggleWithGreeting(_r6, "Bonjour", "French");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " French ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 27, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_108_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109);

              return ctx.toggleWithGreeting(_r7, "Gutentag", "German");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " German ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 27, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverComponent_Template_button_click_111_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](112);

              return ctx.toggleWithGreeting(_r8, "Hello", "English");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Popover visibility events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("shown", function PopoverComponent_Template_button_shown_120_listener() {
              return ctx.recordShown();
            })("hidden", function PopoverComponent_Template_button_hidden_120_listener() {
              return ctx.recordHidden();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Open Popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Popover is currently: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Last shown at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Last hidden at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](138, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "HTML and bindings in popovers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content or title in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "<ng-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, PopoverComponent_ng_template_150_Template, 4, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, PopoverComponent_ng_template_152_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " I've got markup and bindings in my popover! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "inside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r2)("popoverTitle", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r2)("popoverTitle", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r2)("popoverTitle", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r9.isOpen() ? "open" : "closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](133, 15, ctx.lastShown, "h:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](138, 18, ctx.lastHidden, "h:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r2)("popoverTitle", _r4);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-popover',
            templateUrl: './popover.component.html',
            styleUrls: ['./popover.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]] // add NgbPopoverConfig to the component providers

          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XTM7":
    /*!**********************************************************************!*\
      !*** ./src/app/components/base/progressbar/progressbar.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProgressbarComponent */

    /***/
    function XTM7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
        return ProgressbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ProgressbarComponent = /*#__PURE__*/function () {
        function ProgressbarComponent() {
          _classCallCheck(this, ProgressbarComponent);
        }

        _createClass(ProgressbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProgressbarComponent;
      }();

      ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) {
        return new (t || ProgressbarComponent)();
      };

      ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressbarComponent,
        selectors: [["app-progressbar"]],
        decls: 84,
        vars: 31,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["type", "success", 3, "value"], ["type", "info", 3, "value"], ["type", "warning", 3, "value"], ["type", "danger", 3, "value"], ["showValue", "true", "type", "success", 3, "value"], ["type", "info", 3, "showValue", "value"], ["showValue", "true", "type", "warning", 3, "value", "max"], ["type", "danger", 3, "showValue", "value", "max"], ["type", "success", 3, "value", "striped"], ["type", "info", 3, "value", "striped"], ["type", "warning", 3, "value", "striped"], ["type", "danger", 3, "value", "striped"], ["type", "warning", 3, "value", "striped", "animated"], ["type", "info", "height", "10px", 3, "value"], ["type", "warning", "height", ".5rem", 3, "value"], ["type", "danger", "height", ".3rem", 3, "value"]],
        template: function ProgressbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contextual progress bars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngb-progressbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngb-progressbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Progress bars with current value labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngb-progressbar", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "ngb-progressbar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Striped progress bars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngb-progressbar", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ngb-progressbar", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ngb-progressbar", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ngb-progressbar", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Progress bars with custom labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngb-progressbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Copying file ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2 of 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngb-progressbar", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ngb-progressbar", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Completed!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Progress bars with height");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ngb-progressbar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "10px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ngb-progressbar", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".5rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ngb-progressbar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, ".3rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 150)("max", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("value", 150)("max", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75)("striped", true)("animated", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-progressbar',
            templateUrl: './progressbar.component.html',
            styleUrls: ['./progressbar.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XchE":
    /*!****************************************************************!*\
      !*** ./src/app/components/base/carousel/carousel.component.ts ***!
      \****************************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function XchE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CarouselComponent_ngb_carousel_8_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_8_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_8_ng_template_1_Template, 6, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_8_ng_template_2_Template, 6, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_8_ng_template_3_Template, 6, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CarouselComponent_ngb_carousel_15_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "10 seconds between slides...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No mouse events...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel doesn't pause or resume on mouse events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_15_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No keyboard...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_15_ng_template_1_Template, 6, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ngb_carousel_15_ng_template_2_Template, 6, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_15_ng_template_3_Template, 6, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CarouselComponent_ngb_carousel_22_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No mouse navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This carousel hides navigation arrows and indicators.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CarouselComponent_ngb_carousel_22_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_22_1_ng_template_0_Template, 6, 1, "ng-template", 12);
        }
      }

      function CarouselComponent_ngb_carousel_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_22_1_Template, 1, 0, undefined, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx_r2.showNavigationArrows)("showNavigationIndicators", ctx_r2.showNavigationIndicators);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.images);
        }
      }

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent(config) {
          _classCallCheck(this, CarouselComponent);

          this.showNavigationArrows = false;
          this.showNavigationIndicators = false;
          this.images = ['assets/images/c1.jpg', 'assets/images/c2.jpg', 'assets/images/c3.jpg']; // customize default values of carousels used by this component tree

          config.showNavigationArrows = true;
          config.showNavigationIndicators = true; // customize default values of carousels used by this component tree

          config.interval = 10000;
          config.wrap = false;
          config.keyboard = false;
          config.pauseOnHover = false;
        }

        _createClass(CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]));
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["app-carousel"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        )],
        decls: 29,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [4, "ngIf"], [1, "col-sm-12", "col-xl-6", "xl-100"], [3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], ["role", "group", "aria-label", "Carousel toggle controls", 1, "btn-showcase"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["ngbSlide", ""], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"], [3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["alt", "Random slide", 3, "src"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselComponent_ngb_carousel_8_Template, 4, 0, "ngb-carousel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Global configuration of carousels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CarouselComponent_ngb_carousel_15_Template, 4, 0, "ngb-carousel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Navigation arrows and indicators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CarouselComponent_ngb_carousel_22_Template, 2, 3, "ngb-carousel", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_25_listener() {
              return ctx.showNavigationArrows = !ctx.showNavigationArrows;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Toggle navigation arrows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_27_listener() {
              return ctx.showNavigationIndicators = !ctx.showNavigationIndicators;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Toggle navigation indicators");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss'],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers

          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YqGi":
    /*!************************************************************!*\
      !*** ./src/app/components/base/rating/rating.component.ts ***!
      \************************************************************/

    /*! exports provided: RatingComponent */

    /***/
    function YqGi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
        return RatingComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RatingComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thanks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RatingComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please rate us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RatingComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2665 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fill_r5 = ctx.fill;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r5 === 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r5, "%");
        }
      }

      function RatingComponent_ng_template_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fill_r6 = ctx.fill;
          var index_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r6 === 100)("bad", index_r7 < 3);
        }
      }

      var RatingComponent = /*#__PURE__*/function () {
        function RatingComponent() {
          _classCallCheck(this, RatingComponent);

          this.currentRate = 6;
          this.selected = 0;
          this.hovered = 0;
          this.readonly = false;
          this.heartRate = 5;
          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }

        _createClass(RatingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.ctrl.disabled) {
              this.ctrl.enable();
            } else {
              this.ctrl.disable();
            }
          }
        }]);

        return RatingComponent;
      }();

      RatingComponent.ɵfac = function RatingComponent_Factory(t) {
        return new (t || RatingComponent)();
      };

      RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RatingComponent,
        selectors: [["app-rating"]],
        decls: 88,
        vars: 24,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "rating-size", 3, "rate", "rateChange"], [1, "mb-0"], [1, "card-body", "editable-rating"], [1, "rating-size", 3, "rate", "readonly", "rateChange", "hover", "leave"], [3, "click"], [1, "form-group"], [1, "rating-size", 3, "formControl"], [1, "form-text", "small"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["t", ""], ["max", "5", 3, "rate", "starTemplate", "readonly", "rateChange"], [1, "col-sm-12"], [3, "rate", "rateChange"], [1, "text-success"], [1, "text-danger"], [1, "star"], [1, "half"]],
        template: function RatingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_8_listener($event) {
              return ctx.currentRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Events and readonly ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngb-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_20_listener($event) {
              return ctx.selected = $event;
            })("hover", function RatingComponent_Template_ngb_rating_hover_20_listener($event) {
              return ctx.hovered = $event;
            })("leave", function RatingComponent_Template_ngb_rating_leave_20_listener() {
              return ctx.hovered = 0;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Selected: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Hovered: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_29_listener() {
              return ctx.readonly = !ctx.readonly;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Form integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NgModel and reactive forms can be used without the 'rate' binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ngb-rating", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RatingComponent_div_42_Template, 2, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RatingComponent_div_43_Template, 2, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Model: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_49_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_51_listener() {
              return ctx.ctrl.setValue(null);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Custom decimal rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Custom rating template provided via a variable. Shows fine-grained rating display");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RatingComponent_ng_template_61_Template, 4, 4, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngb-rating", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_63_listener($event) {
              return ctx.heartRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_69_listener() {
              return ctx.heartRate = 1.35;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "1.35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_Template_button_click_71_listener() {
              return ctx.heartRate = 4.72;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "4.72");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Custom star template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Custom rating template provided as child element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ngb-rating", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingComponent_Template_ngb_rating_rateChange_81_listener($event) {
              return ctx.currentRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, RatingComponent_ng_template_82_Template, 2, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "pre", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.selected)("readonly", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hovered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-position btn-outline-", ctx.readonly ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.readonly ? "readonly" : "editable", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ctrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ctrl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ctrl.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-sm btn-outline-", ctx.ctrl.disabled ? "danger" : "success", " mr-2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ctrl.disabled ? "control disabled" : " control enabled", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.heartRate)("starTemplate", _r2)("readonly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heartRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentRate);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-rating',
            templateUrl: './rating.component.html',
            styleUrls: ['./rating.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cGcg":
    /*!************************************************!*\
      !*** ./src/app/components/base/base.module.ts ***!
      \************************************************/

    /*! exports provided: BaseModule */

    /***/
    function cGcg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseModule", function () {
        return BaseModule;
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


      var _base_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./base-routing.module */
      "5Aj/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "vh5d");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert/alert.component */
      "4MWi");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "UG++");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "XchE");
      /* harmony import */


      var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./collapse/collapse.component */
      "IzV/");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "94hR");
      /* harmony import */


      var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dropdown/dropdown.component */
      "CEzb");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modal/modal.component */
      "ztLi");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "DUpQ");
      /* harmony import */


      var _popover_popover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./popover/popover.component */
      "Ww/p");
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "XTM7");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./rating/rating.component */
      "YqGi");
      /* harmony import */


      var _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./tabset/tabset.component */
      "m534");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "3WFG");
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      "Hfkd");
      /* harmony import */


      var _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./typeahead/typeahead.component */
      "m13V");

      var BaseModule = function BaseModule() {
        _classCallCheck(this, BaseModule);
      };

      BaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BaseModule
      });
      BaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BaseModule_Factory(t) {
          return new (t || BaseModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_2__["BaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseModule, {
          declarations: [_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_9__["CollapseComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__["DatepickerComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["DropdownComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModal1Content"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModal2Content"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_14__["PopoverComponent"], _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_15__["ProgressbarComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__["RatingComponent"], _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_17__["TabsetComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__["TimepickerComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_19__["TooltipComponent"], _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_20__["TypeaheadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_2__["BaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["AccordionComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_9__["CollapseComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__["DatepickerComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["DropdownComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModal1Content"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModal2Content"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_14__["PopoverComponent"], _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_15__["ProgressbarComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__["RatingComponent"], _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_17__["TabsetComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__["TimepickerComponent"], _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_19__["TooltipComponent"], _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_20__["TypeaheadComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _base_routing_module__WEBPACK_IMPORTED_MODULE_2__["BaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModal1Content"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModal2Content"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "m13V":
    /*!******************************************************************!*\
      !*** ./src/app/components/base/typeahead/typeahead.component.ts ***!
      \******************************************************************/

    /*! exports provided: WikipediaService, TypeaheadComponent */

    /***/
    function m13V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikipediaService", function () {
        return WikipediaService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeaheadComponent", function () {
        return TypeaheadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["instance"];

      function TypeaheadComponent_span_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "searching...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TypeaheadComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, suggestions could not be loaded.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TypeaheadComponent_ng_template_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-highlight", 19);
        }

        if (rf & 2) {
          var r_r4 = ctx.result;
          var t_r5 = ctx.term;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/" + r_r4["flag"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", r_r4.name)("term", t_r5);
        }
      }

      var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
      var statesWithFlags = [{
        'name': 'Alabama',
        'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
      }, {
        'name': 'Alaska',
        'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
      }, {
        'name': 'Arizona',
        'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
      }, {
        'name': 'Arkansas',
        'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
      }, {
        'name': 'California',
        'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
      }, {
        'name': 'Colorado',
        'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
      }, {
        'name': 'Connecticut',
        'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
      }, {
        'name': 'Delaware',
        'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
      }, {
        'name': 'Florida',
        'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
      }, {
        'name': 'Georgia',
        'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
      }, {
        'name': 'Hawaii',
        'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
      }, {
        'name': 'Idaho',
        'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
      }, {
        'name': 'Illinois',
        'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
      }, {
        'name': 'Indiana',
        'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
      }, {
        'name': 'Iowa',
        'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
      }, {
        'name': 'Kansas',
        'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
      }, {
        'name': 'Kentucky',
        'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
      }, {
        'name': 'Louisiana',
        'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
      }, {
        'name': 'Maine',
        'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
      }, {
        'name': 'Maryland',
        'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
      }, {
        'name': 'Massachusetts',
        'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
      }, {
        'name': 'Michigan',
        'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
      }, {
        'name': 'Minnesota',
        'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
      }, {
        'name': 'Mississippi',
        'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
      }, {
        'name': 'Missouri',
        'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
      }, {
        'name': 'Montana',
        'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
      }, {
        'name': 'Nebraska',
        'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
      }, {
        'name': 'Nevada',
        'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
      }, {
        'name': 'New Hampshire',
        'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
      }, {
        'name': 'New Jersey',
        'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
      }, {
        'name': 'New Mexico',
        'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
      }, {
        'name': 'New York',
        'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
      }, {
        'name': 'North Carolina',
        'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
      }, {
        'name': 'North Dakota',
        'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
      }, {
        'name': 'Ohio',
        'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
      }, {
        'name': 'Oklahoma',
        'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
      }, {
        'name': 'Oregon',
        'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
      }, {
        'name': 'Pennsylvania',
        'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
      }, {
        'name': 'Rhode Island',
        'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
      }, {
        'name': 'South Carolina',
        'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
      }, {
        'name': 'South Dakota',
        'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
      }, {
        'name': 'Tennessee',
        'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
      }, {
        'name': 'Texas',
        'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
      }, {
        'name': 'Utah',
        'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
      }, {
        'name': 'Vermont',
        'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
      }, {
        'name': 'Virginia',
        'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
      }, {
        'name': 'Washington',
        'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
      }, {
        'name': 'West Virginia',
        'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
      }, {
        'name': 'Wisconsin',
        'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
      }, {
        'name': 'Wyoming',
        'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
      }];
      var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
      var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
        fromObject: {
          action: 'opensearch',
          format: 'json',
          origin: '*'
        }
      });

      var WikipediaService = /*#__PURE__*/function () {
        function WikipediaService(http) {
          _classCallCheck(this, WikipediaService);

          this.http = http;
        }

        _createClass(WikipediaService, [{
          key: "search",
          value: function search(term) {
            if (term === '') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }

            return this.http.get(WIKI_URL, {
              params: PARAMS.set('search', term)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              return response[1];
            }));
          }
        }]);

        return WikipediaService;
      }();

      WikipediaService.ɵfac = function WikipediaService_Factory(t) {
        return new (t || WikipediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      WikipediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WikipediaService,
        factory: WikipediaService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WikipediaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();

      var TypeaheadComponent = /*#__PURE__*/function () {
        function TypeaheadComponent(_service) {
          var _this3 = this;

          _classCallCheck(this, TypeaheadComponent);

          this._service = _service;
          this.searching = false;
          this.searchFailed = false;
          this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return term.length < 2 ? [] : states.filter(function (v) {
                return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
              }).slice(0, 10);
            }));
          };

          this.searchOnFocus = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());

            var clicksWithClosedPopup$ = _this3.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
              return !_this3.instance.isPopupOpen();
            }));

            var inputFocus$ = _this3.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return (term === '' ? states : states.filter(function (v) {
                return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
              })).slice(0, 10);
            }));
          };

          this.searchWikipedia = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this3.searching = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
              return _this3._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this3.searchFailed = false;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                _this3.searchFailed = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this3.searching = false;
            }));
          };

          this.searchTemp = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
              return term === '' ? [] : statesWithFlags.filter(function (v) {
                return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
              }).slice(0, 10);
            }));
          };

          this.formatter = function (x) {
            return x.name;
          };
        }

        _createClass(TypeaheadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TypeaheadComponent;
      }();

      TypeaheadComponent.ɵfac = function TypeaheadComponent_Factory(t) {
        return new (t || TypeaheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WikipediaService));
      };

      TypeaheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TypeaheadComponent,
        selectors: [["app-typeahead"]],
        viewQuery: function TypeaheadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.instance = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([WikipediaService])],
        decls: 111,
        vars: 26,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], ["for", "typeahead-basic"], ["id", "typeahead-basic", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [1, "mb-0"], [1, "form-group"], ["for", "typeahead-http"], ["id", "typeahead-http", "type", "text", "placeholder", "Wikipedia search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["rt", ""], ["for", "typeahead-template"], ["id", "typeahead-template", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], [1, "invalid-feedback"], [1, "mr-1", 2, "width", "16px", 3, "src"], [3, "result", "term"]],
        template: function TypeaheadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Simple Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " A typeahead example that gets values from a static ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "string[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "debounceTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "kicks in only if 2+ characters typed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "limits to 10 results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.model = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Open on focus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " A typeahead example that gets values from a static ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "string[]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "debounceTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "kicks in only if 2+ characters typed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "limits to 10 results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.modelFocus = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pre", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Wikipedia search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " A typeahead example that gets values from the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "WikipediaService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "remote data retrieval");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "debounceTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "distinctUntilChanged");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "switchMap");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "catch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " operator to display an error message in case of connectivity issue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Search for a wiki page:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_87_listener($event) {
              return ctx.modelWiki = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, TypeaheadComponent_span_88_Template, 2, 0, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, TypeaheadComponent_div_89_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "pre", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Template for results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "A typeahead example that uses a custom template for results display, an object as the model, and the highlight directive to highlight the term inside the custom template. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, TypeaheadComponent_ng_template_102_Template, 2, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_106_listener($event) {
              return ctx.modelTemp = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "pre", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, ctx.model), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelFocus)("ngbTypeahead", ctx.searchOnFocus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 20, ctx.modelFocus), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelWiki)("ngbTypeahead", ctx.searchWikipedia);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 22, ctx.modelWiki), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelTemp)("ngbTypeahead", ctx.searchTemp)("resultTemplate", _r2)("inputFormatter", ctx.formatter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 24, ctx.modelTemp), "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlYWhlYWQuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeaheadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-typeahead',
            templateUrl: './typeahead.component.html',
            styleUrls: ['./typeahead.component.scss'],
            providers: [WikipediaService]
          }]
        }], function () {
          return [{
            type: WikipediaService
          }];
        }, {
          instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['instance', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "m534":
    /*!************************************************************!*\
      !*** ./src/app/components/base/tabset/tabset.component.ts ***!
      \************************************************************/

    /*! exports provided: TabsetComponent */

    /***/
    function m534(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsetComponent", function () {
        return TabsetComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function TabsetComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " title");
        }
      }

      function TabsetComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " title");
        }
      }

      function TabsetComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " title");
        }
      }

      function TabsetComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " title");
        }
      }

      function TabsetComponent_ng_template_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " title");
        }
      }

      function TabsetComponent_ng_template_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TabsetComponent_ng_template_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TabsetComponent = /*#__PURE__*/function () {
        function TabsetComponent() {
          _classCallCheck(this, TabsetComponent);

          this.currentJustify = 'start';
          this.currentOrientation = 'horizontal';
        }

        _createClass(TabsetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "beforeChange",
          value: function beforeChange($event) {
            if ($event.nextId === 'tab-preventchange2') {
              $event.preventDefault();
            }
          }
        }]);

        return TabsetComponent;
      }();

      TabsetComponent.ɵfac = function TabsetComponent_Factory(t) {
        return new (t || TabsetComponent)();
      };

      TabsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TabsetComponent,
        selectors: [["app-tabset"]],
        decls: 110,
        vars: 7,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], ["title", "Simple"], ["ngbTabContent", ""], ["ngbTabTitle", ""], ["title", "Disabled", 3, "disabled"], ["type", "pills"], ["t", "ngbTabset"], ["id", "tab-selectbyid1", "title", "Simple"], ["id", "tab-selectbyid2"], [1, "mt-2", "tabset-group-btn-xs"], [1, "btn", "btn-outline-primary", "btn-position", 3, "click"], [3, "tabChange"], ["id", "tab-preventchange1", "title", "Simple"], ["id", "tab-preventchange2", "title", "I can't be selected..."], ["title", "But I can!"], [3, "justify"], ["title", "A very long nav title"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", "mt-2", "tabset-group-btn-xs", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn-outline-primary", "btn-sm", "btn-position"], ["ngbButton", "", "type", "radio", "value", "start"], ["ngbButton", "", "type", "radio", "value", "center"], ["ngbButton", "", "type", "radio", "value", "end"], ["ngbButton", "", "type", "radio", "value", "fill"], ["ngbButton", "", "type", "radio", "value", "justified"], ["type", "pills", 3, "orientation"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", "mt-2", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn-outline-primary", "btn-sm"], ["ngbButton", "", "type", "radio", "value", "horizontal"], ["ngbButton", "", "type", "radio", "value", "vertical"]],
        template: function TabsetComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TabsetComponent_ng_template_10_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TabsetComponent_ng_template_12_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TabsetComponent_ng_template_13_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TabsetComponent_ng_template_15_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-tabset", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TabsetComponent_ng_template_24_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TabsetComponent_ng_template_26_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TabsetComponent_ng_template_27_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TabsetComponent_ng_template_29_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Select an active tab by id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngb-tabset", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TabsetComponent_ng_template_39_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ngb-tab", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TabsetComponent_ng_template_41_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TabsetComponent_ng_template_42_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_Template_button_click_44_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

              return _r8.select("tab-selectbyid2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Selected tab with \"tab-selectbyid2\" id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Prevent tab change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ngb-tabset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function TabsetComponent_Template_ngb_tabset_tabChange_52_listener($event) {
              return ctx.beforeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ngb-tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TabsetComponent_ng_template_54_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngb-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TabsetComponent_ng_template_56_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ngb-tab", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TabsetComponent_ng_template_58_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Nav justification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ngb-tabset", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TabsetComponent_ng_template_67_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, TabsetComponent_ng_template_69_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TabsetComponent_ng_template_70_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ngb-tab", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, TabsetComponent_ng_template_72_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TabsetComponent_Template_div_ngModelChange_73_listener($event) {
              return ctx.currentJustify = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Start ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Center ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "End ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Fill ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Justified ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Nav justification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ngb-tabset", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, TabsetComponent_ng_template_97_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, TabsetComponent_ng_template_99_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, TabsetComponent_ng_template_100_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, TabsetComponent_ng_template_102_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TabsetComponent_Template_div_ngModelChange_103_listener($event) {
              return ctx.currentOrientation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Horizontal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Vertical ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("justify", ctx.currentJustify);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentJustify);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orientation", ctx.currentOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentOrientation);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzZXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tabset',
            templateUrl: './tabset.component.html',
            styleUrls: ['./tabset.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vh5d":
    /*!******************************************************************!*\
      !*** ./src/app/components/base/accordion/accordion.component.ts ***!
      \******************************************************************/

    /*! exports provided: AccordionComponent */

    /***/
    function vh5d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
        return AccordionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function AccordionComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AccordionComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function AccordionComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      var AccordionComponent = /*#__PURE__*/function () {
        function AccordionComponent() {
          _classCallCheck(this, AccordionComponent);
        }

        _createClass(AccordionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "beforeChange",
          value: function beforeChange(e) {}
        }]);

        return AccordionComponent;
      }();

      AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
        return new (t || AccordionComponent)();
      };

      AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccordionComponent,
        selectors: [["app-accordion"]],
        decls: 62,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body", "default-accordion"], ["activeIds", "ngb-panel-0"], ["acc", "ngbAccordion"], ["title", "Simple"], ["ngbPanelContent", ""], ["ngbPanelTitle", ""], ["title", "Disabled", 3, "disabled"], [1, "card-body"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1", "title", "Simple"], ["id", "static-2"], ["id", "static-3", "title", "Disabled", 3, "disabled"], ["id", "toggle-1", "title", "First panel"], ["id", "toggle-2", "title", "Second"], [1, "btn-showcase"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [3, "panelChange"], ["id", "preventchange-1", "title", "Simple"], ["id", "preventchange-2", "title", "I can't be toggled..."], ["id", "preventchange-3", "title", "I can be opened, but not closed..."]],
        template: function AccordionComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic Accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-accordion", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-panel", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AccordionComponent_ng_template_11_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AccordionComponent_ng_template_13_Template, 5, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccordionComponent_ng_template_14_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-panel", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccordionComponent_ng_template_16_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "One open panel at a time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngb-accordion", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-panel", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccordionComponent_ng_template_25_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-panel", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccordionComponent_ng_template_27_Template, 5, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccordionComponent_ng_template_28_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-panel", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AccordionComponent_ng_template_30_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Toggle panels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-accordion", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngb-panel", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AccordionComponent_ng_template_40_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngb-panel", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AccordionComponent_ng_template_42_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_45_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return _r0.toggle("toggle-1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Toggle first");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionComponent_Template_button_click_47_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return _r0.toggle("toggle-2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Toggle second");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Prevent panel toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngb-accordion", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panelChange", function AccordionComponent_Template_ngb_accordion_panelChange_55_listener($event) {
              return ctx.beforeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ngb-panel", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AccordionComponent_ng_template_57_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ngb-panel", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccordionComponent_ng_template_59_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ngb-panel", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AccordionComponent_ng_template_61_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvcmRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-accordion',
            templateUrl: './accordion.component.html',
            styleUrls: ['./accordion.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ztLi":
    /*!**********************************************************!*\
      !*** ./src/app/components/base/modal/modal.component.ts ***!
      \**********************************************************/

    /*! exports provided: NgbdModalContent, NgbdModal1Content, NgbdModal2Content, ModalComponent */

    /***/
    function ztLi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function () {
        return NgbdModalContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModal1Content", function () {
        return NgbdModal1Content;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModal2Content", function () {
        return NgbdModal2Content;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ModalComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_8_Template_button_click_3_listener() {
            var modal_r6 = ctx.$implicit;
            return modal_r6.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Date of birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_8_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return _r7.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_8_Template_button_click_17_listener() {
            var modal_r6 = ctx.$implicit;
            return modal_r6.close("Save click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_45_Template_button_click_3_listener() {
            var d_r13 = ctx.dismiss;
            return d_r13("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello, World!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_45_Template_button_click_10_listener() {
            var c_r12 = ctx.close;
            return c_r12("Save click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_55_Template_button_click_3_listener() {
            var modal_r16 = ctx.$implicit;
            return modal_r16.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "One fine body\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_55_Template_button_click_10_listener() {
            var modal_r16 = ctx.$implicit;
            return modal_r16.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NgbdModalContent = function NgbdModalContent(activeModal) {
        _classCallCheck(this, NgbdModalContent);

        this.activeModal = activeModal;
      };

      NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) {
        return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      NgbdModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgbdModalContent,
        selectors: [["ngbd-modal-content"]],
        inputs: {
          name: "name"
        },
        decls: 12,
        vars: 1,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function NgbdModalContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_10_listener() {
              return ctx.activeModal.close("Close click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.name, "!");
          }
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModalContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var NgbdModal1Content = /*#__PURE__*/function () {
        function NgbdModal1Content(modalService, activeModal) {
          _classCallCheck(this, NgbdModal1Content);

          this.modalService = modalService;
          this.activeModal = activeModal;
        }

        _createClass(NgbdModal1Content, [{
          key: "open",
          value: function open() {
            this.modalService.open(NgbdModal2Content, {
              size: 'lg'
            });
          }
        }]);

        return NgbdModal1Content;
      }();

      NgbdModal1Content.ɵfac = function NgbdModal1Content_Factory(t) {
        return new (t || NgbdModal1Content)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      NgbdModal1Content.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgbdModal1Content,
        selectors: [["ng-component"]],
        decls: 15,
        vars: 0,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "btn", "btn-lg", "btn-outline-primary", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function NgbdModal1Content_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModal1Content_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello, World!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModal1Content_Template_button_click_10_listener() {
              return ctx.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModal1Content_Template_button_click_13_listener() {
              return ctx.activeModal.close("Close click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModal1Content, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, World!</p>\n      <p><button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button></p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, null);
      })();

      var NgbdModal2Content = function NgbdModal2Content(activeModal) {
        _classCallCheck(this, NgbdModal2Content);

        this.activeModal = activeModal;
      };

      NgbdModal2Content.ɵfac = function NgbdModal2Content_Factory(t) {
        return new (t || NgbdModal2Content)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      NgbdModal2Content.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgbdModal2Content,
        selectors: [["ng-component"]],
        decls: 12,
        vars: 0,
        consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function NgbdModal2Content_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi there!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModal2Content_Template_button_click_3_listener() {
              return ctx.activeModal.dismiss("Cross click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello, World!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModal2Content_Template_button_click_10_listener() {
              return ctx.activeModal.close("Close click");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModal2Content, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, World!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, null);
      })();

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(config, modalService) {
          _classCallCheck(this, ModalComponent);

          this.modalService = modalService; // customize default values of modals used by this component tree

          config.backdrop = 'static';
          config.keyboard = false;
        }

        _createClass(ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "open",
          value: function open(content) {
            var _this4 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this4.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this4.closeResult = "Dismissed ".concat(_this4.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "openModal",
          value: function openModal() {
            var modalRef = this.modalService.open(NgbdModalContent);
            modalRef.componentInstance.name = 'World';
          }
        }, {
          key: "openBackDropCustomClass",
          value: function openBackDropCustomClass(content) {
            this.modalService.open(content, {
              backdropClass: 'light-blue-backdrop'
            });
          }
        }, {
          key: "openWindowCustomClass",
          value: function openWindowCustomClass(content) {
            this.modalService.open(content, {
              windowClass: 'dark-modal'
            });
          }
        }, {
          key: "openSm",
          value: function openSm(content) {
            this.modalService.open(content, {
              size: 'sm'
            });
          }
        }, {
          key: "openLg",
          value: function openLg(content) {
            this.modalService.open(content, {
              size: 'lg'
            });
          }
        }, {
          key: "openVerticallyCentered",
          value: function openVerticallyCentered(content) {
            this.modalService.open(content, {
              centered: true
            });
          }
        }, {
          key: "openStackedModal",
          value: function openStackedModal() {
            this.modalService.open(NgbdModal1Content);
          }
        }, {
          key: "openCustomModal",
          value: function openCustomModal(content) {
            this.modalService.open(content);
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])],
        decls: 68,
        vars: 1,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], ["content", ""], [1, "btn", "btn-lg", "btn-outline-primary", 3, "click"], [1, "mb-0"], [1, "col-sm-12", "col-xl-12"], [1, "btn-showcase", "modal-options-p-xs"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "dateOfBirth"], [1, "input-group"], ["id", "dateOfBirth", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["dp", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "modal-title"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Modal with default options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalComponent_ng_template_8_Template, 19, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.open(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Components as content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "You can pass an existing component as content of the modal window. In this case remember to add content component as an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "entryComponents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " section of your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NgModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_29_listener() {
              return ctx.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Stacked modals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_37_listener() {
              return ctx.openStackedModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Global configuration of modals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ModalComponent_ng_template_45_Template, 12, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_47_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openCustomModal(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Modal with options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ModalComponent_ng_template_55_Template, 12, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_58_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openWindowCustomClass(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Modal with window custom class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_60_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openBackDropCustomClass(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Modal with backdrop custom class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_62_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openSm(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Small modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_64_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openLg(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Large modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_66_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openVerticallyCentered(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Modal vertically centered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Result : ", ctx.closeResult, "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-base-base-module-es5.js.map