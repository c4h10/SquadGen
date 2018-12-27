import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadListContainerComponent } from './components/squad-list-container/squad-list-container.component';
import { StoreModule } from '@ngrx/store';
import { MODULE_NAME } from './types';
import { reducer } from './reducers/squad-list.reducers';
import { StoreManagerService } from './services/store-manager.service';
import { ApiClientModule, ApiClientService } from '../api-client';
import { API_ENDPOINTS } from './endpoints';
import { SquadListService } from './services/squad-list.service';
import { EffectsModule } from '@ngrx/effects';
import { SquadListEffects } from './effects/squad-list.effects';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { SquadListNavComponent } from './components/squad-list-nav/squad-list-nav.component';
import { SquadListNavSectionComponent } from './components/squad-list-nav-section/squad-list-nav-section.component';
import { SquadListNavSectionItemComponent } from './components/squad-list-nav-section-item/squad-list-nav-section-item.component';


export function initEndpoints(apiClient: ApiClientService) {
  return () => apiClient.registerEndpoints(API_ENDPOINTS);
}

@NgModule({
  declarations: [
    SquadListContainerComponent,
    SquadListNavComponent,
    SquadListNavSectionComponent,
    SquadListNavSectionItemComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    StoreModule.forFeature(MODULE_NAME, reducer),
    EffectsModule.forFeature([SquadListEffects])
  ],
  exports: [SquadListContainerComponent, SquadListNavComponent],

  providers: [
    StoreManagerService,
    ApiClientService,
    SquadListService,
    ApiClientModule.provideEndpoints(initEndpoints)
  ]
})
export class SquadListModule {
}
