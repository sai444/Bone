import { Component, OnInit,ViewChild } from '@angular/core';

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
@Component({
  selector: 'app-treand4',
  templateUrl: './treand4.component.html',
  styleUrls: ['./treand4.component.scss']
})
export class Treand4Component implements OnInit {



  ngOnInit(): void {
  }

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions17: Partial<ChartOptions>;
  public chartOptions18: Partial<ChartOptions>;

  constructor() {
    this.chartOptions17 = {
      series: [
        {
          name: "series1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
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
      colors: ["#546E7A"],
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

    this.chartOptions18 = {
      series: [
        {
          name: "series1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 March 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
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
            min: new Date("19 March 2017").getTime(),
            max: new Date("14 May 2017").getTime()
          }
        }
      },
      colors: ["#008FFB"],
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

  public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}


