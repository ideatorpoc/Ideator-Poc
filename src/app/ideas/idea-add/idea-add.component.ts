

import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';
import { Router, CanActivate } from '@angular/router';
import { ExceptionService } from './../../core/exception.service';

@Component({
  selector: 'app-idea-add',
  templateUrl: './idea-add.component.html',
  styleUrls: ['./idea-add.component.css'],
  providers:[]
})
export class IdeaAddComponent implements OnInit {

  newIdea:Idea= <Idea>{};
  ideaAddResponse:Idea;
  errorMessage:string;
  constructor(private _ideaService:IdeaService, private router: Router, 
              private _exceptionService:ExceptionService) { }

  ngOnInit() {
    
  }

  save() {
    let idea = this.newIdea;
    this._ideaService.addNewIdea(this.newIdea).subscribe(
      idea=>(
        this.ideaAddResponse=idea,this.newIdea= <Idea>{},
        this._exceptionService.showSuccessMessage('Idea Created','Your idea is created successfully..'),
        this.router.navigate(['/ideas'])
        ),
      error =>{
        this._exceptionService.handleServiceError('Login',error);
      }
      ); 
  }
}
