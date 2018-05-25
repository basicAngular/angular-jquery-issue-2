import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm, FormGroup, FormBuilder, Validator} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  today: number = Date.now();
  public responces;
  public ErrorMessage;
  private errorMsg;
  Validating = false;
  constructor( private userServices: UserService, private router: Router) { }
  onSubmit(form: NgForm) {
      this.userServices.adminLogin(form.value)
        .subscribe(
            res => {
              console.log(res);
              localStorage.setItem('UserData', JSON.stringify(res));
                this.router.navigate(['dashboard']);
              // this.router.navigate(['dashboard'])
                return false;
            },
            err => {
                console.log(err);
                this.ErrorMessage = 'Your Email Or Password is Incorrect';
            }
        );
  }
  ngOnInit() {

  }

}
