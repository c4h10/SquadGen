import { Action } from '@ngrx/store';

export const MODULE_NAME = 'navigation';

export interface ActionWithPayload<P> extends Action {
  payload?: P;
}

// TODO: refactor
export interface TabContext {
  tabId: number;
  type: string;
  data?: {
    [prop: string]: any;
  };
}
