import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExceptionService{
    catchBadResponse(errorResponse:Response):Observable<any>{
   
    let err = errorResponse.json();

    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (errorResponse.statusText || 'unknown error');
      console.log(emsg);
    return Observable.of(false);
    }
}