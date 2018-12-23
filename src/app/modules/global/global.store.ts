import { State } from './reducers/types';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getConfigurationSelector, getConfigurationFactionsSelector } from './selectors/global.selectors';


export const getAppFeatureStore = createFeatureSelector<State>('global');
// GLOBAL SELECTORS
export const getConfiguration = createSelector(getAppFeatureStore, getConfigurationSelector);
export const getConfigurationFactions = createSelector(getAppFeatureStore, getConfigurationFactionsSelector);
