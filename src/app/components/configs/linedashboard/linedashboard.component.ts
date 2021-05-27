import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UrlResolver } from '@angular/compiler';
export class emp {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public realtimeval: string,
    public msg: string,
    public alarm: string,
    public operator: string,
    public thresholdvalue: string,
    public property: string,
    public units: string,
    public description: string,
    public linename: string,



  ) {
  }

}
@Component({
  selector: 'app-linedashboard',
  templateUrl: './linedashboard.component.html',
  styleUrls: ['./linedashboard.component.scss']
})
export class LinedashboardComponent implements OnInit {


  selectedQuantity;
  selectedMachine;
  selectedStage;
  options : any = {};
  term: string;
  Emps : any = {};
  props : any = {};
  machines : any = {};
  stages : any = {};
  list = [];
  Shapename  :string;
  closeResult : String;
  shapes = [];
  selectedShapes = [];
  shapedetails = [];
  constructor(public httpClient:HttpClient  ,private modalService: NgbModal ,public fb :FormBuilder) { }
  editForm : FormGroup;
  public deleteId : number;
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
  validationForm: FormGroup;
  ngOnInit(): void {
    this.getstages();
    this.getmachines();
    this.shapelist();
    // this.getFriends();
    this.getshapedata();
    this.getprocessdata();
    this.editForm = this.fb.group({
      id:[''],
      name: [''],
      type: [''],
      realtimeval: [''],
      msg: [''],
      alarm: [''],
      operator: [''],
      thresholdvalue: [''],
      property: [''],
      units: [''],
      description: [''],
      linename  : [''],
    } );

    this.validationForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    })
    this.getshapenames();
  }

  shapelist(){
    this.httpClient.get<any>('http://122.166.167.113:8085/stageshapename').subscribe(
      response => {
        console.log("shapes response",response);
        // this.shapes = response;
        response.forEach(element => {
          this.shapes.push(element.shapename);
      });
        console.log("final shapes response",this.shapes, typeof(this.shapes));
      }
    );
  }

  getshapenames(){
    this.httpClient.get<any>('http://122.166.167.113:8085/linename').subscribe(
      response => {
        console.log(response);
        this.options = response;

      }
    );
  }

  getprocessdata(){

      this.props = [];

      this.httpClient.get<any>('http://122.166.167.113:8085/linenew/'+ this.selectedQuantity).subscribe(
        response => {
          console.log(response);
          this.props = response;
        }
      );
  }

  getshapedata(){
    this.Emps = [];

    this.httpClient.get<any>('http://122.166.167.113:8085/linedetails/'+ this.selectedQuantity).subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );

    this.httpClient.get<any>('http://122.166.167.113:8085/lines/'+ this.selectedQuantity).subscribe(
      response => {
        console.log(response);
        this.Emps = this.Emps.concat(response);
      }
    );

  }

  getmachines()
{
  this.httpClient.get<any>('http://122.166.167.113:8085/lines').subscribe(
      response => {
        console.log(response);
        this.machines = response;
      }
    );
}

getstages()
{
  this.httpClient.get<any>('http://122.166.167.113:8085/stagename').subscribe(
      response => {
        console.log(response);
        this.stages = response;
      }
    );
}

  getFriends(){
    this.httpClient.get<any>('http://122.166.167.113:8085/thingshape').subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );
  }
  postshape(){

    const newdata = {
      "name": this.Shapename
    }
    const url = 'http://122.166.167.113:8085/linename';
    this.httpClient.post(url, newdata)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal

  }

  openEdit(targetModal, friend) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });

    console.log('targetModal',friend)
    this.editForm.patchValue( {
      id: friend.id,
      name: friend.name,
      alertname: friend.alertname,
      shape: friend.shape,
      alertmsg: friend.alertmsg,
      des: friend.des,
      type: friend.type,
      templatename: friend.templatename,
      linename : friend.linename,
    });
  }
  changeProject(selectedQuantity){

    console.log('selectedQuantity',selectedQuantity);
    this.getshapedata();
    this.getprocessdata();

  }
  changeMachine(selectedQuantity){

    console.log('selectedQuantity',selectedQuantity);
    this.getmachines();

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
    const editURL = 'http://122.166.167.113:8085/thingshape/' + this.editForm.value.id ;
    console.log(this.editForm.value);
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
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

  openDetails(targetModal, Emps) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
  //  document.getElementById('id').setAttribute('value', Emps.id);
    document.getElementById('name').setAttribute('value', Emps.name);

    document.getElementById('type').setAttribute('value', Emps.type);
    document.getElementById('msg').setAttribute('value', Emps.msg);
    document.getElementById('realtimeval').setAttribute('value', Emps.realtimeval);
    document.getElementById('alarm').setAttribute('value', Emps.alarm);
    document.getElementById('operator').setAttribute('value', Emps.operator);
    document.getElementById('thresholdvalue').setAttribute('value', Emps.thresholdvalue);
    document.getElementById('property').setAttribute('value', Emps.property);
    document.getElementById('units').setAttribute('value', Emps.units);
    document.getElementById('linedetails').setAttribute('value', Emps.linedetails);

    document.getElementById('description').setAttribute('value', Emps.description);

 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);
    const url = 'http://122.166.167.113:8085/lineparamsdata';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal

  }

  onSubmitval(f: NgForm) {

    console.log( '*************************************',f.value);

    const url = 'http://122.166.167.113:8085/lines';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
    this.getprocessdata();
  }

  onDelete() {
    const deleteURL = 'http://122.166.167.113:8085/processtemplate/' + this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


  Movies = this.shapes;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.shapes, event.previousIndex, event.currentIndex);
  }

  shapesSubmit(){

    console.log("selected shapes", this.selectedShapes, typeof(this.selectedShapes));
    this.selectedShapes = this.selectedShapes.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
  });
    console.log("selected shapes", this.selectedShapes, typeof(this.selectedShapes));
    // this.getshapedata();
    this.Emps = [];
    this.httpClient.get<any>('http://122.166.167.113:8085/lineparams/'+ this.selectedQuantity).subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );
    for (var i= 0; i < this.selectedShapes.length; i++){

    const machine = this.selectedQuantity;
    var postdata = {
      "processtemplatename": this.selectedQuantity,
      "stageshapename":this.selectedShapes[i]
    }

    this.shapedetails = [];


    const url1 = 'http://122.166.167.113:8085/assignedstagetemplate';
    this.httpClient.post(url1,postdata).subscribe(
      response => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$new response" ,response);
        console.log(response);
        this.Emps = this.Emps.concat(response);
        console.log("shape details", this.shapedetails);
      }
    );
      }
      }
       arr_diff (a1, a2) {

        var a = [], diff = [];

        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }

        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }

        for (var k in a) {
            diff.push(k);
        }

        return diff;
    }

  MoviesList = this.shapes;


  MoviesWatched = this.list;

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("the final list", this.MoviesWatched);
      this.selectedShapes = this.MoviesWatched;
      // console.log('event.container.data, event.previousIndex, event.currentIndex',event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.selectedShapes = this.MoviesWatched;
        // console.log('event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex',event.previousContainer.data,
        // event.container.data,
        // event.previousIndex,
        // event.currentIndex);
      console.log("the final list", this.MoviesWatched)
    }
  }



}

