
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { ExceptionService } from './../core/exception.service';

@Injectable()
export class AuthenticationService {
    public token: string;
    private _loginUrl = environment.baseUrls.login;
    private _logoutUrl = environment.baseUrls.logout;
    

    constructor(private http: Http,
                private router: Router,
                private _exceptionService:ExceptionService) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._loginUrl, JSON.stringify({ email: username, password: password }),options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().auth_token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            })
            .catch(this._exceptionService.catchBadResponse);
    }

    logout() {
        let headers = new Headers({ 'Content-Type': 'application/json','Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this._logoutUrl,options)
            .map((response: Response) => {
                // logout successful 
                this.token = null;
                localStorage.removeItem('currentUser');
                this.router.navigate(['/login']);
            });
    }
    removeToken() {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

}    