import { State } from './types';
import { TabsConfigurationAction } from '../actions/tab-navigation.actions';

export function reducer (state: State, action: TabsConfigurationAction): State {
  return {
    ...state,
    config: action.payload
  };
}
