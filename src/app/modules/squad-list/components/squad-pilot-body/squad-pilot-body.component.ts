import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SquadPilot} from '../../store/squad-list.store';
import {SQUAD_LIST_NAV_ACTION} from '../../types';

@Component({
  selector: 'sg-squad-pilot-body',
  templateUrl: './squad-pilot-body.component.html',
  styleUrls: ['./squad-pilot-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadPilotBodyComponent implements OnInit {

  @Input() squadPilot: SquadPilot;
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  actionUpgrade(event) {
    this.action.emit({
      type: SQUAD_LIST_NAV_ACTION.UPGRADE,
      data: {
        type: event.type,
        uuid: this.squadPilot.UUID
      }
    });

  }
}
