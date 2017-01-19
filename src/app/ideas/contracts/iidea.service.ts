import { Observable } from 'rxjs/Observable';
import { Idea,createIdea } from './../shared/idea.model';

export interface IIdeaService {
    addNewIdea(newIdea: Idea):void;
    getIdeas(): Observable<Idea[]>;
    deleteIdea(idea: Idea):void;

}