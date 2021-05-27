import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Dashboard, Widget, DashboardOptions, User } from "./../models";

import { KendoComponent } from "./../widgets/kendo.component";
import { InputFormComponent } from "./../widgets/input-form.component";
import { BarChartComponent } from "./../widgets/bar-chart.component";
//import { OperatorWidgetComponent } from "./../widgets/operator-widget.component";
import { GridType, CompactType } from "angular-gridster2";

interface IDashboardService {
  getUserDashBoards(user: User): Array<Dashboard>;
  saveUserDashBoards(user: User): void;
  getDashBoardOptions(): DashboardOptions;
}
@Injectable()
export class DashboardService implements IDashboardService  {
  private userDashboards: Map<string, Array<Dashboard>> = new Map<string, Array<Dashboard>>();
  private defaultUser: User;
  constructor() {
    this.loadDashBoards();
  }

  private loadDashBoards(): void {
    this.defaultUser = new User();
    this.defaultUser.id = "123";
    if (localStorage.getItem(this.defaultUser.id) ) {
      const savdDashboards = localStorage.getItem(this.defaultUser.id);
      const dashboards = JSON.parse(savdDashboards) as Array<Dashboard>;
      dashboards.forEach((dashboard: Dashboard) => {
        dashboard.widgets.forEach((widget: Widget) => {
          if (widget.componentName === "kendo-widget") {
            widget.componentType = KendoComponent;
          }
          if (widget.componentName === "input-form") {
            widget.componentType = InputFormComponent;
          }
          if (widget.componentName === "bar-chart") {
            widget.componentType = BarChartComponent;
          }
          // if (widget.componentName === "operator-widget") {
          //   widget.componentType = OperatorWidgetComponent;
          // }
        });
      });
      this.userDashboards.set(this.defaultUser.id, dashboards);
    } else {
      const dashBoards = new Array<Dashboard>();
      dashBoards.push({
      id: "1", name: "dashboard-1", user: this.defaultUser, widgets: [
        {
          id: "1",
          name: "Nomination List",
          componentName: "kendo-widget",
          componentType: KendoComponent,
          cols: 2,
          rows: 1,
          y: 0,
          x: 0,
        },
        {
          id: "2",
          name: "Edit Nomination",
          componentName: "input-form",
          componentType: InputFormComponent,
          cols: 2,
          rows: 1,
          y: 0,
          x: 2,
        },
        {
          id: "3",
          name: "Chart",
          componentName: "bar-chart",
          componentType: BarChartComponent,
          cols: 2,
          rows: 2,
          y: 0,
          x: 0,
        }
      ]
      });
      dashBoards.push({
      id: "2", name: "dashboard-2", user: this.defaultUser, widgets: [
        {
          id: "1",
          name: "Nomination List",
          componentName: "kendo-widget",
          componentType: KendoComponent,
          cols: 2,
          rows: 1,
          y: 0,
          x: 0,
        },
        {
          id: "2",
          name: "Edit Nomination",
          componentName: "input-form",
          componentType: InputFormComponent,
          cols: 2,
          rows: 1,
          y: 0,
          x: 2,
        }
      ]
      });
      this.userDashboards.set(this.defaultUser.id, dashBoards);
    }
  }

  public getUserDashBoards(user: User): Array<Dashboard> {
    return this.userDashboards.get(user.id);
  }

  public saveUserDashBoards(user: User): void {
    localStorage.setItem(user.id, JSON.stringify(this.userDashboards.get(user.id)));
  }

  public getDashBoardOptions(): DashboardOptions {
    return {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 1000,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: "gridster-item-content",
        ignoreContent: true,
        dragHandleClass: "drag-handler",
        dropOverItems: false
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: function() {},
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemChangeCallback: function() {},
      itemResizeCallback: function() {}
     };
  }
}

