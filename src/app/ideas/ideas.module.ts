import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IdeasRoutingModule,routedComponents} from './ideas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IdeasRoutingModule
  ],
  declarations: [routedComponents]
})
export class IdeasModule { }
