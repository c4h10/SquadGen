export interface PluginContext {
  tabId: number;
  type: string;
  data?: {
    [prop: string]: any;
  };
}
