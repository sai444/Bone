import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder } from '@angular/forms';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
export class emp {
  constructor(
    public address : string,
    public id: number,
    public location: string,
    public lat: string,
    public long: string,
    public pincode: string,


  ) {
  }

}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
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
      lat: [''],
      location : [''],
      long : [''],
      name : [''],
      pincode : ['']

    } );
  }

  getFriends(){
    this.httpClient.get<any>('http://122.166.167.113:8085/company').subscribe(
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
      location : friend.location,
      name: friend.name,
      pincode: friend.pincode,
      address: friend.address,
      lat: friend.lat,
      long: friend.long,

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
    const editURL = 'http://122.166.167.113:8085/company/' + this.editForm.value.id
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
    document.getElementById('pincode').setAttribute('value', Emps.pincode);
    document.getElementById('address').setAttribute('value', Emps.address);
    document.getElementById('lat').setAttribute('value', Emps.lat);
    document.getElementById('long').setAttribute('value', Emps.long);
    document.getElementById('location').setAttribute('value', Emps.location);



 }

  onSubmit(f: NgForm) {

    console.log( 'f',f);

    const url = 'http://122.166.167.113:8085/company';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  onDelete() {
    const deleteURL = 'http://122.166.167.113:8085/company/' + this.deleteId ;
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}
