import {InjectionToken} from "@angular/core";

export const API_CONFIG = new InjectionToken<IApiConfig>('apiConfig');

export interface IApiConfig {
  apiBaseUrl: string
}
