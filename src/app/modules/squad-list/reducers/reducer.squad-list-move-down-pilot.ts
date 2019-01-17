import { ContainerState } from '../store/squad-list.store';
import { SquadListDuplicatePilotAction } from '../actions';
import { guid } from '../../../utils/utils.functions';

export function reducer(state: ContainerState, action: SquadListDuplicatePilotAction): ContainerState {

  const squadPilots = [...state.squadPilots];
  const pilotIndex = squadPilots.findIndex(item => item.UUID === action.payload.squadPilot.UUID);
  if (pilotIndex < squadPilots.length - 1) {
    squadPilots.splice(pilotIndex + 1, 0, squadPilots.splice(pilotIndex, 1)[0]);
  }

  const newState = {
    ...state,
    squadPilots: squadPilots
  };
  return newState;
}
