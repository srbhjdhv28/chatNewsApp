import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignUp } from './sign-up-model';
import { ConfirmedValidator } from './../../app.validators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
    signUpForm: FormGroup;

  constructor(private fb:FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
        'firstName' : new FormControl('',Validators.required),
        'lastName' : new FormControl('',Validators.required),
        'email' : new FormControl('', [Validators.required, Validators.email]),
        'otpNum': new FormControl('',Validators.required),
        'password' : new FormControl('', Validators.required),
        'confirmPassword' : new FormControl('', [Validators.required])
    },{
        validator: ConfirmedValidator('password','confirmPassword')
    });
  }

  get f(){
      return this.signUpForm.controls;
  }

  onSubmit() {
    if(this.signUpForm.valid){
        let registrationData: SignUp = new SignUp(this.signUpForm.value.firstName,this.signUpForm.value.lastName,this.signUpForm.value.email,this.signUpForm.value.otpNum,this.signUpForm.value.password,this.signUpForm.value.confirmPassword);
        console.log(registrationData);
    }else{
        return;
    }
  }

}
