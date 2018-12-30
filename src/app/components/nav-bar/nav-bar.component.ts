import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { State as GlobalState } from '../../modules/global/reducers/types';
import { Store } from '@ngrx/store';
import { ConfigurationFetchAction, OpenDialogAction } from '../../modules/global/actions/global.actions';
import { ACTION_NAMES } from '../../modules/global/actions/types';
import { Subscription } from 'rxjs';
import { NewSquadCardComponent } from '../../modules/global/components/new-squad-card/new-squad-card.component';

@Component({
  selector: 'sg-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.store.dispatch<ConfigurationFetchAction>({
      type: ACTION_NAMES.CONFIGURATION_FETCH
    });

    this.store.dispatch<OpenDialogAction>(
      new OpenDialogAction({
        componentOrTemplateRef: NewSquadCardComponent,
        config: {
          width: '500px'
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  actionEvent(event) {
    this.store.dispatch<any>({
      type: event.type,
      payload: event.payload
    });
  }

  newSquadDialog() {
    this.store.dispatch<OpenDialogAction>(
      new OpenDialogAction({
        componentOrTemplateRef: NewSquadCardComponent,
        config: {
          width: '500px'
        }
      })
    );
  }
}
