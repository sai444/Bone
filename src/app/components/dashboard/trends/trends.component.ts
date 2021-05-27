import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexStroke
} from "ng-apexcharts";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  colors: string[];
};
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  historyForm: FormGroup;
  selectedDate:any =new Date();
  fromdate;
  todate;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions11: Partial<ChartOptions>;
  public chartOptions12: Partial<ChartOptions>;

  constructor(public httpClient: HttpClient, public formBuilder: FormBuilder) {
this.todate =  new Date().toISOString().split('T')[0];
// this.fromdate = this.selectedDate.getFullYear()
console.log("date",this.fromdate,this.selectedDate)
let startDate = this.selectedDate; 
console.log("daasdaste",this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDay()-2)
let currentDate = new Date(
  startDate.getFullYear(),
  startDate.getMonth(),
  startDate.getDate()-2
);
console.log("currentDate",currentDate)
this.fromdate =  new Date(currentDate).toISOString().split('T')[0];

  }

  ngOnInit(): void {
    this.initFormGroup();
    this.getLines();
  }
  initFormGroup() {
    this.historyForm = this.formBuilder.group({
      machine: new FormControl(),
      line: new FormControl(),
      property: new FormControl('', Validators.required),
      fromDate: new FormControl(this.fromdate ? this.fromdate : '', Validators.required),
      toDate: new FormControl(new (Date) ? new (Date) : '', Validators.required),


    })
  }
  LinesList;
  getLines(){

    this.httpClient.get<any>('http://122.166.167.113:8085/linename').subscribe(
      response => {
        console.log("LinesList",response);
        this.LinesList = response;

      }
    );
  }
  machineList;
  getMachineList(lineName){
    this.machineList=[];
    this.httpClient.get<any>('http://122.166.167.113:8085/linemachinename/'+lineName).subscribe(
      response => {
        console.log("machineList",response);
        this.machineList = response;

      }
    );
  }
  graphData;
  length;
  selectedProperty;
  chartDatasets=[];
  getGraphData(data) {
    console.log("data", data)
    this.selectedProperty = data.property;
    let postdata = {

      "property":data.property,
      "fromdate":data.fromDate,
      "todate":data.toDate,
    }
    const url1 = 'http://122.166.167.113:8085/machinelivedata';
    this.httpClient.post(url1, postdata).subscribe(
      response => {
        this.graphData = [];
        this.chartDatasets=[];
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$new response", response);
        console.log(response);
        this.graphData = this.graphData.concat(response);
        this.length=this.graphData.length
        console.log("this.graphData",this.graphData);
        console.log("this.length",this.length);
        if(this.getGraphData){
          this.chartOptions11 = {
            series: [
              {
                name: "Value",
                data: this.generateDayWiseTimeSeries(
                  new Date(this.graphData[0].date).getTime(),
                  this.length,
                  {
                    min: 0,
                    max: this.length
                  }
                )
              },
              {
                name: "Threshold Value",
                data: this.generateThresholdDayWiseTimeSeries(
                  new Date(this.graphData[0].date).getTime(),
                  this.length,
                  {
                    min: 0,
                    max: this.length
                  }
                )
              }
            ],
            chart: {
              id: "chart2",
              type: "line",
              height: 230,
              toolbar: {
                autoSelected: "pan",
                show: false
              }
            },
            colors: ["#546E7A","#FF0000"],
            stroke: {
              width: 3
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              opacity: 1
            },
            markers: {
              size: 0
            },
            xaxis: {
              type: "datetime"
            }
          };
      
          this.chartOptions12 = {
            series: [
              {
                name: "Value",
                data: this.generateDayWiseTimeSeries(
                  new Date(this.graphData[0].date).getTime(),
                  this.length,
                  {
                    min: 0,
                    max: this.length,
                  }
                )
              },
              
              
              
            ],
            chart: {
              id: "chart1",
              height: 130,
              type: "area",
              brush: {
                target: "chart2",
                enabled: true
              },
              selection: {
                enabled: true,
                xaxis: {
                  min: new Date(this.graphData[0].date).getTime(),
                  max: new Date(this.graphData[this.length-1].date).getTime()
                }
              }
            },
            colors: ["#008FFB","#FF0000"],
            fill: {
              type: "gradient",
              gradient: {
                opacityFrom: 0.91,
                opacityTo: 0.1
              }
            },
            xaxis: {
              type: "datetime",
              tooltip: {
                enabled: false
              }
            },
            yaxis: {
              tickAmount: 2
            }
          };
        }
        // // //  this.shapedetails= response;
        //  this.shapedetails = this.shapedetails.concat(response);
        //  this.Emps = this.Emps.concat(response);
        //  console.log("shape details", this.shapedetails);
      }
    );
  }
  properties;
  getProperties(machineName, form) {
    console.log("machineName", machineName)
    console.log("form", form)

    this.properties = [];
    this.httpClient.get<any>('http://122.166.167.113:8085/machineprops/' + form.machine).subscribe(
      response => {
        console.log("properties", response);
        this.properties = response;

      }
    );
  }

  public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = new Date(this.graphData[i].date).getTime();
      var y =this.graphData[i].value;
       
      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  // }
}
public generateThresholdDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = new Date(this.graphData[i].date).getTime();
    var y =this.graphData[i].threshold;
     
    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
// }
}

}




