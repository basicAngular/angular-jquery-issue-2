import { Component, OnInit } from '@angular/core';
import { NgForm,
         FormGroup,
         FormBuilder,
         Validators,
         FormControl  }   from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  today: number = Date.now();
  forgotPasswordForm: FormGroup;
  constructor(
  		private http: HttpClient, 
  		 private formBuilder: FormBuilder
  	) {

  	this.forgotPasswordForm = this.formBuilder.group({
        email: [null, [Validators.required,Validators.email]],
      });
  	}

  ngOnInit() {
  }

   	onSubmit(value: any){
      console.log(value);
      console.log(this.forgotPasswordForm.invalid);
      if (this.forgotPasswordForm.invalid) {
      	Object.keys(this.forgotPasswordForm.controls).forEach((formControl: any) => {
            this.forgotPasswordForm.controls[formControl].markAsDirty()
        })
      } else {

      }
    }  	
}
