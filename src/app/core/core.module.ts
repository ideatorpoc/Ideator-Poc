

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';


import { NavComponent,SettingsDialog } from './nav/nav.component';
import { ThemesComponent } from './themes/themes.component';
import { ExceptionService } from './exception.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    [NavComponent]
  ],
  declarations: [NavComponent, ThemesComponent,SettingsDialog],
  providers:[ExceptionService],
  entryComponents:[SettingsDialog]
})
export class CoreModule { }
