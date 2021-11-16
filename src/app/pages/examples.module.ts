import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';


import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './login/signup.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        RegisterComponent,
        HeaderComponent,
        ForgotPasswordComponent,
        
    ]
})
export class ExamplesModule { }
