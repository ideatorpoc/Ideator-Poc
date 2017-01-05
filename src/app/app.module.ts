

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MaterialModule,MdSnackBar,MdSnackBarConfig} from '@angular/material';

import  './core/rxjs-extensions';
import { AppComponent } from './app.component';
import {IdeasModule} from './ideas/ideas.module';
import {LoginModule} from './login/login.module';

import { AppRoutingModule,routedComponents } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AuthenticationService } from './shared/authentication.service';

import { AuthGuard } from './guards/auth.guard';
import { LocalizationService } from './core/localization.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot(),
    IdeasModule,
    LoginModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [AuthGuard,AuthenticationService,MdSnackBar,LocalizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
