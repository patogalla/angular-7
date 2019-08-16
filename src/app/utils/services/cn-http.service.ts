
import {throwError as observableThrowError, Observable, ObservableInput} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class PatogallaHttpService {

  constructor(private spinnerService: Ng4LoadingSpinnerService, private http: Http) {
  }


  get<T>(url: string, options: RequestOptions): Observable<T> {
    this.spinnerService.show();
    let response = this.http.get(url, options).pipe(
      map(this.handleResponseJson, this),
      catchError(error => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    );
    return response;
  }


  post<T>(url:string, content:any, options: RequestOptions): Observable<T> {
    this.spinnerService.show();
    let response = this.http.post(url, content, options).pipe(
      map(this.handleResponseJson, this),
      catchError(error => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    );
    return response;
  }

  patch<T>(url:string, content:any, options: RequestOptions): Observable<T> {

    this.spinnerService.show();
    let response = this.http.patch(url, content, options).pipe(
      map(this.handleResponseJson, this),
      catchError((error: HttpErrorResponse) => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    );
    return response;
  }

  put<T>(url:string, content:any, options: RequestOptions): Observable<T> {

    this.spinnerService.show();
    let response = this.http.put(url, content, options).pipe(
      map(this.handleResponseJson, this),
      catchError(error => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    );
    return response;
  }

  delete<T>(url:string, options: RequestOptions): Observable<T> {

    this.spinnerService.show();
    let response = this.http.delete(url, options).pipe(
      map(this.handleResponseJson, this),
      catchError(error => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    ); 
    return response;
  }

  patchResponse(url:string, content:any, options: RequestOptions): Observable<Response> {
    this.spinnerService.show();
    return this.http.patch(url, content, options).pipe(
      map(this.handleResponse, this),
      catchError(error => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    );
  }

  putResponse(url:string, content:any, options: RequestOptions): Observable<Response> {
    this.spinnerService.show();
    let response = this.http.put(url, content, options).pipe(
      map(this.handleResponse, this),
      catchError(error => {
        console.log('Error', error);
        this.spinnerService.hide();
        return observableThrowError(error)
      })
    ); 
    return response;
  }

  getWithAuth<T>(url: string, params:URLSearchParams = new URLSearchParams()): Observable<T> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.retail-ally.v1+json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    const options = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.get(url, options);
  }


  getHtml(url: string): Observable<Response> {
    return this.http.get(url);
  }

  postWithAuth<T>(url: string, content: any): Observable<T> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.retail-ally.v1+json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    const options = new RequestOptions({headers: headers});
    return this.post(url, content, options);
  }

  putWithAuth<T>(url: string, content: any): Observable<T> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.retail-ally.v1+json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    const options = new RequestOptions({headers: headers});
    return this.put(url, content, options);
  }

  patchWithAuth<T>(url: string, content: any): Observable<T> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.retail-ally.v1+json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    const options = new RequestOptions({headers: headers});
    return this.patch(url, content, options);
  }

  deleteWithAuth<T>(url: string): Observable<T> {
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.retail-ally.v1+json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    const options = new RequestOptions({headers: headers});
    return this.delete(url, options);
  }

  handleError(err: any, caught:Observable<any>):ObservableInput<{}> {
    console.log('error', err);
    this.spinnerService.hide();
    return observableThrowError("Error http : " + err);
  }

  handleResponse(response: Response) {
    switch (response.status) {
      case 200:
      case 201:
      case 202:
      case 203:
      case 204:
        this.spinnerService.hide();
        return response;
      default:
        this.spinnerService.hide();
        console.log('throw new Error ....');
        throw new Error('Error making request : ' + response.status + " - " + response.statusText);
    }
  }

  handleResponseJson(response: Response) {
    switch (response.status) {
      case 200:
      case 201:
      case 202:
      case 203:
      case 204:
        this.spinnerService.hide();
        return response.text() ? response.json() : {};
      default:
        this.spinnerService.hide();
        console.log('throw new Error ....');
        throw new Error('Error making request : ' + response.status + " - " + response.statusText);
    }
  }
}
