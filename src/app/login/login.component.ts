import { LocalizationModel } from './../core/localization.model';


import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service';
import { Router } from '@angular/router';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';

import { ExceptionService } from './../core/exception.service';
import { LocalizationService } from './../core/localization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  error = '';
  localizationModel:LocalizationModel;
  
  constructor(private router: Router,private _snackBar: MdSnackBar,
        private authenticationService: AuthenticationService,
        private _exceptionService:ExceptionService,private _localizationService:LocalizationService) { }

  ngOnInit() {
    // reset login status

    this.authenticationService.removeToken();
    this._localizationService.LoadLocalizationData().subscribe(localModel=>this.localizationModel=localModel);
   
       
  }


  login() {
 console.log(this.localizationModel.login);
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(result => {
              if (result === true) {
                  this.router.navigate(['/']);
              } else {
                  this.error = 'Username or password is incorrect';
              }
          },        
          error =>{
         this._exceptionService.handleServiceError('Login',error);
        });
  }
  
}
