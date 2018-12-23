import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TabNavigationModule } from './modules/tab-navigation/tab-navigation.module';
import { CommonMaterialModule } from './modules/common-material/common-material.module';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './components/nav-menu-item/nav-menu-item.component';


const ngModules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule
];

const sgModules = [
  TabNavigationModule,
  CommonMaterialModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavBarComponent,
    NavMenuComponent,
    NavMenuItemComponent
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
