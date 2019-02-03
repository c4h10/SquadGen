import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SquadPilot} from '../../store/squad-list.store';
import {SQUAD_LIST_NAV_ACTION} from '../../types';

@Component({
  selector: 'sg-squad-pilot-body',
  templateUrl: './squad-pilot-body.component.html',
  styleUrls: ['./squad-pilot-body.component.scss']
})
export class SquadPilotBodyComponent implements OnInit {

  @Input() squadPilot: SquadPilot;
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  actionUpgrade(event) {
    switch (event.type) {
      case SQUAD_LIST_NAV_ACTION.UPGRADE:
        this.action.emit({
          type: SQUAD_LIST_NAV_ACTION.UPGRADE,
          data: {
            type: event.data.upgradeType,
            squadPilot: this.squadPilot
          }
        });
      break;
      case SQUAD_LIST_NAV_ACTION.REMOVE_UPGRADE:
        this.action.emit({
          type: SQUAD_LIST_NAV_ACTION.REMOVE_UPGRADE,
          data: {
            upgrade: event.data.upgrade.upgrade,
            squadPilot: this.squadPilot
          }
        });
      break;
    }
  }
}
