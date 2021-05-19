import { HttpInterceptor, HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'
import { ErrorComponent } from './error/error.component'

 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor 
{
    
    constructor (private dialog: MatDialog){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) 
    {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => 
            {
                let errorMessage = 'Unknown Error';

                if(error.error.message)
                {
                    errorMessage = error.error.message;
                }
                console.log(error);
                this.dialog.open(ErrorComponent, {data: {message:errorMessage}});
                return throwError(error);
            })
        )
    }
}