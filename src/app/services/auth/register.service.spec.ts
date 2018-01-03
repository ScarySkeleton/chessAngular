import { TestBed, inject } from '@angular/core/testing';
import {TestScheduler} from 'RxJS/testing/TestScheduler';
import {Action} from '@ngrx/store';
import {Subject} from 'rxjs/Subject';

import {testScheduler} from 'shared/helpers/test';
import { RegisterService } from './register.service';

describe('RegisterService', () => {

  let sut: RegisterService;
  let storeMock: any;
  let actions: Subject<Action>;
  let scheduler: TestScheduler;

  function init(storeMariable: string = "---", storeVariable: any = {}) {
    if(!storeMariable) {
      storeMariable = `-${
        Object.keys(storeVariable).join('-')
      }-`;
    }

    storeMock = scheduler.createHotObservable(storeMariable, storeVariable);
    storeMock.dispatch = jasmine.createSpy('dispatch')
      .and.callFake((action: Action) => actions.next(action));
    
    sut = new RegisterService(storeMock);
  }

  beforeEach(() => {
    scheduler = testScheduler();
    actions = new Subject();
    init();
  }); 

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });


  it('isPopupShown should be false', () => {
    expect(sut.isPopupShown).toBeFalsy(); 
  })
});
