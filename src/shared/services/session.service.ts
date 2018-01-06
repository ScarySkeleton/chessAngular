import {IAppState} from 'shared/interfaces/IAppState';
import {IUser} from 'shared/interfaces/IUser';
import {ISessionState} from 'shared/interfaces/ISessionState'
import * as sessionAction from 'shared/session/session.action';
import {navigateTo} from 'shared/store/global.action';
import {AuthService} from 'shared/services/auth.service';
import {sessionUserKey} from 'shared/common/data';
import {userAccountHomeLink, homeLink} from 'assets/pages/links';

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { IGlobalState } from 'interfaces/IGlobalState';

@Injectable()
export class SessionService {
    
    /*
        Session
    */
    private readonly session$: Rx.Subscription = this.store
        .map(({session}: {session: ISessionState}) => session)
        .subscribe(session => {

            let userCookieValue = this.get(sessionUserKey);
            // Session Start: begin
            if(!userCookieValue 
                && !session.isSessionActive
                && session.logInFetch
                && !session.logOutFetch
                && !session.isSessionLogoutSuccess) {
                this.set(sessionUserKey, JSON.stringify(session.user))
            }

            // Session LogOut: begin
            if(userCookieValue
                && session.isSessionActive
                && !session.logInFetch
                && session.logOutFetch
                && !session.isSessionLogoutSuccess) {
                    this.del(sessionUserKey);
                }
        });

    private sessionUserData: IUser;// = this.getLoginedUser();
    public isSessionActive: boolean;// = this.isLogined; 

    constructor(private store: Store<IAppState>,
        private cookieService: CookieService,
        private router: Router) {
    }

    public set(key: string, cookie: string): void {
        this.cookieService.set(key, cookie);
        this.store.dispatch(new sessionAction.userLogIn(JSON.parse(cookie)));
        this.router.navigate([userAccountHomeLink]);
        //this.store.dispatch(new navigateTo(userAccountHomeLink))
    }

    public del(key: string): void {
        this.cookieService.delete(key);
        this.store.dispatch(new sessionAction.userLogOut());
        this.router.navigate([homeLink]);
        //this.store.dispatch(new navigateTo(homeLink))
    }

    public get(key: string): string {
        return this.cookieService.get(key);
    }
}
