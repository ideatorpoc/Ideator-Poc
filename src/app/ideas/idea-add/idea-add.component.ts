

import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';

@Component({
  selector: 'app-idea-add',
  templateUrl: './idea-add.component.html',
  styleUrls: ['./idea-add.component.css']
})
export class IdeaAddComponent implements OnInit {

  newIdea:Idea= <Idea>{};
  constructor(private _ideaService:IdeaService) { }

  ngOnInit() {
    
  }

  save() {
    let idea = this.newIdea;
    console.log(idea.name);
    this._ideaService.addNewIdea(this.newIdea);
  }

}
