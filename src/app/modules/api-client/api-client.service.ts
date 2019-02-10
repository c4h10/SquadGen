import { Injectable } from '@angular/core';
import { EndpointCollection, EndpointConfiguration, EndpointData } from './types';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiClientService {
  private endpoints: EndpointCollection = {};
  private defaultPrefix = '/api/';

  constructor(private http: HttpClient) {
  }

  registerEndpoints(configs: EndpointConfiguration[]) {
    configs.forEach(config => {
      if (this.endpoints.hasOwnProperty(config.alias)) {
        console.warn(`Endpoint with alias ${config.alias} already registered.`);
      }

      this.endpoints[config.alias] = {
        method: config.method,
        path: config.path
      };

      if (config.prefix) {
        this.endpoints[config.alias].prefix = config.prefix;
      }
    });
  }

  request<PT, RT>(endpointsAlias: string, payload?: PT) {
    const config = this.endpoints[endpointsAlias];
    return this.http.request<RT>(config.method, this.getUrl(config), {body: payload});
  }

  requestWithParameters<PT, RT>(endpointsAlias: string, payload?: PT, options?: any) {
    const config = this.endpoints[endpointsAlias];
    return this.http.request<RT>(config.method, this.getUrl(config), {body: payload, ...options});
  }

  getWithParameters<PT, RT>(endpointsAlias: string, wildPath?: string, options?: any) {
    const config = this.endpoints[endpointsAlias];
    return this.http.request<RT>(config.method, this.getUrl(config) + wildPath, {...options});
  }

  getWithUrlParameters<PT, RT>(endpointsAlias: string, urlParams: any, options?: any) {
    const config = this.endpoints[endpointsAlias];
    return this.http.request<RT>(config.method, this.getUrl(config, urlParams), {...options});
  }

  private getUrl(config: EndpointData, params?: any) {
    const prefix = config.prefix || this.defaultPrefix;
    const path = typeof config.path === 'function' ? config.path(params) : config.path;
    return prefix + path;
  }
}
