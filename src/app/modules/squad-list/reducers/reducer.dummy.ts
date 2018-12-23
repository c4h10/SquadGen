import { ContainerState } from '../store/squad-list.store';
import { DummyAction } from '../actions';


export function reducer(state: ContainerState, action: DummyAction): ContainerState {
  const newState = {
    ...state,
    tmp: 'test'
  };
  return newState;
}
