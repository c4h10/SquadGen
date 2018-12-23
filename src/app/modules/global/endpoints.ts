import { EndpointConfiguration, HTTP_VERBS } from '../api-client';


export enum ALIASES {
  CONFIGURATION = 'CONFIGURATION'
}

export const API_ENDPOINTS: EndpointConfiguration[] = [
  {
    alias: ALIASES.CONFIGURATION,
    method: HTTP_VERBS.GET,
    path: 'json/configuration.json',
    prefix: '/assets/'
  }
];
