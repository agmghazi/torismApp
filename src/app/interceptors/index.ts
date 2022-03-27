import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiErrorsInterceptor} from './api-errors.interceptor';
import {JwtTokenInterceptor} from './jwt-token.interceptor';

export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiErrorsInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtTokenInterceptor,
    multi: true,
  },
];
