import { ContainerState } from '../store/squad-list.store';
import { SquadListContainerCreatedAction } from '../actions';


export function reducer(state: ContainerState, action: SquadListContainerCreatedAction): ContainerState {
  const newState = {
    ...state,
    tabId: action.payload.tabId,
    squadConfig: action.payload.config
  };

  return newState;
}
