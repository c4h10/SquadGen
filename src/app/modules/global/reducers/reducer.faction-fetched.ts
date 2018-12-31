import { Pilot, Ship, State } from './types';
import { FactionFetchedAction } from '../actions/global.actions';

export function reducer(state: State, action: FactionFetchedAction): State {
  const ships: Ship[] = [...action.payload.data.ships];
  const pilots: Pilot[] = action.payload.data.pilots.map(pilot => {
    pilot.ship = ships.find(ship => ship.id === pilot.ship);
    return pilot;
  });

  const updatedFactions = state.configuration.factions.map(faction => {
    if (faction.factionId === action.payload.factionId) {
      faction.ships = [...ships];
      faction.pilots = [...pilots];
      return faction;
    }
    return faction;
  });

  return {
    ...state,
    configuration: {
      ...state.configuration,
      factions: updatedFactions
    }
  };
}
