import { ActionWithPayload } from './types';


// TODO: Refactor move to tab navigations
export const enum GlobalStoreTabActionTypes {
  KILL_SESSION = '[GLOBAL] KILL_SESSION',
  CREATE_TAB = '[GLOBAL] CREATE_TAB',
  DESTROY_TAB = '[GLOBAL] DESTROY_TAB'
}

export interface CreateTabPayload {
  id: string | number;
  feature: string;
}

export class CreateTabAction implements ActionWithPayload<CreateTabPayload> {
  readonly type = GlobalStoreTabActionTypes.CREATE_TAB;
  constructor(public payload: CreateTabPayload) {}
}
