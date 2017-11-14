import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './../services/token.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //  We need to inject the TokenService to avoid cyclical dependecies.
    const tokenService = this.injector.get(TokenService);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.AccessToken}`
      }
    });
    return next.handle(request);
  }

}