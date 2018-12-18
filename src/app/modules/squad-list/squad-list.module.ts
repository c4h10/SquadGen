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

export function initEndpoints(apiClient: ApiClientService) {
  return () => apiClient.registerEndpoints(API_ENDPOINTS);
}

@NgModule({
  declarations: [SquadListContainerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(MODULE_NAME, reducer),
    EffectsModule.forFeature([SquadListEffects])
  ],
  exports: [SquadListContainerComponent],

  providers: [
    StoreManagerService,
    ApiClientService,
    SquadListService,
    ApiClientModule.provideEndpoints(initEndpoints)
  ]
})
export class SquadListModule {
}
