import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import {ConfirmationDialogService} from '../core/commonComponents/confirmation-dialog/confirmation-dialog.service'; 
import { DateToAgePipe } from './shared/pipes/date-to-age.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SelectfilterPipe } from './shared/pipes/selectfilter.pipe';


@NgModule({
  declarations: [StudentComponent, StudentListComponent, DateToAgePipe, FilterPipe, SelectfilterPipe],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]})
export class OnboardingModule { }
