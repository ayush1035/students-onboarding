import { AbstractControl } from "@angular/forms";
import * as constants from "../shared/constants";


/**
 * 
 * @param control control of the form
 * validation based on which category is selected
 */
export function DocumentValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const category = control.get("category");
      const documents = control.value.documents;
  if (category.pristine) {// if they are not made dirty yet then no need to show error as of now
    return null;
  }
  if (category.value === constants.CATEGORY_INTERNTIONAL) { // if category is International
    let total = getCheckedCountInternational(documents);// get total amount of checked docs required
    if (total < constants.REQUIRED_INTERNATIONAL) {
      return { misMatch: true };
    } else {
      null;
    }
  }
  if (category.value === constants.CATEGORY_DOMESTIC) {// if category is DOMESTIC
    let total = getCheckedCountDomestic(documents);//get total amount of checked docs required
    if (total < constants.REQUIRED_DOMESTIC) {
      return { misMatch: true };
    } else {
      null;
    }
  }
  return null;
}

/**
 * 
 * @param documents 
 * function to get count of total checkbox checked which are required
 */
function getCheckedCountInternational(documents) {
  let total = 0;
  for (let i = 0; i < documents.length; i++) {
    if (documents[i]) {// if document at i index is checked or not
      total++;
    }
  }
  return total;
}

/**
 * 
 * @param documents 
 * function to get count of total checkbox checked which are required
 */
function getCheckedCountDomestic(documents) {
  let total = 0;
  for (let i = 0; i < documents.length; i++) {
    if (i == 0 || i == 1 || i == 2 || i == 5) {
      if (documents[i]) {// if document at i index is checked or not
        total++;
      }
    }
  }
  return total;
}
