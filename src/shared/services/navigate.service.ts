import {IAppState} from 'shared/interfaces/IAppState';

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';

@Injectable()
export class NavigateService {

    // private readonly navigation$: Rx.Subscription = this.store
    //     .map(({global: {navigateTo}}: {global: {navigateTo: string}}) => {
    //         console.log(navigateTo);
    //         return navigateTo;
    //     })
    //     .do(to => {
    //         console.log(to);
    //         this.router.navigate([to]);
    //     })
    //     .subscribe(() => console.log("subs"));

    constructor(private store: Store<IAppState>) {
    }
}
