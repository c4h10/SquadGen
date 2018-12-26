import { TabState } from '../../../tab-store/types';
import { Faction } from '../../global/reducers/types';


export interface State extends TabState<ContainerState> {
  configuration: any;
}


export interface ContainerState {
  tabId: string | number;
  squadConfig?: SquadConfig;
}

export interface SquadConfig {
  faction: Faction;
  isHyperspace?: boolean;
  [prop: string]: any;
}
