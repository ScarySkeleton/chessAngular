import {Injectable, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'rxjs';

import {IAppState} from 'interfaces/IAppState';
import {IPopupState} from 'shared/interfaces/IPopupState';
import {IRegisterState} from 'shared/interfaces/IRegisterState'
import * as registerAction from 'app/auth/register/register.action';
import {showPopup, isnotShowPopup} from 'shared/components/popup/popup.action';
import {ErrorComponent} from 'shared/components/popup/error/error.component';

@Injectable()
export class RegisterService implements OnDestroy {

  public isPopupShown: boolean = false;
  private popup$: Rx.Subscription = this.store
    .subscribe(({popup}: {popup: IPopupState}) => {
      this.isPopupShown = popup.isShow;
    });

  constructor(private store: Store<IAppState>) { }

  public ngOnDestroy() {
    this.popup$.unsubscribe();
  }

  register(data): void {
    this.store.dispatch(registerAction.registerRequest(data));
  }

  passwordsAreNotEqual(): void {
    // Show popup
    const popup: IPopupState = {
      isShow: true,
      title: "Пароли не совпадают, попробуйте еще раз.",
      childComponent: ErrorComponent
    }

    this.store.dispatch(new showPopup(popup));

    // Hide popup after 5s
    setTimeout(() => {
      if(this.isPopupShown) {
        this.store.dispatch(new isnotShowPopup());
      }
    }, 3500);
  }
}
