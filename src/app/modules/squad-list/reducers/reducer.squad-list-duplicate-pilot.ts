import { ContainerState } from '../store/squad-list.store';
import { SquadListDuplicatePilotAction } from '../actions';
import { guid } from '../../../utils/utils.functions';

export function reducer(state: ContainerState, action: SquadListDuplicatePilotAction): ContainerState {

  const squadPilots = [...state.squadPilots];
  const squadConfig = {
    ...state.squadConfig,
    points: state.squadConfig.points + action.payload.squadPilot.points
  };

  const squadPilot = Object.assign({}, action.payload.squadPilot);
  squadPilot.UUID = guid();
  squadPilots.push(squadPilot);

  const newState = {
    ...state,
    squadConfig,
    squadPilots: squadPilots
  };
  return newState;
}
