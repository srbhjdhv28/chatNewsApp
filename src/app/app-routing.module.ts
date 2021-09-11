import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

const routes: Routes = [
    { path:'',component: LoginPageComponent, pathMatch:'full'},
    { path:'signUp', component: SignUpPageComponent, children: [
        { path:':id/:edit', component: SignUpPageComponent}
    ]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
