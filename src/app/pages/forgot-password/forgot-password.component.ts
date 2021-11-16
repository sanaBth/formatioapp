import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LearningDbService } from 'app/service/learning-db.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetform: FormGroup;
  constructor(private _authService:  LearningDbService) { }

  ngOnInit(): void {
    this.resetform = new FormGroup
    ({
      email: new FormControl('',Validators.required),
    })
  }
  onSubmit()
  {
console.log(this.resetform.value);

    this._authService.forgotPassword(this.resetform.value).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      //notification error
    }
    );;
  }
}
