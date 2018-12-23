import { Action } from '@ngrx/store';
import { ACTION_NAMES, CreateTabPayload, SetActiveTabPayload, TabsConfigurationPayload } from './types';

export class TabsConfigurationAction implements Action {
  readonly type = ACTION_NAMES.TABS_CONFIGURATION;
  constructor(public payload: TabsConfigurationPayload) {}
}

export class CreateTabAction implements Action {
  readonly type = ACTION_NAMES.CREATE_TAB;
  constructor(public payload: CreateTabPayload) {}
}

export class SetActiveTabAction implements Action {
  readonly type = ACTION_NAMES.SET_ACTIVE_TAB;
  constructor(public payload: SetActiveTabPayload) {}
}

export type TabNavigationActions =
  TabsConfigurationAction
  | SetActiveTabAction
  | CreateTabAction;
