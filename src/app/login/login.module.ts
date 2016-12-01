
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

import { AuthenticationService } from './../shared/authentication.service';

import { LoginRoutingModule,routedComponents } from './login-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [routedComponents],
  providers:[]
})
export class LoginModule { }
