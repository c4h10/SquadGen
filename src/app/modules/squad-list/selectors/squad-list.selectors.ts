import { ContainerState, SquadConfig, SquadPilot } from '../store/squad-list.store';

// TODO: refactor to by like tab-navigation
export const getTabId = (state: ContainerState): string | number | undefined => state ? state.tabId : undefined;
export const getSquadConfig = (state: ContainerState): SquadConfig | undefined => state ? state.squadConfig : undefined;
export const getSquadPilots = (state: ContainerState): SquadPilot[] | undefined => state ? state.squadPilots : undefined;


