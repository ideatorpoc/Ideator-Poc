import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service';
import { Router } from '@angular/router';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  error = '';
  
  constructor(private router: Router,private _snackBar: MdSnackBar,
        private authenticationService: AuthenticationService) { }

    showSnackbar(message) {   
        let simpleSnackBarRef =  this._snackBar.open(message, 'Dismiss');
        setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), 5000);
    }

  ngOnInit() {
    // reset login status
    this.authenticationService.removeToken();
  }

  login() {
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(result => {
              if (result === true) {
                  this.router.navigate(['/']);
              } else {
                  this.error = 'Username or password is incorrect';
              }
          },        
          error =>{
          this.showSnackbar(JSON.parse(error._body).error)
        });
  }
}
