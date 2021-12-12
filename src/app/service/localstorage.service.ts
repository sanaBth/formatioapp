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
    localStorage.setItem('userconnected', JSON.stringify(user.username,));
    localStorage.setItem('role', JSON.stringify(user.role));
    localStorage.setItem('email', JSON.stringify(user.email));
    localStorage.setItem('userid', JSON.stringify(user._id));   
  }
  getUseconnected()
  {
    return JSON.parse(localStorage.getItem('userconnected') || 'null');  
  }
 
  getRole()
  {
    return JSON.parse(localStorage.getItem('role') || 'null');  
  }
  
  
  public logout()
  {
     localStorage.removeItem('userconnected')
     localStorage.removeItem('userid')
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
