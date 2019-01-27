import { ContainerState, State } from '../store/squad-list.store';
import {
  SquadListContainerCreatedAction,
  SquadListAddPilotAction,
  SquadListRemovePilotAction,
  SquadListDuplicatePilotAction,
  SquadListMoveDownPilotAction,
  SquadListMoveUpPilotAction,
  SquadListAddUpgradeAction, SquadListRemoveUpgradeAction
} from '../actions';

export type Reducer<T> = (state: ContainerState, action: T) => ContainerState;
export type GlobalReducer<T> = (state: State, action: T) => State;

export type SquadListReducer =
  | Reducer<SquadListContainerCreatedAction>
  | Reducer<SquadListAddPilotAction>
  | Reducer<SquadListAddUpgradeAction>
  | Reducer<SquadListRemoveUpgradeAction>
  | Reducer<SquadListDuplicatePilotAction>
  | Reducer<SquadListMoveUpPilotAction>
  | Reducer<SquadListMoveDownPilotAction>
  | Reducer<SquadListRemovePilotAction>;

export type GlobalSquadListReducer = null;

export interface ReducerMap {
  [actionName: string]: SquadListReducer;
}

export interface GlobalReducerMap {
  [actionName: string]: GlobalSquadListReducer;
}
