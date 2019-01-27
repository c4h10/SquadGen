import { SquadConfig, SquadPilot } from '../store/squad-list.store';
import { Pilot, Upgrade } from '../../global/reducers/types';

export const enum ACTION_NAMES {
  SQUAD_LIST_CONTAINER_CREATE = '[Squad list] SQUAD_LIST_CONTAINER_CREATE',
  SQUAD_LIST_CONTAINER_CREATED = '[Squad list] SQUAD_LIST_CONTAINER_CREATED',
  SQUAD_LIST_ADD_UPGRADE = '[Squad list] SQUAD_LIST_ADD_UPGRADE',
  SQUAD_LIST_REMOVE_UPGRADE = '[Squad list] SQUAD_LIST_REMOVE_UPGRADE',
  SQUAD_LIST_ADD_PILOT = '[Squad list] SQUAD_LIST_ADD_PILOT',
  SQUAD_LIST_REMOVE_PILOT = '[Squad list] SQUAD_LIST_REMOVE_PILOT',
  SQUAD_LIST_MOVE_UP_PILOT = '[Squad list] SQUAD_LIST_MOVE_UP_PILOT',
  SQUAD_LIST_MOVE_DOWN_PILOT = '[Squad list] SQUAD_LIST_MOVE_DOWN_PILOT',
  SQUAD_LIST_DUPLICATE_PILOT = '[Squad list] SQUAD_LIST_DUPLICATE_PILOT'
}


export interface SquadListContainerCreatePayload {
  tabId: string | number;
  config: SquadConfig;
}

export interface SquadListContainerCreatedPayload {
  tabId: string | number;
  config: SquadConfig;
}

export interface SquadListAddUpgradePayload {
  squadPilot: SquadPilot;
  upgrade: Upgrade;
}

export interface SquadListRemoveUpgradePayload {
  squadPilot: SquadPilot;
  upgrade: Upgrade;
}

export interface SquadListAddPilotPayload {
  pilot: Pilot;
}

export interface SquadListPilotPayload {
  squadPilot: SquadPilot;
}
