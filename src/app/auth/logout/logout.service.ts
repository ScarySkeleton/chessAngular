import {IAppState} from 'shared/interfaces/IAppState';
import {userLogOutFetch} from 'shared/session/session.action';

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable() 
export class LogoutService {
    
    constructor(private store: Store<IAppState>) {
    }

    logOut() {
        this.store.dispatch(new userLogOutFetch());
    }
}
