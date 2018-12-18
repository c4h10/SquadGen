import { Injectable } from '@angular/core';
import { ApiClientService } from '../../api-client';
import { ALIASES as SQUAD_LIST_ALIASES } from '../endpoints';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SquadListService {

  constructor(private apiClient: ApiClientService) {
  }

  squadMock() {

    return this.apiClient.getWithParameters(SQUAD_LIST_ALIASES.SQUAD_MOCK, '', {observe: 'response'})
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }
}
