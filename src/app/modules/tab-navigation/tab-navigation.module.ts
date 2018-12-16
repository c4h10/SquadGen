import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import * as fromTabNavigation from './reducers/tab-navigation.reducer';
import { MODULE_NAME } from './types';
import { StoreModule } from '@ngrx/store';
import { PluginManagerModule } from '../plugin-manager/plugin-manager.module';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabContentComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    PluginManagerModule,
    StoreModule.forFeature(MODULE_NAME, fromTabNavigation.reducer),
    // TODO: Import effects
  ],
  exports: [
    TabsComponent
  ]
})
export class TabNavigationModule {
}
