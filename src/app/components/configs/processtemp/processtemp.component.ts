import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UrlResolver } from '@angular/compiler';
export class emp {
  constructor(
    public id: number,
    public name: string,
    public alarm: string,
    public operator: string,
    public msg: string,
    public realtimeval: string,
    public thresholdvalue: string,

    public description: string,
    public property: string,

    public type: string,
    public units: string,
    public stage: string ,







  ) {
  }

}
@Component({
  selector: 'app-processtemp',
  templateUrl: './processtemp.component.html',
  styleUrls: ['./processtemp.component.scss']
})
export class ProcesstempComponent implements OnInit {


  selectedQuantity;
  options : any = {};
  term: string;
  Emps : any = {};
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

    this.shapelist();
    // this.getFriends();
    this.getshapedata();
    this.editForm = this.fb.group({
      id: [''],
      name: [''],
      alarm: [''],
      operator: [''],
      msg: [''],
      realtimeval: [''],
      thresholdvalue: [''],

      description: [''],
      property: [''],

      type: [''],
      units: [''],
      stage : ['']


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
    this.httpClient.get<any>('http://122.166.167.113:8085/machinename').subscribe(
      response => {
        console.log("shapes response",response);
        // this.shapes = response;
        response.forEach(element => {
          this.shapes.push(element.name);
      });
        console.log("final shapes response",this.shapes, typeof(this.shapes));
      }
    );
  }

  getshapenames(){
    this.httpClient.get<any>('http://122.166.167.113:8085/stagename').subscribe(
      response => {
        console.log(response);
        this.options = response;

      }
    );
  }

  getshapedata(){
    this.Emps = [];

    this.httpClient.get<any>('http://122.166.167.113:8085/processtemplateparams/'+ this.selectedQuantity).subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );

    this.httpClient.get<any>('http://122.166.167.113:8085/getstagedata/'+ this.selectedQuantity).subscribe(
      response => {
        console.log(response);
        this.Emps = this.Emps.concat(response);
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
    const url = 'http://122.166.167.113:8085/stagename';
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
     alarm: friend.alarm,
     operator: friend.operator,
     msg: friend.msg,
     realtimeval: friend.realtimeval,


     description: friend.description,
     property: friend.property,
     thresholdvalue: friend.thresholdvalue,
     type: friend.type,
     units: friend.units,
     stage : friend.stage

    });
  }
  changeProject(selectedQuantity){

    console.log('selectedQuantity',selectedQuantity);
    this.getshapedata();

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

    document.getElementById('msg').setAttribute('value', Emps.msg);
    document.getElementById('alarm').setAttribute('value', Emps.alarm);
    document.getElementById('operator').setAttribute('value', Emps.operator);
    document.getElementById('realtimeval').setAttribute('value', Emps.realtimeval);

    document.getElementById('templatename').setAttribute('value', Emps.templatename);


    document.getElementById('stage').setAttribute('value', Emps.stage);

    document.getElementById('description').setAttribute('value', Emps.description);
    document.getElementById('property').setAttribute('value', Emps.property);
    document.getElementById('thresholdvalue').setAttribute('value', Emps.thresholdvalue);
    document.getElementById('units').setAttribute('value', Emps.units);
    document.getElementById('type').setAttribute('value', Emps.type);
 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);
    const url = 'http://122.166.167.113:8085/stageparams';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal

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
    this.httpClient.get<any>('http://122.166.167.113:8085/processtemplateparams/'+ this.selectedQuantity).subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );
    for (var i= 0; i < this.selectedShapes.length; i++){

    const machine = this.selectedQuantity;
    var postdata = {
      "stagename": this.selectedQuantity,
      "machinename":this.selectedShapes[i]
    }

    this.shapedetails = [];


    const url1 = 'http://122.166.167.113:8085/stagemachine';
    this.httpClient.post(url1,postdata).subscribe(
      response => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$new response" ,response);
        console.log(response);
      //  this.shapedetails= response;
      //  this.shapedetails = this.shapedetails.concat(response);
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
