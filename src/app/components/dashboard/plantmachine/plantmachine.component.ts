import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Chart from 'chart.js';


import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-plantmachine',
  templateUrl: './plantmachine.component.html',
  styleUrls: ['./plantmachine.component.scss']
})
export class PlantmachineComponent implements OnInit {
  selectedQuantity;
  selectedQuantitys;
values;
values1;
values2;
values3;
values4;
values5;
values6;
values7;
values8;

tagvalues1;
tagvalues2;
tagvalues3;
tagvalues4;
tagvalues5;
tagvalues6;
tagvalues7;
tagvalues8;
optionsp : string[] = ['SKF BNG']
   options1: string[] = ["CHANNEL-5"];
   options: string[] = [ "SGB CH5","SPC (IR) CH5", "SPC (OR) CH5"];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @ViewChild(BaseChartDirective) chart1: BaseChartDirective;
  @ViewChild(BaseChartDirective) chart2: BaseChartDirective;
  @ViewChild(BaseChartDirective) chart3: BaseChartDirective;

  public label = 8;
  public a = 0;

  public tasklist;
  public tasklist1;
  public tasklist2;
  public tasklist3;
  public list = [];
  public list1 = [];
  public list2= [];
  public list3 =[];
  public list4 =[];
  public list5 =[];

  validationForm: FormGroup;


  constructor(public http: HttpClient, private fb: FormBuilder ) { }


  public lineChartData: Array<any> = [
    0, 0, 0, 0, 0, 0, 0, 0,0,0
    ];
  public lineChartData1: Array<any> = [
      0, 0, 0, 0, 0, 0, 0, 0,0 ,0
      ];
      public lineChartData2: Array<any> = [
        0, 0, 0, 0, 0, 0, 0, 0,0,0
        ];
      public lineChartData3: Array<any> = [
          0, 0, 0, 0, 0, 0, 0, 0,0 ,0
          ];

          public lineChartData4: Array<any> = [
            0, 0, 0, 0, 0, 0, 0, 0,0,0
            ];
          public lineChartData5: Array<any> = [
              0, 0, 0, 0, 0, 0, 0, 0,0 ,0
              ];

              public lineChartData6: Array<any> = [
                0, 0, 0, 0, 0, 0, 0, 0,0,0
                ];
              public lineChartData7: Array<any> = [
                  0, 0, 0, 0, 0, 0, 0, 0,0 ,0
                  ];





    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9'];
    public lineChartLabels1: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9'];
    public lineChartLabels2: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9'];
    public lineChartLabels3: Array<any> = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9'];


    public labelMFL: Array<any> = [
        { data: [] = this.lineChartData,
          label: ''
        },
        {  data: [] =  this.lineChartData1,
          label: ''
        },

    ];
    public labelMFL1: Array<any> = [
      {  data: [] =  this.lineChartData2,
        label: ''
      },
      {  data: [] =  this.lineChartData3,
        label: ''
      },

  ];
  public labelMFL2: Array<any> = [
    {  data: [] =  this.lineChartData4,
      label: ''
    },
    {  data: [] =  this.lineChartData5,
      label: ''
    },

];
public labelMFL3: Array<any> = [
  {  data: [] =  this.lineChartData6,
    label: ''
  },
  {  data: [] =  this.lineChartData7,
    label: ''
  },

];
selectedQuantityp = 'SKF BNG'
onOptionsSelectedp(selectedQuantity){


}
    onOptionsSelected(value){

      this.labelMFL = [
        {  data: [] =  this.lineChartData,
          label: ''
        },
        {  data: [] =  this.lineChartData1,
          label: ''
        },

    ];
    this.labelMFL1 = [
      {  data: [] =  this.lineChartData,
        label: ''
      },
      {  data: [] =  this.lineChartData1,
        label: ''
      },

  ];

  this.labelMFL2 = [
    {  data: [] =  this.lineChartData,
      label: ''
    },
    {  data: [] =  this.lineChartData1,
      label: ''
    },

];

this.labelMFL3 = [
  {  data: [] =  this.lineChartData,
    label: ''
  },
  {  data: [] =  this.lineChartData1,
    label: ''
  },

];



      console.log("the selected value is " + this.selectedQuantity);

    }

    onOptionsSelecteds(value){

//       this.labelMFL = [
//         { data: this.lineChartData,
//           label: ''
//         },
//         { data: this.lineChartData1,
//           label: ''
//         },

//     ];
//     this.labelMFL1 = [
//       { data: this.lineChartData,
//         label: ''
//       },
//       { data: this.lineChartData1,
//         label: ''
//       },

//   ];

//   this.labelMFL2 = [
//     { data: this.lineChartData,
//       label: ''
//     },
//     { data: this.lineChartData1,
//       label: ''
//     },

// ];

// this.labelMFL3 = [
//   { data: this.lineChartData,
//     label: ''
//   },
//   { data: this.lineChartData1,
//     label: ''
//   },

// ];


      this.chart.chart.clear();
      this.chart1.chart.clear();
      this.chart2.chart.clear();
      this.chart3.chart.clear();
      this.chart.chart.clear();
      setTimeout(() => {

        // this.values1 = ''
        // this.tagvalues1 = ''
        // this.values2 = ''
        // this.tagvalues2 = ''
        // this.values3 = ''
        // this.tagvalues4 = ''
        // this.values4 = ''
        // this.tagvalues4 = ''
        // this.values5 = ''
        // this.tagvalues5 = ''
        // this.values6 = ''
        // this.tagvalues6 = ''
        // this.values7 = ''
        // this.tagvalues7 = ''
        // this.values8 = ''
        // this.tagvalues8 = ''
        console.log('clear chart ********************************');
      this.chart.chart.clear();
      this.chart1.chart.clear();
      this.chart2.chart.clear();
      this.chart3.chart.clear();


      this.lineChartData = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData1 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL = [
        {  data: [] =  this.lineChartData,
          label: this.tagvalues1
        },
        {  data: [] =  this.lineChartData1,
          label: this.tagvalues2
        },

    ];

      this.lineChartData2 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData3 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL1 = [
      {  data: [] =  this.lineChartData2,
        label: this.tagvalues3
      },
      {  data: [] =  this.lineChartData3,
        label: this.tagvalues4
      },

  ];
      this.lineChartData4 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData5 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL2 = [
    {  data: [] =  this.lineChartData4,
      label: this.tagvalues5
    },
    {  data: [] =  this.lineChartData5,
      label: this.tagvalues6
    },

];
      this.lineChartData6 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData7 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL3 = [
  {  data: [] =  this.lineChartData6,
    label: this.tagvalues7
  },
  {  data: [] =  this.lineChartData7,
    label: this.tagvalues8
  },

];
      }, 30000);

      setTimeout(() => {

        // this.values1 = ''
        // this.tagvalues1 = ''
        // this.values2 = ''
        // this.tagvalues2 = ''
        // this.values3 = ''
        // this.tagvalues4 = ''
        // this.values4 = ''
        // this.tagvalues4 = ''
        // this.values5 = ''
        // this.tagvalues5 = ''
        // this.values6 = ''
        // this.tagvalues6 = ''
        // this.values7 = ''
        // this.tagvalues7 = ''
        // this.values8 = ''
        // this.tagvalues8 = ''
        console.log('clear chart ********************************');
      this.chart.chart.clear();
      this.chart1.chart.clear();
      this.chart2.chart.clear();
      this.chart3.chart.clear();


      this.lineChartData = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData1 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL = [
        {  data: [] =  this.lineChartData,
          label: this.tagvalues1
        },
        {  data: [] =  this.lineChartData1,
          label: this.tagvalues2
        },

    ];

      this.lineChartData2 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData3 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL1 = [
      {  data: [] =  this.lineChartData2,
        label: this.tagvalues3
      },
      {  data: [] =  this.lineChartData3,
        label: this.tagvalues4
      },

  ];
      this.lineChartData4 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData5 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL2 = [
    {  data: [] =  this.lineChartData4,
      label: this.tagvalues5
    },
    {  data: [] =  this.lineChartData5,
      label: this.tagvalues6
    },

];
      this.lineChartData6 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData7 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL3 = [
  {  data: [] =  this.lineChartData6,
    label: this.tagvalues7
  },
  {  data: [] =  this.lineChartData7,
    label: this.tagvalues8
  },

];
      }, 40000);

      this.lineChartData = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData1 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL = [
        {  data: [] =  this.lineChartData,
          label: this.tagvalues1
        },
        {  data: [] =  this.lineChartData1,
          label: this.tagvalues2
        },

    ];

      this.lineChartData2 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData3 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL1 = [
      {  data: [] =  this.lineChartData2,
        label: this.tagvalues3
      },
      {  data: [] =  this.lineChartData3,
        label: this.tagvalues4
      },

  ];
      this.lineChartData4 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData5 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL2 = [
    {  data: [] =  this.lineChartData4,
      label: this.tagvalues5,

    },
    {  data: [] =  this.lineChartData5,
      label: this.tagvalues6
    },

];
      this.lineChartData6 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.lineChartData7 = [0, 0, 0, 0, 0, 0, 0, 0,0,0]
      this.labelMFL3 = [
  {  data: [] =  this.lineChartData6,
    label: this.tagvalues7
  },
  {  data: [] =  this.lineChartData7,
    label: this.tagvalues8
  },

];
setTimeout(() => {

  this.chart.chart.update();

  console.log('updat chart ********************************');

  }, 7000);

      this.chart.chart.update();
      this.chart1.chart.update();
      this.chart2.chart.update();
      this.chart3.chart.update();

      // console.log("the selected value is machine name " + this.selectedQuantitys);
      // this.chirt1(this.selectedQuantitys)


    }

    public lineChartOptions: any = {

      responsive: true, legend: {
        position: 'right',
        align: 'start',
    },
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



    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }
  ngOnInit(): void {


this.chirt1()



  }


 chirt1(){

  setInterval(() => {
    this.http.get<any>('http://122.166.167.113:8085/machinecharttags/'+this.selectedQuantitys).subscribe(data => {
      this.tasklist = data.filter(
        task => task.chartno === '1'),this.tasklist1 = data.filter(
          task => task.chartno === '2'),this.tasklist2 = data.filter(
            task => task.chartno === '3'),this.tasklist3 = data.filter(
              task => task.chartno === '4')
      if (this.tasklist[1] == null){
          console.log('get request data 1', this.tasklist[0]['realtimeval'])
        }
        else{
          console.log('get request data 1', this.tasklist[0]['realtimeval'], this.tasklist[1]['realtimeval']);
        }

    });
    console.log('labelMFL,labelMFL', this.labelMFL);


    const _lineChartData = this.lineChartData;
    const _lineChartLabels = this.lineChartLabels;

    _lineChartData.push(this.tasklist[0].realtimeval);
    this.values1 = parseFloat(this.tasklist[0].realtimeval).toFixed(2)
    this.tagvalues1 = (this.tasklist[0].description);
    const newlable1 = (this.tasklist[0].timestamp).toString().split(" ");
    console.log('newlable1',newlable1[4]);

    _lineChartLabels.push(newlable1[4]);
    this.label++;
    console.log('tagvalues1======================================', this.tagvalues1);

    this.lineChartData.splice(0, 1);
    this.lineChartLabels.splice(0, 1);

    this.lineChartData = _lineChartData;
    this.lineChartLabels = _lineChartLabels;

    if (this.tasklist[1] == null){
      console.log('get request data 1', this.tasklist[0]['realtimeval'])
    }
    else{
      const _lineChartData1 = this.lineChartData1;
      // const _lineChartLabels1 = this.lineChartLabels1;

      _lineChartData1.push(this.tasklist[1].realtimeval);
      // _lineChartLabels1.push(this.tasklist[1].timestamp);
      this.label++;
      this.values2 = parseFloat(this.tasklist[1].realtimeval).toFixed(2)
      this.tagvalues2 = (this.tasklist[1].description);
      this.lineChartData1.splice(0, 1);
      // this.lineChartLabels1.splice(0, 1);

      this.lineChartData1 = _lineChartData1;
      // this.lineChartLabels1 = _lineChartLabels1;
    }




    // this.http.get<any>('http://122.166.167.113:8085/machinecharttags/'+this.selectedQuantitys).subscribe(data => {
    //   this.tasklist1 = data.filter(
    //     task => task.chartno === 2)

    //   // console.log('get request data 2', this.tasklist[0]['realtimeval'],this.tasklist[1]['realtimeval']);
    // });
    console.log('labelMFL,labelMFL', this.labelMFL1);

    const _lineChartDatas = this.lineChartData2;
    const _lineChartLabels11 = this.lineChartLabels1;

    _lineChartDatas.push(this.tasklist1[0].realtimeval);

    const newlable2 = (this.tasklist1[0].timestamp).toString().split(" ");
    console.log('newlable1',newlable2[4]);
    _lineChartLabels11.push(newlable2[4]);
    this.label++;
    this.values3 = parseFloat(this.tasklist1[0].realtimeval).toFixed(2)
    this.tagvalues3 = (this.tasklist1[0].description);
    console.log('tagvalues3======================================',this.tagvalues3);
    this.lineChartData2.splice(0, 1);
    this.lineChartLabels1.splice(0, 1);

    this.lineChartData2 = _lineChartDatas;
    this.lineChartLabels1 = _lineChartLabels11;

    if (this.tasklist1[1] == null){
      console.log('get request data 1', this.tasklist[0]['realtimeval'])

    }
    else{

    const _lineChartData11 = this.lineChartData3;
    // const _lineChartLabels12 = this.lineChartLabels1;

    _lineChartData11.push(this.tasklist1[1].realtimeval);
    // _lineChartLabels12.push(this.label);
    this.label++;

    this.lineChartData3.splice(0, 1);
    // this.lineChartLabels1.splice(0, 1);
    this.values4 = parseFloat(this.tasklist1[1].realtimeval).toFixed(2)
    this.tagvalues4 = (this.tasklist1[1].description);
    this.lineChartData3 = _lineChartData11;
    // this.lineChartLabels1 = _lineChartLabels12;
    }

    // this.http.get<any>('http://122.166.167.113:8085/machinecharttags/'+this.selectedQuantitys).subscribe(data => {
    //   this.tasklist2 = data.filter(
    //     task => task.chartno === 3)
    //   // console.log('get request data 3', this.tasklist[0]['realtimeval'],this.tasklist[1]['realtimeval']);
    // });
    // console.log('labelMFL,labelMFL', this.labelMFL2);

    const _lineChartData31 = this.lineChartData4;
    const _lineChartLabels31 = this.lineChartLabels2;

    _lineChartData31.push(this.tasklist2[0].realtimeval);

    const newlable3 = (this.tasklist2[0].timestamp).toString().split(" ");
    console.log('newlable1',newlable3[4]);
    _lineChartLabels31.push(newlable3[4]);
    this.label++;
    this.values5 = parseFloat(this.tasklist2[0].realtimeval).toFixed(2)
    this.tagvalues5 = (this.tasklist2[0].description);
    console.log('tagvalues5======================================',this.tagvalues5);

    this.lineChartData4.splice(0, 1);
    this.lineChartLabels2.splice(0, 1);

    this.lineChartData4 = _lineChartData31;
    this.lineChartLabels2 = _lineChartLabels31;

    if (this.tasklist2[1] == null){
      console.log('get request data 1', this.tasklist[0]['realtimeval'])
    }
    else{

    const _lineChartData41 = this.lineChartData5;
    // const _lineChartLabels41 = this.lineChartLabels1;

    _lineChartData41.push(this.tasklist2[1].realtimeval);
    // _lineChartLabels41.push(this.label);
    this.label++;
    this.values6= parseFloat(this.tasklist2[1].realtimeval).toFixed(2)
    this.tagvalues6 = (this.tasklist2[1].description);

    console.log('tagvalues6======================================',this.tagvalues6);


    this.lineChartData5.splice(0, 1);
    // this.lineChartLabels1.splice(0, 1);

    this.lineChartData5 = _lineChartData41;
    // this.lineChartLabels1 = _lineChartLabels41;
    }

//
    // this.http.get<any>('http://122.166.167.113:8085/machinecharttags/'+this.selectedQuantitys).subscribe(data => {
    //   this.tasklist3 = data.filter(
    //     task => task.chartno === 4)
    //   // console.log('get request data 3', this.tasklist[0]['realtimeval'],this.tasklist[1]['realtimeval']);
    // });

    // console.log('labelMFL,labelMFL', this.labelMFL3);

    const _lineChartData51 = this.lineChartData6;
    const _lineChartLabels51 = this.lineChartLabels3;

    _lineChartData51.push(this.tasklist3[0].realtimeval);
    const newlable4 = (this.tasklist3[0].timestamp).toString().split(" ");
    console.log('newlable1',newlable4[4]);
    _lineChartLabels51.push(newlable4[4]  );
    this.label++;
    console.log('typeof*******************************',this.tasklist3[0].description);

    if(this.tasklist3[0].description != ''){
    this.values7 = parseFloat(this.tasklist3[0].realtimeval).toFixed(2)
    this.tagvalues7 = (this.tasklist3[0].description);
    }
    this.lineChartData6.splice(0, 1);
    this.lineChartLabels3.splice(0, 1);

    this.lineChartData6 = _lineChartData51;
    this.lineChartLabels3 = _lineChartLabels51;

    if (this.tasklist3[1] == null){
      console.log('get request data 1', this.tasklist[0]['realtimeval'])

    }
    else{

    const _lineChartData61 = this.lineChartData7;
    // const _lineChartLabels61 = this.lineChartLabels1;

    _lineChartData61.push(this.tasklist3[1].realtimeval);
    // _lineChartLabels61.push(this.label);
    this.label++;
    this.values8= parseFloat(this.tasklist3[1].realtimeval).toFixed(2)
    this.tagvalues8 = (this.tasklist3[1].description);
    this.lineChartData7.splice(0, 1);
    // this.lineChartLabels1.splice(0, 1);

    this.lineChartData7 = _lineChartData61;
    // this.lineChartLabels1 = _lineChartLabels61;

    }







    this.chart.chart.update();
    this.chart1.chart.update();
    this.chart2.chart.update();
    this.chart3.chart.update();
  }, 30000);
  }



}
