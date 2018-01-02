import {Component, OnInit} from '@angular/core';

import {LoginService} from 'app/auth/login/login.service';

@Component({
  selector: 'chess-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData: string;
  public passwordData: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    //this.loginService.loadAllUsers();
  }

  clear() {
    this.loginData = "";
    this.passwordData = "";
  }

  preLoginCheck({target: {value: login}}) {
    console.log(login);
  }

  enter() {
    this.loginService.loadAllUsers();
  }
}
