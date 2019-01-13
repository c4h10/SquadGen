import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { State as GlobalState } from '../../modules/global/reducers/types';
import { Store } from '@ngrx/store';
import { ConfigurationFetchAction, OpenDialogAction } from '../../modules/global/actions/global.actions';
import { ACTION_NAMES } from '../../modules/global/actions/types';
import { Observable, Subscription } from 'rxjs';
import { NewSquadCardComponent } from '../../modules/global/components/new-squad-card/new-squad-card.component';
import { RouteData } from '../../types';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'sg-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnDestroy {
  routeData$: Observable<RouteData>;
  routeData: RouteData;

  private subscriptions: Subscription = new Subscription();

  constructor(private store: Store<GlobalState>, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.routeData$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data),
        map(data => data as RouteData)
      );
    [
      this.routeData$.subscribe((routeData) => {
        this.routeData = routeData;
        if (this.routeData.isSquadView) {
          this.store.dispatch<OpenDialogAction>(
            new OpenDialogAction({
              componentOrTemplateRef: NewSquadCardComponent,
              config: {
                minWidth: '320px'
              }
            })
          );
        }
      })
    ].forEach(s => this.subscriptions.add(s));


    this.store.dispatch<ConfigurationFetchAction>({
      type: ACTION_NAMES.CONFIGURATION_FETCH
    });
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
