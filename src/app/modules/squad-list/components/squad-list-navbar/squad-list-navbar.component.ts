import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-squad-list-navbar',
  templateUrl: './squad-list-navbar.component.html',
  styleUrls: ['./squad-list-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListNavbarComponent implements OnInit {

  @Input() tabId: number | string;

  constructor() {
  }

  ngOnInit() {
  }
}
