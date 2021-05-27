import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Chart from 'chart.js';


const dataset1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
  }]
};

const dataset2 = {
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of People',
data: [3, 5, 2, 12, 19, 3],
}]
};



@Component({
  selector: 'app-plantmachine',
  templateUrl: './plantmachine.component.html',
  styleUrls: ['./plantmachine.component.scss']
})
export class PlantmachineComponent implements OnInit {

  chart: Chart;

  @ViewChild('graph', { static: true })



  graph: ElementRef;

  ctx: CanvasRenderingContext2D;

  currentDataSet = dataset1;
  livedata : any  = {};
  options: any  = {};
  selectedQuantity;

  values = [];
  props = [];
  xaxis = [];
  num = [];
  data1 = [];
  myData = [];
  validationForm: FormGroup;
  constructor(public httpClient: HttpClient ,private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.validationForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    })

    this.getshapenamesline()
    this.ctx = (<HTMLCanvasElement>this.graph.nativeElement).getContext(
      '2d',
    );

    this.renderChart();
  }

  renderChart(){
    this.chart = new Chart(this.ctx, this.chartConfig);
  }

  pick(dataSet){
    this.currentDataSet = dataSet === 1 ? dataset1 : dataset2;
    this.renderChart();
  }

  get chartConfig(): Chart.ChartConfiguration {
    return  {
              type: 'bar',
              data: this.currentDataSet,
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
          }
  }

  getshapenamesline(){
    this.httpClient.get<any>('http://122.166.167.113:8085/linename').subscribe(
      response => {
        console.log(response);
        this.options = response;

      }
    );
  }
machineinline;
  getshapenameslinedata(a){
    this.httpClient.get<any>('http://122.166.167.113:8085/getlinedata/'+a).subscribe(
      response => {
        console.log(response);
        this.machineinline = response.machine;

      }
    );
  }
   // tslint:disable-next-line: member-ordering
   public barChartData3 = [
                           {data: [65, 59, 80, 60, 50], label: 'Remote'},
                           {data: [20, 59, 55, 60, 24], label: 'main'},
                           {data: [65, 50, 80, 22, 50], label: 'let'}
                           ]





  changeProject(s){

    this.getshapenameslinedata(s);
    console.log("s value",s);
    this.httpClient.get<any>('http://122.166.167.113:8085/getmachinechart/'+s).subscribe(
      response => {
        console.log("getmachine char",response);
        this.getchartdata(response);
      }
    );
  }

  getchartdata(chartdata){
    // tslint:disable-next-line: prefer-for-of
    let count = 1;

    for ( let i = 0; i < Object.keys(chartdata['machinedata']).length; i++){
      this.xaxis.push(count);
      this.props.push(chartdata['machinedata'][i]['property']);
      this.values.push(chartdata['machinedata'][i]['liveval']);
      if(i>0 && chartdata['machinedata'][i]['property'] != chartdata['machinedata'][i-1]['property']){
        this.num.push(i-1);
      }
      count = count + 1;
    }

    for(let i=0;i<this.num.length;i++){
        var x = this.num[i]

    }
console.log("num", this.num)
let k =0;
    for (let r = 0; r<this.num.length; r++){
      this.data1 = []
      console.log("num value",this.num[r])
      for(let j=k; j<this.num[r];j++){
        console.log("nummm", j)
        var inarr = [];
        inarr.push(this.xaxis[j]);
        inarr.push(parseFloat(this.values[j]));
        var prop = this.props[j]
        this.data1.push(inarr);

      }
      k=this.num[r]
      console.log("data", this.data1)
      this.myData.push( { data: this.data1, name: prop , text : prop });

    }


    // this.myData = [
    //   { data: this.data1, name: 'data1' ,text : 'main' },
    //   { data: [[1,5], [3,2.1644874], [4,3]], name: 'first' ,text : 'main' },



    // ];

    console.log("values",this.data1);
  }

  optiont: string[] = ['line', 'pie', 'bar'];
  types = 'line';


  // tslint:disable-next-line: member-ordering
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  // chartdata = [
  //   {

  //     'chart1' : '['sagar', 'laxman', 'nimesh', 'vishal', 'nilam']',
  //     'chart1data'
  //   }




  public barChartLabels = ['sagar', 'laxman', 'nimesh', 'vishal', 'nilam'];
  public barChartType = this.types;
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
              zeroLineColor: 'rgba(0,255,0,1)'
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
              zeroLineColor: 'rgba(0,255,0,1)'
            },
            scaleLabel: {
              display: true,
              labelString: 'y axis'
            }
          }]
        }
      }
    };
  public barChartLabels1 = ['0', '1', '2', '3', '4', '5', '6', '7'];
  public barChartType1 = 'line';
  public barChartLegend1 = true;
  public barChartData1 = [
    { data: [65, 65],
      label: 'Remote',
      fill: false,
    },
  ];




  chartopp ;

  // tslint:disable-next-line: member-ordering
  chartsms = [{ 'name': 'line'},
  {'name': 'bar'},{'name': 'area'}
  ]
  changechart(chartopp){

    localStorage.setItem('charttype', this.chartopp);
  }
  // myData = [
  //   { data: this.data1, name: 'data1' ,text : 'main' },
  //   // { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },
  //   // { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },
  //   // { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },
  //   // { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },
  //   // { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },
  //   // { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },
  //   { data: [[1,5], [3,2], [4,3]], name: 'first' ,text : 'main' },



  // ];

  public customOptions: any = {
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      420: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      932: {
        items: 4,
        nav: false
      }
    }
  }

}
