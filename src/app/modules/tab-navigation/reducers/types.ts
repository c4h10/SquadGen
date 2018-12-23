import { TabNavigationActions } from '../actions/tab-navigation.actions';

export interface State {
  config?: any;
  activeTab: number;
  latestTab: number;
  tabs: Tab[];
}


export interface Tab {
  id: number;
  type?: string;
  data?: Properties;
}

export interface Properties {
  [prop: string]: any;
}


export type Reducer<T> = (state: State, action: T) => State;

export interface ReducerMap {
  [actionName: string]: Reducer<TabNavigationActions>;
}
