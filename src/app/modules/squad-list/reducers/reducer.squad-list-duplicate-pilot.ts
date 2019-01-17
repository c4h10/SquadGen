import { ContainerState } from '../store/squad-list.store';
import { SquadListDuplicatePilotAction } from '../actions';
import { guid } from '../../../utils/utils.functions';

export function reducer(state: ContainerState, action: SquadListDuplicatePilotAction): ContainerState {

  const squadPilots = [...state.squadPilots];
  squadPilots.push({
    ...action.payload.squadPilot,
    UUID: guid()
  });

  const newState = {
    ...state,
    squadPilots: squadPilots
  };
  return newState;
}
