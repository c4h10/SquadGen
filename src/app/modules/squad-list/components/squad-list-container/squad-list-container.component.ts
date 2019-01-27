import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoreManagerService } from '../../services/store-manager.service';
import { SquadConfig, SquadPilot, State } from '../../store/squad-list.store';
import { Store } from '@ngrx/store';
import { TabContext } from '../../../tab-navigation/types';
import { getSquadConfig, getSquadPilots, getTabId } from '../../selectors/squad-list.selectors';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { SQUAD_LIST_NAV_ACTION, SquadListNavAction } from '../../types';
import { withTabId } from '../../../../tab-store/types';
import {
  SquadListDuplicatePilotAction, SquadListMoveDownPilotAction,
  SquadListMoveUpPilotAction,
  SquadListRemovePilotAction, SquadListRemoveUpgradeAction
} from '../../actions';
import { OpenDialogAction } from '../../../global/actions/global.actions';

import { State as GlobalState, Upgrade, Upgrades } from '../../../global/reducers/types';
import { UpgradeDialogComponent } from '../../../global/components/upgrade-dialog/upgrade-dialog.component';
import { UpgradeRestrictionsService } from '../../services/upgrade-restrictions.service';

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
    private globalStore: Store<GlobalState>,
    private restrictionService: UpgradeRestrictionsService,
    private changeDetector: ChangeDetectorRef
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
          this.changeDetector.markForCheck();
        }),
      this.squadPilots$
        .subscribe(squad => {
          this.squadPilots = squad;
          this.changeDetector.markForCheck();
        })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // TODO: refactor switch cases
  actionHandler(event: SquadListNavAction) {
    switch (event.type) {
      case SQUAD_LIST_NAV_ACTION.UPGRADE:
        this.globalStore.dispatch<OpenDialogAction>(
          new OpenDialogAction({
            componentOrTemplateRef: UpgradeDialogComponent,
            config: {
              data: {
                tabId: this.tabId,
                config: this.config,
                type: event.data.type,
                upgrades: this.applyRestrictions(this.config.upgrades[event.data.type], event.data.squadPilot),
                squadPilot: event.data.squadPilot
              }
            }
          })
        );
        break;
      case SQUAD_LIST_NAV_ACTION.REMOVE_UPGRADE:
        this.storeManager.dispatch(withTabId(new SquadListRemoveUpgradeAction({
          squadPilot: event.data.squadPilot,
          upgrade: event.data.upgrade}), this.tabId));
        break;
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

  private applyRestrictions(upgrades: Upgrade[], squadPilot: SquadPilot): Upgrade[] {
    // FACTION
    let result: Upgrade[] = upgrades.filter((item) => item.factions.includes(this.config.faction.factionId));

    // RESTRICTIONS
    result = this.restrictionService.applyRestrictions(result, squadPilot);

    return result.sort((a, b) => {
      return (b.points - a.points);
    });
  }

}
