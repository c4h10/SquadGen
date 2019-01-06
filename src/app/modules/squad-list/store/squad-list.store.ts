import { TabState } from '../../../tab-store/types';
import { Faction, Pilot } from '../../global/reducers/types';


export interface State extends TabState<ContainerState> {
  configuration: any;
}


export interface ContainerState {
  tabId: string | number;
  squadConfig?: SquadConfig;
  squadPilots: SquadPilot[];
  // TODO: information about squad - points?
  meta?: any;
}

export interface SquadConfig {
  faction: Faction;
  isHyperspace?: boolean;
  points: number;
  totalPoints: number;
  [prop: string]: any;
}

export interface SquadPilot {
  pilot: Pilot;
  points: number;
  upgrades?: any;
}
