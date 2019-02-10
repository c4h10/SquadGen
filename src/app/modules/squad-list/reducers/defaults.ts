import * as Types from '../store/squad-list.store';

export const defaultState: Types.State = {
  containers: {}
};

export const defaultContainerState: Types.ContainerState = {
  tabId: '__EMPTY__',
  squadPilots: []
};
