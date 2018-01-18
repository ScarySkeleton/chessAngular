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
import {ErrorComponent} from 'shared/components/popup/error/error.component';
import {TIME_TO_SHOW_POPUP_ERROR,
    TIME_TO_SHOW_POPUP_SUCCESS} from 'shared/components/popup/popup.dictionary';

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Store, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from "rxjs/operators";
import {setTimeout} from 'timers';

@Injectable()
export class HomeEffect {

    @Effect()
    private onApplicationRegister$: Observable<Action> = this.actions$
        .ofType(FETCH_NEW_APPLICATION)
        .switchMap((action: IAction) => this.fireBaseService.setData(APPLICATIONS, action.payload))
        .map(response => {
            const popup: IPopupState = {
                title: 'Заявка успешно зарегистрирована.',
                childComponent: ErrorComponent
            };

            new showPopup(popup);
            setTimeout(() => {
                new isnotShowPopup();
            }, TIME_TO_SHOW_POPUP_SUCCESS);
            
            return new fetchNewApplicationSuccess()
        })
        .catch(error => {
            const popup: IPopupState = {
                title: 'Произошла ошибка при отправке данных, попробуйте позже.',
                childComponent: ErrorComponent
            };

            new showPopup(popup);
            return setTimeout(() => {
                return new isnotShowPopup();
            }, TIME_TO_SHOW_POPUP_ERROR);
        })

    constructor(private store: Store<IAppState>,
        private actions$: Actions,
        private fireBaseService: FireBaseService) { }
}
