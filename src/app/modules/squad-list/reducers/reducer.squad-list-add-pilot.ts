import { ContainerState, SlotUpgrade } from '../store/squad-list.store';
import { SquadListAddPilotAction } from '../actions';
import { guid } from '../../../utils/utils.functions';
import { ShipAction } from '../../global/reducers/types';

export function reducer(state: ContainerState, action: SquadListAddPilotAction): ContainerState {
  const squadPilots = [...state.squadPilots];
  const squadConfig = {
    ...state.squadConfig,
    points: state.squadConfig.points + action.payload.pilot.points
  };

  let actions: ShipAction[] = [];
  if (action.payload.pilot.actions) {
    actions = [...action.payload.pilot.actions];
  } else {
    actions = [...action.payload.pilot.ship.actions];
  }
  const upgrades: SlotUpgrade[] = action.payload.pilot.slots.map((item) => {
      return {
        type: item,
        taken: false
      };
  });

  squadPilots.push({
    UUID: guid(),
    pilot: action.payload.pilot,
    points: action.payload.pilot.points,
    actions: actions,
    upgrades: upgrades
  });

  const newState = {
    ...state,
    squadConfig,
    squadPilots: squadPilots
  };
  return newState;
}
