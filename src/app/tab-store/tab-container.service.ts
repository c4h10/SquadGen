import { Injectable } from '@angular/core';
import { select, Selector, Store } from '@ngrx/store';
import { AnyFn } from '@ngrx/store/src/selector';
import { Observable, EMPTY } from 'rxjs';
import { SelectorCache } from './selector-cache';
import { ActionWithPayload } from './types';



@Injectable()
export class TabContainerService<T extends object> {
    private tabId: string | number | undefined;
    private store: Store<T> | undefined;
    private selectorCache: SelectorCache | null = null;

    init(tabId: string | number | undefined, featureName: string, store: Store<T>) {
        this.tabId = tabId;
        this.store = store;
        this.selectorCache = new SelectorCache(featureName);
        // (window as Dictionary<any>)['ngRxStore'] = store;
    }

    dispatch<P>(action: ActionWithPayload<P>, tabId = this.tabId): void {
        if (this.store) {
            this.store.dispatch({...action, tabId: tabId});
        }
    }

    select<R = any>(
        selectors: Selector<any, any> | Selector<any, any>[],
        projector?: AnyFn,
        tabId: string | number | undefined = this.tabId
    ): Observable<R> {
        if (!this.store || !this.selectorCache) {
          return EMPTY;
        }

        const selectorList = Array.isArray(selectors) ? selectors : [selectors];
        const result = this.selectorCache.getSelector({
            selectors: selectorList,
            tabId,
            projector
        });
        return this.store.pipe(select(result));
    }


    selectGlobal<R = any>(selector: Selector<any, R>): Observable<R> {
        return this.select<R>(selector, (containerState, globalState) => globalState);
    }
}
