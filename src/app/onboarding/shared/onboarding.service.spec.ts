import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { OnboardingService } from './onboarding.service';
import { Student } from './student';

describe('OnboardingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
  ],
  }));

  it('should be created', () => {
    const service: OnboardingService = TestBed.get(OnboardingService);
    expect(service).toBeTruthy();
  });

  it('should get students',()=>{
    const service: OnboardingService = TestBed.get(OnboardingService);
    let localStorageStudentsLength = JSON.parse(localStorage.getItem('students')).length;
    service.getStudents();
    expect(service.students.getValue().length).toBe(localStorageStudentsLength);
    
  });

  it('should add student',()=>{
    const service: OnboardingService = TestBed.get(OnboardingService);
    let student = new Student(0, "", "", "", "", "", 0, [
      false,
      false,
      false,
      false,
      false,
      false
    ]);
    let length = service.students.getValue().length;
    service.addStudent(student);
    expect(service.students.getValue().length).toBe(length+1);
  });

  it('should delete student',()=>{
    const service: OnboardingService = TestBed.get(OnboardingService);
    let id = 1;
    let length = service.students.getValue().length;
    service.deleteStudent(id);
    expect(service.students.getValue().length).toBe(length-1);
  });
  

});
