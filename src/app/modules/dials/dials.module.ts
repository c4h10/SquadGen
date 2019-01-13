import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialsContainerComponent } from './components/dials-container/dials-container.component';

@NgModule({
  declarations: [DialsContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DialsContainerComponent
  ]
})
export class DialsModule { }
