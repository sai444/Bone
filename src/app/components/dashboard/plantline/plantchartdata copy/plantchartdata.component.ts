import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-plantchartdata',
  templateUrl: './plantchartdata.component.html',
  styleUrls: ['./plantchartdata.component.scss']
})
export class PlantchartdataComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // lineChart
  public label = 8;
  public a = 0;

  public lineChartData: Array<any> = [
15, 20, 19, 18, 0, 10, 11, 12,25
  ];

  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7','8'];
  public lineChartOptions: any = {
    responsive: true,
    scales : {
    yAxes: [{
       ticks: {
        //  steps : 25,
        //  stepValue : 15,
        //  max : 40,
          min : 0,
        }
    }]
  }
  };

  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: 'MFL1'
      },
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const _lineChartData = this.lineChartData;
      const _lineChartLabels = this.lineChartLabels;
      _lineChartData.push(Math.floor((Math.random() * 20) + 1));
      _lineChartLabels.push(this.label);
      this.label++;

      this.lineChartData.splice(0,1);
      this.lineChartLabels.splice(0,1);


      this.lineChartData = _lineChartData;
      this.lineChartLabels = _lineChartLabels;
      this.chart.chart.update();
    }, 1000);
  }

}
