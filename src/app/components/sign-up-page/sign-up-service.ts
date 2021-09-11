// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// export interface AuthResponse {
//     idToken:string;
//     email:string;
//     refreshToken:string;
//     expiresIn:string;
//     localId:string;
//     registeredId?:string;
// }

// @Injectable({providedIn:'root'})
// export class SignUpService {

//     constructor(private http: HttpClient){}

//     signup(email:string,pwd:string){
//         return this.http.post<AuthResponse>(
//             'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtuKNh_fMpMGDmaqLEXYtYRgZan6IJmOo',
//             {
//                 email: email,
//                 passwprd:pwd,
//                 returnSecureToken: true
//             }
//         ).pipe(catchError(this.handleError));
//     }

//     private handleError(errorRes: HttpErrorResponse){
//         let errorMessage = 'testtt';
//         return errorMessage;
//     }
// }

