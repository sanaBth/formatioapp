import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';
import { LocalstorageService } from 'app/service/localstorage.service';
@Component({
  selector: 'app-header-not-transparent',
  templateUrl: './header-not-transparent.component.html',
  styleUrls: ['./header-not-transparent.component.css']
})
export class HeaderNotTransparentComponent implements OnInit {

  userconnected : User;
  

  constructor
  (
      private _storageService :LocalstorageService , 
      private router: Router) {
     
  }

  ngOnInit(): void {
    this.userconnected = JSON.parse(localStorage.getItem('userconnected') || 'null')
      console.log(this.userconnected);
  }
  logout()
  {
  this._storageService.logout();
  this.router.navigate(['/']);
  }
}
