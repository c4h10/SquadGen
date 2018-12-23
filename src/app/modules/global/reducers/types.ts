import { GlobalActions } from '../actions/global.actions';

export interface State {
  configuration?: Configuration;
}

export interface Configuration {
  factions: Faction[];
}

export interface Faction {
  factionId: string;
  factionName: string;
  factionIcon: string;
}

export type Reducer<T> = (state: State, action: T) => State;

export interface ReducerMap {
  [actionName: string]: Reducer<GlobalActions>;
}
