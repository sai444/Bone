import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { HttpClient } from '@angular/common/http';
// import { values } from 'd3';
import 'chartjs-plugin-labels';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-linemeta',
  templateUrl: './linemeta.component.html',
  styleUrls: ['./linemeta.component.scss']
})
export class LinemetaComponent implements OnInit {
  [x: string]: any;

  communication = true;
  closeResult: String;
  linedata;
  lineWisedata;
  // //////////////////////////

  public chartColorsNull: any[] = [
    {
      backgroundColor: ["#9e9e9e"]
    }];

  public pieChartDataNull = [100];
  public pieChartLabelsNull: Label[] = [['No Data']];
  // null option
  public pieChartOptionsNull: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    legend: {
      position: 'left'
    },
    plugins: {
      labels: {
        render: 'label',
        // arc: true,
        fontColor: '#FF6961',
        // position: 'outside'
      }
    }
  };
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
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors1: any[] = [
    {
      backgroundColor: ["#FF6961", "#FFFF33", "#07E34E", "#DE54EC", "#4661EE", "#008080"]
    }];


  // Pie
  public pieChartOptions2: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    legend: {
      position: 'left',
      // percentage:true,
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
  public pieChartLabels2: Label[] = [['Alert'], ['Adequate'], ['Reliable']];
  public pieChartData2: SingleDataSet = [];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [];

  constructor(private modalService: NgbModal, public httpClient: HttpClient, public router: Router) { }

  ngOnInit(): void {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getLinesData();
    this.getAlerts();
  }



  getLinesData() {
    this.httpClient.get<any>('http://122.166.167.113:8085/linealerts').subscribe(
      response => {
        console.log("linealerts", response);
        this.linedata = response;

      }
    );
  }
  machinelineAlerts;
  getAlerts() {
    this.httpClient.get<any>('http://122.166.167.113:8085/machinealertsopen').subscribe(
      response => {
        console.log("machinelineAlerts", response);
        this.machinelineAlerts = response;

      }
    );
  }
  checkLineWise(data) {
    this.pieChartData = [];
    this.pieChartData2 = [];
    this.httpClient.get<any>('http://122.166.167.113:8085/linealerts/' + data.line).subscribe(
      response => {
        console.log("linealerts", response);
        this.lineWisedata = response;
        if (this.lineWisedata) {
          this.pieChartData.push(this.lineWisedata[0].Health_Red, this.lineWisedata[0].Health_Yellow, this.lineWisedata[0].Health_Green)
          this.pieChartData2.push(this.lineWisedata[0].Vibration_Red, this.lineWisedata[0].Vibration_Yellow, this.lineWisedata[0].Vibration_Green)

        }
        console.log(" this.pieChartData", this.pieChartData, this.pieChartData2);

      }
    );
  }
  open(content, data?) {
    if (data) {
      this.checkLineWise(data);
      this.selectedLine = data.line;
      console.log("data", data, this.selectedLine)

    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  routeToLineDashboard(name) {
    let data = { channel: name }

    this.router.navigate(['/dashboard/metamech', data])
  }

}