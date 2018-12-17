import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CreateTabAction } from '../../../../tab-store/global-store-tab-actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/types';


// TODO: tab? clonning copying and creating new store

@Component({
  selector: 'sg-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent implements OnInit {

  @Input() id: number;
  @Input() type: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new CreateTabAction({id: this.id, feature: 'squadlist'}));
  }

}
