import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SquadConfig } from '../../store/squad-list.store';

@Component({
  selector: 'sg-squad-list-navbar',
  templateUrl: './squad-list-navbar.component.html',
  styleUrls: ['./squad-list-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListNavbarComponent implements OnInit {

  @Input() tabId: number | string;
  @Input() config: SquadConfig;

  constructor() {
  }

  ngOnInit() {
  }
}
