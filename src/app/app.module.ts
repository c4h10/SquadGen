import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';


const ngModules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule
];

const materialModules = [
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,

  FlexLayoutModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    ...ngModules,
    ...materialModules,
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([]),
    environment.imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
