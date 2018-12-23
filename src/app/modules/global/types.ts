import { Action } from '@ngrx/store';
import { Configuration } from './reducers/types';
import { HttpHeaders } from '@angular/common/http';

export interface ActionWithPayload<P> extends Action {
  payload?: P;
}

export namespace EndpointProtocolTypes {
  export interface ConfigurationResponse {
    body?: Configuration;
    status?: number;
    headers?: HttpHeaders;
  }
}
