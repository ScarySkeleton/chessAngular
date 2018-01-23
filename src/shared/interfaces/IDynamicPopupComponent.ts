import {IAppState} from 'shared/interfaces/IAppState';
import {IPopupState} from 'shared/interfaces/IPopupState';

import {Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs';
import 'rxjs/operators/startWith';

export abstract class IDynamicPopupComponent {

    public message$: Observable<string> = this.store
        .map(({popup: {message}}: {popup: {message?: string}}) => message)

    public solution$: Observable<string> = this.store
        .map(({popup: {solution}}: {popup: {solution?: string}}) => solution);

    constructor(private store: Store<IAppState>) {
    }
}
