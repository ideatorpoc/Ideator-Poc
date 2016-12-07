

import { Component, OnInit } from '@angular/core';

import { Idea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';
import { Router, CanActivate } from '@angular/router';

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
  constructor(private _ideaService:IdeaService,private _snackBar: MdSnackBar, private router: Router) { }

  showSnackbar(message) {   
    let simpleSnackBarRef =  this._snackBar.open(message, 'Dismiss');
    setTimeout(simpleSnackBarRef.dismiss.bind(simpleSnackBarRef), 5000);
  }

  ngOnInit() {
    
  }

  save() {
    let idea = this.newIdea;
    this._ideaService.addNewIdea(this.newIdea).subscribe(
      idea=>(this.ideaAddResponse=idea,this.newIdea= <Idea>{},this.showSnackbar('Your idea is created successfully..'),this.router.navigate(['/ideas'])),
      error =>{
        console.log('error occurred');
        console.log(error);
      }
      ); 
  }
}
