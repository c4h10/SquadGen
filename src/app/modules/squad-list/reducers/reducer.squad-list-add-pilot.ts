import { ContainerState } from '../store/squad-list.store';
import { SquadListAddPilotAction } from '../actions';
import { guid } from '../../../utils/utils.functions';

export function reducer(state: ContainerState, action: SquadListAddPilotAction): ContainerState {
  const squadPilots = [...state.squadPilots];
  squadPilots.push({
    UUID: guid(),
    pilot: action.payload.pilot,
    points: action.payload.pilot.points
  });

  // TODO: CALCULATE TOTAL POINTS

  const newState = {
    ...state,
    squadPilots : squadPilots
  };
  return newState;
}
