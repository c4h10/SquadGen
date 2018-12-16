import { Component, Input, OnInit } from '@angular/core';
import { PluginContext } from '../../../plugin-manager/types';

@Component({
  selector: 'sg-squad-list-view',
  templateUrl: './squad-list-view.component.html',
  styleUrls: ['./squad-list-view.component.scss']
})
export class SquadListViewComponent implements OnInit {

  @Input() context: PluginContext;

  constructor() { }

  ngOnInit() {
  }

}
