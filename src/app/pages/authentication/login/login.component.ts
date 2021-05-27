import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
declare const $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  ress :any = {};
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private http: HttpClient
  ) {}
  url = 'http://122.166.167.113:8085/login'
  ngOnInit() {
    localStorage.setItem('mainurl', 'http://122.166.167.113:8085/');
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    //    [Focus input] * /
    $('.input100').each(function() {
      $(this).on('blur', function() {
        if (
          $(this)
            .val()
            .trim() != ''
        ) {
          $(this).addClass('has-val');
        } else {
          $(this).removeClass('has-val');
        }
      });
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  showErrorAlert() {
    Swal.fire('Yikes!', 'username or password  went wrong!', 'error')
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {


      return;
    } else {



        this.http.post(this.url, this.loginForm.value).subscribe(
          res => {
            console.log(res);
            this.ress = res
            localStorage.setItem('username', this.ress.username);
            localStorage.setItem('userid', this.ress.id);
            localStorage.setItem('usertoken', this.ress.token);
            localStorage.setItem('userrole', this.ress.role);
            localStorage.setItem('mainurl', 'http://122.166.167.113:8085/');

            console.log('userrole', this.ress.role);
            // tslint:disable-next-line: triple-equals
            if (this.ress.role == 'Admin' ||  this.ress.role == 'admin' ){
              this.router.navigate(['/dashboard/plantline']);


              }
              else if (this.ress.role == 'Supervisor'){
                this.router.navigate(['/dashboard/plantline']);

              }else{
                this.router.navigate(['/dashboard/plantline']);

              }
          },
          (err: HttpErrorResponse) => {
            console.log(err.error);
            this.showErrorAlert();
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
          }
        );


    }
  }

}
