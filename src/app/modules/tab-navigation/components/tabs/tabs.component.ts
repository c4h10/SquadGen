import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { State, Tab } from '../../reducers/types';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getActiveTab, getTabs } from '../../tab-navigation.store';

@Component({
  selector: 'sg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {

  activeFactionId: string;
  selectedIndex$: Observable<number | string>;

  selectedIndex: number | string;
  tabs$: Observable<Tab[]>;
  tabs: Tab[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private store: Store<State>,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.tabs$ = this.store.select(getTabs);
    this.selectedIndex$ = this.store.select(getActiveTab);

    [
      this.tabs$.subscribe(tabs => {
        if (tabs.length === 0) {

        } else if (tabs.length !== this.tabs.length && tabs.length === 1) {
          this.activeFactionId = tabs[0].factionId;
        }
        this.tabs = tabs;
        setTimeout(() => this.changeDetector.markForCheck(), 1);
      }),
      this.selectedIndex$.subscribe(selIndex => {
        this.selectedIndex = selIndex;
      })
    ].forEach(s => this.subscriptions.add(s));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  selectedTabChanged(event) {
    this.selectTab(event.index);
  }

  animationDone() {
  }

  selectTab(tabIndex: number): void {
    this.activeFactionId = this.tabs.find((tab) => tab.id === tabIndex).factionId;
  }
}
