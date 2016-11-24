
import { Injectable } from '@angular/core';
import { Idea } from './idea.model';

@Injectable()
export class IdeaService {

    ideas:Idea[];
    constructor() {
      this.ideas= this.getDummyIdeas();
    }

    addNewIdea(newIdea:Idea){
      newIdea.photo='assets/img/Carter-Wigell.png';
      newIdea.banner='assets/img/img01.png';
      newIdea.title='Frozen Pizza';
      newIdea.likescount=10;
      newIdea.commentscount=15;
      this.ideas.push(newIdea);
    }
    
    getDummyIdeas = () => [
    {
      "photo": "assets/img/Carter-Wigell.png",
      "name": "Carter Wigell",
      "banner": "assets/img/img01.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    },
    {
       "photo": "assets/img/charlie-smith.png",
      "name": "Charlie Smith",
      "banner": "assets/img/img02.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    },
    {
       "photo": "assets/img/bindi-karia.png",
      "name": "Bindi Karia",
      "banner": "assets/img/img03.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    },
    {
      "photo": "assets/img/aber.png",
      "name": "Aber Whitcomb",
      "banner": "assets/img/img04.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    },
    {
       "photo": "assets/img/Julie-Trell.png",
      "name": "Julie Trell",
      "banner": "assets/img/img05.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    },
    {
       "photo": "assets/img/Ray-Arata.png",
      "name": "Ray Arata",
      "banner": "assets/img/img07.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    },
    {
       "photo": "assets/img/user06.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img06.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      "likescount":10,
      "commentscount":15
    }
  ];
   
}