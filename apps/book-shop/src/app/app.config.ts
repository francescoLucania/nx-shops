import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {AuthorizedRequestInterceptor} from "./interceptor/authorized-request.interceptor";
import {API_CONFIG, UserService} from "@nx-shops/lib";
import {environment} from "../environments/environment";

const apiConfig = {
  apiBaseUrl: environment.apiUrl
}

export function initializerFactory(userService: UserService) {
  return () => userService.getUser().subscribe();
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizedRequestInterceptor, multi: true },
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    {
      provide: API_CONFIG,
      useValue: apiConfig,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializerFactory,
      deps: [UserService],
      multi: true
    }
  ],
};
