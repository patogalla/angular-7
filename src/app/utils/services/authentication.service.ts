
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CookNowHttpService} from './cn-http.service';

@Injectable()
export class AuthenticationService {
  constructor(private http: CookNowHttpService) {
  }
 
  login(username: string, password: string): Observable<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.apiBaseUrl}/api/public/user/login`, JSON.stringify({
        username: username,
        password: password
      }), options).pipe(
      map((response:any) => {
          const tokenResponse: string = response.token;
          localStorage.setItem('jwt', tokenResponse);
          return response;
        }, e => {
          throw new Error('Invalid username or password');
        }
      ));
  }

  loginWebsite(username: string, password: string): Observable<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.apiBaseUrl}/api/public/user/login`, JSON.stringify({
      userId: username,
      password: password
    }), options).pipe(
      map((response: any) => {
            const tokenResponse: string = response.token;
            localStorage.setItem('jwt', tokenResponse);
      }, e => {
          throw new Error('Invalid username or password');
      }));
  }

  loginWithGoogle(token:string): Observable<void>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.apiBaseUrl}/api/public/user/login/google`, JSON.stringify({
      token: token
    }), options).pipe(
      map((response: any) => {
            const tokenResponse: string = response.token;
            localStorage.setItem('jwt', tokenResponse);
      }, e => {
          throw new Error('Invalid user');
      }));
  }

  loginWithFB(token:string): Observable<void>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.apiBaseUrl}/api/public/user/login/google`, JSON.stringify({
      token: token
    }), options).pipe(
      map((response: any) => {
            const tokenResponse: string = response.token;
            localStorage.setItem('jwt', tokenResponse);
      }, e => {
          throw new Error('Invalid user');
      }));
  }
    

  /**
  Creates hash, send by mail, to then reset pass.
  PATCH /api/profile/password
  {
    "forgot": true,
    "email": "patogalla@gmail.com"
  }
  */
  forgotPassword(email: string, callbackUrl:string = '#/forgot/'): Observable<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.patchResponse(`${environment.apiBaseUrl}/api/profile/password`, JSON.stringify({
        forgot: true,
        email: email,
        callbackUrl: `${environment.webappUrl}` + callbackUrl
      }), options).pipe(
      map((response: Response) => {
        response.text();
      }, e => {
        throw new Error('Invalid username or password');
      }));
      
  }

  /**
  PUT /api/profile/password
    {
      "newPassword": "New1New1",
      "passwordResetId": "192e0169-ed1f-4419-a3bb-1ec09e530571"
    }
  */
  resetPassword(newPassword: string, passwordResetId: string): Observable<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.putResponse(`${environment.apiBaseUrl}/api/profile/password`, JSON.stringify({
      newPassword: newPassword,
      passwordResetId: passwordResetId
    }), options).pipe(
      map((response: any) => {
            response.text();
      }, e=>{
         throw new Error('Invalid username or password');
      }));
  }

  /**
  PATCH /api/profile
  {
    "passwordChange": {
      "oldPassword": "New1New1",
      "newPassword": "New2New2"
    }
  }
  */
  changePassword(oldPassword: string, newPassword: string): Observable<void> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.retail-ally.v1+json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    const options = new RequestOptions({headers: headers});

    return this.http.patchResponse(`${environment.apiBaseUrl}/api/profile`, JSON.stringify({
      passwordChange : {
        oldPassword : oldPassword,
        newPassword : newPassword
      }
    }), options).pipe(
      map((response: Response) => {
          response.text();
      }, e => {
        throw new Error('Invalid username or password');
      }));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('jwt') !== null;
  }

  logout() {
    localStorage.removeItem('jwt');
  }
}
