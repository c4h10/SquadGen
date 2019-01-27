import { TabState } from '../../../tab-store/types';
import { Faction, Pilot, Upgrade, Upgrades } from '../../global/reducers/types';


export interface State extends TabState<ContainerState> {
  configuration: any;
}


export interface ContainerState {
  tabId: string | number;
  squadConfig?: SquadConfig;
  squadPilots: SquadPilot[];
  meta?: any;
}

export interface SquadConfig {
  faction: Faction;
  upgrades?: Upgrades;
  isHyperspace?: boolean;
  points: number;
  totalPoints: number;
  [prop: string]: any;
}

export interface SquadPilot {
  UUID: string;
  pilot: Pilot;
  points: number;
  upgrades: Upgrade[];
}
