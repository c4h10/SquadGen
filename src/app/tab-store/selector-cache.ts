import { createFeatureSelector, createSelector, MemoizedSelector, Selector } from '@ngrx/store';
import { GetSelectorOptions, SelectorCacheMapping } from './types';


export class SelectorCache {
    private cacheMapping: SelectorCacheMapping = {};
    private readonly featureSelector: MemoizedSelector<any, any>;

    constructor(private featureName: string) {
      console.log(featureName);
        this.featureSelector = createFeatureSelector(featureName);
    }

    getSelector(options: GetSelectorOptions) {
        // const tabId = Option.of(options.tabId).getOrElse('_GLOBAL');
        const tabId = options.tabId;
        const fnSet = [...options.selectors];
        let storage = this.cacheMapping[tabId];
        let createSelectorArgs;

        if (!storage) {
            storage = this.cacheMapping[tabId] = {
                userFunctions: [],
                storeSelectors: []
            };
        }

        if (options.projector) {
            fnSet.push(options.projector);
        }

        const storeSelector = this.findSelector(tabId, fnSet);

        if (storeSelector) {
          return storeSelector;
        }

        if (options.projector) {
            createSelectorArgs = [
                (state: any) => state[this.featureName].containers[tabId],
                ...options.selectors.map(fn => ((state: any) => {
                    return fn(state[this.featureName]);
                })),
                options.projector
            ];
        } else {
            createSelectorArgs = [
                this.featureSelector,
                ...options.selectors.map(fn => ((state: any) => fn(state.containers[tabId])))
            ];
        }

        const newStoreSelector = createSelector.apply(null, createSelectorArgs);

        storage.userFunctions.push(fnSet);
        storage.storeSelectors.push(newStoreSelector);

        return newStoreSelector;
    }

    private findSelector(tabId: string | number, functionSet: Selector<any, any>[]) {
        const storage = this.cacheMapping[tabId];
        let storeSelector: MemoizedSelector<any, any> | undefined;

        for (let i = 0; i < storage.userFunctions.length; i++) {
            if (functionSet.every((fn, j) => fn === storage.userFunctions[i][j])) {
                storeSelector = storage.storeSelectors[i];
            }
        }

        return storeSelector;
    }
}
