import { Injectable } from '@angular/core';
import { ApiClientService } from '../../api-client';
import { ALIASES as GLOBAL_ALIASES } from '../endpoints';
import { map } from 'rxjs/operators';

import { EndpointProtocolTypes as ApiTypes } from '../types';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalService {
  constructor(private apiClient: ApiClientService) {
  }

  getConfiguration(): Observable<ApiTypes.ConfigurationResponse> {
    return this.apiClient.getWithParameters(GLOBAL_ALIASES.CONFIGURATION, '')
      .pipe(
        map((response) => {
          return response as ApiTypes.ConfigurationResponse;
        })
      );
  }

  getUpgrades(): Observable<ApiTypes.UpgradesResponse> {
    return this.apiClient.getWithParameters(GLOBAL_ALIASES.UPGRADES, '')
      .pipe(
        map((response) => {
          return response as ApiTypes.UpgradesResponse;
        })
      );
  }

  getFactionConfiguration(factionId: string): Observable<ApiTypes.FactionConfigurationResponse> {

    const urlParams = {
      id: factionId
    };
    return this.apiClient.getWithUrlParameters(GLOBAL_ALIASES.SHIP_LIST_BY_FACTION, urlParams)
      .pipe(
        map((response) => {
          return response as ApiTypes.FactionConfigurationResponse;
        })
      );
  }
}
