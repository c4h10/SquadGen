import { defaultState } from './defaults';
import * as Types from './types';
import { ACTION_NAMES } from '../actions/types';
import { reducer as configurationFetchedReducer } from './reducer.configuration-fetched';
import { ActionWithPayload } from '../types';
import { pseudoReducer } from '../global.pseudo-reducer';

export const REDUCERS: Types.ReducerMap = {
  [ACTION_NAMES.CONFIGURATION_FETCHED]: configurationFetchedReducer
};

export function reducer(
  state: Types.State = defaultState,
  action: ActionWithPayload<any>
) {
  return pseudoReducer(state, defaultState, action, REDUCERS);
}
