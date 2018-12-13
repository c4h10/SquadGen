import { Action } from '@ngrx/store';
import { TabsConfigurationPayload } from './types';

export enum TabNavigationActionTypes {
  TABS_CONFIGURATION = '[Tab Navigation] Tabs Configuration'
}

export class TabsConfigurationAction implements Action {
  readonly type = TabNavigationActionTypes.TABS_CONFIGURATION;
  constructor(public payload: TabsConfigurationPayload) {}
}
