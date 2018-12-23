import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GlobalService } from '../services/global.service';
import { ACTION_NAMES } from '../actions/types';
import { of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConfigurationFetchedAction, ErrorAction } from '../actions/global.actions';
import { EndpointProtocolTypes as ApiTypes } from '../types';
import { Configuration } from '../reducers/types';

@Injectable()
export class GlobalEffects {

  @Effect()
  fetchConfiguration$ = this.actions$
    .pipe(
      ofType(ACTION_NAMES.CONFIGURATION_FETCH),
      switchMap(
        (action: Action) => this.globalService.getConfiguration()
          .pipe(
            map((response: ApiTypes.ConfigurationResponse) => {
              return new ConfigurationFetchedAction(response as Configuration);
            }),
            catchError(err => {
              console.log(err);
              return observableOf(new ErrorAction());
            })
          )
      )
  );

  constructor (private actions$: Actions, private globalService: GlobalService) {}
}
