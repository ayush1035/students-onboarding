import { Component, OnInit } from '@angular/core';
import {OnboardingService} from '../shared/onboarding.service';
import {Student} from '../shared/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public onboardingService: OnboardingService) { }

  ngOnInit() {
  }

}
