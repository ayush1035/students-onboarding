import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectfilter'
})
export class SelectfilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;
    if(filterText === "All") return items;
    filterText = filterText.toLowerCase();
    return items.filter(it => {
      return it.category.toLowerCase().includes(filterText);
    });
  }

}
