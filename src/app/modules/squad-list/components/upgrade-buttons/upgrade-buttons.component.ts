import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Upgrade } from '../../../global/reducers/types';
import { SQUAD_LIST_NAV_ACTION } from '../../types';

@Component({
  selector: 'sg-upgrade-buttons',
  templateUrl: './upgrade-buttons.component.html',
  styleUrls: ['./upgrade-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeButtonsComponent implements OnInit {

  @Input() slots: string[];
  @Input() upgrades: Upgrade[];
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
    return `xwing-miniatures-font xwing-miniatures-font-${type.toLowerCase()}`;
  }
}
