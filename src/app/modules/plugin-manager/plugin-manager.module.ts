import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginLoaderComponent } from './components/plugin-loader/plugin-loader.component';
import { SquadListModule } from '../squad-list/squad-list.module';
import { SquadListViewComponent } from '../squad-list/components/squad-list-view/squad-list-view.component';

@NgModule({
  declarations: [PluginLoaderComponent, SquadListViewComponent],
  imports: [
    CommonModule,
    SquadListModule
  ],
  exports: [
    PluginLoaderComponent
  ],
  entryComponents: [SquadListViewComponent]
})
export class PluginManagerModule { }
