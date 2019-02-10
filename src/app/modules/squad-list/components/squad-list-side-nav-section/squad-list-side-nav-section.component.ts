import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Pilot, Ship } from '../../../global/reducers/types';
import { MatDialog } from '@angular/material';
import { SQUAD_LIST_NAV_ACTION } from '../../types';
import { Observable, Subscription } from 'rxjs';
import { ResponsiveService } from '../../../../services/responsive.service';

@Component({
  selector: 'sg-squad-list-side-nav-section',
  templateUrl: './squad-list-side-nav-section.component.html',
  styleUrls: ['./squad-list-side-nav-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquadListSideNavSectionComponent implements OnInit, OnDestroy {

  @Input() ship: Ship;
  @Input() pilots: Pilot[];
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  public isMobile$: Observable<boolean>;
  public isMobile: boolean;
  private subscriptions: Subscription = new Subscription();

  collapsed: boolean;

  constructor(public dialog: MatDialog, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.collapsed = true;

    this.isMobile$ = this.responsiveService.getMobileStatus();
    [
      this.isMobile$.subscribe(isMobile => {
        this.isMobile = isMobile;
      })
    ].forEach(s => this.subscriptions.add(s));
    this.responsiveService.checkWidth();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleExpand(event) {
    this.collapsed = !this.collapsed;
  }

  addToSquad(event, pilot: Pilot) {
    this.action.emit({
      type: SQUAD_LIST_NAV_ACTION.ADD_TO_SQUAD,
      data: {
        pilot: pilot
      }
    });
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

  showPilotInfo(event, pilot: Pilot) {
    event.stopPropagation();
    this.action.emit({
      type: SQUAD_LIST_NAV_ACTION.PILOT,
      data: {
        pilot: pilot
      }
    });
  }
}
