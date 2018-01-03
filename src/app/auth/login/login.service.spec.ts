import {LoginService} from './login.service';
import {testScheduler, createMarble} from 'shared/helpers/test';
import {Action} from '@ngrx/store';

import {TestScheduler} from 'RxJS/testing/TestScheduler';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

describe('LoginService', () => {

    let sut: LoginService;
    let mockStore: any;
    let mockFireBase: any;
    let mockFireBaseObservable: Observable<any>;
    let scheduler: TestScheduler;
    let actions: Subject<any>;

    function init(storeMarble: string = '-a-', storeVariable: any = {},
        fireMarble: string = '--b--', fireVariable: any = {}) {
        
        if(!storeMarble) {
            storeVariable = createMarble(storeVariable);
        }

        mockStore = scheduler.createHotObservable(storeMarble, storeVariable);
        mockStore.dispatch = jasmine.createSpy('dispatch')
            .and.callFake((action: Action) => actions.next(action));

        if(!fireMarble) {
            fireMarble = createMarble(fireVariable);
        }
        mockFireBaseObservable = scheduler.createHotObservable('---n---', {
            nickname: 'asd',
            password: 'asd'
        });
        mockFireBase = scheduler.createHotObservable(fireMarble, fireVariable);
        mockFireBase.getData = jasmine.createSpy('getData')
            .and.returnValue(
                mockFireBaseObservable
            ) 

        sut = new LoginService(mockStore, mockFireBase);
    }   

    beforeEach(() => {
        actions = new Subject();
        scheduler = testScheduler();
        init();
    })

    it('should be created', () => {
        expect(sut).toBeTruthy();
    });

    it('should get all users', () => {
        init('--s--', {
            c: 'allUsers'
        })

        scheduler.expectObservable(sut.allUsers$)
            .toBe('--s--', {
                c: 'allUsers'
            });

        scheduler.flush();
    })
})