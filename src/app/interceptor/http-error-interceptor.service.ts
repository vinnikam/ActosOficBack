import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService extends HttpErrorResponse {

  constructor(private toastrService: ToastrService) {
    super(toastrService);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errMsg ;
          let errorType = 'Error';
          // Client Side Error
          if (error.error instanceof ErrorEvent) {
            errMsg = `Error: ${error.error.message}`;
          } else {  // Server Side Error
            if (error.status === 0) {
              errMsg = `${error.status}, "No hay conexión con el servidor"`;
              errorType = 'Major Error';
            } else {
              errMsg = `${error.status}: ${error.error}`;
            }
            this.toastrService.error(errMsg, errorType, { closeButton: true });
          }
          console.log(errMsg);
          return throwError(errMsg);
        })
      )
  }

}
