import { Configuration } from '../reducers/types';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogConfig } from '@angular/material';

export const enum ACTION_NAMES {
  CONFIGURATION_FETCH = '[Global] CONFIGURATION_FETCH',
  CONFIGURATION_FETCHED = '[Global] CONFIGURATION_FETCHED',
  FACTION_FETCH = '[Global] FACTION_FETCH',
  FACTION_FETCHED = '[Global] FACTION_FETCHED',
  OPEN_DIALOG = '[Global] OPEN_DIALOG',
  CLOSE_DIALOG = '[Global] CLOSE_DIALOG',
  RESULT_DIALOG = '[Global] RESULT_DIALOG',
  ERROR = '[Global] ERROR'
}

export interface ConfigurationFetchedPayload {
  data: Configuration;
}

export interface FactionFetchedPayload {
  factionId: string;
  data: any;
}

export interface OpenDialogPayload {
  componentOrTemplateRef: ComponentType<any>;
  config: MatDialogConfig;
}
