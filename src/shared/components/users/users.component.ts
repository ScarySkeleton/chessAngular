import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {USERS, DATA} from 'assets/dbschema';
import {IUser} from 'shared/interfaces/IUser';

@Component({
  selector: 'shared-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<IUser[]>;

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    console.log(typeof this.getUsers(USERS))
    this.users$ = this.getUsers(USERS);
    console.log(this.users$);
  }

  getUsers(entity: string): any {
    return this.db
      .object(DATA)
      .snapshotChanges()
      .subscribe(data => {
        console.log(data.payload.val()[entity]);
        return data.payload.val()[entity]
      });
  }
}
