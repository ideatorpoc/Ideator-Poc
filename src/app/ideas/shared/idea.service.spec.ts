
import { async, inject, TestBed } from '@angular/core/testing';
import {MockBackend,MockConnection } from '@angular/http/testing';
import {HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Idea } from './idea.model';

import { FakeIdeaService } from './../../../testing/fake-idea.service';

const makeIdeasData= ()=>[  
    {
         "photo": "assets/img/Carter-Wigell.png",
        "name":"Ronnie",
        "banner": "assets/img/img01.png",
         "title":"Frozen Pizza",
         "description":"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
         "likescount":10,
         "commentscount":15        
    } , 
    {
        id:1,
        photo:"assets/img/Carter-Wigell.png",
        name:"Ronnie",
       banner:"assets/img/img01.png",
       title:"Frozen Pizza",
       description:"If you'd like to contribute",
       likescount:5,
       commentscount:10
    },
   /* {
        id:2,
       photo: "assets/img/charlie-smith.png",
      name: "Charlie Smith",
      banner: "assets/img/img02.png",
      title:"Frozen Pizza",
      description:"If you'd like to contribute, you must follow our contributing guidelines. You can look through the issues (which should be up-to-date on)",
      likescount:10,
      commentscount:15
    }*/
] as Idea[];


describe('Ideas Service Test',()=>{
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[HttpModule, 
             ],
            providers:[
                 FakeIdeaService,
                { provide: XHRBackend, useClass: MockBackend },
             
            ]
        }).compileComponents();
    }));

    it('can instantiate service when inject service',
     inject([FakeIdeaService], (service: FakeIdeaService) => {
      expect(service instanceof FakeIdeaService).toBe(true);
  })); 

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http should be provided');
    let service = new FakeIdeaService(http);
    expect(service instanceof FakeIdeaService).toBe(true, 'new service should be ok');
  }));

  it('can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
  }));

  it('test should wait for Idea Service.getIdeas',
  async(inject([FakeIdeaService], (service: FakeIdeaService) => {
     let fakeIdeas = makeIdeasData();
     
  service.getIdeas().subscribe(      
    value => expect(value.length).toBe(fakeIdeas.length,'should have expected ideas')
  );
  console.log(fakeIdeas.length);
  
})));

  describe('Idea List',()=>{
      let backend: MockBackend;
      let fakeService: FakeIdeaService;
      let fakeIdeas: Idea[];
      let response: Response;

      beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
        backend = be;
        fakeService = new FakeIdeaService(http);
        fakeIdeas = makeIdeasData();
        let options = new ResponseOptions({status: 200, body: {data: fakeIdeas}});
        response = new Response(options);
      }));

      it('should have expected fake ideas (then)', async(inject([], () => {
          let serviceReturnedIdeas:Idea[]= new Array();
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
        expect(fakeService).not.toBeNull('Is Valid Fake Service');
        fakeService.getIdeas().subscribe(ideas=>serviceReturnedIdeas=ideas);
        expect(serviceReturnedIdeas).not.toBeUndefined();
        console.log(serviceReturnedIdeas);
            
      })));

  });

});