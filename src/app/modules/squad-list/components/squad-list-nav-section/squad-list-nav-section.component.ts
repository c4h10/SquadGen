import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pilot, Ship } from '../../../global/reducers/types';

@Component({
  selector: 'sg-squad-list-nav-section',
  templateUrl: './squad-list-nav-section.component.html',
  styleUrls: ['./squad-list-nav-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListNavSectionComponent implements OnInit {

  @Input() ship: Ship;
  @Input() pilots: Pilot[];

  collapsed: boolean;

  constructor() {
  }

  ngOnInit() {
    this.collapsed = true;
  }

  toggleExpand(event) {
    this.collapsed = !this.collapsed;
  }

  addToSquad (pilot: Pilot) {
    console.log(pilot);
  }
}
