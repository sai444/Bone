import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'chartjs-plugin-labels';
import { parse } from 'querystring';

@Component({
  selector: 'app-machmeta',
  templateUrl: './machmeta.component.html',
  styleUrls: ['./machmeta.component.scss']
})

export class MachmetaComponent implements OnInit {
  communication = true;
  machineData;
  channelName;
  // //////////////////////////


  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    legend: {
      position: 'left'
    },
    plugins: {
      labels: {
        render: 'value',
        fontSize: 14,
        fontStyle: 'bold',
        fontColor: '#000',
        fontFamily: '"Lucida Console", Monaco, monospace'

      },
    }


  };
  public pieChartLabels: Label[] = [['Alert'], ['Adequate'], ['Reliable']];
  public pieChartData: any[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartDataNull = [100];
  public pieChartLabelsNull: Label[] = [['No Data']];

  // Pie
  public pieChartOptions2: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      labels: {
        render: 'value',
        fontSize: 14,
        fontStyle: 'bold',
        fontColor: '#000',
        fontFamily: '"Lucida Console", Monaco, monospace'

      },
    }
  };
  // null option
  public pieChartOptionsNull: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      labels: {
        render: 'label',
        // arc: true,
        fontColor: '#FF6961',
        // position: 'outside'
      }
    }
  };
  public pieChartLabels2: Label[] = [['Alert'], ['Adequate'], ['Reliable']];


  public pieChartDataGraph: any[] = [];

  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = false;

  public pieChartPlugins2 = [];
  /////////////////////////////

  //////////////////

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType: string = 'pie';
  public doughnutChartType1: string = 'doughnut';


  // events

  public chartColorsNull: any[] = [
    {
      backgroundColor: ["#9e9e9e"]
    }];
  public chartColors1: any[] = [
    {
      backgroundColor: ["#FF6961", "#FFFF33", "#07E34E", "#DE54EC", "#4661EE", "#008080"]
    }];
  public options: any = {
    responsive: true,
    maintainAspectRatio: true,

    legend: false,
    animation: false,

    elements: {
      arc: {
        borderWidth: 0,

      }
    }

  }
  /////////////////////
  constructor(public httpClient: HttpClient, public router: Router, public route: ActivatedRoute) {
    this.channelName = this.route.snapshot.paramMap.get("channel");

  }

  ngOnInit(): void {
    this.getMachineData();
    this.getAlerts();
  }



  getMachineData() {
    this.pieChartData = [];
    this.pieChartDataGraph = [];
    this.httpClient.get<any>('http://122.166.167.113:8085/linemachinewisealerts/' + this.channelName).subscribe(
      response => {
        console.log("linealerts", response);
        this.machineData = response;
        this.pieChartData = [];
        this.pieChartDataGraph = [];
        // var data =[]
        // var data2=[]

        if (this.machineData) {
          this.machineData.forEach((element, i) => {
            console.log("element", i, element);
            this.pieChartData.push([]);
            this.pieChartDataGraph.push([]);


            this.pieChartData[i].push(element.Health_High, element.Health_Low, element.Health_Total);
            this.pieChartDataGraph[i].push(element.Vibration_High, element.Vibration_Low, element.Vibration_Total);
            // i++
          });
          console.log("this.pieChartData[i]", this.pieChartData[0][0]);
          console.log("this.pieChartDataGraph", this.pieChartDataGraph);

        }
      }
    );
    console.log("pieChartData", this.pieChartData);

  }
  machinelineAlerts;
  getAlerts() {
    this.httpClient.get<any>('http://122.166.167.113:8085/machinealertscnl/' + this.channelName).subscribe(
      response => {
        console.log("machinelineAlerts", response);
        this.machinelineAlerts = response;

      }
    );
  }
  routeToProfile(name) {
    let data = { machine: name, channel: this.channelName }
    this.router.navigate(['/dashboard/metaprofile', data]);
  }
}





