import { TabState } from '../../../tab-store/types';
import {Faction, Pilot, ShipAction, Upgrade, Upgrades} from '../../global/reducers/types';


export interface State extends TabState<ContainerState> {
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
  actions: ShipAction[];
  upgrades: SlotUpgrade[];
}

export interface SlotUpgrade {
  type: string;
  taken?: boolean;
  upgrade?: Upgrade;
}
