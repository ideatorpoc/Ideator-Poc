import { MdSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExceptionService {

    constructor(private _snackBar:MdSnackBar ) {

    }
    catchBadResponse(errorResponse: Response): Observable<any> {

        let err = errorResponse.json();

        let emsg = err ?
            (err.error ? err.error : JSON.stringify(err)) :
            (errorResponse.statusText || 'unknown error');
        console.log(emsg);
        // return Observable.of(false);
        return Observable.throw(emsg);
    }

    handleServiceError(op: string, err: any): void {
        console.error(`${op} error: ${err.message || err}`);
        this._snackBar.open(`${op} error: ${err.message || err}`,'Dismiss');
    }
    
}