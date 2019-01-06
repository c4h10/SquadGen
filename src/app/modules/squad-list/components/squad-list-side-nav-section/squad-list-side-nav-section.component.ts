import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Pilot, Ship } from '../../../global/reducers/types';
import { WindowRefService } from '../../../../services/window-ref.service';
import { MatDialog } from '@angular/material';
import { SQUAD_LIST_NAV_ACTION } from '../../types';

@Component({
  selector: 'sg-squad-list-side-nav-section',
  templateUrl: './squad-list-side-nav-section.component.html',
  styleUrls: ['./squad-list-side-nav-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListSideNavSectionComponent implements OnInit {

  @Input() ship: Ship;
  @Input() pilots: Pilot[];

  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  collapsed: boolean;

  constructor(private windowRef: WindowRefService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.collapsed = true;
  }

  toggleExpand(event) {
    this.collapsed = !this.collapsed;
  }

  addToSquad(pilot: Pilot) {
    console.log(pilot);
  }

  showShipDial(event, ship: Ship) {
    event.stopPropagation();
    this.action.emit({
      type: SQUAD_LIST_NAV_ACTION.DIAL,
      data: {
        ship: ship
      }
    });
  }

  showPilotInfo(event) {
    event.stopPropagation();
    console.log(event);
  }

  // TODO: Make service
  get isMobileMenu() {
    if (this.windowRef.nativeWindow.innerWidth > 991) {
      return false;
    }
    return true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // TODO: ON RESIZE EVENT
  }
}
