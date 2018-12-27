import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GlobalService } from '../services/global.service';
import { ACTION_NAMES } from '../actions/types';
import { Observable, of as observableOf } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ConfigurationFetchedAction, ErrorAction, FactionFetchAction, FactionFetchedAction } from '../actions/global.actions';
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
              return new ConfigurationFetchedAction({data: response as Configuration});
            }),
            catchError(err => {
              console.log(err);
              return observableOf(new ErrorAction());
            })
          )
      )
  );
  @Effect()
  fetchedConfiguration$: Observable<Action> = this.actions$
    .pipe(
      ofType<Action>(ACTION_NAMES.CONFIGURATION_FETCHED),
      mergeMap((action: ConfigurationFetchedAction) => action.payload!.data.factions
        .map(faction => new FactionFetchAction(faction.factionId))
      )
    );

  @Effect()
  factionFetch$: Observable<Action> = this.actions$
    .pipe(
      ofType(ACTION_NAMES.FACTION_FETCH),
      mergeMap(
        (action: FactionFetchAction) => this.globalService.getFactionConfiguration(action.payload)
          .pipe(
            map((response: ApiTypes.FactionConfigurationResponse) => {
              return new FactionFetchedAction({factionId: action.payload, data: response});
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
