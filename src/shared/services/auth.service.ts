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
            this.sessionUserData = session.user;
            this.isSessionActive = session.isSessionActive;

            if(session.user) {
                this.logIn(session.user);
            }
            // } else {
            //     this.logOut();
            // }
        });

    private sessionUserData: IUser;
    public isSessionActive: boolean; 


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
        //this.logIn = {nickname: "asdasd", password: "asddasd"};   
        let user = this.cookieService.get('user');
        if(user) {
            console.log("true");
            return true;
        } else {
            console.log("false");
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
