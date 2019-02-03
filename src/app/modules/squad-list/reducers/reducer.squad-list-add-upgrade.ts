import { ContainerState } from '../store/squad-list.store';
import { SquadListAddUpgradeAction } from '../actions';

export function reducer(state: ContainerState, action: SquadListAddUpgradeAction): ContainerState {

  const squadConfig = {
    ...state.squadConfig,
    points: state.squadConfig.points + action.payload.upgrade.points
  };
  let squadPilots = [...state.squadPilots];

  squadPilots = squadPilots.map((pilot) => {
    if (pilot.UUID === action.payload.squadPilot.UUID) {
      pilot.points = pilot.points + action.payload.upgrade.points;
      const upgrades = [...pilot.upgrades].map((item) => {
        if (action.payload.upgrade.slot === item.type) {
            item.taken = true;
            item.upgrade = action.payload.upgrade;
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
