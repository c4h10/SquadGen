import { EndpointConfiguration, HTTP_VERBS } from '../api-client';
import { environment } from '../../../environments/environment';


export enum ALIASES {
  SQUAD_MOCK = 'SQUAD_MOCK'
}

export const API_ENDPOINTS: EndpointConfiguration[] = [
  {
    alias: ALIASES.SQUAD_MOCK,
    method: HTTP_VERBS.GET,
    path: 'mock/mock.json',
    prefix: `${environment.apiBase}/assets/`
  }
];
