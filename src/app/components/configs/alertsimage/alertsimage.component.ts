

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';


import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
export class emp {
  constructor(
    public id: number,
    public property: string,
    public alertname: string,
    public alertmsg: string,
    public alertval: string,
    public status: string,
    public severity: string,
    public created_on: string,


  ) {
  }

}
@Component({
  selector: 'app-alertsimage',
  templateUrl: './alertsimage.component.html',
  styleUrls: ['./alertsimage.component.scss'],
  // providers: [DatePipe]

})
export class AlertsimageComponent implements OnInit {
  pointSize = 7;
  activeTab="Active"
  element: Element;
  selectedQuantity;
  options : any = {};
  alertdata : any ={};
  term: string;
  Emps : emp[] ;
  root: Element;
  Shapename  : string;
  closeResult : String;
  ctx;
  canvas;
  userName;
  formdata;
  backgroundImgSrc: any;
  mapDivWidth=null;
  mapDivHeight=null;
  constructor(public httpClient: HttpClient, private modalService: NgbModal , public fb : FormBuilder) { }
  editForm : FormGroup;
  public deleteId : number;
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.activeTab="Active";

    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
  validationForm: FormGroup;
  imageid;
  // backgroundImage: any;
  ngOnInit(): void {

    this.getalertcount();
    this.backgroundImgSrc = './../../../../assets/images/skf/SGB SNIP.PNG';


    // this.getFriends();
    this.getshapedata();
    this.editForm = this.fb.group({
      id: [''],

      property: [''],
      alertname: [''],
      alertmsg: [''],
      alertval: [''],
      status: [''],
      severity: [''],
      created_on: [''],

    } );

    this.validationForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    })
    this.neweventstoday('Today',1)
  setInterval(() => {this.getPosition(250, 231, 200);},2000)
  }
  getshapenames(){
    this.httpClient.get<any>('http://122.166.167.113:8085/parttemplatename').subscribe(
      response => {
        console.log(response);
        this.options = response;
      }
    );

  }

  getshapedata(){
    this.httpClient.get<any>('http://122.166.167.113:8085/machinealerts').subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );
  }

  getFriends(){
    this.httpClient.get<any>('http://122.166.167.113:8085/parttemplate').subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );
  }


  getalertcount(){
    this.httpClient.get<any>('http://122.166.167.113:8085/alertcount').subscribe(
      response => {
        console.log(response);
        this.alertdata = response;
      }
    );
  }
  postshape(){

    const newdata = {
      "name": this.Shapename
    }
    const url = 'http://122.166.167.113:8085/parttemplatename';
    this.httpClient.post(url, newdata)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal

  }
  optionalert = ['True', 'False']

  openEdit(targetModal, items) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });

    console.log('targetModal', items)
    this.editForm.patchValue( {
      id: items.id,

      property: items.property,
  alertname: items.alertname,
  alertmsg: items.alertmsg,
  alertval: items.alertval,
  status: items.status,
  severity: items.severity,
  created_on: items.created_on,
    });
    if(items){
      const url = 'http://3.1.163.189:1900/uploads/';
      this.backgroundImgSrc = url+items.img;
      this.mapDivWidth = document.getElementById('canvas').clientWidth;
      this.mapDivHeight = document.getElementById('canvas').clientHeight;
      this.getPosition(items,items,200)
    }
  }
  changeProject(selectedQuantity){

    console.log('selectedQuantity', selectedQuantity);
    this.getshapedata()

  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openDelete(targetModal, friend) {
    this.deleteId = friend.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onSave() {
    const editURL = 'http://122.166.167.113:8085/machinealerts/' + this.editForm.value.id ;
    console.log(this.editForm.value);

    this.httpClient.put(editURL, this.editForm.value)

      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
  color = 'red'
  getPosition(dataX, dataY, color) {
    this.element = <Element> this.root;
    this.canvas = <HTMLCanvasElement> document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //curleft += event.offsetX;
    //curtop += event.offsetY;

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
    this.element = <Element> this.root;
    this.canvas = <HTMLCanvasElement> document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    //curleft += event.offsetX;
    //curtop += event.offsetY;
    //this.drawCoordinates(x, y);
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

  openDetails(targetModal, Emps) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
  //  document.getElementById('id').setAttribute('value', Emps.id);

    document.getElementById('property').setAttribute('value', Emps.property);
    document.getElementById('alertname').setAttribute('value', Emps.alertname);
    document.getElementById('alertmsg').setAttribute('value', Emps.alertmsg);
    document.getElementById('alertval').setAttribute('value', Emps.alertval);
    document.getElementById('status').setAttribute('value', Emps.status);
    document.getElementById('severity').setAttribute('value', Emps.severity);
    document.getElementById('created_on').setAttribute('value',Emps.created_on);

    // this.today = this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss');

 }

  onSubmit(f: NgForm) {

    console.log( 'f', f);

    const url = 'http://122.166.167.113:8085/parttemplate';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

newevent(Open?,card?){
  this.activeTab =Open;
  this.communication =card;
  console.log("data",this.communication)


  this.httpClient.get<any>('http://122.166.167.113:8085/machinealertsopen').subscribe(
    response => {
      console.log(response);
      this.Emps = response;
    }
  );
}
neweventActive(Active?,card?){
  this.activeTab =Active;
  this.communication =card;


}
newevents(Close?,card?){
  this.activeTab =Close;
  this.communication =card;

  this.httpClient.get<any>('http://122.166.167.113:8085/machinealertsclose').subscribe(
    response => {
      console.log(response);
      this.Emps = response;
    }
  );
}
communication;
neweventstoday(Today?,card ?){
  this.activeTab =Today;
  this.communication =card;
  console.log("data",this.communication)

  this.httpClient.get<any>('http://122.166.167.113:8085/machinealertstoday').subscribe(
    response => {
      console.log(response);
      this.Emps = response;
    }
  );
}
  onDelete() {
    const deleteURL = 'http://122.166.167.113:8085/parttemplate/' + this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}
