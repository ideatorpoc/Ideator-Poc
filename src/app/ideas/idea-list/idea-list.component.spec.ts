

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MaterialModule} from '@angular/material';

import { IdeaListComponent } from './idea-list.component';
import { Idea,createIdea } from './../shared/idea.model';
import { IdeaService } from './../shared/idea.service';


import { FakeIdeaService } from './../../../testing/fake-idea.service';
import { AuthenticationService } from './../../shared/authentication.service';
import { IdeasRoutingModule } from './../ideas-routing.module';


describe('IdeaListComponent',()=>{
   let component: IdeaListComponent;
   let fixture: ComponentFixture<IdeaListComponent>;
   let componentIdeaService: IdeaService; // the actually injected service
   let ideaService: IdeaService; // the TestBed injected service
   beforeEach(async(()=>{
     TestBed.configureTestingModule({
       imports:[MaterialModule.forRoot()],
       declarations: [ IdeaListComponent ],
        schemas:[NO_ERRORS_SCHEMA],
       providers:    [ {provide: IdeaService, useValue: FakeIdeaService } ]
       
     }).compileComponents();
      
      fixture = TestBed.createComponent(IdeaListComponent);
      component    = fixture.componentInstance;

       // IdeaService actually injected into the component
    ideaService = fixture.debugElement.injector.get(IdeaService);
    componentIdeaService = ideaService;
    // UserService from the root injector
    ideaService = TestBed.get(IdeaService);
   }));

    it('should inject the component\'s IdeaService instance',
    async(inject([IdeaService], (service: IdeaService) => {
    expect(service).toBe(componentIdeaService);
    })));

   
     it('TestBed and Component IdeaService should be the same', () => {
    expect(ideaService === componentIdeaService).toBe(true);
    });  
    
});


/*describe('IdeaListComponent', () => {
  let component: IdeaListComponent;
  let fixture: ComponentFixture<IdeaListComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule,IdeasRoutingModule],
      declarations: [ IdeaListComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[IdeaService,AuthenticationService]
      //Need to add fake-idea service provider instead of the real idea IdeaService.
    //  providers:[FakeIdeaService
       // { provide:IdeaService,useClass: FakeIdeaService }
     //   ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/
