import { State, ContainerState } from '../store/squad-list.store';
import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';


export const getTabId = (state: ContainerState): string | number | undefined => state ? state.tabId : undefined;


