
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';

import { LoginRoutingModule,routedComponents } from './login-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    MaterialModule
  ],
  declarations: [routedComponents]
})
export class LoginModule { }
