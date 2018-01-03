import {SpinnerComponent} from './spinner.component';
import {testScheduler} from 'shared/helpers/test';

import {TestScheduler} from 'RxJS/testing/TestScheduler';

describe('SpinnerComponent', () => {
  
  let sut: SpinnerComponent;
  let globalServiceMock: any;
  let schedule: TestScheduler;

  beforeEach(() => {
    schedule = testScheduler();

    globalServiceMock = jasmine.createSpy('globalServiceMock');
    globalServiceMock.globalState$ = schedule.createHotObservable('--a--');
    
    sut = new SpinnerComponent(globalServiceMock);
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
