import { ContainerState } from '../store/squad-list.store';
import { DummyAction } from '../actions';

export type Reducer<T> = (state: ContainerState, action: T) => ContainerState;

export type SquadListReducer =
  | Reducer<DummyAction>;

export interface ReducerMap {
  [actionName: string]: SquadListReducer;
}
