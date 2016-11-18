
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Idea } from './idea.model';

let ideasUrl = environment.baseUrls.ideas;

@Injectable()
export class IdeaService {

    constructor(private http: Http) {

    }

    getIdeas(){
        return <Observable<Idea[]>> this.http.get(ideasUrl)
        .map(response=>this.extractData<Idea[]>(response));
        //ToDo Handle exception condition here
    }

    private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }
}