import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoreManagerService } from '../../services/store-manager.service';
import { SquadConfig, State } from '../../store/squad-list.store';
import { Store } from '@ngrx/store';
import { TabContext } from '../../../tab-navigation/types';
import { getSquadConfig, getTabId } from '../../selectors/squad-list.selectors';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


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

  subscriptions: Subscription = Subscription.EMPTY;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private storeManager: StoreManagerService,
    private store: Store<State>,
    private changeDetector: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit() {
    this.storeManager.init(this.context.tabId, 'squadlist', this.store);
    this.subscriptions = new Subscription();

    this.tabId$ = this.storeManager.select(getTabId);
    this.config$ = this.storeManager.select(getSquadConfig);

    [
      this.tabId$
        .subscribe(tabId => {
          this.tabId = tabId;
        }),
      this.config$
        .subscribe(config => {
          this.config = config;
          })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
