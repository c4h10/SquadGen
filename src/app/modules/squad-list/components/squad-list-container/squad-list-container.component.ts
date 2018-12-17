import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StoreManagerService } from '../../services/store-manager.service';
import { State } from '../../store/squad-list.store';
import { Store } from '@ngrx/store';
import { TabContext } from '../../../tab-navigation/types';


@Component({
  selector: 'sg-squad-list-container',
  templateUrl: './squad-list-container.component.html',
  styleUrls: ['./squad-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListContainerComponent implements OnInit {

  @Input() context: TabContext;

  constructor(
    private storeManager: StoreManagerService,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    console.log(this.context.tabId);
    this.storeManager.init(this.context.tabId, 'squadlist', this.store);
  }

}
