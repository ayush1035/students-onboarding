import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DateToAgePipe } from '../shared/pipes/date-to-age.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SelectfilterPipe } from '../shared/pipes/selectfilter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationDialogService } from "../../core/commonComponents/confirmation-dialog/confirmation-dialog.service";
import { StudentListComponent } from './student-list.component';
import {OnboardingService} from '../shared/onboarding.service'


describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListComponent,DateToAgePipe,FilterPipe,SelectfilterPipe],
      imports:[ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      providers:[ConfirmationDialogService,OnboardingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
