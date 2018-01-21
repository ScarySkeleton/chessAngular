import {IAppState} from 'shared/interfaces/IAppState';
import {IApplication} from 'shared/interfaces/IApplication';
import {fetchNewApplication} from './home.action';
import {showPopup, isnotShowPopup} from 'shared/components/popup/popup.action';
import {IPopupState} from 'shared/interfaces/IPopupState';
import {ErrorComponent} from 'shared/components/popup/error/error.component';
import {TIME_TO_SHOW_POPUP_ERROR} from 'shared/components/popup/popup.dictionary';

import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

    constructor(private store: Store<IAppState>) {
    }

    public onApplicationError(errorReason: string,
        errorMessage: string,
        errorResolution: string): void {
            
        const popup: IPopupState = {
            title: errorReason,
            childComponent: ErrorComponent
        }

        this.store.dispatch(new showPopup(popup));
        setTimeout(() => 
            this.store.dispatch(new isnotShowPopup()), TIME_TO_SHOW_POPUP_ERROR);
    }

    public onRegisterApplication(application: IApplication): void {
        this.store.dispatch(new fetchNewApplication(application));
    }
}
