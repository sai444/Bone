import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-plantchart1data',
  templateUrl: './plantchart1data.component.html',
  styleUrls: ['./plantchart1data.component.scss']
})
export class Plantchart1dataComponent implements OnInit {


  constructor(public http: HttpClient) { }
  tagvalues8 : any;
  values8 : any;
  tagvalues1 : any;
  values1 : any;
  tagvalues2 : any;
  values2 : any;
  tagvalues3 : any;
  values3 : any;
  tagvalues4 : any;
  values5 : any;
  tagvalues5 : any;
  values6 : any;
  tagvalues6 : any;
  values4 : any;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // lineChart
  public label = 8;
  public a = 0;

  public tasklist;
  public list = [];
  public list1 = [];
  public list2= [];
  public list3 =[];
  public list4 =[];
  public list5 =[];
  public lineChartData: Array<any> = [
  0, 0, 0, 0, 0, 0, 0, 0,0
  ];
  public lineChartData1: Array<any> = [
    0, 0, 0, 0, 0, 0, 0, 0,0
    ];
    public lineChartData2: Array<any> = [
      0, 0, 0, 0, 0, 0, 0, 0,0
      ];
      public lineChartData3: Array<any> = [
        0, 0, 0, 0, 0, 0, 0, 0,0
        ];
        public lineChartData4: Array<any> = [
          0, 0, 0, 0, 0, 0, 0, 0,0
          ];
          public lineChartData5: Array<any> = [
            0, 0, 0, 0, 0, 0, 0, 0,0
            ];


  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8'];
  public lineChartLabels1: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8'];
  public lineChartLabels2: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8'];
  public lineChartLabels3: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8'];
  public lineChartLabels4: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8'];
  public lineChartLabels5: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8'];
  public lineChartOptions: any = {
    legend: {
      position: 'right',
      align: 'start',
  },
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
        label: '5 SGB G M DE RMS'
      },
      { data: this.lineChartData1,
        label: '5 SGB D A DE RMS'
      },
      { data: this.lineChartData2,
        label: 'SGB_WH Motor DE 696'
      },
      { data: this.lineChartData3,
        label: 'SGB_GR Motor DE 693'
      },
      { data: this.lineChartData4,
        label: '5 SGB G M NDE RMS'
      },
      { data: this.lineChartData5,
        label: '5 SGB WH M NDE RMS'
      }
  ];



  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(102,159,177,0.2)',
      borderColor: 'rgba(102,159,177,1)',
      pointBackgroundColor: 'rgba(102,159,177,1)',
      pointBorderColor: '#66fff',
      pointHoverBackgroundColor: '#66fff',
      pointHoverBorderColor: 'rgba(102,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  @Input() name: string;


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {

    setTimeout(() => {

      console.log('clear chart ********************************');
    this.chart.chart.clear();



    this.lineChartData = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
    this.lineChartData1 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
    this.labelMFL = [
       {  data: [] =  this.lineChartData,
        label: this.tagvalues1
      },
      {  data: [] =  this.lineChartData1,
        label: this.tagvalues2
      },
      {  data: [] =  this.lineChartData2,
        label: this.tagvalues3
      },

      {  data: [] =  this.lineChartData3,
        label: this.tagvalues4
      },
      {  data: [] =  this.lineChartData4,
        label: this.tagvalues5
      },

      {  data: [] =  this.lineChartData5,
        label: this.tagvalues6
      },
    ];
      this.chart.chart.update();





    }, 3000);

    console.log('labelMFL,labelMFL', this.labelMFL);

    this.http.get<any>('http://122.166.167.113:8085/linecharttags').subscribe(data => {
      this.tasklist = data.filter(
        task => task.chartno === 1)
      console.log('get request data', this.tasklist[0]['realtimeval']);
      this.list.push(this.tasklist[0].property)
      console.log('this.list',this.list[0]);

      this.list1.push(this.tasklist[1].property)
      console.log('this.list',this.list1[0]);

      this.list2.push(this.tasklist[2].property)
      this.list3.push(this.tasklist[3].property)
      this.list4.push(this.tasklist[4].property)
      this.list5.push(this.tasklist[5].property)
      this.tagvalues1=this.tasklist[0].description
      this.values1 = parseFloat(this.tasklist[0].realtimeval).toFixed(3)

      this.tagvalues2=this.tasklist[1].description
      this.values2 = parseFloat(this.tasklist[1].realtimeval).toFixed(3)

      this.tagvalues3=this.tasklist[2].description
      this.values3 = parseFloat(this.tasklist[2].realtimeval).toFixed(3)

      this.tagvalues4=this.tasklist[3].description
      this.values4 = parseFloat(this.tasklist[3].realtimeval).toFixed(3)

      this.tagvalues5=this.tasklist[4].description
      this.values5 = parseFloat(this.tasklist[4].realtimeval).toFixed(3)

      this.tagvalues6=this.tasklist[5].description
      this.values6 = parseFloat(this.tasklist[5].realtimeval).toFixed(3)

      this.chart.chart.update();

    });



    setInterval(() => {

      // tslint:disable-next-line: deprecation
      this.http.get<any>('http://122.166.167.113:8085/linecharttags').subscribe(data => {
        this.tasklist = data.filter(
          task => task.chartno === 1)
        console.log('get request data', this.tasklist[0]['realtimeval']);
      });
      console.log('labelMFL,labelMFL', this.labelMFL);
      // for (let i = 0; i < Object.keys(this.tasklist).length; i++){

      // }
      const _lineChartData = this.lineChartData;
      const _lineChartLabels = this.lineChartLabels;
      // _lineChartData.push(Math.floor((Math.random() * 20) + 1));
      _lineChartData.push(this.tasklist[0].realtimeval);
      const newlable1 = (this.tasklist[0].timestamp).toString().split(" ");
      console.log('newlable1',newlable1[4]);
      _lineChartLabels.push(newlable1[4]);
      // _lineChartLabels.push(this.label);
      this.label++;

      this.lineChartData.splice(0, 1);
      this.lineChartLabels.splice(0, 1);

      this.lineChartData = _lineChartData;
      this.lineChartLabels = _lineChartLabels;
      // this.labelMFL.push({data: this.lineChartData, label: this.tasklist[0].property})

      const _lineChartData1 = this.lineChartData1;
      // const _lineChartLabels1 = this.lineChartLabels1;
      // _lineChartData1.push(Math.floor((Math.random() * 20) + 1));
      _lineChartData1.push(this.tasklist[1].realtimeval);
      // _lineChartLabels1.push(this.label);
      this.label++;

      this.lineChartData1.splice(0, 1);
      // this.lineChartLabels1.splice(0, 1);

      this.lineChartData1 = _lineChartData1;
      // this.lineChartLabels1 = _lineChartLabels1;
      // this.labelMFL.push({data: this.lineChartData1, label: this.tasklist[1].property})


      const _lineChartData2 = this.lineChartData2;
      // const _lineChartLabels2 = this.lineChartLabels2;
      // _lineChartData2.push(Math.floor((Math.random() * 20) + 1));
      _lineChartData2.push(this.tasklist[2].realtimeval);
      // _lineChartLabels2.push(this.label);
      this.label++;

      this.lineChartData2.splice(0, 1);
      // this.lineChartLabels2.splice(0, 1);

      this.lineChartData2 = _lineChartData2;
      // this.lineChartLabels2 = _lineChartLabels2;
      // this.labelMFL.push({data: this.lineChartData2, label: this.tasklist[2].property})
      this.values1 = parseFloat(this.tasklist[0].realtimeval).toFixed(3)

      this.values2 = parseFloat(this.tasklist[1].realtimeval).toFixed(3)

      this.values3 = parseFloat(this.tasklist[2].realtimeval).toFixed(3)

      this.values4 = parseFloat(this.tasklist[3].realtimeval).toFixed(3)

      this.values5 = parseFloat(this.tasklist[4].realtimeval).toFixed(3)
      this.values6 = parseFloat(this.tasklist[5].realtimeval).toFixed(3)


      const _lineChartData3 = this.lineChartData3;
      // const _lineChartLabels3 = this.lineChartLabels3;
      // _lineChartData3.push(Math.floor((Math.random() * 20) + 1));
      _lineChartData3.push(this.tasklist[3].realtimeval);
      // _lineChartLabels3.push(this.label);
      this.label++;

      this.lineChartData3.splice(0, 1);
      // this.lineChartLabels3.splice(0, 1);

      this.lineChartData3 = _lineChartData3;
      // this.lineChartLabels3 = _lineChartLabels3;
      // this.labelMFL.push({data: this.lineChartData3, label: this.tasklist[3].property})


      const _lineChartData4 = this.lineChartData4;
      // const _lineChartLabels4 = this.lineChartLabels4;
      // _lineChartData4.push(Math.floor((Math.random() * 20) + 1));
      _lineChartData4.push(this.tasklist[4].realtimeval);
      // _lineChartLabels4.push(this.label);
      this.label++;

      this.lineChartData4.splice(0, 1);
      // this.lineChartLabels4.splice(0, 1);

      this.lineChartData4 = _lineChartData4;
      // this.lineChartLabels4 = _lineChartLabels4;
      // this.labelMFL.push({data: this.lineChartData4, label: this.tasklist[4].property})


      const _lineChartData5 = this.lineChartData5;
      // const _lineChartLabels5 = this.lineChartLabels5;
      // _lineChartData5.push(Math.floor((Math.random() * 20) + 1));
      _lineChartData5.push(this.tasklist[5].realtimeval);
      // _lineChartLabels5.push(this.tasklist[5].property);
      this.label++;

      this.lineChartData5.splice(0, 1);
      // this.lineChartLabels5.splice(0, 1);

      this.lineChartData5 = _lineChartData5;
      // this.lineChartLabels5 = _lineChartLabels5;
      // this.labelMFL.push({data: this.lineChartData5, label: this.tasklist[5].property})









     /////////////////////////// for multiplevalues

      // this.labelMFL = [];
      // for (let i = 0; i < Object.keys(this.tasklist).length; i++){
      //   this.lineChartData = [0, 0, 0, 0, 0, 0, 0, 0];
      //   const _lineChartData = this.lineChartData;
      //   const _lineChartLabels = this.lineChartLabels;
      //   // _lineChartData.push(Math.floor((Math.random() * 20) + 1));
      //   _lineChartData.push(this.tasklist[i].realtimeval);
      //   _lineChartLabels.push(this.tasklist[i].property);
      //   this.label++;

      //   this.lineChartData.splice(0, 1);
      //   this.lineChartLabels.splice(0, 1);


      //   this.lineChartData = _lineChartData;
      //   this.lineChartLabels = _lineChartLabels;
      //   this.labelMFL.push({data: this.lineChartData, label: this.tasklist[i].property});
      // }

      // console.log("MFL", this.labelMFL);


      this.chart.chart.update();
    }, 30000);



      // this.http.get<any>('http://122.166.167.113:8085/linecharttags').subscribe(data => {
      //   this.tasklist = data.filter(
      //     task => task.chartno === 1);
      // console.log("get request data", this.tasklist);
      // });

  }

}
