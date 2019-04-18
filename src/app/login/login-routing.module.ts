import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthGuardForLoginService} from '../core/guards/auth-guard-for-login.service';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate:[AuthGuardForLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
