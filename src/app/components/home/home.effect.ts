import {IAppState} from 'shared/interfaces/IAppState';
import {IApplication} from 'shared/interfaces/IApplication';
import {IAction} from 'interfaces/IAction';
import {FireBaseService} from 'shared/services/firebase.service';
import {FETCH_NEW_APPLICATION,
    fetchNewApplicationSuccess} from './home.action';
import {APPLICATIONS} from 'app/assets/dbschema';
// Popup
import {showPopup, isnotShowPopup} from 'shared/components/popup/popup.action';
import {IPopupState} from 'shared/interfaces/IPopupState';
import {SuccessComponent} from 'shared/components/popup/success/success.component';
import {TIME_TO_SHOW_POPUP_SUCCESS} from 'shared/components/popup/popup.dictionary';

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Store, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from "rxjs/operators";
import { fetchAllUsersFailure } from 'app/auth/login/login.action';

@Injectable()
export class HomeEffect {

    @Effect()
    private onApplicationRegister$: Observable<Action> = this.actions$
        .ofType(FETCH_NEW_APPLICATION)
        .switchMap((action: IAction) => this.fireBaseService.setData(APPLICATIONS, action.payload))
        .map(response => {
            const popup: IPopupState = {
                title: 'Заявка успешно зарегистрирована.',
                childComponent: SuccessComponent
            };

            this.store.dispatch(new showPopup(popup));
            setTimeout(() => {
                this.store.dispatch(new isnotShowPopup());
            }, TIME_TO_SHOW_POPUP_SUCCESS);
            
            return new fetchNewApplicationSuccess()
        })

    constructor(private store: Store<IAppState>,
        private actions$: Actions,
        private fireBaseService: FireBaseService) { }
}
