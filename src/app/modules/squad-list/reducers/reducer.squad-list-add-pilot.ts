import { ContainerState, SlotUpgrade } from '../store/squad-list.store';
import { SquadListAddPilotAction } from '../actions';
import { guid } from '../../../utils/utils.functions';

export function reducer(state: ContainerState, action: SquadListAddPilotAction): ContainerState {
  const squadPilots = [...state.squadPilots];
  const squadConfig = {
    ...state.squadConfig,
    points: state.squadConfig.points + action.payload.pilot.points
  };

  const upgrades: SlotUpgrade[] = action.payload.pilot.slots.map((item) => {
      return {
        type: item,
        taken: false
      };
  });

  squadPilots.push({
    UUID: guid(),
    pilot: action.payload.pilot,
    points: action.payload.pilot.points,
    upgrades: upgrades
  });

  const newState = {
    ...state,
    squadConfig,
    squadPilots: squadPilots
  };
  return newState;
}
