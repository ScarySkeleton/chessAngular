import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {IAction} from 'interfaces/IAction';
import {IAppState} from 'interfaces/IAppState'
import {IGlobalState} from 'interfaces/IGlobalState';

@Injectable()
export class GlobalService {

    public readonly globalState$: Observable<any> = this.store;

    constructor(public store: Store<IAppState>) {}
}
