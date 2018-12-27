import { Pipe, PipeTransform } from '@angular/core';
import { Pilot, Ship } from '../global/reducers/types';


@Pipe({
  name: 'pilotByShipFilter',
  pure: false
})
export class PilotByShipFilterPipe implements PipeTransform {

  transform(items: Pilot[], filter: Ship): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.ship.id.indexOf(filter.id) !== -1);
  }

}
