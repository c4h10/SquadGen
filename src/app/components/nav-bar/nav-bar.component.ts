import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Faction, State as GlobalState } from '../../modules/global/reducers/types';
import { Store } from '@ngrx/store';
import { ConfigurationFetchAction, OpenDialogAction } from '../../modules/global/actions/global.actions';
import { ACTION_NAMES } from '../../modules/global/actions/types';
import { ACTION_NAMES as TAB_NAVIGATION_ACTION_NAMES } from '../../modules/tab-navigation/actions/types';
import { Observable, Subscription } from 'rxjs';
import { getConfigurationFactions } from '../../modules/global/global.store';
import { MenuItem } from '../nav-menu/types';
import { NewSquadCardComponent } from '../../modules/global/components/new-squad-card/new-squad-card.component';

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

    this.store.dispatch<OpenDialogAction>(
      new OpenDialogAction({
        componentOrTemplateRef: NewSquadCardComponent,
        config: {
          width: '500px'
        }
      })
    );

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


  actionEvent(event) {
    this.store.dispatch<any>({
      type: event.type,
      payload: event.payload
    });
  }

  newSquadDialog() {
    this.store.dispatch<OpenDialogAction>(
      new OpenDialogAction({
        componentOrTemplateRef: NewSquadCardComponent,
        config: {
          width: '500px'
        }
      })
    );
  }
}
