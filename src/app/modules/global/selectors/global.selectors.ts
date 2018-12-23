import { State } from '../reducers/types';

export const getConfigurationSelector = (state: State) => state.configuration;
export const getConfigurationFactionsSelector = (state: State) => {
  if (getConfigurationSelector(state)) {
    return state.configuration.factions;
  }
  return null;
};
