import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TestScheduler} from 'RxJS/testing/TestScheduler';
import {Action} from '@ngrx/store';

import { PopupComponent } from './popup.component';
import {testScheduler} from 'shared/helpers/test';
import {Subject} from 'rxjs/Subject';

describe('PopupComponent', () => {
 
  let sut: PopupComponent;
  let scheduler: TestScheduler;
  let storeMock: any;
  let factoryMock: any;
  let actions: Subject<Action>;

  function init(storeMariable: string = "---", storeVariable: any = {}) {
    if(!storeMariable) {
      storeMariable = `-${
        Object.keys(storeVariable).join('-')
      }-`;
    }

    storeMock = scheduler.createHotObservable(storeMariable, storeVariable);
    storeMock.dispatch = jasmine.createSpy('dispatch')
      .and.callFake((action: Action) => actions.next(action));

    factoryMock = jasmine.createSpy('componentFactoryResolver');
    factoryMock.resolveComponentFactory = jasmine.createSpy('resolveComponentFactory');

    sut = new PopupComponent(storeMock, factoryMock);
  }

  beforeEach(() => {
    scheduler = testScheduler();
    actions = new Subject();
    init();
  })

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
