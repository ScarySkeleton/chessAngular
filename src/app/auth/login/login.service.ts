import {IAppState} from 'shared/interfaces/IAppState';
import {IUser} from 'shared/interfaces/IUser';
import {fetchAllUsers} from './login.action';
import * as session from 'shared/session/session.action';

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';

@Injectable()
export class LoginService {

    constructor(private store: Store<IAppState>) {
    }

    public loadAllUsers(): void {
        this.store.dispatch(new fetchAllUsers()); 
    }

    public logInUser(userData: IUser): void {
        this.store.dispatch(new session.userLogInFetch(userData))
    }
}
