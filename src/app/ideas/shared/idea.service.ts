
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../../environments/environment';

import { Idea } from './idea.model';

@Injectable()
export class IdeaService {

  private _ideaUrl = environment.baseUrls.ideas;
  ideas: Idea[];
  constructor(private _http: Http) {
    console.log(this._ideaUrl);
  }

  addNewIdea(newIdea: Idea) {
    newIdea.photo = 'assets/img/Carter-Wigell.png';
    newIdea.banner = 'assets/img/img01.png';
    newIdea.title = 'Frozen Pizza';
    newIdea.likescount = 10;
    newIdea.commentscount = 15;
    let body = JSON.stringify(newIdea);
    console.log(body);
     return <Observable<Idea>>this._http
      .post(`${this._ideaUrl}`, body)
      .map(res => res.json().data)
      .do(data => console.log('All: ' + JSON.stringify(data)));
   // this.ideas.push(newIdea);
  }

  getIdeas(): Observable<Idea[]> {
      return this._http.get(this._ideaUrl)
      .map((response: Response) => <Idea[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
     console.error(error);
    return Observable.throw('Server error');
  } 

}