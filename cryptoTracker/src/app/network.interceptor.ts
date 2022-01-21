import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoaderServiceService} from "./loader-service.service";
import {finalize} from "rxjs";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader:LoaderServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show()
    return next.handle(request).pipe(
      finalize(()=> {
        this.loader.hide()
      })
    );
  }
}
