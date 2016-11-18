
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    [NavComponent]
  ],
  declarations: [NavComponent]
})
export class CoreModule { }
