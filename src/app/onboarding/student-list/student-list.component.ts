import { Component, OnInit } from "@angular/core";
import { OnboardingService } from "../shared/onboarding.service";
import { Student } from "../shared/student";
import { Router } from "@angular/router";
import { ConfirmationDialogService } from "../../core/commonComponents/confirmation-dialog/confirmation-dialog.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  selectedFilter = "All";
  searchText = ""; //text on base of which search needs to be done
  filters = ["All", "Domestic", "International"]; // 3 types for which students needs to be filtered
  constructor(
    public onboardingService: OnboardingService,
    private router: Router,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit() {}

  /**
   *
   * @param id number
   * function made to handle the edit button functionality
   */
  editHandler(id: number) {
    this.router.navigate(["/student-onboard","edit", id]);
  }

  /**
   *
   * @param id id for which student needs to be viewed
   */
  viewHandler(id: number) {
    this.router.navigate(["/student-onboard", "view", id]);
  }

  /**
   *
   * @param id id for which student needs to be deleted
   */
  deleteHandler(id: number) {
    this.confirmationDialogService
      .confirm("Please confirm..", "Do you really want to delete the student ?")
      .then(confirmed => this.onboardingService.deleteStudent(id))
      .catch(() =>
        console.log(
          "User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)"
        )
      );
  }
}
