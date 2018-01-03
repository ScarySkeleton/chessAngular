import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';

import {IAppState} from 'shared/interfaces/IAppState';
import {fetchAllUsers} from './login.action';
import {FireBaseService} from 'shared/services/firebase.service';

@Injectable()
export class LoginService {

    public allUsers$: Rx.Observable<any> = this.store
        .map(data => data);

    constructor(private store: Store<IAppState>,
        private firebase: FireBaseService) { }

    loadAllUsers(): void {
        //this.firebase.getData('Users').subscribe(res => console.log(res));
        this.store.dispatch(new fetchAllUsers()); 
    }


}
