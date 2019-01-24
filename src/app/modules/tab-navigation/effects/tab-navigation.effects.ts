import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ACTION_NAMES } from '../actions/types';
import { Store } from '@ngrx/store';
import { map, mergeMap, mergeAll } from 'rxjs/operators';
import { SetActiveTabAction } from '../actions/tab-navigation.actions';
import { State } from '../reducers/types';
import { getLastCreatedTab } from '../tab-navigation.store';
import { SquadListContainerCreateAction } from '../../squad-list/actions';
import { ActionWithPayload } from '../types';
import { Faction } from '../../global/reducers/types';
import { CreateTabAction } from '../../../tab-store/global-store-tab-actions';

@Injectable()
export class TabNavigationEffects {

  @Effect()
  createTab$ = this.actions$
    .pipe(
      ofType(ACTION_NAMES.CREATE_MATERIAL_TAB),

      mergeMap(action => this.store.select(getLastCreatedTab)
        .pipe(
          map(activeTab => {
            const createAction = action as ActionWithPayload<any>;
            return ({activeTab, createAction});
          })
        )
      ),
      map(({activeTab, createAction}) => {
          return [
            new SetActiveTabAction({activeId: activeTab}),
            new CreateTabAction({id: activeTab, feature: 'squadlist'}),
            new SquadListContainerCreateAction({
              tabId: activeTab,
              config: {
                // TODO: hyperspace type
                isHyperspace: false,
                points: 0,
                totalPoints: 200,
                faction: createAction.payload.faction,
                upgrades: createAction.payload.upgrades
              }
            })
          ];
        }
      ),
      mergeAll()
    );

  constructor(private actions$: Actions, private store: Store<State>) {
  }
}
