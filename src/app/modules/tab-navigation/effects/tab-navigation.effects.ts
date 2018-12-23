import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ACTION_NAMES } from '../actions/types';
import { Store } from '@ngrx/store';
import { map, switchMap, first } from 'rxjs/operators';
import { SetActiveTabAction } from '../actions/tab-navigation.actions';
import { State } from '../reducers/types';
import { getLatestTab } from '../tab-navigation.store';

@Injectable()
export class TabNavigationEffects {

  @Effect()
  createTab$ = this.actions$
    .pipe(
      ofType(ACTION_NAMES.CREATE_TAB),
      switchMap(action => this.store.select(getLatestTab)
        .pipe(
          map(data => ({action, data}))
        )
      ),
      map( ({action, data}) => {
          return new SetActiveTabAction({activeId: data});
        }
      )
  );

  constructor (private actions$: Actions, private store: Store<State>) {}
}
