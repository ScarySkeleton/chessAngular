import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
 
import {RegisterComponent} from './register.component';
import {RegisterService} from 'app/services/auth/register.service';

class MockRegisterService { }

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerService: RegisterService;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [RegisterService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .overrideComponent(
      RegisterComponent,
      {set: {providers: [{provide: RegisterService, useClass: MockRegisterService}]}}
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
