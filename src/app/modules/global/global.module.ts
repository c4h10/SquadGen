import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGlobal from './reducers/global.reducers';
import { ApiClientModule, ApiClientService } from '../api-client';
import { API_ENDPOINTS } from './endpoints';
import { EffectsModule } from '@ngrx/effects';
import { GlobalEffects } from './effects/global.effects';
import { GlobalService } from './services/global.service';
import { MODULE_NAME } from './types';


export function initEndpoints(apiClient: ApiClientService) {
  return () => apiClient.registerEndpoints(API_ENDPOINTS);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(MODULE_NAME, fromGlobal.reducer),
    EffectsModule.forFeature([GlobalEffects])
  ],
  providers: [
    GlobalService,
    ApiClientModule.provideEndpoints(initEndpoints)
  ]
})
export class GlobalModule { }
