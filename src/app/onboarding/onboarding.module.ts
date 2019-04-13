import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [StudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OnboardingModule { }
