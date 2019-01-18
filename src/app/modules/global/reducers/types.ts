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
  ships?: Ship[];
  pilots?: Pilot[];
}

export interface Ship {
  id: string;
  faction: string;
  name: string;
  icon: string;
  attack: number;
  attackb?: number;
  attackt?: number;
  attackdt?: number;
  attackbull?: number;
  agility: number;
  hull: number;
  shields: number;
  size: number;
  isHyperspace: boolean;
  actions: ShipAction[];
  maneuvers?: number[][];
  ability?: string;
  keywords?: string;
}

export interface Pilot {
  name: string;
  id: string;
  unique: boolean;
  faction:  string;
  ship: Ship;
  actions: ShipAction[];
  skill: number;
  points: number;
  force?: number;
  charge?: number;
  recurring?: boolean;
  slots: string[];
  isHyperspace: boolean;
  ability?: string;
}


export interface ShipAction {
  type: string;
  difficulty: string;
  icon?: string;
  linked?: ShipAction;
}

export type Reducer<T> = (state: State, action: T) => State;

export interface ReducerMap {
  [actionName: string]: Reducer<GlobalActions>;
}
