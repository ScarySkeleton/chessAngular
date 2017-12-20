import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as Rx from 'RxJS';

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

  private login: string;
  private password: string; 
  private passwordCheck: string = "";

  // Observable
  //public registerSubscription: Rx.Subscription = this._registerSerivce.register$
  //  .subscribe((register: IRegisterState) => console.log(register));

  public readonly loginError: string = 'loginError';
  private readonly loginErrorMessage: string = 'Такой логин уже существует';
  public readonly passwordError: string = 'passwordError';
  private readonly passwordErrorMessage: string = 'Пароли не совпадают';

  public errorMessage: any = {};

  constructor(private _registerSerivce: RegisterService) { }

  public ngOnDestroy() {
    //this.registerSubscription.unsubscribe();
  }

  /*
    Login
  */
  public loginInput({ target: { value: login }}: { target: { value: string }}): void {
    this.login = login;
  }

  /*
    Password
  */
  passwordInput({ target: { value: password } }): void {
    this.password = password;
    
    this.resetErrorMessage(this.passwordError);
    this.setPasswordCheckInitState();
  }

  passwordInputCheck({ target: { value: passwordCheck } }): void {
    this.passwordCheck = passwordCheck;

    if(!this.checkIfPasswordsEqual()) {
      this.errorMessage[this.passwordError] = this.passwordErrorMessage;
      return;
    }
  
    this.resetErrorMessage(this.passwordError);
  }
  setPasswordCheckInitState(): void {
    this.passwordCheck = "";
  }

  checkIfPasswordsEqual(): boolean {
    return this.password === this.passwordCheck;
  }

  /*
    Common 
  */
  resetErrorMessage(toReset): void {
    this.errorMessage[toReset] = "";
  }

  onRegister(): void {
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
