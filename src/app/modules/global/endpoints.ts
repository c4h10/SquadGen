import { EndpointConfiguration, HTTP_VERBS } from '../api-client';
import { environment } from '../../../environments/environment';


export enum ALIASES {
  CONFIGURATION = 'CONFIGURATION',
  SHIP_LIST_BY_FACTION = 'SHIP_LIST_BY_FACTION'
}

export const API_ENDPOINTS: EndpointConfiguration[] = [
  {
    alias: ALIASES.CONFIGURATION,
    method: HTTP_VERBS.GET,
    path: 'json/configuration.json',
    prefix: `${environment.apiBase}/assets/`
  },
  {
    alias: ALIASES.SHIP_LIST_BY_FACTION,
    method: HTTP_VERBS.GET,
    path: shipsListByFaction,
    prefix: `${environment.apiBase}/assets/`
  }
];


export function shipsListByFaction(params: {id: string}) {
  return `json/faction-${params.id}.json`;
}
