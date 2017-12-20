import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {IAppState} from 'shared/interfaces/IAppState';

@Injectable()
export class DispatchService {

    constructor(
        private store: Store<IAppState>
    ) {}

    dispatch(action) {
        this.store.dispatch(action());
    }
}
