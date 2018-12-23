import { Action } from '@ngrx/store';
import { ACTION_NAMES } from './types';
import { Configuration } from '../reducers/types';


export class ConfigurationFetchAction implements Action {
  readonly type = ACTION_NAMES.CONFIGURATION_FETCH;
}

export class ConfigurationFetchedAction implements Action {
  readonly type = ACTION_NAMES.CONFIGURATION_FETCHED;

  constructor(public payload: Configuration) {
  }
}

export class ErrorAction implements Action {
  readonly type = ACTION_NAMES.ERROR;
}

export type GlobalActions =
  ConfigurationFetchAction
  | ConfigurationFetchedAction
  | ErrorAction;
