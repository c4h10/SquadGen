import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialsContainerComponent } from './components/dials-container/dials-container.component';
import { GlobalModule } from '../global/global.module';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialsContainerComponent],
  imports: [
    CommonModule,
    GlobalModule,
    CommonMaterialModule,
    FormsModule
  ],
  exports: [
    DialsContainerComponent
  ]
})
export class DialsModule { }
