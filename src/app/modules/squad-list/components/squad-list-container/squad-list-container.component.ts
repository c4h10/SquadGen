import { Component, Input, OnInit } from '@angular/core';
import { TabContext } from '../../../tab-manager/types';

@Component({
  selector: 'sg-squad-list-container',
  templateUrl: './squad-list-container.component.html',
  styleUrls: ['./squad-list-container.component.scss']
})
export class SquadListContainerComponent implements OnInit {

  @Input() context: TabContext;

  constructor() { }

  ngOnInit() {
  }

}
