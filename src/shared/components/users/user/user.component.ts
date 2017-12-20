import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {IUser} from 'shared/interfaces/IUser';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'shared-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {

  @Input() user: IUser;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user']) {
      this.user = changes['user'].currentValue as IUser
    }
  }
}
