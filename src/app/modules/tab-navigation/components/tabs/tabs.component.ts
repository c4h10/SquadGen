import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { State, Tab } from '../../reducers/types';
import { Store } from '@ngrx/store';
import { TabsConfigurationAction } from '../../actions/tab-navigation.actions';
import { getTabs } from '../../selectors/tab-navigation.selectors';
import { EMPTY, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, OnDestroy {

  @Input() config?: any;

  tabs$: Observable<Tab[]> = EMPTY;
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
      })
    ].forEach(s => this.subscriptions.add(s));

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
