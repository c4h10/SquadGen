import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pilot } from '../../reducers/types';

@Component({
  selector: 'sg-stats-line',
  templateUrl: './stats-line.component.html',
  styleUrls: ['./stats-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsLineComponent implements OnInit {

  @Input() pilot: Pilot;

  constructor() { }

  ngOnInit() {
  }

}
