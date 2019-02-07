import {SquadPilot} from '../store/squad-list.store';
import {ShipAction} from '../../global/reducers/types';
import {shipActionToClassName} from '../../../utils/utils.translation';


export class UpgradeUtils {

  static applyModifiers(modifiers: any[], squadPilot: SquadPilot, revert: number = 0): SquadPilot {
    modifiers.forEach((item) => {
      switch (item.type) {
        case 'actions':
          squadPilot.actions = this.getActionFunction(item.operator)[revert](squadPilot.actions, item.args);
          break;
      }
    });
    return squadPilot;
  }

  static getActionFunction(type: string) {

    const types = {
      'add': [
        function (actions: ShipAction[], args) {
          actions.push({
            type: args.type,
            difficulty: args.difficulty,
            icon  : shipActionToClassName(args.type)
          });
          return actions;
        },
        function (actions: ShipAction[], args) {
          const ind = actions.findIndex((el) => el.type === args.type && el.difficulty === args.difficulty);
          actions.splice( ind, 1);
          return actions;
        }
      ]
    };
    return types[type];
  }
}
