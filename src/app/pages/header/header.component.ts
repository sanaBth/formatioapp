import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';
import { LocalstorageService } from 'app/service/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  userconnected : User;
  role:User

  constructor(
      private _storageService :LocalstorageService , 
      private router: Router) {
     
  }

  ngOnInit() {
      this.userconnected = JSON.parse(localStorage.getItem('userconnected') || 'null')
      this.role = JSON.parse(localStorage.getItem('role') || 'null')
      if(this.userconnected)
      {
        console.log(this.role);
 console.log(this.userconnected);
      }
     

  }
  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    const currentUrl = this.router.url + '?'
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false
      this.router.navigate([this.router.url])
    })
  }
  logout()
{
this._storageService.logout();
this.onRefresh();
}

}
