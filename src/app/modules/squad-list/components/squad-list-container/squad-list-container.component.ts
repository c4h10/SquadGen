import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StoreManagerService } from '../../services/store-manager.service';
import { State } from '../../store/squad-list.store';
import { Store } from '@ngrx/store';
import { TabContext } from '../../../tab-navigation/types';
import { getTabId } from '../../selectors/squad-list.selectors';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { DummyAction } from '../../actions';


@Component({
  selector: 'sg-squad-list-container',
  templateUrl: './squad-list-container.component.html',
  styleUrls: ['./squad-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListContainerComponent implements OnInit {

  @Input() context: TabContext;
  tabId?: string | number;
  tabId$: Observable<string | number> = EMPTY;


  subscriptions: Subscription = Subscription.EMPTY;

  constructor(
    private storeManager: StoreManagerService,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    console.log(this.context.tabId);
    this.storeManager.init(this.context.tabId, 'squadlist', this.store);
    this.subscriptions = new Subscription();

    this.tabId$ = this.storeManager.select(getTabId);

    [
      this.tabId$
        .subscribe(tabId => {
          this.tabId = tabId;
        })
    ].forEach(s => this.subscriptions.add(s));

    this.storeManager.dispatch(new DummyAction({tabId: 'tmp'}));
  }
}
