import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DateToAgePipe } from './shared/pipes/date-to-age.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SelectfilterPipe } from './shared/pipes/selectfilter.pipe';
import {CanDeactivateGuard} from '../core/guards/can-deactivate-guard';


@NgModule({
  declarations: [StudentComponent, StudentListComponent, DateToAgePipe, FilterPipe, SelectfilterPipe],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  	providers:[CanDeactivateGuard]
})
export class OnboardingModule { }
