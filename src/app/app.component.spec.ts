/* tslint:disable:no-unused-variable */

import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('App: IdeatorPoc', () => {
  let component:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });

  it('should create the app', async(() => {
     expect(component).toBeTruthy();
  }));

  it('should should have default theme', async(()=>{
      expect(component.theme).toEqual('deeppurple-amber');
  }));

  it('it should have a different theme',async(()=>{
     component.theme='indigo-pink';
    fixture.detectChanges();
    expect(component.theme).toEqual('indigo-pink');
  }));
});


