import { IdeasModule } from './../ideas.module';
import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';


@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {
  errorMessage: string;
  ideas:Idea[];
  dummyIdeas:Idea[];

  constructor(private _ideaService:IdeaService) { }
  
  ngOnInit():void {
   
      this.getIdeas();
    }
    getIdeas():void{
      this._ideaService.getIdeas().subscribe(ideas=>this.dummyIdeas=ideas)
    }
    toggle(dummyIdea):void {
      dummyIdea.show = !dummyIdea.show

    }

}
