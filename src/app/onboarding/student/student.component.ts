import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Student } from "../shared/student";
import { OnboardingService } from "../shared/onboarding.service";
import * as constants from "../shared/constants";
import { Router } from "@angular/router";
import { DocumentValidator } from "../shared/document.validator";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  documents = [
    { name: constants.DOCUMENT_DOMICILE },
    { name: constants.DOCUMENT_BIRTH_CERTIFICTE },
    { name: constants.DOCUMENT_MARKSHEETS },
    { name: constants.DOCUMENT_POLICE_CLEARANCE },
    { name: constants.DOCUMENT_PASSPORT },
    { name: constants.DOCUMENT_DECLARATION }
  ];
  categories = [constants.CATEGORY_DOMESTIC, constants.CATEGORY_INTERNTIONAL];
  onboardingForm: FormGroup;
  student = new Student(0, "", "", "", "", new Date(), 0, [
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  constructor(
    private fb: FormBuilder,
    public onboardingService: OnboardingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onboardingForm = this.fb.group(
      {
        name: [this.student.name, [Validators.required]],
        category: [this.student.category, [Validators.required]],
        fatherName: [this.student.fatherName, [Validators.required]],
        motherName: [this.student.motherName, [Validators.required]],
        dateOfBirth: [this.student.dateOfBirth, [Validators.required]],
        lastMarks: [this.student.lastMarks, [Validators.required]],
        documents: new FormArray([])
      },
      { validator: DocumentValidator }
    );
    // this.addDocuments();
  }

  /**
   * function to add documents to the form array
   */

  addDocuments() {
    let formArray = this.onboardingForm.controls.documents as FormArray;
    formArray.controls = [];
    this.student.documents.map((o, i) => {
      const control = new FormControl(o); // if first item set to true, else false
      (formArray as FormArray).push(control);
    });
  }

  /**
   * getter for name
   */
  get name() {
    return this.onboardingForm.get("name");
  }

  /**
   * getter for fatherName
   */
  get fatherName() {
    return this.onboardingForm.get("fatherName");
  }

  /**
   * getter for fatherName
   */
  get motherName() {
    return this.onboardingForm.get("motherName");
  }

  /**
   * getter for category
   */
  get category() {
    return this.onboardingForm.get("category");
  }

  /**
   * getter for dateOfBirth
   */
  get dateOfBirth() {
    return this.onboardingForm.get("dateOfBirth");
  }

  /**
   * getter for lastMarks
   */
  get lastMarks() {
    return this.onboardingForm.get("lastMarks");
  }

  get document() {
    return this.onboardingForm.get("documents");
  }

  /**
   *
   * @param event event triggered on clicking on submit button from the form
   * function to handle the submit action and save the form to the behaviour subject student
   */

  onSubmit(event) {
    console.log(this.onboardingForm.value);
    this.onboardingService.addStudent(this.onboardingForm.value);
    this.router.navigate(["/student-onboard", "list"]);
  }
}
