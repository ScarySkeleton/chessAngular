import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import {USERS} from 'assets/dbschema';
import {IFireBaseAction} from 'shared/interfaces/IFireBaseAction';
import {FireBaseService} from 'shared/services/firebase.service';

import {
    REGISTER_REQUEST,
    registerSuccess,
    registerFailure } from 'app/auth/register/register.action';


@Injectable()
class RegisterEffect {

    @Effect() 
    public register$ = this.actions$
        .ofType(REGISTER_REQUEST)
        .do(action => {
            try {
                const fbAction: IFireBaseAction = {
                    action: null,
                    successActionCallBack: registerSuccess,
                    failureActionCallBack: registerFailure,
                };
                
                console.log("effect", action);
                this.firebase.setData(USERS, action, )
            } catch(error) {

            }
        })    

    constructor(
        private actions$: Actions,
        private firebase: FireBaseService
    ) {}
}

export {RegisterEffect}
