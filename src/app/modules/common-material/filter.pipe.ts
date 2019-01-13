import { Pipe, PipeTransform } from '@angular/core';

// TODO: MAKE MORE GENERIC!!!!
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if (!items || !searchText || searchText.length < 3) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText) || it.faction.toLowerCase().includes(searchText);
    });
  }
}
