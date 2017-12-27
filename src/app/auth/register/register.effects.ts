import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Store} from '@ngrx/store';

import {IAction} from 'shared/interfaces/IAction';
import {IAppState} from 'shared/interfaces/IAppState';
import {USERS} from 'assets/dbschema';
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
        .switchMap(data => this.firebase.setData(USERS, data, null)
            .do(() => registerSuccess())
            .catch(() => Observable.of(registerFailure())))
        
        
        
                    // .map(() => {
                    //     console.log("MAP");
                    //     this.store.dispatch(registerSuccess())
                    //     console.log("MAP MAP");
                    // })
                    // .catch(() => { 
                    //     console.log("CATCH");
                    //     this.store.dispatch(registerFailure())
                    //     console.log("catch catch");
                    // }))

    constructor(
        private store: Store<IAppState>,
        private actions$: Actions,
        private firebase: FireBaseService
    ) {}
}

export {RegisterEffect}
