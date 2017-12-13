import { Component, OnInit } from '@angular/core';

import { RegisterService } from 'services/auth/register.service';
import { IErrorMessage } from 'shared/interfaces/IErrorMessage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private login: string;
  private password: string; 
  private passwordCheck: string = "";

  public loginError: string = 'loginError';
  private loginErrorMessage: string = 'Такой логин уже существует';
  public passwordError: string = 'passwordError';
  private passwordErrorMessage: string = 'Пароли не совпадают';

  public errorMessage: any = {};

  constructor(private _registerSerivce: RegisterService) { }

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

    if(this.password !== this.passwordCheck) {
      this.errorMessage[this.passwordError] = this.passwordErrorMessage;
      return;
    }
  
    this.resetErrorMessage(this.passwordError);
  }
  setPasswordCheckInitState() {
    this.passwordCheck = "";
  }

  /*
    Common 
  */
  resetErrorMessage(toReset) {
    this.errorMessage[toReset] = "";
  }

  register() {
    
  }

}
