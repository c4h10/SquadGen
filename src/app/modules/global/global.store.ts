import { State } from './reducers/types';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  getConfigurationSelector,
  getConfigurationFactionsSelector,
  getFactionConfigSelector,
  getUpgradesByTypeSelector, getUpgradesSelector
} from './selectors/global.selectors';
import { MODULE_NAME } from './types';


export const getGlobalFeatureStore = createFeatureSelector<State>(MODULE_NAME);
// GLOBAL SELECTORS
export const getConfiguration = createSelector(getGlobalFeatureStore, getConfigurationSelector);
export const getConfigurationFactions = createSelector(getGlobalFeatureStore, getConfigurationFactionsSelector);
export const getFactionConfig = createSelector(getGlobalFeatureStore, getFactionConfigSelector);

export const getUpgrades = createSelector(getGlobalFeatureStore, getUpgradesSelector);
export const getUpgradesByType = createSelector(getGlobalFeatureStore, getUpgradesByTypeSelector);
