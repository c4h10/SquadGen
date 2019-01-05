import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ShipAction } from '../../../global/reducers/types';

@Component({
  selector: 'sg-actions-line',
  templateUrl: './actions-line.component.html',
  styleUrls: ['./actions-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsLineComponent implements OnInit {

  @Input() actions: ShipAction[];

  constructor() { }

  ngOnInit() {
  }

}
