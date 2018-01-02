import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as Rx from 'rxjs';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/do';

import {IAppState} from 'shared/interfaces/IAppState';
import {IAction} from 'shared/interfaces/IAction';
import {FireBaseService} from 'shared/services/firebase.service';
import * as actions from './login.action';
import {USERS} from 'assets/dbschema';

@Injectable()
export class LoginEffect {

    @Effect()
    public getUsers$: Rx.Observable<any> = this.actions$
         .ofType(actions.FETCH_ALL_USERS)
         .switchMap(() => 
                this.fireBaseService.getData(USERS)
                // .map(data => {
                //     console.log(data);
                //     this.store.dispatch(new actions.fetchAllUsersSuccess(data))
                // })
                .do(data => {
                    console.log(data)
                    return this.store.dispatch(new actions.fetchAllUsersSuccess(data))
                })
                .catch(() => Rx.Observable.of(this.store.dispatch(new actions.fetchAllUsersFailure())))

            //return Rx.Observable.of(new actions.fetchAllUsers());
        );

    constructor(private store: Store<IAppState>,
        private actions$: Actions,
        private fireBaseService: FireBaseService) { }

}
