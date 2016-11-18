
import { Idea } from './shared/idea.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IdeasRoutingModule,routedComponents} from './ideas-routing.module';

import { IdeaService } from './shared/idea.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IdeasRoutingModule
  ],

  declarations: [routedComponents],
  providers:[IdeaService]
})
export class IdeasModule { }
