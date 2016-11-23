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

    getDummyIdeas():void{
    //this.dummyIdeas= this._ideaService.getDummyIdeas();
    this.dummyIdeas= this._ideaService.ideas;
  }
  
  ngOnInit():void {
     this.getDummyIdeas();
    }

}
