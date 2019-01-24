import { State, Tab } from './types';
import { CreateMaterialTabAction } from '../actions/tab-navigation.actions';

export function reducer(state: State, action: CreateMaterialTabAction): State {
  // TODO: hardcoded type
  const tabs: Tab[] = [...state.tabs];
  const latestTabId = calculateNewTabId(tabs);
  tabs.push({
    id: latestTabId,
    type: 'squadlist',
    factionId: action.payload.faction.factionId,
    factionName: action.payload.faction.factionName,
    factionIcon: action.payload.faction.factionIcon
  });
  return {
    ...state,
    lastCreatedTab: latestTabId,
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
