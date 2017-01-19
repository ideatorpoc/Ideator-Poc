import { MdSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class ExceptionService {

    constructor(private router: Router,private _snackBar:MdSnackBar) {

    }
    catchBadResponse(errorResponse: Response): Observable<any> {
        console.log(errorResponse);
        if(errorResponse.status == 401){
          //used for loggout user
          localStorage.removeItem('currentUser');
          window.location.href = "/login";
          //return Observable.of(false);
        }
        else{
          return Observable.throw(errorResponse.statusText || 'unknown error');
        }
    }

    handleServiceError(op: string, err: any): void {
        console.error(`${op} error: ${err.message || err}`);
        this._snackBar.open(`${op} error: ${err.message || err}`,'Dismiss');
    }

    showSuccessMessage(op: string, err: any): void {
        console.error(`${op} success: ${err.message || err}`);
        this._snackBar.open(`${op} success: ${err.message || err}`,'Dismiss');
    }

}