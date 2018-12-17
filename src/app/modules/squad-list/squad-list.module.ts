import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadListContainerComponent } from './components/squad-list-container/squad-list-container.component';
import { StoreModule } from '@ngrx/store';
import { MODULE_NAME } from './types';
/*import * as fromSquadList from './reducers/squad-list.reducers';*/

@NgModule({
  declarations: [SquadListContainerComponent],
  imports: [
    CommonModule,
    /*StoreModule.forFeature(MODULE_NAME, fromSquadList.reducer),*/
    // TODO: Import effects
  ],
  exports: [SquadListContainerComponent]
})
export class SquadListModule { }
