import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Rx from 'RxJS';

import { IRegister } from 'interfaces/IRegister';
import * as actions from './register.action';
import { RegisterState } from './register.reducer';
import { RegisterService } from 'services/auth/register.service';
import { IErrorMessage } from 'shared/interfaces/IErrorMessage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private register: Rx.Observable<IRegister>;

  private login: string;
  private password: string; 
  private passwordCheck: string = "";

  public loginError: string = 'loginError';
  private loginErrorMessage: string = 'Такой логин уже существует';
  public passwordError: string = 'passwordError';
  private passwordErrorMessage: string = 'Пароли не совпадают';

  public errorMessage: any = {};

  constructor(private _registerSerivce: RegisterService, 
              private store: Store<RegisterState>) {
                console.log("Here");
                this.register = store.select(state => {
                  console.log(state);
                  return state.register;
                })
               }

  ngOnInit() {
  }

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

    this._registerSerivce.setData({
      logIn: this.login,
      password: this.password
    });
  }

}
