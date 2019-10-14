import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { MODULE_NAME } from '../types';
import { State } from '../store/squad-list.store';
import { StoreManagerService } from '../services/store-manager.service';
import { SquadListService } from '../services/squad-list.service';
import { ACTION_NAMES, SquadListContainerCreateAction, SquadListContainerCreatedAction } from '../actions';
import { map } from 'rxjs/operators';
import { withTabId } from '../../../tab-store/types';


@Injectable()
export class SquadListEffects {

  @Effect() createSquadList$: Observable<Action> = this.actions$.pipe(
    ofType(ACTION_NAMES.SQUAD_LIST_CONTAINER_CREATE),

    map((action: SquadListContainerCreateAction) => {
      return withTabId(new SquadListContainerCreatedAction(action.payload), action.payload.tabId);
    })
  );

  constructor(
    private actions$: Actions,
    private storeManager: StoreManagerService,
    private squadListService: SquadListService,
    private store: Store<State>
  ) {
    this.storeManager.init(undefined, MODULE_NAME, this.store);

  }
}
