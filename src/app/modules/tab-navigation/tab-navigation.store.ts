import { State } from './reducers/types';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MODULE_NAME } from './types';
import { getActiveTabSelector, getLatestTabSelector, getTabsSelector } from './selectors/tab-navigation.selectors';

export const getTabNavigationFeatureStore = createFeatureSelector<State>(MODULE_NAME);

// SELECTORS
export const getTabs = createSelector(getTabNavigationFeatureStore, getTabsSelector);
export const getActiveTab = createSelector(getTabNavigationFeatureStore, getActiveTabSelector);
export const getLatestTab = createSelector(getTabNavigationFeatureStore, getLatestTabSelector);
