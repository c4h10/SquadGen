import { State } from './types';
import { Action } from '@ngrx/store';
import { TabNavigationActionTypes, TabsConfigurationAction } from '../actions/tab-navigation.actions';


type Reducer<T> = (state: State, action: T) => State;

export const initialState: State = {
  tabs: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ],
  config: {
    types: []
  }
};

const tabsConfigurationReducer: Reducer<TabsConfigurationAction> = (state, action) => {
  return {...state, config: action.payload};
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case TabNavigationActionTypes.TABS_CONFIGURATION: {
      return tabsConfigurationReducer(state, action as TabsConfigurationAction);
    }
    default:
      return state;
  }
}
