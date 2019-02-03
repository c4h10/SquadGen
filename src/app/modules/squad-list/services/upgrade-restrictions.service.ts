import { Injectable } from '@angular/core';
import { Upgrade } from '../../global/reducers/types';
import { SquadPilot } from '../store/squad-list.store';

@Injectable({
  providedIn: 'root'
})
export class UpgradeRestrictionsService {

  constructor() {
  }

  public applyRestrictions(upgrades: Upgrade[], squadPilot: SquadPilot): Upgrade[] {
    const result = upgrades.map(item => {
      // POINTS MOD
      if (item.pointsMod) {
        const fieldValue = item.pointsMod.field.split('.').reduce((o, i) => o[i], squadPilot);
        // tslint:disable-next-line:no-eval
        item.points = eval(item.pointsMod.formula.replace('__FIELD__', fieldValue));
      }
      // RESTRICTION MOD
      if (item.restrictions) {
        item.disabled = this.isUpgradeDisabled(item.restrictions, squadPilot);
      }

      return item;
    });
    return result;
  }

  private isUpgradeDisabled(restrictions: any[], squadPilot: SquadPilot): boolean {

    let result = false;
    restrictions.forEach((restriction) => {
      result = result || !this.getRestrictionFunction(restriction.type)(squadPilot, restriction.operator, restriction.args);
    });
    return result;
  }


  private getRestrictionFunction(type: string) {

    const types = {
      'actions': {
        fn: function (squadPilot: SquadPilot, operator, arg) {
          let result = true;
          switch (operator) {
            case 'has':
              if (squadPilot.pilot.actions) {
                result = squadPilot.pilot.actions.filter((it) => it.type === arg).length > 0;
              } else {
                result = squadPilot.pilot.ship.actions.filter((it) => it.type === arg).length > 0;
              }
              break;
            case 'equal':
              if (squadPilot.pilot.actions) {
                result = squadPilot.pilot.actions
                  .filter((it) => (it.type === arg.type && it.difficulty === arg.difficulty)).length > 0;
              } else {
                result = squadPilot.pilot.ship.actions
                  .filter((it) => (it.type === arg.type && it.difficulty === arg.difficulty)).length > 0;
              }
              break;
          }

          return result;
        }
      },
      'size': {
        fn: function (squadPilot: SquadPilot, operator, arg) {
          // tslint:disable-next-line:no-eval
          return eval(squadPilot.pilot.ship.size + operator + arg);
        }
      },

      'upgrades': {
        fn: function (squadPilot: SquadPilot, operator, arg) {
          switch (operator) {
            case 'empty':
              return squadPilot.upgrades.filter((slotUpg) => {
                return slotUpg.taken === false && slotUpg.type === arg;
              }).length > 1;
              break;
          }
        }
      }
    };

    return types[type].fn;
  }
}
