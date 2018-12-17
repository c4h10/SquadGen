import { State } from '../store/squad-list.store';
import { GlobalDummyAction } from '../actions';


export function reducer(state: State, action: GlobalDummyAction): State {

  return {
    ...state,
    configuration: {
      test: 'test config'
    }
  };
}
