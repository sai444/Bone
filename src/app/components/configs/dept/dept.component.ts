import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder } from '@angular/forms';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
export class emp {
  constructor(
    public created_on : string,
    public id: number,
    public des: string,
    public name: string,


  ) {
  }

}
@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {

  Emps : emp[] ;
  closeResult : String;

  constructor(public httpClient:HttpClient  ,private modalService: NgbModal ,public fb :FormBuilder) { }
  editForm : FormGroup;
  public deleteId : number;
  ngOnInit(): void {

    this.getFriends();
    this.editForm = this.fb.group({
      id: [''],
      des: [''],
      name: [''],
      created_on : ['']

    } );
  }

  getFriends(){
    this.httpClient.get<any>('http://122.166.167.113:8085/dept').subscribe(
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
      created_on : friend.created_on,
      name: friend.name,
      des: friend.des,

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
    const editURL = 'http://122.166.167.113:8085/dept/' + this.editForm.value.id
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
    document.getElementById('name').setAttribute('value', Emps.name);
    document.getElementById('des').setAttribute('value', Emps.des);
    document.getElementById('des').setAttribute('value', Emps.created_on);



 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);

    const url = 'http://122.166.167.113:8085/dept';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  onDelete() {
    const deleteURL = 'http://122.166.167.113:8085/dept/' + this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}
