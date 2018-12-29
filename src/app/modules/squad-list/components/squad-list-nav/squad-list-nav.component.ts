import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Faction, State as GlobalState } from '../../../global/reducers/types';
import { getConfigurationFactions, getFactionConfig } from '../../../global/global.store';


@Component({
  selector: 'sg-squad-list-nav',
  templateUrl: './squad-list-nav.component.html',
  styleUrls: ['./squad-list-nav.component.scss'],

})
export class SquadListNavComponent implements OnInit, OnDestroy {

  @Input() factionId: string;
  factionsConfig$: Observable<Faction[]>;
  factionsConfig: Faction[];
  faction: Faction;

  private subscriptions: Subscription = new Subscription();

  constructor(private globalStore: Store<GlobalState>) {
  }

  ngOnInit() {
    this.factionsConfig$ = this.globalStore.select(getConfigurationFactions);
    [
      this.factionsConfig$.subscribe((configs) => {
        const newConfig = configs.map( faction => {
          faction.pilots.sort((a, b) => b.points - a.points);
          return faction;
        });
        this.factionsConfig = newConfig;
        this.faction = this.factionsConfig.find((faction) => faction.factionId === this.factionId);
      })
    ].forEach(s => this.subscriptions.add(s));
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
