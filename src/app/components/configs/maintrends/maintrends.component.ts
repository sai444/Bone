import { Component, OnInit } from '@angular/core';
import {  ViewChild } from "@angular/core";

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

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-maintrends',
  templateUrl: './maintrends.component.html',
  styleUrls: ['./maintrends.component.scss']
})
export class MaintrendsComponent implements OnInit {
  name = 'Angular';
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  options1: string[] = ["CHANNEL-5"];
  options: string[] = [ "SGB CH5","SPC (IR) CH5", "SPC (OR) CH5"];

  test = [new Date(), new Date()];
  categories = [
    {id: 1, name: 'W/H Spindle Pressure'},
    {id: 2, name: 'Gr.Spindle Pressure'},
    {id: 3, name: '40-Bar Pressure'},
    {id: 5, name: '40-Bar Inlet Pressure'},
    {id: 6, name: '70-Bar Inlet Pressure'}

  ];

  selected = [
    {id: 5, name: '40-Bar Inlet Pressure'},
    {id: 6, name: '70-Bar Inlet Pressure'}
  ];
  selectedQuantity = 'CHANNEL-5'
  onOptionsSelected(value){
    console.log("the selected value is " + this.selectedQuantity);

  }
  selectedQuantitys = 'SGB CH5'
  onOptionsSelecteds(value){
    console.log("the selected value is " + this.selectedQuantitys);

  }
  getSelectedValue(){
    console.log(this.selected);
  }
  model;
  mode11;
  userName;
  formdata;
  selectedDate;
  ngOnInit() {
     this.formdata = new FormGroup({
        userName: new FormControl("Tutorialspoint")
     });
  }

  onClickSubmit(data) {



    this.userName = data.userName;}


    constructor() {


    }





  }


