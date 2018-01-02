import { Component, SimpleChanges, OnInit, OnChanges, Input } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {IUser} from 'shared/interfaces/IUser';

@Component({
  selector: 'chess-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {

  @Input() user: IUser;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user']) {
      this.user = changes['user'].currentValue as IUser;
    }
  }
}
