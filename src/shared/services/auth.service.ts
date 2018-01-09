import {IAppState} from 'shared/interfaces/IAppState';
import {IUser} from 'shared/interfaces/IUser';
import {IAction} from 'shared/interfaces/IAction';
import {navigateTo} from 'shared/store/global.action';
import {userAccountHomeLink, homeLink} from 'assets/pages/links';
import {SessionService} from 'shared/services/session.service';
import {sessionUserKey} from 'shared/common/data';
import * as sessionAction from 'shared/session/session.action';

import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    /*
        User
    */
    private readonly allUsers$: Rx.Subscription | object = this.store
        .map(({login: {users}}) => users)
        .map(users => Object.keys(users).map(key => users[key]))
        .map(users => users.filter(user => !!user.nickname))
        .subscribe((users: Array<IUser>) => {
            this.allUsers = users;
            this.allUsersLogin = users.map(user => user.nickname);
        });

    private allUsers: Array<IUser>;
    public allUsersLogin: Array<string> = [];

    /*
        Constructor
    */
    constructor(private sessionService: SessionService,
        private store: Store<IAppState>) {
    }

    public get isLogined(): boolean {
        let user = this.sessionService.get(sessionUserKey);
        if(user) {
            return true;
        } else {
            return false;
        }
    }

    public getLoginedUser(): IUser {
        return JSON.parse(this.sessionService.get(sessionUserKey)) as IUser;
    }

    public getUserArrayId(userLogin: string): number {
        return this.allUsersLogin.indexOf(userLogin);
    }

    public checkUserExist(userLogin: string): boolean {
        return this.allUsersLogin.includes(userLogin);
    }

    public checkUserPassword(userArrayId: number, password: string): boolean {
        return this.allUsers[userArrayId].password !== password
    }
}
