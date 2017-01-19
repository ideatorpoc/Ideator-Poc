import { IdeasModule } from './../ideas.module';
import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';
import { ExceptionService } from './../../core/exception.service';


@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {
  errorMessage: string;
  ideas:Idea[];
  dummyIdeas:Idea[];

  constructor(private _ideaService:IdeaService,private _exceptionService:ExceptionService) { }
  
  ngOnInit():void {
   
      this.getIdeas();
    }
    getIdeas():void{
      this._ideaService.getIdeas().subscribe(ideas=>{this.dummyIdeas=ideas},
      error=>{
        this._exceptionService.handleServiceError('Idea List',error);
      })
    }
    toggle(dummyIdea):void {
      dummyIdea.show = !dummyIdea.show
    }

    deleteIdea(idea):void{
      this._ideaService.deleteIdea(idea).subscribe(
        result =>{
          this.getIdeas();
          this._exceptionService.showSuccessMessage('Delete Idea','Idea deleted Successfully');
        },
        error =>{
          this._exceptionService.handleServiceError('Idea List',error);
        }
      )
    }

}
