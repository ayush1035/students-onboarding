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
    if(localStorage.getItem('students')) //if local storage has students
    {
      let students = JSON.parse(localStorage.getItem('students'));//getting data from local Storage
      this.students.next(students);
    }
    else
    {
      const url = 'students-onboarding/assets/students.json';// url of the json
    this.http.get<Student[]>(url).subscribe(data => {
      localStorage.setItem('students',JSON.stringify(data));// setting data in local storage
      this.students.next(data);
    });
    }
    
  }

  /**
   * 
   * @param student model of Student
   * function to add a student to the students data
   */
  addStudent(student:Student) {
    const currentData = this.students.getValue();
    let id = new Date().getMilliseconds(); // getting the index of last value added
    student.id = id+1;
    const updatedData = [...currentData, student]; // updating the students array as behaviour subject
    localStorage.setItem('students',JSON.stringify(updatedData));
    this.students.next(updatedData);
    console.log(this.students.getValue());
  }

  /**
   * 
   * @param id Id to get particular student
   * function to get a student of a particular id
   */
  getStudent(id:number):Student{
    const currentData = this.students.getValue();
    let requiredStudent = currentData.find(x => x.id === id)
    return requiredStudent;
  }

  /**
   * 
   * @param student Student instance with edited details
   * function to edit the student and save it to the BehaviourSubject instance
   */
  updateStudent(student:Student){
    const currentData = this.students.getValue();
    let requiredIndex = currentData.findIndex(x => x.id === student.id);// finding the index of student with required id
    currentData[requiredIndex] = student; //replacing the current student with updated student
    const updatedData = [...currentData]; // updating the students array as behaviour subject
    localStorage.setItem('students',JSON.stringify(updatedData));
    this.students.next(updatedData);
  }

  /**
   * 
   * @param id Id for which student need to be deleted
   * function to delete a student with id
   */
  deleteStudent(id:number){
    const currentData = this.students.getValue();
    let requiredIndex = currentData.findIndex(x => x.id === id);// finding the index of student with required id
    currentData.splice(requiredIndex,1) // updating the students array as behaviour subject
    localStorage.setItem('students',JSON.stringify(currentData));
    this.students.next(currentData);
  }



}
