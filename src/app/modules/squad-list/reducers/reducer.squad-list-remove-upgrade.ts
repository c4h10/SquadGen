import { ContainerState } from '../store/squad-list.store';
import { SquadListRemoveUpgradeAction } from '../actions';

export function reducer(state: ContainerState, action: SquadListRemoveUpgradeAction): ContainerState {

  const squadConfig = {
    ...state.squadConfig,
    points: state.squadConfig.points - action.payload.upgrade.points
  };
  let squadPilots = [...state.squadPilots];

  squadPilots = squadPilots.map((pilot) => {
    if (pilot.UUID === action.payload.squadPilot.UUID) {
      let removed = false;
      let extraSlots = [];
      if (action.payload.upgrade.extraSlots) {
        extraSlots = [...action.payload.upgrade.extraSlots];
      }

      pilot.points = pilot.points - action.payload.upgrade.points;
      const upgrades = [...pilot.upgrades].map((item) => {
        if (item.upgrade && item.upgrade.id === action.payload.upgrade.id && !removed) {
          item.taken = false;
          item.upgrade = null;
          removed = true;
        } else if (extraSlots.indexOf(item.type) > -1  && removed) {
          item.taken = false;
          item.upgrade = null;
          extraSlots.splice( extraSlots.indexOf(item.type), 1 );
        }
        return item;
      });
      pilot.upgrades = upgrades;
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
