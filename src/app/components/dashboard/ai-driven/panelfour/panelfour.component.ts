import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations
} from "ng-apexcharts";
import {

  ApexMarkers,
  ApexYAxis,

  ApexLegend
} from "ng-apexcharts";
import { series } from "./data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


export type chartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-panelfour',
  templateUrl: './panelfour.component.html',
  styleUrls: ['./panelfour.component.scss']
})
export class PanelfourComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public chartOptions1: Partial<chartOptions1>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "series",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      annotations: {
        yaxis: [
          {
            y: 8200,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396"
              },
              text: "Support"
            }
          },
          {
            y: 8600,
            y2: 9000,
            borderColor: "#000",
            fillColor: "#FEB019",
            opacity: 0.2,
            label: {
              borderColor: "#333",
              style: {
                fontSize: "10px",
                color: "#333",
                background: "#FEB019"
              },
              text: "Y-axis range"
            }
          }
        ],
        xaxis: [
          {
            x: new Date("23 Nov 2017").getTime(),
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "Anno Test"
            }
          },
          {
            x: new Date("26 Nov 2017").getTime(),
            x2: new Date("28 Nov 2017").getTime(),
            fillColor: "#B3F7CA",
            opacity: 0.4,
            label: {
              borderColor: "#B3F7CA",
              style: {
                fontSize: "10px",
                color: "#fff",
                background: "#00E396"
              },
              offsetY: -10,
              text: "X-axis range"
            }
          }
        ],
        points: [
          {
            x: new Date("01 Dec 2017").getTime(),
            y: 8607.55,
            marker: {
              size: 8,
              fillColor: "#fff",
              strokeColor: "red",
              radius: 2,
              cssClass: "apexcharts-custom-class"
            },
            label: {
              borderColor: "#FF4560",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#FF4560"
              },

              text: "Point Annotation"
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },
      title: {
        text: "Line with Annotations",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
