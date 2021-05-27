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
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {

  Emps : emp[] ;
  closeResult : String;

  constructor(public httpClient:HttpClient  ,private modalService: NgbModal ,public fb :FormBuilder) { }
  editForm : FormGroup;
  public deleteId : number;
  ngOnInit(): void {

    this.getFriends();
    this.editForm = this.fb.group({
      id: [''],
   address: [''],
   dept: [''],
   emailid: [''],
   empname: [''],
   empnid: [''],
   empnuid: [''],
   groups: [''],
   password: [''],
   role: [''],

    } );
  }

  getFriends(){
    this.httpClient.get<any>('http://122.166.167.113:8085/emp').subscribe(
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
      address: friend.address,
      dept: friend.dept,
      emailid: friend.emailid,
      empname: friend.empname,
      empnid: friend.empnid,
      empnuid: friend.empnuid,
      groups: friend.groups,
      password: friend.password,
      role: friend.role,

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
    const editURL = 'http://122.166.167.113:8085/emp/' + this.editForm.value.id
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
    document.getElementById('address').setAttribute('value', Emps.address);
    document.getElementById('dept').setAttribute('value', Emps.dept);
    document.getElementById('emailid').setAttribute('value', Emps.emailid);

    document.getElementById('empnid').setAttribute('value', Emps.empnid);
    document.getElementById('empnuid').setAttribute('value', Emps.empnuid);
    document.getElementById('empname').setAttribute('value', Emps.empname);
    document.getElementById('groups').setAttribute('value', Emps.groups);
    document.getElementById('id').setAttribute('value', Emps.id);
    document.getElementById('password').setAttribute('value', Emps.password);
    document.getElementById('role').setAttribute('value', Emps.role);



 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);

    const url = 'http://122.166.167.113:8085/emp';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  onDelete() {
    const deleteURL = 'http://122.166.167.113:8085/emp/' + this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}
