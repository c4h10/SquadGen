import { Configuration } from '../reducers/types';

export const enum ACTION_NAMES {
  CONFIGURATION_FETCH = '[Global] CONFIGURATION_FETCH',
  CONFIGURATION_FETCHED = '[Global] CONFIGURATION_FETCHED',
  FACTION_FETCH = '[Global] FACTION_FETCH',
  FACTION_FETCHED = '[Global] FACTION_FETCHED',
  ERROR = '[Global] ERROR'
}

export interface ConfigurationFetchedPayload {
  data: Configuration;
}

export interface FactionFetchedPayload {
  factionId: string;
  data: any;
}
