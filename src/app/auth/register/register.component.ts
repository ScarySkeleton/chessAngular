import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'RxJS';

import {IRegister} from 'interfaces/IRegister';
import * as actions from './register.action';
import {IRegisterState} from './register.reducer';
import {RegisterService} from 'services/auth/register.service';
import {IErrorMessage} from 'shared/interfaces/IErrorMessage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private login: string;
  private password: string; 
  private passwordCheck: string = "";
  public registerSubscription: Rx.Subscription = this._registerSerivce.register$
    .subscribe((register: IRegisterState) => console.log(register));  

  public readonly loginError: string = 'loginError';
  private readonly loginErrorMessage: string = 'Такой логин уже существует';
  public readonly passwordError: string = 'passwordError';
  private readonly passwordErrorMessage: string = 'Пароли не совпадают';

  public errorMessage: any = {};

  constructor(private _registerSerivce: RegisterService) { }

  /*
    Login
  */
  loginInput({ target: { value: login } }) {
    this.login = login;
  }

  /*
    Password
  */
  passwordInput({ target: { value: password } }) {
    this.password = password;
    
    this.resetErrorMessage(this.passwordError);
    this.setPasswordCheckInitState();
  }

  passwordInputCheck({ target: { value: passwordCheck } }) {
    this.passwordCheck = passwordCheck;

    if(!this.checkIfPasswordsEqual()) {
      this.errorMessage[this.passwordError] = this.passwordErrorMessage;
      return;
    }
  
    this.resetErrorMessage(this.passwordError);
  }
  setPasswordCheckInitState() {
    this.passwordCheck = "";
  }

  checkIfPasswordsEqual() {
    return this.password === this.passwordCheck;
  }

  /*
    Common 
  */
  resetErrorMessage(toReset) {
    this.errorMessage[toReset] = "";
  }

  onRegister() {
    if(!this.checkIfPasswordsEqual()) {
      // TODO
      // Show, that the unnable to register because the error
      return;
    }

    this._registerSerivce.register({
      logIn: this.login,
      password: this.password
    });
  }

}
