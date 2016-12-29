
import { Observable } from 'rxjs/Observable';

import { Idea } from './../app/ideas/shared/idea.model';
import { IIdeaService } from './../app/ideas/contracts/iidea.service';
import { environment } from './../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeIdeaService implements IIdeaService {
      private _ideaUrl = environment.baseUrls.ideasFake;
      constructor(private _http: Http){

      }

      addNewIdea(newIdea: Idea){
      }

      getIdeas(): Observable<Idea[]>{
           return this._http.get(this._ideaUrl)
      .map((response: Response) => <Idea[]>response.json())
      .catch(this.handleError);
      }

      deleteIdea(idea: Idea){
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
