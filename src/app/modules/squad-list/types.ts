export * from './reducers/types';
/*export * from './selectors/tab-navigation.selectors';*/

export const MODULE_NAME = 'squadlist';
export const enum SQUAD_LIST_NAV_ACTION {
  DIAL = 'DIAL',
  PILOT = 'PILOT',
  UPGRADE = 'UPGRADE',
  ADD_TO_SQUAD = 'ADD_TO_SQUAD',
  REMOVE_FROM_SQUAD = 'REMOVE_FROM_SQUAD',
  MOVE_UP = 'MOVE_UP',
  MOVE_DOWN = 'MOVE_DOWN',
  DUPLICATE = 'DUPLICATE'
}

export interface SquadListNavAction {
  type: string;
  data: any;
}
