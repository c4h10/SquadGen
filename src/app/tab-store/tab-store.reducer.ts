import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { ActionWithPayload, TabContainerAction, TabState } from './types';
import { GlobalStoreTabActionTypes } from './global-store-tab-actions';

export const identityReducer = (state: any) => state;

export function tabReducer<T>(
    featureName: string,
    tabState: TabState<any>,
    defaultTabState: TabState<T>,
    defaultContainerState: T,
    action: TabContainerAction<any>,
    containerReducerMap: ActionReducerMap<any>,
    globalReducerMap: ActionReducerMap<any>
): TabState<any> {
    const {type, payload, tabId} = action;
    let reducer: ActionReducer<any, ActionWithPayload<any>>;
    if (action.type === GlobalStoreTabActionTypes.KILL_SESSION) {
        return {...defaultTabState};
    }

    if (action.type === GlobalStoreTabActionTypes.CREATE_TAB && action.payload.feature === featureName) {
        return {
            ...tabState,
            containers: {
                ...tabState.containers,
                [action.payload.id]: tabState.containers[action.payload.id] || defaultContainerState
            }
        };
    }

    if (action.type === GlobalStoreTabActionTypes.DESTROY_TAB && action.payload.feature === featureName) {
        const newFeatureState = {...tabState, containers: {...tabState.containers}};
        delete newFeatureState.containers[action.payload.id];
        return newFeatureState;
    }

    if ('tabId' in action && action.tabId in tabState.containers) {
        const containerState = tabState.containers[tabId] || defaultContainerState;
        reducer = containerReducerMap[type] || identityReducer;
        const result = reducer(containerState, {type, payload});
        return {
            ...tabState,
            containers: {
                ...tabState.containers,
                [tabId]: {...result}
            }
        };
    }

    reducer = globalReducerMap[type] || identityReducer;
    return reducer(tabState, {type, payload});
}
