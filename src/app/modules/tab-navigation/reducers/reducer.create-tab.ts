import { State, Tab } from './types';
import { CreateTabAction } from '../actions/tab-navigation.actions';

export function reducer(state: State, action: CreateTabAction): State {
  // TODO: hardcoded type
  const tabs: Tab[] = [...state.tabs];
  tabs.push({
    id: calculateNewTabId(tabs),
    type: 'squad-list',
    data: action.payload
  });
  return {
    ...state,
    tabs
  };
}


export const calculateNewTabId = (tabs: Tab[]): number => {
  if (tabs.length > 0) {
    const max = tabs.reduce(function (prev, current) {
      return (prev.id > current.id) ? prev : current;
    });
    return max.id + 1;
  }

  return 0;
};