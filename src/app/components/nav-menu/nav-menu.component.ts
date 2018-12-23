import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './types';

@Component({
  selector: 'sg-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent implements OnInit {
  @Input() items: MenuItem[];
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(actionName: string, payload?: any) {
    this.action.emit({
      type: actionName,
      payload: payload
    });
  }

}
