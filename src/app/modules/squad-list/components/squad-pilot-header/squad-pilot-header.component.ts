import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SquadPilot } from '../../store/squad-list.store';

@Component({
  selector: 'sg-squad-pilot-header',
  templateUrl: './squad-pilot-header.component.html',
  styleUrls: ['./squad-pilot-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadPilotHeaderComponent implements OnInit {

  @Input() squadPilot: SquadPilot;

  constructor() {
  }

  ngOnInit() {
  }

}
