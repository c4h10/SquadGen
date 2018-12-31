import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Faction, State as GlobalState } from '../../reducers/types';
import { Observable, Subscription } from 'rxjs';
import { getConfigurationFactions } from '../../global.store';
import { ACTION_NAMES as TAB_NAVIGATION_ACTION_NAMES } from '../../../tab-navigation/actions/types';
import { CloseDialogAction } from '../../actions/global.actions';
import { MenuItem } from './types';

@Component({
  selector: 'sg-new-squad-card',
  templateUrl: './new-squad-card.component.html',
  styleUrls: ['./new-squad-card.component.scss']
})
export class NewSquadCardComponent implements OnInit, OnDestroy {

  factions$: Observable<Faction[]>;
  factionsButtonItem: MenuItem[];

  private subscriptions: Subscription = new Subscription();

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {

    this.factions$ = this.store.select(getConfigurationFactions);

    [
      this.factions$.subscribe(factions => {
        if (!factions) {
          return;
        }
        this.factionsButtonItem = factions.map((faction): MenuItem => {
          return {
            iconClass: faction.factionIcon,
            label: faction.factionName,
            actionName: TAB_NAVIGATION_ACTION_NAMES.CREATE_MATERIAL_TAB,
            payload: faction
          };
        });
      })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onClick(actionName: string, payload?: any) {
    this.store.dispatch<any>({
      type: actionName,
      payload: payload
    });

    this.store.dispatch(new CloseDialogAction());
  }
}
