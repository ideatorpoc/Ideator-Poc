import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private _snackBar: MdSnackBar) { }
    
    showSnackbar(message) {   
        let simpleSnackBarRef =  this._snackBar.open(message, 'Dismiss');
    }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        this.showSnackbar('Please login')
        return false;
    }
}