import { State } from './types';
import { SetActiveTabAction } from '../actions/tab-navigation.actions';

export function reducer(state: State, action: SetActiveTabAction): State {
  return {
    ...state,
    activeTab: action.payload.activeId
  };
}

