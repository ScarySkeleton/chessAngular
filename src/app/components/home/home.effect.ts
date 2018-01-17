import {IAppState} from 'shared/interfaces/IAppState';
import {IApplication} from 'shared/interfaces/IApplication';
import {FireBaseService} from 'shared/services/firebase.service';
import {FETCH_NEW_APPLICATION} from './home.action';
import {APPLICATIONS} from 'app/assets/dbschema';

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from "rxjs/operators";

@Injectable()
export class HomeEffect {

    @Effect()
    private onApplicationRegister$: Observable<IApplication> = this.actions$
        .ofType(FETCH_NEW_APPLICATION)
        .switchMap((action) => {
            console.log(action);
            return this.fireBaseService.setData(APPLICATIONS, action);
        })

    constructor(private store: Store<IAppState>,
        private actions$: Actions,
        private fireBaseService: FireBaseService) { }
}
