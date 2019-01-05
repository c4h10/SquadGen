import { Pilot, Ship, State } from './types';
import { FactionFetchedAction } from '../actions/global.actions';
import { shipActionToClassName } from '../../../utils/utils.translation';

export function reducer(state: State, action: FactionFetchedAction): State {
  let ships: Ship[] = [...action.payload.data.ships];

  ships = ships.map((ship) => {
      ship.actions = ship.actions.map((item) => {
        item.icon = shipActionToClassName(item.type);
        if (item.linked) {
          item.linked.icon = shipActionToClassName(item.linked.type);
        }
        return item;
      });
    return ship;
  });
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
