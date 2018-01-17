import {IAppState} from 'shared/interfaces/IAppState';
import {IApplication} from 'shared/interfaces/IApplication';
import {fetchNewApplication} from './home.action';

import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

    constructor(private store: Store<IAppState>) {
    }

    public onRegisterApplication(application: IApplication): void {
        this.store.dispatch(new fetchNewApplication(application));
    }
}
