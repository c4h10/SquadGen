import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientService } from './api-client.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class ApiClientModule {
  static forRoot() {
    return {
      ngModule: ApiClientModule,
      providers: [ApiClientService]
    };
  }

  static provideEndpoints(initCallback) {
    return {
      provide: APP_INITIALIZER,
      useFactory: initCallback,
      deps: [ApiClientService],
      multi: true
    };
  }
}
