import {IAppState} from 'shared/interfaces/IAppState';
import {IUser} from 'shared/interfaces/IUser';
import {IAction} from 'shared/interfaces/IAction';

import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

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
        Session
    */
    private readonly session$: Rx.Subscription = this.store
        .map(({session}) => session)
        .subscribe(session => {
            if(!this.isLogined) { // && session.user
                this.sessionUserData = session.user;
                this.isSessionActive = session.isSessionActive;

                this.logIn(session.user);
                return;
            }
        });

    private sessionUserData: IUser = this.getLoginedUser();
    public isSessionActive: boolean = this.isLogined; 

    /*
        Constructor
    */
    constructor(private cookieService: CookieService,
        private store: Store<IAppState>) {
    }

    public logIn(userData: object): void {
        this.cookieService.set('user', JSON.stringify(userData));
    }

    public logOut(): void {
        this.cookieService.delete('user');
        console.log('logout');
    }

    public get isLogined(): boolean {
        let user = this.cookieService.get('user');
        if(user) {
            return true;
        } else {
            return false;
        }
    }

    public getLoginedUser(): IUser {
        return this.cookieService.get('user') as IUser;
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
