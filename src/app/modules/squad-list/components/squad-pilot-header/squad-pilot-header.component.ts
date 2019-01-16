import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SquadPilot } from '../../store/squad-list.store';
import { ResponsiveService } from '../../../../services/responsive.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sg-squad-pilot-header',
  templateUrl: './squad-pilot-header.component.html',
  styleUrls: ['./squad-pilot-header.component.scss']
})
export class SquadPilotHeaderComponent implements OnInit, OnDestroy {

  @Input() squadPilot: SquadPilot;

  public isMobile$: Observable<boolean>;
  public isMobile: boolean;

  private subscriptions: Subscription = new Subscription();

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
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


  onMenuClick(event) {
    event.stopPropagation();
  }

  onActionClick(event, type, preventDefault: boolean = true) {
    if (preventDefault) {
      event.stopPropagation();
    }
    console.log(type);
  }

}
