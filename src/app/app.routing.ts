import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/login/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { FormationComponent } from './pages/formation/formation.component';

const routes: Routes =[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'landing',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'login',           component: SignupComponent },
    { path: 'register',           component: RegisterComponent },
    { path: 'home',          component: LandingComponent },
    { path: 'formation',          component: FormationComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'resetpassword/:id/:token', component: ResetpasswordComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
