import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  students: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getStudents();
   }// http is initialized in the constructor to get data from json

  /**
   * function to get all the students saved in the pre-defined json
   */
  getStudents() {
    const url = '/assets/students.json';// url of the json
    this.http.get<Student[]>(url).subscribe(data => {
      this.students.next(data);
    });
  }

  /**
   * 
   * @param student model of Student
   * function to add a student to the students data
   */
  addStudent(student:Student) {
    const currentData = this.students.getValue();
    let id = currentData[currentData.length-1].id // getting the index of last value added
    student.id = id+1;
    const updatedData = [...currentData, student]; // updating the students array as behaviour subject
    this.students.next(updatedData);
    console.log(this.students.getValue());
  }

}
