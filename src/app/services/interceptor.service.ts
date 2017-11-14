import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './../services/token.service';



@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenService : TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenService.AccessToken}`
      }
    });
    return next.handle(request);
  }

}