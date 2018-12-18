export type PathGenerator = (params?: any) => string;
export interface EndpointData {
  method: any;
  path: string | PathGenerator;
  prefix?: string;
}

export interface EndpointConfiguration extends EndpointData {
  alias: any;
}

export interface EndpointCollection {
  [alias: string]: EndpointData;
}
