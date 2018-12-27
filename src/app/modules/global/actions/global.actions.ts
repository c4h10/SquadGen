import { Action } from '@ngrx/store';
import { ACTION_NAMES, ConfigurationFetchedPayload, FactionFetchedPayload } from './types';


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

export type GlobalActions =
  ConfigurationFetchAction
  | ConfigurationFetchedAction
  | FactionFetchAction
  | FactionFetchedAction
  | ErrorAction;
