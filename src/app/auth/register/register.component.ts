import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'RxJS';

import {IAppState} from 'shared/interfaces/IAppState';
import {IPopupState} from 'shared/interfaces/IPopupState';
import {showPopup, isnotShowPopup} from 'shared/components/popup/popup.action';
import {ErrorComponent} from 'shared/components/popup/error/error.component';
import {IRegisterState} from 'interfaces/IRegisterState';
import * as actions from './register.action';
import {RegisterService} from 'services/auth/register.service';
import {IErrorMessage} from 'shared/interfaces/IErrorMessage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  private nickname: string;
  private password: string; 
  private passwordCheck: string = "";

  private isPopupShown: boolean;
  private popup$: Rx.Subscription = this.store
    .subscribe(({popup}: {popup: IPopupState}) => {
      this.isPopupShown = popup.isShow;
    });

  public readonly loginError: string = 'loginError';
  private readonly loginErrorMessage: string = 'Такой логин уже существует';
  public readonly passwordError: string = 'passwordError';
  private readonly passwordErrorMessage: string = 'Пароли не совпадают';

  public errorMessage: any = {};

  constructor(private _registerSerivce: RegisterService,
    private store: Store<IAppState>) {}

  public ngOnDestroy() {
    this.popup$.unsubscribe();
  }

  /*
    Login
  */
  public NicknameInput({target: {value: nickname}}: {target: {value: string}}): void {
    this.nickname = nickname;
  }

  /*
    Password
  */
  public passwordInput({ target: { value: password } }): void {
    this.password = password;
    
    this.resetErrorMessage(this.passwordError);
    this.setPasswordCheckInitState();
  }

  public passwordInputCheck({ target: { value: passwordCheck } }): void {
    this.passwordCheck = passwordCheck;

    if(!this.checkIfPasswordsEqual()) {
      this.errorMessage[this.passwordError] = this.passwordErrorMessage;
      return;
    }
  
    this.resetErrorMessage(this.passwordError);
  }
  public setPasswordCheckInitState(): void {
    this.passwordCheck = "";
  }

  public checkIfPasswordsEqual(): boolean {
    return this.password === this.passwordCheck;
  }

  /*
    Common 
  */
  public resetErrorMessage(toReset): void {
    this.errorMessage[toReset] = "";
  }

  public onRegister(): void {
    if(!this.checkIfPasswordsEqual()) {

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
      }, 5000);

      this.setPasswordCheckInitState();
      return;
    }

    this._registerSerivce.register({
      nickname: this.nickname,
      password: this.password
    });
  }
}
