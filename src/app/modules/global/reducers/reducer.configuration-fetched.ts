import { State } from './types';
import { ConfigurationFetchedAction } from '../actions/global.actions';

export function reducer (state: State, action: ConfigurationFetchedAction): State {
  return {
    ...state,
    configuration: action.payload.data
  };
}
