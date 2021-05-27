import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder } from '@angular/forms';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
export class emp {
  constructor(
    public id: number,
    public address: string,
    public dept: string,
    public emailid: string,
    public empname: string,
    public empnid: string,
    public empnuid: string,
    public groups: string,
    public password: string,
    public role: string,

  ) {
  }

}
@Component({
  selector: 'app-thingshape',
  templateUrl: './thingshape.component.html',
  styleUrls: ['./thingshape.component.scss']
})
export class ThingshapeComponent implements OnInit {

  term: string;
  Emps : emp[] ;
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
  ngOnInit(): void {

    this.getFriends();
    this.editForm = this.fb.group({
      id: [''],
      empname: [''],
      lastname: [''],
      empnuid: [''],
      emailid: [''],
      empnid: [''],
      password: [''],
      group : [''],
      dept : [''],
      role : [''],
      address : [''],
    } );
  }

  getFriends(){
    this.httpClient.get<any>('http://122.166.167.113:5300/emp').subscribe(
      response => {
        console.log(response);
        this.Emps = response;
      }
    );
  }


  openEdit(targetModal, friend) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });

    console.log('targetModal',friend)
    this.editForm.patchValue( {
      id: friend.id,
      empname: friend.empname,
      empnuid: friend.empnuid,
      empnid: friend.empnid,
      emailid: friend.emailid,
      password: friend.password
    });
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
    const editURL = 'http://localhost:8888/friends/' + this.editForm.value.id + '/edit';
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
   document.getElementById('id').setAttribute('value', Emps.id);
    document.getElementById('empname').setAttribute('value', Emps.empname);
    document.getElementById('empnid').setAttribute('value', Emps.empnid);
    document.getElementById('empnuid').setAttribute('value', Emps.empnuid);
    document.getElementById('emailid').setAttribute('value', Emps.emailid);
    document.getElementById('password').setAttribute('value', Emps.password);
    document.getElementById('dept').setAttribute('value', Emps.dept);
    document.getElementById('role').setAttribute('value', Emps.role);
    document.getElementById('group').setAttribute('value', Emps.group);
 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);

    const url = 'http://localhost:8888/friends/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  onDelete() {
    const deleteURL = 'http://localhost:8888/friends/' + this.deleteId + '/delete';
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}
