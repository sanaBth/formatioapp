import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
}
