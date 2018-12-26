import { SquadConfig } from '../store/squad-list.store';

export const enum ACTION_NAMES {
  DUMMY = '[Squad list] DUMMY',
  GLOBAL_DUMMY = '[Squad list] GLOBAL_DUMMY',
  SQUAD_LIST_CONTAINER_CREATE = '[Squad list] SQUAD_LIST_CONTAINER_CREATE',
  SQUAD_LIST_CONTAINER_CREATED = '[Squad list] SQUAD_LIST_CONTAINER_CREATED'
}


export interface DummyPayload {
  tabId: string;
}

export interface GlobalDummyPayload {
  tabId: string;
}

export interface SquadListContainerCreatePayload {
  tabId: string | number;
  config: SquadConfig;
}

export interface SquadListContainerCreatedPayload {
  tabId: string | number;
  config: SquadConfig;
}
