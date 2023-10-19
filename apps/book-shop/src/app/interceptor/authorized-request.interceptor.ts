import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedRequestInterceptor implements HttpInterceptor {

  constructor() {}

  logout() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> | HttpEvent<any> | any {

  }

  private getAuthError(response: HttpErrorResponse) {
    return response.error.status === 401;
  }
}
