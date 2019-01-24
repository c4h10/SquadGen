import { Faction, State, Upgrade } from '../reducers/types';

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

export const getUpgradesByTypeSelector = (state: State, upgradeType: string): Upgrade[] => {

  if (state.configuration.upgrades && state.configuration.upgrades[upgradeType]) {
    return state.configuration.upgrades[upgradeType];
  }
  return null;
};
