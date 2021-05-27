import { Component, Input, SimpleChanges, OnChanges, OnInit } from "@angular/core";
import * as Highcharts from 'highcharts';
import { Options } from "highcharts";
@Component({
  selector: 'app-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.scss']
})
export class SparkLineComponent implements OnInit {
  charttype;
  ngOnInit(): void {
    this.charttype = localStorage.getItem('charttype');
  }

  Highcharts: typeof Highcharts = Highcharts;
  @Input() data: Array<number>;
  @Input() name: string;



  @Input() text: string;
  updateFlag = false;
  chartOptions: Options = {
    chart: {
      type: 'line',
      margin: [1, 1, 1, 1],
      width: 300,
      height: 300,
    },
    title: {
      text: '',
      align: 'center',
     // y: 340 //  this to move y-coordinate of title to desired location
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.9f}</b><br/>',
    valueSuffix: ' cm',
    shared: true
},
    series: [
      {
        name: '',
        type: 'area',
        data: []
      }
    ]
  };

  ngOnChanges(change: SimpleChanges) {
      this.chartOptions.series = [{
        name: change.name ? change.name.currentValue : null,
        type: 'area',
        data: change.data.currentValue,

      }];

this.chartOptions.title = {

  text:  change.text ? change.text.currentValue : null,
  align: 'center'
};

      this.updateFlag = true;
    }
  }


