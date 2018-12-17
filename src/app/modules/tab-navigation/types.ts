export * from './reducers/types';
export * from './selectors/tab-navigation.selectors';

export const MODULE_NAME = 'navigation';

export interface TabContext {
  tabId: number;
  type: string;
  data?: {
    [prop: string]: any;
  };
}
