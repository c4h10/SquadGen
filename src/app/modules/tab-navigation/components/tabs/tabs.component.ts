import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { State, Tab } from '../../reducers/types';
import { Store } from '@ngrx/store';
import { TabsConfigurationAction } from '../../actions/tab-navigation.actions';

import { Observable, Subscription } from 'rxjs';
import { getTabs } from '../../tab-navigation.store';

@Component({
  selector: 'sg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {

  @Input() config?: any;

  tabs$: Observable<Tab[]>;
  tabs: Tab[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store<State>,
    private changeDetector: ChangeDetectorRef
  ) {
    setTimeout(() => this.changeDetector.markForCheck(), 1);
  }

  ngOnInit(): void {
    this.store.dispatch(new TabsConfigurationAction(this.config));
    this.tabs$ = this.store.select(getTabs);

    [
      this.tabs$.subscribe(tabs => {
        this.tabs = tabs;
        console.log(this.tabs);
      })
    ].forEach(s => this.subscriptions.add(s));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
