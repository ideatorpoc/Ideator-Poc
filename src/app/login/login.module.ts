import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

import { AuthenticationService } from './../shared/authentication.service';

import { LoginRoutingModule,routedComponents } from './login-routing.module';

import { LocalizationService } from './../core/localization.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  declarations: [routedComponents],
  providers:[]
})
export class LoginModule { }
