import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Store} from '@ngrx/store';

import {IAction} from 'shared/interfaces/IAction';
import {IAppState} from 'shared/interfaces/IAppState';
import {USERS} from 'assets/dbschema';
import * as globalAction from 'shared/store/global.action';
import {IFireBaseAction} from 'shared/interfaces/IFireBaseAction';
import {FireBaseService} from 'shared/services/firebase.service';

import {REGISTER_REQUEST,
    registerSuccess,
    registerFailure} from 'app/auth/register/register.action';


@Injectable()
class RegisterEffect {

    @Effect() 
    public register$ = this.actions$
        .ofType(REGISTER_REQUEST)
        .map((action: IAction) => action.payload)
        .do(() => this.store.dispatch(new globalAction.isFetching()))
        .switchMap(data => this.firebase.setData(USERS, data)
            .catch(() => false)
        )
        .do(() => this.store.dispatch(new globalAction.isnotFetching()))
        .map(response => {
            if(!!response) {
                return registerSuccess();
            }
            else {
                return registerFailure();
            }
        })
            
    constructor(
        private store: Store<IAppState>,
        private actions$: Actions,
        private firebase: FireBaseService
    ) {}
}

export {RegisterEffect}
