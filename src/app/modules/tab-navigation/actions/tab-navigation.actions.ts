import { Action } from '@ngrx/store';
import { ACTION_NAMES, CreateTabPayload, SetActiveTabPayload } from './types';


export class CreateMaterialTabAction implements Action {
  readonly type = ACTION_NAMES.CREATE_MATERIAL_TAB;
  constructor(public payload: CreateTabPayload) {}
}

export class SetActiveTabAction implements Action {
  readonly type = ACTION_NAMES.SET_ACTIVE_TAB;
  constructor(public payload: SetActiveTabPayload) {}
}

export type TabNavigationActions =
  | SetActiveTabAction
  | CreateMaterialTabAction;
