import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginHandler(form: NgForm) {
      if(form.valid){
        
       let loginData: Login = new Login(form.value.userName,form.value.password);
       console.log(loginData);
      }else{
          return;
      }
    
  }

  signUpPage(){
      this.router.navigate(['/signUp','1','edit'],{queryParams:{'allowEdit':'edit'}, fragment:'loading'});

  }

}
