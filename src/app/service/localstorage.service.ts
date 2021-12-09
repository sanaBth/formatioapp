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
    localStorage.setItem('userconnected', JSON.stringify( user.username));  
  }
  getUseconnected()
  {
    return JSON.parse(localStorage.getItem('userconnected') || 'null');  
  }
  setUser(user :any)
  {
    localStorage.setItem('user', JSON.stringify(user));  
  }
  getUser()
  {
    return JSON.parse(localStorage.getItem('user') || 'null');  
  }
  
  
  public logout()
  {
     localStorage.removeItem('userconnected')
     
  }
  gettoken()
  {
    return JSON.parse(localStorage.getItem('token') || 'null')
  }
  getuserid()
  {
    return JSON.parse(localStorage.getItem('iserid') || 'null')
  }
  settoken(token:any)
  {
    localStorage.setItem('token', JSON.stringify(token.token)); 
  }
  setuserId(token:any)
  {
    localStorage.setItem('userId', JSON.stringify(token.userId)); 
  }
}
