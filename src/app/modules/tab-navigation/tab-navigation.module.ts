import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { CommonMaterialModule } from '../common-material/common-material.module';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabContentComponent],
  imports: [
    CommonModule,
    CommonMaterialModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabNavigationModule {
}
