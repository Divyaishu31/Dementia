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
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJleHAiOjE2Mzk0MTczNzUsImlhdCI6MTYzOTM5OTM3NX0.WFCvSRnlrPTk8pm_DFccmGVVxKohvnE_jcF8fFArHTE5J1jj87h46VOT94Il8iA2TWu4ar4arcn_vQ6xpmJ8ag'
      },
    });

    return next.handle(req);
  }
}