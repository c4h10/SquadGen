import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { State, Tab } from '../../reducers/types';
import { Store } from '@ngrx/store';
import { TabsConfigurationAction } from '../../actions/tab-navigation.actions';
import { Observable, Subscription } from 'rxjs';
import { getActiveTab, getTabs } from '../../tab-navigation.store';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'sg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {

  @Input() config?: any;

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
    this.store.dispatch(new TabsConfigurationAction(this.config));
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
    setTimeout(() => {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      const ps = new PerfectScrollbar(elemSidebar);
    });
  }

  selectTab(tabIndex: number): void {
    this.activeFactionId = this.tabs.find((tab) => tab.id === tabIndex).factionId;
  }
}
