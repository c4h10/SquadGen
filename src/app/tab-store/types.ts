import { Action, MemoizedSelector, Selector } from '@ngrx/store';
import { AnyFn } from '@ngrx/store/src/selector';


export interface ActionWithPayload<P> extends Action {
  payload?: P;
}

export interface TabContainerAction<P> extends ActionWithPayload<P> {
  tabId: string;
}


export interface TabState<T> {
  containers: {
    [tabId: string]: T;
  };
}

export interface SelectorCacheMapping {
  [tabId: string]: SelectorCacheStorage;
}

export interface SelectorCacheStorage {
  userFunctions: Selector<any, any>[][];
  storeSelectors: MemoizedSelector<any, any>[];
}

export interface GetSelectorOptions {
  tabId: string | number | undefined;
  selectors: Selector<any, any>[];
  projector?: AnyFn;
}

export function withTabId<P>(action: ActionWithPayload<P>, tabId: string): TabContainerAction<P> {
  return {...action, tabId};
}
