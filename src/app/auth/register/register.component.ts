import {Component} from '@angular/core';

import {RegisterService} from 'services/auth/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private nickname: string;
  private password: string; 
  private passwordCheck: string = "";

  public readonly loginError: string = 'loginError';
  private readonly loginErrorMessage: string = 'Такой логин уже существует';
  public readonly passwordError: string = 'passwordError';
  private readonly passwordErrorMessage: string = 'Пароли не совпадают';

  public errorMessage: any = {};

  constructor(private _registerSerivce: RegisterService) {}

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
      this._registerSerivce.passwordsAreNotEqual();
      this.setPasswordCheckInitState();
      return;
    }

    this._registerSerivce.register({
      nickname: this.nickname,
      password: this.password
    });
  }
}
