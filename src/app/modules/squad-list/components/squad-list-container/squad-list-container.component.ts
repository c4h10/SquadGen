import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoreManagerService } from '../../services/store-manager.service';
import { SquadConfig, SquadPilot, State } from '../../store/squad-list.store';
import { Store } from '@ngrx/store';
import { TabContext } from '../../../tab-navigation/types';
import { getSquadConfig, getSquadPilots, getTabId } from '../../selectors/squad-list.selectors';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { SQUAD_LIST_NAV_ACTION, SquadListNavAction } from '../../types';
import { withTabId } from '../../../../tab-store/types';
import {
  SquadListAddPilotAction,
  SquadListDuplicatePilotAction, SquadListMoveDownPilotAction,
  SquadListMoveUpPilotAction,
  SquadListRemovePilotAction
} from '../../actions';


@Component({
  selector: 'sg-squad-list-container',
  templateUrl: './squad-list-container.component.html',
  styleUrls: ['./squad-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListContainerComponent implements OnInit, OnDestroy {

  @Input() context: TabContext;
  tabId?: string | number;
  tabId$: Observable<string | number> = EMPTY;

  config: SquadConfig;
  config$: Observable<SquadConfig>;

  squadPilots: SquadPilot[];
  squadPilots$: Observable<SquadPilot[]>;

  subscriptions: Subscription = Subscription.EMPTY;

  constructor(
    private storeManager: StoreManagerService,
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
    this.storeManager.init(this.context.tabId, 'squadlist', this.store);
    this.subscriptions = new Subscription();

    this.tabId$ = this.storeManager.select(getTabId);
    this.config$ = this.storeManager.select(getSquadConfig);
    this.squadPilots$ = this.storeManager.select(getSquadPilots);

    [
      this.tabId$
        .subscribe(tabId => {
          this.tabId = tabId;
        }),
      this.config$
        .subscribe(config => {
          this.config = config;
        }),
      this.squadPilots$
        .subscribe(squad => {
          this.squadPilots = squad;
        })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  actionHandler(event: SquadListNavAction) {
    switch (event.type) {
      case SQUAD_LIST_NAV_ACTION.REMOVE_FROM_SQUAD:
        this.storeManager.dispatch(withTabId(new SquadListRemovePilotAction({squadPilot: event.data.squadPilot}), this.tabId));
        break;
      case SQUAD_LIST_NAV_ACTION.MOVE_UP:
        this.storeManager.dispatch(withTabId(new SquadListMoveUpPilotAction({squadPilot: event.data.squadPilot}), this.tabId));
        break;
      case SQUAD_LIST_NAV_ACTION.MOVE_DOWN:
        this.storeManager.dispatch(withTabId(new SquadListMoveDownPilotAction({squadPilot: event.data.squadPilot}), this.tabId));
        break;
      case SQUAD_LIST_NAV_ACTION.DUPLICATE:
        this.storeManager.dispatch(withTabId(new SquadListDuplicatePilotAction({squadPilot: event.data.squadPilot}), this.tabId));
        break;
    }
  }
}
