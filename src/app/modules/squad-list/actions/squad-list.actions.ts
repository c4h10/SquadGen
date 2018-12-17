import { Action } from '@ngrx/store';
import { ACTION, DummyPayload } from './types';

export class DummyAction implements Action {
  readonly type = ACTION.DUMMY;

  constructor(public payload: DummyPayload) {
  }
}
