import { Component, Input, OnInit } from '@angular/core';
import { ShipAction } from '../../reducers/types';

@Component({
  selector: 'sg-actions-line',
  templateUrl: './actions-line.component.html',
  styleUrls: ['./actions-line.component.scss']
})
export class ActionsLineComponent implements OnInit {

  @Input() actions: ShipAction[];

  constructor() { }

  ngOnInit() {
  }

}
