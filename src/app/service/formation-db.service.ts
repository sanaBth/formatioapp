import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'app/model/formation';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { pipe, of, forkJoin } from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class FormationDbService {

  api_url: string = 'http://localhost:4000';
  
  constructor(private httpClient: HttpClient,public router: Router) { }



  //get liste des formations
  getFormations()
  {
    return this.httpClient.get(`${this.api_url}/formation/getformation`);
  }
  
  //ajouter un formation
  addFormation(form:FormData): Observable<any>
  {
    return this.httpClient.post(`${this.api_url}/formation/add`,form).pipe(
      catchError(this.handleError)
    )
  }

//ajouter un vidéo
  addVideo(form:FormData, id:string): Observable<any>
  {
    return this.httpClient.post(`${this.api_url}/video/add/${id}`,form).pipe(
      catchError(this.handleError)
    )
  }

  //get une formation
  getOneformation(id:string)
  {
    return this.httpClient.get(`http://localhost:4000/formation/details/${id}`)/* .pipe(
      catchError(this.handleError)
    ) */
  }
  //get une vidéo
  getOnevideo(id:string)
  {
    return this.httpClient.get(`${this.api_url}/video/details/${id}`).pipe(
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
