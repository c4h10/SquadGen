import { Action } from '@ngrx/store';
import { Configuration } from './reducers/types';
import { HttpHeaders } from '@angular/common/http';

export const MODULE_NAME = 'global';

export interface ActionWithPayload<P> extends Action {
  payload?: P;
}

export namespace EndpointProtocolTypes {
  export interface ConfigurationResponse {
    body?: Configuration;
    status?: number;
    headers?: HttpHeaders;
  }

  export interface FactionConfigurationResponse {
    body?: any;
    status?: number;
    headers?: HttpHeaders;
  }
}
