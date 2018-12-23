import { State, Tab } from '../reducers/types';

export const getTabsSelector = (state: State): Tab[] => {
  if (state.tabs) {
    return state.tabs;
  }
  return null;
};

