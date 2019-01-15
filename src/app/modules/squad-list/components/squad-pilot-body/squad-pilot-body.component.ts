import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SquadPilot } from '../../store/squad-list.store';

@Component({
  selector: 'sg-squad-pilot-body',
  templateUrl: './squad-pilot-body.component.html',
  styleUrls: ['./squad-pilot-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadPilotBodyComponent implements OnInit {

  @Input() squadPilot: SquadPilot;

  constructor() {
  }

  ngOnInit() {
  }

}
