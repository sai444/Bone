import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as D3 from 'd3';

@Component({
  selector: 'app-alertsimgconfig',
  templateUrl: './alertsimgconfig.component.html',
  styleUrls: ['./alertsimgconfig.component.scss']
})
export class AlertsimgconfigComponent implements OnInit {
  selectedFile;
  imagename;
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public http: HttpClient) {

    this.createContactForm();
  }


  imageid;
  // tslint:disable-next-line: member-ordering
  name = 'Angular';
  pointSize = 7;
  element: Element;
  // tslint:disable-next-line: member-ordering
  root: Element;
  ctx;
  
  canvas;
  userName;
  formdata;
  xCordinate: number = 0;
  yCordinate: number = 0;
  maps;
  mapWidth = null;
  mapHeight = null;
  xOffset = null;
  yOffset = null;
  mapDivWidth = null;
  mapDivHeight = null;
  xRatio = null;
  yRatio = null;
  fileformData1: any = new FormData();
  ngOnInit() {
    this.getLines();
    // this.getshapenames()
    this.imageid = './../../../../assets/images/skf/SGB SNIP.PNG';
    this.formdata = new FormGroup({
      alarmmsg: new FormControl(""),
      alarmvalue: new FormControl(""),
      alarmproperty: new FormControl(""),
      alarmopp: new FormControl(""),
      image: new FormControl(""),
      machine: new FormControl(""),
      X: new FormControl(""),
      Y: new FormControl(""),
      z: new FormControl(""),




    });
    // this.getPosition(235, 270, 70);
    // this.getPosition(285, 270, 170);
    // this.getPosition(285, 200, 172);

  }
  LinesList;
  getLines() {

    this.http.get<any>('http://122.166.167.113:8085/linename').subscribe(
      response => {
        console.log("LinesList", response);
        this.LinesList = response;

      }
    );
  }
  machineList;
  getMachineList(lineName) {
    this.http.get<any>('http://122.166.167.113:8085/linemachinename/' + lineName).subscribe(
      response => {
        console.log("machineList", response);
        this.machineList = response;

      }
    );
  }
  imgsrc;
  backgroundImgSrc:any;
  properties;
  getProperties(machineName) {
    console.log("machineName", machineName)

    this.properties = [];
    this.http.get<any>('http://122.166.167.113:8085/machineprops/' + machineName).subscribe(
      response => {
        console.log("properties", response);
        this.properties = response;

      }
    );
    this.machineList.forEach((element,i) => {
      if(element.name == machineName){
        const url = 'http://3.1.163.189:1900/uploads/';
        this.backgroundImgSrc = url+element.img;
        this.mapDivWidth = document.getElementById('canvas').clientWidth;
        this.mapDivHeight = document.getElementById('canvas').clientHeight;
        // this.mapWidth = 1;
        // this.mapHeight =1;
        // this.xRatio = this.mapDivWidth/this.mapWidth;
        // this.yRatio = this.mapDivHeight/this.mapHeight;
        // this.xOffset = 0.5 *this.mapDivWidth;
        // this.yOffset = this.mapDivHeight *  0.5;
        // console.log("ratios",this.xRatio,this.yRatio,this.xOffset,this.yOffset);
        // this.canvas = D3.select(".paths");
        // this.imageid = url+element.img;
      }
    });
  }
  markpoints(){
    this.getPosition(this.contactForm.value.x, this.contactForm.value.y, 200);

  }
  onSubmit() {
    // this.imagename = this.imagename.replaceAll(' ', '_')
    // this.contactForm.value.image = this.imagename;
let payload=
{
  'x':this.contactForm.value.x,
  'y':this.contactForm.value.y,
  'propertyid':this.contactForm.value.property,

}
    console.log('Your form data : ', payload);
    const url = 'http://122.166.167.113:8085/propertypoints';
    this.http.post(url, payload)
      .subscribe((result) => {
        console.log("log", result)
        this.contactForm.reset();
      });

    this.getPosition(this.contactForm.value.x, this.contactForm.value.y, 200);


  }
  saveparameters(form){
    console.log('form',form)

  }
  // machinenames;
  // getshapenames(){


  //   this.http.get<any>('http://122.166.167.113:8085/machinename').subscribe(
  //     response => {
  //       console.log(response);
  //       this.machinenames = response;
  //     }
  //   );
  // }
  color;

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      line: '',
      machine: '',
      property: '',
      x: '',
      y: '',
      image: '',
      description: '',
    });
  }
  getPosition(x, y, color) {
     this.element = <Element>this.root;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    //curleft += event.offsetX;
    //curtop += event.offsetY;
    this.drawCoordinates(x, y, color);
    // this.color = color
  }


  drawCoordinates(x, y, color) {
    //alert(x + "   " + y);
    // this.canvas.append("arc")
    // this.ctx.clearRect();

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

  getPosition1(_s) {
    this.element = <Element>this.root;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    //curleft += event.offsetX;
    //curtop += event.offsetY;
    //this.drawCoordinates(x, y);
  }


  onClickreset() {

    this.contactForm = this.formBuilder.group({
      line: [''],
      machine: [''],
      property: [''],
      x: [''],
      y: [''],
      image: [''],
      description: [''],
    });



  }

  onFileChanged(event) {
    this.fileformData1 = new FormData();
    this.selectedFile = event.target.files[0];
    this.fileformData1.append("file", this.selectedFile);
    console.log("form data", (this.selectedFile['name']));
    this.imagename = this.selectedFile['name'];
    console.log("formmmm", this.fileformData1);
    this.http.post('http://3.1.163.189:1900', this.fileformData1).subscribe(
      (response) => console.log("file",response),
      (error) => console.log("error",error)
    );
    // this.imageid = './../../../../assets/images/skf/' + this.imagename;

  }

}
