import { Action } from '@ngrx/store';
import { ACTION_NAMES, DummyPayload, GlobalDummyPayload } from './types';

export class DummyAction implements Action {
  readonly type = ACTION_NAMES.DUMMY;

  constructor(public payload: DummyPayload) {
  }
}


export class GlobalDummyAction implements Action {
  readonly type = ACTION_NAMES.GLOBAL_DUMMY;

  constructor(public payload: GlobalDummyPayload) {
  }
}
