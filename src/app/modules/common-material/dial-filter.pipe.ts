import { Pipe, PipeTransform } from '@angular/core';

// TODO: MAKE MORE GENERIC!!!!
@Pipe({
  name: 'dialFilter',
  pure: false
})
export class DialFilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if (!items || !searchText || searchText.length < 2) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      let keywordsMatch = false;

      if (searchText.length > 2 && it.keywords) {
        keywordsMatch = it.keywords.toLowerCase().replace(/[-\/]/gi, '').includes(searchText);
      }
      return (
        it.name.toLowerCase().includes(searchText)
        || it.name.toLowerCase().replace(/[-\/]/gi, '').includes(searchText)
        || it.faction.toLowerCase().includes(searchText)
        || keywordsMatch
      );
    });
  }
}
