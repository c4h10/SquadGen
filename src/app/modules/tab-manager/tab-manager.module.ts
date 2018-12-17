import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLoaderComponent } from './components/tab-loader/tab-loader.component';
import { SquadListModule } from '../squad-list/squad-list.module';
import { SquadListContainerComponent } from '../squad-list/components/squad-list-container/squad-list-container.component';

@NgModule({
  declarations: [TabLoaderComponent],
  imports: [
    CommonModule,
    SquadListModule
  ],
  exports: [
    TabLoaderComponent
  ],
  entryComponents: [SquadListContainerComponent]
})
export class TabManagerModule { }
