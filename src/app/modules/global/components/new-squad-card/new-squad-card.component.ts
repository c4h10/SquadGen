import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Faction, State as GlobalState, Upgrades } from '../../reducers/types';
import { Observable, Subscription } from 'rxjs';
import { getConfigurationFactions, getUpgrades } from '../../global.store';
import { ACTION_NAMES as TAB_NAVIGATION_ACTION_NAMES } from '../../../tab-navigation/actions/types';
import { CloseDialogAction } from '../../actions/global.actions';
import { MenuItem } from './types';

@Component({
  selector: 'sg-new-squad-card',
  templateUrl: './new-squad-card.component.html',
  styleUrls: ['./new-squad-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSquadCardComponent implements OnInit, OnDestroy {

  factions$: Observable<Faction[]>;
  upgrades$: Observable<Upgrades>;
  upgrades: Upgrades;
  factionsButtonItem: MenuItem[];

  private subscriptions: Subscription = new Subscription();

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {

    this.factions$ = this.store.select(getConfigurationFactions);
    this.upgrades$ = this.store.select(getUpgrades);

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
      }),
      this.upgrades$.subscribe(upgrades => {
        this.upgrades = upgrades;
      })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onClick(actionName: string, payload?: any) {
    this.store.dispatch<any>({
      type: actionName,
      payload: {faction: payload, upgrades: this.upgrades}
    });

    this.store.dispatch(new CloseDialogAction());
  }
}
