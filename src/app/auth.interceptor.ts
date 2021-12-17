import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJleHAiOjE2Mzk3NTg1MDMsImlhdCI6MTYzOTc0MDUwM30.KoUFisDVDZQNrk1OiS94vMb3K3qzgyJlIGm34C2fJl8rQsqAtbLsNuV0vH-eH0aYWz6mVK4BtxqKzYUOPpuvAQ'
      },
    });

    return next.handle(req);
  }
}