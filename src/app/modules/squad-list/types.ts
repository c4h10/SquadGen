export * from './reducers/types';
/*export * from './selectors/tab-navigation.selectors';*/

export const MODULE_NAME = 'squadlist';
export const enum SQUAD_LIST_NAV_ACTION {
  DIAL = 'DIAL',
  PILOT = 'PILOT'
}

export interface SquadListNavAction {
  type: string;
  data: any;
}
