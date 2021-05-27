(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-to-do-to-do-module"], {
    /***/
    "A1H/":
    /*!*****************************************************!*\
      !*** ./src/app/components/to-do/to-do.component.ts ***!
      \*****************************************************/

    /*! exports provided: ToDoComponent */

    /***/
    function A1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoComponent", function () {
        return ToDoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0(a0) {
        return {
          "completed": a0
        };
      };

      function ToDoComponent_li_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_li_27_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.taskDeleted(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_li_27_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var todo_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.taskCompleted(todo_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var todo_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, todo_r1.completed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r1.text);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "move-up": a0
        };
      };

      var _c2 = function _c2(a0) {
        return {
          "move-down": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "hide": a0
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "visible": a0
        };
      };

      var ToDoComponent = /*#__PURE__*/function () {
        function ToDoComponent(toastrService, http) {
          _classCallCheck(this, ToDoComponent);

          this.toastrService = toastrService;
          this.http = http;
          this.todos = [];
          this.red_border = false;
          this.url = 'http://localhost:5000/todo';
        }

        _createClass(ToDoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "addTask",
          value: function addTask(text) {
            if (!text) {
              this.red_border = true;
              return false;
            }

            var task = {
              text: text,
              completed: false
            };
            this.todos.push(task);
            this.text = '';
            this.red_border = false;
          }
        }, {
          key: "taskCompleted",
          value: function taskCompleted(task) {
            task.completed = !task.completed;
            task.completed ? this.toastrService.success(task.text, "Mark as completed") : this.toastrService.error(task.text, "Mark as Incompleted");
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this = this;

            this.http.get(this.url, {
              responseType: 'text'
            }).subscribe(function (res) {
              _this.todos = res;
              console.log('this.todos ', _this.todos);
            });
          }
        }, {
          key: "taskDeleted",
          value: function taskDeleted(index) {
            this.todos.splice(index, 1);
          }
        }, {
          key: "markAllAction",
          value: function markAllAction(action) {
            this.todos.filter(function (task) {
              task.completed = action;
            });
            this.completed = action;
            action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted");
          }
        }]);

        return ToDoComponent;
      }();

      ToDoComponent.ɵfac = function ToDoComponent_Factory(t) {
        return new (t || ToDoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ToDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToDoComponent,
        selectors: [["app-to-do"]],
        decls: 44,
        vars: 16,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body", 2, "background-color", "aliceblue"], [1, "todo"], [1, "todo-list-wrapper"], [1, "todo-list-container"], [1, "mark-all-tasks"], [1, "mark-all-tasks-container"], ["id", "mark-all-finished", "role", "button", 1, "mark-all-btn", 3, "ngClass"], [1, "btn-label"], [1, "action-box", "completed", 3, "click"], [1, "icon"], [1, "icon-check"], ["id", "mark-all-incomplete", "role", "button", 1, "mark-all-btn", 3, "ngClass"], [1, "action-box", 3, "click"], [1, "todo-list-body"], ["id", "todo-list"], ["class", "task", "style", "margin-bottom: 10px", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "todo-list-footer"], [1, "add-task-btn-wrapper"], [1, "add-task-btn", 3, "ngClass"], [1, "btn", "btn-primary", 3, "click"], [1, "icon-plus", "mr-1"], [1, "new-task-wrapper", 3, "ngClass"], ["id", "new-task", "placeholder", "Enter new task here. . .", 3, "ngModel", "ngModelChange"], ["id", "close-task-panel", 1, "btn", "btn-danger", "cancel-btn", 3, "click"], ["id", "add-task", 1, "btn", "btn-success", "ml-3", "add-new-task-btn", 3, "click"], [1, "notification-popup", "hide"], [1, "task"], [1, "notification-text"], [1, "task", 2, "margin-bottom", "10px", 3, "ngClass"], [1, "task-container"], [1, "task-label"], [1, "task-action-btn"], ["title", "Delete Task", 1, "action-box", "large", "delete-btn", 3, "click"], [1, "icon-trash"], ["title", "Mark Complete", 1, "action-box", "large", "complete-btn", 3, "click"]],
        template: function ToDoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "To-Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mark all as finished");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_Template_span_click_16_listener() {
              return ctx.markAllAction(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mark all as completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_Template_span_click_22_listener() {
              return ctx.markAllAction(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ToDoComponent_li_27_Template, 11, 4, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_Template_button_click_31_listener() {
              return ctx.visible = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add new task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToDoComponent_Template_textarea_ngModelChange_35_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_Template_button_click_36_listener() {
              return ctx.visible = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_Template_button_click_38_listener() {
              return ctx.addTask(ctx.text);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Add Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 32);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.completed));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, !ctx.completed));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx.visible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.visible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", ctx.red_border);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0by1kby5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-to-do',
            templateUrl: './to-do.component.html',
            styleUrls: ['./to-do.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H1qS":
    /*!**************************************************!*\
      !*** ./src/app/components/to-do/to-do.module.ts ***!
      \**************************************************/

    /*! exports provided: ToDoModule */

    /***/
    function H1qS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoModule", function () {
        return ToDoModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _to_do_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./to-do-routing.module */
      "e5D2");
      /* harmony import */


      var _to_do_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./to-do.component */
      "A1H/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ToDoModule = function ToDoModule() {
        _classCallCheck(this, ToDoModule);
      };

      ToDoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToDoModule
      });
      ToDoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToDoModule_Factory(t) {
          return new (t || ToDoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _to_do_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToDoRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoModule, {
          declarations: [_to_do_component__WEBPACK_IMPORTED_MODULE_4__["ToDoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _to_do_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToDoRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_to_do_component__WEBPACK_IMPORTED_MODULE_4__["ToDoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _to_do_routing_module__WEBPACK_IMPORTED_MODULE_3__["ToDoRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "e5D2":
    /*!**********************************************************!*\
      !*** ./src/app/components/to-do/to-do-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ToDoRoutingModule */

    /***/
    function e5D2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoRoutingModule", function () {
        return ToDoRoutingModule;
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


      var _to_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./to-do.component */
      "A1H/");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _to_do_component__WEBPACK_IMPORTED_MODULE_2__["ToDoComponent"],
          data: {
            title: "To-Do",
            breadcrumb: ""
          }
        }]
      }];

      var ToDoRoutingModule = function ToDoRoutingModule() {
        _classCallCheck(this, ToDoRoutingModule);
      };

      ToDoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToDoRoutingModule
      });
      ToDoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToDoRoutingModule_Factory(t) {
          return new (t || ToDoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoRoutingModule, [{
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
//# sourceMappingURL=components-to-do-to-do-module-es5.js.map