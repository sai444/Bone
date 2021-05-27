(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-to-do-firebase-to-do-firebase-module"], {
    /***/
    "1tEU":
    /*!****************************************************************************!*\
      !*** ./src/app/components/to-do-firebase/to-do-firebase-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ToDoFirebaseRoutingModule */

    /***/
    function tEU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoFirebaseRoutingModule", function () {
        return ToDoFirebaseRoutingModule;
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


      var _to_do_firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./to-do-firebase.component */
      "gvzV");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _to_do_firebase_component__WEBPACK_IMPORTED_MODULE_2__["ToDoFirebaseComponent"],
          data: {
            title: "To-Do-Firebase",
            breadcrumb: ""
          }
        }]
      }];

      var ToDoFirebaseRoutingModule = function ToDoFirebaseRoutingModule() {
        _classCallCheck(this, ToDoFirebaseRoutingModule);
      };

      ToDoFirebaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToDoFirebaseRoutingModule
      });
      ToDoFirebaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToDoFirebaseRoutingModule_Factory(t) {
          return new (t || ToDoFirebaseRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoFirebaseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoFirebaseRoutingModule, [{
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
    "CPgZ":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/firebase/todo.service.ts ***!
      \**********************************************************/

    /*! exports provided: FirebaseService */

    /***/
    function CPgZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");

      var FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(db) {
          _classCallCheck(this, FirebaseService);

          this.db = db;
        } //For Creating a new task


        _createClass(FirebaseService, [{
          key: "createTask",
          value: function createTask(value) {
            return this.db.collection('todo').add({
              task: value,
              completed: false,
              nameToSearch: value.toLowerCase()
            });
          } //Display complete list of task

        }, {
          key: "getTasks",
          value: function getTasks() {
            return this.db.collection('todo').snapshotChanges();
          } //For deleting particular task

        }, {
          key: "deleteTask",
          value: function deleteTask(taskKey) {
            return this.db.collection('todo').doc(taskKey)["delete"]();
          } //For updating particular task

        }, {
          key: "updateTask",
          value: function updateTask(taskKey, value) {
            return this.db.collection('todo').doc(taskKey).set({
              task: value.task,
              completed: value.completed,
              nameToSearch: value.nameToSearch
            });
          }
        }, {
          key: "markAll",
          value: function markAll(action) {
            var _this = this;

            this.db.collection('todo').get().forEach(function (item) {
              return item.docs.map(function (m) {
                return _this.db.doc("todo/".concat(m.id)).update({
                  completed: action
                });
              });
            });
          }
        }]);

        return FirebaseService;
      }();

      FirebaseService.ɵfac = function FirebaseService_Factory(t) {
        return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FirebaseService,
        factory: FirebaseService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gvzV":
    /*!***********************************************************************!*\
      !*** ./src/app/components/to-do-firebase/to-do-firebase.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ToDoFirebaseComponent */

    /***/
    function gvzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoFirebaseComponent", function () {
        return ToDoFirebaseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_todo_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/todo/todo */
      "yhGT");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_firebase_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/services/firebase/todo.service */
      "CPgZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0(a0) {
        return {
          "completed": a0
        };
      };

      function ToDoFirebaseComponent_li_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_li_27_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var todo_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.taskDeleted(todo_r1.payload.doc.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_li_27_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var todo_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.taskCompleted(todo_r1);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, todo_r1.payload.doc.data().completed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r1.payload.doc.data().task);
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

      var ToDoFirebaseComponent = /*#__PURE__*/function () {
        function ToDoFirebaseComponent(toastrService, router, firebaseService) {
          _classCallCheck(this, ToDoFirebaseComponent);

          this.toastrService = toastrService;
          this.router = router;
          this.firebaseService = firebaseService;
          this.todos = _shared_data_todo_todo__WEBPACK_IMPORTED_MODULE_1__["task"];
          this.redBorder = false;
        } //Add new task


        _createClass(ToDoFirebaseComponent, [{
          key: "addTask",
          value: function addTask(text) {
            var _this2 = this;

            if (!text) {
              this.redBorder = true;
              return false;
            }

            this.firebaseService.createTask(text).then(function (res) {
              _this2.resetFields();

              _this2.router.navigate(['/to-do-firebase']);
            });
            this.redBorder = false;
          }
        }, {
          key: "resetFields",
          value: function resetFields() {
            this.text = '';
          } //For completing your task

        }, {
          key: "taskCompleted",
          value: function taskCompleted(todo) {
            var _this3 = this;

            todo.task = todo.payload.doc.data().task;
            todo.completed = todo.payload.doc.data().completed;
            todo.completed = !todo.completed;
            todo.nameToSearch = todo.task.toLowerCase();
            todo.completed ? this.toastrService.success(todo.text, "Mark as completed") : this.toastrService.error(todo.text, "Mark as Incompleted");
            this.firebaseService.updateTask(todo.payload.doc.id, todo).then(function (res) {
              _this3.router.navigate(['/to-do-firebase']);
            });
          } //For deleting a task

        }, {
          key: "taskDeleted",
          value: function taskDeleted(taskid) {
            var _this4 = this;

            this.firebaseService.deleteTask(taskid).then(function (res) {
              _this4.router.navigate(['/to-do-firebase']);
            }, function (err) {});
          } //Mark and unmark all task

        }, {
          key: "markAllAction",
          value: function markAllAction(action) {
            this.firebaseService.markAll(action);
            this.completed = action;
            action ? this.toastrService.success("All Task as Completed") : this.toastrService.error("All Task as Incompleted");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            //Get complete list of task
            this.firebaseService.getTasks().subscribe(function (result) {
              _this5.items = result;
            });
          }
        }]);

        return ToDoFirebaseComponent;
      }();

      ToDoFirebaseComponent.ɵfac = function ToDoFirebaseComponent_Factory(t) {
        return new (t || ToDoFirebaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_firebase_todo_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]));
      };

      ToDoFirebaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToDoFirebaseComponent,
        selectors: [["app-to-do-firebase"]],
        decls: 44,
        vars: 16,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "todo", "todo-database"], [1, "todo-list-wrapper"], [1, "todo-list-container"], [1, "mark-all-tasks", "mark-all-firebase"], [1, "mark-all-tasks-container", "d-inline-block"], ["id", "mark-all-finished", "role", "button", 1, "mark-all-btn", 3, "ngClass"], [1, "btn-label"], [1, "action-box", "completed", 3, "click"], [1, "icon"], [1, "icon-check"], ["id", "mark-all-incomplete", "role", "button", 1, "mark-all-btn", 3, "ngClass"], [1, "action-box", 3, "click"], [1, "todo-list-body", "custom-scrollbar"], ["id", "todo-list"], ["class", "task", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "todo-list-footer"], [1, "add-task-btn-wrapper"], [1, "add-task-btn", 3, "ngClass"], [1, "btn", "btn-primary", 3, "click"], [1, "icon-plus", "mr-1"], [1, "new-task-wrapper", 3, "ngClass"], ["id", "new-task", "placeholder", "Enter new task here. . .", 3, "ngModel", "ngModelChange"], ["id", "close-task-panel", 1, "btn", "btn-danger", "cancel-btn", 3, "click"], ["id", "add-task", 1, "btn", "btn-success", "ml-3", "add-new-task-btn", 3, "click"], [1, "notification-popup", "hide"], [1, "task"], [1, "notification-text"], [1, "task", 3, "ngClass"], [1, "task-container"], [1, "task-label"], [1, "task-action-btn"], ["title", "Delete Task", 1, "action-box", "large", "delete-btn", 3, "click"], [1, "icon-trash"], ["title", "Mark Complete", 1, "action-box", "large", "complete-btn", 3, "click"]],
        template: function ToDoFirebaseComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_Template_span_click_16_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_Template_span_click_22_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ToDoFirebaseComponent_li_27_Template, 11, 4, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_Template_button_click_31_listener() {
              return ctx.visible = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add new task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToDoFirebaseComponent_Template_textarea_ngModelChange_35_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_Template_button_click_36_listener() {
              return ctx.visible = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoFirebaseComponent_Template_button_click_38_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx.visible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.visible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", ctx.redBorder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0by1kby1maXJlYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoFirebaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-to-do-firebase',
            templateUrl: './to-do-firebase.component.html',
            styleUrls: ['./to-do-firebase.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _shared_services_firebase_todo_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yhGT":
    /*!******************************************!*\
      !*** ./src/app/shared/data/todo/todo.ts ***!
      \******************************************/

    /*! exports provided: task */

    /***/
    function yhGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "task", function () {
        return task;
      });

      var task = [{
        text: "Weekly Bigbazar Shopping",
        completed: false
      }, {
        text: "Go Outside Picnic on Sunday",
        completed: false
      }, {
        text: "Write a blog post",
        completed: true
      }, {
        text: "Do the chicken dance",
        completed: true
      }, {
        text: "Pay the electricity bills",
        completed: false
      }];
      /***/
    },

    /***/
    "zlNs":
    /*!********************************************************************!*\
      !*** ./src/app/components/to-do-firebase/to-do-firebase.module.ts ***!
      \********************************************************************/

    /*! exports provided: ToDoFirebaseModule */

    /***/
    function zlNs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoFirebaseModule", function () {
        return ToDoFirebaseModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _to_do_firebase_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./to-do-firebase-routing.module */
      "1tEU");
      /* harmony import */


      var _to_do_firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./to-do-firebase.component */
      "gvzV");

      var ToDoFirebaseModule = function ToDoFirebaseModule() {
        _classCallCheck(this, ToDoFirebaseModule);
      };

      ToDoFirebaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToDoFirebaseModule
      });
      ToDoFirebaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ToDoFirebaseModule_Factory(t) {
          return new (t || ToDoFirebaseModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _to_do_firebase_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToDoFirebaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToDoFirebaseModule, {
          declarations: [_to_do_firebase_component__WEBPACK_IMPORTED_MODULE_5__["ToDoFirebaseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _to_do_firebase_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToDoFirebaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoFirebaseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_to_do_firebase_component__WEBPACK_IMPORTED_MODULE_5__["ToDoFirebaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _to_do_firebase_routing_module__WEBPACK_IMPORTED_MODULE_4__["ToDoFirebaseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-to-do-firebase-to-do-firebase-module-es5.js.map