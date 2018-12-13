import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
MatInputModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabNavigationModule } from './modules/tab-navigation/tab-navigation.module';
import { CommonMaterialModule } from './modules/common-material/common-material.module';


const ngModules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule
];

const sgModules = [
  TabNavigationModule,
  CommonMaterialModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MainNavComponent,
    NavBarComponent
  ],
  imports: [
    ...ngModules,
    ...sgModules,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([]),
    environment.imports,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
