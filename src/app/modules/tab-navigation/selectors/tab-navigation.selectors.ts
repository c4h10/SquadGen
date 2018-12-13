import { MODULE_NAME, State, Tab } from '../types';
import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';


const getTabsSelector = (state: State): Tab[] => state.tabs;

const getTabNavigationFeatureState = createFeatureSelector<State>(MODULE_NAME);

function buildSelector(fn: (state: State) => any) {
  return createSelector(getTabNavigationFeatureState, fn);
}

export const getTabs: MemoizedSelector<State, Tab[]> = buildSelector(getTabsSelector);

