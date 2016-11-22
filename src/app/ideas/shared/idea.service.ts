import { Injectable } from '@angular/core';


@Injectable()
export class IdeaService {

    constructor() {
    }
    
    getDummyIdeas = () => [
    {
      "photo": "myphoto1.png",
      "name": "firstname",
      "banner": "mybanner1.png",
      "title":"first",
      "description":"first description"
    },
    {
       "photo": "myphoto2.png",
      "name": "secondname",
      "banner": "mybanner2.png",
      "title":"second",
      "description":"second description"
    }
  ];
   
}