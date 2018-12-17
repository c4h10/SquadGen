import { Injectable } from '@angular/core';
import { TabContainerService } from '../../../tab-store/tab-container.service';
import { State } from '../store/squad-list.store';

@Injectable()
export class StoreManagerService extends TabContainerService<State> {
}
