import { ElementRef } from '@angular/core';
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

  private toggleButton: any;
  private sidebarVisible: boolean;
  userconnected : User;
  username : String;

  constructor(public location: Location, private element : ElementRef,
      private _storageService :LocalstorageService , 
      private router: Router) {
      this.sidebarVisible = false;
  }

  ngOnInit() {
      this.userconnected = JSON.parse(localStorage.getItem('userconnected') || '')
if (this.userconnected)
{
  this.username = this.userconnected.username
 // console.log(this.username);
}
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  logout()
{
this._storageService.logout();
this.router.navigate(['/']);
}
 sidebarOpen() {
      const toggleButton = this.toggleButton;
      const html = document.getElementsByTagName('html')[0];
      // console.log(html);
      // console.log(toggleButton, 'toggle');

      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);
      html.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  /*  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      // console.log(html);
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  }; */

 

}
