export const enum ACTION_NAMES {
  DUMMY = '[Squad list] DUMMY',
  GLOBAL_DUMMY = '[Squad list] GLOBAL_DUMMY'
}


export interface DummyPayload {
  tabId: string;
}

export interface GlobalDummyPayload {
  tabId: string;
}
