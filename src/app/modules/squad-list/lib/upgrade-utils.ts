import {SlotUpgrade, SquadPilot} from '../store/squad-list.store';
import {ShipAction, Upgrade} from '../../global/reducers/types';
import {shipActionToClassName} from '../../../utils/utils.translation';


export class UpgradeUtils {

  static applyModifiers(modifiers: any[], squadPilot: SquadPilot, revert: number = 0): SquadPilot {
    modifiers.forEach((item) => {
      switch (item.type) {
        case 'actions':
          squadPilot.actions = this.getActionFunction(item.operator)[revert](squadPilot.actions, item.args);
          break;
        case 'slots':
          // PRE POINTS
          const pre = squadPilot.upgrades.reduce((prev, curr) => {
            return prev + (curr.upgrade ? curr.upgrade.points : 0);
          }, 0);
          squadPilot.upgrades = this.getSlotFunction(item.operator)[revert](squadPilot.upgrades, item.args);
          const post = squadPilot.upgrades.reduce((prev, curr) => {
            return prev + (curr.upgrade ? curr.upgrade.points : 0);
          }, 0);

          squadPilot.points = squadPilot.points + (post - pre);

          break;
        case 'stats':
          if (revert === 0) {
// TODO: hull upog
            const fieldValue = item.args.type.split('.').reduce((o, i) => o[i], squadPilot.pilot);
            console.log(fieldValue);
            squadPilot.pilot[item.args.type] =
              squadPilot.pilot[item.args.type] ? squadPilot.pilot[item.args.type] + item.args.args : item.args.args;
          } else {
            squadPilot.pilot[item.args.type] = squadPilot.pilot[item.args.type] - item.args.args;
          }


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

  static getSlotFunction(type: string) {
    const types = {
      'add': [
        function (upgrades: SlotUpgrade[], args: string[]) {
          args.forEach((el) => {
            upgrades.push({
              type: el
            });
          });
          return upgrades;
        },
        function (upgrades: SlotUpgrade[], args: string[]) {
          args.forEach((el) => {
            const ind = upgrades.findIndex((it) => it.type === el && !it.taken && !it.upgrade);
            if (ind !== -1) {
              upgrades.splice(ind, 1);
            } else {
              upgrades.splice(upgrades.findIndex((it) => it.type === el), 1);
            }
          });

          return upgrades;
        }
      ],
      'remove': [
        function (upgrades: SlotUpgrade[], args: string[]) {
          args.forEach((el) => {
            const ind = upgrades.findIndex((it) => it.type === el && !it.taken && !it.upgrade);
            if (ind !== -1) {
              upgrades.splice(ind, 1);
            } else {
              upgrades.splice(upgrades.findIndex((it) => it.type === el), 1);
            }
          });

          return upgrades;

        },
        function (upgrades: SlotUpgrade[], args: string[]) {
          args.forEach((el) => {
            upgrades.push({
              type: el
            });
          });
          return upgrades;
        }
      ]
    };
    return types[type];
  }
}


/*
        {
          "type": "stats",
          "operator": "update",

        }

      ],

 */
