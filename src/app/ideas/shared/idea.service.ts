import { Injectable } from '@angular/core';


@Injectable()
export class IdeaService {

    constructor() {
    }
    
    getDummyIdeas = () => [
    {
      "photo": "assets/img/user01.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img01.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    },
    {
       "photo": "assets/img/user04.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img02.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    },
    {
       "photo": "assets/img/user02.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img03.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    },
    {
      "photo": "assets/img/user05.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img04.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    },
    {
       "photo": "assets/img/user03.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img05.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    },
    {
       "photo": "assets/img/user06.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img07.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    },
    {
       "photo": "assets/img/user06.png",
      "name": "Chrlie Smith",
      "banner": "assets/img/img06.png",
      "title":"Frozen Pizza",
      "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)"
    }
  ];
   
}