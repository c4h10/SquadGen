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
import { SquadListSideNavComponent } from './components/squad-list-side-nav/squad-list-side-nav.component';
import { SquadListSideNavSectionComponent } from './components/squad-list-side-nav-section/squad-list-side-nav-section.component';
import { WindowRefService } from '../../services/window-ref.service';
import { SquadListNavbarComponent } from './components/squad-list-navbar/squad-list-navbar.component';
import { SquadListNavbarToggleComponent } from './components/squad-list-navbar-toggle/squad-list-navbar-toggle.component';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { GlobalModule } from '../global/global.module';
import { StatsLineComponent } from './components/stats-line/stats-line.component';
import { ActionsLineComponent } from './components/actions-line/actions-line.component';

export function initEndpoints(apiClient: ApiClientService) {
  return () => apiClient.registerEndpoints(API_ENDPOINTS);
}

@NgModule({
  declarations: [
    SquadListContainerComponent,
    SquadListSideNavComponent,
    SquadListSideNavSectionComponent,
    SquadListNavbarComponent,
    SquadListNavbarToggleComponent,
    StatsLineComponent,
    ActionsLineComponent],
  imports: [
    CommonModule,
    SatPopoverModule,
    GlobalModule,
    CommonMaterialModule,
    StoreModule.forFeature(MODULE_NAME, reducer),
    EffectsModule.forFeature([SquadListEffects])
  ],
  exports: [SquadListContainerComponent, SquadListSideNavComponent],

  providers: [
    StoreManagerService,
    ApiClientService,
    SquadListService,
    WindowRefService,
    ApiClientModule.provideEndpoints(initEndpoints)
  ]
})
export class SquadListModule {
}
