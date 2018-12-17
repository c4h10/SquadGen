export interface TabContext {
  tabId: number;
  type: string;
  data?: {
    [prop: string]: any;
  };
}
