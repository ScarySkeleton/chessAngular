import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Store} from '@ngrx/store';

import {IAppState} from 'shared/interfaces/IAppState';
import {RegisterComponent} from './register.component';
import {RegisterService} from 'app/services/auth/register.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let regiterService: RegisterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    RegisterService = new RegisterService(new Store<IAppState>());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
