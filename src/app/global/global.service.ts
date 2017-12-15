import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {IAction} from 'abstract/Action';
import {IAppState} from 'interfaces/IAppState'
import {IGlobalState} from 'global/global.reducer';

@Injectable()
export class GlobalService {

    public readonly globalState$: Observable<any> = this.store;

    constructor(public store: Store<IAppState>) {}
}
