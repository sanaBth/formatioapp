import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearningDbService } from 'app/service/learning-db.service';
import { LocalstorageService } from 'app/service/localstorage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm:FormGroup;
    test : Date = new Date();
  
    constructor(private _authService:  LearningDbService,
        private router: Router,
      
        private _loginservice :LocalstorageService) { }

    ngOnInit() {  
      this.userForm = new FormGroup
        ({
          email: new FormControl('',Validators.required),
          password: new FormControl('',Validators.required),
        })
      }
    public login()
  {
   
      this._authService.login(this.userForm.value).subscribe(
        (res)=>{
          console.log(res);
         
   this._loginservice.setUseconnected(res.user);
         this.router.navigate(['/home']);
        //this.toastr.success('Bienvenue');
        },
        (err)=>{console.log(err.error.msg);
        //notification error
      
      }
      );
       
  
      

  }
}
