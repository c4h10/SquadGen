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
      pilot.points = pilot.points - action.payload.upgrade.points;
      const upgrades = [...pilot.upgrades].filter(upgrade => upgrade.id !== action.payload.upgrade.id);
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
