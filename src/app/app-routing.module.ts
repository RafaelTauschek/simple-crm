import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'password-recovery', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
