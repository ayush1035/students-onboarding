import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Student } from "../shared/student";
import { OnboardingService } from "../shared/onboarding.service";
import * as constants from "../shared/constants";
import { Router } from "@angular/router";
import { DocumentValidator } from "../shared/document.validator";
import {ActivatedRoute} from '@angular/router';

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
  editableStudent = new Student(0, "", "", "", "", "", 0, [
    false,
    false,
    false,
    false,
    false,
    false
  ])
  categories = [constants.CATEGORY_DOMESTIC, constants.CATEGORY_INTERNTIONAL];
  onboardingForm: FormGroup;
  student = new Student(0, "", "", "", "", "", 0, [
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  disableFields = false;

  constructor(
    private fb: FormBuilder,
    public onboardingService: OnboardingService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    //initializing the form
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
      { validator: DocumentValidator }// custom validator
    );

    // to get the value from params and set their value in the form
    this.route.paramMap.subscribe(params=>{
      const id  = +params.get('id');
      if(id){//either edit or view
        if(this.router.url.includes('/view/'))
        {
          this.disableFields = true;
        }
        this.editableStudent = this.onboardingService.getStudent(id); // getting student with id in url
        this.setEditableValues(this.editableStudent);// setting value in form
      }
    })
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
    if(this.editableStudent.id!==0)
    {
      this.onboardingForm.value.id = this.editableStudent.id;
      this.onboardingService.updateStudent(this.onboardingForm.value)// for updating user
    }
    else
    {
      this.onboardingService.addStudent(this.onboardingForm.value);//for creating user
    }
    this.router.navigate(["/student-onboard", "list"]);
  }

  /**
   * 
   * @param student Student type of instance
   * Function is used to set the editable fields in the form on change of url to edit form
   */
  setEditableValues(student:Student){
    this.onboardingForm.patchValue({
      name: student.name,
        category:  student.category,
        fatherName:  student.fatherName,
        motherName:  student.motherName,
        dateOfBirth: student.dateOfBirth,
        lastMarks:  student.lastMarks,
    });
    this.category.markAsDirty();// to make the custom validator active
    this.onboardingForm.setControl('documents', this.setDocs(student.documents))// to set the form array
    if(this.disableFields) // in case of view fields
    {
      this.makingFieldsDisable(); // making fiels disable
    }
  }

  /**
   * 
   * @param docs docs array which needs to be populated to form array
   * Function used to populate form array
   */
  setDocs(docs):FormArray{
    const formArray = new FormArray([]); 
    formArray.controls = [];
    docs.map((o, i) => {
      const control = new FormControl(o); // if first item set to true, else false
      (formArray as FormArray).push(control);//filling the form array with form controls
    });
    return formArray
  }

  /**
   * making the fields disabled for view route
   */
  makingFieldsDisable(){
    this.onboardingForm.get('name').disable();
    this.onboardingForm.get('fatherName').disable();
    this.onboardingForm.get('motherName').disable();
    this.onboardingForm.get('category').disable();
    this.onboardingForm.get('dateOfBirth').disable();
    this.onboardingForm.get('lastMarks').disable();
    (<FormArray>this.onboardingForm.get('documents'))
      .controls
      .forEach(control => {
        control.disable();
      })

  }
}
