export const enum ACTION_NAMES {
  TABS_CONFIGURATION = '[Tab Navigation] TABS_CONFIGURATION',
  CREATE_TAB = '[Tab Navigation] CREATE_TAB',
  SET_ACTIVE_TAB = '[Tab Navigation] SET_ACTIVE_TAB'
}

export interface TabsConfigurationPayload {
  [prop: string]: any;
}

export interface CreateTabPayload {
  [prop: string]: any;
}

export interface SetActiveTabPayload {
  activeId: number;
}
