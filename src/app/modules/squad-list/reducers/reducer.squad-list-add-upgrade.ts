import { ContainerState } from '../store/squad-list.store';
import { SquadListAddUpgradeAction } from '../actions';
import {UpgradeUtils} from '../lib/upgrade-utils';

export function reducer(state: ContainerState, action: SquadListAddUpgradeAction): ContainerState {
  const squadConfig = {
    ...state.squadConfig,
    points: state.squadConfig.points + action.payload.upgrade.points
  };
  let squadPilots = [...state.squadPilots];
  squadPilots = squadPilots.map((pilot) => {
    let added = false;
    let extraSlots = [];
    if (action.payload.upgrade.extraSlots) {
      extraSlots = [...action.payload.upgrade.extraSlots];
    }

    if (pilot.UUID === action.payload.squadPilot.UUID) {
      pilot.points = pilot.points + action.payload.upgrade.points;
      const upgrades = [...pilot.upgrades].map((item) => {
        if (action.payload.upgrade.slot === item.type && !item.taken && !added) {
            item.taken = true;
            item.upgrade = action.payload.upgrade;
            added = true;
        } else if (extraSlots.indexOf(item.type) > -1 && !item.taken && added) {
          item.taken = true;
          extraSlots.splice( extraSlots.indexOf(item.type), 1 );
        }
        return item;
      });
      pilot.upgrades = upgrades;

      if (action.payload.upgrade.modifiers) {
        pilot = UpgradeUtils.applyModifiers(action.payload.upgrade.modifiers, pilot);
      }
      return pilot;
    }
    return pilot;
  });

  const newState = {
    ...state,
    squadConfig,
    squadPilots: squadPilots
  };
  return newState;
}
