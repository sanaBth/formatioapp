import { Injectable } from '@angular/core';
import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {


  public users : User;
  constructor() { }
  
  
  setUseconnected(user :any)
  {
    localStorage.setItem('userconnected', JSON.stringify(user));  
  }
  getUseconnected()
  {
    return JSON.parse(localStorage.getItem('userconnected') || 'null');  
  }
  
  public logout()
  {
     localStorage.removeItem('userconnected')

  }

}
