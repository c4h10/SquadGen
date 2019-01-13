import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Faction, Pilot, Ship, State as GlobalState } from '../../../global/reducers/types';
import { Observable, Subscription } from 'rxjs';
import { getConfigurationFactions } from '../../../global/global.store';

@Component({
  selector: 'sg-dials-container',
  templateUrl: './dials-container.component.html',
  styleUrls: ['./dials-container.component.scss']
})
export class DialsContainerComponent implements OnInit, OnDestroy {

  factionsConfig$: Observable<Faction[]>;
  factionsConfig: Faction[];
  ships: Ship[];
  queryString: string;
  private subscriptions: Subscription = new Subscription();

  constructor(private globalStore: Store<GlobalState>) {
  }

  ngOnInit() {
    this.factionsConfig$ = this.globalStore.select(getConfigurationFactions);
    [
      this.factionsConfig$.subscribe((configs) => {
        if (!configs) {
          return;
        }
        this.factionsConfig = configs;

        this.ships = configs.reduce((acc: Ship[], faction) => {
          acc.push(...faction.ships);
          return acc;
        }, []);
        this.ships.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      })
    ].forEach(s => this.subscriptions.add(s));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  filterShip (value: string) {
    console.log(value);
  }
}
