import { ActionWithPayload } from './types';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';


export function pseudoReducer<T>(
  state: T,
  defaultState: T,
  action: ActionWithPayload<any>,
  reducerMap: ActionReducerMap<any>
): ActionReducer<any, ActionWithPayload<any>> {
  const {type, payload} = action;
  let reducer: ActionReducer<any, ActionWithPayload<any>>;
  const resultState = state || defaultState;

  reducer = reducerMap[type] || (() => resultState);

  return reducer(resultState, {type, payload});
}
