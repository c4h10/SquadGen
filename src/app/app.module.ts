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
import { GlobalModule } from './modules/global/global.module';
import { XwingTranslationService } from './services/xwing-translation.service';

import { AuthService, AuthServiceConfig, FacebookLoginProvider, } from 'angular-6-social-login';
import { SigninComponent } from './components/signin/signin.component';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('755195074846911')
      }
    ]);
  return config;
}

const ngModules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule
];

const sgModules = [
  TabNavigationModule,
  CommonMaterialModule,
  GlobalModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavBarComponent,
    SigninComponent
  ],
  imports: [
    ...ngModules,
    ...sgModules,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    environment.imports,
    LayoutModule
  ],
  providers: [
    XwingTranslationService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
