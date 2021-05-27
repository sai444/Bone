import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-panelthree',
  templateUrl: './panelthree.component.html',
  styleUrls: ['./panelthree.component.scss']
})
export class PanelthreeComponent implements OnInit {



  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {


setInterval(() => {
  this.randomize();
}, 5000);


  }
    public mbarChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7'];
    public barChartType:string = 'line';
    public barChartLegend:boolean = true;

    public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(102, 153, 255,0.2)',
      borderColor: 'rgba(0, 131, 179,1)',
      pointBackgroundColor: 'rgba(0, 153, 204,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(0, 131, 179)'
    },
    {
      backgroundColor: 'rgba(0, 131, 179,0.3)',
      borderColor: 'rgba(51, 204, 255,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#00394d',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
    public barChartData:any[] = [
      {data: [55, 60, 75, 82, 56, 62, 80], label: 'SPG CH-5'},
      {data: [58, 55, 60, 79, 66, 57, 90], label: 'SPC IR CH-5'}
    ];

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    public randomize():void {
      let data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100)];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    }

}
