import {Component, OnInit} from '@angular/core';
import * as Rx from 'rxjs';

import {LoginService} from 'app/auth/login/login.service';

@Component({
  selector: 'chess-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData: string;
  public passwordData: string;

  public allUsers: Array<string> | object;
  public readonly allUsers$: Rx.Subscription | object = this.loginService
    .allUsers$
    .map(users => Object.keys(users).map(key => users[key].nickname))
    .map(users => users.filter(user => !!user))
    .subscribe(users => this.allUsers = users);

  public loginMessage: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loadAllUsers();
  }

  clear() {
    this.loginData = "";
    this.passwordData = "";
  }

  preLoginCheck({target: {value: login}}) {
    this.loginMessage = this.allUsers 
      && (this.allUsers as Array<string>).includes(login)
      ? ""
      : "No such login in the system";
  }

  enter() {
    
  }
}
