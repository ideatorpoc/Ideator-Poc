import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ExceptionService } from './../core/exception.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private _exceptionService:ExceptionService) { }
    
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        this._exceptionService.handleServiceError('Login','Please login');
        return false;
    }
}