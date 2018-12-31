import { Faction, State } from '../reducers/types';

export const getConfigurationSelector = (state: State) => state.configuration;

export const getConfigurationFactionsSelector = (state: State): Faction[] => {
  if (getConfigurationSelector(state)) {
    return state.configuration.factions;
  }
  return null;
};

export const getFactionConfigSelector = (state: State, factionId: string): Faction => {

  return state.configuration.factions.find((faction) => faction.factionId === factionId);
};
