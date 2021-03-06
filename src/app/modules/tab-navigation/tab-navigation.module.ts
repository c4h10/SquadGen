import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import * as fromTabNavigation from './reducers/tab-navigation.reducers';
import { MODULE_NAME } from './types';
import { StoreModule } from '@ngrx/store';
import { SquadListModule } from '../squad-list/squad-list.module';
import { EffectsModule } from '@ngrx/effects';
import { TabNavigationEffects } from './effects/tab-navigation.effects';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabContentComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SquadListModule,
    StoreModule.forFeature(MODULE_NAME, fromTabNavigation.reducer),
    EffectsModule.forFeature([TabNavigationEffects])
  ],
  exports: [
    TabsComponent
  ]
})
export class TabNavigationModule {
}
