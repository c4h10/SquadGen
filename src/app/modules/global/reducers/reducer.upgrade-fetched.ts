import { State } from './types';
import { UpgradeFetchedAction } from '../actions/global.actions';

export function reducer(state: State, action: UpgradeFetchedAction): State {

  return {
    ...state,
    configuration: {
      ...state.configuration,
      upgrades: action.payload.data
    }
  };
}
