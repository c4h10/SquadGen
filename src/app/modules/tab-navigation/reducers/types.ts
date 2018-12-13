export interface State {
  config: any;
  tabs: Tab[];
}


export interface Tab {
  id: number;
  type?: string;
}
