import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-plant',
  templateUrl: './select-plant.component.html',
  styleUrls: ['./select-plant.component.scss']
})
export class SelectPlantComponent implements OnInit {
  livedata : any = {};

  public isBTC = false;
  public isETH = false;
  public isDASH = false;






  constructor(public httpClient:HttpClient ) {

  }


  cell = ['Busy']

  public onSelect(e) {  }

  ngOnInit() {

    setInterval(() => {
      // this.getshapenames()
    }, 5000);

    this.getshapenames()
  }


  getshapenames(){
    this.httpClient.get<any>('http://122.166.167.113:8085/getlivedata').subscribe(
      response => {
        console.log(response);
        this.livedata = response;

      }
    );
  }

  options: string[] = ["line", "pie", "bar"];
  selectedQuantity = "line";




  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['sagar', 'laxman', 'nimesh', 'vishal', 'nilam'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 60, 50], label: 'Remote'},
    {data: [28, 48, 40, 81], label: 'Visit'}
  ];

  public barChartOptions1 = {
    options: {
        title: {
          display: true,
          text: 'Example Chart'
        },
        scales: {
          xAxes: [{
            position: 'bottom',
            gridLines: {
              zeroLineColor: "rgba(0,255,0,1)"
            },
            scaleLabel: {
             display: true,
             labelString: 'x axis'
            },
            stacked: true
          }],
          yAxes: [{
            position: 'left',
            gridLines: {
              zeroLineColor: "rgba(0,255,0,1)"
            },
            scaleLabel: {
              display: true,
              labelString: 'y axis'
            }
          }]
        }
      }
    };
  // tslint:disable-next-line: member-ordering
  public barChartLabels1 = ['0', '1', '2', '3', '4', '5', '6', '7'];
  // tslint:disable-next-line: member-ordering
  public barChartType1 = 'line';
  public barChartLegend1 = true;
  public barChartData1 = [
    { data: [65, 65],
      label: 'Remote',
      fill: false,
    },
    { data: [81, 81], label: 'Visit', fill: false },
    { data: [, ,70, 70],
      fill: false,
    },
    { data: [81, 81], label: 'Visit', fill: false }
  ];


}
