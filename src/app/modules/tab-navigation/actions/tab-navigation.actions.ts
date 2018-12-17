import { Action } from '@ngrx/store';
import { ACTION, TabsConfigurationPayload } from './types';

export class TabsConfigurationAction implements Action {
  readonly type = ACTION.TABS_CONFIGURATION;
  constructor(public payload: TabsConfigurationPayload) {}
}
