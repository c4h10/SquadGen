import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { TabContext } from '../../types';
import { SquadListContainerComponent } from '../../../squad-list/components/squad-list-container/squad-list-container.component';


@Component({
  selector: 'sg-tab-loader',
  templateUrl: './tab-loader.component.html',
  styleUrls: ['./tab-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabLoaderComponent implements OnInit, OnDestroy {

  @Input() context: TabContext;
  @ViewChild('tabContainer', { read: ViewContainerRef }) tab: ViewContainerRef;

  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.tabPlugin();
  }

  ngOnDestroy(): void {
    this.destroyTab();
  }

  tabPlugin() {
    this.tab.clear();
    // TODO: remove hardcoding and move to configuration
    switch (this.context.type) {
      case 'squad-list': {
        this.componentRef = this.tab.createComponent(this.resolver.resolveComponentFactory(SquadListContainerComponent));
        this.componentRef.instance.context = this.context;
        return;
      }
      default:
        return;
    }
  }

  destroyTab() {
    this.componentRef.destroy();
  }

}
