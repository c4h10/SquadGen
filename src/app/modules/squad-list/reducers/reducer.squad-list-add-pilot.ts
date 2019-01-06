import { ContainerState } from '../store/squad-list.store';
import { SquadListAddPilotAction } from '../actions';

export function reducer(state: ContainerState, action: SquadListAddPilotAction): ContainerState {
  console.log('a');
  console.log(state);
  const squadPilots = [...state.squadPilots];
  squadPilots.push({
    pilot: action.payload.pilot,
    points: action.payload.pilot.points
  });

  console.log('c');
  // TODO: CALCULATE TOTAL POINTS

  const newState = {
    ...state,
    squadPilots : squadPilots
  };
  console.log('s');
  return newState;
}
