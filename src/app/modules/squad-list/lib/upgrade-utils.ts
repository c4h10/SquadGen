import {SquadPilot} from '../store/squad-list.store';
import {ShipAction} from '../../global/reducers/types';
import {shipActionToClassName} from '../../../utils/utils.translation';


export class UpgradeUtils {

  static applyModifiers(modifiers: any[], squadPilot: SquadPilot): SquadPilot {
    modifiers.forEach((item) => {
      switch (item.type) {
        case 'actions':
          squadPilot.actions = this.actionModifier(item.operator, item.args, squadPilot.actions);
          break;
      }
    });
    return squadPilot;
  }


  static actionModifier(operator, args, actions: ShipAction[]): ShipAction[] {

    if (operator === 'add') {
      actions.push({
        type: args.type,
        difficulty: args.difficulty,
        icon  : shipActionToClassName(args.type)
      });
    } else if (operator === 'remove') {
      // TODO: reverting
    }
    return actions;
  }
}
