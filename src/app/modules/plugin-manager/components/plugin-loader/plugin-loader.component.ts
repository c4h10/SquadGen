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
import { PluginContext } from '../../types';
import { SquadListViewComponent } from '../../../squad-list/components/squad-list-view/squad-list-view.component';


@Component({
  selector: 'sg-plugin-loader',
  templateUrl: './plugin-loader.component.html',
  styleUrls: ['./plugin-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginLoaderComponent implements OnInit, OnDestroy {

  @Input() context: PluginContext;
  @ViewChild('pluginContainer', { read: ViewContainerRef }) plugin: ViewContainerRef;

  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadPlugin();
  }

  ngOnDestroy(): void {
    this.destroyPlugin();
  }

  loadPlugin() {
    this.plugin.clear();
    // TODO: remove hardcoding and move to configuration
    switch (this.context.type) {
      case 'squad-list': {
        this.componentRef = this.plugin.createComponent(this.resolver.resolveComponentFactory(SquadListViewComponent));
        this.componentRef.instance.context = this.context;
        return;
      }
      default:
        return;
    }
  }

  destroyPlugin() {
    this.componentRef.destroy();
  }

}
