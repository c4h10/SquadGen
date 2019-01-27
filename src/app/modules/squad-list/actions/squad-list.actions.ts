import { Action } from '@ngrx/store';
import {
  ACTION_NAMES,
  SquadListContainerCreatePayload,
  SquadListContainerCreatedPayload,
  SquadListAddPilotPayload, SquadListPilotPayload, SquadListAddUpgradePayload, SquadListRemoveUpgradePayload
} from './types';

export class SquadListContainerCreateAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_CONTAINER_CREATE;

  constructor(public payload: SquadListContainerCreatePayload) {
  }
}

export class SquadListContainerCreatedAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_CONTAINER_CREATED;

  constructor(public payload: SquadListContainerCreatedPayload) {
  }
}

export class SquadListAddUpgradeAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_ADD_UPGRADE;

  constructor(public payload: SquadListAddUpgradePayload) {
  }
}

export class SquadListRemoveUpgradeAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_REMOVE_UPGRADE;

  constructor(public payload: SquadListRemoveUpgradePayload) {
  }
}

export class SquadListAddPilotAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_ADD_PILOT;

  constructor(public payload: SquadListAddPilotPayload) {
  }
}

export class SquadListRemovePilotAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_REMOVE_PILOT;

  constructor(public payload: SquadListPilotPayload) {
  }
}

export class SquadListDuplicatePilotAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_DUPLICATE_PILOT;

  constructor(public payload: SquadListPilotPayload) {
  }
}

export class SquadListMoveDownPilotAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_MOVE_DOWN_PILOT;

  constructor(public payload: SquadListPilotPayload) {
  }
}

export class SquadListMoveUpPilotAction implements Action {
  readonly type = ACTION_NAMES.SQUAD_LIST_MOVE_UP_PILOT;

  constructor(public payload: SquadListPilotPayload) {
  }
}
