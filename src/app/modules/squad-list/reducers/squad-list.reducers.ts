import { ACTION } from '../actions/types';
import { ActionReducerMap } from '@ngrx/store';
import { defaultState, defaultContainerState } from './defaults';
import * as Store from '../store/squad-list.store';
import { reducer as dummyReducer } from './reducer.dummy';
import { reducer as globalDummyReducer } from './reducer.global-dummy';
import * as Types from './types';
import { MODULE_NAME } from '../types';
import { tabReducer } from '../../../tab-store/tab-store.reducer';
import { TabContainerAction, TabState } from '../../../tab-store/types';


export const CONTAINER_REDUCERS: Types.ReducerMap = {
  [ACTION.DUMMY]: dummyReducer
};

export const GLOBAL_REDUCERS: Types.GlobalReducerMap = {
  [ACTION.GLOBAL_DUMMY]: globalDummyReducer
};

export function reducer(
  state: Store.State = defaultState,
  action: TabContainerAction<any>): TabState<Store.ContainerState> {

    return tabReducer(
      MODULE_NAME,
      state,
      defaultState,
      defaultContainerState,
      action,
      CONTAINER_REDUCERS as ActionReducerMap<any>,
      GLOBAL_REDUCERS as ActionReducerMap<any>
    );
}
