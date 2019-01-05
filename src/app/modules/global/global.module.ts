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
import { NewSquadCardComponent } from './components/new-squad-card/new-squad-card.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { PopoverComponent } from './components/popover/popover.component';
import { XwingFontIconComponent } from './components/xwing-font-icon/xwing-font-icon.component';
import { XwingTranslatePipe } from './pipes/xwing-translate.pipe';


export function initEndpoints(apiClient: ApiClientService) {
  return () => apiClient.registerEndpoints(API_ENDPOINTS);
}

@NgModule({
  declarations: [NewSquadCardComponent, PopoverComponent, XwingFontIconComponent, XwingTranslatePipe],
  exports: [NewSquadCardComponent, PopoverComponent, XwingFontIconComponent, XwingTranslatePipe],
  imports: [
    CommonModule,
    CommonMaterialModule,
    StoreModule.forFeature(MODULE_NAME, fromGlobal.reducer),
    EffectsModule.forFeature([GlobalEffects])
  ],
  providers: [
    GlobalService,
    ApiClientModule.provideEndpoints(initEndpoints)
  ],
  entryComponents: [
    NewSquadCardComponent
  ]
})
export class GlobalModule {
}
