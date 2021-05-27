import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
export class emp {
  constructor(
    public id: number,
    public propery: string,
    public type: string,
    public units: string,
    public templatename: string,
    public description: string,


  ) {
  }

}


@Component({
  selector: 'app-thingshape',
  templateUrl: './thingshape.component.html',
  styleUrls: ['./thingshape.component.scss']
})
export class ThingshapeComponent implements OnInit {
  selectedQuantity;
  options : any = {};
  term: string;
  Emps : emp[] ;
  Shapename  :string;
  closeResult : String;

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

    // this.getFriends();
    this.getshapedata();
    this.editForm = this.fb.group({
      id: [''],
      templatename: [''],

      property: [''],
      description: [''],
      units: [''],
      type: [''],


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
  getshapenames(){
    this.httpClient.get<any>('http://122.166.167.113:8085/parttemplatename').subscribe(
      response => {
        console.log(response);
        this.options = response;
      }
    );
  }

  getshapedata(){
    this.httpClient.get<any>('http://122.166.167.113:8085/getparttemplate/'+ this.selectedQuantity).subscribe(
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

  openEdit(targetModal, friend) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });

    console.log('targetModal',friend)
    this.editForm.patchValue( {
      id: friend.id,

      templatename: friend.templatename,
      property: friend.property,
      description: friend.description,
      units: friend.units,
      type: friend.type
    });
  }
  changeProject(selectedQuantity){

    console.log('selectedQuantity',selectedQuantity);
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
    const editURL = 'http://122.166.167.113:8085/parttemplate/' + this.editForm.value.id ;
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
    document.getElementById('templatename').setAttribute('value', Emps.templatename);
    document.getElementById('description').setAttribute('value', Emps.description);
    document.getElementById('property').setAttribute('value', Emps.property);
    document.getElementById('units').setAttribute('value', Emps.units);

    document.getElementById('type').setAttribute('value', Emps.type);


 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);

    const url = 'http://122.166.167.113:8085/parttemplate';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
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
