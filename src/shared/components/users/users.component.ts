import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IUser} from 'shared/interfaces/IUser';
import {Subscription} from 'rxjs/Subscription';

import {isFetching, isnotFetching} from 'shared/store/global.action';
import {FireBaseService} from 'shared/services/firebase.service';
import {USERS} from 'assets/dbschema';

@Component({
  selector: 'shared-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<IUser>;

  constructor(public dbService: FireBaseService) { }

  ngOnInit(): void {
    this.users$ = this.getUsers(USERS);
  }

  getUsers(entity: string): Observable<IUser>  {
    return this.dbService
      .getData(entity);
  }
}
