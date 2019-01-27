import { ACTION_NAMES } from '../actions/types';
import { ActionReducerMap } from '@ngrx/store';
import { defaultState, defaultContainerState } from './defaults';
import * as Store from '../store/squad-list.store';
import { reducer as squadListContainerCreatedReducer } from './reducer.squad-list-container-created';
import { reducer as squadListAddUpgradeReducer } from './reducer.squad-list-add-upgrade';
import { reducer as squadListRemoveUpgradeReducer } from './reducer.squad-list-remove-upgrade';
import { reducer as squadListAddPilotReducer } from './reducer.squad-list-add-pilot';
import { reducer as squadListRemovePilotReducer } from './reducer.squad-list-remove-pilot';
import { reducer as squadListDuplicatePilotReducer } from './reducer.squad-list-duplicate-pilot';
import { reducer as squadListMoveUpPilotReducer } from './reducer.squad-list-move-up-pilot';
import { reducer as squadListMoveDownPilotReducer } from './reducer.squad-list-move-down-pilot';
import * as Types from './types';
import { MODULE_NAME } from '../types';
import { tabReducer } from '../../../tab-store/tab-store.reducer';
import { TabContainerAction, TabState } from '../../../tab-store/types';


export const CONTAINER_REDUCERS: Types.ReducerMap = {
  [ACTION_NAMES.SQUAD_LIST_CONTAINER_CREATED]: squadListContainerCreatedReducer,
  [ACTION_NAMES.SQUAD_LIST_ADD_UPGRADE]: squadListAddUpgradeReducer,
  [ACTION_NAMES.SQUAD_LIST_REMOVE_UPGRADE]: squadListRemoveUpgradeReducer,
  [ACTION_NAMES.SQUAD_LIST_ADD_PILOT]: squadListAddPilotReducer,
  [ACTION_NAMES.SQUAD_LIST_REMOVE_PILOT]: squadListRemovePilotReducer,
  [ACTION_NAMES.SQUAD_LIST_MOVE_UP_PILOT]: squadListMoveUpPilotReducer,
  [ACTION_NAMES.SQUAD_LIST_MOVE_DOWN_PILOT]: squadListMoveDownPilotReducer,
  [ACTION_NAMES.SQUAD_LIST_DUPLICATE_PILOT]: squadListDuplicatePilotReducer
};

export const GLOBAL_REDUCERS: Types.GlobalReducerMap = {
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
