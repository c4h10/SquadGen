import { ContainerState, State } from '../store/squad-list.store';
import { DummyAction, GlobalDummyAction, SquadListContainerCreatedAction, SquadListAddPilotAction } from '../actions';

export type Reducer<T> = (state: ContainerState, action: T) => ContainerState;
export type GlobalReducer<T> = (state: State, action: T) => State;

export type SquadListReducer =
  | Reducer<DummyAction>
  | Reducer<SquadListContainerCreatedAction>
  | Reducer<SquadListAddPilotAction>;

export type GlobalSquadListReducer =
  | GlobalReducer<GlobalDummyAction>;

export interface ReducerMap {
  [actionName: string]: SquadListReducer;
}

export interface GlobalReducerMap {
  [actionName: string]: GlobalSquadListReducer;
}
