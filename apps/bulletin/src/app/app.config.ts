import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {API_CONFIG, authInterceptor, UserService} from "@nx-shops/lib";
import {environment} from "../environments/environment";

const apiConfig = {
  apiBaseUrl: environment.apiUrl
}

export function initializerFactory(userService: UserService) {
  return () => userService.getUser().subscribe();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([ authInterceptor ]),
    ),
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
