export const enum ACTION_NAMES {
  TABS_CONFIGURATION = '[Tab Navigation] TABS_CONFIGURATION',
  CREATE_TAB = '[Tab Navigation] CREATE_TAB'
}

export interface TabsConfigurationPayload {
  [prop: string]: any;
}

export interface CreateTabPayload {
  [prop: string]: any;
}
