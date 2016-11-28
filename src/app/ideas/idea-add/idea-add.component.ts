

import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';
@Component({
  selector: 'app-idea-add',
  templateUrl: './idea-add.component.html',
  styleUrls: ['./idea-add.component.css'],
  providers:[MdSnackBar]
})
export class IdeaAddComponent implements OnInit {

  newIdea:Idea= <Idea>{};
  ideaAddResponse:Idea;
  errorMessage:string;
  constructor(private _ideaService:IdeaService,private _snackBar: MdSnackBar) { }

  showSnackbar() {   
    let simpleSnackBarRef =  this._snackBar.open('Your idea is created successfully..', 'Dismiss');
    setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), 5000);
  }

  ngOnInit() {
    
  }

  save() {
    let idea = this.newIdea;
    this._ideaService.addNewIdea(this.newIdea).subscribe(
      idea=>this.ideaAddResponse=idea,
      error =>{
        console.log('error occurred');
        console.log(error);
      }
      ); 
      this.showSnackbar();
    //ToDO:Or does it even return anything
    //  this._ideaService.addNewIdea(this.newIdea).subscribe();
  }
}
