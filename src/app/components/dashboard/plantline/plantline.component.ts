import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/crypto';
import 'chartjs-plugin-streaming';
import { doughnutData, vertical_stack_chart, multiData, } from '../../../shared/data/dashboard/project';
import * as graphoptions from '../../../shared/data/dashboard/project';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plantline',
  templateUrl: './plantline.component.html',
  styleUrls: ['./plantline.component.scss']
})
export class PlantlineComponent implements OnInit {





  options1: string[] = ["SKF BNG"];
  options: string[] = [ "CHANNEL-5",];
  selectedQuantity = 'SKF BNG'
  selectedQuantitys ="CHANNEL-5"
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
livedata : any  = {};

  public isBTC = false;
  public isETH = false;
  public isDASH = false;



  public doughnutData = doughnutData;
  public vertical_stack_chart = vertical_stack_chart;

  constructor(public httpClient:HttpClient  ) {
    Object.assign(this, { doughnutData, vertical_stack_chart, multiData, })
  }
  machineinline;
  getshapenameslinedata(a){
    // tslint:disable-next-line: deprecation
    this.httpClient.get<any>('http://122.166.167.113:8085/getlinedata/'+a).subscribe(
      response => {
        console.log(response);
        this.machineinline = response.machine;

      }
    );
  }

  // doughnut
  public view = graphoptions.view;
  public doughnutChartColorScheme = graphoptions.doughnutChartcolorScheme;
  public doughnutChartShowLabels = graphoptions.doughnutChartShowLabels;
  public doughnutChartGradient = graphoptions.doughnutChartGradient;

  //vertical_stack_chart
  public verticalStackChartColorScheme = graphoptions.colorScheme;
  public verticalStackChartshowXAxis = graphoptions.showXAxis;
  public verticalStackChartshowYAxis = graphoptions.showYAxis;
  public verticalStackChartgradient = graphoptions.gradient;
  public verticalStackChartshowLegend = graphoptions.showLegend;
  public verticalStackChartshowXAxisLabel = graphoptions.showXAxisLabel;
  public verticalStackChartshowYAxisLabel = graphoptions.showYAxisLabel;

  public chart1 = graphoptions.chart1;
  public chart2 = graphoptions.chart2;
  public chart3 = graphoptions.chart3;
  public chart4 = graphoptions.chart4;
  public chart5 = graphoptions.chart5;
  public chart6 = graphoptions.chart6;

  public pieChart1 = graphoptions.pieChart1;
  public barChartSingle1 = graphoptions.barChartSingle1;
  public barChartSingle2 = graphoptions.barChartSingle2;
  public barChartSingle3 = graphoptions.barChartSingle3;
  onOptionsSelecteds(e){

  }
  onOptionsSelected(e){

  }

  getshapenamesdata(linename){
    this.httpClient.get<any>('http://122.166.167.113:8085/getlivedata/'+'CHANNEL-5').subscribe(
      response => {
        console.log(response);
        this.livedata = response;

      }
    );
  }

  getshapenamesline(){
    this.httpClient.get<any>('http://122.166.167.113:8085/linename').subscribe(
      response => {
        console.log(response);
        this.options = response;

      }
    );
  }

  public onSelect(e) {  }

  ngOnInit() {
    // setInterval(() => { this.getshapenamesline(); }, 1000);

   }


   changeProject(s){

    console.log('changeProject',s);
    this.getshapenamesdata(s)
    this.getshapenameslinedata(s)
   }

}
