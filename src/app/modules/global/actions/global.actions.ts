import { Action } from '@ngrx/store';
import { ACTION_NAMES, ConfigurationFetchedPayload, FactionFetchedPayload, OpenDialogPayload } from './types';


export class ConfigurationFetchAction implements Action {
  readonly type = ACTION_NAMES.CONFIGURATION_FETCH;
}

export class ConfigurationFetchedAction implements Action {
  readonly type = ACTION_NAMES.CONFIGURATION_FETCHED;

  constructor(public payload: ConfigurationFetchedPayload) {
  }
}

export class FactionFetchAction implements Action {
  readonly type = ACTION_NAMES.FACTION_FETCH;

  constructor(public payload: string) {
  }
}

export class FactionFetchedAction implements Action {
  readonly type = ACTION_NAMES.FACTION_FETCHED;

  constructor(public payload: FactionFetchedPayload) {
  }
}

export class ErrorAction implements Action {
  readonly type = ACTION_NAMES.ERROR;
}

export class OpenDialogAction implements Action {
  readonly type = ACTION_NAMES.OPEN_DIALOG;
  constructor(public payload:  OpenDialogPayload) {
  }
}

export class CloseDialogAction implements Action {
  readonly type = ACTION_NAMES.CLOSE_DIALOG;
}

export class ResultDialogAction implements Action {
  readonly type = ACTION_NAMES.RESULT_DIALOG;
  constructor(public payload:  any) {
  }
}

export type GlobalActions =
  ConfigurationFetchAction
  | ConfigurationFetchedAction
  | FactionFetchAction
  | FactionFetchedAction
  | OpenDialogAction
  | CloseDialogAction
  | ResultDialogAction
  | ErrorAction;
