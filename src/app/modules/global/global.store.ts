import { State } from './reducers/types';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getConfigurationSelector, getConfigurationFactionsSelector } from './selectors/global.selectors';
import { MODULE_NAME } from './types';


export const getGlobalFeatureStore = createFeatureSelector<State>(MODULE_NAME);
// GLOBAL SELECTORS
export const getConfiguration = createSelector(getGlobalFeatureStore, getConfigurationSelector);
export const getConfigurationFactions = createSelector(getGlobalFeatureStore, getConfigurationFactionsSelector);
