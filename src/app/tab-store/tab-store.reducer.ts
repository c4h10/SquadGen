import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { ActionWithPayload, TabContainerAction, FeatureState } from './types';
import { GlobalStoreTabActionTypes } from './global-store-tab-actions';

export const identityReducer = (state: any) => state;

export function tabReducer<T>(
    featureName: string,
    featureState: FeatureState<any>,
    defaultFeatureState: FeatureState<T>,
    defaultContainerState: T,
    action: TabContainerAction<any>,
    containerReducerMap: ActionReducerMap<any>,
    globalReducerMap: ActionReducerMap<any>
): FeatureState<any> {
    const {type, payload, tabId} = action;
    let reducer: ActionReducer<any, ActionWithPayload<any>>;

    if (action.type === GlobalStoreTabActionTypes.KILL_SESSION) {
        return {...defaultFeatureState};
    }

    if (action.type === GlobalStoreTabActionTypes.CREATE_TAB && action.payload.feature === featureName) {
        return {
            ...featureState,
            containers: {
                ...featureState.containers,
                [action.payload.id]: featureState.containers[action.payload.id] || defaultContainerState
            }
        };
    }

    if (action.type === GlobalStoreTabActionTypes.DESTROY_TAB && action.payload.feature === featureName) {
        const newFeatureState = {...featureState, containers: {...featureState.containers}};
        delete newFeatureState.containers[action.payload.id];
        return newFeatureState;
    }

    if ('tabId' in action && action.tabId in featureState.containers) {
        const containerState = featureState.containers[tabId] || defaultContainerState;
        reducer = containerReducerMap[type] || identityReducer;
        const result = reducer(containerState, {type, payload});
        return {
            ...featureState,
            containers: {
                ...featureState.containers,
                [tabId]: {...result}
            }
        };
    }

    reducer = globalReducerMap[type] || identityReducer;
    return reducer(featureState, {type, payload});
}
