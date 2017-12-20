import { Component, OnInit, Input } from '@angular/core';

import {IUser} from 'shared/interfaces/IUser';

@Component({
  selector: 'shared-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
    console.log("user component", this.user);
  }

}
