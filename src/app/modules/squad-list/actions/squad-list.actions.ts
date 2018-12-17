import { Action } from '@ngrx/store';
import { ACTION, DummyPayload, GlobalDummyPayload } from './types';

export class DummyAction implements Action {
  readonly type = ACTION.DUMMY;

  constructor(public payload: DummyPayload) {
  }
}


export class GlobalDummyAction implements Action {
  readonly type = ACTION.GLOBAL_DUMMY;

  constructor(public payload: GlobalDummyPayload) {
  }
}
