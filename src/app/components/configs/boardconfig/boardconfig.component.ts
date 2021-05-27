import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import {Data} from './data'
;
interface GridsterItemMik extends GridsterItem {
  backgroundCol?: string;
}

@Component({
  selector: 'app-boardconfig',
  templateUrl: './boardconfig.component.html',
  styleUrls: ['./boardconfig.component.scss']
})
export class BoardconfigComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItemMik>;
  url = 'http://localhost:58617/API/Charts/GetCharts';
  data: Data[];
  Player = [];
  Run = [];
  Linechart : any ;
  static itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {

    this.httpClient.get(this.url).subscribe((result: Data[]) => {
      result.forEach(x => {
        this.Player.push(x.PlayerName);
        this.Run.push(x.Run);
      });

      this.Linechart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.Player,

          datasets: [
            {
              data: this.Run,
              borderColor: '#3cb371',
              backgroundColor: "#0000FF",
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
    this.dashboard = [
      { cols: 1, rows: 3, y: 0, x: 0 ,type : 'text'},
      { cols: 1, rows: 6, y: 0, x: 0 ,type : 'pi'},
      { cols: 2, rows: 4, y: 0, x: 0 ,type : 'bar'},
      { cols: 1, rows: 4, y: 0, x: 0 ,type : 'graph'},
      { cols: 1, rows: 6, y: 0, x: 0 ,type : 'image'},
      { cols: 2, rows: 5, y: 0, x: 0 ,type : 'text'},
      { cols: 1, rows: 5, y: 0, x: 0,type : 'js' },
      { cols: 1, rows: 3, y: 0, x: 0 ,type : 'chart'},


    ];
    this.options = {
      itemChangeCallback: BoardconfigComponent.itemChange,
      itemResizeCallback: BoardconfigComponent.itemResize,
      displayGrid: 'none',
      maxCols: 3,
      // maxRows: 20,
      draggable: {
        enabled: true, // enables to drag element
        // dropOverItems: true, // nothing changes actually
      },
      pushItems: true,
      // disableScrollHorizontal: true, // can drag only to top or bottom
      resizable: { enabled: true }, // enables to resize element
    };
    this.setRandomColor();
  }

  changedOptions() {
    console.log('changedOptions');
    this.options.api.optionsChanged();
  }

  removeItem(e, item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push(
      { cols: 1, rows: 3, y: 0, x: 0, backgroundCol: this.getRandomColor() }
    );
  }

  minimizeItem(e, item) {
    item.rows = 1;
    this.options.api.optionsChanged(); // MIKEY NOTE: this makes things going in Gridster2!
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setRandomColor(): void {
    for (let i = 0; i < this.dashboard.length; i++) {
      this.dashboard[i].backgroundCol = this.getRandomColor();
    }
  }
}
