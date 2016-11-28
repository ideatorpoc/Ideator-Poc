
import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../../environments/environment';

import { Idea, createIdea } from './idea.model';


@Injectable()
export class IdeaService {

  private _ideaUrl = environment.baseUrls.ideas;
  private _ideaAddUrl=environment.baseUrls.ideadAdd;
  ideas: Idea[];
  private CreateIdea:createIdea;
  constructor(private _http: Http) {
       
  }

  addNewIdea(newIdea: Idea) {
    this.CreateIdea= new createIdea() 
    newIdea.photo = 'assets/img/Carter-Wigell.png';
    newIdea.banner = 'assets/img/img01.png';
    newIdea.title = 'Frozen Pizza';
    newIdea.likescount = 10;
    newIdea.commentscount = 15;
    this.CreateIdea.idea = new Idea();
    this.CreateIdea.idea= newIdea;
    let body = JSON.stringify(this.CreateIdea);
    console.log(this._ideaAddUrl);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

      return <Observable<Idea>>this._http
       .post(this._ideaAddUrl, body,options)
       .map(res => <Idea>res.json())
       .do(data=>console.log('Added Idea response:' + JSON.stringify(data)))
       .catch(this.handleError);
    }

  getIdeas(): Observable<Idea[]> {
      return this._http.get(this._ideaUrl)
      .map((response: Response) => <Idea[]>response.json())
     // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    let msg = `Status code ${error.status} on url ${error.url} and ${error.statusText}`;
     
    return Observable.throw(msg);
  } 

}