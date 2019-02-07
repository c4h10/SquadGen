import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Upgrade } from '../../../global/reducers/types';
import { SQUAD_LIST_NAV_ACTION } from '../../types';
import { SlotUpgrade } from '../../store/squad-list.store';

@Component({
  selector: 'sg-upgrade-buttons',
  templateUrl: './upgrade-buttons.component.html',
  styleUrls: ['./upgrade-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeButtonsComponent implements OnInit {

  @Input() upgrades: SlotUpgrade[];
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  addUpgrade(event) {
    this.action.emit({
      type: SQUAD_LIST_NAV_ACTION.UPGRADE,
      data: {
        upgradeType: event.type
      }
    });
  }

  removeUpgrade(upgrade) {
    this.action.emit({
      type: SQUAD_LIST_NAV_ACTION.REMOVE_UPGRADE,
      data: {
        upgrade: upgrade
      }
    });
  }


  getCssClass(type): string {
    if (type.toLowerCase() === 'configuration') {
      return `xwing-miniatures-font xwing-miniatures-font-config`;
    }
    return `xwing-miniatures-font xwing-miniatures-font-${type.toLowerCase()}`;
  }
}
