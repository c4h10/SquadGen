import { Action } from '@ngrx/store';
import { ACTION_NAMES, CreateTabPayload, TabsConfigurationPayload } from './types';

export class TabsConfigurationAction implements Action {
  readonly type = ACTION_NAMES.TABS_CONFIGURATION;
  constructor(public payload: TabsConfigurationPayload) {}
}

export class CreateTabAction implements Action {
  readonly type = ACTION_NAMES.CREATE_TAB;
  constructor(public payload: CreateTabPayload) {}
}

export type TabNavigationActions =
  TabsConfigurationAction
  | CreateTabAction;
