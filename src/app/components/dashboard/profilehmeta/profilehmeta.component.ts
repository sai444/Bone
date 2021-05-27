import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
// import { ChartOptions, ChartType } from 'ng-chartist';
import { Label, SingleDataSet } from 'ng2-charts';
import 'chartjs-plugin-labels';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profilehmeta',
  templateUrl: './profilehmeta.component.html',
  styleUrls: ['./profilehmeta.component.scss']
})
export class ProfilehmetaComponent implements OnInit {
  // //////////////////////////
  localVariable;
  plant = 'SKF BNG'
  datavariable = 'red';
  imageid;
  communication = true;
  machineList;
  name = 'Angular';
  pointSize = 7;
  color
  element: Element;
  // tslint:disable-next-line: member-ordering
  root: Element;
  ctx;
  profileForm: FormGroup;
  canvas;
  userName;
  backgroundImgSrc: any;

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
  public colors: [{
    backgroundColor: "red",
    hoverBackgroundColor: "#FF0",
    borderColor: "#0F0",
    hoverBorderColor: "#00F"
  },
    {
      backgroundColor: "yellow",
      hoverBackgroundColor: "#FF0",
      borderColor: "#0F0",
      hoverBorderColor: "#00F"
    },
    {
      backgroundColor: "green",
      hoverBackgroundColor: "#FF0",
      borderColor: "#0F0",
      hoverBorderColor: "#00F"
    },
  ];


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

  public chartColorsNull: any[] = [
    {
      backgroundColor: ["#9e9e9e"]
    }];
  public pieChartLabels2: Label[] = [['Alert'], ['Adequate'], ['Reliable']];
  public pieChartData2: SingleDataSet = [];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [];
  public pieChartDataNull = [100];
  public pieChartLabelsNull: Label[] = [['No Data']];
  public chartColors1: any[] = [
    {
      backgroundColor: ["#FF6961", "#FFFF33", "#07E34E", "#DE54EC", "#4661EE", "#008080"]
    }];
  /////////////////////////////
  parameterList =
    [{ name: 'Parameter 1' },
    { name: 'Parameter 2' }, { name: 'Parameter 3' }, { name: 'Parameter 4' }, { name: 'Parameter 5' }, { name: 'Parameter 6' }
    ]
  mapDivWidth = null;
  mapDivHeight = null;
  channelName;
  constructor(public route: ActivatedRoute, public httpClient: HttpClient, public router: Router, public formBuilder: FormBuilder) {
    this.localVariable = this.route.snapshot.paramMap.get("machine");
    this.channelName = this.route.snapshot.paramMap.get("channel");


  }

  ngOnInit(): void {
    this.imageid = './../../../../assets/images/skf/SGB SNIP.PNG';
    this.initFormGroup();
    this.getLines();

    this.getProfile();
    this.getparameterList();
  }
  initFormGroup() {
    this.profileForm = this.formBuilder.group({
      line: new FormControl(this.channelName ? this.channelName : ''),
      machine: new FormControl(this.localVariable ? this.localVariable : ''),
      plant: new FormControl(''),


    })
  }
  status = 'High';
  changeTableData(data, variable) {
    this.status = data
    this.datavariable = variable
    this.getparameterList()

  }
  machinename(name) {
    console.log("name ///////////////////////////////////////////", name)
    this.localVariable = name
    if (name) {
      this.machineList.forEach(element => {
        if (name == element.name) {
          const url = 'http://3.1.163.189:1900/uploads/';

          this.backgroundImgSrc = url + element.img;
          this.mapDivWidth = document.getElementById('canvas').clientWidth;
          this.mapDivHeight = document.getElementById('canvas').clientHeight;
        }

      });
    }
    this.getProfile();
    this.getparameterList();
  }
  LinesList;
  getLines() {

    this.httpClient.get<any>('http://122.166.167.113:8085/linename').subscribe(
      response => {
        console.log("LinesList", response);
        this.LinesList = response;
        if (this.LinesList) {
          this.getMachineList(this.LinesList[0].name)
        }

      }
    );
  }
  getMachineList(lineName) {
    this.httpClient.get<any>('http://122.166.167.113:8085/linemachinename/' + lineName).subscribe(
      response => {
        console.log("machineList", response);
        this.machineList = response;

      }
    );
  }
  profileData;
  getProfile() {
    this.pieChartData = [];
    this.pieChartData2 = [];

    this.httpClient.get<any>('http://122.166.167.113:8085/machinewisealerts/' + this.localVariable).subscribe(
      response => {
        console.log("profileData", response);
        this.profileData = response;
        if (this.profileData) {
          this.pieChartData = [];
          this.pieChartData2 = [];
          this.pieChartData.push(this.profileData[0].Health_High, this.profileData[0].Health_Low, this.profileData[0].Health_Total);
          this.pieChartData2.push(this.profileData[0].Vibration_High, this.profileData[0].Vibration_Low, this.profileData[0].Vibration_Total);
        }
      }
    );
  }

  getparameterList() {
    this.parameterList = [];
    this.httpClient.get<any>('http://122.166.167.113:8085/' + this.datavariable + '/' + this.localVariable).subscribe(
      response => {
        console.log("parameterList", response);
        this.parameterList = response;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.parameterList) {
          this.parameterList.forEach(item => {
            console.log("item,item", item)
            // if(item.x)
            this.getPosition(item, item, 200);

          })
        }
      }
    );
  }
  routeBack() {
    // let data = { machine: this.LinesList[0].name }
    this.router.navigate(['/dashboard/metaline'])
  }
  submitbtn() {
    this.getProfile();
    this.getparameterList();
  }


  getPosition(dataX, dataY, color) {
    this.element = <Element>this.root;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    // var img = document.getElementById("forest");
    // curleft += event.offsetX;
    // curtop += event.offsetY;
    this.drawCoordinates(dataX.x, dataY.y, color);
    this.color = color
  }


  drawCoordinates(x, y, color) {
    //alert(x + "   " + y);

    const grd = this.ctx.createLinearGradient(0, 0, color, 0);
    grd.addColorStop(0, "red");
    // grd.addColorStop(1, "red");
    this.ctx.fillStyle = grd; // Red color

    this.ctx.beginPath();
    this.ctx.arc(Number(x), Number(y), this.pointSize, 0, Math.PI * 2, true);
    this.ctx.fill();

    //const coord = "x=" + x + ", y=" + y;
    //const p = this.ctx.getImageData(x, y, 1, 1).data;
    //const hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
    //console.log(hex);
  }

  rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255) {
      // tslint:disable-next-line: no-string-throw
      throw 'Invalid color component';
    }
    return ((r << 16) | (g << 8) | b).toString(16);
  }

  getPosition1(s) {
    this.element = <Element>this.root;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    //curleft += event.offsetX;
    //curtop += event.offsetY;
    //this.drawCoordinates(x, y);
  }

}
