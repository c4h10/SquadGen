import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadListViewComponent } from './components/squad-list-view/squad-list-view.component';

@NgModule({
  declarations: [SquadListViewComponent],
  imports: [
    CommonModule
  ],
  exports: [SquadListViewComponent]
})
export class SquadListModule { }
