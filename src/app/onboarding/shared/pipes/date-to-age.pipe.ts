import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'dateToAge'
})
export class DateToAgePipe implements PipeTransform {

  transform(value: Date|moment.Moment, args: string[]): any {

  	if (!value) return value;

		return moment().diff(value, 'years')+" yrs old";
  	
  }

}
