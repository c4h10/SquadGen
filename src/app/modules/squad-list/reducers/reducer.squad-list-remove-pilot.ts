import { ContainerState } from '../store/squad-list.store';
import { SquadListRemovePilotAction } from '../actions';

export function reducer(state: ContainerState, action: SquadListRemovePilotAction): ContainerState {

  const squadPilots = state.squadPilots.filter(pilot => pilot.UUID !== action.payload.squadPilot.UUID);

  const newState = {
    ...state,
    squadPilots: squadPilots
  };
  return newState;
}
