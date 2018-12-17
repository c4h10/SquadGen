/*
import { ACTION } from '../actions/types';
import { ActionReducerMap } from '@ngrx/store';
import { defaultState, defaultContainerState } from './defaults';
import * as Store from '../store/squad-list.store';
import { reducer as dummyReducer } from './reducer.dummy';
import * as Types from './types';
import { Action } from '@ngrx/store';
import { MODULE_NAME } from '../types';


export const CONTAINER_REDUCERS: Types.ReducerMap = {
  [ACTION.DUMMY]: dummyReducer
};


export function reducer(
  state: Store.State = defaultState,
  action: Action): Store.ContainerState {

    return pseudoReducer(
      MODULE_NAME,
      state,
      defaultState,
      defaultContainerState,
      action.type as ACTION,
      CONTAINER_REDUCERS as ActionReducerMap<any>
    );
}
*/
