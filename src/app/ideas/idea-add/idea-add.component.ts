
import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';

@Component({
  selector: 'app-idea-add',
  templateUrl: './idea-add.component.html',
  styleUrls: ['./idea-add.component.css']
})
export class IdeaAddComponent implements OnInit {

  newIdea:Idea= <Idea>{};
  constructor() { }

  ngOnInit() {
    
  }

  save() {
    let idea = this.newIdea;
    console.log(idea.name);
  }

}
