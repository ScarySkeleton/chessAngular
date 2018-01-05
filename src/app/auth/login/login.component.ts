import {Component, OnInit} from '@angular/core';
import * as Rx from 'rxjs';

import {LoginService} from 'app/auth/login/login.service';
import {IUser} from 'shared/interfaces/IUser';
import {timeToHideInfoMessage} from 'shared/common/time';

@Component({
  selector: 'chess-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData: string;
  public passwordData: string;

  public allUsers: Array<IUser>;
  public readonly allUsers$: Rx.Subscription | object = this.loginService
    .allUsers$
    .map(users => Object.keys(users).map(key => users[key]))
    .map(users => users.filter(user => !!user.nickname))
    .subscribe(users => this.allUsers = users);

  public loginMessage: string;
  public readonly incorrectEnteringLoginMessage: string =
    "Аккаунта с таким логином не существует.";
  public readonly incorrectLoginMessage: string = 
    `Извините, аккаунта с таким логином в системе не обнаруженно.
     Попробуйте еще раз либо свяжитесь с администрацией, спасибо.`;

  public passwordMessage: string;
  public readonly passwordIncorrectNumbersToFalse: number = 2;
  public passwordInccorectCount: number = 0;
  public readonly incorrectPasswordMessage: string = 
    "Пароль неправильный, попробуйте еще раз."
  public readonly incorrectPasswordTooManyTimesMessage: string = 
    `Пароль неправильный.
    Обратите внимание на "Caps Lock" и расскладку клавиатуры.
    Если Вы забыли пароль, тогда свяжитесь, пожалуйста, с администрацией.`;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loadAllUsers();
  }

  clear(): void {
    this.loginData = "";
    this.passwordData = "";
  }

  preLoginCheck({target: {value: login}}): void {
    this.loginMessage = this.allUsers 
      && this.allUsers
        .map(user => user.nickname)
        .includes(login)
      ? ""
      : this.incorrectEnteringLoginMessage;

    // Clear password state
    this.clearPasswordErrorState();
    this.passwordData = "";
  }

  clearPasswordErrorState() {
    this.passwordInccorectCount = 0;
    this.passwordMessage = "";
  }

  enter() {
    if(this.loginData && this.passwordData) {

      let userArrayId = this.allUsers
        .map(user => user.nickname)
        .indexOf(this.loginData);

      if(userArrayId === -1) {
        this.loginMessage = this.incorrectLoginMessage;
        return;
      }
      
      if(this.allUsers[userArrayId].password !== this.passwordData) {
        this.passwordInccorectCount += 1;

        this.passwordMessage = this.passwordInccorectCount < this.passwordIncorrectNumbersToFalse
          ? this.incorrectPasswordMessage
          : this.incorrectPasswordTooManyTimesMessage;
      } else {
        this.clearPasswordErrorState();
      }
    }
  }
}
