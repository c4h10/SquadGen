import { TabState } from '../../../tab-store/types';


export interface State extends TabState<ContainerState> {
  configuration: any;
}


export interface ContainerState {
  tabId: string | number;
}
