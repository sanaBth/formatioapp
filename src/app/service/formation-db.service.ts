import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'app/model/formation';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormationDbService {

  api_url: string = 'http://localhost:4000';
  
  constructor(private httpClient: HttpClient,public router: Router) { }
  getFormations()
  {
    return this.httpClient.get(`${this.api_url}/formation/getformation`);
  }
  
  addFormation(form:FormData): Observable<any>
  {
    return this.httpClient.post(`${this.api_url}/formation/add`,form).pipe(
      catchError(this.handleError)
    )
  }
  addVideo(form:FormData, id:string): Observable<any>
  {
    return this.httpClient.post(`${this.api_url}/video/add/${id}`,form).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
