import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../Helper/constants';
import {environment} from 'src/environments/environment';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.APIUrl)) {
      let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
    }
    return next.handle(request);
  }
}
