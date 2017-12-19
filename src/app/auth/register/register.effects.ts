import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import {
    REGISTER_REQUEST,
    registerSuccess,
    registerFailure } from 'app/auth/register/register.action';


@Injectable()
class RegisterEffect {

    @Effect() 
    public register$ = this.actions$
        .ofType(REGISTER_REQUEST)
        //.do(action => console.log(action))
        

    constructor(private actions$: Actions) {}
}

export {RegisterEffect}
