import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Faction, State as GlobalState } from '../../modules/global/reducers/types';
import { Store } from '@ngrx/store';
import { ConfigurationFetchAction } from '../../modules/global/actions/global.actions';
import { ACTION_NAMES } from '../../modules/global/actions/types';
import { ACTION_NAMES as TAB_NAVIGATION_ACTION_NAMES } from '../../modules/tab-navigation/actions/types';
import { Observable, Subscription } from 'rxjs';
import { getConfigurationFactions } from '../../modules/global/global.store';
import { MenuItem } from '../nav-menu/types';

@Component({
  selector: 'sg-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  factions$: Observable<Faction[]>;
  factionsMenuItem: MenuItem[];

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.store.dispatch<ConfigurationFetchAction>({
      type: ACTION_NAMES.CONFIGURATION_FETCH
    });

    this.factions$ = this.store.select(getConfigurationFactions);

    [
      this.factions$.subscribe(factions => {
        if (!factions) {
          return;
        }
        this.factionsMenuItem = factions.map((faction): MenuItem => {
          return {
            iconClass: faction.factionIcon,
            label: faction.factionName,
            actionName: TAB_NAVIGATION_ACTION_NAMES.CREATE_TAB,
            payload: faction
          };
        });
      })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  actionEvent(event) {
    this.store.dispatch<any>({
      type: event.type,
      payload: event.payload
    });
  }

}
