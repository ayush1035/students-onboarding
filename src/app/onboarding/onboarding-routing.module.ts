import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import {AuthGuardService} from '../core/guards/auth-guard.service';
import {CanDeactivateGuard} from '../core/guards/can-deactivate-guard';

const routes: Routes = [
  {
    path: 'create',
    component: StudentComponent,
    canActivate:[AuthGuardService],
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path: 'list',
    component: StudentListComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'edit/:id',
    component: StudentComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'view/:id',
    component: StudentComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
