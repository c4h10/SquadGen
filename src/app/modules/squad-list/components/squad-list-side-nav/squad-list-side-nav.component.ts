import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Faction, State as GlobalState } from '../../../global/reducers/types';
import { getFactionConfig } from '../../../global/global.store';
import { SQUAD_LIST_NAV_ACTION, SquadListNavAction } from '../../types';
import { OpenDialogAction } from '../../../global/actions/global.actions';
import { DialDialogComponent } from '../../../global/components/dial-dialog/dial-dialog.component';
import { PilotDialogComponent } from '../../../global/components/pilot-dialog/pilot-dialog.component';
import { StoreManagerService } from '../../services/store-manager.service';
import { withTabId } from '../../../../tab-store/types';
import { SquadListAddPilotAction } from '../../actions';

@Component({
  selector: 'sg-squad-list-side-nav',
  templateUrl: './squad-list-side-nav.component.html',
  styleUrls: ['./squad-list-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SquadListSideNavComponent implements OnInit, OnDestroy {

  @Input() factionId: string;
  @Input() tabId: string | number;
  faction$: Observable<Faction>;
  faction: Faction;

  private subscriptions: Subscription = new Subscription();

  constructor(private globalStore: Store<GlobalState>, private storeManager: StoreManagerService) {
  }

  ngOnInit() {
    this.faction$ = this.globalStore.select(getFactionConfig, this.factionId);
    [
      this.faction$.subscribe((config) => {
        const newConfig = {
          ...config,
          pilots: config.pilots.sort((a, b) => b.points - a.points)
        };

        this.faction = newConfig;
      })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  actionHandler(event: SquadListNavAction) {
    switch (event.type) {
      case SQUAD_LIST_NAV_ACTION.DIAL:
        this.globalStore.dispatch<OpenDialogAction>(
          new OpenDialogAction({
            componentOrTemplateRef: DialDialogComponent,
            config: {
              data: event.data
            }
          })
        );
        break;
      case SQUAD_LIST_NAV_ACTION.PILOT:
        this.globalStore.dispatch<OpenDialogAction>(
          new OpenDialogAction({
            componentOrTemplateRef: PilotDialogComponent,
            config: {
              data: event.data
            }
          })
        );
        break;
      case SQUAD_LIST_NAV_ACTION.ADD_TO_SQUAD:
        this.storeManager.dispatch(withTabId(new SquadListAddPilotAction({pilot: event.data.pilot}), this.tabId));
        break;
    }
  }
}
