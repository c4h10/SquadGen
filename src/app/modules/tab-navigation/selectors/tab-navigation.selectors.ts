import { State, Tab } from '../reducers/types';

export const getTabsSelector = (state: State): Tab[] => {
  if (state.tabs) {
    return state.tabs;
  }
  return null;
};

export const getActiveTabSelector = (state: State): number => {
  if (state) {
    return state.activeTab;
  }
  return 0;
};

export const getLastCreatedSelector = (state: State): number => {
  if (state) {
    return state.lastCreatedTab;
  }
  return 0;
};
