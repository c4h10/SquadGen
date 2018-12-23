import { defaultState } from './defaults';
import * as Types from './types';
import { ACTION_NAMES } from '../actions/types';
import { reducer as tabsConfigurationReducer } from './reducer.tabs-configuration';
import { reducer as createTabReducer } from './reducer.create-tab';
import { ActionWithPayload } from '../types';
import { pseudoReducer } from '../tab-navigation.pseudo-reducer';

export const REDUCERS: Types.ReducerMap = {
  [ACTION_NAMES.TABS_CONFIGURATION]: tabsConfigurationReducer,
  [ACTION_NAMES.CREATE_TAB]: createTabReducer
};

export function reducer(
  state: Types.State = defaultState,
  action: ActionWithPayload<any>
) {
  return pseudoReducer(state, defaultState, action, REDUCERS);
}
