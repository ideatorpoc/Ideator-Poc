
import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { environment } from './../../../environments/environment';
import { Idea, createIdea } from './idea.model';
import { AuthenticationService } from './../../shared/authentication.service';

@Injectable()
export class IdeaService {

  private _ideaUrl = environment.baseUrls.ideas;
  private _ideaAddUrl=environment.baseUrls.ideadAdd;
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
  private options = new RequestOptions({ headers: this.headers });

  ideas: Idea[];
  private CreateIdea:createIdea;
  constructor(private _http: Http,private authenticationService: AuthenticationService, 
              private router: Router) {       
  }

  addNewIdea(newIdea: Idea) {
    this.CreateIdea= new createIdea() 
    newIdea.photo = 'assets/img/user_icon.png';
    newIdea.banner = 'assets/img/dummy.png';
    newIdea.name = 'John Doe';
    newIdea.likescount = 10;
    newIdea.commentscount = 15;
    this.CreateIdea.idea = new Idea();
    this.CreateIdea.idea= newIdea;
    let body = JSON.stringify(this.CreateIdea);
    console.log(this._ideaAddUrl);
    console.log(body);
      return <Observable<Idea>>this._http
       .post(this._ideaAddUrl, body,this.options)
       .map(res => <Idea>res.json())
       .do(data=>console.log('Added Idea response:' + JSON.stringify(data)))
       .catch(this.handleError);
    }

  getIdeas(): Observable<Idea[]> {
      return this._http.get(this._ideaUrl,this.options)
      .map((response: Response) => <Idea[]>response.json())
      //.do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteIdea(idea: Idea) {
    const url = `${this._ideaUrl}${idea.id}`;
      return <Observable<Idea>>this._http
      .delete(url, this.options)
      .map(res => <Idea>res.json())
      .do(data=>console.log('Deleted Idea response:' + JSON.stringify(data)))
      .catch(this.handleError);
  }  
  private handleError(error: Response) {
    console.error(error);
    let msg = `Status code ${error.status} on url ${error.url} and ${error.statusText}`;
    if (error.status == 401){
      alert("You need to sign in again");
    }  
    return Observable.throw(msg);
  } 
}